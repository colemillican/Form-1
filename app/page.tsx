"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LayoutPanelLeft,
  PhoneCall,
  Globe,
  Sparkles,
} from "lucide-react";
import MobileNav from "./components/MobileNav";

const BRAND = "LocalLink Digital";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Mobile / main nav */}
      <MobileNav />

      {/* HERO */}
      <main className="pt-20">
        <section
          className="
            relative overflow-hidden
            bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')]
            bg-cover bg-center
          "
        >
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]" />

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.25em] text-emerald-300/80">
              LOCAL WEBSITES // REAL CUSTOMERS
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              <span className="block text-slate-50">
                Websites that bring you customers,
              </span>
              <span className="mt-1 block bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                not headaches.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200/90 sm:text-base">
              {BRAND} designs, builds, and manages high-performing websites for
              local businesses — built to increase calls, bookings, and foot
              traffic so you can focus on running your business.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#audit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-300"
              >
                Book a free 10-minute website audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/40 px-7 py-3 text-sm font-medium text-slate-100/90 hover:border-emerald-300/80 hover:text-emerald-100"
              >
                See our work
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-200/70">
              No contracts. No jargon. Just a site that actually works.
            </p>
          </div>
        </section>

        {/* PROBLEM / PAIN */}
        <section
          id="problem"
          className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Most local websites quietly lose money every day.
              </h2>
              <p className="mt-4 text-sm text-slate-200/85 sm:text-base">
                Not because they&apos;re ugly — but because they don&apos;t
                convert. Slow load times, confusing layouts, and outdated
                designs make people leave before they call, book, or visit.
              </p>
              <p className="mt-3 text-sm text-slate-200/80 sm:text-base">
                Most owners never see the lost revenue. They just feel the empty
                calendar.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4 text-sm text-slate-100 sm:p-5">
              <ProblemBullet text="Site takes longer than 3 seconds to load on mobile." />
              <ProblemBullet text="Visitors can’t quickly see what you do and how to contact you." />
              <ProblemBullet text="No clear call-to-action: book, call, or visit." />
              <ProblemBullet text="Hard to update, so the site slowly becomes outdated." />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section
          id="services"
          className="border-y border-slate-800 bg-slate-950/60"
        >
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Everything your website needs, handled for you.
              </h2>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300/80">
                DESIGN • BUILD • MANAGE
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <FeatureCard
                icon={<LayoutPanelLeft className="h-5 w-5" />}
                title="Modern, trust-building design"
                body="Clean, professional layouts that make your business look credible from the first second a visitor lands on your site."
              />
              <FeatureCard
                icon={<Globe className="h-5 w-5" />}
                title="Fast, mobile-first performance"
                body="Over 70% of your traffic is on mobile. We build sites that load fast, feel smooth, and work perfectly on any device."
              />
              <FeatureCard
                icon={<Sparkles className="h-5 w-5" />}
                title="Built to convert, not just look good"
                body="Clear messaging, strong calls-to-action, and layouts designed to turn visitors into calls, bookings, and customers."
              />
              <FeatureCard
                icon={<CheckCircle2 className="h-5 w-5" />}
                title="Ongoing management & support"
                body="We keep your site updated, secure, and fresh so you never have to touch the tech or worry about your online presence."
              />
            </div>
          </div>
        </section>

        {/* WHY LOCALLINK */}
        <section
          id="why"
          className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-start">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                You&apos;re not hiring a &quot;web designer.&quot;
              </h2>
              <p className="mt-3 text-sm text-slate-200/85 sm:text-base">
                You&apos;re hiring someone who understands local business.
                You don&apos;t care about buzzwords. You care about the phone
                ringing, calendars filling, and customers walking through the
                door.
              </p>
              <p className="mt-3 text-sm text-slate-200/85 sm:text-base">
                Big agencies charge huge retainers and hand you a generic
                template. We work small, fast, and close — focused on making
                sure your website actually earns its keep.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm sm:text-base">
              <WhyBullet text="Focused on local businesses, not giant corporations." />
              <WhyBullet text="Simple, transparent pricing with no long-term contracts." />
              <WhyBullet text="Direct access — you’re never guessing who to talk to." />
              <WhyBullet text="We treat your website like a sales asset, not a design project." />
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="border-y border-slate-800 bg-slate-950/70"
        >
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              A clear, simple 3-step process.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <StepCard
                step="1"
                title="Free website audit"
                body="In 10 minutes, we review your current site (or idea) and show you exactly what’s hurting performance and what it could look like instead."
              />
              <StepCard
                step="2"
                title="Design + build"
                body="We handle everything: design, copywriting, images, structure, speed, and SEO basics. You approve the direction, we do the heavy lifting."
              />
              <StepCard
                step="3"
                title="Ongoing management"
                body="We host, update, secure, and tweak your site month-to-month so it stays fast, fresh, and aligned with your business."
              />
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Simple, transparent pricing.
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
              NO HIDDEN FEES • NO RETAINERS
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/80">
                WEBSITE BUILD
              </p>
              <p className="mt-3 text-3xl font-semibold">$800–$1,500</p>
              <p className="mt-2 text-sm text-slate-200/85">
                Pricing depends on size and complexity. You’ll know the full
                price up front before we start.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-100/90">
                <li>• Custom design and layout</li>
                <li>• Copywriting & messaging</li>
                <li>• Mobile-first build</li>
                <li>• Speed & basic SEO optimization</li>
                <li>• Launch and testing</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-500/50 bg-slate-900/80 p-6 shadow-[0_0_40px_rgba(16,185,129,0.25)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/90">
                MONTHLY MANAGEMENT
              </p>
              <p className="mt-3 text-3xl font-semibold">$150 / month</p>
              <p className="mt-2 text-sm text-slate-200/90">
                Hosting, updates, minor changes, security, and performance —
                handled for you.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-100/90">
                <li>• Fast, secure hosting</li>
                <li>• Content & photo updates</li>
                <li>• Technical maintenance</li>
                <li>• Performance & uptime checks</li>
                <li>• Priority support</li>
              </ul>
              <p className="mt-4 text-xs text-emerald-200/90">
                Cancel any time. No long-term contracts.
              </p>
            </div>
          </div>
        </section>

        {/* WORK / PORTFOLIO */}
        <section
          id="work"
          className="border-y border-slate-800 bg-slate-950/70"
        >
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                See examples of our work.
              </h2>
              <p className="text-sm text-slate-300/85">
                As we complete more projects, this section will grow into a
                library of real local wins.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Placeholder cards – swap with real projects when ready */}
              <PortfolioCard
                label="Example Project"
                title="Local gym website refresh"
                body="Clean, mobile-first redesign focused on trial signups and membership inquiries."
              />
              <PortfolioCard
                label="Example Project"
                title="Restaurant landing site"
                body="Menu, photos, and clear call-to-action for reservations and takeout orders."
              />
              <PortfolioCard
                label="Example Project"
                title="Home services contractor"
                body="Service pages built to generate calls and quote requests from local homeowners."
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA / AUDIT SECTION */}
        <section
          id="audit"
          className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 via-slate-900 to-sky-500/10 p-7 text-center sm:p-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Your website should bring you customers — not stress.
            </h2>
            <p className="mt-3 text-sm text-slate-100/85 sm:text-base">
              Let&apos;s take 10 minutes and see what your site is costing you
              — and what it could become.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="tel:YOUR_PHONE_NUMBER"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-300"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Call to schedule your audit
              </a>
              <Link
                href="mailto:YOUR_EMAIL_ADDRESS"
                className="inline-flex items-center justify-center rounded-full border border-slate-200/40 px-7 py-3 text-sm font-medium text-slate-100 hover:border-emerald-200/80 hover:text-emerald-100"
              >
                Or email us the details
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-200/75">
              No obligation. If we don&apos;t find anything worth fixing, you
              get peace of mind and walk away smarter.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ------------------------------- Subcomponents ------------------------------ */

function ProblemBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
      <p>{text}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/60">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-slate-50">{title}</h3>
      <p className="text-sm text-slate-200/85">{body}</p>
    </div>
  );
}

function WhyBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="mt-[1px] h-4 w-4 text-emerald-300" />
      <p>{text}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-sm font-semibold text-slate-950">
        {step}
      </div>
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-200/85">{body}</p>
    </div>
  );
}

function PortfolioCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <h3 className="mt-2 text-base font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-sm text-slate-200/85">{body}</p>
    </div>
  );
}














