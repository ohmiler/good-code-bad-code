import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { test } from "node:test";
import {
  analyzeContentQualityItem,
  summarizeContentQuality,
  type ContentQualityItem,
} from "../../lib/content/quality-rules";

const execFileAsync = promisify(execFile);
const packageJsonPath = path.join(process.cwd(), "package.json");
const guidelinesPath = path.join(process.cwd(), "docs", "content-guidelines.md");

test("content quality rules separate hard errors from polish warnings", () => {
  const items: ContentQualityItem[] = [
    {
      source: "content/example/topic.mdx",
      field: "metadata.summary",
      kind: "lesson-copy",
      language: "en",
      text: "TODO explain this later.",
    },
    {
      source: "lib/i18n/translations.ts",
      field: "lessonThaiTranslations.example.reviewNotes[0]",
      kind: "localized-copy",
      language: "th",
      text: "จัดการข้อมูลให้เหมาะสมและชัดเจน",
    },
  ];

  const issues = items.flatMap(analyzeContentQualityItem);
  const summary = summarizeContentQuality(issues);

  assert.equal(summary.errorCount, 1);
  assert.equal(summary.warningCount, 1);
  assert.deepEqual(
    issues.map((issue) => issue.code),
    ["placeholder-copy", "vague-copy"],
  );
});

test("content quality rules allow concrete real-work copy", () => {
  const issues = analyzeContentQualityItem({
    source: "content/javascript/promise-concurrency.mdx",
    field: "reviewNotes[0]",
    kind: "review-notes",
    language: "en",
    text: "The good version limits concurrent requests so one slow API does not flood the upstream service or hide partial failures.",
  });

  assert.deepEqual(issues, []);
});

test("qa:content script is registered and produces a dashboard", async () => {
  const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8")) as {
    scripts?: Record<string, string>;
  };

  assert.match(
    packageJson.scripts?.["qa:content"] ?? "",
    /scripts\/content-qa\.ts/,
  );

  const { stdout } = await execFileAsync("cmd.exe", ["/c", "npm.cmd", "run", "qa:content"], {
    cwd: process.cwd(),
  });

  assert.match(stdout, /Content QA/);
  assert.match(stdout, /Track\s+Lessons\s+Thai\s+Comments\s+Flags/);
  assert.match(stdout, /html\s+10\/10/);
});

test("content guidelines define real-work language expectations", async () => {
  const guidelines = await readFile(guidelinesPath, "utf8");

  assert.match(guidelines, /## Real-work language/);
  assert.match(guidelines, /Avoid floating adjectives/);
  assert.match(guidelines, /what reviewers should notice/i);
});
