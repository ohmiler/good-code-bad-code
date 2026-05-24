declare module "*.mdx" {
  import type { Element, MDXProps } from "mdx/types";
  import type { LessonMetadata } from "@/lib/content/schema";

  export const metadata: LessonMetadata;

  export default function MDXContent(props: MDXProps): Element;
}
