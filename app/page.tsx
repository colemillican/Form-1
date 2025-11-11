"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bolt,
  Check,
  Globe,
  Monitor,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import MobileNav from "./components/MobileNav";

/* ---------------------------------- Brand --------------------------------- */
const BRAND = "LocalLink Digital";

// Inline logo (gradient mark)
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

// Gradient helper
const G = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
    {children}
  </span>
);

// visual helpers
const heroImg =
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1920&auto=format&fit=crop";
const panel =
  "https://images.unsplash.com/photo-1520975922284-9b9a45d43f9a?q=80&w=1200&auto=format&fit=crop";

/* ---------------------------------- Page ---------------------------------- */
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased">
      {/* Mobile nav */}
      <MobileNav />

      {/* Desktop NAV */}
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
            <Link href="/" className="text-zinc-300 hover:text-white transition">HOME</Link>
            <Link href="/services" className="text-zinc-300 hover:text-white transition">SERVICES</Link>
            <Link href="/process" className="text-zinc-300 hover:text-white transition">PROCESS</Link>
            <Link href="/pricing" className="text-zinc-300 hover:text-white transition">PRICING</Link>
            <Link href="/faq" className="text-zinc-300 hover:text-white transition">FAQ</Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white transition">CONTACT</Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white/10 px-4 font-semibold text-white hover:bg-white/20 transition"
            >
              START A PROJECT
            </Link>
          </nav>
        </div>
      </header>

      {/* ============================== HERO ============================== */}
      <main className="pt-16 sm:pt-0">
        <section
          className="relative isolate flex min-h-[86vh] items-end overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.30), rgba(0,0,0,0.65)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute -top-24 -left-24 h-[50vh] w-[50vh] rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[55vh] w-[55vh] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 pb-20 sm:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs tracking-[0.35em] text-zinc-400">
                LOCAL SITES // GLOBAL STANDARDS
              </p>

              <h1 className="text-[clamp(36px,6vw,64px)] font-black leading-[1.05] tracking-tight">
                <G>Empowering</G> local businesses
                <br />
                through <G>modern technology</G>.
              </h1>

              <p className="mt-4 max-w-xl text-zinc-300">
                LocalLink Digital turns your local business into a digital powerhouse — building,
                maintaining, and optimizing a high-performance website that helps you attract
                customers, stay visible, and save time.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white text-black px-6 text-[15px] font-semibold hover:bg-zinc-200 transition"
                >
                  Get a Free Preview
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-5 text-[15px] font-semibold text-white hover:bg-white/10 transition"
                >
                  See our work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 hidden flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-zinc-300 sm:flex">
                <span className="inline-flex items-center gap-2">
                  <Bolt className="h-4 w-4 text-emerald-400" /> Built fast
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" /> Fully managed
                </span>
                <span className="inline-flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-emerald-400" /> Mobile-first
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ FEATURE STRIP ============================ */}
        <section id="services" className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-3 sm:px-8">
            <Feature
              icon={<Monitor className="h-5 w-5 text-emerald-400" />}
              title="Cinematic Design"
              text="Bold type, edge-to-edge imagery, motion-ready UI."
            />
            <Feature
              icon={<Globe className="h-5 w-5 text-emerald-400" />}
              title="Next.js Performance"
              text="App Router, image opt, blazing Core Web Vitals."
            />
            <Feature
              icon={<Search className="h-5 w-5 text-emerald-400" />}
              title="SEO-Ready"
              text="Semantic structure, clean metadata, local visibility."
            />
          </div>
        </section>

        {/* =============================== WORK =============================== */}
        <section id="work" className="bg-zinc-950">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
            <div className="mb-6 flex items-end justify-between">
              <h3 className="text-2xl font-semibold tracking-tight">Recent Launches</h3>
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center text-sm font-semibold text-zinc-300 hover:text-white"
              >
                Request a preview <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <article
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-black"
                >
                  <div className="relative">
                    <img
                      alt="preview"
                      src={panel}
                      className="aspect-[4/3] w-full object-cover opacity-90 transition group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[11px] font-medium tracking-wide text-zinc-300">
                      SAMPLE PROJECT
                    </span>
                    <h4 className="mt-2 text-lg font-semibold">Local Business Example</h4>
                    <p className="mt-1 text-sm text-zinc-400">
                      Clean layout, strong CTA, optimized performance.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== FOOTER =============================== */}
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
                <Link href="/" className="text-zinc-300 hover:text-white">Home</Link>
                <Link href="/services" className="text-zinc-300 hover:text-white">Services</Link>
                <Link href="/process" className="text-zinc-300 hover:text-white">Process</Link>
                <Link href="/pricing" className="text-zinc-300 hover:text-white">Pricing</Link>
                <Link href="/faq" className="text-zinc-300 hover:text-white">FAQ</Link>
                <Link href="/contact" className="text-zinc-300 hover:text-white">Contact</Link>
              </nav>
            </div>
            <div className="mt-6 text-xs text-zinc-500">
              © {new Date().getFullYear()} {BRAND}. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ------------------------------- UI Blocks ------------------------------- */
function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 inline-flex items-center gap-2">
        {icon}
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}








