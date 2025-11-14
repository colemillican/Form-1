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

/* Headline font – slightly lighter for a more premium feel */
const heroFont = Exo_2({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

/* Hero carousel images (grand nature) */
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
      10000
    );
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
      {/* HERO (centered, cinematic + story-first) */}
      <section className="relative isolate flex min-h-[86vh] items-center justify-center overflow-hidden">
        <HeroCarousel />
        <div className="pointer-events-none absolute -top-24 -left-24 h-[50vh] w-[50vh] rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[55vh] w-[55vh] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Clean, two-line story-first headline */}
            <h1
              className={`${heroFont.className} text-[clamp(34px,5.5vw,64px)] font-semibold leading-[1.06] tracking-tight`}
            >
              <G>Stories that connect.</G>
              <br />
              <G>Websites that perform.</G>
            </h1>

            <p className="mt-4 text-[15px] leading-relaxed text-zinc-200 sm:text-[16px]">
              We bring your story to life online — designing, building, and
              managing beautiful, high-performing websites that help local
              customers find you, trust you, and reach out.
            </p>

            {/* Glass CTA strip – input + button without big white block */}
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="text"
                placeholder="Tell us about your business in one sentence..."
                className="h-12 w-full max-w-[460px] rounded-full border border-white/25 bg-black/25 px-5 text-[15px] text-white placeholder:text-zinc-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/80"
              />
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-7 text-[15px] font-semibold text-black shadow-sm hover:bg-emerald-400 transition w-full max-w-[220px] sm:w-auto"
              >
                <span>Get my free outline</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-[11px] text-zinc-300">
              No payment, no obligation. We review what you share and send back
              a custom website outline for your business.
            </p>

            <div className="mt-7 hidden flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-zinc-300 sm:flex">
              <span className="inline-flex items-center gap-2">
                <Bolt className="h-4 w-4 text-emerald-400" /> Built for local
                businesses
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Fully
                managed partnership
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-emerald-400" /> Fast and
                mobile-first
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section
        id="services"
        className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-3 sm:px-8">
          <Feature
            icon={<Monitor className="h-5 w-5 text-emerald-400" />}
            title="Cinematic design"
            text="Bold type, real imagery, and layouts that feel like your business — not a generic template."
          />
          <Feature
            icon={<Globe className="h-5 w-5 text-emerald-400" />}
            title="Modern performance"
            text="Optimized for search, speed, and mobile — so locals actually find and use your site."
          />
          <Feature
            icon={<Search className="h-5 w-5 text-emerald-400" />}
            title="Built to convert"
            text="Clear messaging and calls-to-action focused on calls, bookings, and walk-ins, not just page views."
          />
        </div>
      </section>

      {/* Work (sample) */}
      <section id="work" className="bg-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-2xl font-semibold tracking-tight">
              Recent launches
            </h3>
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

      {/* Process (summary) */}
      <section id="process" className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h3 className="text-2xl font-semibold tracking-tight">
            A lean, three-step build
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Step
              n={1}
              title="Discover"
              text="We capture your goals, brand tone, and the people you want to reach."
            />
            <Step
              n={2}
              title="Design"
              text="Cinematic hero, clean layout, and premium typography matched to your story."
            />
            <Step
              n={3}
              title="Launch"
              text="Deployed, hosted, and managed — with analytics wired so you can see results."
            />
          </div>
        </div>
      </section>

      {/* Contact teaser */}
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
              Share a few details. We’ll design a concept tailored to your
              business, so you can see what a modern, story-driven site could do
              for you.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" /> No setup fee
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" /> Fast turnaround
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" /> Fully managed
                after launch
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
            <p className="text-xs text-zinc-500">
              By submitting, you agree to be contacted about your project.
            </p>
          </form>
        </div>
      </section>
    </SiteChrome>
  );
}














