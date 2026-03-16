import type {
  DoDontExample,
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
} from "../../../lib/types/brand";

export const DOCUMENTS_SECTION = {
  header: {
    id: "documents",
    number: "12",
    title: "Proposals, Quotations & Documents",
    summary: "Use scope-first document structure for proposals, quotations, shared notes, and formal documents.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You are sharing a quotation, proposal, formal note, or client-facing document.",
    doThis: "Lead with scope, assumptions, owner, and next step before the receiver reaches the attachment details.",
    neverDoThis: "Do not let the cover message or document intro create promises not inside the approved scope.",
    whoNeedsThis: "Sales/account, supervisors, leadership, HR/admin, and document owners.",
  } satisfies SectionSummaryStrip,

  intro:
    "Documents should help the receiver understand what is being offered, what is excluded, and what decision or action is needed next. Most document failure comes from hidden assumptions and loose scope wording.",

  rules: [
    "Start with purpose, scope, owner, and version or date.",
    "Put assumptions and exclusions in a visible section, not buried in the last page.",
    "If the document is commercial, keep claims discipline and contract language aligned with the approved source.",
    "Use the same service description in the cover note and in the attached document.",
    "Close every shared document with one clear next action.",
  ],

  doDont: [
    {
      topic: "Quotation scope statement",
      do: "Scope: housekeeping support for Site A as listed in the attached quotation. Excluded: civil work and maintenance scope.",
      dont: "We can support the site and related requirements as needed.",
      why: "The approved version removes ambiguity and reduces commercial drift.",
    },
    {
      topic: "Proposal opening",
      do: "This proposal covers workforce deployment support for the defined site scope, assumptions, and review points listed below.",
      dont: "This proposal outlines our complete solution for all your operational needs.",
      why: "Scope-led language is safer and more credible than total-solution language.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Quotation cover structure",
      purpose: "Standardize the short note that accompanies quotations and commercial attachments.",
      whenToUse: "Any quotation or commercial attachment shared externally.",
      template:
        "Document: <quotation/proposal>\nScope: <approved scope>\nIncludes: <top items>\nAssumptions: <list or reference>\nOwner: <name>\nRequired action: <review/approve/respond>\nNext checkpoint: <date/time>",
      guardrails: [
        "Do not add new commitments in the cover note.",
        "If assumptions are important, surface them clearly before send.",
      ],
    },
    {
      name: "Formal document skeleton",
      purpose: "Give formal documents one repeatable operating structure.",
      whenToUse: "Client notes, SOPs, proposals, or policy-style documents.",
      template:
        "Title\nOwner\nDate / version\n1. Purpose\n2. Scope\n3. Includes\n4. Exclusions\n5. Assumptions\n6. Risks / dependencies\n7. Next action / approvals",
      guardrails: [
        "Do not remove the exclusions or assumptions sections.",
        "Keep owner and date visible on page one.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
