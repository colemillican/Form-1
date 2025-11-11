"use client";

import React from "react";
import Link from "next/link";
import { Exo_2 } from "next/font/google";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

const G = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
    {children}
  </span>
);

export default function AboutPage() {
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
            <Link href="/about" className="text-white">About</Link>
            <Link href="/process" className="text-zinc-300 hover:text-white">Process</Link>
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
            <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">OUR PHILOSOPHY</p>
            <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
              Stories that connect. <G>Websites that perform.</G>
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
              We’re a lean studio focused on clarity, emotion, and momentum. Your site should be beautiful,
              fast, and easy—for your team and your customers.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-10 md:grid-cols-2">
            <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop"
                alt="Expansive mountain sunrise"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="p-6">
                <h3 className={`${heroFont.className} text-xl font-semibold`}>Design with a point of view</h3>
                <p className="mt-2 text-zinc-300">
                  Your brand needs a stage, not a template. We craft calm, cinematic layouts that focus attention and tell your story.
                </p>
              </div>
            </article>

            <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
                alt="Snow ridge and vast sky"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="p-6">
                <h3 className={`${heroFont.className} text-xl font-semibold`}>Engineering that disappears</h3>
                <p className="mt-2 text-zinc-300">
                  Performance isn’t a feature; it’s the floor. We build on Next.js with smart caching and optimization so pages feel instant.
                </p>
              </div>
            </article>

            <article className="md:col-span-2 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1600&auto=format&fit=crop"
                alt="Aurora over water"
                className="w-full aspect-[21/9] object-cover"
              />
              <div className="p-6">
                <h3 className={`${heroFont.className} text-xl font-semibold`}>Partnership over projects</h3>
                <p className="mt-2 text-zinc-300">
                  We stay after launch. Content edits, iterations, ideas—we manage the site so your team can focus on the business.
                </p>
              </div>
            </article>
          </div>

          <div className="mx-auto max-w-screen-2xl px-6 pb-16 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white text-black px-6 font-semibold hover:bg-zinc-200 transition"
            >
              Work with us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}



