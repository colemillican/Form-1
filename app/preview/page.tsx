"use client";

import React, { useEffect, useState, FormEvent } from "react";

type StyleVibe = "cinematic" | "warm" | "minimal" | "playful";
type PreviewPhase = "form" | "loading" | "concept";

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

type HomepageSectionConcept = {
  title: string;
  description: string;
  bullets: string[];
};

type Concept = {
  brandStory: string;
  visualDirection: string;
  homepageSections: HomepageSectionConcept[];
  heroHeadlines: string[];
  heroSublines: string[];
  ctas: string[];
  whyThisWorks: string;
};

const loadingPhrases = [
  "Dialing in your brand story…",
  "Shaping a homepage that actually converts…",
  "Aligning visuals, copy, and flow…",
  "Designing a digital first impression that feels like you…",
];

function buildConcept(form: FormState): Concept {
  const safeName = form.businessName || "Your Business";
  const safeIndustry = form.industry || "your field";
  const safeLocation = form.location || "your area";

  // Brand story
  const brandStory = [
    `${safeName} exists to give people in ${safeLocation} a clear, trustworthy option when it comes to ${safeIndustry.toLowerCase()}.`,
    `From what you shared, your core focus is on ${form.primaryGoal || "delivering real results and a better experience than the status quo"}.`,
    `Your website should capture that — not as a random template, but as a focused story that instantly shows the right people why you’re the obvious choice.`,
  ].join(" ");

  // Visual direction based on style vibe
  let visualDirection: string;
  let primaryAccent = "emerald";

  switch (form.styleVibe) {
    case "cinematic":
      visualDirection = [
        "We’ll lean into a cinematic, high-contrast look: bold hero imagery, layered gradients, and confident typography.",
        "The page should feel premium and modern, with full-width sections, strong focal points, and just enough motion to feel alive without becoming noisy.",
        "Photography or visuals should feel real and intentional — think dramatic lighting, clean compositions, and a focus on people and outcomes, not generic stock.",
      ].join(" ");
      primaryAccent = "emerald";
      break;
    case "warm":
      visualDirection = [
        "We’ll lean into a warm, welcoming look: softer color palette, natural lighting, and inviting typography.",
        "The page should feel approachable and trustworthy, with plenty of white space, gentle gradients, and imagery that feels human and grounded.",
        "Visuals should highlight real people, real spaces, and the emotions behind your work rather than just the surface-level product.",
      ].join(" ");
      primaryAccent = "amber";
      break;
    case "minimal":
      visualDirection = [
        "We’ll lean into a minimal, clean aesthetic: lots of breathing room, simple grids, and a restrained color palette.",
        "The page should feel sharp, focused, and uncluttered — every section has a job, and nothing feels extra.",
        "Typography will do more of the heavy lifting, with crisp hierarchy and small, intentional moments of color.",
      ].join(" ");
      primaryAccent = "sky";
      break;
    case "playful":
      visualDirection = [
        "We’ll lean into a playful, friendly look: brighter color accents, rounded elements, and expressive typography.",
        "The page should feel energetic but still professional, with clear structure underneath the creativity.",
        "Imagery can highlight people in motion, candid moments, and visuals that feel dynamic and fun.",
      ].join(" ");
      primaryAccent = "violet";
      break;
    default:
      visualDirection = "";
  }

  // Homepage structure
  const homepageSections: HomepageSectionConcept[] = [
    {
      title: "Hero: First Impression",
      description:
        "The opening section that captures who you are, who you help, and what happens when someone works with you.",
      bullets: [
        "Strong headline that speaks directly to your ideal customer.",
        "One clean subline that explains your core value in plain language.",
        "Singular primary call-to-action (no decision fatigue).",
        "Background image or texture that matches your chosen style vibe.",
      ],
    },
    {
      title: "Trust & Credibility",
      description:
        "A quick hit of proof that you’re real, established, and reliable.",
      bullets: [
        "Logos, certifications, or quick stats (‘100+ clients served in " +
          safeLocation +
          "’).",
        "1–3 short bullets explaining why people choose you.",
        "Language that feels confident but never over-hyped.",
      ],
    },
    {
      title: "Core Services / Offers",
      description:
        "A clear, skimmable overview of what you actually do and sell.",
      bullets: [
        "3–4 main services or offers, each with a tight explanation.",
        "Simple icons or visual markers instead of heavy graphics.",
        "Copy that focuses on outcomes, not just features.",
      ],
    },
    {
      title: "Results & Social Proof",
      description:
        "Where we back up the story with real-world outcomes and voices.",
      bullets: [
        "Testimonials or quotes from the kind of clients you want more of.",
        "Before/after stories, visuals, or measurable improvements.",
        "If numbers exist (conversion lifts, time saved, etc.), we highlight them here.",
      ],
    },
    {
      title: "About / Story",
      description:
        "A quick, honest window into who’s behind the business and what you stand for.",
      bullets: [
        "Short founder or team intro (not a resume, but a perspective).",
        "Why you started " + safeName + " and what you believe should change.",
        "A line or two about your approach and values.",
      ],
    },
    {
      title: "Final CTA & Contact",
      description:
        "A clear next step for visitors who are ready to move forward.",
      bullets: [
        "One primary CTA (book a call, request a quote, start a trial, etc.).",
        "Clear expectations on what happens after they reach out.",
        "Optional secondary CTA for people who aren’t ready yet (download guide, view FAQ, etc.).",
      ],
    },
  ];

  // Messaging concepts
  const heroHeadlines: string[] = [
    `A modern website for ${safeLocation}’s ${safeIndustry.toLowerCase()}.`,
    `Turn more visitors into customers with a site built for ${safeName}.`,
    `${safeName}: a digital first impression that actually matches your work.`,
  ];

  const heroSublines: string[] = [
    `Designed to build trust, explain your value quickly, and guide people to take action.`,
    `No templates. No fluff. Just a clear story and layout built around your real goals.`,
    `From first scroll to final click, every section is there to move the right people closer to working with you.`,
  ];

  const ctas: string[] = [
    "Start your project",
    "See how this concept becomes a full site",
    "Book a call to refine this direction",
  ];

  const whyThisWorks = [
    "This direction is built around how real people make decisions online: fast, emotional, and based on trust.",
    "The hero locks in attention. The structure removes confusion. The proof and story build confidence.",
    "Instead of throwing everything onto one page, we give each idea a clear place — which makes it easier for visitors to understand who you are, what you do, and why you’re worth choosing.",
    "From here, we would take this concept and turn it into a fully custom, production-ready website — tightening copy, dialing in visuals, and wiring everything into a clean, fast build.",
  ].join(" ");

  return {
    brandStory,
    visualDirection,
    homepageSections,
    heroHeadlines,
    heroSublines,
    ctas,
    whyThisWorks,
  };
}

function LoadingScreen() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % loadingPhrases.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative flex min-h-[calc(100vh-56px)] items-center justify-center overflow-hidden bg-black">
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(16,185,129,0.2), transparent 55%), radial-gradient(circle at 100% 100%, rgba(45,212,191,0.22), transparent 55%), radial-gradient(circle at 50% 10%, rgba(56,189,248,0.18), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_55%)] animate-pulse" />

      {/* Shooting star (relies on .shooting-star in globals.css) */}
      <div className="pointer-events-none absolute -top-10 left-[-20%] h-px w-[40%] origin-left rounded-full bg-gradient-to-r from-transparent via-white to-transparent shooting-star" />

      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <div className="mb-4 h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.65)]" />
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">
          Generating your concept
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Sketching your homepage direction.
        </h1>
        <p className="mt-4 max-w-md text-sm text-zinc-200/90">
          {loadingPhrases[phraseIndex]}
        </p>

        <div className="mt-8 h-8 w-8 animate-spin rounded-full border-2 border-emerald-400/40 border-t-emerald-300" />
      </div>
    </main>
  );
}

export default function PreviewPage() {
  const [phase, setPhase] = useState<PreviewPhase>("form");
  const [concept, setConcept] = useState<Concept | null>(null);

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      primaryGoal:
        "Convert visitors into trial members and personal training clients.",
      idealCustomer:
        "Busy professionals and athletes 20–40 who care about serious training, not fads.",
      keyOffers:
        "Open gym memberships, small-group strength classes, and 1:1 performance coaching.",
      differentiator:
        "Serious coaching, measurable progress, and a no-gimmicks training culture.",
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setPhase("loading");

    const built = buildConcept(form);

    // Fake cinematic load
    setTimeout(() => {
      setConcept(built);
      setPhase("concept");
    }, 8000); // ~8 seconds, feels intentional but not painful
  };

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

  if (phase === "loading") {
    return (
      <PageShell>
        <LoadingScreen />
      </PageShell>
    );
  }

  if (phase === "concept" && concept) {
    return (
      <PageShell>
        <main className="mx-auto flex min-h-[calc(100vh-56px)] max-w-6xl flex-col gap-8 px-5 py-10 lg:px-8">
          {/* Header */}
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
              Concept direction
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Here&apos;s how we&apos;d shape your homepage.
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-zinc-300">
              This isn&apos;t a template. It&apos;s a conceptual direction built
              from your answers — the story, structure, and feel we&apos;d use
              as the starting point for your full custom build.
            </p>
          </section>

          {/* Brand Story + Visual Direction */}
          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-sm font-semibold text-zinc-50">
                Brand Story Summary
              </h2>
              <p className="mt-2 text-sm text-zinc-300">{concept.brandStory}</p>
              <p className="mt-3 text-xs text-zinc-500">
                Goal: capture who you are, who you help, and why you exist in a
                way that feels sharp, honest, and memorable.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-sm font-semibold text-zinc-50">
                Visual Direction
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                {concept.visualDirection}
              </p>
              <p className="mt-3 text-xs text-zinc-500">
                Goal: make the site feel aligned with your brand and audience
                from the first scroll, whether someone finds you on desktop or
                mobile.
              </p>
            </div>
          </section>

          {/* Homepage Structure */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Homepage structure concept
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-300">
              Instead of cramming everything into one block of text, we give
              each idea a dedicated section. That makes it easier for visitors
              to understand your value and move toward taking action.
            </p>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {concept.homepageSections.map((section, idx) => (
                <div
                  key={section.title + idx}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-zinc-50">
                      {section.title}
                    </h3>
                    <span className="text-[11px] text-zinc-500">
                      Section {idx + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-300">
                    {section.description}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-300">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[3px] h-[5px] w-[5px] flex-none rounded-full bg-emerald-400/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Messaging concepts */}
          <section className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-sm font-semibold text-zinc-50">
                Hero Headlines
              </h2>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                {concept.heroHeadlines.map((h, i) => (
                  <li key={i} className="rounded-lg bg-black/40 p-2">
                    “{h}”
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-sm font-semibold text-zinc-50">
                Supporting Sublines
              </h2>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                {concept.heroSublines.map((s, i) => (
                  <li key={i} className="rounded-lg bg-black/40 p-2">
                    “{s}”
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-sm font-semibold text-zinc-50">
                Call-to-Action Ideas
              </h2>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                {concept.ctas.map((c, i) => (
                  <li key={i} className="rounded-lg bg-black/40 p-2">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Why this works */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-sm font-semibold text-zinc-50">
              Why this direction works
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              {concept.whyThisWorks}
            </p>
          </section>

          {/* Next step */}
          <section className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="max-w-xl text-sm text-zinc-300">
              Ready to turn this into a real site? This concept becomes our
              starting point — from here, we refine every section, then build it
              out as a fully custom, production-ready website.
            </div>
            <a
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-xs font-semibold text-black hover:bg-zinc-200"
            >
              Start a project with this direction
            </a>
          </section>
        </main>
      </PageShell>
    );
  }

  // Default: form
  return (
    <PageShell>
      <main className="mx-auto flex min-h-[calc(100vh-56px)] max-w-4xl flex-col px-5 py-10 lg:px-8">
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
            Free concept preview
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Tell us about your business. We’ll sketch your homepage direction.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-300">
            Answer a few focused questions. We’ll turn your answers into a clear
            creative direction — the story, structure, and visual feel we’d use
            as the foundation for your full custom website.
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
          <span className="text-xs text-zinc-500">
            Takes about 2–3 minutes to complete.
          </span>
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
            Generate my concept preview
          </button>
        </form>
      </main>
    </PageShell>
  );
}
