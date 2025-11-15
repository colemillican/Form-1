"use client";

import React, { useState } from "react";
import SiteChrome from "../components/SiteChrome";

type StyleVibe = "clean" | "bold" | "warm" | "minimal";

type PreviewData = {
  conceptLabel: string;
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
  };
  sections: string[];
  rationale: string;
};

export default function PreviewPage() {
  const [businessName, setBusinessName] = useState("");
  const [whatYouDo, setWhatYouDo] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [styleVibe, setStyleVibe] = useState<StyleVibe>("clean");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPreview(null);

    if (!businessName || !whatYouDo || !mainGoal || !email) {
      setError("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/generate-preview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName,
          whatYouDo,
          mainGoal,
          styleVibe,
          email,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate preview");
      }

      const data = (await res.json()) as PreviewData;
      setPreview(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while generating your preview.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteChrome>
      <div className="bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="mx-auto w-full max-w-screen-lg px-6 py-12 sm:px-8 sm:py-16">
          {/* Top intro */}
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              Free website preview
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              See your future website before you hire us.
            </h1>
            <p className="mt-3 text-sm text-zinc-300 sm:text-[15px]">
              Answer a few questions about your business and we&apos;ll generate
              a tailored website concept—completely free. This is an early
              preview, not a finished design, but it will show you how we&apos;d
              present your story online.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            {/* FORM CARD */}
            <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-xl backdrop-blur-xl sm:p-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                    Step 1 of 2
                  </p>
                  <h2 className="mt-1 text-sm font-medium text-zinc-100">
                    Tell us about your business
                  </h2>
                </div>
                <span className="text-[11px] text-zinc-400">
                  Takes about 2–3 minutes
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Business name */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300">
                    Business name<span className="text-red-400">*</span>
                  </label>
                  <input
                    className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Precision HVAC, IronForge Gym, etc."
                  />
                </div>

                {/* What you do */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300">
                    What do you do?<span className="text-red-400">*</span>
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 p-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                    rows={3}
                    value={whatYouDo}
                    onChange={(e) => setWhatYouDo(e.target.value)}
                    placeholder="We provide residential and light commercial HVAC services in Auburn..."
                  />
                </div>

                {/* Main goal */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300">
                    What&apos;s the main goal of this website?
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                    value={mainGoal}
                    onChange={(e) => setMainGoal(e.target.value)}
                    placeholder="Get more quote requests, book more calls, look more professional, etc."
                  />
                </div>

                {/* Style vibe */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300">
                    What kind of look are you going for?
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs sm:text-[13px]">
                    {[
                      { key: "clean", label: "Clean & modern" },
                      { key: "bold", label: "Bold & cinematic" },
                      { key: "warm", label: "Warm & welcoming" },
                      { key: "minimal", label: "Minimal & understated" },
                    ].map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => setStyleVibe(option.key as StyleVibe)}
                        className={`rounded-xl border px-3 py-2 text-left transition ${
                          styleVibe === option.key
                            ? "border-emerald-400 bg-emerald-400/10"
                            : "border-white/15 bg-white/5 hover:border-emerald-300/70"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300">
                    Where should we send your preview?
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                  />
                  <p className="mt-1 text-[11px] text-zinc-500">
                    We&apos;ll also show your preview on this page right away.
                  </p>
                </div>

                {error && (
                  <p className="text-xs text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(16,185,129,0.45)] transition hover:shadow-[0_0_26px_rgba(16,185,129,0.6)] disabled:opacity-60"
                >
                  {loading ? "Rendering your preview..." : "Generate my free preview"}
                </button>
              </form>
            </div>

            {/* PREVIEW PANEL */}
            <div className="rounded-3xl border border-white/10 bg-black/50 p-6 shadow-xl backdrop-blur-xl sm:p-7">
              {!preview && !loading && (
                <div className="flex h-full flex-col items-center justify-center text-center text-sm text-zinc-300">
                  <p>Your preview will appear here.</p>
                  <p className="mt-2 text-[12px] text-zinc-500">
                    Once you submit the form, we&apos;ll generate a homepage concept,
                    layout outline, and our recommended direction for your brand.
                  </p>
                </div>
              )}

              {loading && (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
                  <p className="text-sm font-medium text-zinc-100">
                    Rendering your preview…
                  </p>
                  <p className="text-[12px] text-zinc-500">
                    We&apos;re mapping your business, goals, and style into a concept.
                  </p>
                </div>
              )}

              {preview && !loading && (
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/80">
                      Concept preview
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-zinc-50">
                      {preview.conceptLabel}
                    </h2>
                    <p className="mt-1 text-[12px] text-zinc-400">
                      This is an early concept, not a finished design. We&apos;ll refine it
                      with you if you choose to move forward.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      Hero section
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-white">
                      {preview.hero.headline}
                    </h3>
                    <p className="mt-1 text-[13px] text-zinc-300">
                      {preview.hero.subheadline}
                    </p>
                    <button className="mt-3 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[12px] font-semibold text-black">
                      {preview.hero.primaryCta}
                    </button>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      Homepage outline
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[13px] text-zinc-200">
                      {preview.sections.map((section, i) => (
                        <li key={i}>• {section}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      Why this works
                    </p>
                    <p className="mt-2 text-[13px] text-zinc-200">
                      {preview.rationale}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="/pricing"
                      className="inline-flex w-full items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-400/10 px-4 py-2 text-[13px] font-semibold text-emerald-300 hover:bg-emerald-400/20"
                    >
                      I like this direction — show me packages
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
