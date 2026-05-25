import type { ReactNode } from "react";

type InlineMarkdownProps = {
  text: string;
};

const inlineCodeClassName =
  "rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5 font-mono text-[0.88em] text-zinc-100 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)]";

export function renderInlineMarkdown(text: string): ReactNode {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={`${index}-${part}`} className={inlineCodeClassName}>
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

export function InlineMarkdown({ text }: InlineMarkdownProps) {
  return <>{renderInlineMarkdown(text)}</>;
}
