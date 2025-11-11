"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Exo_2 } from "next/font/google";
import SiteChrome from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

// Gradient helper (same style as elsewhere)
const G = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
    {children}
  </span>
);

export default function ThankYouPage() {
  return (
    <SiteChrome>
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 sm:px-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
          <h1
            className={`${heroFont.className} mt-4 text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            Thanks — we’ll be in touch <G>shortly</G>.
          </h1>
          <p className="mt-3 text-zinc-300">
            We’ll review your details and send a quick follow-up with next steps.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white text-black px-5 font-semibold hover:bg-zinc-200 transition"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-5 font-semibold text-white hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}

