"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/20 text-[12px] font-bold text-emerald-300">
          {n}
        </span>
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">HOW IT WORKS</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            A <G>simple process</G> built around your time.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            We keep things tight and clear: a few key checkpoints, quick feedback loops, and
            no bloated calls. You always know what’s happening and what’s next.
          </p>
        </div>
      </section>

      {/* STEPS + VISUAL */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
          <div className="grid gap-5 sm:grid-cols-3">
            <Step
              n={1}
              title="Discover"
              text="We gather your goals, services, and brand tone—plus any examples you like. This sets the target for the build."
            />
            <Step
              n={2}
              title="Design"
              text="We craft the hero, layout, and core sections. You review a live concept instead of squinting at wireframes."
            />
            <Step
              n={3}
              title="Launch"
              text="We refine, then ship to production. Analytics are wired, SEO basics are set, and we handle ongoing updates."
            />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1600&auto=format&fit=crop"
              alt="Workflow board and laptop"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-5 text-sm text-zinc-200 space-y-2">
              <div className="font-semibold text-base">What we need from you</div>
              <p>• 30–45 minutes for an initial kickoff conversation.</p>
              <p>• Any existing logo, photos, or brand pieces you want us to use.</p>
              <p>• Straightforward feedback at 1–2 key checkpoints. We’ll guide the rest.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}





