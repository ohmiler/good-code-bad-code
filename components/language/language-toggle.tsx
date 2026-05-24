"use client";

import { useLanguage } from "./language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex rounded-md border border-white/10 bg-white/[0.03] p-1"
      role="group"
      aria-label="Language"
    >
      {(["en", "th"] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
          className="rounded px-2.5 py-1 text-xs font-semibold uppercase text-zinc-400 transition hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-300 aria-pressed:bg-emerald-300/15 aria-pressed:text-emerald-200"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
