"use client";
import React, { Suspense } from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

function ContactForm() {
  return (
    <form className="max-w-xl space-y-3">
      <input
        className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
        name="business"
        placeholder="Business name"
      />
      <input
        className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
        name="name"
        placeholder="Your name"
      />
      <input
        className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
        type="tel"
        inputMode="tel"
        name="phone"
        placeholder="Phone"
      />
      <textarea
        className="min-h-[120px] w-full rounded-xl border border-white/15 bg-white/5 p-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
        name="notes"
        placeholder="What do you do? What’s the main goal of this site?"
      />
      <button className="h-11 w-full rounded-full bg-white font-semibold text-black hover:bg-zinc-200 transition">
        Request Preview
      </button>
      <p className="text-xs text-zinc-500">
        By submitting, you agree to be contacted about your project.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">GET STARTED</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Tell us about your <G>business</G>.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            We’ll respond with a simple next step—usually a quick call and a rough concept of how
            your new site could look and feel.
          </p>
        </div>
      </section>

      {/* CONTENT + FORM */}
      <section className="bg-black">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:px-8">
          {/* Explainer + visual */}
          <div className="space-y-5 text-sm sm:text-[15px] text-zinc-300 leading-relaxed">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-100">
              What happens after you reach out
            </h3>
            <p>
              First, we’ll learn a bit about you—what you do, who you serve, and how you’d like
              people to feel when they land on your site. From there, we sketch a simple direction
              that aligns with your brand and goals.
            </p>
            <p>
              If it feels like a fit, we’ll move into a focused build: strong hero, clear sections,
              and a layout that makes it easy for customers to understand you and take the next
              step.
            </p>
            <p className="text-zinc-400 text-xs sm:text-[13px]">
              No high-pressure sales calls, no hidden fees—just a straightforward conversation about
              what will actually help your business.
            </p>
          </div>

          {/* Form */}
          <Suspense fallback={<div className="text-zinc-400">Loading form…</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </SiteChrome>
  );
}





