"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* Inline logo mark */
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-label="LocalLink Digital logo"
      role="img"
    >
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
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-gradient-to-b from-black/50 via-black/20 to-transparent">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 pt-4 pb-3 sm:px-6">
            <Link href="/">
              <span className="inline-flex items-center">
                <LogoMark size={26} />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm"
              aria-label="Open navigation"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-col px-4 pt-4 sm:px-6">
            <div className="flex items-center justify-between pb-4">
              <Link href="/" onClick={() => setOpen(false)}>
                <span className="inline-flex items-center">
                  <LogoMark size={26} />
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40"
                aria-label="Close navigation"
              >
                <div className="relative h-4 w-4">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rotate-45 rounded-full bg-white" />
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 -rotate-45 rounded-full bg-white" />
                </div>
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-4 text-lg font-medium text-white">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                Services
              </Link>
              <Link
                href="/process"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                Process
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}





