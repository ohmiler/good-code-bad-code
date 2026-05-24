import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeComparison } from "@/components/lesson/code-comparison";
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
  const LessonNotes = highlightedLesson.Component;

  if (!lessonNavigation) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <Link
        href={`/tracks/${track.slug}`}
        className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300 transition hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      >
        {track.title}
      </Link>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
        {highlightedLesson.title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
        {highlightedLesson.summary}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Lesson tags">
        {highlightedLesson.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-zinc-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <CodeComparison
          goodCode={highlightedLesson.goodCode}
          badCode={highlightedLesson.badCode}
        />
      </section>

      <ReviewNotes>
        <LessonNotes />
      </ReviewNotes>
      <TakeawayList takeaways={highlightedLesson.takeaways} />
      <LessonPager navigation={lessonNavigation} />
    </main>
  );
}
