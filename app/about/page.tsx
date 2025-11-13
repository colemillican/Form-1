"use client";
import React from "react";
import { Exo_2 } from "next/font/google";
import SiteChrome, { G } from "../components/SiteChrome";

const heroFont = Exo_2({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function AboutPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] text-zinc-400">WHO WE ARE</p>
          <h1
            className={`${heroFont.className} text-[clamp(28px,4.2vw,44px)] font-bold tracking-tight`}
          >
            <G>Local</G> roots. <G>Modern</G> execution.
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-zinc-300">
            LocalLink Digital was built for small teams and local owners who care about the work,
            but don’t have time to wrestle with websites, updates, and tech.
          </p>
        </div>
      </section>

      {/* CONTENT + VISUAL */}
      <section className="bg-black">
        <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 grid gap-10 md:grid-cols-[1.5fr,1fr] items-center">
          {/* Copy side */}
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            <p>
              You’re great at what you do—running a gym, a service company, a local shop—but your
              website either doesn’t reflect that or takes way too much effort to maintain. That’s
              the gap we exist to fill.
            </p>
            <p>
              We care about the details: type that feels intentional, layouts that are easy to scan,
              and performance you can feel. But more importantly, we care about telling your story
              in a way that builds trust and moves people to reach out.
            </p>
            <p>
              Instead of “one and done” builds, we think in long-term partnerships. Your business
              will evolve, and your site should evolve with it—without you needing to dive into
              dashboards or plugins.
            </p>
          </div>

          {/* Tech visual */}
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
              alt="Code on screen and developer workspace"
              className="w-full aspect-[21/9] object-cover"
            />
            <div className="p-4 text-xs sm:text-sm text-zinc-200 space-y-2">
              <div className="font-semibold text-base">How we think about “good”</div>
              <p>• A site should feel effortless to use, even on a bad connection.</p>
              <p>• Every section should have a clear job: explain, build trust, or drive action.</p>
              <p>• The design should quietly make you look sharp—never cheesy or overdone.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}





