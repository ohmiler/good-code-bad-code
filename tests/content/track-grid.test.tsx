import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { TrackGrid } from "../../components/home/track-grid";
import { LanguageProvider } from "../../components/language/language-provider";
import { tracks } from "../../lib/content/tracks";

const trackCards = tracks.map((track) => ({
  ...track,
  lessonCount: 10,
}));

test("TrackGrid renders search input, filter chips, and result count", () => {
  const markup = renderToStaticMarkup(
    <LanguageProvider initialLanguage="en">
      <TrackGrid tracks={trackCards} />
    </LanguageProvider>,
  );

  assert.match(markup, /id="track-search"/);
  assert.match(markup, /Search tracks, frameworks, or review topics/);
  assert.match(markup, /aria-pressed="true"[^>]*>All/);
  assert.match(markup, />Frontend</);
  assert.match(markup, />Backend</);
  assert.match(markup, />21 \/ 21 tracks</);
});
