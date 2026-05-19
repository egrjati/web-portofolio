"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/",            icon: "/assets/icon/home.svg",        label: "HOME",    exact: true },
  { href: "/project",     icon: "/assets/icon/project.svg",     label: "PROJECT", exact: false },
  { href: "/certificate", icon: "/assets/icon/certificate.svg", label: "CERT.",   exact: false },
  { href: "/news",        icon: "/assets/icon/news.svg",         label: "NEWS",    exact: false },
  { href: "/music",       icon: "/assets/icon/music.svg",        label: "MUSIC",   exact: false },
];

export default function Aside() {
  const pathname = usePathname();

  return (
    <aside className="shrink-0 bg-white border-t-2 md:border-t-0 md:border-r-2 border-black/20 w-full h-[4.25rem] md:w-24 md:h-screen md:sticky md:top-0 flex items-center justify-center">
      <ul className="w-full">
        <li className="flex flex-row items-center justify-around md:flex-col md:justify-center w-full md:gap-5 px-2 md:px-0 md:py-6">
          {navItems.map(({ href, icon, label, exact }) => {
            const isActive = exact
              ? pathname === href
              : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`
                  group relative flex flex-col items-center gap-1 px-2 py-1.5
                  transition-all duration-200
                  ${isActive
                    ? "border-2 border-black shadow-[3px_3px_0_0_#000]"
                    : "border-2 border-transparent hover:border-black/20"
                  }
                `}
              >
                {/* Active dot indicator — top bar on desktop, left bar on mobile */}
                {isActive && (
                  <span className="absolute -top-[3px] left-1/2 -translate-x-1/2 md:left-[-3px] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-black" />
                )}

                <img
                  src={icon}
                  alt={label}
                  className={`w-8 h-8 md:w-9 md:h-9 transition-opacity duration-200 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-50 group-hover:opacity-90"
                  }`}
                />

                <span
                  className={`font-mono text-[8px] tracking-[0.18em] transition-all duration-200 ${
                    isActive
                      ? "text-black font-bold"
                      : "text-black/45 group-hover:text-black/70"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </li>
      </ul>
    </aside>
  );
}
