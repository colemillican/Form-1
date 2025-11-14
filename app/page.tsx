"use client";
import React from "react";
import {
  Bolt,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Globe,
  Monitor,
  Search,
  Check,
} from "lucide-react";
import { Exo_2 } from "next/font/google";
import SiteChrome from "./components/SiteChrome";

/* Headline font - slightly lighter weight for a cleaner look */
const heroFont = Exo_2({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

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

export default function Page() {
  return (
    <SiteChrome>
      {/* HERO – widened, slimmed vertically, Base44-style */}
      <section
        className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,14,30,0.78), rgba(5,10,25,0.9)), url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle radial texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.30]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 0%, rgba(45,212,191,0.2) 0, transparent 55%), radial-gradient(circle at 100% 100%, rgba(56,189,248,0.2) 0, transparent 55%)",
          }}
        />

        {/* Soft, balanced glows */}
        <div className="pointer-events-none absolute -top-24 -left-40 h-[36vh] w-[36vh] rounded-full bg-emerald-500/16 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[36vh] w-[36vh] rounded-full bg-sky-500/14 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* No top label */}

            <h1
              className={`${heroFont.className} text-[clamp(40px,5.4vw,72px)] font-semibold leading-[1.05] tracking-tight`}
            >
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-sky-300 bg-clip-text text-transparent">
                Websites that bring you customers.
              </span>
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-sky-200 to-emerald-200 bg-clip-text text-transparent">
                Not headaches.
              </span>
            </h1>

            <p className="mt-4 text-[15px] leading-relaxed text-zinc-200 sm:text-[16px]">
              We design, build, host, and manage your website for you — so local
              customers can find you, trust you, and contact you without you
              touching a website builder.
            </p>

            {/* CENTRAL START CARD – bigger horizontally, lighter vertically */}
            <div className="mt-7 mx-auto max-w-2xl rounded-[28px] border border-emerald-100/80 bg-white/98 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.38)] sm:p-6">
              <p className="mb-3 text-center text-[14px] font-medium text-zinc-700">
                Tell us what you do in one sentence. We’ll outline your website
                for you.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <input
                  type="text"
                  placeholder="I run a roofing company in Huntsville."
                  className="h-12 flex-1 rounded-full border border-zinc-200 bg-white px-5 text-[15px] text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/80"
                />
                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-7 text-[15px] font-semibold text-black shadow-sm hover:bg-emerald-400 transition sm:px-9"
                >
                  <span>Get my free website plan</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-center text-[11px] text-zinc-500">
                No payment, no obligation. We review what you share and send
                back a custom website outline.
              </p>
            </div>

            {/* Credibility + trust row */}
            <p className="mt-7 text-[13px] uppercase tracking-[0.18em] text-zinc-300">
              Built for local businesses across Alabama
            </p>
            <div className="mt-3 hidden flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-zinc-300 sm:flex">
              <span className="inline-flex items-center gap-2">
                <Bolt className="h-4 w-4 text-emerald-300" />
                Conversion-focused layouts
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Fully managed for you
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-emerald-300" />
                Fast and mobile-first
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section
        id="services"
        className="border-b border-white/10 bg-gradient-to-b from-slate-950 to-zinc-950"
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-3 sm:px-8">
          <Feature
            icon={<Monitor className="h-5 w-5 text-emerald-400" />}
            title="Modern, trust-building design"
            text="Clean, professional layouts that make your business look credible from the first second a visitor lands on your site."
          />
          <Feature
            icon={<Globe className="h-5 w-5 text-emerald-400" />}
            title="Fast, mobile-first performance"
            text="Over 70% of visitors are on their phones. We build sites that load fast, feel smooth, and work on any device."
          />
          <Feature
            icon={<Search className="h-5 w-5 text-emerald-400" />}
            title="Built to convert, not just look good"
            text="Clear messaging, strong calls-to-action, and layouts aimed at turning visitors into calls, bookings, and customers."
          />
        </div>
      </section>

      {/* Work (sample) */}
      <section id="work" className="bg-zinc-950">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-2xl font-semibold tracking-tight">
              See examples of our work.
            </h3>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center text-sm font-semibold text-zinc-300 hover:text-white"
            >
              Ask for a tailored preview
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <p className="mb-5 text-sm text-zinc-300 sm:text-base">
            As we complete more projects, this section will grow into a library
            of real local wins. Here&apos;s how different types of businesses
            can look online:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tag: "HOME SERVICES",
                title: "Precision HVAC",
                img: "https://images.unsplash.com/photo-1520975922284-9b9a45d43f9a?q=80&w=1600&auto=format&fit=crop",
                blurb:
                  "High-contrast landing with sticky call buttons and service pages built to drive quote requests.",
              },
              {
                tag: "FITNESS",
                title: "IronForge Gym",
                img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
                blurb:
                  "Hero showcasing real members, class schedule, and simple join flow focused on trial signups.",
              },
              {
                tag: "AUTO DETAIL",
                title: "Ceramic Pro Studio",
                img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop",
                blurb:
                  "Glossy visuals, package matrix, and lead form that makes it easy to book a full detail.",
              },
            ].map((c, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-black"
              >
                <div className="relative">
                  <img
                    alt={`${c.title} preview`}
                    src={c.img}
                    className="aspect-[4/3] w-full object-cover opacity-90 transition group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[11px] font-medium tracking-wide text-zinc-300">
                    {c.tag}
                  </span>
                  <h4 className="mt-2 text-lg font-semibold">{c.title}</h4>
                  <p className="mt-1 text-sm text-zinc-400">{c.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process (summary) */}
      <section id="process" className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-14 sm:px-8">
          <h3 className="text-2xl font-semibold tracking-tight">
            A clear, simple 3-step process.
          </h3>
          <p className="mt-2 max-w-xl text-sm text-zinc-300 sm:text-base">
            No jargon, no endless timelines. Just a straightforward path from
            an outdated site (or no site) to something you&apos;re proud to show
            off.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Step
              n={1}
              title="Free website audit"
              text="In about 10 minutes, we review your current site (or idea) and show you what’s costing you visitors and where the biggest wins are."
            />
            <Step
              n={2}
              title="Design + build"
              text="We handle everything: copy, images, layout, speed, and SEO basics. You approve direction, we do the heavy lifting."
            />
            <Step
              n={3}
              title="Ongoing management"
              text="We host, update, secure, and tweak your site so it stays fast, fresh, and aligned with your business as it grows."
            />
          </div>
        </div>
      </section>

      {/* Contact / audit */}
      <section
        id="contact"
        className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:px-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Your website should bring you customers — not stress.
            </h3>
            <p className="mt-2 max-w-lg text-zinc-200">
              Let&apos;s take 10 minutes and see what your site is costing you
              — and what it could become. No pressure, no obligation.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" /> Free website
                audit, tailored to your business
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" /> Simple, transparent
                pricing — no long-term contracts
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" /> We handle the tech
                so you can focus on running the business
              </li>
            </ul>
          </div>
          <form className="max-w-xl space-y-3">
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
              className="min-h-[120px] w-full rounded-xl border border-white/15 bg-white/5 p-3 text-[16px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
              placeholder="What do you do, and what would a great website change for your business?"
            />
            <button className="h-11 w-full rounded-full bg-white font-semibold text-black hover:bg-zinc-200 transition">
              Request free audit
            </button>
            <p className="text-xs text-zinc-500">
              By submitting, you agree to be contacted about your project.
            </p>
          </form>
        </div>
      </section>
    </SiteChrome>
  );
}















