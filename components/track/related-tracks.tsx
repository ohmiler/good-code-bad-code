"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { TrackIcon } from "@/components/track/track-icon";
import { InlineMarkdown } from "@/components/typography/inline-markdown";
import type { TrackSlug } from "@/lib/content/tracks";
import { getTrackText, uiCopy } from "@/lib/i18n/translations";

type RelatedTrackCard = {
  slug: TrackSlug;
  title: string;
  description: string;
  lessonCount: number;
};

export function RelatedTracks({
  currentTrackSlug,
  tracks,
}: {
  currentTrackSlug: TrackSlug;
  tracks: RelatedTrackCard[];
}) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const relatedTracks = tracks.filter((track) => track.slug !== currentTrackSlug);

  if (relatedTracks.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 border-t border-white/10 pt-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
            {copy.relatedTracks}
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            {copy.relatedTracksSummary}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {relatedTracks.map((track) => {
          const text = getTrackText(track, language);

          return (
            <Link
              key={track.slug}
              href={`/tracks/${track.slug}`}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-400/50 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-emerald-300/20 bg-emerald-300/10 text-emerald-200 transition group-hover:border-emerald-300/40 group-hover:text-emerald-100">
                  <TrackIcon className="h-4 w-4" track={track.slug} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-start gap-3">
                    <h3 className="text-base font-semibold text-zinc-50">
                      {text.title}
                    </h3>
                    <span className="shrink-0 text-xs text-zinc-500">
                      {track.lessonCount}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
                    <InlineMarkdown text={text.description} />
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
