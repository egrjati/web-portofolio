import MusicPlayer, { type PlaylistData } from "./MusicPlayer";

const FEATURED_TRACK_URL = "https://open.spotify.com/track/2RlDBXGFu3hrQtbYDBSswk";

type PlaylistDef = Omit<PlaylistData, "coverImage">;

const playlistDefs: PlaylistDef[] = [
  {
    name: "Kalahan",
    desc: "The Cottons, Alkateri, Magnolia Celebration, dst.",
    count: 27,
    tag: "Lokal",
    cover: { from: "from-zinc-300", via: "via-zinc-600", to: "to-zinc-900" },
    spotifyUrl: "https://open.spotify.com/playlist/25JhialaKULWOasScl6YmH",
  },
  {
    name: "Anti Depresan",
    desc: "Radiohead, The Verve, The Strokes, The Beatles, Blur, dst.",
    count: 81,
    tag: "Sick",
    cover: { from: "from-black", via: "via-zinc-900", to: "to-zinc-800" },
    spotifyUrl:
      "https://open.spotify.com/playlist/6fuHgcZGaVrGJEXxfKxDLr?si=uUgsAGiYRKKwuFsNSvRQTA",
  },
  {
    name: "Coming Soon",
    desc: "Segera Hadir.",
    count: 0,
    tag: "Chill",
    cover: { from: "from-white", via: "via-zinc-300", to: "to-zinc-700" },
    spotifyUrl: null,
  },
];

async function fetchSpotifyCover(spotifyUrl: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { thumbnail_url?: string };
    return data.thumbnail_url ?? null;
  } catch {
    return null;
  }
}

export default async function MusicPage() {
  const [featuredCoverImage, ...playlistCovers] = await Promise.all([
    fetchSpotifyCover(FEATURED_TRACK_URL),
    ...playlistDefs.map((p) =>
      p.spotifyUrl ? fetchSpotifyCover(p.spotifyUrl) : Promise.resolve(null)
    ),
  ]);

  const playlists: PlaylistData[] = playlistDefs.map((p, i) => ({
    ...p,
    coverImage: playlistCovers[i] ?? null,
  }));

  return (
    <MusicPlayer
      playlists={playlists}
      featuredCoverImage={featuredCoverImage ?? null}
    />
  );
}
