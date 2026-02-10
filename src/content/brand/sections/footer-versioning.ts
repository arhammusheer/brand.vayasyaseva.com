import type {
  BrandFooter,
  DoDontExample,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const FOOTER_VERSIONING_SECTION = {
  header: {
    id: "footer-versioning",
    number: "21",
    title: "Footer / Versioning",
    summary: "Keep every published artifact attributable, current, and reviewable.",
  },
  intro:
    "Version metadata is mandatory for control and audit. Every formal artifact must contain version, effective date, owner, and review date.",
  footer: {
    version: "v2.0.0",
    effectiveDate: "11 Feb 2026",
    nextReviewDate: "11 Aug 2026",
    owner: "Vayasya Brand Office",
    approvalTrail: [
      "Brand lead approval",
      "Vertical head approval",
      "Legal reviewer acknowledgment",
    ],
    contact: "TODO: Replace with actual contact email",
  },
  rules: [
    "Increase minor version for wording refinements without policy impact.",
    "Increase major version for policy, legal, or claim framework changes.",
    "Stamp footer metadata on all pages for exported PDF versions.",
    "Maintain a changelog entry for every release.",
  ],
  doDont: [
    {
      topic: "Version hygiene",
      do: "Update footer from v1.0.0 to v1.1.0 after adding approved email legal pattern.",
      dont: "Change content without version update.",
      why: "Version history is required for traceability.",
    },
  ],
  templates: [
    {
      name: "Footer metadata block",
      purpose: "Standard footer data for all brand handbook exports.",
      whenToUse: "PDF exports, document templates, and policy pages.",
      template:
        "Version: <vX.Y.Z> | Effective: <DD MMM YYYY> | Next review: <DD MMM YYYY> | Owner: <team> | Contact: <email>",
      guardrails: [
        "Use India-first date format.",
        "Do not publish without owner and contact.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  footer: BrandFooter;
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
