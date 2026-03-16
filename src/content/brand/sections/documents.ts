import type {
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const DOCUMENTS_SECTION = {
  header: {
    id: "documents",
    number: "12",
    title: "Proposals, Quotations & Documents",
    summary:
      "Use scope-first document structure for proposals, quotations, shared notes, and formal documents.",
  } satisfies SectionHeader,

  intro:
    "Documents should help the receiver understand what is being offered, what is excluded, and what decision or action is needed next. Most document failure comes from hidden assumptions and loose scope wording.",

  rules: [
    "Start with purpose, scope, owner, and date.",
    "Put assumptions and exclusions in a visible section, not buried at the end.",
    "If the document is commercial, keep claims discipline and contract language aligned with the approved source.",
    "Use the same service description in the cover note and in the attached document.",
    "Close every shared document with one clear next action.",
  ],

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
  ] satisfies readonly TemplateSpec[],
} as const;
