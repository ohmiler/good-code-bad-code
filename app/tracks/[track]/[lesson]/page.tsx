import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CodeComparison } from "@/components/lesson/code-comparison";
import { LessonHero } from "@/components/lesson/lesson-hero";
import { LessonPager } from "@/components/lesson/lesson-pager";
import { ReviewNotes } from "@/components/lesson/review-notes";
import { TakeawayList } from "@/components/lesson/takeaway-list";
import {
  getLesson,
  getLessonNavigation,
  getLessonStaticParams,
  highlightLesson,
} from "@/lib/content/lessons";
import { getTrack } from "@/lib/content/tracks";
import { getLessonThaiTranslation } from "@/lib/i18n/translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return getLessonStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/tracks/[track]/[lesson]">): Promise<Metadata> {
  const { track: trackSlug, lesson: lessonSlug } = await params;
  const track = getTrack(trackSlug);
  const lesson = getLesson(trackSlug, lessonSlug);

  if (!track || !lesson) notFound();

  return {
    title: `${lesson.title} | ${track.title} | Good Code Bad Code`,
    description: lesson.summary,
  };
}

export default async function LessonPage({
  params,
}: PageProps<"/tracks/[track]/[lesson]">) {
  const { track: trackSlug, lesson: lessonSlug } = await params;
  const track = getTrack(trackSlug);
  const lesson = getLesson(trackSlug, lessonSlug);

  if (!track || !lesson) notFound();

  const highlightedLesson = await highlightLesson(lesson);
  const lessonNavigation = getLessonNavigation(track.slug, lesson.slug);
  const lessonTranslation = getLessonThaiTranslation(track.slug, lesson.slug);
  const LessonNotes = highlightedLesson.Component;

  if (!lessonNavigation || !lessonTranslation) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <LessonHero
        track={track}
        lesson={{
          slug: highlightedLesson.slug,
          track: highlightedLesson.track,
          title: highlightedLesson.title,
          summary: highlightedLesson.summary,
          tags: highlightedLesson.tags,
        }}
      />

      <section className="mt-12">
        <CodeComparison
          goodCode={highlightedLesson.goodCode}
          badCode={highlightedLesson.badCode}
        />
      </section>

      <ReviewNotes translation={lessonTranslation}>
        <LessonNotes />
      </ReviewNotes>
      <TakeawayList
        takeaways={highlightedLesson.takeaways}
        translatedTakeaways={lessonTranslation.takeaways}
      />
      <LessonPager navigation={lessonNavigation} />
    </main>
  );
}
