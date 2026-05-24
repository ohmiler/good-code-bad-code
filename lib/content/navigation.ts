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
    previous: trackLessons[currentIndex - 1],
    next: trackLessons[currentIndex + 1],
  };
}
