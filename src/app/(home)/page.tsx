export default function Home() {
    return (
      <div className="flex flex-col-reverse md:flex-row md:h-full bg-white px-8 py-8 md:px-24 md:py-12 gap-8 md:gap-10">
        {/* Konten Kiri */}
        <div className="w-full max-w-93.25 mx-auto md:mx-0">
          <h1 className="text-2xl px-3 py-1 font-semibold mb-4 bg-[#1961A9]/80">
            Web Developer & IoT Engineer{" "}
          </h1>
          <p className="text-black/50 text-base tracking-wide mb-3">
            I craft fast, responsive, and visually compelling web experiences —
            from clean, intuitive interfaces to robust full-stack applications.
            With a strong command of modern web technologies, I turn complex
            requirements into seamless digital products that are not only
            functional, but delightful to use. Every line of code is written
            with performance, scalability, and user experience in mind.
          </p>

          <div className="flex justify-end">
            <hr className="border-2 w-32 mb-3 border-black/50" />
          </div>

          <p className="text-black/50 text-base tracking-wide">
            Beyond the screen, I build intelligent systems that bridge the
            physical and digital world. As an IoT Engineer, I design and develop
            connected devices — from sensor integration and embedded firmware to
            real-time data pipelines and cloud dashboards. I believe the future
            lies in smart, interconnected environments, and I engineer solutions
            that make that future tangible.
          </p>
        </div>

        {/* Konten Kanan */}
        <div className="flex-1 flex items-end justify-center relative min-h-80 md:min-h-0 md:pb-0">
          {/* Background kertas + icon grid */}
          <div className="absolute right-0 top-0 w-72">
            <img src="/assets/images/background-kertas.svg" alt="" className="w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 pt-5 pb-6">
              {/* Baris 1 */}
              <div className="grid grid-cols-3 gap-6 w-full">
                <img src="/assets/icon/nextjs.svg"      alt="Next.js"    className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/vuejs.svg"       alt="Vue.js"     className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/tailwindcss.svg" alt="Tailwind"   className="w-16 h-16 mx-auto" />
              </div>
              {/* Baris 2 */}
              <div className="grid grid-cols-3 gap-6 w-full">
                <img src="/assets/icon/laravel.svg"     alt="Laravel"    className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/nodejs.svg"      alt="Node.js"    className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/git.svg"         alt="Git"        className="w-16 h-16 mx-auto" />
              </div>
              {/* Baris 3 */}
              <div className="grid grid-cols-3 gap-6 w-full">
                <img src="/assets/icon/mariadb.svg"     alt="MariaDB"    className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/mysql.svg"       alt="MySQL"      className="w-16 h-16 mx-auto" />
                <img src="/assets/icon/postgresql.svg"  alt="PostgreSQL" className="w-16 h-16 mx-auto" />
              </div>
              {/* Baris 4 — center */}
              <div className="flex justify-center w-full">
                <img src="/assets/icon/Arduino.svg"     alt="Arduino"    className="w-16 h-16" />
              </div>
            </div>
          </div>
          {/* Plantpot — di belakang foto, kanan bawah */}
          <img
            src="/assets/images/plantpot.svg"
            alt=""
            className="absolute bottom-0 right-1 z-5 w-36 md:translate-y-12"
          />
          {/* Foto — mepet bawah, sedikit overflow */}
          <img
            src="/assets/images/fotoku.svg"
            alt="Wahyu Enggar Jati"
            className="relative z-10 w-80 md:translate-y-12 -translate-x-16"
          />
        </div>
      </div>
    );
}