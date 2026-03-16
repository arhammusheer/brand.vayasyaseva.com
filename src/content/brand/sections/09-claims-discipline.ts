import type {
  ClaimRule,
  DoDontExample,
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
} from "../../../lib/types/brand";

export const CLAIMS_DISCIPLINE_SECTION = {
  header: {
    id: "claims-discipline",
    number: "10",
    title: "Claims Discipline",
    summary: "Use the claim ladder before you say anything about services, timelines, performance, or guarantees.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You are about to describe capability, timeline, performance, compliance, or a promise.",
    doThis: "Ask what kind of claim it is, what evidence exists, and whether approval is required.",
    neverDoThis: "Do not use strong words to sound confident when you cannot prove them.",
    whoNeedsThis: "Sales/account, leadership, recruiters, supervisors, reviewers, and anyone sending client-facing copy.",
  } satisfies SectionSummaryStrip,

  intro:
    "Most claim risk comes from casual language, not bad intent. Use this section to decide what you can safely say, what you must soften, and when the answer is to remove the claim entirely.",

  decisionLadder: [
    "Can we prove this right now with current evidence? If no, remove it or downgrade it.",
    "Is this about what we intend, what we are working toward, what we measured, or what the contract says?",
    "Does this create a legal, commercial, or expectation risk if repeated by the receiver?",
    "If the wording changes scope or promise level, does it need approval before release?",
  ],

  claimRules: [
    {
      claimType: "aspirational",
      allowedPattern: "We aim to... / Our intent is... / We are building toward...",
      requiredEvidence: "Leadership-approved direction or current plan.",
      prohibitedPattern: "We already do this / This is guaranteed / This will definitely happen.",
      reviewTrigger: "Public or client-facing use outside routine internal planning.",
    },
    {
      claimType: "directional",
      allowedPattern: "We are working toward... / We are currently strengthening...",
      requiredEvidence: "Active initiative with owner and current status.",
      prohibitedPattern: "Delivered capability described as already complete when it is still in progress.",
      reviewTrigger: "Decks, proposals, leadership notes, or client-facing updates.",
    },
    {
      claimType: "measured",
      allowedPattern: "Based on <period> and <sample>, <metric> moved from X to Y.",
      requiredEvidence: "Current data source, method, time range, and owner.",
      prohibitedPattern: "Much faster / significantly better / best without numbers.",
      reviewTrigger: "Any performance or comparison claim.",
    },
    {
      claimType: "contractual",
      allowedPattern: "As stated in the signed contract / clause <x>...",
      requiredEvidence: "Executed contract wording or approved legal reference.",
      prohibitedPattern: "Promise language that is not tied to signed terms.",
      reviewTrigger: "Quotations, proposals, contracts, or legal/commercial communication.",
    },
  ] satisfies readonly ClaimRule[],

  evidenceTiers: [
    {
      tier: "Service capability",
      description: "Use approved service map and current scope language.",
      validEvidence: [
        "Current approved company description",
        "Approved service capability text",
      ],
      invalidEvidence: [
        "What someone said on a call",
        "What we hope to offer later",
      ],
      expirationDays: null,
      refreshProcess: "Refresh when the public company description or approved capability changes.",
    },
    {
      tier: "Timeline or readiness",
      description: "Use only confirmed dates or clearly qualified targets.",
      validEvidence: [
        "Named owner confirmation",
        "Approved project or execution plan",
      ],
      invalidEvidence: [
        "Optimistic guess",
        "Verbal assurance from a non-owner",
      ],
      expirationDays: 30,
      refreshProcess: "Reconfirm before each external use.",
    },
    {
      tier: "Performance or scale",
      description: "Use only when data, period, and sample are current.",
      validEvidence: [
        "Current report with methodology",
        "Owned dashboard export with date range",
      ],
      invalidEvidence: [
        "Anecdotes",
        "Old figures reused without refresh",
      ],
      expirationDays: 90,
      refreshProcess: "Refresh or remove when older than 90 days.",
    },
    {
      tier: "Contract or compliance promise",
      description: "Use only the approved legal or signed wording.",
      validEvidence: [
        "Executed contract clause",
        "Legal-approved text",
      ],
      invalidEvidence: [
        "Paraphrased memory",
        "Commercial assumption not in the signed terms",
      ],
      expirationDays: null,
      refreshProcess: "Valid until the signed agreement changes or expires.",
    },
  ],

  legalSafePatterns: [
    "Use: based on current approved scope.",
    "Use: target date, subject to required approvals or dependencies.",
    "Use: as defined in the signed agreement.",
    "Use: based on data from <date range>.",
    "Avoid: guaranteed, zero-risk, fail-proof, immediate.",
    "Avoid: best, leading, unmatched, superior.",
    "Avoid: always, never, every time, no issue.",
  ],

  fieldExamples: [
    {
      context: "Deployment start date",
      safe: "We are targeting deployment on 22 Mar 2026, subject to final client approval and document readiness.",
      unsafe: "Deployment will definitely start on 22 Mar 2026.",
    },
    {
      context: "Compliance statement",
      safe: "We operate with compliance-first controls and can confirm the exact requirement set for this scope.",
      unsafe: "Everything is fully compliant in every case.",
    },
    {
      context: "Maintenance capability",
      safe: "We can review maintenance support for this requirement within approved scope.",
      unsafe: "We handle all maintenance needs end to end.",
    },
    {
      context: "Performance statement",
      safe: "Based on the current reporting period, response time improved from X to Y.",
      unsafe: "Our response time is far better now.",
    },
  ],

  rules: [
    "If you cannot prove it, remove it or soften it.",
    "If a date is still dependent on someone else's input, label it as a target.",
    "If a sentence sounds stronger after a last-minute edit, re-review the claim class.",
    "If the statement can be repeated as a promise, treat it as a higher-risk claim.",
    "When in doubt, use the approved service description instead of improvising capability language.",
  ],

  doDont: [
    {
      topic: "Timeline claim",
      do: "We are targeting the site start on 22 Mar 2026, subject to final access approval.",
      dont: "The site will definitely start on 22 Mar 2026.",
      why: "Qualified language reflects real dependencies.",
    },
    {
      topic: "Capability claim",
      do: "For this scope, we can review maintenance support within approved service boundaries.",
      dont: "We handle every type of maintenance with no issue.",
      why: "Scope-first wording protects credibility and delivery.",
    },
    {
      topic: "Performance claim",
      do: "Based on the Jan-Feb 2026 reporting period, response time moved from X to Y.",
      dont: "Our response time is much better now.",
      why: "Measured claims need data, period, and method.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Claim check block",
      purpose: "Review risky wording quickly before release.",
      whenToUse: "Quotations, proposals, decks, web copy, leadership notes, and high-risk email text.",
      template:
        "Claim text: <statement>\nClaim type: <aspirational/directional/measured/contractual>\nEvidence source: <file or approved text>\nOwner: <name>\nNeeds approval: <yes/no>\nApproved wording used: <yes/no>",
      guardrails: [
        "If evidence is missing, remove or downgrade the claim.",
        "If the wording changes promise level, re-review it before send.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
