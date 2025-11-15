// app/api/generate-preview/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Pull out common fields from your form. It's fine if some are undefined.
    const {
      businessName,
      industry,
      location,
      audience,
      tone,
      goals,
      styleVibe, // e.g. "cinematic", "warm", "clean", "minimal"
      extraNotes,
    } = body;

    const style = (styleVibe || "").toLowerCase();

    const systemPrompt = `
You are LocalLink Digital's Website Draft Generator.

Your job:
- Take a small-business "brief" and generate a realistic, premium homepage DRAFT.
- Follow LocalLink's style systems exactly.
- Always return a SINGLE JSON object matching the required schema.
- Do NOT include markdown, comments, or any extra text. JSON ONLY.

========================
STYLE SYSTEMS
========================

1) CINEMATIC / BOLD (STANDARD)
- Full-bleed hero image or video-like atmosphere
- Dramatic, high-contrast visuals (Tesla, SpaceX inspired)
- Short, punchy headlines
- Minimal text, strong focus on feeling and impact
- Dark or rich backgrounds with bright accents
- Great for gyms, real estate, creators, high-energy brands

2) CINEMATIC / BOLD — LUXE (FOUR SEASONS MODE)
Use when the business feels luxury / premium / high-ticket.

- Fullscreen hero video (describe the scene)
- Deep black or navy overlay, elegant serif or sleek sans typography
- Very minimal copy in hero
- One or two powerful CTAs
- Optional "booking-like" module in the hero (e.g., quick lead form or "describe your project" field)
- Sections are sparse and cinematic: hero → 3 pillars → big visual section → testimonials → final CTA

3) WARM / WELCOMING
- Airbnb + boutique hospitality + wellness blend
- Warm earth tones, creams, sage, soft browns
- Rounded corners, gentle shadows
- Photography: people, lifestyle, cozy interiors, natural light
- Tone: friendly, human, reassuring
- Great for therapists, home services, cafes, churches, family businesses

4) CLEAN / PROFESSIONAL
- Navy / slate / white palette
- Clear, structured layout
- Strong sans-serif fonts
- Emphasis on trust, credentials, experience
- Great for: lawyers, accountants, real-estate brokers, medical & trades

5) MODERN / MINIMAL (TECH)
- Apple-like simplicity, lots of whitespace
- Soft gradients or abstract shapes
- Thin sans-serif typography, elegant spacing
- Simple CTA, minimal sections
- Great for tech, online services, agencies, AI, SaaS.

========================
JSON OUTPUT SHAPE (REQUIRED)
========================

You MUST return a single JSON object with this shape:

{
  "style": string,             // one of: "cinematic", "cinematic-luxe", "warm", "clean", "minimal"
  "business": {
    "name": string,
    "industry": string,
    "location": string,
    "audience": string,
    "tone": string,
    "goals": string
  },
  "hero": {
    "layout": string,              // e.g. "cinematic-video", "image-hero", "warm-photo-left", "minimal-centered"
    "backgroundDescription": string, // describe what the hero background should look like
    "title": string,
    "subtitle": string,
    "primaryCTA": string,
    "secondaryCTA": string,
    "notes": string                // any special implementation notes for this hero
  },
  "sections": [
    {
      "id": string,                // machine-friendly ID like "services", "about", "testimonials", "process", "cta"
      "label": string,             // human label like "Our Services"
      "type": string,              // "services" | "about" | "process" | "testimonials" | "cta" | "custom"
      "summary": string,           // one-sentence purpose of this section
      "items": [
        {
          "title": string,
          "body": string,
          "badge": string          // optional small label, can be "" if not needed
        }
      ]
    }
  ],
  "explanation": {
    "styleChoice": string,         // why this style fits this business
    "layoutRationale": string,     // why you chose this hero + section order
    "contentStrategy": string      // how the copy/sections help them convert visitors
  }
}

Rules:
- Every string field should be filled with meaningful content (no lorem ipsum, no "N/A", no "string").
- "items" can be an empty array if not needed, but should usually contain 3–6 entries for services, testimonials, etc.
- Choose "style" based on the requested style vibe and the industry.
- Make everything feel like a REAL, high-quality homepage for this business.
- Keep language clear, persuasive, and on-brand for the chosen style.
`;

    const userPrompt = `
CLIENT BRIEF (JSON):
${JSON.stringify(body, null, 2)}

Requested primary style vibe: "${style || "unspecified"}".

Based on this brief, choose the best matching style from:
- "cinematic"
- "cinematic-luxe"
- "warm"
- "clean"
- "minimal"

Then generate the JSON homepage draft according to the schema.
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      throw new Error("No content returned from OpenAI");
    }

    const parsed = JSON.parse(content);

    return NextResponse.json(parsed);
  } catch (err: any) {
    console.error("generate-preview error:", err);
    return NextResponse.json(
      { error: "Failed to generate preview" },
      { status: 500 }
    );
  }
}
