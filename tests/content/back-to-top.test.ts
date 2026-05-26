import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";

async function projectFile(relativePath: string) {
  const absolutePath = path.join(process.cwd(), relativePath);
  const exists = await access(absolutePath)
    .then(() => true)
    .catch(() => false);

  assert.ok(exists, `${relativePath} must exist`);

  return readFile(absolutePath, "utf8");
}

test("global back-to-top control is a small client island in the root layout", async () => {
  const [layoutSource, buttonSource] = await Promise.all([
    projectFile(path.join("app", "layout.tsx")),
    projectFile(path.join("components", "back-to-top-button.tsx")),
  ]);

  assert.doesNotMatch(
    layoutSource,
    /["']use client["']/,
    "root layout must remain a Server Component",
  );
  assert.match(
    layoutSource,
    /import\s+\{\s*BackToTopButton\s*\}\s+from\s+["']@\/components\/back-to-top-button["']/,
    "root layout must import the global back-to-top button",
  );
  assert.match(
    layoutSource,
    /<BackToTopButton\s*\/>/,
    "root layout must render the button so it appears on every page",
  );

  assert.match(
    buttonSource,
    /^"use client";/,
    "back-to-top button must be a Client Component",
  );
  assert.match(
    buttonSource,
    /window\.scrollY/,
    "button visibility must respond to scroll position",
  );
  assert.match(
    buttonSource,
    /window\.scrollTo\(\{/,
    "button must scroll the viewport back to the top",
  );
  assert.match(
    buttonSource,
    /prefers-reduced-motion:\s*reduce/,
    "button must respect reduced-motion preferences",
  );
  assert.match(
    buttonSource,
    /aria-label=\{label\}/,
    "icon-only button must expose an accessible label",
  );
  assert.match(
    buttonSource,
    /tabIndex=\{isVisible \? 0 : -1\}/,
    "hidden button must not remain in keyboard tab order",
  );
});
