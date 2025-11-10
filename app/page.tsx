"use client";

import React from "react";
import {
  ArrowRight,
  Bolt,
  Check,
  Globe,
  Monitor,
  Search,
  ShieldCheck,
  Smartphone,
  PenTool,
  Repeat,
  Rocket,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Clock,
} from "lucide-react";
import MobileNav from "./components/MobileNav";

/* ---------------------------------- Brand --------------------------------- */
const BRAND = "LocalLink Digital";

// Inline logo (gradient mark)
function LogoInline({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={`${BRAND} logo`}>
      <defs>
        <linearGradient id="lld-desktop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#22c55e" />
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#lld-desktop)" />
      <path
        d="M20 20v24h12M32 44h12V20"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Gradient helper
const G = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
    {children}
  </span>
);

// visual helpers
const heroImg =
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1920&auto=format&fit=crop";
const panel =
  "https://images.unsplash.com/photo-1520975922284-9b9a45d43f9a?q=80&w=1200&auto=format&fit=crop";

/* ---------------------------------- Page ---------------------------------- */
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased">
      {/* Mobile nav */}
      <MobileNav />

      {/* Desktop NAV */}
      <header className="hidden sm:block sticky top-0 z-[200] border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-8">
          <a href="/" className="group flex items-center gap-3">
            <LogoInline />
            <span className="flex items-baseline gap-1">
              <span className="text-[17px] font-extrabold tracking-tight leading-none">
                <G>LocalLink</G>
              </span>
              <span className="text-[14px] font-semibold text-zinc-400 leading-none">Digital</span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-[13.5px] sm:flex">
            <a href="#services" className="text-zinc-300 hover:text-white transition">SERVICES</a>
            {/* Repurpose WORK link to Services (no portfolio yet) */}
            <a href="#services" className="text-zinc-300 hover:text-white transition">WORK</a>
            <a href="#process" className="text-zinc-300 hover:text-white transition">PROCESS</a>
            <a href="#pricing" className="text-zinc-300 hover:text-white transition">PRICING</a>
            <a href="#faq" className="text-zinc-300 hover:text-white transition">FAQ</a>
            <a href="#contact" className="text-zinc-300 hover:text-white transition">CONTACT</a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white/10 px-4 font-semibold text-white hover:bg-white/20 transition"
            >
              START A PROJECT
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-16 sm:pt-0">
        {/* ============================== HERO ============================== */}
        <section
          className="relative isolate flex min-h-[86vh] items-end overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.30), rgba(0,0,0,0.65)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* ambient glows */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-[50vh] w-[50vh] rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[55vh] w-[55vh] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 pb-20 sm:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs tracking-[0.35em] text-zinc-400">
                LOCAL SITES // GLOBAL STANDARDS
              </p>

              {/* Original Headline */}
              <h1 className="text-[clamp(36px,6vw,64px)] font-black leading-[1.05] tracking-tight">
                <G>Empowering</G> local businesses
                <br />
                through <G>modern technology</G>.
              </h1>

              {/* Subheadline */}
              <p className="mt-4 max-w-xl text-zinc-300">
                LocalLink Digital turns your local business into a digital powerhouse — building,
                maintaining, and optimizing a high-performance website that helps you attract
                customers, stay visible, and save time.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white text-black px-6 text-[15px] font-semibold hover:bg-zinc-200 transition"
                >
                  Get a Free Preview
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-5 text-[15px] font-semibold text-white hover:bg-white/10 transition"
                >
                  See how we help <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* key signals */}
              <div className="mt-6 hidden flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-zinc-300 sm:flex">
                <span className="inline-flex items-center gap-2">
                  <Bolt className="h-4 w-4 text-emerald-400" /> Built fast
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" /> Fully managed
                </span>
                <span className="inline-flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-emerald-400" /> Mobile-first
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ FEATURE STRIP ============================ */}
        <section id="highlights" className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-3 sm:px-8">
            <Feature
              icon={<Monitor className="h-5 w-5 text-emerald-400" />}
              title="Cinematic Design"
              text="Bold type, edge-to-edge imagery, motion-ready UI."
            />
            <Feature
              icon={<Globe className="h-5 w-5 text-emerald-400" />}
              title="Next.js Performance"
              text="App Router, image opt, blazing Core Web Vitals."
            />
            <Feature
              icon={<Search className="h-5 w-5 text-emerald-400" />}
              title="SEO-Ready"
              text="Semantic structure, clean metadata, local visibility."
            />
          </div>
        </section>

        {/* =============================== SERVICES =============================== */}
        <section id="services" className="bg-zinc-950">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
            <div className="mb-6 flex items-end justify-between">
              <h3 className="text-2xl font-semibold tracking-tight">What we do</h3>
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center text-sm font-semibold text-zinc-300 hover:text-white"
              >
                Start your project <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Monitor className="h-5 w-5 text-emerald-400" />,
                  title: "Website Design & Build",
                  blurb: "Fast, mobile-first sites that look legit and convert visitors.",
                },
                {
                  icon: <Search className="h-5 w-5 text-emerald-400" />,
                  title: "Google Business & SEO Basics",
                  blurb: "Claim, clean up, and optimize so customers can actually find you.",
                },
                {
                  icon: <Smartphone className="h-5 w-5 text-emerald-400" />,
                  title: "Branding & Copy Polish",
                  blurb: "Logos, colors, and clear messaging that match your market.",
                },
                {
                  icon: <Repeat className="h-5 w-5 text-emerald-400" />,
                  title: "Monthly Site Care",
                  blurb: "Updates, security, and tweaks handled for you — stay focused.",
                },
              ].map((c, i) => (
                <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-3 inline-flex items-center gap-2">
                    {c.icon}
                    <span className="text-[15px] font-semibold">{c.title}</span>
                  </div>
                  <p className="text-[14px] leading-6 text-zinc-300">{c.blurb}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== PROCESS ============================== */}
        <section id="process" className="border-t border-white/10 bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
            <h3 className="text-2xl font-semibold tracking-tight">How it works</h3>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              A simple, transparent four-step flow from idea to launch — and beyond.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-4">
              <Step n={1} title="Discovery Call" text="We learn your goals, audience, and what a ‘win’ looks like." />
              <Step n={2} title="Design & Build" text="We design, write copy, and build a fast, responsive site." />
              <Step n={3} title="Review & Launch" text="You review. We refine. Then we go live and submit to Google." />
              <Step n={4} title="Ongoing Growth" text="We handle updates, tweaks, and SEO basics as you grow." />
            </div>
          </div>
        </section>

        {/* =============================== ABOUT =============================== */}
        <section id="about" className="border-t border-white/10 bg-zinc-950">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
            <h3 className="text-2xl font-semibold tracking-tight">Why choose us</h3>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Auburn-based team that understands local businesses.",
                  "Mobile-first, speed-focused builds using modern tech.",
                  "Clear communication, fast turnaround, and zero fluff.",
                  "Honest pricing and simple maintenance options.",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-[14px] leading-6 text-zinc-300">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-zinc-400">
                Founded by builders who care about clean design and real-world results. No hype — just dependable execution.
              </p>
            </div>
          </div>
        </section>

        {/* =============================== PRICING =============================== */}
        <section id="pricing" className="border-t border-white/10 bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
            <h3 className="text-2xl font-semibold tracking-tight">Simple, transparent pricing</h3>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Pick a starting point. We’ll tailor details to your business and budget.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                {
                  name: "Starter Site",
                  price: "$499",
                  desc: "One-page site, mobile-first, contact form.",
                  features: [
                    "1 page (expandable later)",
                    "Modern design & copy polish",
                    "Basic on-page SEO",
                    "Google Business guidance",
                  ],
                  highlight: false,
                },
                {
                  name: "Business Boost",
                  price: "$999",
                  desc: "Multi-page site, services pages, launch support.",
                  features: [
                    "Up to 5 pages",
                    "Conversion-focused layout",
                    "On-page SEO + indexing",
                    "Launch & analytics setup",
                  ],
                  highlight: true,
                },
                {
                  name: "Full Presence",
                  price: "$1499",
                  desc: "Brand kit, site, and growth essentials.",
                  features: [
                    "Up to 8 pages",
                    "Light brand kit & copywriting",
                    "SEO basics + Google Business",
                    "3 months of site care",
                  ],
                  highlight: false,
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={[
                    "rounded-2xl border p-6 md:p-8 flex flex-col bg-white/5",
                    tier.highlight ? "border-white/30 shadow-[0_8px_40px_-15px_rgba(0,0,0,0.5)]" : "border-white/10",
                  ].join(" ")}
                >
                  {tier.highlight && (
                    <span className="self-start rounded-full bg-white/10 text-white text-xs px-3 py-1 mb-4">
                      Most popular
                    </span>
                  )}
                  <h4 className="text-lg font-semibold">{tier.name}</h4>
                  <p className="mt-1 text-zinc-300">{tier.desc}</p>
                  <div className="mt-5 text-4xl font-semibold">{tier.price}</div>
                  <ul className="mt-5 space-y-2 text-sm">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={[
                      "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 transition text-sm font-semibold",
                      tier.highlight
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "border border-white/20 text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    Choose {tier.name} <ArrowRight className="size-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> 2–3 week average build
              </span>
              <span className="inline-flex items-center gap-2">
                <DollarSign className="h-4 w-4" /> Simple, transparent pricing
              </span>
            </div>
          </div>
        </section>

        {/* ================================= FAQ ================================= */}
        <section id="faq" className="border-t border-white/10 bg-zinc-950">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
            <h3 className="text-2xl font-semibold tracking-tight">Questions we get a lot</h3>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              If you don’t see your question here, reach out — we’ll get you a quick answer.
            </p>

            <div className="mt-6 mx-auto max-w-3xl space-y-4">
              {[
                {
                  q: "How long does a project take?",
                  a: "Most small business sites ship in 2–3 weeks once we have content (text, photos, logo). Rush options available.",
                },
                {
                  q: "Can you update my current site instead of rebuilding?",
                  a: "Yes. If your stack allows it, we can refresh design, content, and performance without a full rebuild.",
                },
                {
                  q: "Do you handle hosting and domains?",
                  a: "We’ll set up reliable hosting and DNS with you and keep ownership in your name. We prioritize speed and security.",
                },
                {
                  q: "What happens after launch?",
                  a: "We offer simple care plans for updates, tweaks, and SEO basics so your site stays fresh and effective.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 open:bg-white/10 transition"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between">
                    <span className="font-medium">{item.q}</span>
                    <HelpCircle className="size-5 text-zinc-400 group-open:rotate-180 transition" />
                  </summary>
                  <p className="mt-3 text-sm text-zinc-300">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =============================== CONTACT ============================== */}
        <section
          id="contact"
          className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950"
        >
          <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:px-8">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Start your free preview</h3>
              <p className="mt-2 max-w-lg text-zinc-300">
                Share a few details. We’ll design a concept that looks like tomorrow and converts today.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" /> No setup fee
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" /> Fast turnaround
                </li>
                <li className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" /> Fully managed after launch
                </li>
              </ul>

              <div className="mt-6 space-y-3 text-sm text-zinc-400">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@locallink.digital</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 000-0000</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Auburn, Alabama</p>
              </div>
            </div>

            <form className="max-w-xl space-y-3" action="#" method="post">
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                placeholder="Business name"
              />
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                placeholder="Your name"
              />
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                type="email"
                placeholder="Email"
              />
              <input
                className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                type="tel"
                inputMode="tel"
                placeholder="Phone"
              />
              <textarea
                className="min-h[120px] w-full rounded-xl border border-white/15 bg-white/5 p-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
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

        {/* ================================ FOOTER =============================== */}
        <footer className="border-t border-white/10 bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-10 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <LogoInline size={26} />
                <div className="text-sm">
                  <div className="font-semibold">{BRAND}</div>
                  <div className="text-zinc-400">Modern websites, future-ready</div>
                </div>
              </div>
              <nav className="flex flex-wrap items-center gap-5 text-sm">
                <a href="#services" className="text-zinc-300 hover:text-white">Services</a>
                <a href="#process" className="text-zinc-300 hover:text-white">Process</a>
                <a href="#about" className="text-zinc-300 hover:text-white">About</a>
                <a href="#pricing" className="text-zinc-300 hover:text-white">Pricing</a>
                <a href="#faq" className="text-zinc-300 hover:text-white">FAQ</a>
                <a href="#contact" className="text-zinc-300 hover:text-white">Contact</a>
              </nav>
            </div>
            <div className="mt-6 text-xs text-zinc-500">
              © {new Date().getFullYear()} {BRAND}. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ------------------------------- UI Blocks ------------------------------- */

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 inline-flex items-center gap-2">
        {icon}
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <p className="text-[14px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}

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







