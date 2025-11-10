"use client";

import React from "react";
import SiteChrome, { G } from "../components/SiteChrome";
import { Check } from "lucide-react";

export default function AboutPage() {
  const points = [
    "Auburn-based team that understands local businesses.",
    "Mobile-first, speed-focused builds using modern tech.",
    "Clear communication, fast turnaround, and zero fluff.",
    "Honest pricing and simple maintenance options.",
  ];

  return (
    <SiteChrome>
      <section className="bg-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Why <G>choose us</G>
          </h1>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm text-zinc-300">
              We’re builders who care about clean design and real-world results. No hype — just dependable execution.
            </p>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[14px] leading-6 text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}


