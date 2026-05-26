"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language/language-provider";
import { TrackIcon } from "@/components/track/track-icon";
import { InlineMarkdown } from "@/components/typography/inline-markdown";
import {
  filterTracks,
  trackFilterGroups,
  type TrackFilterGroupId,
} from "@/lib/content/track-filters";
import type { TrackSlug } from "@/lib/content/tracks";
import { getTrackText, uiCopy } from "@/lib/i18n/translations";

type TrackCard = {
  slug: TrackSlug;
  title: string;
  description: string;
  lessonCount: number;
};

export function TrackGrid({ tracks }: { tracks: TrackCard[] }) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] =
    useState<TrackFilterGroupId>("all");
  const visibleTracks = useMemo(
    () =>
      filterTracks(tracks, {
        groupId: selectedGroup,
        language,
        query,
      }),
    [language, query, selectedGroup, tracks],
  );
  const hasActiveFilter = query.trim().length > 0 || selectedGroup !== "all";

  function clearFilters() {
    setQuery("");
    setSelectedGroup("all");
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="relative">
          <label className="sr-only" htmlFor="track-search">
            {copy.trackSearchLabel}
          </label>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
            fill="none"
            focusable="false"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 4 4" />
          </svg>
          <input
            id="track-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.trackSearchPlaceholder}
            className="h-12 w-full rounded-lg border border-white/10 bg-white/[0.03] pl-11 pr-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 hover:border-white/20 focus:border-emerald-300/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-emerald-300/20"
          />
        </div>

        <div className="flex flex-col gap-2 lg:items-end">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            {copy.trackFilterLabel}
          </span>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {trackFilterGroups.map((group) => {
              const isSelected = group.id === selectedGroup;

              return (
                <button
                  key={group.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedGroup(group.id)}
                  className={
                    isSelected
                      ? "h-9 rounded-md border border-emerald-300/60 bg-emerald-300/15 px-3 text-sm font-medium text-emerald-100 shadow-[0_0_22px_rgba(52,211,153,0.12)] transition"
                      : "h-9 rounded-md border border-white/10 bg-white/[0.03] px-3 text-sm font-medium text-zinc-400 transition hover:border-white/20 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-300/30"
                  }
                >
                  {group.label[language]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex min-h-7 flex-wrap items-center justify-between gap-3 border-y border-white/10 py-3 text-sm text-zinc-500">
        <span aria-live="polite">
          {visibleTracks.length} / {tracks.length} {copy.trackResultsLabel}
        </span>
        {hasActiveFilter ? (
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-md px-2 py-1 font-medium text-emerald-200 transition hover:bg-emerald-300/10 hover:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300/30"
          >
            {copy.trackClearFilters}
          </button>
        ) : null}
      </div>

      {visibleTracks.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/15 px-5 py-10 text-center">
          <p className="text-base font-semibold text-zinc-100">
            {copy.trackNoResultsTitle}
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            {copy.trackNoResultsSummary}
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-md border border-emerald-300/40 px-3 py-2 text-sm font-medium text-emerald-100 transition hover:bg-emerald-300/10 focus:outline-none focus:ring-2 focus:ring-emerald-300/30"
          >
            {copy.trackClearFilters}
          </button>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTracks.map((track) => {
            const text = getTrackText(track, language);

            return (
              <Link
                key={track.slug}
                href={`/tracks/${track.slug}`}
                className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/50 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-emerald-300/20 bg-emerald-300/10 text-emerald-200 transition group-hover:border-emerald-300/40 group-hover:text-emerald-100">
                    <TrackIcon track={track.slug} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="min-w-0 text-xl font-semibold text-zinc-50">
                        {text.title}
                      </h2>
                      <span className="shrink-0 text-sm text-zinc-500">
                        {track.lessonCount}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      <InlineMarkdown text={text.description} />
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
