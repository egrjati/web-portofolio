import Image from "next/image";

const projects = [
  { title: "Project 1", tag: "Web Dev" },
  { title: "Project 2", tag: "IoT" },
  { title: "Project 3", tag: "Web Dev" },
  { title: "Project 4", tag: "IoT" },
  { title: "Project 5", tag: "Web Dev" },
  { title: "Project 6", tag: "IoT" },
];

export default function Project() {
  return (
    <div
      className="relative min-h-[calc(100dvh-4rem)] md:h-full md:overflow-y-auto w-full"
      style={{
        backgroundColor: "#2A8559",
        backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                `,
        backgroundSize: "30px 30px",
      }}
    >
        <h1 className="text-4xl font-bold text-white text-center my-8">My Projects</h1>

      
      <div className="px-5  md:px-10">
        <div className="grid grid-cols-2 gap-y-5 gap-x-4">
          {projects.map(({ title, tag }, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md bg-white flex flex-col aspect-[4/3] transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="flex-1 bg-white" />

              {/* Info */}
              <div className="px-4 py-3 flex items-center justify-between border-t border-gray-500">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                    {tag}
                  </span>
                  <p className="text-sm font-semibold text-gray-800 mt-0.5">
                    {title}
                  </p>
                </div>
                <span className="text-gray-300 text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flower decoration — fixed at bottom-right, partially clipped by viewport edge */}
      <div className="fixed bottom-0 right-0 overflow-hidden pointer-events-none select-none w-80 h-80">
        <Image
          src="/assets/images/bunga3.svg"
          alt=""
          width={260}
          height={260}
          className="absolute bottom-0 right-0 -rotate-32 translate-x-10 translate-y-22"
        />
      </div>
    </div>
  );
}
