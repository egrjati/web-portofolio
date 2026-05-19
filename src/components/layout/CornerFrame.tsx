"use client";

export default function CornerFrame() {
  return (
    <>
      <span className="pointer-events-none absolute top-4 left-4 md:top-6 md:left-6 w-5 h-5 border-t-2 border-l-2 border-black z-20" />
      <span className="pointer-events-none absolute top-4 right-4 md:top-6 md:right-6 w-5 h-5 border-t-2 border-r-2 border-black z-20" />
      <span className="pointer-events-none absolute bottom-4 left-4 md:bottom-6 md:left-6 w-5 h-5 border-b-2 border-l-2 border-black z-20" />
      <span className="pointer-events-none absolute bottom-4 right-4 md:bottom-6 md:right-6 w-5 h-5 border-b-2 border-r-2 border-black z-20" />
    </>
  );
}
