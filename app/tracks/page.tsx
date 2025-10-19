import Link from "next/link";
import tracks from "@/lib/content/tracks.json";

type Track = (typeof tracks)[number];

export default function TracksPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold">Listening Tracks</h1>
        <p className="text-muted-foreground">
          Explore curated listening practice tracks organized by difficulty.
        </p>
      </header>
      <section className="grid gap-4 sm:grid-cols-2">
        {tracks.map((track: Track) => (
          <article
            key={track.slug}
            className="rounded-lg border border-border bg-card p-4 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-xl font-medium">{track.title}</h2>
            <p className="text-sm text-muted-foreground">Level: {track.level}</p>
            <Link
              href={`/tracks/${track.slug}`}
              className="mt-3 inline-flex text-primary hover:underline"
            >
              View track
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
