"use client";
import { useEffect, useState } from "react";

/* Inline logo */
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="LocalLink Digital logo">
      <defs>
        <linearGradient id="llg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#23B8A5" />
          <stop offset="100%" stopColor="#9BE564" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#llg)" />
      <path
        d="M20 20v24h12M32 44h12V20"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <LogoMark size={28} />
        <button
          className="text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 text-white text-xl">
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#services" onClick={() => setOpen(false)} className="hover:text-gray-300 transition">
            Services
          </a>
          <a href="#portfolio" onClick={() => setOpen(false)} className="hover:text-gray-300 transition">
            Portfolio
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-gray-300 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
