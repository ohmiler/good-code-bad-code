"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { uiCopy } from "@/lib/i18n/translations";

export function NotFoundContent() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <section className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
        {copy.notFoundEyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
        {copy.notFoundTitle}
      </h1>
      <p className="mt-5 text-lg leading-8 text-zinc-400">
        {copy.notFoundSummary}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md border border-emerald-300/40 px-4 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-200 hover:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      >
        {copy.backToLibrary}
      </Link>
    </section>
  );
}
