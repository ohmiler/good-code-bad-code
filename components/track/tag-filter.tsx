"use client";

type TagFilterProps = {
  tags: string[];
  activeTag: string | null;
  onChange: (tag: string | null) => void;
};

export function TagFilter({ tags, activeTag, onChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        aria-pressed={activeTag === null}
        onClick={() => onChange(null)}
        className="rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-emerald-300/50 aria-pressed:border-emerald-300 aria-pressed:text-emerald-200"
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          aria-pressed={activeTag === tag}
          onClick={() => onChange(tag)}
          className="max-w-full rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-emerald-300/50 aria-pressed:border-emerald-300 aria-pressed:text-emerald-200"
        >
          <span className="break-words">{tag}</span>
        </button>
      ))}
    </div>
  );
}
