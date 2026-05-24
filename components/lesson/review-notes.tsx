import type { ReactNode } from "react";

export function ReviewNotes({ children }: { children: ReactNode }) {
  return (
    <section className="mt-12 max-w-3xl">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
        Review Notes
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
