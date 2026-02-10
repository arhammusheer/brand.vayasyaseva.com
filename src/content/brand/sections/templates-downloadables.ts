import type {
  DoDontExample,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const TEMPLATES_DOWNLOADABLES_SECTION = {
  header: {
    id: "templates-downloadables",
    number: "17",
    title: "Templates & Downloadables",
    summary: "Use approved templates to reduce drafting time and compliance variance.",
  },
  intro:
    "Templates are pre-approved operating assets. Teams should start from these formats instead of drafting from scratch for routine artifacts.",
  rules: [
    "Always duplicate the latest template version before editing.",
    "Do not remove mandatory sections from approved templates.",
    "If template edits are needed, submit governance request before reuse.",
  ],
  doDont: [
    {
      topic: "Template modification",
      do: "Request update to add a new compliance section and publish v1.3.",
      dont: "Quietly delete mandatory risk table for convenience.",
      why: "Untracked changes break standardization and auditability.",
    },
  ],
  templates: [
    {
      name: "Proposal template",
      purpose: "Standard proposal structure with claim and legal controls.",
      whenToUse: "Commercial proposals and renewal offers.",
      template:
        "Sections: Executive summary, scope, timeline, pricing, assumptions, risks, claim evidence, approvals, annexures.",
      guardrails: [
        "Measured claims require evidence annexure.",
        "Contractual terms must reference executed legal terms.",
      ],
    },
    {
      name: "Weekly status template",
      purpose: "Consistent reporting across engagements.",
      whenToUse: "Weekly reporting to clients and leadership.",
      template:
        "Status summary, completed work, upcoming work, risks, dependencies, decisions required, owner matrix.",
      guardrails: [
        "Use dated facts only.",
        "Include decisions required section even if empty.",
      ],
    },
    {
      name: "Escalation template",
      purpose: "Neutral and traceable escalation communication.",
      whenToUse: "Timeline, scope, budget, or compliance risk escalations.",
      template:
        "Issue, impact, evidence, mitigation options, recommendation, decision needed by, owner.",
      guardrails: [
        "No blame wording.",
        "State one actionable recommendation.",
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
