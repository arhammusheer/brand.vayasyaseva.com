import type { SectionHeader } from "../../../lib/types/brand";

export const BRAND_ARCHITECTURE_SECTION = {
  header: {
    id: "brand-architecture",
    number: "03",
    title: "Brand Architecture",
    summary:
      "Choose the right brand name and vertical before you write, share, or present anything.",
  } satisfies SectionHeader,

  intro:
    "Use this section as a naming choice guide. Pick the right brand owner first, then apply the approved name consistently through the rest of the material.",

  choiceGuide: [
    {
      context: "Say Vayasya",
      rule: "Use the master brand for group-level communication, shared governance, or any material where no single vertical clearly owns the message.",
    },
    {
      context: "Say a vertical",
      rule: "Use the full vertical name only when that vertical clearly owns the work, service, or communication context.",
    },
    {
      context: "Joint offering",
      rule: "State it as joint only when both vertical owners have approved that framing.",
    },
    {
      context: "Abbreviations",
      rule: "Do not abbreviate vertical names in formal or client-facing communication.",
    },
  ],

  rules: [
    "Use the full name on first mention: Vayasya or Vayasya <Vertical>.",
    "Do not shorten to initials or invented shorthand.",
    "Choose one clear brand owner for each document, deck, or message.",
    "If ownership is unclear, default to Vayasya until the scope is confirmed.",
  ],
} as const;
