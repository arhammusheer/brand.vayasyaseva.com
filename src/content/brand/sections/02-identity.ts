import type {
  DoDontExample,
  SectionHeader,
  TemplateSpec,
  TerminologyEntry,
} from "../../../lib/types/brand";

export const IDENTITY_SECTION = {
  header: {
    id: "identity",
    number: "02",
    title: "Identity",
    summary: "What Vayasya is, what we do, who we serve, and what we reject.",
  } satisfies SectionHeader,

  intent:
    "This section defines the core identity of Vayasya. Every piece of communication should trace back to these principles. When in doubt, return here.",

  intro:
    "Vayasya is an enterprise-grade, compliance-first workforce services and workforce systems group. We operate in B2B, supporting factories and large clients with manpower deployment and workforce operations.",

  whatWeAre: {
    statement:
      "Vayasya stands for operational reliability, compliance, and systems — built for scale.",
    signals: [
      "Institutional, calm, decisive",
      "Systems-first, audit-ready, process-driven",
      "Operational strength in Indian industrial context",
      "Compliance encoded into systems, not human memory",
    ],
  },

  whatWeAreNot: [
    "Not a staffing marketplace or recruitment agency",
    "Not a consumer HR brand or job portal",
    "Not an NGO, welfare organization, or CSR initiative",
    "Not a startup chasing growth metrics over operational depth",
  ],

  antiBrand: [
    "Spiritual, meditation, or wellness imagery or tone",
    "\"Soft\" inspirational startup language",
    "Excessively decorative design, gradients, or shiny gold effects",
    "Consumer lifestyle branding or mass-market positioning",
    "\"People empowerment\" fluff without operational substance",
    "HR buzzwords disconnected from execution reality",
  ],

  manifesto: {
    mission:
      "We exist to create operational clarity in complex environments.",
    beliefs: [
      {
        belief: "Clarity over cleverness",
        explanation:
          "Simple, direct communication reduces errors. We sacrifice style for precision.",
      },
      {
        belief: "Commitments are contracts",
        explanation:
          "What we say, we do. We under-promise and over-deliver, never the reverse.",
      },
      {
        belief: "Transparency builds trust",
        explanation:
          "We share bad news early, with context and a path forward. Hiding problems makes them worse.",
      },
      {
        belief: "Accountability has a name",
        explanation:
          "Every deliverable has an owner. We do not hide behind teams or processes.",
      },
      {
        belief: "Process protects people",
        explanation:
          "Good systems prevent mistakes. We invest in structure so individuals can focus on quality.",
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

  positioning: {
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
        notes:
          "Use evidence-led language instead of comparative superlatives.",
      },
      {
        term: "Transformation",
        approved: "Structured service improvement",
        avoid: ["Total transformation guaranteed"],
        notes: "Guarantee language requires contractual coverage.",
      },
    ] satisfies readonly TerminologyEntry[],
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
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Decision brief",
      purpose:
        "Frame internal and client-facing decisions in a standard way.",
      whenToUse:
        "Before approvals, scope changes, or cross-team handoffs.",
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
    {
      name: "30-second positioning script",
      purpose:
        "Align verbal introduction across sales, delivery, and leadership teams.",
      whenToUse: "Calls, events, and first-contact internal notes.",
      template:
        "Who we serve: <segment>\nProblem we solve: <operational issue>\nHow we work: <method and controls>\nWhat clients can expect: <measured outcome and timeframe>",
      guardrails: [
        "Use measured outcomes only when baseline data exists.",
        "Do not include comparative claims unless approved.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
