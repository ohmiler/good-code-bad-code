"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import type { TrackSlug } from "@/lib/content/tracks";
import { getLessonText, getTrackText, uiCopy } from "@/lib/i18n/translations";

type LessonHeroProps = {
  track: {
    slug: TrackSlug;
    title: string;
    description: string;
  };
  lesson: {
    slug: string;
    track: TrackSlug;
    order: number;
    title: string;
    summary: string;
    tags: string[];
  };
};

function formatLessonNumber(order: number) {
  return order.toString().padStart(2, "0");
}

export function LessonHero({ track, lesson }: LessonHeroProps) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const trackText = getTrackText(track, language);
  const lessonText = getLessonText(lesson, language);

  return (
    <>
      <Link
        href={`/tracks/${track.slug}`}
        className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300 transition hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      >
        {trackText.title}
      </Link>
      <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {copy.lessonProgress} {formatLessonNumber(lesson.order)}
      </p>
      <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
        {lessonText.title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
        {lessonText.summary}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Lesson tags">
        {lesson.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-zinc-300"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
}
