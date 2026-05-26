import assert from "node:assert/strict";
import { test } from "node:test";
import {
  filterTracks,
  trackFilterGroups,
} from "../../lib/content/track-filters";
import { tracks } from "../../lib/content/tracks";

const trackCards = tracks.map((track) => ({
  ...track,
  lessonCount: 10,
}));

test("track filter groups cover every track exactly once", () => {
  const groupedSlugs = trackFilterGroups
    .filter((group) => group.id !== "all")
    .flatMap((group) => group.tracks);
  const uniqueSlugs = new Set(groupedSlugs);

  assert.equal(groupedSlugs.length, tracks.length);
  assert.equal(uniqueSlugs.size, tracks.length);

  for (const track of tracks) {
    assert.ok(uniqueSlugs.has(track.slug), `${track.slug} is missing a group`);
  }
});

test("filterTracks matches slugs, English copy, and Thai copy", () => {
  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: "laravel",
    }).map((track) => track.slug),
    ["laravel"],
  );

  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: "value objects",
    }).map((track) => track.slug),
    ["java"],
  );

  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "th",
      query: "รีวิว Vue",
    }).map((track) => track.slug),
    ["vue"],
  );
});

test("filterTracks combines search with a selected group", () => {
  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "backend",
      familyId: null,
      language: "en",
      query: "middleware order",
    }).map((track) => track.slug),
    ["express"],
  );

  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "frontend",
      familyId: null,
      language: "en",
      query: "middleware order",
    }).map((track) => track.slug),
    [],
  );
});

test("filterTracks can search and filter by track family", () => {
  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: "c-family",
      language: "en",
      query: "",
    }).map((track) => track.slug),
    ["c", "cpp", "csharp"],
  );

  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: "c family",
    }).map((track) => track.slug),
    ["c", "cpp", "csharp"],
  );

  assert.deepEqual(
    filterTracks(trackCards, {
      groupId: "all",
      familyId: null,
      language: "en",
      query: ".net",
    }).map((track) => track.slug),
    ["csharp"],
  );
});
