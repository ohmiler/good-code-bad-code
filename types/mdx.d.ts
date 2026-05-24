declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { LessonMetadata } from "@/lib/content/schema";

  export const metadata: LessonMetadata;

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
