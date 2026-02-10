import type { DoDontExample, SectionHeader, TemplateSpec } from "../../../lib/types/brand";

export const PHILOSOPHY_SECTION = {
  header: {
    id: "philosophy",
    number: "01",
    title: "Philosophy",
    summary: "Use brand as an operating system for trust, clarity, and reliable delivery.",
  } satisfies SectionHeader,

  intent: "This section defines what Vayasya believes and why it exists. Every piece of communication should trace back to these principles. When in doubt, return here.",

  intro: "Vayasya Seva communication exists to reduce client uncertainty. Every artifact must improve decision quality, reduce ambiguity, and preserve legal and ethical integrity.",

  manifesto: {
    mission: "We exist to create operational clarity in complex environments.",
    beliefs: [
      {
        belief: "Clarity over cleverness",
        explanation: "Simple, direct communication reduces errors. We sacrifice style for precision.",
      },
      {
        belief: "Commitments are contracts",
        explanation: "What we say, we do. We under-promise and over-deliver, never the reverse.",
      },
      {
        belief: "Transparency builds trust",
        explanation: "We share bad news early, with context and a path forward. Hiding problems makes them worse.",
      },
      {
        belief: "Accountability has a name",
        explanation: "Every deliverable has an owner. We do not hide behind teams or processes.",
      },
      {
        belief: "Process protects people",
        explanation: "Good systems prevent mistakes. We invest in structure so individuals can focus on quality.",
      },
    ],
    standFor: [
      "Operational precision in every deliverable",
      "Respect for client time and attention",
      "Evidence-based claims and commitments",
      "Professional boundaries and clear escalation",
      "Consistent quality regardless of deadline pressure",
    ],
    reject: [
      "Vague promises without timelines or owners",
      "Marketing language that exaggerates capability",
      "Blame-shifting or defensive communication",
      "Process shortcuts that trade quality for speed",
      "Assumptions presented as facts",
    ],
  },

  rules: [
    "Prioritize clarity over cleverness in all client-facing language.",
    "State ownership, timeline, and outcome in every operational update.",
    "Represent current capability, not intended future capability, unless labeled explicitly as roadmap.",
    "Document assumptions whenever a requirement is incomplete.",
    "Treat brand consistency as a compliance control, not a cosmetic preference.",
    "When facts and perception conflict, lead with facts.",
    "Make the implicit explicit: if something is assumed, write it down.",
  ],

  doDont: [
    {
      topic: "Service communication",
      do: "We can begin onboarding on 15 Feb 2026 once KYC records are validated.",
      dont: "We can start anytime and will figure out KYC later.",
      why: "The approved version sets condition and date, reducing misunderstanding.",
    },
    {
      topic: "Commitment language",
      do: "Current SLA target is 24 business hours for first response.",
      dont: "Fast support guaranteed.",
      why: "Specificity prevents inflated expectations and claim risk.",
    },
    {
      topic: "Problem reporting",
      do: "We identified a data quality issue on 10 Feb. Impact: delayed report. Fix ETA: 12 Feb.",
      dont: "There might be some issues but we're handling it.",
      why: "Early, specific reporting builds trust even when sharing problems.",
    },
    {
      topic: "Future capability",
      do: "Automated reporting is on our Q2 2026 roadmap, subject to resource allocation.",
      dont: "We'll have automated reporting soon.",
      why: "Roadmap items are not commitments. Qualify future statements.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Decision brief",
      purpose: "Frame internal and client-facing decisions in a standard way.",
      whenToUse: "Before approvals, scope changes, or cross-team handoffs.",
      template:
        "Decision: <one line>\nOwner: <name, role>\nDate: <DD MMM YYYY>\nOptions considered: <A/B/C with one-line description>\nSelected option: <A/B/C>\nReason: <risk, cost, timeline factors>\nImpact: <client/team/system>\nNext checkpoint: <date and owner>",
      guardrails: [
        "Do not publish without named owner.",
        "Record at least one rejected option.",
        "Use India-first date format.",
        "Impact field must be specific, not 'minimal' or 'significant'.",
      ],
    },
    {
      name: "Assumption log",
      purpose: "Track assumptions that may affect delivery.",
      whenToUse: "When starting work with incomplete requirements.",
      template:
        "Assumption: <statement>\nBasis: <why we believe this>\nRisk if wrong: <impact>\nValidation owner: <name>\nValidation deadline: <DD MMM YYYY>\nStatus: <unvalidated/confirmed/invalidated>",
      guardrails: [
        "Review assumption log weekly during active projects.",
        "Invalidated assumptions trigger scope change process.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
};
