// app/page.tsx
import React from "react";
import {
  ArrowRight,
  Check,
  Globe,
  Monitor,
  ShieldCheck,
  Smartphone,
  Search,
  PenTool,
  Repeat,
  Rocket,
  Clock,
  DollarSign,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ------------------------------- Brand Tokens ------------------------------ */
const BRAND = "LocalLink Digital";
const GRADIENT_FROM = "#23B8A5";
const GRADIENT_TO = "#9BE564";

/* --------------------------------- UI Bits -------------------------------- */
function GradientBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-black/10 bg-gradient-to-r from-emerald-400/20 to-lime-300/20">
      {children}
    </span>
  );
}

function Section({
  id,
  heading,
  sub,
  children,
}: {
  id?: string;
  heading: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{heading}</h2>
          {sub && <p className="mt-4 text-base text-gray-600">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------------------------------- Page ---------------------------------- */
export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(800px 400px at 20% -10%, rgba(35,184,165,0.25), transparent 60%), radial-gradient(800px 400px at 80% 110%, rgba(155,229,100,0.25), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <GradientBadge>Modern websites for real-world businesses</GradientBadge>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
              {BRAND}: Where local business meets modern design
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              We build fast, mobile-first websites and clean up your digital presence so more customers
              find you, trust you, and contact you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white hover:bg-gray-800 transition"
              >
                Get a free consult <ArrowRight className="size-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 ring-1 ring-gray-300 hover:bg-gray-50 transition"
              >
                See services
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4" /> No-pressure call</span>
              <span className="inline-flex items-center gap-2"><Clock className="size-4" /> 2-3 week average build</span>
              <span className="inline-flex items-center gap-2"><DollarSign className="size-4" /> Simple, transparent pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section
        id="services"
        heading="What we do"
        sub="Clarity over complexity. We ship clean, modern sites and the essentials that help your business show up and stand out."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Monitor className="size-5" />,
              title: "Website Design & Build",
              body: "Fast, mobile-friendly sites that look legit and convert visitors into calls.",
            },
            {
              icon: <Search className="size-5" />,
              title: "Google Business & SEO Basics",
              body: "Claim, optimize, and tidy your presence so customers can actually find you.",
            },
            {
              icon: <Smartphone className="size-5" />,
              title: "Modern Branding & Copy",
              body: "Logos, colors, and clear words that match your business and market.",
            },
            {
              icon: <Repeat className="size-5" />,
              title: "Monthly Site Care",
              body: "We keep things updated, secure, and fresh — so you don’t have to.",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 p-6">
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-300/30 to-lime-300/30 p-2">
                {s.icon}
              </div>
              <h3 className="mt-4 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        heading="How it works"
        sub="A simple, transparent four-step flow from idea to launch — and beyond."
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery Call",
              body: "We learn your goals, audience, and what a ‘win’ looks like.",
              icon: <Globe className="size-5" />,
            },
            {
              step: "02",
              title: "Design & Build",
              body: "We design, write copy, and build a fast, responsive site.",
              icon: <PenTool className="size-5" />,
            },
            {
              step: "03",
              title: "Review & Launch",
              body: "You review. We refine. Then we go live and submit to Google.",
              icon: <Rocket className="size-5" />,
            },
            {
              step: "04",
              title: "Ongoing Growth",
              body: "We handle updates, tweaks, and SEO basics as you grow.",
              icon: <Repeat className="size-5" />,
            },
          ].map((p) => (
            <div key={p.step} className="rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">{p.step}</span>
                <div className="rounded-lg bg-gray-50 p-2">{p.icon}</div>
              </div>
              <h3 className="mt-4 font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section
        id="about"
        heading="Why choose us"
        sub="Local roots. Modern standards. We build lean, effective websites that help small teams win online."
      >
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-200 p-6 md:p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Auburn-based team that understands local businesses.",
                "Mobile-first, speed-focused builds using modern tech.",
                "Clear communication, fast turnaround, and zero fluff.",
                "Honest pricing and simple maintenance options.",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 text-emerald-600" />
                  <span className="text-gray-700">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Founded by builders who care about clean design and real-world results. No hype —
              just dependable execution.
            </p>
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section
        id="pricing"
        heading="Simple, transparent pricing"
        sub="Pick a starting point. We’ll tailor details to your business and budget."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter Site",
              price: "$499",
              desc: "One-page site, mobile-first, copy assist, contact form.",
              features: [
                "1 page (expandable later)",
                "Modern design & copy polish",
                "Basic on-page SEO",
                "Google Business guidance",
              ],
              cta: "Get Starter",
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
              cta: "Choose Boost",
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
              cta: "Start Full",
              highlight: false,
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={[
                "rounded-2xl border p-6 md:p-8 flex flex-col",
                tier.highlight ? "border-gray-900 shadow-[0_8px_40px_-15px_rgba(0,0,0,0.35)]" : "border-gray-200",
              ].join(" ")}
            >
              {tier.highlight && (
                <span className="self-start rounded-full bg-black text-white text-xs px-3 py-1 mb-4">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-1 text-gray-600">{tier.desc}</p>
              <div className="mt-5 text-4xl font-semibold">{tier.price}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 text-emerald-600" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={[
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 transition",
                  tier.highlight
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "ring-1 ring-gray-300 hover:bg-gray-50",
                ].join(" ")}
              >
                {tier.cta} <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Want a monthly option? Ask about site-as-a-service and care plans.
        </p>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        heading="Questions we get a lot"
        sub="If you don’t see your question here, reach out — we’ll get you a quick answer."
      >
        <div className="mx-auto max-w-3xl space-y-4">
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
              className="group rounded-xl border border-gray-200 p-5 open:bg-gray-50 transition"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-medium">{item.q}</span>
                <HelpCircle className="size-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="mt-3 text-sm text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CONTACT / CTA */}
      <Section
        id="contact"
        heading="Ready to build?"
        sub="Tell us a bit about your business. We’ll reply with a short plan and a time for a quick, no-pressure call."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="space-y-4 text-sm text-gray-700">
              <p className="flex items-center gap-3">
                <Mail className="size-4 text-gray-500" /> hello@locallink.digital
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 text-gray-500" /> (555) 000-0000
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="size-4 text-gray-500" /> Auburn, Alabama
              </p>
              <div className="h-px bg-gray-200 my-4" />
              <p className="text-gray-600">
                Prefer to jump straight to a call? <a href="#" className="underline">Book a time</a>.
              </p>
            </div>
          </div>

          <form
            className="lg:col-span-2 rounded-2xl border border-gray-200 p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            action="#"
            method="post"
          >
            <div className="col-span-1">
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Jane Doe"
              />
            </div>
            <div className="col-span-1">
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="jane@business.com"
              />
            </div>
            <div className="col-span-1">
              <label className="text-sm font-medium">Business name</label>
              <input
                name="business"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Doe Plumbing"
              />
            </div>
            <div className="col-span-1">
              <label className="text-sm font-medium">Website (optional)</label>
              <input
                name="website"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="yourdomain.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">What do you need?</label>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Quick summary of your goals, timeline, and any examples you like."
              />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <div className="text-xs text-gray-500">
                By submitting, you agree to our{" "}
                <a href="#" className="underline">Terms</a> and{" "}
                <a href="#" className="underline">Privacy</a>.
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white hover:bg-gray-800 transition"
              >
                Send message <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mt-10 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}





