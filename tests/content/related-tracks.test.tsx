import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LanguageProvider } from "../../components/language/language-provider";
import { RelatedTracks } from "../../components/track/related-tracks";
import { getRelatedTrackCards } from "../../lib/content/track-families";

test("RelatedTracks renders family siblings for the current track", () => {
  const markup = renderToStaticMarkup(
    <LanguageProvider initialLanguage="en">
      <RelatedTracks
        currentTrackSlug="c"
        tracks={getRelatedTrackCards("c", 10)}
      />
    </LanguageProvider>,
  );

  assert.match(markup, />Related tracks</);
  assert.match(markup, /href="\/tracks\/cpp"/);
  assert.match(markup, /href="\/tracks\/csharp"/);
  assert.doesNotMatch(markup, /href="\/tracks\/c"/);
});
