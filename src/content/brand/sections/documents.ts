import type {
  DoDontExample,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const DOCUMENTS_SECTION = {
  header: {
    id: "documents",
    number: "12",
    title: "Documents",
    summary: "Apply one structure for briefs, proposals, SOPs, and policy documents.",
  },
  intro:
    "All formal documents should be easy to review, approve, and audit. Structure must prioritize decision-making and traceability.",
  rules: [
    "Start with purpose, scope, owner, and version metadata.",
    "Include assumptions, dependencies, and exclusions in a dedicated section.",
    "Use revision table for every substantive change.",
    "Separate factual statements from recommendations.",
    "Reference contract clauses explicitly when applicable.",
  ],
  doDont: [
    {
      topic: "Scope statement",
      do: "In scope: onboarding workflow setup for Region A. Out of scope: legacy system migration.",
      dont: "We will support onboarding and related tasks as needed.",
      why: "Explicit boundaries reduce downstream disputes.",
    },
  ],
  templates: [
    {
      name: "Document skeleton",
      purpose: "Provide a standard structure for all operational documents.",
      whenToUse: "Any formal internal or client-shared document.",
      template:
        "Title\nOwner\nVersion\nDate\n1. Purpose\n2. Scope\n3. Assumptions\n4. Deliverables\n5. Timeline\n6. Risks and mitigations\n7. Approvals\n8. Revision history",
      guardrails: [
        "Version and date are mandatory.",
        "Do not remove risk section even if no major risk is identified.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
