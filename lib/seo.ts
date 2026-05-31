import type { Metadata, MetadataRoute } from "next";

export const siteConfig = {
  name: "Good Code Bad Code",
  defaultUrl: "https://good-code-bad-code.pages.dev",
  description:
    "Study code review patterns through side-by-side Good Code and Bad Code examples.",
  ogImagePath: "/opengraph-image",
  ogImageAlt:
    "Good Code Bad Code neon wordmark with a code review learning tagline",
};

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  siteUrl?: string;
  type?: "website" | "article";
};

type SitemapTrack = {
  slug: string;
};

type SitemapLesson = {
  track: string;
  slug: string;
};

type BuildSitemapEntriesOptions = {
  siteUrl?: string;
  tracks: readonly SitemapTrack[];
  lessons: readonly SitemapLesson[];
};

export function getSiteUrl(candidate = process.env.NEXT_PUBLIC_SITE_URL) {
  if (!candidate) {
    return siteConfig.defaultUrl;
  }

  try {
    return new URL(candidate).origin;
  } catch {
    return siteConfig.defaultUrl;
  }
}

export function resolveUrl(path = "/", siteUrl = getSiteUrl()) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  siteUrl = getSiteUrl(),
  type = "website",
}: CreatePageMetadataOptions): Metadata {
  const url = resolveUrl(path, siteUrl);
  const imageUrl = resolveUrl(siteConfig.ogImagePath, siteUrl);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildSitemapEntries({
  siteUrl = getSiteUrl(),
  tracks,
  lessons,
}: BuildSitemapEntriesOptions): MetadataRoute.Sitemap {
  return [
    {
      url: resolveUrl("/", siteUrl),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: resolveUrl("/guide", siteUrl),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...tracks.map((track) => ({
      url: resolveUrl(`/tracks/${track.slug}`, siteUrl),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...lessons.map((lesson) => ({
      url: resolveUrl(`/tracks/${lesson.track}/${lesson.slug}`, siteUrl),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
