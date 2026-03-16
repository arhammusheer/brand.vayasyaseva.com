import type {
  SectionHeader,
  SectionSummaryStrip,
} from "../../../lib/types/brand";

export const GOVERNANCE_APPROVALS_SECTION = {
  header: {
    id: "governance-approvals",
    number: "17",
    title: "Governance & Approvals",
    summary:
      "Governance is for exceptions, risky claims, and public-facing changes, not for routine approved assets.",
  } satisfies SectionHeader,

  intro:
    "The default mode is self-serve for standard assets, approved copy blocks, and routine usage. Governance is only for exceptions, public-risk language, new templates, or non-standard brand decisions.",

  approvalNeededWhen: [
    "Measured or contractual claims are being added or strengthened.",
    "New public-facing company or service copy is being created.",
    "A new template, asset variant, or structural template change is being introduced.",
    "Joint-offering material involving multiple verticals is being published.",
    "Legal, commercial, or scope wording changes the meaning of the item.",
  ],

  selfServeAllowed: [
    "Using approved signatures, logos, bios, and copy blocks exactly as supplied.",
    "Using the approved representation pack with no structural changes.",
    "Routine logo, font, and signature usage inside approved templates.",
  ],

  rules: [
    "If the wording becomes stronger, broader, or more public, re-check approval need.",
    "If you edit an approved template structurally, it is no longer routine usage.",
    "If legal or commercial meaning changes, prior approval no longer covers it.",
  ],
} as const;
