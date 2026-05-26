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

test("Kotlin track is registered with JVM and backend discovery", () => {
  assert.equal(getTrack("kotlin")?.title, "Kotlin");
  assert.equal(trackIconKeys.kotlin, "diamond");
  assert.equal(getTrackFamily("kotlin")?.id, "backend-languages");
  assert.deepEqual(getRelatedTrackSlugs("kotlin"), ["java", "go"]);
});

test("Kotlin can be discovered by JVM, coroutines, and Android terms", () => {
  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: "null safety",
    }).map((track) => track.slug),
    ["kotlin"],
  );

  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: "android",
    }).map((track) => track.slug),
    ["kotlin"],
  );
});

test("validateLessonMetadata accepts Kotlin code samples", () => {
  const kotlinMetadata = {
    title: "Null safety boundaries",
    track: "kotlin",
    order: 1,
    summary: "Keep nullable values at input boundaries instead of spreading !! through service code.",
    tags: ["null-safety", "boundaries"],
    takeaways: ["Kotlin review should make nullable contracts visible at the boundary."],
    goodCode: {
      language: "kotlin",
      filename: "src/main/kotlin/reviews/ReviewService.kt",
      code: "fun normalizeTitle(title: String?): String? = title?.trim()?.takeIf { it.isNotEmpty() }",
    },
    badCode: {
      language: "kotlin",
      filename: "ReviewService.kt",
      code: "fun normalizeTitle(title: String?): String = title!!.trim()",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(kotlinMetadata, "content/kotlin/null-safety-boundaries.mdx"),
    kotlinMetadata,
  );
});
