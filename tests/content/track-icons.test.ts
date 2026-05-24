import assert from "node:assert/strict";
import { test } from "node:test";
import { trackIconKeys } from "../../lib/content/track-icons";
import { tracks } from "../../lib/content/tracks";

test("every track has a stable icon key", () => {
  const expectedSlugs = tracks.map((track) => track.slug).sort();
  const iconSlugs = Object.keys(trackIconKeys).sort();

  assert.deepEqual(iconSlugs, expectedSlugs);

  for (const track of tracks) {
    assert.match(trackIconKeys[track.slug], /^[a-z][a-z0-9-]*$/);
  }
});
