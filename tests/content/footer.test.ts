import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LanguageProvider } from "../../components/language/language-provider";
import { SiteFooter } from "../../components/site-footer";

function renderFooter(language: "en" | "th" = "en") {
  return renderToStaticMarkup(
    React.createElement(
      LanguageProvider,
      { initialLanguage: language },
      React.createElement(SiteFooter),
    ),
  );
}

test("SiteFooter links to the Buy Me a Coffee support page", () => {
  const markup = renderFooter();

  assert.match(markup, /https:\/\/buymeacoffee\.com\/milerdev/);
  assert.match(markup, /\/bmc\.png/);
  assert.match(markup, /Support Miler on Buy Me a Coffee/);
  assert.match(markup, /target="_blank"/);
  assert.match(markup, /rel="noreferrer"/);
});

test("SiteFooter links to the reader guide in English", () => {
  const markup = renderFooter("en");

  assert.match(markup, /href="\/guide"/);
  assert.match(markup, />Guide</);
});

test("SiteFooter links to the reader guide in Thai", () => {
  const markup = renderFooter("th");

  assert.match(markup, /href="\/guide"/);
  assert.match(markup, />คู่มือ</);
});
