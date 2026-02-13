import type {
  ChecklistGroup,
  DoDontExample,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const PRE_SEND_CHECKLIST_SECTION = {
  header: {
    id: "pre-send-checklist",
    number: "16",
    title: "Pre-Send Checklist",
    summary: "Use a mandatory gate before sending any external brand communication.",
  },
  intro:
    "Before any external send, run this checklist to reduce factual, legal, and brand consistency errors.",
  checklist: [
    {
      title: "Identity and formatting",
      items: [
        "Correct vertical name used consistently.",
        "Logo asset is original and unrecolored.",
        "Typography follows Anek (display), Hind (body), and JetBrains Mono (data) rules.",
      ],
      passCondition: "All identity controls are verified by sender.",
    },
    {
      title: "Claims and legal",
      items: [
        "Every claim tagged with claim class.",
        "Measured claims have current evidence.",
        "Contractual terms match signed agreement wording.",
      ],
      passCondition: "No unsupported claim remains in final draft.",
    },
    {
      title: "Operational readiness",
      items: [
        "Required action and owner are explicit.",
        "Dependencies and deadlines are stated.",
        "Next checkpoint date and time are included.",
      ],
      passCondition: "Recipient can act without clarification call.",
    },
  ],
  rules: [
    "Checklist completion is mandatory for client-facing deliverables.",
    "Any failed item requires correction before release.",
    "Store checklist evidence with final artifact version.",
  ],
  doDont: [
    {
      topic: "Release decision",
      do: "Hold send until measured claim evidence is attached.",
      dont: "Send now and attach proof later.",
      why: "Post-send corrections reduce credibility and may create legal risk.",
    },
  ],
  templates: [
    {
      name: "Pre-send sign-off",
      purpose: "Record final quality gate before publication.",
      whenToUse: "Any email, proposal, deck, or web copy sent externally.",
      template:
        "Artifact: <name>\nVersion: <vX.Y>\nSender: <name>\nChecklist pass: <yes/no>\nExceptions: <none or details>\nApprover (if required): <name>\nTimestamp: <DD MMM YYYY HH:MM IST>",
      guardrails: [
        "No blank fields in final sign-off block.",
        "If exception exists, include approval reference.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  checklist: readonly ChecklistGroup[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
