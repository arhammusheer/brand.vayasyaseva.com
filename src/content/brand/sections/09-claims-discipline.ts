import type {
  ClaimRule,
  SectionHeader,
  SectionSummaryStrip,
} from "../../../lib/types/brand";

export const CLAIMS_DISCIPLINE_SECTION = {
  header: {
    id: "claims-discipline",
    number: "10",
    title: "Claims Discipline",
    summary: "Use the claim ladder before you say anything about services, timelines, performance, or guarantees.",
  } satisfies SectionHeader,

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
      prohibitedPattern:
        "Delivered capability described as already complete when it is still in progress.",
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

  legalSafePatterns: [
    "Use: based on current approved scope.",
    "Use: target date, subject to required approvals or dependencies.",
    "Use: as defined in the signed agreement.",
    "Use: based on data from <date range>.",
    "Avoid: guaranteed, zero-risk, fail-proof, immediate.",
    "Avoid: best, leading, unmatched, superior.",
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
  ],

  rules: [
    "If you cannot prove it, remove it or soften it.",
    "If a date is still dependent on someone else's input, label it as a target.",
    "If a sentence sounds stronger after a last-minute edit, re-review the claim class.",
    "When in doubt, use the approved service description instead of improvising capability language.",
  ],
} as const;
