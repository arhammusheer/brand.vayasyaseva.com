import type {
  BannedPhrase,
  DoDontExample,
  SectionHeader,
  TemplateSpec,
  TerminologyEntry,
  VoicePersona,
} from "../../../lib/types/brand";

export const VOICE_TONE_SECTION = {
  header: {
    id: "voice-tone",
    number: "09",
    title: "Voice & Tone",
    summary: "Write with calm authority, operational precision, and respectful directness.",
  } satisfies SectionHeader,

  intent: "Voice is the consistent personality behind all Vayasya communication. Tone adapts to context while voice remains stable. Getting this wrong undermines trust and creates confusion about who we are.",

  intro: "Voice remains stable across channels: factual, accountable, and non-dramatic. Tone adjusts by context while preserving professionalism and legal safety.",

  personas: [
    {
      trait: "Calm",
      description: "Clear under pressure, no emotional overstatement.",
      soundsLike: [
        "We identified the gap and proposed a dated mitigation plan.",
        "Current status is amber due to dependency delay.",
        "The deadline was missed by two days. Here is our recovery plan.",
      ],
      avoid: [
        "Everything is broken",
        "No worries, all good",
        "This is a disaster",
        "Don't panic but...",
      ],
    },
    {
      trait: "Precise",
      description: "Specific wording with dates, owners, and scope boundaries.",
      soundsLike: [
        "Phase 1 closes on 18 Feb 2026 pending legal sign-off.",
        "The migration affects 1,248 records in the customer database.",
        "Response time target: 24 business hours.",
      ],
      avoid: [
        "Soon",
        "Maybe",
        "As discussed",
        "ASAP",
        "A few days",
        "Sometime next week",
      ],
    },
    {
      trait: "Accountable",
      description: "Names owners and takes responsibility explicitly.",
      soundsLike: [
        "Rahul (Ops Lead) owns the timeline adjustment.",
        "We missed the deadline. Priya will send the revised schedule by 5 PM IST.",
        "This delay is on our team. Updated ETA attached.",
      ],
      avoid: [
        "Someone will look into it",
        "It should be ready",
        "They said it was fine",
        "Not our fault",
      ],
    },
    {
      trait: "Respectful",
      description: "Professional and culturally appropriate in all contexts.",
      soundsLike: [
        "We appreciate the feedback and will incorporate it into revision 2.",
        "Thank you for flagging this. We are addressing it now.",
        "The requirement has changed. Here is our adjusted approach.",
      ],
      avoid: [
        "As I already mentioned",
        "Obviously",
        "You should have",
        "That's not what we agreed",
      ],
    },
  ] satisfies readonly VoicePersona[],

  terminology: [
    {
      term: "Guaranteed",
      approved: "Targeted / Committed (with SLA reference)",
      avoid: ["Guaranteed", "Assured", "Promised"],
      notes: "Use 'guaranteed' only in legally reviewed contractual text.",
    },
    {
      term: "Seamless",
      approved: "Structured / Managed / Coordinated",
      avoid: ["Seamless", "Effortless", "Zero-friction"],
      notes: "Implies zero risk, which is never accurate.",
    },
    {
      term: "Best-in-class",
      approved: "Competitive / Well-established",
      avoid: ["Best-in-class", "Industry-leading", "World-class"],
      notes: "Comparative claims require documented evidence.",
    },
    {
      term: "Always",
      approved: "Typically / In most cases / By default",
      avoid: ["Always", "Never", "Every time"],
      notes: "Absolutes invite exceptions. Use qualified language.",
    },
    {
      term: "Immediately",
      approved: "Within [X business hours] / By [date and time]",
      avoid: ["Immediately", "Right away", "Instantly"],
      notes: "Specify response windows instead of implying instant action.",
    },
    {
      term: "Partners",
      approved: "Clients / Customers / Stakeholders",
      avoid: ["Partners (when meaning clients)"],
      notes: "Reserve 'partner' for formal partnership agreements.",
    },
    {
      term: "Solution",
      approved: "Service / System / Approach / Implementation",
      avoid: ["Solution", "Platform (unless accurate)"],
      notes: "Be specific about what is actually delivered.",
    },
    {
      term: "Leverage",
      approved: "Use / Apply / Build on",
      avoid: ["Leverage", "Utilize", "Synergize"],
      notes: "Prefer simple verbs over corporate jargon.",
    },
  ] satisfies readonly TerminologyEntry[],

  bannedPhrases: [
    {
      phrase: "To be honest",
      reason: "Implies prior dishonesty.",
      alternative: "Remove entirely or use 'In our assessment'.",
    },
    {
      phrase: "No problem",
      reason: "Implies there could have been a problem.",
      alternative: "Use 'Certainly' or 'Of course'.",
    },
    {
      phrase: "Going forward",
      reason: "Filler phrase with no information.",
      alternative: "Use 'From [date]' or 'Starting next week'.",
    },
    {
      phrase: "At the end of the day",
      reason: "Cliché that weakens the point.",
      alternative: "State the conclusion directly.",
    },
    {
      phrase: "Per our last conversation",
      reason: "Can sound passive-aggressive.",
      alternative: "Use 'As agreed on [date]' or 'Following our call'.",
    },
    {
      phrase: "Please be advised",
      reason: "Overly formal and distancing.",
      alternative: "Use direct statement or 'Note that'.",
    },
    {
      phrase: "Kindly do the needful",
      reason: "Outdated and unclear.",
      alternative: "Use 'Please [specific action]'.",
    },
    {
      phrase: "Circle back",
      reason: "Corporate jargon.",
      alternative: "Use 'Follow up on [date]' or 'Discuss again'.",
    },
  ] satisfies readonly BannedPhrase[],

  rules: [
    "Name facts first, interpretations second.",
    "Use plain language before domain jargon.",
    "Avoid hype, absolutes, and emotional intensifiers.",
    "Never imply legal or financial guarantees without contractual basis.",
    "Write for skim-readers: front-load key information.",
    "Match formality to audience: more formal for executives, conversational for peers.",
  ],

  doDont: [
    {
      topic: "Escalation message",
      do: "We are currently delayed by one business day due to pending client approval. Revised plan attached.",
      dont: "This delay is not our fault and should not be an issue.",
      why: "Neutral, factual tone supports trust and accountability.",
    },
    {
      topic: "Meeting request",
      do: "Can we schedule 30 minutes on Thursday to review the scope changes? Agenda attached.",
      dont: "We need to talk about some things. When are you free?",
      why: "Specific ask with context respects the recipient's time.",
    },
    {
      topic: "Deadline communication",
      do: "The report is due by 17:00 IST on 15 Feb 2026. Please confirm receipt.",
      dont: "Please send the report ASAP. Thanks!",
      why: "Concrete deadline removes ambiguity.",
    },
    {
      topic: "Handling disagreement",
      do: "We see the timeline differently. Here is our analysis and a proposed alternative.",
      dont: "That timeline doesn't work. You need to reconsider.",
      why: "Collaborative language maintains relationship while addressing the issue.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Status update tone block",
      purpose: "Maintain consistent communication quality in weekly updates.",
      whenToUse: "Client weekly reports and internal dependency notes.",
      template:
        "Status: <green/amber/red>\nWhat changed: <fact>\nImpact: <timeline/scope/cost>\nOwner: <name>\nNext action: <dated action>\nSupport needed: <specific ask or 'None'>",
      guardrails: [
        "No blame wording.",
        "Include one concrete next action.",
        "Support needed field is never blank.",
      ],
    },
    {
      name: "Apology structure",
      purpose: "Acknowledge issues without over-apologizing.",
      whenToUse: "When Vayasya has caused a delay or error.",
      template:
        "We acknowledge <what happened>. This affected <impact>. We are <action taken>. The revised <timeline/deliverable> is <specific>.",
      guardrails: [
        "One apology per message maximum.",
        "Focus on resolution, not repeated regret.",
        "Include owner and timeline for fix.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
};
