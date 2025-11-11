"use client";

import React from "react";
import Link from "next/link";
import { Exo_2 } from "next/font/google"


const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

const Step = ({ n, title, text }: { n: number; title: string; text: string }) => (
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

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased">
      {/* Top Bar */}
      <header className="sticky top-0 z-[200] border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center justify-between px-6 sm:px-8">
          <Link href="/" className="text-sm font-semibold text-zinc-300 hover:text-white">
            ← Home
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="/services" className="text-zinc-300 hover:text-white">Services</Link>
            <Link href="/about" className="text-zinc-300 hover:text-white">About</Link>
            <Link href="/process" className="text-white">Process</Link>
            <Link href="/pricing" className="text-zinc-300 hover:text-white">Pricing</Link>
            <Link href="/faq" className="text-zinc-300 hover:text-white">FAQ</Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
            <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">HOW WE WORK</p>
            <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
              A simple process for <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">strong outcomes</span>.
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
              We move from discovery to launch fast—keeping you in the loop without eating your time.
            </p>
          </div>
        </section>

        {/* Steps + Visual */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-10 md:grid-cols-2">
            <div className="grid gap-5">
              <Step n={1} title="Discover" text="Quick kickoff to understand your goals, tone, audience, and offers." />
              <Step n={2} title="Design" text="Cinematic hero, clean layout, premium typography, and clear CTAs." />
              <Step n={3} title="Build" text="Next.js implementation with optimized images and mobile-first layout." />
              <Step n={4} title="Launch" text="Deployed to Vercel with analytics and SEO fundamentals wired in." />
              <Step n={5} title="Manage" text="We handle updates and improvements long-term so you can focus on work." />
            </div>

            <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop"
                alt="Vast desert landscape"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="p-6">
                <h3 className={`${heroFont.className} text-xl font-semibold`}>Clarity at every step</h3>
                <p className="mt-2 text-zinc-300">
                  You’ll see working previews early. We refine together, then ship with confidence.
                </p>
              </div>
            </article>
          </div>

          <div className="mx-auto max-w-screen-2xl px-6 pb-16 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white text-black px-6 font-semibold hover:bg-zinc-200 transition"
            >
              Kick off a project
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}



