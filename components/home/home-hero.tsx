"use client";

import { BrandWordmark } from "@/components/brand-wordmark";
import { useLanguage } from "@/components/language/language-provider";
import { uiCopy } from "@/lib/i18n/translations";

export function HomeHero() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <section className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
        {copy.homeEyebrow}
      </p>
      <h1 className="mt-5 max-w-4xl text-zinc-50">
        <BrandWordmark variant="hero" />
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        {copy.homeSummary}
      </p>
    </section>
  );
}
