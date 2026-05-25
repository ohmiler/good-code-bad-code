import type { MetadataRoute } from "next";
import { lessonSources } from "@/content/lesson-registry";
import { tracks } from "@/lib/content/tracks";
import { buildSitemapEntries } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries({
    tracks,
    lessons: lessonSources,
  });
}
