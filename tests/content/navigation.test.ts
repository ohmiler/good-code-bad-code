import assert from "node:assert/strict";
import { test } from "node:test";
import { buildLessonNavigation } from "../../lib/content/navigation";

const lessons = [
  {
    slug: "accessible-form-labels",
    title: "Accessible form labels",
    track: "html",
  },
  {
    slug: "interactive-elements",
    title: "Interactive elements",
    track: "html",
  },
  {
    slug: "semantic-document-structure",
    title: "Semantic document structure",
    track: "html",
  },
  {
    slug: "color-contrast-states",
    title: "Color contrast states",
    track: "css",
  },
] as const;

test("buildLessonNavigation returns previous and next lessons in the same track", () => {
  assert.deepEqual(buildLessonNavigation(lessons, "html", "interactive-elements"), {
    currentIndex: 2,
    total: 3,
    previous: {
      slug: "accessible-form-labels",
      title: "Accessible form labels",
      track: "html",
    },
    next: {
      slug: "semantic-document-structure",
      title: "Semantic document structure",
      track: "html",
    },
  });
});

test("buildLessonNavigation omits unavailable neighbors at track boundaries", () => {
  assert.deepEqual(
    buildLessonNavigation(lessons, "html", "accessible-form-labels"),
    {
      currentIndex: 1,
      total: 3,
      previous: undefined,
      next: {
        slug: "interactive-elements",
        title: "Interactive elements",
        track: "html",
      },
    },
  );

  assert.deepEqual(
    buildLessonNavigation(lessons, "html", "semantic-document-structure"),
    {
      currentIndex: 3,
      total: 3,
      previous: {
        slug: "interactive-elements",
        title: "Interactive elements",
        track: "html",
      },
      next: undefined,
    },
  );
});

test("buildLessonNavigation returns serializable navigation items", () => {
  const [firstLesson, secondLesson] = lessons;
  const navigation = buildLessonNavigation(
    [
      { ...firstLesson, Component: () => null },
      { ...secondLesson, Component: () => null },
    ],
    "html",
    "accessible-form-labels",
  );

  assert.deepEqual(navigation?.next, {
    slug: "interactive-elements",
    title: "Interactive elements",
    track: "html",
  });
  assert.equal("Component" in (navigation?.next ?? {}), false);
});
