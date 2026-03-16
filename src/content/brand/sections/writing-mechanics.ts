import type {
  SectionHeader,
  SectionSummaryStrip,
  TaskGuide,
} from "../../../lib/types/brand";

export const WRITING_MECHANICS_SECTION = {
  header: {
    id: "writing-mechanics",
    number: "11",
    title: "Writing & Messaging",
    summary: "Channel rules for fast, clear updates across WhatsApp, quotation notes, and profile copy.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You need a short written update and want to know the right channel and pattern quickly.",
    doThis: "Keep every message clear on status, owner, request, and timing for the channel you are using.",
    neverDoThis: "Do not write vague updates that hide the real action or use public-profile copy from memory.",
    whoNeedsThis: "Field/site teams, supervisors, HR/admin, sales/account, and any employee writing externally.",
  } satisfies SectionSummaryStrip,

  intro:
    "Most employee writing is short-form, not long-form. This section gives safe patterns for the channels people actually use during the day.",

  channelGuides: [
    {
      title: "WhatsApp update",
      channel: "WhatsApp",
      approvedScript:
        "Status: <green/amber/red>. What changed: <fact>. Required action: <specific ask>. Owner: <name>. Next update: <date/time>.",
      topRules: [
        "Use WhatsApp for short operational updates, not for new commercial commitments.",
        "If the issue affects scope, contract, or pricing, move it to email or escalation.",
        "Do not send long paragraphs when a short status block will do.",
      ],
      escalateWhen:
        "The message needs legal/commercial wording, a new commitment, or explanation beyond current scope.",
      relatedChecklist: ["Status is first.", "Owner is named.", "Next update is present."],
      fullGuideAnchor: "#16-pre-send-checklist",
    },
    {
      title: "Quotation cover note",
      channel: "Email / document note",
      approvedScript:
        "Please find the quotation for <scope>. This version covers <included items>. Assumptions: <list or reference>. Owner for follow-up: <name>. Next step requested: <specific action/date>.",
      topRules: [
        "State the scope before the amount or attachment details.",
        "Call out assumptions instead of hiding them inside the attachment.",
        "Do not add capability or promise language that is not in the quotation.",
      ],
      escalateWhen:
        "The quotation introduces new commercial terms, performance claims, or unapproved service descriptions.",
      relatedChecklist: ["Scope is stated.", "Assumptions are visible.", "Owner and next step are named."],
      fullGuideAnchor: "#12-documents",
    },
    {
      title: "LinkedIn or public-profile line",
      channel: "LinkedIn / profile",
      approvedScript:
        "Working with Vayasya on compliance-first industrial service operations across approved service areas.",
      topRules: [
        "Keep the wording professional and generic enough to stay accurate.",
        "Do not publish confidential client, scale, or performance claims in a personal profile.",
        "Use approved company description, not a creative rewrite.",
      ],
      escalateWhen:
        "A public post or profile needs new official company language or measured claims.",
      relatedChecklist: [
        "Identity is accurate.",
        "No unapproved claim added.",
        "No confidential detail included.",
      ],
      fullGuideAnchor: "#02-identity",
    },
  ] satisfies readonly TaskGuide[],

  rules: [
    "Choose the channel based on risk: short ops updates can be short; commercial and legal messages need formal channels.",
    "Keep paragraphs short and purpose-led.",
    "Use bullet structure for assumptions, exclusions, and requests whenever possible.",
  ],
} as const;
