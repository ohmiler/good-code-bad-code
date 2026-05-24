import type { MDXComponents } from "mdx/types";

function cx(...classes: Array<string | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const components: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cx("mt-10 text-2xl font-semibold text-zinc-50", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cx("mt-8 text-xl font-semibold text-zinc-100", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p className={cx("mt-4 leading-7 text-zinc-300", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cx("mt-4 list-disc space-y-2 pl-5 text-zinc-300", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cx("leading-7", className)} {...props} />
  ),
  strong: ({ className, ...props }) => (
    <strong
      className={cx("font-semibold text-zinc-100", className)}
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
