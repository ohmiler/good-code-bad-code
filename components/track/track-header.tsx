"use client";

import { useLanguage } from "@/components/language/language-provider";
import type { Track } from "@/lib/content/tracks";
import { getTrackText, uiCopy } from "@/lib/i18n/translations";

export function TrackHeader({ track }: { track: Track }) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const text = getTrackText(track, language);

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
        {copy.trackEyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
        {text.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        {text.description}
      </p>
    </>
  );
}
