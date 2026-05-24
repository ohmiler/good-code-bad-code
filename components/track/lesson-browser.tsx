"use client";

import { useMemo, useState } from "react";
import type { LessonPreview } from "@/lib/content/lessons";
import { LessonList } from "./lesson-list";
import { TagFilter } from "./tag-filter";

export function LessonBrowser({ lessons }: { lessons: LessonPreview[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(
    () => Array.from(new Set(lessons.flatMap((lesson) => lesson.tags))).sort(),
    [lessons],
  );

  const selectedTag = activeTag && tags.includes(activeTag) ? activeTag : null;

  const visibleLessons = selectedTag
    ? lessons.filter((lesson) => lesson.tags.includes(selectedTag))
    : lessons;

  return (
    <section className="mt-10">
      <TagFilter
        tags={tags}
        activeTag={selectedTag}
        onChange={setActiveTag}
      />
      <LessonList lessons={visibleLessons} />
    </section>
  );
}
