"use client";

import { useState } from "react";

type Project = {
  id: string;
  title: string;
  tag: string;
  year: string;
  stack: string;
};

const projects: Project[] = [
  { id: "01", title: "Smart Home Dashboard", tag: "Web Dev", year: "2025", stack: "Next.js · MQTT" },
  { id: "02", title: "Hydroponics Monitor", tag: "IoT", year: "2024", stack: "ESP32 · Firebase" },
  { id: "03", title: "Portfolio v3", tag: "Web Dev", year: "2024", stack: "Next.js · Tailwind" },
  { id: "04", title: "Indoor Air Tracker", tag: "IoT", year: "2024", stack: "Arduino · LoRa" },
  { id: "05", title: "Inventory System", tag: "Web Dev", year: "2023", stack: "Laravel · MySQL" },
  { id: "06", title: "RFID Attendance", tag: "IoT", year: "2023", stack: "ESP8266 · Node-RED" },
];

const BG_GREEN = "#2A8559";

export default function Project() {
  const [filter, setFilter] = useState<string>("ALL");
  const categories = ["ALL", ...Array.from(new Set(projects.map((p) => p.tag.toUpperCase())))];
  const visible = filter === "ALL" ? projects : projects.filter((p) => p.tag.toUpperCase() === filter);

  return (
    <div
      className="relative min-h-[calc(100dvh-4rem)] md:h-full md:overflow-y-auto w-full text-white"
      style={{
        backgroundColor: BG_GREEN,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Blueprint decorations layer */}
      <BlueprintLayer />

      {/* Corner brackets */}
      <CornerFrame />

      <div className="relative px-6 md:px-12 pt-10 md:pt-14 pb-2 max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4 font-mono text-[11px] tracking-[0.3em] text-white/80">
            <span className="inline-block w-2 h-2 bg-white" />
            <span>INDEX / 001</span>
            <span className="flex-1 h-px bg-white/30" />
            <span>{String(visible.length).padStart(2, "0")} ITEMS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
            Pro<span className="italic font-light">jects</span>
            <span className="inline-block align-top ml-2 text-2xl md:text-3xl font-mono font-normal text-white/60">
              /
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm md:text-base text-white/70 leading-relaxed">
            Workshop log — selected experiments across the web and the wired
            world. Built, broken, rebuilt. Soldered, shipped, sometimes both.
          </p>
        </header>

        {/* Filter chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8 md:mb-10 font-mono text-[11px] tracking-widest">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 border-2 transition-colors ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white/40 hover:border-white"
                }`}
              >
                [ {cat} ]
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visible.map((p) => (
            <article
              key={p.id}
              className="group relative bg-white text-black border-2 border-black p-5 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[11px] tracking-widest text-black/50">
                  /{p.id}
                </span>
                <span className="font-mono text-lg leading-none transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              {/* Preview — schematic style */}
              <div className="relative h-32 mb-5 border border-black/20 overflow-hidden bg-white">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "10px 10px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-[9px] tracking-widest text-black/60">
                  <span>— {p.tag.toUpperCase()} —</span>
                  <span className="mt-1 text-[8px]">FIG. {p.id} · {p.year}</span>
                </div>
                <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-black" />
                <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-black" />
                <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-black" />
                <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-black" />
              </div>

              <h3 className="text-lg font-bold leading-tight mb-2 uppercase tracking-tight">
                {p.title}
              </h3>

              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-black/60 pt-3 border-t border-dashed border-black/30">
                <span>{p.stack.toUpperCase()}</span>
                <span>· {p.year}</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-16 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-white/60">
          <span>END / OF / LOG</span>
          <span>— WEJ ©</span>
        </footer>
      </div>
    </div>
  );
}

function CornerFrame() {
  return (
    <>
      <span className="pointer-events-none fixed md:absolute top-4 left-4 md:top-6 md:left-6 w-5 h-5 border-t-2 border-l-2 border-white z-10" />
      <span className="pointer-events-none fixed md:absolute top-4 right-4 md:top-6 md:right-6 w-5 h-5 border-t-2 border-r-2 border-white z-10" />
      <span className="pointer-events-none fixed md:absolute bottom-20 left-4 md:bottom-6 md:left-6 w-5 h-5 border-b-2 border-l-2 border-white z-10" />
      <span className="pointer-events-none fixed md:absolute bottom-20 right-4 md:bottom-6 md:right-6 w-5 h-5 border-b-2 border-r-2 border-white z-10" />
    </>
  );
}

/* Blueprint-style workshop decorations.
   Positioned absolutely, behind content, low opacity. */
function BlueprintLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Screwdriver — top right */}
      <Screwdriver className="absolute top-24 right-6 md:right-16 w-40 md:w-56 text-white/35 -rotate-12" />

      {/* Resistor schematic — top left, below header */}
      <Resistor className="absolute top-48 left-2 md:left-8 w-44 md:w-60 text-white/30" />

      {/* Cable curve — middle left */}
      <CableCurve className="absolute top-1/2 -left-10 w-64 md:w-96 text-white/25" />

      {/* IC chip — middle right */}
      <ICChip className="absolute top-[55%] right-2 md:right-8 w-32 md:w-44 text-white/30 rotate-6" />

      {/* Capacitor — left side */}
      <Capacitor className="hidden md:block absolute top-[70%] left-6 w-28 text-white/30" />

      {/* Soldering iron — bottom right */}
      <SolderIron className="absolute bottom-32 right-6 md:right-16 w-48 md:w-72 text-white/35 rotate-18" />

      {/* Screws scattered */}
      <Screw className="absolute top-32 left-1/3 w-6 text-white/30" />
      <Screw className="absolute top-2/3 right-1/4 w-6 text-white/30" />
      <Screw className="absolute bottom-40 left-1/4 w-6 text-white/30" />

      {/* Nut */}
      <Nut className="absolute top-1/2 left-1/2 w-7 text-white/30" />

      {/* Measurement annotation */}
      <Measurement className="absolute top-[42%] right-1/3 w-28 text-white/40" />

      {/* Mono labels */}
      <span className="absolute top-6 right-20 font-mono text-[10px] tracking-[0.3em] text-white/40 hidden md:block">
        REV.A — 2026
      </span>
      <span className="absolute bottom-24 left-10 font-mono text-[10px] tracking-[0.3em] text-white/40 hidden md:block">
        SCALE 1:1
      </span>
    </div>
  );
}

/* ===== Inline SVG primitives (white-line schematic style) ===== */

type SVGProps = { className?: string };

function Screwdriver({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 220 50" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      {/* handle */}
      <rect x="2" y="14" width="70" height="22" rx="4" />
      <line x1="14" y1="14" x2="14" y2="36" />
      <line x1="26" y1="14" x2="26" y2="36" />
      <line x1="38" y1="14" x2="38" y2="36" />
      <line x1="50" y1="14" x2="50" y2="36" />
      <line x1="62" y1="14" x2="62" y2="36" />
      {/* ferrule */}
      <rect x="72" y="18" width="10" height="14" />
      {/* shaft */}
      <line x1="82" y1="25" x2="200" y2="25" strokeWidth="2" />
      {/* tip (philips) */}
      <polyline points="200,20 210,25 200,30" />
      <line x1="200" y1="22" x2="210" y2="28" />
      <line x1="200" y1="28" x2="210" y2="22" />
    </svg>
  );
}

function SolderIron({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 260 80" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      {/* cable */}
      <path d="M 0 60 C 20 40, 30 70, 50 50" />
      {/* handle */}
      <rect x="50" y="36" width="90" height="28" rx="6" />
      <line x1="65" y1="36" x2="65" y2="64" />
      <line x1="80" y1="36" x2="80" y2="64" />
      <line x1="95" y1="36" x2="95" y2="64" />
      <line x1="110" y1="36" x2="110" y2="64" />
      <line x1="125" y1="36" x2="125" y2="64" />
      {/* shaft */}
      <polygon points="140,42 200,42 210,50 200,58 140,58" />
      {/* tip */}
      <polyline points="210,50 230,50" strokeWidth="2" />
      <polygon points="230,46 244,50 230,54" fill="currentColor" stroke="none" opacity="0.6" />
      {/* smoke wisps */}
      <path d="M 235 40 Q 240 30, 245 36 T 252 28" opacity="0.7" />
      <path d="M 240 22 Q 248 14, 250 22" opacity="0.5" />
    </svg>
  );
}

function CableCurve({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 320 120" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M 5 60 C 60 5, 120 115, 180 55 S 280 90, 315 40" />
      {/* connectors */}
      <circle cx="6" cy="60" r="6" />
      <circle cx="6" cy="60" r="2" fill="currentColor" />
      <rect x="305" y="32" width="14" height="16" />
      <line x1="319" y1="36" x2="324" y2="36" />
      <line x1="319" y1="44" x2="324" y2="44" />
    </svg>
  );
}

function Resistor({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 240 40" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <line x1="0" y1="20" x2="50" y2="20" />
      {/* body */}
      <rect x="50" y="8" width="140" height="24" rx="2" />
      {/* bands */}
      <line x1="75" y1="8" x2="75" y2="32" strokeWidth="3" />
      <line x1="95" y1="8" x2="95" y2="32" strokeWidth="3" />
      <line x1="125" y1="8" x2="125" y2="32" strokeWidth="3" />
      <line x1="160" y1="8" x2="160" y2="32" strokeWidth="3" />
      <line x1="190" y1="20" x2="240" y2="20" />
      {/* label */}
      <text x="80" y="6" fill="currentColor" stroke="none" fontFamily="monospace" fontSize="7">
        10kΩ
      </text>
    </svg>
  );
}

function Capacitor({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      {/* leads */}
      <line x1="0" y1="30" x2="50" y2="30" />
      <line x1="70" y1="30" x2="120" y2="30" />
      {/* plates */}
      <line x1="50" y1="10" x2="50" y2="50" strokeWidth="2.5" />
      <path d="M 70 10 Q 78 30, 70 50" />
      {/* polarity */}
      <text x="34" y="20" fill="currentColor" stroke="none" fontFamily="monospace" fontSize="8">
        +
      </text>
      <text x="80" y="20" fill="currentColor" stroke="none" fontFamily="monospace" fontSize="8">
        −
      </text>
    </svg>
  );
}

function ICChip({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      {/* body */}
      <rect x="25" y="15" width="90" height="70" />
      {/* notch */}
      <path d="M 60 15 Q 70 25, 80 15" />
      {/* pins left */}
      <line x1="15" y1="30" x2="25" y2="30" />
      <line x1="15" y1="45" x2="25" y2="45" />
      <line x1="15" y1="60" x2="25" y2="60" />
      <line x1="15" y1="75" x2="25" y2="75" />
      {/* pins right */}
      <line x1="115" y1="30" x2="125" y2="30" />
      <line x1="115" y1="45" x2="125" y2="45" />
      <line x1="115" y1="60" x2="125" y2="60" />
      <line x1="115" y1="75" x2="125" y2="75" />
      <text x="50" y="55" fill="currentColor" stroke="none" fontFamily="monospace" fontSize="8">
        ESP32
      </text>
    </svg>
  );
}

function Screw({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="12" y1="5" x2="12" y2="19" />
    </svg>
  );
}

function Nut({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <polygon points="14,2 25,8 25,20 14,26 3,20 3,8" />
      <circle cx="14" cy="14" r="5" />
    </svg>
  );
}

function Measurement({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 120 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <line x1="2" y1="12" x2="118" y2="12" />
      <polygon points="2,12 8,8 8,16" fill="currentColor" stroke="none" />
      <polygon points="118,12 112,8 112,16" fill="currentColor" stroke="none" />
      <line x1="2" y1="4" x2="2" y2="20" />
      <line x1="118" y1="4" x2="118" y2="20" />
      <text x="48" y="9" fill="currentColor" stroke="none" fontFamily="monospace" fontSize="7">
        42mm
      </text>
    </svg>
  );
}
