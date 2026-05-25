import "server-only";

import { codeToHtml } from "shiki";
import { lessonSources } from "@/content/lesson-registry";
import type { LessonThaiTranslation } from "@/lib/i18n/translations";
import { replaceCodeCommentLines } from "./code-comments";
import { getTrack, tracks, type TrackSlug } from "./tracks";
import { readLessonReviewNotes } from "./review-notes";
import type { CodeSample, LessonRecord, ReviewNotesContent } from "./schema";
import { buildLessonNavigation } from "./navigation";
import type { LessonNavigation } from "./navigation";

export type LessonPreview = Pick<
  LessonRecord,
  "slug" | "title" | "track" | "order" | "summary" | "tags"
>;

export type HighlightedCodeSample = CodeSample & {
  html: string;
  translatedHtml?: string;
};

export type HighlightedLesson = LessonRecord & {
  goodCode: HighlightedCodeSample;
  badCode: HighlightedCodeSample;
  reviewNotes: ReviewNotesContent;
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

async function highlightCode(
  sample: CodeSample,
  translatedComments?: readonly string[],
): Promise<HighlightedCodeSample> {
  const translatedCode =
    translatedComments && translatedComments.length > 0
      ? replaceCodeCommentLines(sample.code, translatedComments)
      : undefined;

  const [html, translatedHtml] = await Promise.all([
    codeToHtml(sample.code, {
      lang: sample.language,
      theme: "github-dark",
    }),
    translatedCode
      ? codeToHtml(translatedCode, {
          lang: sample.language,
          theme: "github-dark",
        })
      : Promise.resolve(undefined),
  ]);

  return {
    ...sample,
    html,
    translatedHtml,
  };
}

export async function highlightLesson(
  lesson: LessonRecord,
  translation?: LessonThaiTranslation,
): Promise<HighlightedLesson> {
  const [goodCode, badCode, reviewNotes] = await Promise.all([
    highlightCode(lesson.goodCode, translation?.codeComments?.goodCode),
    highlightCode(lesson.badCode, translation?.codeComments?.badCode),
    readLessonReviewNotes(lesson.source),
  ]);

  return {
    ...lesson,
    goodCode,
    badCode,
    reviewNotes,
  };
}
