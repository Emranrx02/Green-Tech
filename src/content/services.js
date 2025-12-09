// src/content/services.js

// Used by Home.jsx core cards AND the individual service pages (/slug)
export const services = [
  {
    id: "b2b-cc",
    slug: "b2b-cold-calling",
    icon: "📞",
    title: "B2B Cold Calling",
    summary:
      "Professional outreach to decision-makers with compliant scripts and clear dispositions.",
    bullets: {
      Includes: [
        "ICP-aligned scripts & rebuttals",
        "Daily call notes & QA snapshots",
        "Lead qualification + meeting handoff",
        "DNC • GDPR • TCPA compliant"
      ]
    }
  },
  {
    id: "b2c-cc",
    slug: "b2c-cold-calling",
    icon: "☎️",
    title: "B2C Cold Calling",
    summary:
      "High-touch consumer outreach to spark interest, qualify, and convert through clear, respectful conversations.",
    bullets: {
      Includes: [
        "Tone-matched scripts for consumers",
        "Opt-in, consent, and compliance guardrails",
        "Outcome tracking & daily summaries"
      ]
    }
  },
  {
    id: "b2b-lg",
    slug: "b2b-lead-generation",
    icon: "🧭",
    title: "B2B Lead Generation",
    summary:
      "Identify, attract, and qualify companies likely to benefit from your solution — then pass ready leads to sales.",
    bullets: {
      Includes: [
        "Account & contact sourcing",
        "Multi-touch outreach (calls first)",
        "Qualification framework & reporting"
      ]
    }
  },
  {
    id: "b2c-lg",
    slug: "b2c-lead-generation",
    icon: "🎯",
    title: "B2C Lead Generation",
    summary:
      "Attract and capture individual consumers with incentive-safe content and follow-ups designed to convert.",
    bullets: {
      Includes: [
        "List verification & clean-up",
        "Warm reactivation calls",
        "Conversion-focused scripts & QA"
      ]
    }
  }
];