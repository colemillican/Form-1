"use client";
import { useEffect, useState } from "react";

function Wordmark({ size = 16 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      {/* Inline mark (gradient square) */}
      <svg
        className="shrink-0"
        width={size + 12}
        height={size + 12}
        viewBox="0 0 64 64"
        role="img"
        aria-label="LocalLink-Digital"
      >
        <defs>
          <linearGradient id="lld-mobile" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="14" fill="#22c55e" />
        <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#lld-mobile)" />
        <path
          d="M20 20v24h12M32 44h12V20"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
          LocalLink
        </span>{" "}
        <span className="text-zinc-500">Digital</span>
      </span>
    </div>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sm:hidden sticky top-0 z-[300] border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <Wordmark />
        </a>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[400] bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="ml-auto flex h-full w-80 max-w-[85%] flex-col bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-semibold">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="grid gap-2">
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#services">
                Services
              </a>
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#work">
                Portfolio
              </a>
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#process">
                Process
              </a>
              <a className="rounded-lg px-2 py-2 text-[15px] font-medium hover:bg-zinc-50" href="#contact">
                Contact
              </a>
            </nav>

            <a
              href="tel:12567630912"
              className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-black px-4 text-sm font-semibold text-white"
            >
              Call (256) 763-0912
            </a>

            {/* Brand at the bottom */}
            <div className="mt-auto pt-6">
              <a href="/" className="flex items-center gap-2 opacity-80 hover:opacity-100">
                <Wordmark />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
