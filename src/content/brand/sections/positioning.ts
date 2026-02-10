import type {
  DoDontExample,
  SectionHeader,
  TemplateSpec,
  TerminologyEntry,
} from "../../../lib/types/brand";

export const POSITIONING_SECTION = {
  header: {
    id: "positioning",
    number: "02",
    title: "Positioning",
    summary: "Define Vayasya Seva as a dependable service partner with operational rigor.",
  },
  intro:
    "Positioning statements must describe who we serve, what we solve, and how we deliver with measurable reliability. Avoid category inflation and broad, unprovable promises.",
  rules: [
    "Primary message: dependable execution for defined service outcomes.",
    "Audience first: mention client segment before internal capability details.",
    "Differentiate by operating discipline, not by superlatives.",
    "Use one vertical context per narrative unless explicitly multi-vertical.",
    "Do not claim market leadership without audited comparative evidence.",
  ],
  terminology: [
    {
      term: "Trusted partner",
      approved: "Dependable operating partner",
      avoid: ["Best-in-class partner", "Unmatched partner"],
      notes: "Use evidence-led language instead of comparative superlatives.",
    },
    {
      term: "Transformation",
      approved: "Structured service improvement",
      avoid: ["Total transformation guaranteed"],
      notes: "Guarantee language requires contractual coverage.",
    },
  ],
  doDont: [
    {
      topic: "Positioning line",
      do: "Vayasya Seva helps teams run essential service workflows with clear ownership, timelines, and controls.",
      dont: "Vayasya Seva reinvents everything for everyone.",
      why: "Focused positioning aligns with operational delivery reality.",
    },
    {
      topic: "Differentiation",
      do: "Our approach uses checkpoint-based governance and documented handoffs.",
      dont: "Our approach is unique and revolutionary.",
      why: "The approved line is specific and auditable.",
    },
  ],
  templates: [
    {
      name: "30-second positioning script",
      purpose: "Align verbal introduction across sales, delivery, and leadership teams.",
      whenToUse: "Calls, events, and first-contact internal notes.",
      template:
        "Who we serve: <segment>\nProblem we solve: <operational issue>\nHow we work: <method and controls>\nWhat clients can expect: <measured outcome and timeframe>",
      guardrails: [
        "Use measured outcomes only when baseline data exists.",
        "Do not include comparative claims unless approved.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  rules: readonly string[];
  terminology: readonly TerminologyEntry[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
