import type {
  ApprovalRule,
  DoDontExample,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const GOVERNANCE_APPROVALS_SECTION = {
  header: {
    id: "governance-approvals",
    number: "17",
    title: "Governance & Approvals",
    summary: "Use defined approval paths with SLAs for all critical brand artifacts.",
  },
  intro:
    "Governance ensures consistency and risk control. Approval requirements depend on artifact type, claim class, and channel exposure.",
  approvals: [
    {
      artifact: "Website core brand copy",
      approverRole: "Brand lead",
      criteria: [
        "Token compliance",
        "Voice and tone compliance",
        "Claim class tagging complete",
      ],
      slaBusinessDays: 3,
      escalation: "Escalate to head of vertical if SLA is missed.",
    },
    {
      artifact: "Proposal with measured or contractual claims",
      approverRole: "Brand lead + legal reviewer",
      criteria: [
        "Evidence linked",
        "Contract alignment",
        "No prohibited language",
      ],
      slaBusinessDays: 2,
      escalation: "Escalate to business head and legal operations.",
    },
    {
      artifact: "Public-facing leadership presentation",
      approverRole: "Brand lead + business head",
      criteria: [
        "Positioning consistency",
        "Data timestamp present",
        "No unsupported comparative claims",
      ],
      slaBusinessDays: 4,
      escalation: "Escalate to parent communications office.",
    },
  ],
  rules: [
    "No external release before required approvals are recorded.",
    "Re-approval is required if claim text or legal language changes.",
    "Expired evidence (older than 90 days) triggers fresh validation.",
  ],
  doDont: [
    {
      topic: "Late-stage edits",
      do: "Route revised claim language back to legal before send.",
      dont: "Assume prior approval still applies after wording changes.",
      why: "Minor wording changes can alter legal interpretation.",
    },
  ],
  templates: [
    {
      name: "Approval request",
      purpose: "Submit artifact for review with complete context.",
      whenToUse: "Any item requiring governance sign-off.",
      template:
        "Artifact: <name and link>\nChannel: <email/web/deck/doc>\nClaim classes present: <list>\nRequested approver: <role>\nDeadline: <DD MMM YYYY>\nRisk note: <if urgent or high impact>",
      guardrails: [
        "Attach evidence references in same request.",
        "Include latest version identifier.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  approvals: readonly ApprovalRule[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
