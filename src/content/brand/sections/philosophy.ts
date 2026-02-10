import type { DoDontExample, SectionHeader, TemplateSpec } from "../../../lib/types/brand";

export const PHILOSOPHY_SECTION = {
  header: {
    id: "philosophy",
    number: "01",
    title: "Philosophy",
    summary: "Use brand as an operating system for trust, clarity, and reliable delivery.",
  },
  intro:
    "Vayasya Seva communication exists to reduce client uncertainty. Every artifact must improve decision quality, reduce ambiguity, and preserve legal and ethical integrity.",
  rules: [
    "Prioritize clarity over cleverness in all client-facing language.",
    "State ownership, timeline, and outcome in every operational update.",
    "Represent current capability, not intended future capability, unless labeled explicitly as roadmap.",
    "Document assumptions whenever a requirement is incomplete.",
    "Treat brand consistency as a compliance control, not a cosmetic preference.",
  ],
  doDont: [
    {
      topic: "Service communication",
      do: "We can begin onboarding on 15 Feb 2026 once KYC records are validated.",
      dont: "We can start anytime and will figure out KYC later.",
      why: "The approved version sets condition and date, reducing misunderstanding.",
    },
    {
      topic: "Commitment language",
      do: "Current SLA target is 24 business hours for first response.",
      dont: "Fast support guaranteed.",
      why: "Specificity prevents inflated expectations and claim risk.",
    },
  ],
  templates: [
    {
      name: "Decision brief",
      purpose: "Frame internal and client-facing decisions in a standard way.",
      whenToUse: "Before approvals, scope changes, or cross-team handoffs.",
      template:
        "Decision: <one line>\nOwner: <name, role>\nDate: <DD MMM YYYY>\nOptions considered: <A/B/C>\nSelected option: <A/B/C>\nReason: <risk, cost, timeline>\nImpact: <client/team/system>\nNext checkpoint: <date and owner>",
      guardrails: [
        "Do not publish without named owner.",
        "Record at least one rejected option.",
        "Use India-first date format.",
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
