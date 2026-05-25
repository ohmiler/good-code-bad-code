import type { MetadataRoute } from "next";
import { getSiteUrl, resolveUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: resolveUrl("/sitemap.xml", siteUrl),
    host: siteUrl,
  };
}
