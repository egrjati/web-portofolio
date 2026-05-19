export default function Home() {
  return (
    <div
      className="relative min-h-[calc(100dvh-4rem)] md:h-full md:overflow-y-auto w-full bg-white text-black"
      style={{
        backgroundImage: `radial-gradient(rgba(0,0,0,0.13) 1px, transparent 1px)`,
        backgroundSize: "26px 26px",
      }}
    >
      <AbstractLayer />
      <CornerFrame />

      <div className="relative z-10 flex flex-col-reverse md:flex-row md:h-full bg-transparent px-8 py-8 md:px-24 md:py-12 gap-8 md:gap-10">
        {/* Konten Kiri */}
        <div className="w-full max-w-93.25 mx-auto md:mx-0 relative">
          {/* INDEX line */}
          <div className="flex items-center gap-3 mb-6 font-mono text-[11px] tracking-[0.3em] text-black/60">
            <span className="inline-block w-2 h-2 bg-black" />
            <span>INDEX / 00</span>
            <span className="flex-1 h-px bg-black/25" />
            <span>HOME</span>
          </div>

          {/* Greeting */}
          <p className="font-mono text-[11px] tracking-[0.3em] text-black/50 mb-2">
            ✦ HI · I&apos;M
          </p>
          <p className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3 leading-none">
            Wahyu Enggar <span className="italic font-light">Jati</span>
          </p>

          <h1 className="text-2xl px-3 py-1 font-semibold mb-5 bg-[#1961A9]/80 inline-block">
            Web Developer & IoT Engineer{" "}
          </h1>

          <p className="text-black/60 text-base tracking-wide mb-3 leading-relaxed">
            I craft fast, responsive, and visually compelling web experiences —
            from clean, intuitive interfaces to robust full-stack applications.
            With a strong command of modern web technologies, I turn complex
            requirements into seamless digital products that are not only
            functional, but delightful to use. Every line of code is written
            with performance, scalability, and user experience in mind.
          </p>

          <div className="flex justify-end items-center gap-3 my-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-black/40">
              ↘ PART · 02
            </span>
            <hr className="border-t-2 w-32 border-black/60" />
          </div>

          <p className="text-black/60 text-base tracking-wide leading-relaxed">
            Beyond the screen, I build intelligent systems that bridge the
            physical and digital world. As an IoT Engineer, I design and develop
            connected devices — from sensor integration and embedded firmware to
            real-time data pipelines and cloud dashboards. I believe the future
            lies in smart, interconnected environments, and I engineer solutions
            that make that future tangible.
          </p>

          {/* Status */}
          <div className="flex items-center gap-2.5 my-2 font-mono text-[11px] tracking-[0.25em] text-black/70">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-black animate-ping opacity-60" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-black" />
            </span>
            <span>AVAILABLE · FOR · COLLAB — 2026</span>
          </div>
        </div>

        {/* Konten Kanan — DIPERTAHANKAN */}
        <div className="flex-1 flex items-end justify-center relative min-h-80 md:min-h-0 md:pb-0">
          {/* Background kertas + icon grid */}
          <div className="absolute right-0 top-0 w-72">
            <img src="/assets/images/background-kertas.svg" alt="" className="w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 pt-5 pb-6">
              <div className="grid grid-cols-3 gap-6 w-full">
                <img src="/assets/icon/nextjs.svg"      alt="Next.js"    className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/vuejs.svg"       alt="Vue.js"     className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/tailwindcss.svg" alt="Tailwind"   className="w-16 h-16 mx-auto" />
              </div>
              <div className="grid grid-cols-3 gap-6 w-full">
                <img src="/assets/icon/laravel.svg"     alt="Laravel"    className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/nodejs.svg"      alt="Node.js"    className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/git.svg"         alt="Git"        className="w-16 h-16 mx-auto" />
              </div>
              <div className="grid grid-cols-3 gap-6 w-full">
                <img src="/assets/icon/mariadb.svg"     alt="MariaDB"    className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/mysql.svg"       alt="MySQL"      className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/postgresql.svg"  alt="PostgreSQL" className="w-16 h-16 mx-auto" />
              </div>
              <div className="flex justify-center w-full">
                <img src="/assets/icon/Arduino.svg"     alt="Arduino"    className="w-16 h-16" />
              </div>
            </div>
          </div>
          {/* Plantpot */}
          <img
            src="/assets/images/plantpot.svg"
            alt=""
            className="absolute bottom-0 right-1 z-5 w-36 md:translate-y-12"
          />
          {/* Foto */}
          <img
            src="/assets/images/fotoku.svg"
            alt="Wahyu Enggar Jati"
            className="relative z-10 w-80 md:translate-y-12 -translate-x-16"
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- Layout primitives ---------- */

function CornerFrame() {
  return (
    <>
      <span className="pointer-events-none absolute top-4 left-4 md:top-6 md:left-6 w-5 h-5 border-t-2 border-l-2 border-black z-20" />
      <span className="pointer-events-none absolute top-4 right-4 md:top-6 md:right-6 w-5 h-5 border-t-2 border-r-2 border-black z-20" />
      <span className="pointer-events-none absolute bottom-4 left-4 md:bottom-6 md:left-6 w-5 h-5 border-b-2 border-l-2 border-black z-20" />
      <span className="pointer-events-none absolute bottom-4 right-4 md:bottom-6 md:right-6 w-5 h-5 border-b-2 border-r-2 border-black z-20" />
    </>
  );
}

/* ---------- Abstract decoration layer ---------- */

/* Decorations concentrated on the right half (near photo panel) and far
   edges only, so the left text column stays clean and readable. */
function AbstractLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Crosshair circle — top-right edge, above paper */}
      <CrosshairCircle className="hidden md:block absolute top-8 right-10 w-24 text-black/45" />

      {/* Wireframe sphere — far right, behind photo area */}
      <WireframeSphere className="hidden lg:block absolute bottom-20 right-8 w-64 text-black/10" />

      {/* Triangle outline — top-right beyond paper */}
      <TriangleOutline className="hidden lg:block absolute top-32 right-1/3 w-20 text-black/30 rotate-12" />

      {/* Halftone dots block — bottom-right corner */}
      <HalftoneBlock className="hidden md:block absolute bottom-10 right-12 w-24" />

      {/* Numbered tag near top-right */}
      <NumberTag n="01" className="hidden md:block absolute top-10 right-44 text-black/50" />

      {/* Coordinate label — far right edge */}
      <span className="hidden lg:block absolute top-1/3 right-4 font-mono text-[10px] tracking-[0.25em] text-black/45 text-right">
        X · 24.5°<br />Y · 12.8°
      </span>

      {/* Plus marks — right side only */}
      <PlusMark className="hidden md:block absolute top-1/2 right-12 w-4 text-black/45" />
      <PlusMark className="hidden md:block absolute bottom-24 right-1/3 w-3 text-black/40" />
      <CrossMark className="hidden md:block absolute top-1/4 right-1/4 w-3 text-black/40" />

      {/* Square outline — right side */}
      <span className="hidden md:block absolute bottom-1/3 right-8 w-10 h-10 border-2 border-black/30 rotate-12" />

      {/* Mono vertical label — far right edge */}
      <span className="hidden md:block absolute top-24 right-2 font-mono text-[10px] tracking-[0.3em] text-black/40 rotate-90 origin-top-right">
        REV.A · 2026
      </span>
    </div>
  );
}

/* ---------- Abstract SVG primitives ---------- */

type SVGProps = { className?: string };

function CrosshairCircle({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="50" cy="50" r="44" />
      <circle cx="50" cy="50" r="28" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
      <line x1="50" y1="2" x2="50" y2="20" />
      <line x1="50" y1="80" x2="50" y2="98" />
      <line x1="2" y1="50" x2="20" y2="50" />
      <line x1="80" y1="50" x2="98" y2="50" />
      <text x="56" y="14" fill="currentColor" stroke="none" fontFamily="monospace" fontSize="6">
        N
      </text>
    </svg>
  );
}

function WireframeSphere({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <circle cx="100" cy="100" r="92" />
      <ellipse cx="100" cy="100" rx="92" ry="30" />
      <ellipse cx="100" cy="100" rx="92" ry="60" />
      <ellipse cx="100" cy="100" rx="30" ry="92" />
      <ellipse cx="100" cy="100" rx="60" ry="92" />
      <line x1="8" y1="100" x2="192" y2="100" />
      <line x1="100" y1="8" x2="100" y2="192" />
    </svg>
  );
}

function HalftoneBlock({ className }: SVGProps) {
  const cols = 12;
  const rows = 8;
  return (
    <svg viewBox={`0 0 ${cols * 8} ${rows * 8}`} className={className}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const radius = Math.max(0.3, 3 - c * 0.22 - r * 0.05);
          return (
            <circle
              key={`${r}-${c}`}
              cx={c * 8 + 4}
              cy={r * 8 + 4}
              r={radius}
              fill="rgba(0,0,0,0.5)"
            />
          );
        })
      )}
    </svg>
  );
}

function TriangleOutline({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 90" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <polygon points="50,6 94,82 6,82" />
      <polygon points="50,30 74,72 26,72" strokeDasharray="3 3" />
      <circle cx="50" cy="56" r="2" fill="currentColor" />
    </svg>
  );
}

function PlusMark({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function CrossMark({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

function Asterisk({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

function NumberTag({ n, className }: { n: string; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest ${className ?? ""}`}>
      <span className="border-2 border-current w-5 h-5 grid place-items-center text-[9px] font-bold">
        {n}
      </span>
      <span>·</span>
    </div>
  );
}
