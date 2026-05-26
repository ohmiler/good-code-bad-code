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

test("Rust track is registered with systems-language discovery", () => {
  assert.equal(getTrack("rust")?.title, "Rust");
  assert.equal(trackIconKeys.rust, "shield");
  assert.equal(getTrackFamily("rust")?.id, "c-family");
  assert.deepEqual(getRelatedTrackSlugs("rust"), ["c", "cpp", "csharp"]);
});

test("Rust can be discovered by ownership and Cargo search terms", () => {
  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: "borrow checker",
    }).map((track) => track.slug),
    ["rust"],
  );

  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: "cargo",
    }).map((track) => track.slug),
    ["rust"],
  );
});

test("validateLessonMetadata accepts Rust code samples", () => {
  const rustMetadata = {
    title: "Ownership and borrowing",
    track: "rust",
    order: 1,
    summary: "Make ownership transfer and borrowing explicit at function boundaries.",
    tags: ["ownership", "borrowing"],
    takeaways: ["Rust review should make value ownership visible."],
    goodCode: {
      language: "rust",
      filename: "src/review_title.rs",
      code: "fn normalize_title(title: &str) -> String { title.trim().to_owned() }",
    },
    badCode: {
      language: "rust",
      filename: "review_title.rs",
      code: "fn normalize_title(title: String) -> String { title.trim().to_string() }",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(rustMetadata, "content/rust/ownership-borrowing.mdx"),
    rustMetadata,
  );
});
