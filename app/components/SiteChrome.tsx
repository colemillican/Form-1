"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";

/* ---------------------------------- Brand --------------------------------- */
const BRAND = "LocalLink Digital";

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

const G = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
    {children}
  </span>
);

const NAV = [
  { href: "/", label: "HOME", key: "home" },
  { href: "/services", label: "SERVICES", key: "services" },
  { href: "/about", label: "ABOUT", key: "about" },
  { href: "/process", label: "PROCESS", key: "process" },
  { href: "/pricing", label: "PRICING", key: "pricing" },
  { href: "/faq", label: "FAQ", key: "faq" },
  { href: "/contact", label: "CONTACT", key: "contact" },
];

export function Header({ active }: { active?: string }) {
  return (
    <>
      {/* Mobile nav stays consistent too */}
      <MobileNav />

      {/* Desktop NAV (same everywhere) */}
      <header className="hidden sm:block sticky top-0 z-[200] border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-8">
          <Link href="/" className="group flex items-center gap-3">
            <LogoInline />
            <span className="flex items-baseline gap-1">
              <span className="text-[17px] font-extrabold tracking-tight leading-none">
                <G>LocalLink</G>
              </span>
              <span className="text-[14px] font-semibold text-zinc-400 leading-none">Digital</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 text-[13.5px] sm:flex">
            {NAV.map((n) => (
              <Link
                key={n.key}
                href={n.href}
                className={`transition ${
                  active === n.key ? "text-white" : "text-zinc-300 hover:text-white"
                }`}
              >
                {n.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white/10 px-4 font-semibold text-white hover:bg-white/20 transition"
            >
              START A PROJECT
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
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
            {NAV.slice(1).map((n) => (
              <Link key={n.key} href={n.href} className="text-zinc-300 hover:text-white">
                {n.label.charAt(0) + n.label.slice(1).toLowerCase()}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


