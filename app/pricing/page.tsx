"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Exo_2 } from "next/font/google";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

const Tier = ({
  name,
  price,
  blurb,
  features,
  highlight = false,
}: {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  highlight?: boolean;
}) => (
  <div className={`rounded-2xl border bg-white/5 p-6 ${highlight ? "border-emerald-400/40" : "border-white/10"}`}>
    <h3 className={`${heroFont.className} text-xl font-semibold`}>{name}</h3>
    <div className="mt-1 text-3xl font-bold">${price}<span className="text-base font-medium text-zinc-400">/mo</span></div>
    <p className="mt-2 text-zinc-300">{blurb}</p>
    <ul className="mt-4 space-y-2 text-sm text-zinc-200">
      {features.map((f) => (
        <li key={f} className="inline-flex items-start gap-2">
          <Check className="mt-[2px] h-4 w-4 text-emerald-400" /> {f}
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-full bg-white text-black px-5 font-semibold hover:bg-zinc-200 transition">
        Start free preview
      </Link>
    </div>
  </div>
);

export default function PricingPage() {
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
            <Link href="/pricing" className="text-white">Pricing</Link>
            <Link href="/faq" className="text-zinc-300 hover:text-white">FAQ</Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
            <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">STRAIGHTFORWARD</p>
            <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
              Simple pricing for <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">real outcomes</span>.
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
              Start with a free concept. Launch on a plan that fits. Upgrade any time.
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-6 md:grid-cols-3">
            <Tier
              name="Starter"
              price="79"
              blurb="A clean, beautiful site that covers the essentials."
              features={[
                "One-page site (hero, services, contact)",
                "Mobile-first design",
                "Core SEO & analytics",
                "Two content edits/mo",
                "Managed hosting",
              ]}
            />
            <Tier
              name="Business"
              price="149"
              blurb="Multi-page site with stronger storytelling & conversion."
              features={[
                "Up to 6 pages",
                "Refined brand type & color",
                "Componentized sections",
                "Four content edits/mo",
                "Priority support",
              ]}
              highlight
            />
            <Tier
              name="Growth"
              price="299"
              blurb="Premium visuals and ongoing iteration to drive results."
              features={[
                "Up to 12 pages",
                "Custom visuals & interactions",
                "Quarterly optimization review",
                "Unlimited minor edits",
                "A/B testing ready",
              ]}
            />
          </div>

          <div className="mx-auto max-w-screen-2xl px-6 pb-16 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white text-black px-6 font-semibold hover:bg-zinc-200 transition"
            >
              Get your free preview
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

