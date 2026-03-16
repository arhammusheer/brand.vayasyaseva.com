import type { SectionHeader } from "../../../lib/types/brand";

export const PRESENTATIONS_SECTION = {
  header: {
    id: "presentations",
    number: "13",
    title: "Presentations",
    summary: "Use decks to explain approved scope, evidence, and decisions without adding new promises.",
  } satisfies SectionHeader,

  intro:
    "Presentation quality matters because decks are often forwarded without the presenter. Each slide should still read safely and correctly when seen out of context.",

  rules: [
    "Use one specific message per slide.",
    "When describing services, match the approved service map and current scope language.",
    "Use measured or directional claims only when evidence is ready and current.",
    "If the slide asks for a decision, state the owner and date on the slide.",
    "End with the next action, not a generic thank-you slide only.",
  ],
} as const;
