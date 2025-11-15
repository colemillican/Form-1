import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

type StyleVibe = "cinematic" | "warm" | "clean" | "minimal";

type Body = {
  businessName: string;
  industry: string;
  location: string;
  goals: string;
  styleVibe: StyleVibe;
  extraNotes?: string;
};

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildHtml({
  businessName,
  industry,
  location,
  goals,
  styleVibe,
}: Body) {
  const safeName = escapeHtml(businessName || "Your Business");
  const safeIndustry = escapeHtml(industry || "local service business");
 const safeLocation = escapeHtml(location || "your area");

const safeGoals =
  typeof goals === "string" && goals.trim().length > 0
    ? escapeHtml(goals)
    : "Get more leads, build trust, and look professional online.";


  // Style-vibe tweaks
  let accent = "#22c55e";
  let bg = "#020617"; // slate-950-ish
  let heroOverlay = "rgba(0,0,0,0.70)";
  let heroImage =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"; // generic local biz

  if (styleVibe === "cinematic") {
    accent = "#22c55e";
    bg = "#020617";
    heroOverlay = "rgba(0,0,0,0.76)";
    heroImage =
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop";
  } else if (styleVibe === "warm") {
    accent = "#f97316";
    bg = "#030712";
    heroOverlay = "rgba(0,0,0,0.60)";
    heroImage =
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop";
  } else if (styleVibe === "clean") {
    accent = "#22c55e";
    bg = "#020617";
    heroOverlay = "rgba(15,23,42,0.88)";
    heroImage =
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop";
  } else if (styleVibe === "minimal") {
    accent = "#22c55e";
    bg = "#020617";
    heroOverlay = "rgba(15,23,42,0.94)";
    heroImage =
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop";
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charSet="utf-8" />
  <title>${safeName} – Homepage Draft</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
        "Segoe UI", sans-serif;
      background: ${bg};
      color: #f9fafb;
    }
    a { color: inherit; text-decoration: none; }

    .page {
      min-height: 100vh;
      background: radial-gradient(circle at top, rgba(34,197,94,0.08), transparent 55%);
      color: #f9fafb;
    }

    .nav {
      position: sticky;
      top: 0;
      z-index: 20;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      background: rgba(0,0,0,0.78);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(148,163,184,0.35);
    }

    .nav-logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 13px;
    }

    .nav-mark {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 0%, #4ade80, #22c55e);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #020617;
      font-weight: 700;
      font-size: 14px;
    }

    .nav-cta {
      padding: 8px 16px;
      border-radius: 999px;
      background: #f9fafb;
      color: #020617;
      font-size: 13px;
      font-weight: 600;
      border: none;
      cursor: pointer;
    }

    .hero {
      position: relative;
      min-height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 64px 24px 72px;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(to bottom, rgba(15,23,42,0.90), rgba(15,23,42,0.94)),
        url("${heroImage}");
      background-size: cover;
      background-position: center;
      opacity: 0.98;
    }

    .hero-inner {
      position: relative;
      max-width: 960px;
      text-align: center;
    }

    .hero-label {
      display: inline-flex;
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid rgba(148,163,184,0.6);
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #e5e7eb;
      margin-bottom: 14px;
    }

    .hero-title {
      font-size: clamp(34px, 5vw, 44px);
      font-weight: 700;
      letter-spacing: 0.02em;
      margin-bottom: 12px;
    }

    .hero-gradient {
      background: linear-gradient(90deg, #22c55e, #34d399, #38bdf8);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .hero-sub {
      font-size: 15px;
      line-height: 1.6;
      color: #e5e7eb;
      max-width: 640px;
      margin: 0 auto 20px;
    }

    .hero-meta {
      font-size: 12px;
      color: #9ca3af;
      margin-bottom: 6px;
    }

    .hero-cta-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-top: 18px;
    }

    .hero-cta-primary {
      padding: 11px 22px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      background: radial-gradient(circle at 0 0, #4ade80, ${accent});
      color: #020617;
      font-weight: 600;
      font-size: 14px;
      box-shadow: 0 18px 45px rgba(34,197,94,0.55);
    }

    .hero-cta-secondary {
      padding: 10px 18px;
      border-radius: 999px;
      border: 1px solid rgba(148,163,184,0.7);
      background: transparent;
      color: #e5e7eb;
      font-size: 13px;
      cursor: pointer;
    }

    .hero-footnotes {
      margin-top: 18px;
      font-size: 11px;
      color: #9ca3af;
    }

    .section {
      max-width: 1040px;
      margin: 0 auto;
      padding: 56px 24px;
    }

    .section-heading-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 20px;
    }

    .section-title {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    .section-tag {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #9ca3af;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 14px;
    }

    .card {
      border-radius: 18px;
      border: 1px solid rgba(148,163,184,0.40);
      background: radial-gradient(circle at top left, rgba(15,23,42,0.96), rgba(15,23,42,0.98));
      padding: 16px 16px 14px;
    }

    .card-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #a1a1aa;
      margin-bottom: 6px;
    }

    .card-title {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    .card-body {
      font-size: 13px;
      line-height: 1.5;
      color: #e5e7eb;
    }

    .footer {
      padding: 32px 24px 40px;
      border-top: 1px solid rgba(148,163,184,0.35);
      font-size: 12px;
      color: #9ca3af;
      text-align: center;
      max-width: 1040px;
      margin: 0 auto;
    }

    @media (max-width: 640px) {
      .nav { padding: 0 16px; }
      .hero { padding: 56px 16px 64px; }
      .section { padding: 40px 16px; }
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="nav">
      <div class="nav-logo">
        <div class="nav-mark">${safeName.charAt(0)}</div>
        <span>${safeName}</span>
      </div>
      <button class="nav-cta">Book a free call</button>
    </header>

    <main>
      <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-inner">
          <div class="hero-label">${safeIndustry.toUpperCase()}</div>
          <h1 class="hero-title">
            <span class="hero-gradient">${safeName}</span><br/>
            ${safeGoals}
          </h1>
          <p class="hero-sub">
            A modern, high-performing website for ${safeName}, built to help people in ${safeLocation} find you, trust you, and take the next step.
          </p>
          <p class="hero-meta">Serving ${safeLocation} • ${safeIndustry}</p>
          <div class="hero-cta-row">
            <button class="hero-cta-primary">Request my free website outline</button>
            <button class="hero-cta-secondary">See what we offer</button>
          </div>
          <div class="hero-footnotes">
            No obligation. Just a clear plan for how your site can work harder for you.
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-heading-row">
          <h2 class="section-title">What your homepage can highlight</h2>
          <span class="section-tag">Overview</span>
        </div>
        <div class="cards-grid">
          <article class="card">
            <div class="card-label">Hero</div>
            <h3 class="card-title">A bold promise above the fold</h3>
            <p class="card-body">
              Lead with a clear, confident headline and subheading that state who you help, what you do, and why it matters—backed by a strong call-to-action.
            </p>
          </article>
          <article class="card">
            <div class="card-label">Services</div>
            <h3 class="card-title">Simple breakdown of your key offers</h3>
            <p class="card-body">
              3–4 concise service tiles that make it easy for visitors to understand how you can help and what to explore next.
            </p>
          </article>
          <article class="card">
            <div class="card-label">Trust</div>
            <h3 class="card-title">Proof that you deliver</h3>
            <p class="card-body">
              Testimonials, logos, or short case studies that show real results and build confidence before someone reaches out.
            </p>
          </article>
          <article class="card">
            <div class="card-label">Action</div>
            <h3 class="card-title">Clear ways to get in touch</h3>
            <p class="card-body">
              A simple contact or booking section that makes it obvious how to call, fill out a form, or request a quote—no hunting around.
            </p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="section-heading-row">
          <h2 class="section-title">Why this layout works for ${safeName}</h2>
          <span class="section-tag">Strategy</span>
        </div>
        <p class="card-body">
          This draft is designed to feel premium, focused, and trustworthy—without overwhelming visitors. It keeps your homepage focused on the story that matters most:
          how ${safeName} helps people in ${safeLocation} through ${safeIndustry}.
        </p>
      </section>
    </main>

    <footer class="footer">
      Draft homepage concept for ${safeName}. In a full project we’d refine the visuals, copy, and structure together to match your brand perfectly.
    </footer>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    const id = randomUUID();
    const html = buildHtml(body);

    // write to /public/generated-sites
    const dir = path.join(process.cwd(), "public", "generated-sites");
    fs.mkdirSync(dir, { recursive: true });

    const filePath = path.join(dir, `${id}.html`);
    fs.writeFileSync(filePath, html, "utf-8");

    return NextResponse.json({ id });
  } catch (err) {
    console.error("generate-site error:", err);
    return NextResponse.json(
      { error: "Failed to generate site" },
      { status: 500 }
    );
  }
}

