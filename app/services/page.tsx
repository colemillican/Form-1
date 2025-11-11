"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Monitor, Globe, Search, Smartphone, Sparkles } from "lucide-react";
import SiteChrome, { G } from "../components/SiteChrome";

const heroImg =
  "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=1600&auto=format&fit=crop";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-zinc-300">
      <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
      <span className="text-sm leading-6">{children}</span>
    </li>
  );
}

export default function ServicesPage() {
  return (
    <SiteChrome>
      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8">
          <h1 className="text-[clamp(28px,5vw,44px)] font-semibold tracking-tight">
            Services built for <G>local business momentum</G>
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-300">
            From a striking first impression to ongoing optimization, we deliver a lean stack that
            actually moves the needle—fast build, fast site, fast results.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 transition"
            >
              Start your free preview <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service buckets */}
      <section className="bg-zinc-950">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-5 px-6 py-12 sm:grid-cols-3 sm:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 inline-flex items-center gap-2 text-[15px] font-semibold">
              <Monitor className="h-5 w-5 text-emerald-400" /> Design & Build
            </div>
            <ul className="space-y-2">
              <Bullet>Hero section that converts (headline + CTA)</Bullet>
              <Bullet>Mobile-first, cinematic layout</Bullet>
              <Bullet>Lightning-fast Next.js performance</Bullet>
              <Bullet>Contact & lead capture wired</Bullet>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 inline-flex items-center gap-2 text-[15px] font-semibold">
              <Globe className="h-5 w-5 text-emerald-400" /> Hosting & Care
            </div>
            <ul className="space-y-2">
              <Bullet>Managed Vercel hosting + SSL</Bullet>
              <Bullet>Domain & DNS help included</Bullet>
              <Bullet>Content edits as you grow</Bullet>
              <Bullet>Uptime and basic analytics</Bullet>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 inline-flex items-center gap-2 text-[15px] font-semibold">
              <Search className="h-5 w-5 text-emerald-400" /> Visibility & SEO
            </div>
            <ul className="space-y-2">
              <Bullet>Semantic HTML, meta tags, OpenGraph</Bullet>
              <Bullet>Local SEO basics (NAP, titles, slugs)</Bullet>
              <Bullet>Performance tuning for Core Web Vitals</Bullet>
              <Bullet>Indexing help (Search Console)</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-screen-2xl px-6 py-12 sm:px-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Smart add-ons <G>when you’re ready</G>
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Smartphone className="h-5 w-5 text-emerald-400" />, title: "Booking & Calendars", text: "Let customers reserve time slots or classes directly." },
              { icon: <Sparkles className="h-5 w-5 text-emerald-400" />, title: "Before/After Galleries", text: "Show proof with clean, filterable visual grids." },
              { icon: <Search className="h-5 w-5 text-emerald-400" />, title: "Blog / Updates", text: "Announce promos, articles, and updates with SEO-ready posts." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-2 inline-flex items-center gap-2 text-[15px] font-semibold">
                  {c.icon} {c.title}
                </div>
                <p className="text-sm text-zinc-300">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}

