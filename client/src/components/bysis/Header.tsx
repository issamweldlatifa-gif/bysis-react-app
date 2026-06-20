// bysis sticky header — transparent over hero (white logo) -> opaque white on scroll (black logo)
import { useEffect, useState } from "react";
import { LOGOS } from "@/data";
import { Search, Bell } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 mx-auto max-w-[480px] transition-all duration-300"
      style={{ transitionTimingFunction: "var(--ease-out)" }}
    >
      <div
        className={`flex items-center justify-between px-5 h-[58px] transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl border-b border-bysis-line" : "bg-transparent"
        }`}
      >
        <img
          src={scrolled ? LOGOS.black : LOGOS.white}
          alt="bysis"
          className="h-[26px] w-auto transition-opacity duration-300"
        />
        <div className="flex items-center gap-2">
          <IconBtn scrolled={scrolled}><Search className="h-[18px] w-[18px]" /></IconBtn>
          <IconBtn scrolled={scrolled}><Bell className="h-[18px] w-[18px]" /></IconBtn>
        </div>
      </div>
    </header>
  );
}

function IconBtn({ children, scrolled }: { children: React.ReactNode; scrolled: boolean }) {
  return (
    <button
      className={`h-9 w-9 grid place-items-center rounded-full press transition-colors ${
        scrolled ? "text-bysis-ink bg-bysis-soft" : "text-white bg-white/15 backdrop-blur"
      }`}
    >
      {children}
    </button>
  );
}
