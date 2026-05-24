"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import type { TrackSlug } from "@/lib/content/tracks";
import { getTrackText } from "@/lib/i18n/translations";

type TrackCard = {
  slug: TrackSlug;
  title: string;
  description: string;
  lessonCount: number;
};

export function TrackGrid({ tracks }: { tracks: TrackCard[] }) {
  const { language } = useLanguage();

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {tracks.map((track) => {
        const text = getTrackText(track, language);

        return (
          <Link
            key={track.slug}
            href={`/tracks/${track.slug}`}
            className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/50 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="min-w-0 text-xl font-semibold text-zinc-50">
                {text.title}
              </h2>
              <span className="shrink-0 text-sm text-zinc-500">
                {track.lessonCount}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {text.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
