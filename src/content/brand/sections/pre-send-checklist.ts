import type {
  ChecklistGroup,
  DoDontExample,
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
} from "../../../lib/types/brand";

export const PRE_SEND_CHECKLIST_SECTION = {
  header: {
    id: "pre-send-checklist",
    number: "16",
    title: "Pre-Send / Pre-Say / Pre-Share",
    summary: "Run the same final gate before you send, say, or share anything that represents Vayasya.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You are about to send a message, speak in a client setting, share a document, or post public-facing copy.",
    doThis: "Check identity, scope, claim safety, owner, and next step before release.",
    neverDoThis: "Do not assume a casual channel removes brand or claim risk.",
    whoNeedsThis: "All employees, especially field/site and client-facing teams.",
  } satisfies SectionSummaryStrip,

  intro:
    "This is the final quality gate for email, WhatsApp, quotations, decks, site-visit notes, and public-profile copy. If the item fails the gate, fix it before release.",

  checklist: [
    {
      title: "Identity and scope",
      items: [
        "Correct company or vertical name is used.",
        "Service description matches approved scope.",
        "No informal shorthand creates confusion about ownership.",
      ],
      passCondition: "The receiver will understand exactly who we are and what this item covers.",
    },
    {
      title: "Claims and safety",
      items: [
        "Any capability, timeline, or performance claim is supported or clearly qualified.",
        "No guarantee or comparative language appears without approval.",
        "If approval is required, it is already recorded.",
      ],
      passCondition: "No sentence creates a stronger promise than we can prove or own.",
    },
    {
      title: "Actionability",
      items: [
        "Owner is named.",
        "Required action is clear or intentionally marked as none.",
        "Next checkpoint, reply route, or next step is stated.",
      ],
      passCondition: "The receiver can act correctly without asking what happens next.",
    },
    {
      title: "Channel fit",
      items: [
        "The chosen channel is appropriate for the risk level.",
        "Verbal decisions are confirmed in writing if needed.",
        "Attachments, assets, or scripts are the approved versions.",
      ],
      passCondition: "The item is being shared in the right format and channel for the situation.",
    },
  ] satisfies readonly ChecklistGroup[],

  rules: [
    "This gate applies to messages, spoken representations, shared files, and public-profile copy.",
    "If the item fails one check, fix it before release rather than adding a verbal caveat later.",
    "If the item mixes scope, legal, or commercial risk with urgency, escalate instead of rushing it out.",
  ],

  doDont: [
    {
      topic: "Fast channel mistake",
      do: "Pause the WhatsApp send if the message creates a new commitment and move it to the approved review path.",
      dont: "Send the risky message first because the channel feels informal.",
      why: "Informal channels still create formal brand and claim risk.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Final release block",
      purpose: "Record the last check before a message, file, or script is used externally.",
      whenToUse: "Any client-facing email, quotation, deck, site-visit summary, or high-risk message.",
      template:
        "Item: <name>\nChannel: <email/WhatsApp/call/deck/document/profile>\nIdentity checked: <yes/no>\nClaims checked: <yes/no>\nOwner named: <yes/no>\nNext step stated: <yes/no>\nApproval needed: <yes/no>\nReleased by: <name>\nTimestamp: <DD MMM YYYY HH:MM IST>",
      guardrails: [
        "If approval is needed, do not mark the item released.",
        "If the channel is verbal, note the follow-up record channel.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
