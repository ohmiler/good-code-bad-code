import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonBrowser } from "@/components/track/lesson-browser";
import { TrackHeader } from "@/components/track/track-header";
import { getLessonsByTrack, getTrackStaticParams } from "@/lib/content/lessons";
import { getTrack, isTrackSlug } from "@/lib/content/tracks";
import { createPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getTrackStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/tracks/[track]">): Promise<Metadata> {
  const { track: trackSlug } = await params;

  if (!isTrackSlug(trackSlug)) notFound();

  const track = getTrack(trackSlug);
  if (!track) notFound();

  return createPageMetadata({
    title: `${track.title} Code Review Lessons`,
    description: track.description,
    path: `/tracks/${track.slug}`,
  });
}

export default async function TrackPage({
  params,
}: PageProps<"/tracks/[track]">) {
  const { track: trackSlug } = await params;

  if (!isTrackSlug(trackSlug)) notFound();

  const track = getTrack(trackSlug);
  if (!track) notFound();

  const lessons = getLessonsByTrack(trackSlug);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <TrackHeader track={track} />
      <LessonBrowser lessons={lessons} />
    </main>
  );
}
