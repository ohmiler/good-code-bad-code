"use client";

import Link from "next/link";
import type { LessonPreview } from "@/lib/content/lessons";

type LessonListProps = {
  lessons: LessonPreview[];
};

export function LessonList({ lessons }: LessonListProps) {
  return (
    <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
      {lessons.map((lesson) => (
        <Link
          key={lesson.slug}
          href={`/tracks/${lesson.track}/${lesson.slug}`}
          className="block py-5 transition hover:bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-zinc-50">
                {lesson.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                {lesson.summary}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
              {lesson.tags.map((tag) => (
                <span
                  key={tag}
                  className="max-w-full rounded-md bg-white/[0.04] px-2 py-1 text-xs text-zinc-400"
                >
                  <span className="break-words">{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
