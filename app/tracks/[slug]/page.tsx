import { notFound } from "next/navigation";
import tracks from "@/lib/content/tracks.json";

type Track = (typeof tracks)[number];

type TrackPageProps = {
  params: {
    slug: string;
  };
};

function AudioPlayer() {
  return (
    <div className="rounded border border-dashed border-border p-4 text-sm text-muted-foreground">
      AudioPlayer placeholder
    </div>
  );
}

function Transcript() {
  return (
    <div className="rounded border border-dashed border-border p-4 text-sm text-muted-foreground">
      Transcript placeholder
    </div>
  );
}

export default function TrackPage({ params }: TrackPageProps) {
  const track: Track | undefined = tracks.find((item) => item.slug === params.slug);

  if (!track) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">{track.title}</h1>
        <p className="text-sm text-muted-foreground">Level: {track.level}</p>
      </header>
      <section className="space-y-4">
        <AudioPlayer />
        <Transcript />
      </section>
    </main>
  );
}
