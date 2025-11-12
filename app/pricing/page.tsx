"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function PricingPage() {
  return (
    <SiteChrome>
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">PRICING</p>
          <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
            Transparent <G>pricing</G> for real outcomes.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">Simple plans that scale with you. No surprises.</p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12 sm:px-8 grid gap-6 md:grid-cols-3">
          {[
            { name: "Launch", price: "$0 setup + $149/mo", blurb: "Perfect for a clean, modern site with ongoing care." },
            { name: "Growth", price: "$0 setup + $249/mo", blurb: "Extra pages, advanced sections, and faster iterations." },
            { name: "Pro", price: "$0 setup + $399/mo", blurb: "Priority updates, content support, and custom features." },
          ].map(t => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="mt-1 text-emerald-300 font-semibold">{t.price}</div>
              <p className="mt-2 text-sm text-zinc-300">{t.blurb}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}


