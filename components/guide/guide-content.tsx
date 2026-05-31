"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { uiCopy } from "@/lib/i18n/translations";

const quickStartSteps = [
  ["01", "guideStepTrackTitle", "guideStepTrackSummary"],
  ["02", "guideStepCompareTitle", "guideStepCompareSummary"],
  ["03", "guideStepTakeawayTitle", "guideStepTakeawaySummary"],
] as const;

const lessonParts = [
  ["goodCode", "guideGoodCodeSummary"],
  ["badCode", "guideBadCodeSummary"],
  ["reviewNotes", "guideReviewNotesSummary"],
  ["takeaways", "guideTakeawaysSummary"],
] as const;

export function GuideContent() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          {copy.guideEyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
          {copy.guideTitle}
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          {copy.guideSummary}
        </p>
      </section>

      <section className="mt-12" aria-labelledby="guide-quick-start">
        <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
          <h2
            id="guide-quick-start"
            className="text-2xl font-semibold tracking-tight text-zinc-50"
          >
            {copy.guideQuickStartTitle}
          </h2>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {quickStartSteps.map(([number, titleKey, summaryKey]) => (
            <article
              key={number}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="font-mono text-xs font-semibold text-emerald-300">
                {number}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-zinc-50">
                {copy[titleKey]}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {copy[summaryKey]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
            {copy.guideLessonAnatomyTitle}
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-500">
            {copy.guideReadingTipsSummary}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {lessonParts.map(([labelKey, summaryKey]) => (
            <article
              key={labelKey}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-base font-semibold text-zinc-50">
                {copy[labelKey]}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {copy[summaryKey]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 border-y border-white/10 py-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
          {copy.guideReadingTipsTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          {copy.guideReadingTipsSummary}
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-md border border-emerald-300/50 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/15 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          {copy.guidePrimaryCta}
        </Link>
      </section>
    </main>
  );
}
