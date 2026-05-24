import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";
import { tracks } from "../../lib/content/tracks";

const contentRoot = path.join(process.cwd(), "content");
const registryPath = path.join(contentRoot, "lesson-registry.ts");

async function getTrackLessonFiles() {
  const lessonsByTrack = new Map<string, string[]>();

  for (const track of tracks) {
    const trackDir = path.join(contentRoot, track.slug);
    const files = (await readdir(trackDir))
      .filter((file) => file.endsWith(".mdx"))
      .sort();

    lessonsByTrack.set(
      track.slug,
      files.map((file) => path.posix.join("content", track.slug, file)),
    );
  }

  return lessonsByTrack;
}

function slugFromContentPath(contentPath: string): string {
  return path.basename(contentPath, ".mdx");
}

test("test:content runs the registry content coverage test", async () => {
  const packageJson = JSON.parse(await readFile("package.json", "utf8")) as {
    scripts?: Record<string, string>;
  };

  const testContentScript = packageJson.scripts?.["test:content"] ?? "";

  assert.match(testContentScript, /schema\.test\.ts/);
  assert.match(testContentScript, /lesson-registry\.test\.ts/);
});

test("seeded lessons have three MDX files per track and unique slugs", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const allLessonFiles = [...lessonsByTrack.values()].flat();
  const slugs = allLessonFiles.map(slugFromContentPath);

  assert.equal(allLessonFiles.length, 15);
  for (const track of tracks) {
    assert.equal(lessonsByTrack.get(track.slug)?.length, 3, track.slug);
  }
  assert.equal(new Set(slugs).size, slugs.length);
});

test("every seeded MDX lesson compiles", async () => {
  const { compile } = await import("@mdx-js/mdx");
  const lessonsByTrack = await getTrackLessonFiles();

  for (const contentPath of [...lessonsByTrack.values()].flat()) {
    const source = await readFile(contentPath, "utf8");
    await compile(source, { jsx: true });
  }
});

test("registry explicitly imports and sources every seeded lesson", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const registrySource = await readFile(registryPath, "utf8");

  for (const contentPath of [...lessonsByTrack.values()].flat()) {
    const importPath = contentPath.replace(/^content\//, "./");

    assert.match(
      registrySource,
      new RegExp(`from "${importPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`),
      `${contentPath} must have an explicit MDX import`,
    );
    assert.match(
      registrySource,
      new RegExp(`source: "${contentPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`),
      `${contentPath} must have an explicit source entry`,
    );
  }
});
