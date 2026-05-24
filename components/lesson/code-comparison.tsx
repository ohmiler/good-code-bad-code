import type { HighlightedCodeSample } from "@/lib/content/lessons";

type CodeComparisonProps = {
  goodCode: HighlightedCodeSample;
  badCode: HighlightedCodeSample;
};

function CodePanel({
  label,
  tone,
  sample,
}: {
  label: string;
  tone: "good" | "bad";
  sample: HighlightedCodeSample;
}) {
  const toneClass =
    tone === "good"
      ? "border-emerald-400/30 bg-emerald-400/[0.03] text-emerald-200"
      : "border-rose-400/30 bg-rose-400/[0.03] text-rose-200";

  return (
    <section className={`rounded-lg border ${toneClass}`}>
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
        <h2 className="shrink-0 text-sm font-semibold">{label}</h2>
        <span className="min-w-0 truncate font-mono text-xs text-zinc-500">
          {sample.filename}
        </span>
      </div>
      <div
        className="code-surface overflow-x-auto p-4 text-sm"
        dangerouslySetInnerHTML={{ __html: sample.html }}
      />
    </section>
  );
}

export function CodeComparison({ goodCode, badCode }: CodeComparisonProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <CodePanel label="Good Code" tone="good" sample={goodCode} />
      <CodePanel label="Bad Code" tone="bad" sample={badCode} />
    </div>
  );
}
