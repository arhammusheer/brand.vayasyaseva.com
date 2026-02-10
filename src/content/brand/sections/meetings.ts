import type {
  DoDontExample,
  MeetingStandard,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const MEETINGS_SECTION = {
  header: {
    id: "meetings",
    number: "14",
    title: "Meetings",
    summary: "Run meetings with pre-read, clear decisions, and documented owners.",
  },
  intro:
    "Meeting quality determines execution speed. Every meeting should produce clear outcomes, owners, and dated follow-ups.",
  standards: [
    {
      meetingType: "Weekly delivery review",
      requiredInputs: ["status dashboard", "risk log", "open dependencies"],
      requiredOutputs: ["updated status", "owner actions", "next checkpoint"],
      timeboxMinutes: 45,
      ownerRole: "engagement manager",
    },
    {
      meetingType: "Scope change review",
      requiredInputs: ["change request", "impact assessment", "contract references"],
      requiredOutputs: ["approve/reject/defer decision", "commercial impact note"],
      timeboxMinutes: 30,
      ownerRole: "account lead",
    },
  ],
  rules: [
    "Share agenda and pre-read at least 24 hours in advance.",
    "Begin with objective and expected decision.",
    "Capture decision log live with owner and due date.",
    "Close with readback of decisions and unresolved items.",
  ],
  doDont: [
    {
      topic: "Meeting closure",
      do: "Decision: approve revised milestone plan. Owner: Priya. Due date: 12 Feb 2026.",
      dont: "We discussed many options and will continue later.",
      why: "Clear closure prevents execution drift.",
    },
  ],
  templates: [
    {
      name: "Meeting minute format",
      purpose: "Capture outcomes in a searchable and auditable format.",
      whenToUse: "All formal client and internal decision meetings.",
      template:
        "Meeting: <name>\nDate and time: <DD MMM YYYY, HH:MM IST>\nAttendees: <names>\nAgenda: <bullets>\nDecisions: <numbered list>\nActions: <owner, task, due date>\nRisks: <new/updated>\nNext meeting: <date>",
      guardrails: [
        "Publish minutes within one business day.",
        "Do not record off-the-record statements in formal minutes.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  standards: readonly MeetingStandard[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
