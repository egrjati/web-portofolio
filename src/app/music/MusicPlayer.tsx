"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export type Cover = { from: string; via?: string; to: string };

export type Track = {
  title: string;
  artist: string;
  album: string;
  year: string;
  length: string;
  cover: Cover;
};

export type PlaylistData = {
  name: string;
  desc: string;
  count: number;
  cover: Cover;
  tag: string;
  spotifyUrl: string | null;
  coverImage: string | null;
};

const AUDIO_SRC = "/assets/music/Harapan%2C%20Pt.%202.mp3";
const SPOTIFY_URL = "https://open.spotify.com/track/2RlDBXGFu3hrQtbYDBSswk";

const featured: Track = {
  title: "Harapan, Pt 2",
  artist: "The Cottons",
  album: "Harapan",
  year: "2024",
  length: "5:31",
  cover: { from: "from-zinc-700", via: "via-zinc-900", to: "to-black" },
};

function fmt(s: number) {
  if (!isFinite(s) || s < 0) return "0:00";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

export default function MusicPlayer({
  playlists,
  featuredCoverImage,
}: {
  playlists: PlaylistData[];
  featuredCoverImage: string | null;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState<Track>(featured);
  const [liked, setLiked] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => { setIsPlaying(false); setCurrentTime(0); };
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play();
    else audio.pause();
  }

  function stop() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  }

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className="relative min-h-[calc(100dvh-4rem)] md:h-full md:overflow-y-auto w-full text-black bg-white"
      style={{
        backgroundImage: `radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1px)`,
        backgroundSize: "22px 22px",
      }}
    >
      <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />

      {/* Indie zine bunga collage */}
      <BungaLayer />

      {/* Corner brackets */}
      <CornerFrame />

      {/* Top bar */}
      <header className="relative z-20 sticky top-0 backdrop-blur-md bg-white/85 border-b-2 border-black px-6 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-black animate-ping opacity-60" />
            <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-black" />
          </span>
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-black">
            Live · Enggar FM
          </span>
        </div>
        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-black hover:opacity-60 transition"
        >
          Spotify ↗
        </a>
      </header>

      <div className="relative z-10 px-6 md:px-12 pt-10 md:pt-12 pb-2 max-w-6xl mx-auto">
        {/* INDEX line */}
        <div className="flex items-center gap-3 mb-4 font-mono text-[11px] tracking-[0.3em] text-black/60">
          <span className="inline-block w-2 h-2 bg-black" />
          <span>INDEX / 003</span>
          <span className="flex-1 h-px bg-black/20" />
          <span>SIDE · A</span>
        </div>

        {/* Hero */}
        <section>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
            Sound<span className="italic font-light">track</span>
            <span className="inline-block align-top ml-2 text-2xl md:text-3xl font-mono font-normal text-black/40">
              ✦
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-sm md:text-base text-black/60 leading-relaxed">
            Suara latar untuk yang sedang dikerjakan. Indie lokal & luar negeri —
            dari Cottons sampai Radiohead — diuji pada sesi debug dini hari,
            dirangkai jadi mixtape pribadi.
          </p>
        </section>

        {/* Featured Now Playing */}
        <section className="mt-10 md:mt-14">
          <div className="font-mono text-[11px] tracking-[0.3em] text-black/60 mb-3">
            // NOW PLAYING — TRACK 01
          </div>
          <article className="relative bg-white border-2 border-black p-5 md:p-8 shadow-[8px_8px_0_0_#000]">
            {/* Tape reel decoration top-right */}
            <CassetteIcon className="hidden md:block absolute -top-6 -right-6 w-24 text-black bg-white" />

            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
              {/* Cover + vinyl */}
              <div className="relative shrink-0 mx-auto md:mx-0">
                <button
                  onClick={togglePlay}
                  className="relative aspect-square w-56 md:w-64 overflow-hidden border-2 border-black block focus:outline-none"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {featuredCoverImage ? (
                    <Image
                      src={featuredCoverImage}
                      alt={featured.album}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 224px, 256px"
                      priority
                    />
                  ) : (
                    <CoverFallback label={featured.album} />
                  )}
                  {/* corner ticks */}
                  <span className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-white mix-blend-difference" />
                  <span className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-white mix-blend-difference" />
                  <span className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-white mix-blend-difference" />
                  <span className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-white mix-blend-difference" />
                  <div className="absolute top-2 left-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white mix-blend-difference">
                    side a
                  </div>
                  <div className="absolute bottom-2 right-2 mix-blend-difference">
                    {isPlaying && <Equalizer tone="light" />}
                  </div>
                </button>

                {/* Vinyl peeking — pure black with white rings (no gradient) */}
                <div
                  className="absolute top-4 -right-12 hidden md:grid h-56 w-56 rounded-full place-items-center bg-black border-2 border-black"
                  style={{
                    animation: isPlaying
                      ? "vinylSpin 14s linear infinite"
                      : undefined,
                  }}
                >
                  <div className="absolute h-52 w-52 rounded-full border border-white/15" />
                  <div className="absolute h-44 w-44 rounded-full border border-white/10" />
                  <div className="absolute h-36 w-36 rounded-full border border-white/15" />
                  <div className="absolute h-28 w-28 rounded-full border border-white/10" />
                  <div className="absolute h-20 w-20 rounded-full border border-white/15" />
                  <div className="relative h-14 w-14 rounded-full bg-white overflow-hidden border-2 border-black">
                    {featuredCoverImage && (
                      <Image
                        src={featuredCoverImage}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    )}
                  </div>
                  <div className="absolute h-1.5 w-1.5 rounded-full bg-black z-10" />
                </div>
              </div>

              {/* Info + audio player */}
              <div className="relative flex-1 flex flex-col md:pl-32">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-black/50">
                  Featured Listen · #01
                </div>
                <h2 className="mt-2 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                  {featured.title}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-black/70 font-mono text-xs tracking-wider">
                  <span className="font-semibold text-black uppercase">
                    {featured.artist}
                  </span>
                  <span className="text-black/30">·</span>
                  <span className="uppercase">{featured.album}</span>
                  <span className="text-black/30">·</span>
                  <span>{featured.year}</span>
                </div>

                {/* Audio player */}
                <div className="mt-6 flex flex-col gap-3">
                  <div
                    className="relative h-1 w-full bg-black/10 cursor-pointer group"
                    onClick={seek}
                  >
                    <div
                      className="absolute inset-y-0 left-0 bg-black"
                      style={{ width: `${progress}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-black opacity-0 group-hover:opacity-100 transition -ml-1.5"
                      style={{ left: `${progress}%` }}
                    />
                  </div>

                  <div className="flex justify-between font-mono text-[10px] tabular-nums text-black/50 tracking-widest">
                    <span>{fmt(currentTime)}</span>
                    <span>− {fmt(Math.max(0, duration - currentTime))}</span>
                  </div>

                  <div className="flex items-center gap-3 mt-1">
                    <button
                      onClick={togglePlay}
                      className="h-12 w-12 bg-black text-white grid place-items-center hover:bg-white hover:text-black border-2 border-black active:scale-95 transition"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <button
                      onClick={stop}
                      className="h-10 w-10 bg-white text-black border-2 border-black grid place-items-center hover:bg-black hover:text-white active:scale-95 transition"
                      aria-label="Stop"
                    >
                      <StopIcon />
                    </button>
                    <span className="ml-auto font-mono text-[10px] tracking-widest text-black/40">
                      [ 320 KBPS ]
                    </span>
                  </div>
                </div>

                <div className="mt-6 hidden md:block text-sm text-black/60 italic border-l-2 border-black pl-4 font-light">
                  &ldquo;musik bukan hiburan — ia ritus harian agar kode tetap waras.&rdquo;
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Soundwave divider */}
        <div className="mt-14 mb-10 flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.3em] text-black/60 shrink-0">
            // SIGNAL
          </span>
          <SoundWave className="flex-1 h-6 text-black" />
        </div>

        {/* Top mixes */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-black/60">
                MIX / 02 — KURASI
              </div>
              <h3 className="mt-1 text-2xl md:text-4xl font-black tracking-tight uppercase">
                Mix Kesayangan
              </h3>
            </div>
            <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">
              {String(playlists.length).padStart(2, "0")} ITEMS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {playlists.map((p) => (
              <PlaylistCard
                key={p.name}
                playlist={p}
                onPlay={() =>
                  setCurrent({
                    title: p.name,
                    artist: "Various Artists",
                    album: p.name,
                    year: "2024",
                    length: "—",
                    cover: p.cover,
                  })
                }
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-black/40">
          <span>END / OF / SIDE A</span>
          <span>— WEJ ©</span>
        </footer>
      </div>

      {/* Sticky mini player */}
      <div className="sticky bottom-0 left-0 right-0 z-30 bg-white text-black border-t-2 border-black">
        <div
          className="relative h-1 w-full border-b border-black/15 cursor-pointer"
          onClick={seek}
        >
          <div
            className="absolute inset-y-0 left-0 bg-black"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="px-3 md:px-10 py-3 flex items-center gap-3 md:gap-5">
          <div className="h-11 w-11 md:h-12 md:w-12 shrink-0 bg-white border-2 border-black overflow-hidden relative shadow-[3px_3px_0_0_#000]">
            {current.title === featured.title && featuredCoverImage ? (
              <Image
                src={featuredCoverImage}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="48px"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center font-mono text-[8px] text-black/50">
                ♪
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-bold uppercase tracking-tight">
              {current.title}
            </div>
            <div className="truncate font-mono text-[10px] tracking-wider text-black/60">
              {current.artist} · {current.album}
            </div>
          </div>
          <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-black/50 tabular-nums border-2 border-black px-2 py-1">
            {fmt(currentTime)} / {fmt(duration || 0)}
          </span>
          <button
            onClick={() => setLiked((l) => !l)}
            className={`hidden md:grid h-10 w-10 place-items-center border-2 border-black transition ${
              liked ? "bg-black text-white" : "bg-white text-black hover:bg-black/5"
            }`}
            aria-label="Like"
          >
            <HeartIcon filled={liked} />
          </button>
          <button
            onClick={togglePlay}
            className="h-10 w-10 bg-white text-black border-2 border-black grid place-items-center hover:bg-black hover:text-white active:scale-95 transition"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <PauseIcon small /> : <PlayIcon small />}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Layout primitives ---------- */

function CornerFrame() {
  return (
    <>
      <span className="pointer-events-none fixed md:absolute top-16 left-4 md:top-20 md:left-6 w-5 h-5 border-t-2 border-l-2 border-black z-10" />
      <span className="pointer-events-none fixed md:absolute top-16 right-4 md:top-20 md:right-6 w-5 h-5 border-t-2 border-r-2 border-black z-10" />
      <span className="pointer-events-none fixed md:absolute bottom-32 left-4 md:bottom-24 md:left-6 w-5 h-5 border-b-2 border-l-2 border-black z-10" />
      <span className="pointer-events-none fixed md:absolute bottom-32 right-4 md:bottom-24 md:right-6 w-5 h-5 border-b-2 border-r-2 border-black z-10" />
    </>
  );
}

/* Bunga.svg scattered like indie zine collage, grayscaled to fit B/W theme */
function BungaLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      <img
        src="/assets/images/bunga.svg"
        alt=""
        className="absolute -top-10 -right-12 w-56 md:w-72 grayscale opacity-30 -rotate-12"
      />
      <img
        src="/assets/images/bunga.svg"
        alt=""
        className="absolute top-1/3 -left-16 w-40 md:w-56 grayscale opacity-25 rotate-45"
      />
      <img
        src="/assets/images/bunga.svg"
        alt=""
        className="absolute bottom-32 right-1/4 w-28 md:w-40 grayscale opacity-20 rotate-12"
      />
      <img
        src="/assets/images/bunga.svg"
        alt=""
        className="hidden md:block absolute top-2/3 right-4 w-24 grayscale opacity-25 -rotate-45"
      />

      {/* Mono labels */}
      <span className="hidden md:block absolute top-24 right-32 font-mono text-[10px] tracking-[0.3em] text-black/40 -rotate-12">
        ★ INDIE / FM
      </span>
      <span className="hidden md:block absolute bottom-44 left-24 font-mono text-[10px] tracking-[0.3em] text-black/40">
        MIXTAPE · 03
      </span>
    </div>
  );
}

/* ---------- Sub components ---------- */

function CoverFallback({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 bg-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent 0px,
            transparent 6px,
            rgba(0,0,0,0.9) 6px,
            rgba(0,0,0,0.9) 7px
          )`,
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className="bg-white border-2 border-black px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
          {label}
        </span>
      </div>
    </div>
  );
}

function PlaylistCard({
  playlist,
  onPlay,
}: {
  playlist: PlaylistData;
  onPlay: () => void;
}) {
  const { name, desc, count, tag, spotifyUrl, coverImage } = playlist;

  return (
    <div className="group relative bg-white border-2 border-black p-4 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]">
      <div className="flex items-center justify-between mb-3 font-mono text-[10px] tracking-widest text-black/60">
        <span>[ {tag.toUpperCase()} ]</span>
        <span className="tabular-nums">{String(count).padStart(2, "0")} TRK</span>
      </div>

      <div className="relative aspect-square w-full overflow-hidden border-2 border-black">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <CoverFallback label={name} />
        )}
        {/* corner ticks */}
        <span className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-white mix-blend-difference" />
        <span className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-white mix-blend-difference" />
        <span className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-white mix-blend-difference" />
        <span className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-white mix-blend-difference" />

        {spotifyUrl ? (
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.stopPropagation(); onPlay(); }}
            className="absolute right-3 bottom-3 h-11 w-11 bg-white text-black grid place-items-center border-2 border-black translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition hover:bg-black hover:text-white shadow-[3px_3px_0_0_#000]"
            aria-label={`Open ${name} on Spotify`}
          >
            <SpotifyIcon />
          </a>
        ) : (
          <button
            onClick={(e) => { e.stopPropagation(); onPlay(); }}
            className="absolute right-3 bottom-3 h-11 w-11 bg-white text-black grid place-items-center border-2 border-black translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition hover:bg-black hover:text-white shadow-[3px_3px_0_0_#000]"
            aria-label={`Play ${name}`}
          >
            <PlayIcon small />
          </button>
        )}
      </div>

      <div className="mt-3">
        <div className="font-bold uppercase tracking-tight truncate text-black text-base">
          {name}
        </div>
        <div className="text-[11px] md:text-xs text-black/60 line-clamp-2 mt-1 min-h-[2.25rem]">
          {desc}
        </div>
        {spotifyUrl && (
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 font-mono text-[10px] uppercase tracking-widest text-black/60 hover:text-black transition pt-2 border-t border-dashed border-black/30 w-full"
          >
            <SpotifyIcon size={12} />
            Buka di Spotify ↗
          </a>
        )}
      </div>
    </div>
  );
}

function Equalizer({
  compact = false,
  tone = "dark",
}: {
  compact?: boolean;
  tone?: "dark" | "light";
}) {
  const h = compact ? "h-3" : "h-5";
  const w = compact ? "w-[2px]" : "w-[3px]";
  const bar = tone === "light" ? "bg-white" : "bg-black";
  return (
    <div className={`flex items-end gap-[3px] ${h}`} aria-hidden="true">
      <span className={`${w} ${bar} origin-bottom h-full`} style={{ animation: "eqBar 0.9s ease-in-out infinite" }} />
      <span className={`${w} ${bar} origin-bottom h-full`} style={{ animation: "eqBar 0.7s ease-in-out infinite", animationDelay: "-0.2s" }} />
      <span className={`${w} ${bar} origin-bottom h-full`} style={{ animation: "eqBar 1.1s ease-in-out infinite", animationDelay: "-0.4s" }} />
      <span className={`${w} ${bar} origin-bottom h-full`} style={{ animation: "eqBar 0.8s ease-in-out infinite", animationDelay: "-0.6s" }} />
    </div>
  );
}

/* ---------- Decorative SVG ---------- */

function CassetteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="2" y="2" width="116" height="76" />
      <rect x="14" y="18" width="92" height="34" />
      <line x1="14" y1="30" x2="106" y2="30" />
      <circle cx="36" cy="40" r="8" />
      <circle cx="36" cy="40" r="2" fill="currentColor" />
      <circle cx="84" cy="40" r="8" />
      <circle cx="84" cy="40" r="2" fill="currentColor" />
      <line x1="44" y1="40" x2="76" y2="40" />
      <rect x="20" y="60" width="80" height="12" />
      <text x="30" y="69" fill="currentColor" stroke="none" fontFamily="monospace" fontSize="6">
        MIXTAPE · WEJ
      </text>
    </svg>
  );
}

function SoundWave({ className }: { className?: string }) {
  const heights = [
    8, 14, 6, 18, 10, 22, 12, 16, 9, 24, 11, 17, 7, 20, 13, 15,
    19, 8, 21, 10, 14, 23, 12, 6, 18, 9, 16, 11, 25, 13, 8, 17,
    10, 22, 14, 7, 19, 12, 21, 9, 15, 11, 18, 6, 24, 13, 8, 16,
  ];
  return (
    <svg viewBox={`0 0 ${heights.length * 4} 30`} preserveAspectRatio="none" className={className}>
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 4}
          y={(30 - h) / 2}
          width="2"
          height={h}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

/* ---------- Icons ---------- */

function PlayIcon({ small = false }: { small?: boolean }) {
  const s = small ? 14 : 22;
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>;
}

function PauseIcon({ small = false }: { small?: boolean }) {
  const s = small ? 14 : 22;
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>;
}

function StopIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 6h12v12H6z" /></svg>;
}

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function SpotifyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}
