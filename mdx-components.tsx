import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-10 text-2xl font-semibold text-zinc-50">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-xl font-semibold text-zinc-100">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 leading-7 text-zinc-300">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">{children}</ul>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-100">{children}</strong>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
