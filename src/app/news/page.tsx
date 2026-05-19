type Article = {
  id: string;
  source: string;
  sourceShort: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
  tag: string;
  featured?: boolean;
};

const articles: Article[] = [
  {
    id: "01",
    source: "Kompas",
    sourceShort: "KOMPAS",
    date: "23 AUG 2025",
    title:
      "Inovasi IoT Mahasiswa Untag Tingkatkan Produktivitas Ayam Petelur",
    excerpt:
      "Sistem pemantau kandang berbasis IoT karya mahasiswa membantu peternak Mojokerto menjaga suhu, kelembapan, dan kesejahteraan ayam petelur secara real-time.",
    url: "https://www.kompas.com/jawa-timur/read/2025/08/23/210000088/inovasi-iot-mahasiswa-untag-tingkatkan-produktivitas-ayam-petelur-di",
    tag: "NASIONAL",
    featured: true,
  },
  {
    id: "02",
    source: "Merdeka",
    sourceShort: "MERDEKA",
    date: "AUG 2025",
    title:
      "Mahasiswa Untag Surabaya Ciptakan Sistem IoT Peternakan Ayam untuk Tingkatkan Produktivitas Telur",
    excerpt:
      "Inovasi sensor pintar yang membantu peternak memonitor kondisi kandang dari jarak jauh — solusi murah untuk masalah panas dan stres ayam.",
    url: "https://www.merdeka.com/peristiwa/tahukah-anda-mahasiswa-untag-surabaya-ciptakan-sistem-iot-peternakan-ayam-untuk-tingkatkan-produktivitas-telur-457768-mvk.html",
    tag: "NASIONAL",
  },
  {
    id: "03",
    source: "JPNN Jatim",
    sourceShort: "JPNN",
    date: "AUG 2025",
    title:
      "Cegah Ayam Stres, Mahasiswa Untag Ciptakan Sistem Pendingin Lampu Berbasis IoT",
    excerpt:
      "Lampu pendingin otomatis yang merespons suhu kandang — pendekatan kreatif untuk mengurangi stres panas pada ayam petelur.",
    url: "https://jatim.jpnn.com/jatim-terkini/39375/cegah-ayam-stres-mahasiswa-untag-ciptakan-sistem-pendingin-lampu-berbasis-iot",
    tag: "NASIONAL",
  },
  {
    id: "04",
    source: "Tribun Surabaya",
    sourceShort: "TRIBUN",
    date: "AUG 2025",
    title:
      "Mahasiswa Untag Surabaya Hadirkan Inovasi IoT untuk Peternakan Ayam Petelur",
    excerpt:
      "Liputan perdana mengenai prototipe sistem pemantauan kandang ayam yang dikembangkan tim mahasiswa Untag Surabaya.",
    url: "https://surabaya.tribunnews.com/surabaya-metro/1911899/mahasiswa-untag-surabaya-hadirkan-inovasi-iot-untuk-peternakan-ayam-petelur",
    tag: "LOKAL",
  },
  {
    id: "05",
    source: "Berita Jatim",
    sourceShort: "BERITAJATIM",
    date: "AUG 2025",
    title:
      "Hanya Modal Sensor, Mahasiswa Untag Ubah Panas Kandang Jadi Cuan",
    excerpt:
      "Bagaimana sensor sederhana dapat menjadi aset besar — potret kewirausahaan teknis dari ruang laboratorium kampus.",
    url: "https://beritajatim.com/hanya-modal-sensor-mahasiswa-untag-ubah-panas-kandang-jadi-cuan",
    tag: "LOKAL",
  },
  {
    id: "06",
    source: "Ketik",
    sourceShort: "KETIK",
    date: "AUG 2025",
    title:
      "Musim Kemarau Bikin Produksi Telur Anjlok, Mahasiswa Untag Surabaya Tawarkan Solusi Pintar",
    excerpt:
      "Sebuah respons teknologi terhadap penurunan produksi telur saat musim panas — pendekatan IoT yang terjangkau.",
    url: "https://ketik.com/surabaya/sains-dan-teknologi/musim-kemarau-bikin-produksi-telur-anjlok-mahasiswa-untag-surabaya-tawarkan-solusi-pintar",
    tag: "LOKAL",
  },
  {
    id: "07",
    source: "Harian Merah Putih",
    sourceShort: "HMP",
    date: "AUG 2025",
    title:
      "Mahasiswa Untag Surabaya Bantu Peternak Mojokerto Atasi Stres Ayam Lewat Inovasi Cek Kandangku",
    excerpt:
      "Implementasi langsung di lapangan: aplikasi “Cek Kandangku” diujicoba bersama peternak ayam di Mojokerto.",
    url: "https://harianmerahputih.id/baca-18685-mahasiswa-untag-surabaya-bantu-peternak-mojokerto-atasi-stres-ayam-lewat-inovasi-cek-kandangku",
    tag: "LOKAL",
  },
  {
    id: "08",
    source: "Harian Bhirawa",
    sourceShort: "BHIRAWA",
    date: "AUG 2025",
    title:
      "Inovasi IoT Mahasiswa Untag Solusi Produktivitas Peternakan Ayam Petelur",
    excerpt:
      "Sorotan dampak sosial-ekonomi dari teknologi tepat-guna yang dikembangkan kampus untuk peternakan rakyat.",
    url: "https://harianbhirawa.co.id/inovasi-iot-mahasiswa-untag-solusi-produktivitas-peternakan-ayam-petelur/",
    tag: "LOKAL",
  },
  {
    id: "09",
    source: "Untag Akademik",
    sourceShort: "UNTAG",
    date: "AUG 2025",
    title:
      "Mahasiswa Untag Surabaya Hadirkan Sistem Inovatif Berbasis IoT",
    excerpt:
      "Liputan resmi kampus mengenai perjalanan riset dan pengembangan sistem IoT oleh tim mahasiswa Untag.",
    url: "https://akademik.untag-sby.ac.id/berita-594-mahasiswa-untag-surabaya-hadirkan-sistem-inovatif-berbasis-iot.html",
    tag: "KAMPUS",
  },
  {
    id: "10",
    source: "Antara Foto",
    sourceShort: "ANTARA",
    date: "AUG 2025",
    title: "Karya Inovasi Mahasiswa Untag Surabaya",
    excerpt:
      "Dokumentasi foto karya inovatif mahasiswa Untag Surabaya oleh kantor berita nasional ANTARA.",
    url: "https://www.antarafoto.com/id/view/2605301/karya-inovasi-mahasiswa-untag-surabaya",
    tag: "FOTO",
  },
  {
    id: "11",
    source: "Tribun Jatim",
    sourceShort: "TRIBUN JATIM",
    date: "2025",
    title: "Arsip Tag: Wahyu Enggar Jati",
    excerpt:
      "Kumpulan seluruh pemberitaan Tribun Jatim yang menyebut nama Wahyu Enggar Jati.",
    url: "https://jatim.tribunnews.com/tag/wahyu-enggar-jati",
    tag: "ARSIP",
  },
];

const featured = articles.find((a) => a.featured)!;
const rest = articles.filter((a) => !a.featured);

export default function News() {
  return (
    <div
      className="relative min-h-[calc(100dvh-4rem)] md:h-full md:overflow-y-auto w-full bg-[#f5f3ec] text-black"
      style={{
        backgroundImage: `radial-gradient(rgba(0,0,0,0.16) 1px, transparent 1px)`,
        backgroundSize: "22px 22px",
      }}
    >
      <CornerFrame />

      <div className="relative px-5 md:px-12 pt-8 md:pt-12 pb-8 max-w-6xl mx-auto">
        {/* Masthead — newspaper banner */}
        <header className="relative border-y-4 border-double border-black py-4 md:py-5 mb-3">
          {/* Top kicker line */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-black/70 mb-2">
            <span>VOL · I</span>
            <span>· EST · 2026 ·</span>
            <span>NO · 04</span>
          </div>

          <h1
            className="text-center text-5xl md:text-7xl font-black tracking-tight leading-none uppercase"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            The Enggar Press
          </h1>

          {/* Bottom kicker line */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-black/70 mt-2">
            <span>SURABAYA · IDN</span>
            <span className="italic">— Press of the Self —</span>
            <span>HARGA · GRATIS</span>
          </div>
        </header>

        {/* Sub-line: dateline + index */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-8 md:mb-10 font-mono text-[11px] tracking-[0.25em] text-black/70 border-b-2 border-black pb-3">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-black" />
            <span>INDEX / 04 · NEWS</span>
            <span className="hidden md:inline-block flex-1 h-px bg-black/20 w-12" />
          </div>
          <span>DATELINE · {featured.date} · MOJOKERTO</span>
          <span>{String(articles.length).padStart(2, "0")} STORIES</span>
        </div>

        {/* FEATURED STORY */}
        <article className="relative bg-white border-2 border-black p-6 md:p-10 mb-12 shadow-[8px_8px_0_0_#000]">
          {/* EXTRA stamp */}
          <div
            className="absolute -top-4 -right-3 md:-top-5 md:-right-6 bg-black text-white px-3 py-1 font-mono text-[10px] tracking-[0.35em] -rotate-6"
            style={{ boxShadow: "3px 3px 0 0 #000" }}
          >
            ★ EXTRA ★
          </div>

          <div className="font-mono text-[10px] tracking-[0.3em] text-black/60 mb-4 flex items-center gap-3 flex-wrap">
            <span className="border-2 border-black px-2 py-0.5">
              {featured.sourceShort}
            </span>
            <span>· {featured.date}</span>
            <span>· FEATURED</span>
            <span className="ml-auto">[ {featured.tag} ]</span>
          </div>

          <h2
            className="text-3xl md:text-5xl font-black leading-[1.05] mb-5 tracking-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {featured.title}
          </h2>

          {/* Drop-cap excerpt */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
            <p
              className="text-base md:text-lg text-black/75 leading-relaxed first-letter:float-left first-letter:text-6xl first-letter:font-black first-letter:leading-[0.85] first-letter:mr-2 first-letter:mt-1"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {featured.excerpt}
            </p>
            <div className="space-y-3 text-sm text-black/60 leading-relaxed border-l-2 border-dotted border-black/40 pl-4">
              <p className="font-mono text-[10px] tracking-[0.3em] text-black/50">
                // CATATAN REDAKSI
              </p>
              <p>
                Liputan utama edisi ini menyorot keberhasilan tim mahasiswa
                Untag Surabaya mengembangkan sistem pemantauan kandang berbasis
                IoT untuk peternakan ayam petelur — proyek yang kemudian
                dirangkum sebagai &ldquo;Cek Kandangku&rdquo;.
              </p>
            </div>
          </div>

          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black border-2 border-black transition"
          >
            <span>Read at {featured.source}</span>
            <span>↗</span>
          </a>
        </article>

        {/* Section divider */}
        <div className="relative my-8 md:my-10">
          <div className="absolute inset-y-1/2 left-0 right-0 border-t-2 border-black" />
          <div className="absolute inset-y-1/2 left-0 right-0 border-t-2 border-black translate-y-1" />
          <div className="relative flex justify-center">
            <span className="bg-[#f5f3ec] px-4 font-mono text-[11px] tracking-[0.35em] text-black/70">
              ✦ MORE COVERAGE ✦
            </span>
          </div>
        </div>

        {/* Grid of remaining articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rest.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t-2 border-black flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[10px] tracking-[0.3em] text-black/60">
          <span>— END · OF · EDITION —</span>
          <span className="italic">PRINTED ON RECYCLED PIXELS</span>
          <span>© WEJ · 2026</span>
        </footer>
      </div>
    </div>
  );
}

function NewsCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white border-2 border-black p-5 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]"
    >
      {/* Top meta */}
      <div className="flex items-start justify-between mb-4 gap-2">
        <span className="font-mono text-[10px] tracking-[0.2em] text-black border-2 border-black px-2 py-0.5">
          {article.sourceShort}
        </span>
        <span className="font-mono text-[10px] tracking-widest text-black/55">
          /{article.id}
        </span>
      </div>

      {/* Halftone "photo placeholder" — newspaper print style */}
      <div className="relative h-24 mb-4 border border-black/30 overflow-hidden bg-white">
        <Halftone className="absolute inset-0 w-full h-full text-black" />
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] tracking-[0.3em] text-black/70 bg-white/40 backdrop-blur-[1px]">
          [ FIG · {article.id} ]
        </div>
        <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-black" />
        <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-black" />
        <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-black" />
        <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-black" />
      </div>

      {/* Headline (serif) */}
      <h3
        className="text-lg md:text-xl font-bold leading-tight tracking-tight mb-2 line-clamp-3"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[13px] text-black/60 leading-relaxed line-clamp-3 mb-4">
        {article.excerpt}
      </p>

      {/* Footer meta */}
      <div className="pt-3 border-t border-dashed border-black/40 flex items-center justify-between font-mono text-[10px] tracking-widest text-black/60">
        <span>{article.date}</span>
        <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
          READ <span className="transition-transform group-hover:translate-x-0.5">↗</span>
        </span>
      </div>

      {/* Tag badge */}
      <span className="absolute -top-2 left-4 bg-white border-2 border-black px-2 py-0.5 font-mono text-[9px] tracking-[0.2em]">
        {article.tag}
      </span>
    </a>
  );
}

function CornerFrame() {
  return (
    <>
      <span className="pointer-events-none absolute top-4 left-4 md:top-6 md:left-6 w-5 h-5 border-t-2 border-l-2 border-black z-10" />
      <span className="pointer-events-none absolute top-4 right-4 md:top-6 md:right-6 w-5 h-5 border-t-2 border-r-2 border-black z-10" />
      <span className="pointer-events-none absolute bottom-4 left-4 md:bottom-6 md:left-6 w-5 h-5 border-b-2 border-l-2 border-black z-10" />
      <span className="pointer-events-none absolute bottom-4 right-4 md:bottom-6 md:right-6 w-5 h-5 border-b-2 border-r-2 border-black z-10" />
    </>
  );
}

/* Halftone pattern — variable-radius dot grid for retro newsprint photo feel */
function Halftone({ className }: { className?: string }) {
  const cols = 24;
  const rows = 8;
  return (
    <svg
      viewBox={`0 0 ${cols * 4} ${rows * 4}`}
      preserveAspectRatio="none"
      className={className}
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const distFromCenter = Math.abs(r - rows / 2) / (rows / 2);
          const radius = 0.5 + (1 - distFromCenter) * 1.4 + Math.sin(c * 0.7) * 0.4;
          return (
            <circle
              key={`${r}-${c}`}
              cx={c * 4 + 2}
              cy={r * 4 + 2}
              r={Math.max(0.3, radius)}
              fill="currentColor"
              opacity={0.55}
            />
          );
        })
      )}
    </svg>
  );
}
