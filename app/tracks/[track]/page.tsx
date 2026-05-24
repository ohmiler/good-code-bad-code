import { notFound } from "next/navigation";
import { LessonBrowser } from "@/components/track/lesson-browser";
import { getLessonsByTrack, getTrackStaticParams } from "@/lib/content/lessons";
import { getTrack, isTrackSlug } from "@/lib/content/tracks";

export const dynamicParams = false;

export function generateStaticParams() {
  return getTrackStaticParams();
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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
        Track
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
        {track.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        {track.description}
      </p>
      <LessonBrowser lessons={lessons} />
    </main>
  );
}
