import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildSitemapEntries,
  createPageMetadata,
  getSiteUrl,
  resolveUrl,
} from "../../lib/seo";

test("getSiteUrl normalizes configured site origins", () => {
  assert.equal(
    getSiteUrl("https://www.goodcodebadcode.dev/docs?ref=social"),
    "https://www.goodcodebadcode.dev",
  );

  assert.equal(
    getSiteUrl("not a url"),
    "https://good-code-bad-code.pages.dev",
  );
});

test("resolveUrl returns absolute URLs from root-relative paths", () => {
  assert.equal(
    resolveUrl("/tracks/html", "https://goodcodebadcode.dev"),
    "https://goodcodebadcode.dev/tracks/html",
  );

  assert.equal(
    resolveUrl("tracks/css", "https://goodcodebadcode.dev/"),
    "https://goodcodebadcode.dev/tracks/css",
  );
});

test("createPageMetadata builds canonical, Open Graph, and Twitter metadata", () => {
  const metadata = createPageMetadata({
    title: "HTML Code Review Lessons",
    description: "Review semantic HTML, forms, links, images, and tables.",
    path: "/tracks/html",
    siteUrl: "https://goodcodebadcode.dev",
  });

  assert.equal(metadata.alternates?.canonical, "https://goodcodebadcode.dev/tracks/html");
  assert.equal(metadata.openGraph?.url, "https://goodcodebadcode.dev/tracks/html");
  assert.equal(metadata.openGraph?.title, "HTML Code Review Lessons");
  assert.deepEqual(metadata.twitter?.images, [
    "https://goodcodebadcode.dev/opengraph-image",
  ]);
});

test("buildSitemapEntries includes the home page, guide page, tracks, and lessons", () => {
  const entries = buildSitemapEntries({
    siteUrl: "https://goodcodebadcode.dev",
    tracks: [
      { slug: "html" },
      { slug: "css" },
    ],
    lessons: [
      { track: "html", slug: "semantic-document-structure" },
      { track: "css", slug: "box-model-sizing" },
    ],
  });

  assert.deepEqual(
    entries.map((entry) => entry.url),
    [
      "https://goodcodebadcode.dev/",
      "https://goodcodebadcode.dev/guide",
      "https://goodcodebadcode.dev/tracks/html",
      "https://goodcodebadcode.dev/tracks/css",
      "https://goodcodebadcode.dev/tracks/html/semantic-document-structure",
      "https://goodcodebadcode.dev/tracks/css/box-model-sizing",
    ],
  );
  assert.equal(entries[0].priority, 1);
  assert.equal(entries[1].priority, 0.6);
});
