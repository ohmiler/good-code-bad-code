"use client";

import { useLanguage } from "@/components/language/language-provider";
import { uiCopy } from "@/lib/i18n/translations";

export function TakeawayList({
  takeaways,
  translatedTakeaways,
}: {
  takeaways: string[];
  translatedTakeaways: readonly string[];
}) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const visibleTakeaways = language === "th" ? translatedTakeaways : takeaways;

  return (
    <section className="mt-12 border-t border-white/10 pt-8">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {copy.takeaways}
      </h2>
      <ul className="mt-4 grid gap-3">
        {visibleTakeaways.map((takeaway) => (
          <li
            key={takeaway}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-zinc-200"
          >
            {takeaway}
          </li>
        ))}
      </ul>
    </section>
  );
}
