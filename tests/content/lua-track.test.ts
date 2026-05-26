import assert from "node:assert/strict";
import { test } from "node:test";
import { filterTracks } from "../../lib/content/track-filters";
import { getRelatedTrackSlugs, getTrackFamily } from "../../lib/content/track-families";
import { trackIconKeys } from "../../lib/content/track-icons";
import { getTrack, tracks } from "../../lib/content/tracks";
import { validateLessonMetadata } from "../../lib/content/schema";

const trackCards = tracks.map((track) => ({
  ...track,
  lessonCount: 10,
}));

test("Lua track is registered as embedded scripting content", () => {
  assert.equal(getTrack("lua")?.title, "Lua");
  assert.equal(trackIconKeys.lua, "moon");
  assert.equal(getTrackFamily("lua")?.id, "embedded-scripting");
  assert.deepEqual(getRelatedTrackSlugs("lua"), []);
});

test("Lua can be discovered by tables, metatables, and embedded scripting terms", () => {
  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: "metatable",
    }).map((track) => track.slug),
    ["lua"],
  );

  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: "embedded scripting",
    }).map((track) => track.slug),
    ["lua"],
  );
});

test("validateLessonMetadata accepts Lua code samples", () => {
  const luaMetadata = {
    title: "Tables as records and arrays",
    track: "lua",
    order: 1,
    summary: "Keep table shape clear when a value behaves like a record, array, or map.",
    tags: ["tables", "shape"],
    takeaways: ["Lua table review should name the shape the table represents."],
    goodCode: {
      language: "lua",
      filename: "src/review_summary.lua",
      code: "local review = { title = title, score = score }",
    },
    badCode: {
      language: "lua",
      filename: "review_summary.lua",
      code: "local review = { title, score }",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(luaMetadata, "content/lua/table-shapes.mdx"),
    luaMetadata,
  );
});
