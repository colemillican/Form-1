"use client";

import React from "react";
import Link from "next/link";
import { Exo_2 } from "next/font/google";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

const QA = ({ q, a }: { q: string; a: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h3 className={`${heroFont.className} text-[17px] font-semibold`}>{q}</h3>
    <p className="mt-2 text-zinc-300">{a}</p>
  </div>
);

export default function FAQPage() {
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
            <Link href="/process" className="text-zinc-300 hover:text-white">Process</Link>
            <Link href="/pricing" className="text-zinc-300 hover:text-white">Pricing</Link>
            <Link href="/faq" className="text-white">FAQ</Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
            <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">FAQ</p>
            <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
              Answers, <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">without the fluff</span>.
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
              The most common questions about timelines, cost, and how we work.
            </p>
          </div>
        </section>

        {/* Q&A */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-6 md:grid-cols-2">
            <QA q="How long does it take?" a="Most sites are ready to launch within 1–3 weeks depending on scope and content readiness." />
            <QA q="Can you update our content after launch?" a="Yes. We fully manage your site—send changes and we handle the rest." />
            <QA q="Do you do logos or branding?" a="We can refine type, color, and tone. For full identity work, we’ll recommend a specialist we trust." />
            <QA q="What if I don’t have pictures?" a="We source high-quality imagery that matches your brand until you have custom photography." />
            <QA q="Is SEO included?" a="We include solid fundamentals: metadata, semantic HTML, sitemap/robots setup, and fast performance." />
            <QA q="How do we start?" a="Request a free preview. We’ll design a concept and send it for your review—no commitment." />
          </div>

          <div className="mx-auto max-w-screen-2xl px-6 pb-16 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white text-black px-6 font-semibold hover:bg-zinc-200 transition"
            >
              Start your free preview
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

