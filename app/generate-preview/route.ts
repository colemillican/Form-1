import { NextResponse } from "next/server";

type StyleVibe = "clean" | "bold" | "warm" | "minimal";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    businessName,
    whatYouDo,
    mainGoal,
    styleVibe,
    email,
  }: {
    businessName: string;
    whatYouDo: string;
    mainGoal: string;
    styleVibe: StyleVibe;
    email: string;
  } = body;

  // Basic guard
  if (!businessName || !whatYouDo || !mainGoal || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Simple style-based label
  const vibeLabelMap: Record<StyleVibe, string> = {
    clean: "Clean & modern",
    bold: "Bold & cinematic",
    warm: "Warm & welcoming",
    minimal: "Minimal & understated",
  };

  const conceptLabel = `${vibeLabelMap[styleVibe]} concept for ${businessName}`;

  // Very simple heuristic copy using their inputs
  const hero = {
    headline: `${businessName}: ${mainGoal
      .charAt(0)
      .toUpperCase()}${mainGoal.slice(1)}`.slice(0, 90),
    subheadline: `Professional, high-performing website for ${businessName}, built to help you ${mainGoal.toLowerCase()}.`,
    primaryCta: "Request my website build",
  };

  const sections: string[] = [
    "Hero section with a bold promise, clean call-to-action, and clear value for local customers.",
    "Services overview that explains what you do in simple, benefit-focused language.",
    "Why choose us section highlighting trust, experience, or guarantees.",
    "Social proof area for reviews, testimonials, or before/after examples.",
    "Contact and booking section that makes it easy to call, email, or request a quote.",
  ];

  const rationale = `This concept frames ${businessName} as a clear, confident choice in your market. The homepage focuses on your main goal—${mainGoal.toLowerCase()}—by making it obvious what you do, who you serve, and how to get in touch. The layout keeps things clean and focused so visitors don’t get lost, while still leaving room for strong imagery and brand personality.`;

  // Return preview JSON
  return NextResponse.json({
    conceptLabel,
    hero,
    sections,
    rationale,
  });
}
