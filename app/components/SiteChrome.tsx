"use client";
import React from "react";
import MobileNav from "./MobileNav";

/* Brand */
const BRAND = "LocalLink Digital";

/* Inline logo */
function LogoInline({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={`${BRAND} logo`}>
      <defs>
        <linearGradient id="lld-desktop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#22c55e" />
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#lld-desktop)" />
      <path d="M20 20v24h12M32 44h12V20" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* Gradient helper */
export const G = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
    {children}
  </span>
);

/* Shared shell with one true header + footer (desktop) */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased">
      {/* Mobile header */}
      <MobileNav />

      {/* Desktop header (identical on every page) */}
      <header className="hidden sm:block sticky top-0 z-[200] border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-8">
          <a href="/" className="group flex items-center gap-3">
            <LogoInline />
            <span className="flex items-baseline gap-1">
              <span className="text-[17px] font-extrabold tracking-tight leading-none">
                <G>LocalLink</G>
              </span>
              <span className="text-[14px] font-semibold text-zinc-400 leading-none">Digital</span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-[13.5px] sm:flex">
            <a href="/" className="text-zinc-300 hover:text-white transition">HOME</a>
            <a href="/services" className="text-zinc-300 hover:text-white transition">SERVICES</a>
            <a href="/about" className="text-zinc-300 hover:text-white transition">ABOUT</a>
            <a href="/process" className="text-zinc-300 hover:text-white transition">PROCESS</a>
            <a href="/pricing" className="text-zinc-300 hover:text-white transition">PRICING</a>
            <a href="/faq" className="text-zinc-300 hover:text-white transition">FAQ</a>
            <a href="/contact" className="text-zinc-300 hover:text-white transition">CONTACT</a>
            <a
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white/10 px-4 font-semibold text-white hover:bg-white/20 transition"
            >
              START A PROJECT
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-16 sm:pt-0">{children}</main>

      {/* Footer (identical on every page) */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-10 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <LogoInline size={26} />
              <div className="text-sm">
                <div className="font-semibold">{BRAND}</div>
                <div className="text-zinc-400">Modern websites, future-ready</div>
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-5 text-sm">
              <a href="/services" className="text-zinc-300 hover:text-white">Services</a>
              <a href="/about" className="text-zinc-300 hover:text-white">About</a>
              <a href="/process" className="text-zinc-300 hover:text-white">Process</a>
              <a href="/pricing" className="text-zinc-300 hover:text-white">Pricing</a>
              <a href="/faq" className="text-zinc-300 hover:text-white">FAQ</a>
              <a href="/contact" className="text-zinc-300 hover:text-white">Contact</a>
            </nav>
          </div>
          <div className="mt-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}


