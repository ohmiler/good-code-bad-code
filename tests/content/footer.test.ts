import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LanguageProvider } from "../../components/language/language-provider";
import { SiteFooter } from "../../components/site-footer";

function renderFooter() {
  return renderToStaticMarkup(
    React.createElement(
      LanguageProvider,
      { initialLanguage: "en" },
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

test("SiteFooter keeps reader navigation out of the footer", () => {
  const markup = renderFooter();

  assert.doesNotMatch(markup, /href="\/guide"/);
  assert.doesNotMatch(markup, />Guide</);
  assert.doesNotMatch(markup, />คู่มือ</);
});
