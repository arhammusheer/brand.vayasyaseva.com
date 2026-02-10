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
  },
  intro:
    "All claims must be classed as aspirational, directional, measured, or contractual. Claim class determines allowed wording, evidence needs, and approval path.",
  claimRules: [
    {
      claimType: "aspirational",
      allowedPattern: "We aim to... / Our intent is to...",
      requiredEvidence: "Strategic intent note approved by leadership.",
      prohibitedPattern: "We always... / Guaranteed outcome...",
      reviewTrigger: "Any external publication.",
    },
    {
      claimType: "directional",
      allowedPattern: "We are improving... / We are working toward...",
      requiredEvidence: "Current initiative log with milestone dates.",
      prohibitedPattern: "Already achieved market-leading performance.",
      reviewTrigger: "Investor, partner, or public channels.",
    },
    {
      claimType: "measured",
      allowedPattern: "In Q4 FY25, response time improved by 18%.",
      requiredEvidence: "Documented baseline, method, sample size, and date range.",
      prohibitedPattern: "Improved significantly without numeric proof.",
      reviewTrigger: "Any KPI claim in client or public material.",
    },
    {
      claimType: "contractual",
      allowedPattern: "As per MSA clause 4.2, first response SLA is 24 business hours.",
      requiredEvidence: "Signed contract reference and legal-reviewed clause text.",
      prohibitedPattern: "Contract-level commitment without clause citation.",
      reviewTrigger: "Proposal, SoW, MSA, and legal notices.",
    },
  ],
  legalSafePatterns: [
    "Use: subject to scope, data quality, and signed agreement.",
    "Use: target, estimate, expected, and based on current inputs.",
    "Use: as defined in the executed contract.",
    "Avoid: guaranteed, assured, fail-proof, no-risk, always, never.",
  ],
  rules: [
    "Every external claim must include a claim class tag in draft review.",
    "Measured claims require timestamped source data and owner sign-off.",
    "Contractual claims require legal-approved wording; no paraphrasing.",
    "If evidence is missing, downgrade claim class or remove claim.",
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
  ],
  templates: [
    {
      name: "Claim review worksheet",
      purpose: "Validate each claim before release.",
      whenToUse: "Proposals, website updates, decks, and press mentions.",
      template:
        "Claim text: <statement>\nClaim class: <aspirational/directional/measured/contractual>\nEvidence source: <file/link>\nEvidence owner: <name>\nLast verified: <DD MMM YYYY>\nApprover: <role/name>\nRelease channel: <doc/web/email>",
      guardrails: [
        "No empty evidence field for measured or contractual claims.",
        "If verification is older than 90 days, revalidate before release.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  claimRules: readonly ClaimRule[];
  legalSafePatterns: readonly string[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
