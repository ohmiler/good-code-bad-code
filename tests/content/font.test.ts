import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("Thai mode uses IBM Plex Sans Thai while preserving the default sans font", async () => {
  const layout = await readFile("app/layout.tsx", "utf8");
  const globals = await readFile("app/globals.css", "utf8");

  assert.match(layout, /IBM_Plex_Sans_Thai/);
  assert.match(layout, /--font-ibm-plex-sans-thai/);
  assert.match(layout, /subsets:\s*\[\s*"latin"\s*,\s*"thai"\s*\]/);
  assert.match(globals, /html\[lang="th"\]\s+body/);
  assert.match(globals, /var\(--font-ibm-plex-sans-thai\)/);
  assert.match(globals, /var\(--font-geist-sans\)/);
});
