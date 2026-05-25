"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/language/language-provider";
import { uiCopy, type LessonThaiTranslation } from "@/lib/i18n/translations";

function ReviewPoint({
  label,
  paragraph,
  tone,
}: {
  label: string;
  paragraph: string;
  tone: "good" | "bad";
}) {
  const toneClass =
    tone === "good"
      ? "border-emerald-400/30 bg-emerald-400/[0.03] text-emerald-200"
      : "border-rose-400/30 bg-rose-400/[0.03] text-rose-200";

  return (
    <article className={`rounded-lg border p-4 ${toneClass}`}>
      <h3 className="text-sm font-semibold">{label}</h3>
      <p className="mt-3 leading-7 text-zinc-300">{paragraph}</p>
    </article>
  );
}

function WhatToReviewGrid({
  paragraphs,
}: {
  paragraphs: readonly string[];
}) {
  if (paragraphs.length < 2) {
    return (
      <div className="mt-4 max-w-3xl">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 leading-7 text-zinc-300">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  const extraParagraphs = paragraphs.slice(2);

  return (
    <>
      <div className="mt-4 grid min-w-0 gap-4 lg:grid-cols-2">
        <ReviewPoint
          label={uiCopy.th.goodCode}
          paragraph={paragraphs[0]}
          tone="good"
        />
        <ReviewPoint
          label={uiCopy.th.badCode}
          paragraph={paragraphs[1]}
          tone="bad"
        />
      </div>
      {extraParagraphs.length > 0 ? (
        <div className="mt-4 max-w-3xl">
          {extraParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-zinc-300">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
}

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
    <section className="mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {copy.reviewNotes}
      </h2>
      {language === "th" ? (
        <div className="mt-4">
          <h2 className="mt-10 text-2xl font-semibold text-zinc-50">
            {uiCopy.th.whatToReview}
          </h2>
          <WhatToReviewGrid paragraphs={translation.whatToReview} />
          <h2 className="mt-10 text-2xl font-semibold text-zinc-50">
            {uiCopy.th.reviewNotesSection}
          </h2>
          <div className="max-w-3xl">
            {translation.reviewNotes.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 max-w-3xl">{children}</div>
      )}
    </section>
  );
}
