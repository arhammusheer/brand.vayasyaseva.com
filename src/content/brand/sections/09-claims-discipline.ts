import type {
  ClaimRule,
  DoDontExample,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const CLAIMS_DISCIPLINE_SECTION = {
  header: {
    id: "claims-discipline",
    number: "09",
    title: "Claims Discipline",
    summary: "Classify every claim by evidence level before publication.",
  } satisfies SectionHeader,

  intent: "Every external statement carries risk. Unsubstantiated claims damage credibility and invite legal exposure. This section provides a classification system that determines what you can say, what evidence you need, and who must approve it.",

  intro: "All claims must be classified as aspirational, directional, measured, or contractual. Claim class determines allowed wording, evidence needs, and approval path.",

  claimRules: [
    {
      claimType: "aspirational",
      allowedPattern: "We aim to... / Our intent is... / We strive to...",
      requiredEvidence: "Strategic intent note approved by leadership within last 12 months.",
      prohibitedPattern: "We always... / Guaranteed outcome... / We will definitely...",
      reviewTrigger: "Any external publication or client-facing material.",
    },
    {
      claimType: "directional",
      allowedPattern: "We are improving... / We are working toward... / Our focus is on...",
      requiredEvidence: "Current initiative log with milestone dates and owner assignments.",
      prohibitedPattern: "Already achieved... / Market-leading performance... / Completed...",
      reviewTrigger: "Investor, partner, or public channels.",
    },
    {
      claimType: "measured",
      allowedPattern: "In Q4 FY25, response time improved by 18%... / Based on 1,248 tickets...",
      requiredEvidence: "Documented baseline, measurement method, sample size, and date range.",
      prohibitedPattern: "Improved significantly... / Much better... / Dramatically increased...",
      reviewTrigger: "Any KPI claim in client or public material.",
    },
    {
      claimType: "contractual",
      allowedPattern: "As per MSA clause 4.2, first response SLA is 24 business hours.",
      requiredEvidence: "Signed contract reference and legal-reviewed clause text.",
      prohibitedPattern: "Contract-level commitment without clause citation.",
      reviewTrigger: "Proposal, SoW, MSA, and legal notices.",
    },
  ] satisfies readonly ClaimRule[],

  evidenceTiers: [
    {
      tier: "Aspirational",
      description: "Forward-looking intent without commitment.",
      validEvidence: [
        "Board-approved strategic direction document",
        "Leadership team meeting notes with dated decision",
        "Annual planning document with stated goals",
      ],
      invalidEvidence: [
        "Verbal discussion without documentation",
        "Individual opinion or preference",
        "Draft strategy not yet approved",
      ],
      expirationDays: 365,
      refreshProcess: "Re-confirm with leadership during annual planning cycle.",
    },
    {
      tier: "Directional",
      description: "Active work in progress with visible momentum.",
      validEvidence: [
        "Project plan with assigned owner and milestones",
        "Sprint board showing active work items",
        "Initiative tracker with status updates within 30 days",
      ],
      invalidEvidence: [
        "Planned but not started initiative",
        "Completed project (use measured instead)",
        "Initiative on hold or paused",
      ],
      expirationDays: 90,
      refreshProcess: "Update initiative status quarterly. Stale initiatives require re-approval.",
    },
    {
      tier: "Measured",
      description: "Quantified result with documented methodology.",
      validEvidence: [
        "Analytics report with date range and methodology",
        "Survey results with sample size and collection period",
        "Performance dashboard export with baseline comparison",
      ],
      invalidEvidence: [
        "Anecdotal improvement without numbers",
        "Estimated or projected figures",
        "Data older than 90 days without refresh",
      ],
      expirationDays: 90,
      refreshProcess: "Re-run measurement quarterly. Update claim text with current figures.",
    },
    {
      tier: "Contractual",
      description: "Legally binding commitment with enforcement.",
      validEvidence: [
        "Signed MSA, SoW, or NDA with specific clause reference",
        "Legal-reviewed commitment language",
        "Amendment or addendum with dated signatures",
      ],
      invalidEvidence: [
        "Email agreement without contract",
        "Verbal commitment",
        "Draft contract not yet executed",
      ],
      expirationDays: null,
      refreshProcess: "Valid until contract termination or amendment. Track contract expiry dates.",
    },
  ],

  legalSafePatterns: [
    "Use: subject to scope, data quality, and signed agreement.",
    "Use: target, estimate, expected, based on current inputs.",
    "Use: as defined in the executed contract.",
    "Use: based on data from [date range].",
    "Use: in our experience, typically...",
    "Avoid: guaranteed, assured, fail-proof, no-risk.",
    "Avoid: always, never, 100%, all cases.",
    "Avoid: best, leading, superior (without cited evidence).",
  ],

  rules: [
    "Every external claim must include a claim class tag in draft review.",
    "Measured claims require timestamped source data and owner sign-off.",
    "Contractual claims require legal-approved wording; no paraphrasing.",
    "If evidence is missing, downgrade claim class or remove claim.",
    "Evidence older than 90 days must be refreshed before publication.",
    "Comparative claims (better than, faster than) always require measured evidence.",
  ],

  doDont: [
    {
      topic: "Measured claim",
      do: "Average ticket closure time reduced from 26 to 21 hours between Oct-Dec 2025 across 1,248 tickets.",
      dont: "Ticket closure is now much faster.",
      why: "Measured claim must include baseline, value, period, and sample.",
    },
    {
      topic: "Contractual language",
      do: "Payment terms are as stated in Section 7 of the signed agreement.",
      dont: "Payment terms are flexible and can be adjusted anytime.",
      why: "Contract terms must align exactly with signed documentation.",
    },
    {
      topic: "Aspirational statement",
      do: "We are building toward 24/7 support availability as a strategic priority.",
      dont: "We offer 24/7 support.",
      why: "Aspirational intent is different from delivered capability.",
    },
    {
      topic: "Directional update",
      do: "Our team is implementing automated monitoring, targeted for Q2 2026 completion.",
      dont: "We have advanced monitoring capabilities.",
      why: "Work in progress is not a delivered feature.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Claim review worksheet",
      purpose: "Validate each claim before release.",
      whenToUse: "Proposals, website updates, decks, and press mentions.",
      template:
        "Claim text: <statement>\nClaim class: <aspirational/directional/measured/contractual>\nEvidence source: <file/link>\nEvidence owner: <name>\nLast verified: <DD MMM YYYY>\nExpiration: <date when refresh needed>\nApprover: <role/name>\nRelease channel: <doc/web/email>",
      guardrails: [
        "No empty evidence field for measured or contractual claims.",
        "If verification is older than 90 days, revalidate before release.",
        "Keep evidence file linked, not embedded.",
      ],
    },
    {
      name: "Evidence refresh request",
      purpose: "Request updated data for stale claims.",
      whenToUse: "When claim evidence is approaching 90-day expiration.",
      template:
        "Original claim: <statement>\nEvidence last updated: <DD MMM YYYY>\nData owner: <name>\nRefresh deadline: <DD MMM YYYY>\nNew data required: <specific metrics/sources>",
      guardrails: [
        "Request at least 10 business days before publication.",
        "If data is unavailable, downgrade claim class.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
};
