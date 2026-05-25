import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { InlineMarkdown } from "../../components/typography/inline-markdown";

test("InlineMarkdown renders backtick spans as inline code", () => {
  const markup = renderToStaticMarkup(
    <p>
      <InlineMarkdown text="Use `app.use()` before route handlers." />
    </p>,
  );

  assert.match(markup, /<code[^>]*>app\.use\(\)<\/code>/);
  assert.doesNotMatch(markup, /`app\.use\(\)`/);
});
