"use client";

import { useMemo, useState } from "react";
import type { LessonPreview } from "@/lib/content/lessons";
import { LessonList } from "./lesson-list";
import { TagFilter } from "./tag-filter";

export function LessonBrowser({ lessons }: { lessons: LessonPreview[] }) {
  const tags = useMemo(
    () => Array.from(new Set(lessons.flatMap((lesson) => lesson.tags))).sort(),
    [lessons],
  );
  const tagKey = tags.join("\u0000");
  const [filter, setFilter] = useState<{
    activeTag: string | null;
    tagKey: string;
  }>({
    activeTag: null,
    tagKey,
  });

  const selectedTag =
    filter.tagKey === tagKey &&
    filter.activeTag &&
    tags.includes(filter.activeTag)
      ? filter.activeTag
      : null;

  const visibleLessons = selectedTag
    ? lessons.filter((lesson) => lesson.tags.includes(selectedTag))
    : lessons;

  return (
    <section className="mt-10">
      <TagFilter
        tags={tags}
        activeTag={selectedTag}
        onChange={(activeTag) => setFilter({ activeTag, tagKey })}
      />
      <LessonList lessons={visibleLessons} />
    </section>
  );
}
