"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/language/language-provider";
import type { ReviewNotesContent } from "@/lib/content/schema";
import { uiCopy, type LessonThaiTranslation } from "@/lib/i18n/translations";

function renderInlineMarkdown(text: string): ReactNode {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`${index}-${part}`}
          className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.9em] text-zinc-100"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

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
      <p className="mt-3 leading-7 text-zinc-300">
        {renderInlineMarkdown(paragraph)}
      </p>
    </article>
  );
}

function WhatToReviewGrid({
  badLabel,
  goodLabel,
  paragraphs,
}: {
  badLabel: string;
  goodLabel: string;
  paragraphs: readonly string[];
}) {
  if (paragraphs.length < 2) {
    return (
      <div className="mt-4 max-w-3xl">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 leading-7 text-zinc-300">
            {renderInlineMarkdown(paragraph)}
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
          label={goodLabel}
          paragraph={paragraphs[0]}
          tone="good"
        />
        <ReviewPoint
          label={badLabel}
          paragraph={paragraphs[1]}
          tone="bad"
        />
      </div>
      {extraParagraphs.length > 0 ? (
        <div className="mt-4 max-w-3xl">
          {extraParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-zinc-300">
              {renderInlineMarkdown(paragraph)}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
}

function ReviewNoteCallout({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: readonly string[];
}) {
  return (
    <aside className="mt-10 w-full rounded-lg border border-amber-300/25 bg-amber-300/[0.045] p-4 shadow-[0_0_32px_rgb(245_158_11_/_0.08)]">
      <div className="flex min-w-0 gap-3">
        <span
          aria-hidden="true"
          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/[0.12] text-amber-200"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v2" />
            <path d="M18.36 5.64 16.95 7.05" />
            <path d="M21 12h-2" />
            <path d="M5 12H3" />
            <path d="M7.05 7.05 5.64 5.64" />
            <path d="M9 18h6" />
            <path d="M10 21h4" />
            <path d="M8 12a4 4 0 1 1 8 0c0 1.2-.46 2.12-1.16 2.83-.5.51-.84 1.18-.84 1.89V17h-4v-.28c0-.71-.34-1.38-.84-1.89A3.89 3.89 0 0 1 8 12Z" />
          </svg>
        </span>
        <div className="min-w-0">
          <h2 className="text-xl font-semibold text-amber-100">{title}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-7 text-zinc-200">
              {renderInlineMarkdown(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function ReviewNotes({
  englishNotes,
  translation,
}: {
  englishNotes: ReviewNotesContent;
  translation: LessonThaiTranslation;
}) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const notes = language === "th" ? translation : englishNotes;

  return (
    <section className="mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {copy.reviewNotes}
      </h2>
      <div className="mt-4">
        <h2 className="mt-10 text-2xl font-semibold text-zinc-50">
          {copy.whatToReview}
        </h2>
        <WhatToReviewGrid
          badLabel={copy.badCode}
          goodLabel={copy.goodCode}
          paragraphs={notes.whatToReview}
        />
        <ReviewNoteCallout
          paragraphs={notes.reviewNotes}
          title={copy.reviewNotesSection}
        />
      </div>
    </section>
  );
}
