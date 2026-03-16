import type {
  BannedPhrase,
  DoDontExample,
  SectionHeader,
  SectionSummaryStrip,
  TaskGuide,
  TemplateSpec,
  TerminologyEntry,
  VoicePersona,
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

  personas: [
    {
      trait: "Calm",
      description: "Steady and non-dramatic even when the situation is difficult.",
      soundsLike: [
        "We identified the issue and the next action is scheduled.",
        "Current status is amber due to a pending dependency.",
      ],
      avoid: [
        "Everything is broken",
        "No worries, all good",
        "This is a disaster",
      ],
    },
    {
      trait: "Specific",
      description: "Uses real scope, owner, and date language instead of vague placeholders.",
      soundsLike: [
        "Owner: Rakesh. Next update: 16:30 IST.",
        "The current scope covers housekeeping and deployment support only.",
      ],
      avoid: [
        "Soon",
        "ASAP",
        "We can handle everything",
      ],
    },
    {
      trait: "Accountable",
      description: "Owns the message and names the next action clearly.",
      soundsLike: [
        "We missed the checkpoint. Priya will send the revised schedule by 17:00 IST.",
        "This needs approval before we can confirm it externally.",
      ],
      avoid: [
        "Someone will check",
        "They said it should be fine",
        "Not our fault",
      ],
    },
    {
      trait: "Respectful",
      description: "Professional in person, on calls, and in written escalation.",
      soundsLike: [
        "Thank you for flagging this. Here is the updated plan.",
        "We see the constraint and are adjusting the approach accordingly.",
      ],
      avoid: [
        "As I already told you",
        "Obviously",
        "You should have",
      ],
    },
  ] satisfies readonly VoicePersona[],

  scripts: [
    {
      title: "Phone intro",
      channel: "Phone",
      approvedScript:
        "Hello, this is <name> from Vayasya <vertical or team if relevant>. I am calling regarding <topic>. Current status is <status>. I need to confirm <specific point> and the next step is <action/time>.",
      topRules: [
        "State your name, company, and purpose within the first sentence.",
        "Keep the update factual and time-bound.",
        "If the conversation moves into new commitments, move it to the owner or approved channel.",
      ],
      doDont: [
        {
          topic: "Opening a client call",
          do: "Hello, this is Aman from Vayasya Seva regarding today's housekeeping review.",
          dont: "Hi, calling from Seva side about some things.",
          why: "The approved version makes identity and context clear immediately.",
        },
      ],
      escalateWhen:
        "The other side asks for pricing, scope change, guarantee language, or a decision you do not own.",
      relatedChecklist: [
        "Identity is correct",
        "Purpose is clear",
        "Owner and next step are named",
      ],
      fullGuideAnchor: "#15-meetings",
    },
    {
      title: "First meeting or client-visit intro",
      channel: "In person",
      approvedScript:
        "I am <name> from Vayasya <relevant vertical or function>. We support this engagement through <approved service description>. My role today is <purpose>, and I will close the visit with the agreed next action.",
      topRules: [
        "Introduce role and purpose, not just the company name.",
        "Mention only the relevant approved service.",
        "End the interaction with one clear next step or owner.",
      ],
      doDont: [
        {
          topic: "Visit opening",
          do: "I am Ritu from Vayasya Seva. We support this site's workforce deployment and housekeeping review today.",
          dont: "I am from Vayasya. We handle everything here.",
          why: "Relevant scope language is stronger and safer than broad claims.",
        },
      ],
      escalateWhen:
        "The conversation expands into new commercial scope, contract questions, or service areas not confirmed yet.",
      relatedChecklist: [
        "Correct introduction used",
        "Appearance and ID are compliant",
        "Visit closeout is prepared",
      ],
      fullGuideAnchor: "#15-meetings",
    },
    {
      title: "Capability explanation",
      channel: "Call / meeting / message",
      approvedScript:
        "For this requirement, the relevant Vayasya services are <approved services>. We can confirm the exact scope, ownership, and operating method after reviewing the site or requirement details.",
      topRules: [
        "Start with relevant approved services only.",
        "Use scope-confirmation language for anything not already defined.",
        "Do not use leadership or guarantee claims to sound confident.",
      ],
      doDont: [
        {
          topic: "Service explanation",
          do: "For this requirement, the relevant services are workforce deployment and housekeeping support.",
          dont: "We can cover any industrial requirement you have.",
          why: "Scope-specific wording is more credible than broad capability claims.",
        },
      ],
      escalateWhen:
        "A new service line, public statement, or comparative claim is being introduced.",
      relatedChecklist: [
        "Approved service map used",
        "No unverified claim added",
        "Scope boundary stated",
      ],
      fullGuideAnchor: "#02-identity",
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
      doDont: [
        {
          topic: "Delay communication",
          do: "Current status is amber. Access approval is still pending. Impact: tomorrow's start may move by one day. Owner: Deepak. Next action: updated confirmation by 18:00 IST.",
          dont: "There might be some issue tomorrow, but we are trying our best.",
          why: "The approved version makes the issue actionable instead of vague.",
        },
      ],
      escalateWhen:
        "The delay affects cost, scope, contract terms, or client trust beyond routine operations.",
      relatedChecklist: [
        "Impact is specific",
        "Owner is named",
        "Next checkpoint is included",
      ],
      fullGuideAnchor: "#16-pre-send-checklist",
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
      doDont: [
        {
          topic: "Recruiter description",
          do: "Vayasya supports industrial service operations with compliance-first controls.",
          dont: "Vayasya is a platform connecting everyone to jobs quickly.",
          why: "The approved version matches the actual company model.",
        },
      ],
      escalateWhen:
        "A recruiter or HR user needs new public copy, a fresh company story, or candidate-facing claims about scale or expansion.",
      relatedChecklist: [
        "Identity is accurate",
        "No marketplace language used",
        "Only approved services mentioned",
      ],
      fullGuideAnchor: "#02-identity",
    },
    {
      title: "What we do / do not do",
      channel: "Call / meeting / deck / message",
      approvedScript:
        "What we do: <approved service or operating support>. What we do not do in this context: <out-of-scope item>. If needed, we can review the scope and confirm the right next step.",
      topRules: [
        "Use the phrase 'in this context' to keep scope practical.",
        "Do not overexplain the out-of-scope item.",
        "Offer review and confirmation, not improvised commitment.",
      ],
      doDont: [
        {
          topic: "Scope boundary",
          do: "For this scope, we support housekeeping operations. Civil work would need a separate scope review.",
          dont: "We can probably add civil work also if needed.",
          why: "Boundary-first wording prevents accidental commitments.",
        },
      ],
      escalateWhen:
        "The client is asking for adjacent services, revised commercials, or a public-facing statement of broader capability.",
      relatedChecklist: [
        "Relevant service named",
        "Out-of-scope item stated cleanly",
        "Escalation path is clear",
      ],
      fullGuideAnchor: "#12-documents",
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
    {
      term: "Partner",
      approved: "Client / stakeholder / approved partner",
      avoid: ["Partner (when meaning client)"],
      notes: "Use partner only when the relationship is actually a partnership.",
    },
  ] satisfies readonly TerminologyEntry[],

  bannedPhrases: [
    {
      phrase: "No problem",
      reason: "It sounds casual and can minimize the issue.",
      alternative: "Use 'Certainly' or restate the next action directly.",
    },
    {
      phrase: "Kindly do the needful",
      reason: "It is unclear and outdated.",
      alternative: "Use 'Please <specific action> by <date/time>'.",
    },
    {
      phrase: "We can handle everything",
      reason: "It creates scope and claim risk.",
      alternative: "State the approved services relevant to the request.",
    },
    {
      phrase: "ASAP",
      reason: "It hides the real deadline.",
      alternative: "Use a date and time.",
    },
  ] satisfies readonly BannedPhrase[],

  rules: [
    "Lead with facts before interpretation.",
    "Name owner and next action whenever the message is operational.",
    "Use one of the approved scripts before free-writing in a high-pressure situation.",
    "Keep blame, emotion, and comparison language out of routine updates.",
    "If the right answer depends on approval, say so directly.",
  ],

  doDont: [
    {
      topic: "Escalation tone",
      do: "Current status is amber due to pending client input. Revised plan attached.",
      dont: "This delay is not our fault, so please manage expectations.",
      why: "The approved version stays factual and relationship-safe.",
    },
    {
      topic: "Scope question",
      do: "We can confirm that after reviewing the approved scope and owner.",
      dont: "Yes, that should be fine.",
      why: "Approval-aware language is safer than casual agreement.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Operational status block",
      purpose: "Give teams one safe structure for live updates across channels.",
      whenToUse: "WhatsApp, email, shift handoff, and routine client updates.",
      template:
        "Current status: <green/amber/red>\nWhat changed: <fact>\nImpact: <specific>\nOwner: <name>\nNext action: <action>\nNext update: <date/time>",
      guardrails: [
        "Do not leave the owner blank.",
        "Use a date or time in every operational update.",
        "If the issue affects scope or contract terms, escalate immediately.",
      ],
    },
    {
      name: "Issue acknowledgment",
      purpose: "Acknowledge a problem without over-apologizing or losing control of the message.",
      whenToUse: "Delay, gap, or client-facing mistake correction.",
      template:
        "We acknowledge <what happened>. Impact: <specific impact>. Owner: <name>. Next action: <specific fix>. Revised checkpoint: <date/time>.",
      guardrails: [
        "Use one acknowledgment, then move to resolution.",
        "Do not speculate or assign blame in the same note.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
