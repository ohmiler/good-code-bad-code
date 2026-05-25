import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("layout metadata points to the generated public favicon assets", async () => {
  const layout = await readFile("app/layout.tsx", "utf8");

  assert.match(layout, /manifest:\s*"\/site\.webmanifest"/);
  assert.match(layout, /url:\s*"\/favicon\.ico"/);
  assert.match(layout, /url:\s*"\/favicon-32x32\.png"/);
  assert.match(layout, /url:\s*"\/favicon-16x16\.png"/);
  assert.match(layout, /url:\s*"\/apple-touch-icon\.png"/);
});

test("the legacy app favicon is removed so public favicon.ico owns /favicon.ico", () => {
  assert.equal(existsSync("app/favicon.ico"), false);
});

test("web manifest has Good Code Bad Code branding", async () => {
  const manifest = JSON.parse(
    await readFile("public/site.webmanifest", "utf8"),
  ) as {
    name?: string;
    short_name?: string;
    theme_color?: string;
    background_color?: string;
  };

  assert.equal(manifest.name, "Good Code Bad Code");
  assert.equal(manifest.short_name, "GCBC");
  assert.equal(manifest.theme_color, "#070b12");
  assert.equal(manifest.background_color, "#070b12");
});
