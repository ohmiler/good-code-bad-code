import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { SiteFooter } from "../../components/site-footer";

test("SiteFooter links to the Buy Me a Coffee support page", () => {
  const markup = renderToStaticMarkup(createElement(SiteFooter));

  assert.match(markup, /https:\/\/buymeacoffee\.com\/milerdev/);
  assert.match(markup, /\/bmc\.png/);
  assert.match(markup, /Support Miler on Buy Me a Coffee/);
  assert.match(markup, /target="_blank"/);
  assert.match(markup, /rel="noreferrer"/);
});
