import type {
  SectionHeader,
  SectionSummaryStrip,
  TaskGuide,
  TerminologyEntry,
} from "../../../lib/types/brand";

export const VOICE_TONE_SECTION = {
  header: {
    id: "voice-tone",
    number: "09",
    title: "Voice & Tone",
    summary: "Use calm, specific, and professional wording that works in real client and site situations.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You are speaking, messaging, or writing on behalf of Vayasya and need safe wording quickly.",
    doThis: "Lead with facts, owner, next action, and timing. Use the approved scripts before you improvise.",
    neverDoThis: "Do not use hype, blame, emotional wording, or casual guarantees.",
    whoNeedsThis: "Field/site teams, supervisors, sales/account, HR/admin, leadership, and anyone client-facing.",
  } satisfies SectionSummaryStrip,

  intro:
    "Vayasya should sound calm under pressure, specific about facts, and disciplined about ownership. Use the scripts below as the default operating language for common situations.",

  rules: [
    "Lead with facts before interpretation.",
    "Name the owner and next action whenever the message is operational.",
    "Keep blame, emotion, and comparison language out of routine updates.",
    "If the right answer depends on approval, say so directly.",
  ],

  scripts: [
    {
      title: "Client or site intro",
      channel: "Phone / in person",
      approvedScript:
        "Hello, this is <name> from Vayasya <vertical or team if relevant>. I am here regarding <topic>. My role today is <purpose>, and I will close with the agreed next action.",
      topRules: [
        "State your name, company, and purpose in the first sentence.",
        "Mention only the relevant approved service or visit purpose.",
        "End the interaction with one clear next step or owner.",
      ],
      escalateWhen:
        "The conversation expands into pricing, contract terms, new scope, or capability beyond the approved service map.",
      relatedChecklist: [
        "Identity is correct.",
        "Purpose is clear.",
        "Next step or owner is named.",
      ],
      fullGuideAnchor: "#15-meetings",
    },
    {
      title: "Delay update",
      channel: "Email / WhatsApp / call",
      approvedScript:
        "Current status is amber. <What changed>. Impact: <specific delay or risk>. Owner: <name>. Next action: <specific action> by <date/time>.",
      topRules: [
        "Acknowledge the issue early.",
        "State impact and owner in the same message.",
        "Use one apology at most, then move to resolution.",
      ],
      escalateWhen:
        "The delay affects cost, scope, contract terms, or client trust beyond routine operations.",
      relatedChecklist: [
        "Impact is specific.",
        "Owner is named.",
        "Next checkpoint is included.",
      ],
      fullGuideAnchor: "#16-pre-send-checklist",
    },
    {
      title: "Capability explanation",
      channel: "Call / meeting / message",
      approvedScript:
        "For this requirement, the relevant Vayasya services are <approved services>. In this context, we do not confirm anything beyond the approved scope until the requirement and owner are reviewed.",
      topRules: [
        "Start with relevant approved services only.",
        "State the out-of-scope boundary cleanly.",
        "Do not use leadership or guarantee claims to sound confident.",
      ],
      escalateWhen:
        "A new service line, public statement, or comparative claim is being introduced.",
      relatedChecklist: [
        "Approved service map used.",
        "No unverified claim added.",
        "Scope boundary stated.",
      ],
      fullGuideAnchor: "#02-identity",
    },
    {
      title: "Recruiter explanation",
      channel: "Phone / message / in person",
      approvedScript:
        "Vayasya is a compliance-first industrial services company. We support operational environments through approved services such as workforce deployment, housekeeping, warehouses and logistics, civil and fabrication works, maintenance, and equipment or material support.",
      topRules: [
        "Do not describe Vayasya as a marketplace or job app.",
        "Keep the description industrial and operational.",
        "Avoid unapproved scale or growth claims.",
      ],
      escalateWhen:
        "A recruiter or HR user needs new public copy or candidate-facing claims about scale, performance, or expansion.",
      relatedChecklist: [
        "Identity is accurate.",
        "No marketplace language used.",
        "Only approved services mentioned.",
      ],
      fullGuideAnchor: "#02-identity",
    },
  ] satisfies readonly TaskGuide[],

  terminology: [
    {
      term: "Guaranteed",
      approved: "Targeted / committed if contractually stated",
      avoid: ["Guaranteed", "Assured", "Promised"],
      notes: "Use only when there is contractual basis and approved wording.",
    },
    {
      term: "Best / leading / unmatched",
      approved: "Structured / dependable / compliance-first",
      avoid: ["Best-in-class", "Industry-leading", "Unmatched"],
      notes: "Comparative claims require measured evidence.",
    },
    {
      term: "ASAP / soon",
      approved: "By <date/time> / next update at <time>",
      avoid: ["ASAP", "Soon", "Shortly"],
      notes: "Specific timing is stronger than vague urgency.",
    },
  ] satisfies readonly TerminologyEntry[],
} as const;
