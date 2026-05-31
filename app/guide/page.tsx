import type { Metadata } from "next";
import { GuideContent } from "@/components/guide/guide-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "How to use Good Code Bad Code",
  description:
    "Learn how to browse Tracks, compare Good Code and Bad Code, and use Review Notes and Takeaways.",
  path: "/guide",
});

export default function GuidePage() {
  return <GuideContent />;
}
