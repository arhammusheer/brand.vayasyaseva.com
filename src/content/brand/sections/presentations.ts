import type {
  DoDontExample,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const PRESENTATIONS_SECTION = {
  header: {
    id: "presentations",
    number: "12",
    title: "Presentations",
    summary: "Create slide narratives that are evidence-led and decision-oriented.",
  },
  intro:
    "Presentation content must be readable in live meetings and self-explanatory when forwarded asynchronously. Slides should show context, evidence, and decisions required.",
  rules: [
    "One key message per slide with a specific headline.",
    "Use data labels and date ranges for every chart.",
    "Annotate assumptions directly below forecast visuals.",
    "Use status markers consistently: green, amber, red.",
    "Close with explicit decisions needed and owners.",
  ],
  doDont: [
    {
      topic: "Chart headline",
      do: "Ticket backlog reduced 12% from Jan to Feb 2026 after triage revision.",
      dont: "Operational dashboard update.",
      why: "Descriptive headlines improve comprehension and action.",
    },
  ],
  templates: [
    {
      name: "Decision slide",
      purpose: "Present options and request a clear decision in review meetings.",
      whenToUse: "Steering committees, client reviews, and internal governance.",
      template:
        "Decision required: <statement>\nContext: <2 lines>\nOption A: <cost, timeline, risk>\nOption B: <cost, timeline, risk>\nRecommendation: <A/B with reason>\nDecision owner: <name>\nDecision date: <DD MMM YYYY>",
      guardrails: [
        "Limit to two or three options.",
        "State recommendation and owner explicitly.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
