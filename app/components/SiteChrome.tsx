"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

/**
 * Gradient text helper used in your hero:
 * <G>Stories that connect.</G>
 */
export function G({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

type SiteChromeProps = {
  children: React.ReactNode;
};

/**
 * IMPORTANT CHANGE:
 * These now point to real pages instead of #anchors on the home page.
 * Make sure you have /services, /work, /process, /pricing, /faq, /contact pages.
 * If you don’t have some of them yet, you can comment those out or add them later.
 */
const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function SiteChrome({ children }: SiteChromeProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
          scrolled || open
            ? "bg-black/60 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
          {/* Logo mark only */}
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="LocalLink Digital home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-md">
              {/* Simple abstract 'link' glyph */}
              <div className="h-4 w-4 rounded-md border-2 border-white/90 border-b-transparent" />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-200 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-sm transition hover:bg-zinc-100"
            >
              Start a project
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/25 p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        <div
          className={`md:hidden transition-[max-height,opacity] duration-250 ease-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="space-y-1 border-t border-white/10 bg-black/90 px-4 pb-4 pt-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-2 py-2 text-zinc-200 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-zinc-100"
              onClick={() => setOpen(false)}
            >
              Start a project
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT (padding-top to offset fixed header height) */}
      <main className="pt-14">{children}</main>
    </div>
  );
}



