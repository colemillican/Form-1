"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import { Monitor, Globe, Search, Wrench } from "lucide-react";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function ServicesPage() {
  return (
    <SiteChrome>
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">WHAT WE DO</p>
          <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
            <G>Services</G> built to make you look world-class.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            We keep it simple: stunning design, clean code, and performance you can feel. Each plan focuses on
            outcomes—more trust, more leads, more growth.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-6 md:grid-cols-2">
          {/* Design */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" alt="" className="w-full aspect-[16/9] object-cover" />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>Cinematic Design</h3>
              <p className="mt-2 text-zinc-300">Bold layout, premium type, crisp spacing. Pages that guide the eye and feel effortless to use.</p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-emerald-400" /> Homepage + key subpages</li>
                <li className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-emerald-400" /> Brand-matched color & type system</li>
                <li className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-emerald-400" /> Conversion-ready CTAs</li>
              </ul>
            </div>
          </article>

          {/* Performance */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop" alt="" className="w-full aspect-[16/9] object-cover" />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>Performance & Speed</h3>
              <p className="mt-2 text-zinc-300">Next.js, image optimization, caching, and Core Web Vitals best practices baked in.</p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2"><Globe className="h-4 w-4 text-emerald-400" /> Responsive & mobile-first</li>
                <li className="inline-flex items-center gap-2"><Globe className="h-4 w-4 text-emerald-400" /> Optimized media & lazy loading</li>
                <li className="inline-flex items-center gap-2"><Globe className="h-4 w-4 text-emerald-400" /> Vercel deployment</li>
              </ul>
            </div>
          </article>

          {/* SEO */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop" alt="" className="w-full aspect-[16/9] object-cover" />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>Local SEO-Ready</h3>
              <p className="mt-2 text-zinc-300">Semantic structure, clean metadata, and fundamentals that help customers find you.</p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2"><Search className="h-4 w-4 text-emerald-400" /> Title/description & open graph</li>
                <li className="inline-flex items-center gap-2"><Search className="h-4 w-4 text-emerald-400" /> Sitemap & robots best practices</li>
                <li className="inline-flex items-center gap-2"><Search className="h-4 w-4 text-emerald-400" /> Clean HTML hierarchy</li>
              </ul>
            </div>
          </article>

          {/* Management */}
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" alt="" className="w-full aspect-[16/9] object-cover" />
            <div className="p-6">
              <h3 className={`${heroFont.className} text-xl font-semibold`}>Fully Managed</h3>
              <p className="mt-2 text-zinc-300">No hassle hosting and updates. We keep things running so you can focus on the work.</p>
              <ul className="mt-4 text-sm text-zinc-300 space-y-1">
                <li className="inline-flex items-center gap-2"><Wrench className="h-4 w-4 text-emerald-400" /> Content updates included</li>
                <li className="inline-flex items-center gap-2"><Wrench className="h-4 w-4 text-emerald-400" /> Analytics wiring</li>
                <li className="inline-flex items-center gap-2"><Wrench className="h-4 w-4 text-emerald-400" /> Support channel</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="mx-auto max-w-screen-2xl px-6 pb-16 text-center">
          <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-white text-black px-6 font-semibold hover:bg-zinc-200 transition">
            Start your free preview
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}







