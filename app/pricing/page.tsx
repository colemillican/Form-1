"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function PricingPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">PRICING</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Clear <G>monthly pricing</G>. No surprise invoices.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            One predictable subscription gets you design, build, hosting, and ongoing updates. No
            giant upfront project fee, no nickel-and-diming for small changes.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12 sm:px-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Launch",
              price: "$149/mo",
              tag: "Best for new sites",
              blurb: "A clean, modern brochure site with everything managed for you.",
              points: [
                "Up to 5 core pages",
                "Modern, conversion-focused design",
                "Hosting & technical upkeep included",
              ],
            },
            {
              name: "Growth",
              price: "$249/mo",
              tag: "For growing teams",
              blurb: "Extra depth, more sections, and a little more room to experiment.",
              points: [
                "Up to 8–10 pages",
                "Richer layouts and sections",
                "More frequent content updates",
              ],
            },
            {
              name: "Pro",
              price: "$399/mo",
              tag: "For serious digital presence",
              blurb: "Priority support and a higher ceiling for complexity and polish.",
              points: [
                "Custom sections & integrations",
                "Priority edits & refinements",
                "Closer ongoing collaboration",
              ],
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                {tier.tag}
              </div>
              <div className="mt-2 text-lg font-semibold">{tier.name}</div>
              <div className="mt-1 text-emerald-300 font-semibold">{tier.price}</div>
              <p className="mt-2 text-sm text-zinc-300">{tier.blurb}</p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1 flex-1">
                {tier.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition"
              >
                Talk about this plan
              </a>
            </div>
          ))}
        </div>

        {/* What’s included in every plan */}
        <div className="mx-auto max-w-screen-lg px-6 pb-16 text-center">
          <h2
            className={`${heroFont.className} text-[clamp(22px,3vw,30px)] font-semibold tracking-tight mb-3`}
          >
            Every plan includes the essentials
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            No matter which tier you choose, you get a modern website, built on a solid technical
            foundation, hosted and maintained for you. We handle performance, basic SEO setup,
            security updates, and small content tweaks so the site keeps feeling fresh as your
            business grows.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}


