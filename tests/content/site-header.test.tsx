import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LanguageProvider } from "../../components/language/language-provider";
import { SiteHeader } from "../../components/site-header";

function renderHeader(language: "en" | "th") {
  return renderToStaticMarkup(
    <LanguageProvider initialLanguage={language}>
      <SiteHeader />
    </LanguageProvider>,
  );
}

test("SiteHeader links to the reader guide in English", () => {
  const markup = renderHeader("en");

  assert.match(markup, /href="\/guide"/);
  assert.match(markup, />Guide</);
});

test("SiteHeader links to the reader guide in Thai", () => {
  const markup = renderHeader("th");

  assert.match(markup, /href="\/guide"/);
  assert.match(markup, />คู่มือ</);
});
