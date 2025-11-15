"use client";

import React, { useEffect, useState, FormEvent } from "react";

type StyleVibe = "cinematic" | "warm" | "minimal" | "playful";

type PreviewPhase = "form" | "loading" | "preview";

type FormState = {
  businessName: string;
  industry: string;
  location: string;
  styleVibe: StyleVibe;
  primaryGoal: string;
  idealCustomer: string;
  keyOffers: string;
  differentiator: string;
};

const loadingPhrases = [
  "Crafting your first impression…",
  "Aligning story, visuals, and flow…",
  "Dialing in a homepage that actually sells…",
  "Designing a digital front door your customers remember…",
];

function LoadingScreen() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % loadingPhrases.length);
    }, 2500); // change phrase every 2.5s
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative flex min-h-[calc(100vh-56px)] items-center justify-center overflow-hidden bg-black">
      {/* Gradient + subtle motion background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(16,185,129,0.2), transparent 55%), radial-gradient(circle at 100% 100%, rgba(45,212,191,0.22), transparent 55%), radial-gradient(circle at 50% 10%, rgba(56,189,248,0.18), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_55%)] animate-pulse" />

      {/* Shooting star */}
      <div className="pointer-events-none absolute -top-10 left-[-20%] h-px w-[40%] origin-left rounded-full bg-gradient-to-r from-transparent via-white to-transparent shooting-star" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <div className="mb-4 h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.65)]" />
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">
          Generating your homepage
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Sit tight—your draft is loading.
        </h1>
        <p className="mt-4 max-w-md text-sm text-zinc-200/90">
          {loadingPhrases[phraseIndex]}
        </p>

        {/* Simple spinner */}
        <div className="mt-8 h-8 w-8 animate-spin rounded-full border-2 border-emerald-400/40 border-t-emerald-300" />
      </div>
    </main>
  );
}

export default function PreviewPage() {
  const [phase, setPhase] = useState<PreviewPhase>("form");
  const [siteId, setSiteId] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    businessName: "",
    industry: "",
    location: "",
    styleVibe: "cinematic",
    primaryGoal: "",
    idealCustomer: "",
    keyOffers: "",
    differentiator: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSampleFill = () => {
    setForm({
      businessName: "Apex Performance Gym",
      industry: "Strength & conditioning gym",
      location: "Birmingham, AL",
      styleVibe: "cinematic",
      primaryGoal: "Convert visitors into trial members and personal training clients.",
      idealCustomer:
        "Busy professionals and athletes 20–40 who care about serious training, not fads.",
      keyOffers:
        "Open gym memberships, small-group strength classes, and 1:1 performance coaching.",
      differentiator:
        "Serious coaching, measurable progress, and a no-gimmicks training culture.",
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setPhase("loading");
    setSiteId(null);

    try {
      // minimum 10 second loading screen
      const fetchPromise = fetch("/api/generate-site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const delay = new Promise((resolve) => setTimeout(resolve, 10000));

      const [res] = (await Promise.all([
        fetchPromise,
        delay,
      ])) as [Response, unknown];

      if (!res.ok) {
        throw new Error("Failed to generate site");
      }

      const data = (await res.json()) as { id: string };
      setSiteId(data.id);
      setPhase("preview");
    } catch (err) {
      console.error(err);
      alert("Something went wrong generating your preview. Please try again.");
      setPhase("form");
    }
  };

  // Simple layout wrapper shared by form + preview
  const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="min-h-screen bg-black text-white">
      <header className="flex h-14 items-center justify-between border-b border-white/10 bg-black/80 px-5 backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500">
            <div className="h-3 w-3 rounded-md border-2 border-white/90 border-b-transparent" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            LocalLink Digital
          </span>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
          Preview Portal
        </span>
      </header>
      {children}
    </div>
  );

  /* ------------ Phase switch ------------ */
  if (phase === "loading") {
    return (
      <PageShell>
        <LoadingScreen />
      </PageShell>
    );
  }

  if (phase === "preview" && siteId) {
    return (
      <PageShell>
        <main className="mx-auto flex min-h-[calc(100vh-56px)] max-w-6xl flex-col gap-6 px-5 py-10 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
              Your homepage draft
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Here’s a first pass at your new homepage.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-300">
              This is a generated draft based on your answers. In a full build, we’d
              refine the copy, imagery, and structure together and wire it up as a
              complete site.
            </p>
          </div>

          <section className="flex-1">
            <iframe
              key={siteId}
              src={`/generated-sites/${siteId}.html`}
              className="h-[75vh] w-full rounded-2xl border border-white/10 bg-black"
              loading="lazy"
            />
          </section>

          <section className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-zinc-300 sm:text-sm">
            <h2 className="text-sm font-semibold text-zinc-50">
              How this draft was created
            </h2>
            <p className="mt-2">
              We used your answers about{" "}
              <span className="font-medium">{form.businessName || "your business"}</span>{" "}
              to set the tone, structure, and messaging. On a real project, this
              preview becomes the starting point for a full discovery call and
              refinement process before launch.
            </p>
          </section>

          <button
            type="button"
            onClick={() => setPhase("form")}
            className="mt-2 self-start rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-zinc-100 hover:bg-white/5"
          >
            Adjust my answers &amp; regenerate
          </button>
        </main>
      </PageShell>
    );
  }

  // Default: form phase
  return (
    <PageShell>
      <main className="mx-auto flex min-h-[calc(100vh-56px)] max-w-4xl flex-col px-5 py-10 lg:px-8">
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
            Free website preview
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Tell us about your business. We’ll sketch your homepage.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-300">
            Answer a few focused questions. We’ll turn your answers into a homepage
            draft using the same design system we use for full projects.
          </p>
        </header>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleSampleFill}
            className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-zinc-100 hover:bg-white/5"
          >
            Fill with sample answers
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 pb-10">
          <div>
            <label className="text-xs font-medium text-zinc-300">
              Business name
            </label>
            <input
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              required
              placeholder="Apex Performance Gym"
              className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-zinc-300">
                Industry / Type of business
              </label>
              <input
                name="industry"
                value={form.industry}
                onChange={handleChange}
                required
                placeholder="Strength & conditioning gym"
                className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-zinc-300">
                Location (city, state)
              </label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                placeholder="Birmingham, AL"
                className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-300">
              Primary goal of the website
            </label>
            <textarea
              name="primaryGoal"
              value={form.primaryGoal}
              onChange={handleChange}
              required
              rows={2}
              placeholder="Book trials, sell memberships, and position us as the serious training option in town."
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 p-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-300">
              Who is your ideal customer?
            </label>
            <textarea
              name="idealCustomer"
              value={form.idealCustomer}
              onChange={handleChange}
              required
              rows={2}
              placeholder="Busy professionals and athletes who want real results and appreciate coaching."
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 p-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-300">
              Key services or offers
            </label>
            <textarea
              name="keyOffers"
              value={form.keyOffers}
              onChange={handleChange}
              required
              rows={2}
              placeholder="Open gym, small-group strength classes, 1:1 coaching, youth athletic development."
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 p-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-300">
              What makes you different?
            </label>
            <textarea
              name="differentiator"
              value={form.differentiator}
              onChange={handleChange}
              required
              rows={2}
              placeholder="Serious training, clear progress tracking, and a no-ego, no-gimmick culture."
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 p-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-300">
              Visual style
            </label>
            <select
              name="styleVibe"
              value={form.styleVibe}
              onChange={handleChange}
              className="mt-1 h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
            >
              <option value="cinematic">Cinematic / Bold</option>
              <option value="warm">Warm / Welcoming</option>
              <option value="minimal">Minimal / Clean</option>
              <option value="playful">Playful / Friendly</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-8 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(16,185,129,0.45)] hover:from-emerald-300 hover:to-emerald-200 hover:shadow-[0_18px_40px_rgba(16,185,129,0.55)]"
          >
            Generate my homepage draft
          </button>
        </form>
      </main>
    </PageShell>
  );
}
