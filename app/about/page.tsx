"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function AboutPage() {
  return (
    <SiteChrome>
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">WHO WE ARE</p>
          <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
            <G>Local</G> focus. <G>Modern</G> craft.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            We combine cinematic design, solid engineering, and a service mindset to help local businesses look
            world-class online.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12 sm:px-8 space-y-6 text-zinc-300 leading-7">
          <p>
            Your website is your most important storefront. We build it to tell your story, earn trust, and drive action.
            Then we keep it fast, secure, and up-to-date.
          </p>
          <p>
            Our approach is simple: understand your goals, design with intention, and ship quickly. We’ll iterate with
            real feedback and manage the details so you can focus on your business.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}



