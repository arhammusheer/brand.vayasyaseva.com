import type {
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const EMAIL_SECTION = {
  header: {
    id: "email",
    number: "14",
    title: "Email",
    summary: "Use email when the message needs formal record, fuller context, or approval-safe wording.",
  } satisfies SectionHeader,

  intro:
    "Use email when the receiver needs formal context, clear dependency handling, and a durable record. If the message is a simple operational ping, use the short-form channel rules instead.",

  channelChoice: [
    {
      situation: "Quick operational status with no scope or legal risk",
      use: "WhatsApp or internal chat",
      avoid: "Long formal email thread",
    },
    {
      situation: "Quotation, approval, scope clarification, or dependency note",
      use: "Email",
      avoid: "WhatsApp-only handling",
    },
    {
      situation: "Call-based discussion with real decisions",
      use: "Call, then confirm by email",
      avoid: "Verbal closure with no written record",
    },
  ],

  rules: [
    "Use a subject line that tells the receiver the action and timeline.",
    "State current status and required response in the first two lines.",
    "List dependencies and consequences if they affect timing or scope.",
    "If a call changed the decision, confirm the outcome in writing.",
    "Close with owner, next checkpoint, and the best reply route.",
  ],

  templates: [
    {
      name: "Client update email",
      purpose: "Give formal client email one consistent structure.",
      whenToUse: "Milestone updates, dependency notes, commercial follow-up, and escalations.",
      template:
        "Subject: <action> by <DD MMM YYYY> - <topic>\nHello <name>,\nCurrent status: <green/amber/red and one-line summary>.\nRequired action: <specific ask and due date>.\nImpact if delayed: <specific effect>.\nOwner: <name>.\nNext checkpoint: <DD MMM YYYY, HH:MM IST>.\nRegards,\n<name and role>",
      guardrails: [
        "Do not hide the required action below the fold.",
        "If the message changes commitment level, re-check the claim wording before send.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
