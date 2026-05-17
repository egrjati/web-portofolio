export default function Aside() {
    return (
      <aside className="shrink-0 bg-white border-t-2 md:border-t-0 md:border-r-2 border-black/27 w-full h-16 md:w-24 md:h-screen md:sticky md:top-0 flex items-center justify-center">
        <ul className="w-full">
          <li className="flex flex-row items-center justify-around md:flex-col md:justify-center w-full md:gap-20">
            <a href="/">
              <img src="/assets/icon/home.svg" alt="Home" className="w-10 h-10 md:w-12 md:h-12" />
            </a>
            <a href="/project">
              <img src="/assets/icon/project.svg" alt="Project" className="w-10 h-10 md:w-12 md:h-12" />
            </a>
            <a href="">
              <img src="/assets/icon/certificate.svg" alt="Certificate" className="w-10 h-10 md:w-12 md:h-12" />
            </a>
            <a href="/music">
              <img src="/assets/icon/music.svg" alt="Music" className="w-10 h-10 md:w-12 md:h-12" />
            </a>
          </li>
        </ul>
      </aside>
    );
}
