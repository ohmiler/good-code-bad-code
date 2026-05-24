"use client";

import { useLanguage } from "@/components/language/language-provider";
import type { Track } from "@/lib/content/tracks";
import { getTrackText, uiCopy } from "@/lib/i18n/translations";
import { TrackIcon } from "./track-icon";

export function TrackHeader({ track }: { track: Track }) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const text = getTrackText(track, language);

  return (
    <>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-emerald-300/20 bg-emerald-300/10 text-emerald-200 shadow-[0_0_32px_rgba(52,211,153,0.08)]">
          <TrackIcon className="h-7 w-7" track={track.slug} />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            {copy.trackEyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
            {text.title}
          </h1>
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        {text.description}
      </p>
    </>
  );
}
