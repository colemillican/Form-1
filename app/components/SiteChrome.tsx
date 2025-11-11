"use client";

import React from "react";
import Link from "next/link";

const BRAND = "LocalLink Digital";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center justify-between px-6 sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <svg width={24} height={24} viewBox="0 0 64 64" aria-label={`${BRAND} logo`}>
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
            <span className="text-sm font-semibold tracking-wide">{BRAND}</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="/" className="text-zinc-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/services" className="text-zinc-300 hover:text-white transition">
              Services
            </Link>
            <Link href="/about" className="text-zinc-300 hover:text-white transition">
              About
            </Link>
            <Link href="/process" className="text-zinc-300 hover:text-white transition">
              Process
            </Link>
            <Link href="/pricing" className="text-zinc-300 hover:text-white transition">
              Pricing
            </Link>
            <Link href="/faq" className="text-zinc-300 hover:text-white transition">
              FAQ
            </Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-10 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="text-sm">
              <div className="font-semibold">{BRAND}</div>
              <div className="text-zinc-400">Modern websites, future-ready</div>
            </div>
            <nav className="flex flex-wrap items-center gap-5 text-sm">
              <Link href="/" className="text-zinc-300 hover:text-white transition">
                Home
              </Link>
              <Link href="/services" className="text-zinc-300 hover:text-white transition">
                Services
              </Link>
              <Link href="/about" className="text-zinc-300 hover:text-white transition">
                About
              </Link>
              <Link href="/process" className="text-zinc-300 hover:text-white transition">
                Process
              </Link>
              <Link href="/pricing" className="text-zinc-300 hover:text-white transition">
                Pricing
              </Link>
              <Link href="/faq" className="text-zinc-300 hover:text-white transition">
                FAQ
              </Link>
              <Link href="/contact" className="text-zinc-300 hover:text-white transition">
                Contact
              </Link>
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


