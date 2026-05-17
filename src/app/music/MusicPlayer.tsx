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
    <div className="relative min-h-[calc(100dvh-4rem)] md:h-full md:overflow-y-auto w-full text-black bg-white">
      <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 opacity-30 blur-3xl"
          style={{ animation: "floatGlow 9s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-zinc-400 to-zinc-700 opacity-20 blur-3xl"
          style={{
            animation: "floatGlow 11s ease-in-out infinite",
            animationDelay: "-3s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.7) 1px, transparent 0)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/80 border-b-2 border-black/15 px-6 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-black animate-ping opacity-60" />
            <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-black" />
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-black/70">
            Live · Enggar FM
          </span>
        </div>
        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] md:text-xs uppercase tracking-widest text-black hover:text-black/60 transition"
        >
          Open in Spotify ↗
        </a>
      </header>

      <div className="relative">
        {/* Hero */}
        <section className="px-6 md:px-10 pt-10 md:pt-14">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            songs not meant for{" "}
            <span className="bg-gradient-to-r from-black via-zinc-500 to-black bg-clip-text text-transparent italic">
              everyone.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-black/60 leading-relaxed">
            Sebuah ruang kecil di portofolio ini, tempat deadline berhenti
            berteriak dan headphone yang bicara. Geser ke bawah untuk dengar apa
            yang sedang berputar — semua kurasi pribadi, semua diuji pada sesi
            debugging dini hari.
          </p>
        </section>

        {/* Featured Now Playing */}
        <section className="px-6 md:px-10 mt-10">
          <div className="relative overflow-hidden rounded-3xl border-2 border-black/15 bg-zinc-50 p-5 md:p-8">
            <div className="pointer-events-none absolute -inset-32 bg-gradient-to-tr from-zinc-200 to-zinc-400 opacity-30 blur-3xl" />

            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
              {/* Cover + vinyl */}
              <div className="relative shrink-0 mx-auto md:mx-0">
                <button
                  onClick={togglePlay}
                  className="relative aspect-square w-56 md:w-64 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-black/20 block focus:outline-none"
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
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${featured.cover.from} ${featured.cover.via ?? ""} ${featured.cover.to}`}
                    />
                  )}
                  <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_55%)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-white/80">
                    side a
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div className="font-bold text-white text-base leading-tight drop-shadow">
                      {featured.album}
                    </div>
                    {isPlaying && <Equalizer tone="light" />}
                  </div>
                </button>

                {/* Vinyl peeking */}
                <div
                  className="absolute top-4 -right-12 hidden md:grid h-56 w-56 rounded-full place-items-center bg-gradient-to-br from-zinc-800 via-black to-zinc-900 shadow-2xl shadow-black/50 ring-1 ring-black/20"
                  style={{
                    animation: isPlaying
                      ? "vinylSpin 14s linear infinite"
                      : undefined,
                  }}
                >
                  <div className="h-32 w-32 rounded-full border border-white/5" />
                  <div className="absolute h-20 w-20 rounded-full border border-white/5" />
                  <div
                    className={`absolute h-14 w-14 rounded-full bg-gradient-to-br ${featured.cover.from} ${featured.cover.to} ring-1 ring-white/20 overflow-hidden`}
                  >
                    {featuredCoverImage && (
                      <Image
                        src={featuredCoverImage}
                        alt=""
                        fill
                        className="object-cover opacity-70"
                        sizes="56px"
                      />
                    )}
                  </div>
                  <div className="absolute h-2 w-2 rounded-full bg-white" />
                </div>
              </div>

              {/* Info + audio player */}
              <div className="relative flex-1 flex flex-col md:pl-32">
                <div className="text-[10px] uppercase tracking-[0.35em] text-black/50">
                  Featured Listen · #01
                </div>
                <h2 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
                  {featured.title}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-black/70">
                  <span className="font-semibold text-black">
                    {featured.artist}
                  </span>
                  <span className="text-black/30">·</span>
                  <span>{featured.album}</span>
                  <span className="text-black/30">·</span>
                  <span>{featured.year}</span>
                </div>

                {/* Custom audio player */}
                <div className="mt-6 flex flex-col gap-3">
                  {/* Progress bar */}
                  <div
                    className="relative h-1.5 w-full rounded-full bg-black/10 cursor-pointer group"
                    onClick={seek}
                  >
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-black transition-all"
                      style={{ width: `${progress}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition -ml-1.5"
                      style={{ left: `${progress}%` }}
                    />
                  </div>

                  {/* Time */}
                  <div className="flex justify-between text-[11px] tabular-nums text-black/40">
                    <span>{fmt(currentTime)}</span>
                    <span>{fmt(duration)}</span>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="h-12 w-12 rounded-full bg-black text-white grid place-items-center hover:bg-zinc-800 active:scale-95 transition shadow-md shadow-black/30"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <button
                      onClick={stop}
                      className="h-10 w-10 rounded-full bg-white text-black border-2 border-black grid place-items-center hover:bg-black hover:text-white active:scale-95 transition"
                      aria-label="Stop"
                    >
                      <StopIcon />
                    </button>
                  </div>
                </div>

                <div className="mt-6 hidden md:block text-sm text-black/50 italic border-l-2 border-black/30 pl-4">
                  &ldquo;musik bukan hiburan — ia ritus harian agar kode tetap
                  waras.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top mixes */}
        <section className="px-6 md:px-10 mt-14 mb-5">
          <SectionHeading kicker="Made for you" title="Mix kesayangan" />
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
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
      </div>

      {/* Sticky mini player */}
      <div className="sticky bottom-0 left-0 right-0 z-30 bg-white text-black border-t-2 border-black">
        <div
          className="relative h-0.75 w-full border-b border-black/15 cursor-pointer"
          onClick={seek}
        >
          <div
            className="absolute inset-y-0 left-0 bg-black transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="px-3 md:px-10 py-3 flex items-center gap-3 md:gap-5">
          <div
            className={`h-11 w-11 md:h-12 md:w-12 rounded-md shrink-0 bg-gradient-to-br ${current.cover.from} ${current.cover.to} border border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] overflow-hidden relative`}
          >
            {current.title === featured.title && featuredCoverImage ? (
              <Image
                src={featuredCoverImage}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="48px"
              />
            ) : null}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold">
              {current.title}
            </div>
            <div className="truncate text-[11px] text-black/60">
              {current.artist} · {current.album}
            </div>
          </div>
          <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.3em] text-black/40 tabular-nums border border-black/20 rounded px-2 py-1">
            {fmt(currentTime)} / {fmt(duration || 0)}
          </span>
          <button
            onClick={() => setLiked((l) => !l)}
            className={`hidden md:grid h-10 w-10 place-items-center rounded-full border-2 border-black transition ${
              liked ? "bg-black text-white" : "bg-white text-black hover:bg-black/5"
            }`}
            aria-label="Like"
          >
            <HeartIcon filled={liked} />
          </button>
          <button
            onClick={togglePlay}
            className="h-10 w-10 rounded-full bg-white text-black border-2 border-black grid place-items-center hover:bg-black hover:text-white active:scale-95 transition"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <PauseIcon small /> : <PlayIcon small />}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Sub components ---------- */

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex items-end justify-between">
      <div>
        <div className="text-[10px] uppercase tracking-[0.35em] text-black/50">
          {kicker}
        </div>
        <h3 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h3>
      </div>
      <button className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-black/40 hover:text-black transition">
        Lihat semua
      </button>
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
  const { name, desc, count, cover, tag, spotifyUrl, coverImage } = playlist;

  return (
    <div className="group relative overflow-hidden rounded-2xl border-2 border-black/10 bg-white hover:bg-zinc-50 transition p-3 md:p-4">
      <div
        className={`relative aspect-square w-full rounded-xl overflow-hidden shadow-lg shadow-black/30 ring-1 ring-black/15 ${
          coverImage ? "" : `bg-gradient-to-br ${cover.from} ${cover.via ?? ""} ${cover.to}`
        }`}
      >
        {coverImage && (
          <Image
            src={coverImage}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.4),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] text-white/90 font-medium">
          {tag}
        </div>
        <div className="absolute bottom-3 left-3 right-14 text-xl md:text-2xl font-extrabold leading-tight text-white drop-shadow">
          {name}
        </div>
        {spotifyUrl ? (
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.stopPropagation(); onPlay(); }}
            className="absolute right-3 bottom-3 h-11 w-11 rounded-full bg-white text-black grid place-items-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition shadow-lg shadow-black/40 hover:scale-110 ring-1 ring-black/10"
            aria-label={`Open ${name} on Spotify`}
          >
            <SpotifyIcon />
          </a>
        ) : (
          <button
            onClick={(e) => { e.stopPropagation(); onPlay(); }}
            className="absolute right-3 bottom-3 h-11 w-11 rounded-full bg-white text-black grid place-items-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition shadow-lg shadow-black/40 hover:scale-110 ring-1 ring-black/10"
            aria-label={`Play ${name}`}
          >
            <PlayIcon small />
          </button>
        )}
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between gap-2">
          <div className="font-semibold truncate text-black">{name}</div>
          <div className="text-[10px] text-black/40 tabular-nums shrink-0">
            {count} lagu
          </div>
        </div>
        <div className="text-[11px] md:text-xs text-black/60 line-clamp-2 mt-1 min-h-[2.25rem]">
          {desc}
        </div>
        {spotifyUrl && (
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-[10px] uppercase tracking-widest text-black/50 hover:text-black transition"
          >
            <SpotifyIcon size={12} />
            Buka di Spotify
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
      <span className={`${w} ${bar} rounded-full origin-bottom h-full`} style={{ animation: "eqBar 0.9s ease-in-out infinite" }} />
      <span className={`${w} ${bar} rounded-full origin-bottom h-full`} style={{ animation: "eqBar 0.7s ease-in-out infinite", animationDelay: "-0.2s" }} />
      <span className={`${w} ${bar} rounded-full origin-bottom h-full`} style={{ animation: "eqBar 1.1s ease-in-out infinite", animationDelay: "-0.4s" }} />
      <span className={`${w} ${bar} rounded-full origin-bottom h-full`} style={{ animation: "eqBar 0.8s ease-in-out infinite", animationDelay: "-0.6s" }} />
    </div>
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
