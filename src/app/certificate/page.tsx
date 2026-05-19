"use client";

import { useEffect, useState } from "react";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  file: string;
};

const certificates: Certificate[] = [
  {
    id: "01",
    title: "Associate Computer Network Technician",
    issuer: "BNSP",
    year: "2024",
    category: "Network",
    file: "/assets/certificate/Certificate_of_Competence_Associate_Computer_Network_Technician.pdf",
  },
  {
    id: "02",
    title: "Learn Data Analytics",
    issuer: "RevoU Tech Academy",
    year: "2024",
    category: "Data",
    file: "/assets/certificate/RevoU Tech Academy - Learn Data Analytics.pdf",
  },
  {
    id: "03",
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2024",
    category: "Web Dev",
    file: "/assets/certificate/Web Development Fundamentals.pdf",
  },
  {
    id: "04",
    title: "Workshop Backend Web Development",
    issuer: "Universitas 17 Agustus 1945 Surabaya",
    year: "2024",
    category: "Web Dev",
    file: "/assets/certificate/WORKSHOP BACKEND WEB DEVELOPMENT.pdf",
  },
  {
    id: "05",
    title: "Peraih Karya Menarik Versi Media Masa",
    issuer: "Universitas 17 Agustus 1945 Surabaya",
    year: "2024",
    category: "Award",
    file: "/assets/certificate/sertifikat peraih karya menarik versi media masa.pdf",
  },
];

export default function Certificate() {
  const [active, setActive] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", ...Array.from(new Set(certificates.map((c) => c.category.toUpperCase())))];
  const visible =
    filter === "ALL"
      ? certificates
      : certificates.filter((c) => c.category.toUpperCase() === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <div
      className="relative min-h-[calc(100dvh-4rem)] md:h-full md:overflow-y-auto w-full bg-white text-black"
      style={{
        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1px)
        `,
        backgroundSize: "22px 22px",
      }}
    >
      {/* Corner brackets — futuristic frame */}
      <CornerFrame />

      <div className="relative px-6 md:px-12 pt-10 md:pt-14 pb-2 max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4 font-mono text-[11px] tracking-[0.3em] text-black/60">
            <span className="inline-block w-2 h-2 bg-black" />
            <span>INDEX / 002</span>
            <span className="flex-1 h-px bg-black/20" />
            <span>{String(visible.length).padStart(2, "0")} ITEMS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
            Certi<span className="italic font-light">ficates</span>
            <span className="inline-block align-top ml-2 text-2xl md:text-3xl font-mono font-normal text-black/40">
              *
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm md:text-base text-black/60 leading-relaxed">
            A curated archive of credentials, courses, and certifications —
            collected along the way. Click any card to open the document.
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
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/30 hover:border-black"
                }`}
              >
                [ {cat} ]
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visible.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setActive(cert)}
              className="group relative text-left bg-white border-2 border-black p-5 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]"
            >
              {/* Top row: id + arrow */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[11px] tracking-widest text-black/50">
                  /{cert.id}
                </span>
                <span className="font-mono text-lg leading-none transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              {/* Preview ASCII / mock cert */}
              <div className="relative h-32 mb-5 border border-black/20 overflow-hidden bg-white">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      0deg,
                      transparent 0px,
                      transparent 7px,
                      rgba(0,0,0,0.08) 7px,
                      rgba(0,0,0,0.08) 8px
                    )`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-[9px] tracking-widest text-black/60">
                  <span>— CERTIFICATE —</span>
                  <span className="mt-1 text-[8px]">N° {cert.id} · {cert.year}</span>
                </div>
                {/* corner ticks */}
                <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-black" />
                <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-black" />
                <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-black" />
                <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-black" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold leading-tight mb-2 uppercase tracking-tight">
                {cert.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-black/60 pt-3 border-t border-dashed border-black/30">
                <span>{cert.issuer.toUpperCase()}</span>
                <span>· {cert.year}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer mark */}
        <footer className="mt-16 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-black/40">
          <span>END / OF / ARCHIVE</span>
          <span>— WEJ ©</span>
        </footer>
      </div>

      {/* Modal */}
      {active && (
        <Modal cert={active} onClose={() => setActive(null)} />
      )}
    </div>
  );
}

function CornerFrame() {
  return (
    <>
      <span className="pointer-events-none fixed md:absolute top-4 left-4 md:top-6 md:left-6 w-5 h-5 border-t-2 border-l-2 border-black z-10" />
      <span className="pointer-events-none fixed md:absolute top-4 right-4 md:top-6 md:right-6 w-5 h-5 border-t-2 border-r-2 border-black z-10" />
      <span className="pointer-events-none fixed md:absolute bottom-20 left-4 md:bottom-6 md:left-6 w-5 h-5 border-b-2 border-l-2 border-black z-10" />
      <span className="pointer-events-none fixed md:absolute bottom-20 right-4 md:bottom-6 md:right-6 w-5 h-5 border-b-2 border-r-2 border-black z-10" />
    </>
  );
}

function Modal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[85vh] bg-white border-2 border-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between gap-4 px-5 py-3 border-b-2 border-black bg-white">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-[11px] tracking-widest text-black/50 shrink-0">
              /{cert.id}
            </span>
            <h2 className="text-sm md:text-base font-bold uppercase tracking-tight truncate">
              {cert.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-block font-mono text-[10px] tracking-widest px-3 py-1.5 border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              OPEN ↗
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors font-mono"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="relative flex-1 bg-black/5">
          <iframe
            src={cert.file}
            title={cert.title}
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-2.5 border-t-2 border-black font-mono text-[10px] tracking-widest text-black/60 bg-white">
          <span>{cert.issuer.toUpperCase()}</span>
          <span>ESC · TO · CLOSE</span>
          <span>{cert.year}</span>
        </div>
      </div>
    </div>
  );
}
