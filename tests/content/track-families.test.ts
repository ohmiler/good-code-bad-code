import assert from "node:assert/strict";
import { test } from "node:test";
import {
  getRelatedTrackSlugs,
  getTrackFamily,
  trackFamilies,
} from "../../lib/content/track-families";
import { tracks } from "../../lib/content/tracks";

test("track families cover every track exactly once", () => {
  const familySlugs = trackFamilies.flatMap((family) => family.tracks);
  const uniqueSlugs = new Set(familySlugs);

  assert.equal(familySlugs.length, tracks.length);
  assert.equal(uniqueSlugs.size, tracks.length);

  for (const track of tracks) {
    assert.ok(uniqueSlugs.has(track.slug), `${track.slug} is missing a family`);
  }
});

test("C family keeps C, C++, and C# together", () => {
  assert.equal(getTrackFamily("c")?.id, "c-family");
  assert.equal(getTrackFamily("cpp")?.id, "c-family");
  assert.equal(getTrackFamily("csharp")?.id, "c-family");
  assert.equal(getTrackFamily("rust")?.id, "c-family");
  assert.deepEqual(getRelatedTrackSlugs("c"), ["cpp", "csharp", "rust"]);
  assert.deepEqual(getRelatedTrackSlugs("rust"), ["c", "cpp", "csharp"]);
});
