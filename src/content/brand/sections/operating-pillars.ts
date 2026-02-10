import type {
  DoDontExample,
  Pillar,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const OPERATING_PILLARS_SECTION = {
  header: {
    id: "operating-pillars",
    number: "04",
    title: "Operating Pillars",
    summary: "Four pillars define execution quality across every client engagement.",
  },
  intro:
    "Pillars are non-negotiable operating behaviors. They convert brand values into daily execution standards and measurable review points.",
  pillars: [
    {
      name: "Clarity",
      definition: "Every deliverable names owner, scope, timeline, and acceptance criteria.",
      behaviors: [
        "Use explicit acceptance criteria in statements of work.",
        "Annotate dependencies and assumptions in client updates.",
      ],
      redFlags: [
        "Undefined responsibilities",
        "Open-ended delivery language",
      ],
    },
    {
      name: "Reliability",
      definition: "Commitments are realistic, tracked, and followed through visibly.",
      behaviors: [
        "Maintain dated status logs.",
        "Escalate risks before SLA breach windows.",
      ],
      redFlags: ["Repeated timeline slippage", "Last-minute surprise escalations"],
    },
    {
      name: "Accountability",
      definition: "Decisions and deviations are recorded with responsible approvers.",
      behaviors: [
        "Maintain approval trail for contract-impacting decisions.",
        "Capture rationale for changes in a revision table.",
      ],
      redFlags: ["No audit trail", "Unapproved scope changes"],
    },
    {
      name: "Respect",
      definition: "Communication remains factual, precise, and culturally professional.",
      behaviors: [
        "Use neutral tone in escalation notes.",
        "Avoid blame-focused wording and undocumented assumptions.",
      ],
      redFlags: ["Adversarial language", "Passive-aggressive statements"],
    },
  ],
  rules: [
    "Every kickoff must map deliverables to at least one pillar.",
    "Monthly reviews must include pillar evidence, not opinions.",
    "A repeated red flag in two cycles triggers governance review.",
  ],
  doDont: [
    {
      topic: "Risk reporting",
      do: "Dependency on client data can delay milestone 2 by three days; mitigation request sent on 10 Feb 2026.",
      dont: "There might be some delays if things do not go well.",
      why: "Concrete language enables action and accountability.",
    },
  ],
  templates: [
    {
      name: "Pillar evidence log",
      purpose: "Capture objective proof for monthly operating reviews.",
      whenToUse: "End of each month per active engagement.",
      template:
        "Engagement: <name>\nMonth: <MMM YYYY>\nPillar: <Clarity/Reliability/Accountability/Respect>\nEvidence: <fact with date>\nRisk: <if any>\nOwner: <name>\nAction by: <DD MMM YYYY>",
      guardrails: [
        "No subjective adjectives without evidence.",
        "Each entry must have a date.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  pillars: readonly Pillar[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
