"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? "bg-white/90 backdrop-blur shadow-sm"
          : "bg-white/70"}
      `}
    >
      <div className="h-14 flex items-center justify-center">
        <span
          className={`
            tracking-widest transition-all duration-300
            ${scrolled ? "text-sm" : "text-base"}
          `}
        >
          Unitia
        </span>
      </div>
    </header>
  );
}

/*export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="px-6 py-4">
        <h1 className="text-xs tracking-[0.35em] font-light text-white">
          Unitia
        </h1>
      </div>
    </header>
  );
}*/
