"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/language/language-provider";
import { uiCopy, type LessonThaiTranslation } from "@/lib/i18n/translations";

export function ReviewNotes({
  children,
  translation,
}: {
  children: ReactNode;
  translation: LessonThaiTranslation;
}) {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <section className="mt-12 max-w-3xl">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {copy.reviewNotes}
      </h2>
      {language === "th" ? (
        <div className="mt-4">
          <h2 className="mt-10 text-2xl font-semibold text-zinc-50">
            {uiCopy.th.whatToReview}
          </h2>
          {translation.whatToReview.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-zinc-300">
              {paragraph}
            </p>
          ))}
          <h2 className="mt-10 text-2xl font-semibold text-zinc-50">
            {uiCopy.th.reviewNotesSection}
          </h2>
          {translation.reviewNotes.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-zinc-300">
              {paragraph}
            </p>
          ))}
        </div>
      ) : (
        <div className="mt-4">{children}</div>
      )}
    </section>
  );
}
