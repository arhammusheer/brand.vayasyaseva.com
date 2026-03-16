import type {
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
} from "../../../lib/types/brand";

export const MEETINGS_SECTION = {
  header: {
    id: "meetings",
    number: "15",
    title: "Meetings, Calls & Site Visits",
    summary: "Run meetings and site interactions with clear purpose, approved identity, and action-ready closeout.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You are going into a meeting, call, or site visit and need to know how to represent Vayasya correctly.",
    doThis: "Open with role and purpose, stay inside approved scope, and end with one clear next step.",
    neverDoThis: "Do not arrive casually, speak beyond your authority, or leave without a recorded outcome.",
    whoNeedsThis: "Field/site teams, supervisors, sales/account, leadership, and client-facing staff.",
  } satisfies SectionSummaryStrip,

  intro:
    "The brand shows up most visibly in live interaction. Meetings and site visits should feel prepared, disciplined, and easy to trust.",

  siteVisitRules: [
    "Carry the correct ID and use approved uniform or appearance guidance for the context.",
    "Introduce yourself with name, company, role, and purpose within the first interaction.",
    "Use only the approved service description relevant to the visit.",
    "Do not treat site observations as approved commitments until the owner confirms them.",
    "Close every visit with the next step, owner, and timing.",
  ],

  callRules: [
    "Start calls with identity and purpose, not small talk that delays the point.",
    "If a decision is made verbally, confirm it in writing after the call.",
    "If the conversation becomes commercial, contractual, or out-of-scope, move to the correct owner.",
  ],

  rules: [
    "Share agenda or purpose in advance when the interaction is planned.",
    "Use one owner per action item.",
    "Keep meeting and visit notes factual; do not record speculation as decision.",
    "Escalate unclear commitments before they become assumed commitments.",
  ],

  templates: [
    {
      name: "Site visit closeout note",
      purpose: "Turn live interaction into a usable record.",
      whenToUse: "After site visits, review meetings, and important client calls.",
      template:
        "Visit / meeting: <name>\nDate and time: <DD MMM YYYY, HH:MM IST>\nPurpose: <why we met>\nKey observations: <facts>\nAgreed next step: <action>\nOwner: <name>\nCheckpoint: <date/time>",
      guardrails: [
        "Do not turn observations into commitments without owner confirmation.",
        "Send the note on the same day when the interaction affects delivery.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
