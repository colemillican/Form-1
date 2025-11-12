"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function FAQPage() {
  return (
    <SiteChrome>
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">FAQ</p>
          <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
            Answers to <G>common questions</G>.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            Quick details on process, timelines, ownership, and support.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-screen-md px-6 py-12 sm:px-8 space-y-6 text-zinc-300">
          <div>
            <div className="font-semibold">How fast can we launch?</div>
            <p className="text-sm mt-1">Most sites launch in 2–3 weeks depending on scope and content readiness.</p>
          </div>
          <div>
            <div className="font-semibold">Who owns the site?</div>
            <p className="text-sm mt-1">You do. We manage hosting/ops so you don’t have to think about it.</p>
          </div>
          <div>
            <div className="font-semibold">What’s included monthly?</div>
            <p className="text-sm mt-1">Updates, performance monitoring, security patches, and minor content edits.</p>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}


