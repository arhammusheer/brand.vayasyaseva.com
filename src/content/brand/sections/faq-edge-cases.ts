import type {
  DoDontExample,
  QASection,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const FAQ_EDGE_CASES_SECTION = {
  header: {
    id: "faq-edge-cases",
    number: "18",
    title: "FAQ / Edge Cases",
    summary: "Resolve common exceptions without breaking brand or compliance controls.",
  },
  intro:
    "This section covers edge-case decisions that frequently cause inconsistency. If an issue is not listed, escalate to governance before publishing.",
  faq: [
    {
      question: "Can we combine two vertical accents in one one-pager?",
      answer:
        "Only when the one-pager represents a formally joint offering and both vertical owners approve in writing.",
      tags: ["color", "multi-vertical"],
    },
    {
      question: "Can we use guarantee language in a sales deck?",
      answer:
        "No. Use guarantee language only if legal confirms contractual basis and exact clause mapping.",
      tags: ["claims", "legal"],
    },
    {
      question: "Can we shorten dates to numeric format in quick updates?",
      answer: "Yes, use DD/MM/YYYY and keep 24-hour time with IST for clarity.",
      tags: ["writing", "standards"],
    },
    {
      question: "Can we resize the lockup so vertical name is equal to Vayasya?",
      answer: "No. Lockup hierarchy is fixed and must preserve parent prominence.",
      tags: ["logo", "identity"],
    },
  ],
  rules: [
    "When in doubt, default to stricter compliance-safe wording.",
    "Document the edge-case decision and owner in the revision log.",
    "Escalate unresolved edge cases before external release.",
  ],
  doDont: [
    {
      topic: "Unlisted exception",
      do: "Raise governance ticket before publishing non-standard claim format.",
      dont: "Publish first and ask for retroactive approval.",
      why: "Pre-approval avoids legal and reputational risk.",
    },
  ],
  templates: [
    {
      name: "Edge-case decision log",
      purpose: "Track non-standard decisions and rationale for future reuse.",
      whenToUse: "Any exception to default brand or language rules.",
      template:
        "Issue: <what is non-standard>\nContext: <channel/client/use case>\nRisk: <legal/brand/operational>\nDecision: <approved action>\nApprover: <name and role>\nValid until: <DD MMM YYYY>",
      guardrails: [
        "Do not reuse expired edge-case approvals.",
        "Link supporting evidence if claim-related.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  faq: readonly QASection[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
