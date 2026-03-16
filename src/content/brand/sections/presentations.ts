import type {
  DoDontExample,
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
} from "../../../lib/types/brand";

export const PRESENTATIONS_SECTION = {
  header: {
    id: "presentations",
    number: "13",
    title: "Presentations",
    summary: "Use decks to explain approved scope, evidence, and decisions without adding new promises.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You are building or reviewing a client-facing deck, capability deck, or decision deck.",
    doThis: "Keep one message per slide and make sure the story stays inside approved scope and evidence.",
    neverDoThis: "Do not let slide headlines exaggerate what the company does or what has already been achieved.",
    whoNeedsThis: "Sales/account, leadership, design/marketing, and reviewers.",
  } satisfies SectionSummaryStrip,

  intro:
    "Presentation quality matters because decks are often forwarded without the presenter. Each slide should still read safely and correctly when seen out of context.",

  rules: [
    "Use one specific message per slide.",
    "When describing services, match the approved service map and current scope language.",
    "Use measured or directional claims only when evidence is ready and current.",
    "If the slide asks for a decision, state the decision owner and date on the slide.",
    "End with the next action, not a generic thank-you slide only.",
  ],

  doDont: [
    {
      topic: "Capability slide headline",
      do: "Approved service support for workforce deployment and housekeeping in industrial environments.",
      dont: "End-to-end industrial solution for every operational need.",
      why: "The approved version is tighter, safer, and closer to reality.",
    },
    {
      topic: "Decision slide",
      do: "Decision required by 22 Mar 2026: approve site-readiness timeline after access confirmation.",
      dont: "Discussion points.",
      why: "Decision slides should make the ask explicit.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Decision slide",
      purpose: "Keep review decks practical and action-oriented.",
      whenToUse: "Client reviews, internal governance, and leadership presentations.",
      template:
        "Decision required: <statement>\nContext: <two lines>\nOptions: <A/B with scope, risk, timing>\nRecommendation: <choice>\nOwner: <name>\nDecision date: <DD MMM YYYY>",
      guardrails: [
        "State the recommendation directly.",
        "Do not hide assumptions outside the slide if they change the decision.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
