"use client";

import { useLanguage } from "@/components/language/language-provider";
import type { Language } from "@/lib/i18n/language";
import { uiCopy } from "@/lib/i18n/translations";

type HighlightedCodeSample = {
  filename: string;
  html: string;
  translatedHtml?: string;
};

type CodeComparisonProps = {
  goodCode: HighlightedCodeSample;
  badCode: HighlightedCodeSample;
};

function CodePanel({
  label,
  tone,
  sample,
  language,
}: {
  label: string;
  tone: "good" | "bad";
  sample: HighlightedCodeSample;
  language: Language;
}) {
  const toneClass =
    tone === "good"
      ? "border-emerald-400/30 bg-emerald-400/[0.03] text-emerald-200"
      : "border-rose-400/30 bg-rose-400/[0.03] text-rose-200";
  const html =
    language === "th" && sample.translatedHtml
      ? sample.translatedHtml
      : sample.html;

  return (
    <section className={`min-w-0 rounded-lg border ${toneClass}`}>
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
        <h2 className="shrink-0 text-sm font-semibold">{label}</h2>
        <span className="min-w-0 truncate font-mono text-xs text-zinc-500">
          {sample.filename}
        </span>
      </div>
      <div
        className="code-surface min-w-0 max-w-full overflow-x-auto p-4 text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}

export function CodeComparison({ goodCode, badCode }: CodeComparisonProps) {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <div className="grid min-w-0 gap-4 lg:grid-cols-2">
      <CodePanel
        label={copy.goodCode}
        tone="good"
        sample={goodCode}
        language={language}
      />
      <CodePanel
        label={copy.badCode}
        tone="bad"
        sample={badCode}
        language={language}
      />
    </div>
  );
}
