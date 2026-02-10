import type {
  DoDontExample,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const EMAIL_SECTION = {
  header: {
    id: "email",
    number: "14",
    title: "Email",
    summary: "Use concise, legally safe, and action-oriented email structure.",
  },
  intro:
    "Email is a formal record. Messages must communicate status, required action, and constraints without implied commitments beyond approved scope.",
  legalSafePatterns: [
    "Use: based on current information available as of <date>.",
    "Use: subject to signed scope and mutually agreed change control.",
    "Use: estimated timeline, pending dependency confirmation.",
    "Avoid: guaranteed completion, zero risk, fully assured.",
  ],
  rules: [
    "Subject line must include action and timeline.",
    "First two lines should state current status and required response.",
    "List dependencies and consequences for missed deadlines.",
    "Use explicit approvals language for scope, budget, and legal changes.",
    "End with owner, next checkpoint date, and contact route.",
  ],
  doDont: [
    {
      topic: "Commitment phrasing",
      do: "We target delivery by 18 Feb 2026, subject to receiving approved data schema by 14 Feb 2026.",
      dont: "Delivery is guaranteed by 18 Feb no matter what.",
      why: "Conditional phrasing aligns expectations with real dependencies.",
    },
  ],
  templates: [
    {
      name: "Client update email",
      purpose: "Standard weekly or milestone client communication.",
      whenToUse: "Client delivery updates and risk escalations.",
      template:
        "Subject: Action required by <DD MMM YYYY> - <topic>\nHello <name>,\nCurrent status: <green/amber/red and one-line summary>.\nWhat changed: <facts with dates>.\nDependency: <who/what is pending>.\nRequired action: <specific ask and due date>.\nRisk if delayed: <scope/timeline/cost impact>.\nNext checkpoint: <DD MMM YYYY, time IST>.\nRegards,\n<owner name and role>",
      guardrails: [
        "Do not omit required action when dependency exists.",
        "Use only approved claim classes in performance statements.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  legalSafePatterns: readonly string[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
