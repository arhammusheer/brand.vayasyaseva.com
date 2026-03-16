import type {
  DoDontExample,
  LanguageGuideItem,
  SectionHeader,
  SectionSummaryStrip,
  TaskGuide,
  TemplateSpec,
} from "../../../lib/types/brand";

export const WRITING_MECHANICS_SECTION = {
  header: {
    id: "writing-mechanics",
    number: "11",
    title: "Writing & Messaging",
    summary: "Channel rules for fast, clear updates across WhatsApp, chat, quotation notes, and profile copy.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You need a short written update and want to know the right channel and pattern quickly.",
    doThis: "Keep every message clear on status, owner, request, and timing for the channel you are using.",
    neverDoThis: "Do not write vague updates that hide the real action or use social/profile copy from memory.",
    whoNeedsThis: "Field/site teams, supervisors, HR/admin, sales/account, and any employee writing externally.",
  } satisfies SectionSummaryStrip,

  intro:
    "Most employee writing is short-form, not long-form. This section gives safe patterns for the channels people actually use during the day.",

  mechanics: [
    {
      rule: "Put the current status or purpose in the first line.",
      rationale: "Short channels get skimmed. The receiver should know the point immediately.",
      examples: [
        "Status: amber - access approval pending.",
        "Purpose: sharing quotation for review.",
      ],
    },
    {
      rule: "Use one request and one timing statement per operational message.",
      rationale: "Too many asks in a short message create confusion and missed action.",
      examples: [
        "Please confirm by 16:00 IST.",
        "Next update at 18:30 IST.",
      ],
    },
    {
      rule: "Use India-first formats for dates, time, and numbers.",
      rationale: "Consistent formatting avoids ambiguity across teams and clients.",
      examples: ["22 Mar 2026", "17:30 IST", "INR 1,25,000"],
    },
  ] satisfies readonly LanguageGuideItem[],

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
      doDont: [
        {
          topic: "Operational WhatsApp",
          do: "Status: amber. Gate pass still pending. Required action: please confirm access by 15:00 IST. Owner: Kiran. Next update: 16:00 IST.",
          dont: "We are still trying. Please see and revert soon.",
          why: "The approved version is actionable and complete.",
        },
      ],
      escalateWhen:
        "The message needs legal/commercial wording, a new commitment, or explanation beyond current scope.",
      relatedChecklist: [
        "Status is first",
        "Owner is named",
        "Next update is present",
      ],
      fullGuideAnchor: "#16-pre-send-checklist",
    },
    {
      title: "Internal chat or quick handoff",
      channel: "Internal chat",
      approvedScript:
        "Need: <what is needed>. Why: <impact>. Owner: <name>. By: <time>. Escalate if not resolved by: <time>.",
      topRules: [
        "Use internal chat for coordination, not for creating undocumented external promises.",
        "Write the impact, not just the task.",
        "If the ask is client-facing, prepare the external wording separately.",
      ],
      doDont: [
        {
          topic: "Internal handoff",
          do: "Need: attendance sheet confirmation. Why: client update due at 17:00 IST. Owner: Mehul. By: 16:15 IST.",
          dont: "Please check the sheet ASAP.",
          why: "Impact and timing make the request easier to act on.",
        },
      ],
      escalateWhen:
        "The blocker affects external commitments, compliance, or payment terms.",
      relatedChecklist: [
        "Need is clear",
        "Impact is clear",
        "Deadline is present",
      ],
      fullGuideAnchor: "#04-operating-pillars",
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
      doDont: [
        {
          topic: "Quotation note",
          do: "Please find the quotation for housekeeping support at Site A. This version covers the attached scope and listed assumptions.",
          dont: "Sharing our best quotation. We can adjust anything if needed.",
          why: "The approved version protects scope and avoids casual commercial promises.",
        },
      ],
      escalateWhen:
        "The quotation introduces new commercial terms, performance claims, or unapproved service descriptions.",
      relatedChecklist: [
        "Scope is stated",
        "Assumptions are visible",
        "Owner and next step are named",
      ],
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
      doDont: [
        {
          topic: "Profile copy",
          do: "Working with Vayasya on compliance-first industrial service operations.",
          dont: "Building India's most advanced industrial workforce platform.",
          why: "Approved profile copy should stay true to current positioning.",
        },
      ],
      escalateWhen:
        "A public post or profile needs new official company language or measured claims.",
      relatedChecklist: [
        "Identity is accurate",
        "No unapproved claim added",
        "No confidential detail included",
      ],
      fullGuideAnchor: "#02-identity",
    },
  ] satisfies readonly TaskGuide[],

  rules: [
    "Choose the channel based on risk: short ops updates can be short; commercial and legal messages need formal channels.",
    "Keep paragraphs short and purpose-led.",
    "Use bullet structure for assumptions, exclusions, and requests whenever possible.",
    "Spell out the first mention of any internal abbreviation in external communication.",
  ],

  doDont: [
    {
      topic: "Short update quality",
      do: "Status: green. Document shared. Owner: Arjun. Next checkpoint: 14:00 IST.",
      dont: "Done. Please check.",
      why: "The approved version is traceable and usable later.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Short operational message",
      purpose: "Give teams one reusable pattern for short-form channels.",
      whenToUse: "WhatsApp, internal chat, quick email notes, and routine follow-ups.",
      template:
        "Status / purpose: <one line>\nWhat changed: <fact>\nRequired action: <specific ask or 'None'>\nOwner: <name>\nNext update: <date/time>",
      guardrails: [
        "Do not leave out owner or timing.",
        "If the message changes scope or commitment level, move it to the correct review channel.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
