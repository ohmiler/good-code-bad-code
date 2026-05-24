import { HomeHero } from "@/components/home/home-hero";
import { TrackGrid } from "@/components/home/track-grid";
import { getAllTracks } from "@/lib/content/lessons";

export default function Home() {
  const tracks = getAllTracks();

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24">
      <HomeHero />
      <section className="mt-14">
        <TrackGrid tracks={tracks} />
      </section>
    </main>
  );
}
