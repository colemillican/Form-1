"use client";

import React, { useEffect, useState } from "react";
import {
  Bolt,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Globe,
  Monitor,
  Search,
  Check,
} from "lucide-react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "./components/SiteChrome";

/* Headline font */
const heroFont = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

/* Hero carousel images (your original scenic set) */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
];

function HeroCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % HERO_IMAGES.length),
      30000 // 30 seconds
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(0,0,0,0.08), rgba(0,0,0,0.18)),
              url(${src})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={i !== idx}
        />
      ))}
    </div>
  );
}

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

export default function Page() {
  return (
    <SiteChrome>
      {/* ================= HERO ================= */}
      <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden">
        <HeroCarousel />

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className={`${heroFont.className} text-[clamp(38px,5.6vw,62px)] font-bold leading-[1.05] tracking-[0.02em]`}
            >
              <G>Stories that connect.</G>
              <br />
              <G>Websites that perform.</G>
            </h1>

            <p className="mt-5 text-[15px] leading-relaxed text-zinc-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              We bring your story to life online — designing, building, and
              managing beautiful, high-performing websites that help local
              customers find you, trust you, and reach you.
            </p>

            {/* Centered CTA */}
            <div className="mt-8 flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-12 py-4 text-[16px] font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.45)] transition hover:from-emerald-300 hover:to-emerald-200 hover:shadow-[0_18px_40px_rgba(16,185,129,0.55)]"
              >
                Get my free website outline
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[13px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              <span className="inline-flex items-center gap-2">
                <Bolt className="h-4 w-4 text-emerald-300" />
                Built for local businesses
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Fully managed partnership
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-emerald-300" />
                Fast and mobile-first
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FEATURE STRIP ============== */}
      <section
        id="services"
        className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-3 sm:px-8">
          <Feature
            icon={<Monitor className="h-5 w-5 text-emerald-400" />}
            title="Cinematic design"
            text="Bold type, bright imagery, and layouts built to feel premium on any screen."
          />
          <Feature
            icon={<Globe className="h-5 w-5 text-emerald-400" />}
            title="Modern performance"
            text="Fast-loading, Next.js-powered builds tuned for Core Web Vitals."
          />
          <Feature
            icon={<Search className="h-5 w-5 text-emerald-400" />}
            title="Local SEO ready"
            text="Clean structure, metadata, and content strategy for local visibility."
          />
        </div>
      </section>

      {/* ============== WORK (SAMPLE PROJECTS) ============== */}
      <section id="work" className="bg-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-2xl font-semibold tracking-tight">
              Recent launches
            </h3>
            <a
              href="/contact"
              className="hidden items-center text-sm font-semibold text-zinc-300 hover:text-white sm:inline-flex"
            >
              Request a preview
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tag: "HOME SERVICES",
                title: "Precision HVAC",
                img: "https://images.unsplash.com/photo-1520975922284-9b9a45d43f9a?q=80&w=1600&auto=format&fit=crop",
                blurb:
                  "High-contrast landing, service sections, and a sticky call CTA.",
              },
              {
                tag: "FITNESS",
                title: "IronForge Gym",
                img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
                blurb:
                  "Hero imagery, class schedule, and a simple join flow for new members.",
              },
              {
                tag: "AUTO DETAIL",
                title: "Ceramic Pro Studio",
                img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop",
                blurb:
                  "Glossy visuals, package matrix, and a lead capture form tuned for bookings.",
              },
            ].map((c, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-black"
              >
                <div className="relative">
                  <img
                    alt={`${c.title} preview`}
                    src={c.img}
                    className="aspect-[4/3] w-full object-cover opacity-90 transition group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
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

      {/* ============== PROCESS SUMMARY ============== */}
      <section id="process" className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h3 className="text-2xl font-semibold tracking-tight">
            A simple three-step build
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Step
              n={1}
              title="Discover"
              text="We learn your story, audience, and goals so the site feels like an extension of your business."
            />
            <Step
              n={2}
              title="Design"
              text="We build a cinematic, conversion-focused layout tailored to your brand and offers."
            />
            <Step
              n={3}
              title="Launch"
              text="We deploy, monitor, and manage your site so it stays fast, secure, and up to date."
            />
          </div>
        </div>
      </section>

      {/* ============== CONTACT TEASER ============== */}
      <section
        id="contact"
        className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:px-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Start your free preview
            </h3>
            <p className="mt-2 max-w-lg text-zinc-200">
              Share a few details about your business. We’ll sketch a concept
              that feels like tomorrow and converts today.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                No long-term contracts
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Clear pricing and timeline
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Fully managed after launch
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
            <button className="h-11 w-full rounded-full bg-white font-semibold text-black transition hover:bg-zinc-200">
              Request preview
            </button>
            <p className="text-xs text-zinc-500">
              By submitting, you agree to be contacted about your project.
            </p>
          </form>
        </div>
      </section>
    </SiteChrome>
  );
}















