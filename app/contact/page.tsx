"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Exo_2 } from "next/font/google";
import { useSearchParams } from "next/navigation";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });
const BRAND = "LocalLink Digital";

const G = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
    {children}
  </span>
);

export default function ContactPage() {
  const params = useSearchParams();
  const businessPrefill = params.get("business") ?? "";

  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased">
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
            <Link href="/faq" className="text-zinc-300 hover:text-white">FAQ</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
            <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">GET IN TOUCH</p>
            <h1 className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}>
              Start your free <G>preview</G>.
            </h1>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Tell us about your business. We’ll design a concept that looks like tomorrow and converts today.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="bg-black">
          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 sm:px-8">
            <div>
              <h3 className={`${heroFont.className} text-xl font-semibold tracking-tight`}>What you can expect</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> No setup fee</li>
                <li className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Fast turnaround</li>
                <li className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Fully managed after launch</li>
              </ul>
              <p className="mt-4 text-sm text-zinc-400">
                Prefer email? <a href="mailto:hello@locallink.digital" className="text-zinc-200 hover:underline">hello@locallink.digital</a>
              </p>
            </div>

            <form className="max-w-xl space-y-3">
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                name="business"
                placeholder="Business name"
                defaultValue={businessPrefill}
                autoComplete="organization"
              />
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                name="name"
                placeholder="Your name"
                autoComplete="name"
              />
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                type="tel"
                name="phone"
                inputMode="tel"
                placeholder="Phone"
                autoComplete="tel"
              />
              <textarea
                className="min-h-[120px] w-full rounded-xl border border-white/15 bg-white/5 p-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                name="message"
                placeholder="What do you do? What’s the main goal of this site?"
              />
              <button className="h-11 w-full rounded-full bg-white font-semibold text-black hover:bg-zinc-200 transition">
                Request Preview
              </button>
              <p className="text-xs text-zinc-500">
                By submitting, you agree to be contacted about your project.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-10 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="text-sm">
              <div className="font-semibold">{BRAND}</div>
              <div className="text-zinc-400">Modern websites, future-ready</div>
            </div>
            <nav className="flex flex-wrap items-center gap-5 text-sm">
              <Link href="/services" className="text-zinc-300 hover:text-white">Services</Link>
              <Link href="/about" className="text-zinc-300 hover:text-white">About</Link>
              <Link href="/process" className="text-zinc-300 hover:text-white">Process</Link>
              <Link href="/pricing" className="text-zinc-300 hover:text-white">Pricing</Link>
              <Link href="/faq" className="text-zinc-300 hover:text-white">FAQ</Link>
              <Link href="/contact" className="text-zinc-300 hover:text-white">Contact</Link>
            </nav>
          </div>
          <div className="mt-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}


