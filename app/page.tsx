"use client";

import React, { useEffect, useState } from "react";
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
import { Exo_2 } from "next/font/google";
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

/** Sleek, futuristic hero font (local to this page) */
const heroFont = Exo_2({
  subsets: ["latin"],
  weight: ["700"], // a touch lighter than before so it feels airier
  display: "swap",
});

/* ----------------------------- Hero Carousel ------------------------------ */
/** Grand + bright nature only (vast skies, oceans, mountains, aurora; one starscape) */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2000&auto=format&fit=crop", // mountain sunrise
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop", // turquoise ocean cliffs
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop", // expansive coastline
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop", // snowy ridge
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop", // rolling meadow
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2000&auto=format&fit=crop", // starscape
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2000&auto=format&fit=crop", // aurora
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop", // desert badlands
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop", // waterfall canyon
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop", // forest mist
];

function HeroCarousel() {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % HERO_IMAGES.length);
    }, 10000); // ~10s
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{
            // lighter overlay so images stay bright, but still readable
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.16), rgba(0,0,0,0.50)), url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={i !== idx}
        />
      ))}
    </div>
  );
}

/* --------------------------- Subtle Digital Layer -------------------------- */
/** Ultra-light SVG grid + soft glass glow. Adds "tech" without killing the nature vibe. */
function DigitalOverlay() {
  return (
    <>
      {/* faint animated grid */}
      <svg
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.12] mix-blend-screen"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2" />
          </pattern>
          <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#gridFade)" />
      </svg>

      {/* soft glass highlight */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-[15%] h-[40vh] w-[60vw] -translate-x-1/2 rounded-[50%] bg-white/6 blur-3xl" />
        <div className="absolute right-[10%] bottom-[10%] h-[28vh] w-[28vh] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
    </>
  );
}

/* ---------------------------------- Page ---------------------------------- */
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased">
      {/* Mobile nav */}
      <MobileNav />

      {/* Desktop NAV */}
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

      <main className="pt-16 sm:pt-0">
        {/* ============================== HERO (Carousel) ============================== */}
       <section className="relative isolate flex min-h-[86vh] items-end overflow-hidden">
  {/* rotating backgrounds */}
  <HeroCarousel />

  {/* subtle digital overlays */}
  <DigitalOverlay />

  {/* ambient color glows (kept from your style) */}
  <div className="pointer-events-none absolute -top-24 -left-24 h-[50vh] w-[50vh] rounded-full bg-emerald-500/15 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-40 -right-40 h-[55vh] w-[55vh] rounded-full bg-blue-500/10 blur-3xl" />

  <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 pb-20 sm:px-8">
    <div className="max-w-2xl">
      <p className="mb-3 text-xs tracking-[0.35em] text-zinc-200">
        LOCAL SITES // GLOBAL STANDARDS
      </p>

      {/* Smaller, sleeker hero headline (uses your existing hero font) */}
      <h1 className="text-[clamp(26px,4.2vw,44px)] font-bold leading-[1.1] tracking-tight">
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
          Captivating design.
        </span>{" "}
        Precision technology.
        <br />
        Websites that feel <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">as expansive as nature</span>.
      </h1>

      {/* Bridge copy: nature ↔ tech */}
      <p className="mt-4 max-w-xl text-zinc-100/90">
        We blend the clarity and scale of the natural world with modern web engineering.
        The result? Fast, resilient, cinematic sites that attract customers and build trust.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full bg-white text-black px-6 text-[15px] font-semibold hover:bg-zinc-200 transition"
        >
          Get a Free Preview
        </a>
        <a
          href="/services"
          className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-5 text-[15px] font-semibold text-white hover:bg-white/10 transition"
        >
          See our services
          <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* key signals */}
      <div className="mt-6 hidden flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-zinc-200 sm:flex">
        <span className="inline-flex items-center gap-2">
          <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Built fast
        </span>
        <span className="inline-flex items-center gap-2">
          <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Fully managed
        </span>
        <span className="inline-flex items-center gap-2">
          <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M11 18h2" />
          </svg>
          Mobile-first
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
              text="Bold type, bright imagery, motion-ready UI."
            />
            <Feature
              icon={<Globe className="h-5 w-5 text-emerald-400" />}
              title="Next.js Performance"
              text="Image optimization, caching, clean Core Web Vitals."
            />
            <Feature
              icon={<Search className="h-5 w-5 text-emerald-400" />}
              title="SEO-Ready"
              text="Semantic structure, metadata, local visibility."
            />
          </div>
        </section>

        {/* =============================== WORK (sample cards) =============================== */}
        <section id="work" className="bg-zinc-950">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
            <div className="mb-6 flex items-end justify-between">
              <h3 className="text-2xl font-semibold tracking-tight">Recent Launches</h3>
              <a
                href="/contact"
                className="hidden sm:inline-flex items-center text-sm font-semibold text-zinc-300 hover:text-white"
              >
                Request a preview <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  tag: "HOME SERVICES",
                  title: "Precision HVAC",
                  img: "https://images.unsplash.com/photo-1520975922284-9b9a45d43f9a?q=80&w=1600&auto=format&fit=crop",
                  blurb: "High-contrast landing + sticky call CTA.",
                },
                {
                  tag: "FITNESS",
                  title: "IronForge Gym",
                  img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
                  blurb: "Hero video, class schedule, simple join flow.",
                },
                {
                  tag: "AUTO DETAIL",
                  title: "Ceramic Pro Studio",
                  img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop",
                  blurb: "Glossy visuals, package matrix, lead form.",
                },
              ].map((c, i) => (
                <article key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <div className="relative">
                    <img
                      alt={`${c.title} preview`}
                      src={c.img}
                      className="aspect-[4/3] w-full object-cover opacity-90 transition group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[11px] font-medium tracking-wide text-zinc-300">
                      {c.tag}
                    </span>
                    <h4 className="mt-2 text-lg font-semibold">{c.title}</h4>
                    <p className="mt-1 text-sm text-zinc-400">{c.blurb}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== PROCESS (summary) ============================== */}
        <section id="process" className="border-t border-white/10 bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
            <h3 className="text-2xl font-semibold tracking-tight">A lean, three-step build</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              <Step n={1} title="Discover" text="We capture your goals, brand tone, and target market." />
              <Step n={2} title="Design" text="Cinematic hero, clean layout, premium typography." />
              <Step n={3} title="Launch" text="Deployed to Vercel, managed updates, analytics wired." />
            </div>
          </div>
        </section>

        {/* =============================== CONTACT ============================== */}
        <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:px-8">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Start your free preview</h3>
              <p className="mt-2 max-w-lg text-zinc-200">
                Share a few details. We’ll design a concept that looks like tomorrow and converts today.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" /> No setup fee
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" /> Fast turnaround
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" /> Fully managed after launch
                </li>
              </ul>
            </div>

            <form className="max-w-xl space-y-3">
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                placeholder="Business name"
              />
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                placeholder="Your name"
              />
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                type="email"
                placeholder="Email"
              />
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                type="tel"
                inputMode="tel"
                placeholder="Phone"
              />
              <textarea
                className="min-h-[120px] w-full rounded-xl border border-white/15 bg-white/5 p-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                placeholder="What do you do? What’s the main goal of this site?"
              />
              <button className="h-11 w-full rounded-full bg-white font-semibold text-black hover:bg-zinc-200 transition">
                Request Preview
              </button>
              <p className="text-xs text-zinc-500">By submitting, you agree to be contacted about your project.</p>
            </form>
          </div>
        </section>

        {/* ================================ FOOTER =============================== */}
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

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/20 text-[12px] font-bold text-emerald-300">
          {n}
        </span>
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}












