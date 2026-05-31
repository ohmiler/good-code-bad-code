import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { metadata } from "../../app/guide/page";
import { GuideContent } from "../../components/guide/guide-content";
import { LanguageProvider } from "../../components/language/language-provider";

function renderGuide(language: "en" | "th") {
  return renderToStaticMarkup(
    <LanguageProvider initialLanguage={language}>
      <GuideContent />
    </LanguageProvider>,
  );
}

test("GuideContent renders the English quick start guide", () => {
  const markup = renderGuide("en");

  assert.match(markup, /How to use Good Code Bad Code/);
  assert.match(markup, /Start in three steps/);
  assert.match(markup, /Pick a Track/);
  assert.match(markup, /Good Code/);
  assert.match(markup, /Bad Code/);
  assert.match(markup, /href="\//);
});

test("GuideContent renders Thai reader copy", () => {
  const markup = renderGuide("th");

  assert.match(markup, /วิธีใช้ Good Code Bad Code/);
  assert.match(markup, /เริ่มใช้งานใน 3 ขั้น/);
  assert.match(markup, /เลือก Track/);
  assert.match(markup, /อ่านแบบ reviewer/);
});

test("guide page metadata uses the guide canonical path", () => {
  assert.equal(metadata.title, "How to use Good Code Bad Code");
  assert.equal(
    metadata.alternates?.canonical,
    "https://good-code-bad-code.pages.dev/guide",
  );
  assert.equal(
    metadata.openGraph?.url,
    "https://good-code-bad-code.pages.dev/guide",
  );
});
