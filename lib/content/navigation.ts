import type { TrackSlug } from "./tracks";

export type LessonNavigationItem = {
  slug: string;
  title: string;
  track: TrackSlug;
};

export type LessonNavigation = {
  currentIndex: number;
  total: number;
  previous?: LessonNavigationItem;
  next?: LessonNavigationItem;
};

function toNavigationItem(lesson: LessonNavigationItem | undefined) {
  if (!lesson) {
    return undefined;
  }

  return {
    slug: lesson.slug,
    title: lesson.title,
    track: lesson.track,
  };
}

export function buildLessonNavigation(
  lessons: readonly LessonNavigationItem[],
  track: TrackSlug,
  currentSlug: string,
): LessonNavigation | undefined {
  const trackLessons = lessons.filter((lesson) => lesson.track === track);
  const currentIndex = trackLessons.findIndex(
    (lesson) => lesson.slug === currentSlug,
  );

  if (currentIndex === -1) {
    return undefined;
  }

  return {
    currentIndex: currentIndex + 1,
    total: trackLessons.length,
    previous: toNavigationItem(trackLessons[currentIndex - 1]),
    next: toNavigationItem(trackLessons[currentIndex + 1]),
  };
}
