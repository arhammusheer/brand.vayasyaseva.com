import type {
  DoDontExample,
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
} from "../../../lib/types/brand";

export const EMAIL_SECTION = {
  header: {
    id: "email",
    number: "14",
    title: "Email",
    summary: "Use email when the message needs formal record, fuller context, or approval-safe wording.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You need a formal record or a message with scope, dependency, or approval detail.",
    doThis: "Use email for formal client updates, approvals, quotations, and anything that should live as a clear record.",
    neverDoThis: "Do not use email like chat, and do not use WhatsApp for risky commercial or legal wording.",
    whoNeedsThis: "Sales/account, supervisors, leadership, HR/admin, and anyone writing official client mail.",
  } satisfies SectionSummaryStrip,

  intro:
    "Use email when the receiver needs formal context, clear dependency handling, and a durable record. If the message is a simple operational ping, use the short-form channel rules instead.",

  legalSafePatterns: [
    "Use: based on the current approved scope.",
    "Use: target date, subject to dependency confirmation.",
    "Use: as per the signed agreement / approved quotation.",
    "Use: next checkpoint on <date/time>.",
    "Avoid: guaranteed completion, zero risk, or immediate resolution.",
  ],

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

  doDont: [
    {
      topic: "Formal dependency note",
      do: "Current status: amber. We are targeting 22 Mar 2026, subject to access approval by 20 Mar 2026. Required action: please confirm access status by 16:00 IST.",
      dont: "Please note we are trying our best and should be able to complete it soon.",
      why: "The approved version makes status, dependency, and requested action visible immediately.",
    },
    {
      topic: "Post-call confirmation",
      do: "As agreed on today's call, the next checkpoint is 24 Mar 2026 and Priya is the owner for the revised schedule.",
      dont: "Per our discussion, please do the needful.",
      why: "The approved version records the decision clearly instead of relying on vague shorthand.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Client update email",
      purpose: "Give formal client email one consistent structure.",
      whenToUse: "Milestone updates, dependency notes, commercial follow-up, and escalations.",
      template:
        "Subject: <action> by <DD MMM YYYY> - <topic>\nHello <name>,\nCurrent status: <green/amber/red and one-line summary>.\nWhat changed: <facts with dates>.\nDependency / required action: <specific ask and due date>.\nImpact if delayed: <specific effect>.\nOwner: <name>.\nNext checkpoint: <DD MMM YYYY, HH:MM IST>.\nRegards,\n<name and role>",
      guardrails: [
        "Do not hide the required action below the fold.",
        "If the message changes commitment level, re-check the claim wording before send.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
