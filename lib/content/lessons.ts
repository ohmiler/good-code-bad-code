import "server-only";

import { codeToHtml } from "shiki";
import { lessonSources } from "@/content/lesson-registry";
import { getTrack, tracks, type TrackSlug } from "./tracks";
import type { CodeSample, LessonRecord } from "./schema";
import { buildLessonNavigation } from "./navigation";
import type { LessonNavigation } from "./navigation";

export type LessonPreview = Pick<
  LessonRecord,
  "slug" | "title" | "track" | "order" | "summary" | "tags"
>;

export type HighlightedCodeSample = CodeSample & {
  html: string;
};

export type HighlightedLesson = LessonRecord & {
  goodCode: HighlightedCodeSample;
  badCode: HighlightedCodeSample;
};

const sortedLessons = [...lessonSources].sort((a, b) => {
  const trackComparison = a.track.localeCompare(b.track);

  if (trackComparison !== 0) {
    return trackComparison;
  }

  return a.order - b.order;
});

export function getAllTracks() {
  return tracks.map((track) => ({
    ...track,
    lessonCount: sortedLessons.filter((lesson) => lesson.track === track.slug)
      .length,
  }));
}

export function getLessonsByTrack(track: TrackSlug): LessonPreview[] {
  return sortedLessons
    .filter((lesson) => lesson.track === track)
    .map(({ slug, title, track, order, summary, tags }) => ({
      slug,
      title,
      track,
      order,
      summary,
      tags,
    }));
}

export function getLesson(track: string, slug: string): LessonRecord | undefined {
  if (!getTrack(track)) {
    return undefined;
  }

  return sortedLessons.find(
    (lesson) => lesson.track === track && lesson.slug === slug,
  );
}

export function getLessonNavigation(
  track: TrackSlug,
  slug: string,
): LessonNavigation | undefined {
  return buildLessonNavigation(sortedLessons, track, slug);
}

export function getTrackStaticParams() {
  return tracks.map((track) => ({ track: track.slug }));
}

export function getLessonStaticParams() {
  return sortedLessons.map((lesson) => ({
    track: lesson.track,
    lesson: lesson.slug,
  }));
}

async function highlightCode(sample: CodeSample): Promise<HighlightedCodeSample> {
  const html = await codeToHtml(sample.code, {
    lang: sample.language,
    theme: "github-dark",
  });

  return {
    ...sample,
    html,
  };
}

export async function highlightLesson(
  lesson: LessonRecord,
): Promise<HighlightedLesson> {
  const [goodCode, badCode] = await Promise.all([
    highlightCode(lesson.goodCode),
    highlightCode(lesson.badCode),
  ]);

  return {
    ...lesson,
    goodCode,
    badCode,
  };
}
