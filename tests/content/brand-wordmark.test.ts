import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { BrandWordmark } from "../../components/brand-wordmark";

test("BrandWordmark renders Good and Bad as neon accent words", () => {
  const markup = renderToStaticMarkup(
    createElement(BrandWordmark, { variant: "hero" }),
  );

  assert.match(markup, /brand-word--good/);
  assert.match(markup, /brand-word--bad/);
  assert.match(markup, /brand-word--code/);
  assert.ok(markup.indexOf("Good") < markup.indexOf("Bad"));
  assert.equal(markup.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), "Good Code Bad Code");
});

test("header and homepage share the same brand wordmark", async () => {
  const [headerSource, heroSource] = await Promise.all([
    readFile("components/site-header.tsx", "utf8"),
    readFile("components/home/home-hero.tsx", "utf8"),
  ]);

  assert.match(headerSource, /BrandWordmark/);
  assert.match(heroSource, /BrandWordmark/);
});
