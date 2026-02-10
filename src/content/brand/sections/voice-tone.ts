import type {
  DoDontExample,
  SectionHeader,
  TemplateSpec,
  TerminologyEntry,
  VoicePersona,
} from "../../../lib/types/brand";

export const VOICE_TONE_SECTION = {
  header: {
    id: "voice-tone",
    number: "08",
    title: "Voice & Tone",
    summary: "Write with calm authority, operational precision, and respectful directness.",
  },
  intro:
    "Voice remains stable across channels: factual, accountable, and non-dramatic. Tone adjusts by context while preserving professionalism and legal safety.",
  personas: [
    {
      trait: "Calm",
      description: "Clear under pressure, no emotional overstatement.",
      soundsLike: [
        "We identified the gap and proposed a dated mitigation plan.",
        "Current status is amber due to dependency delay.",
      ],
      avoid: ["Everything is broken", "No worries, all good"],
    },
    {
      trait: "Precise",
      description: "Specific wording with dates, owners, and scope boundaries.",
      soundsLike: [
        "Phase 1 closes on 18 Feb 2026 pending legal sign-off.",
      ],
      avoid: ["Soon", "Maybe", "As discussed"],
    },
  ],
  terminology: [
    {
      term: "Guaranteed",
      approved: "Targeted",
      avoid: ["Guaranteed"],
      notes: "Use guarantee only inside approved contractual wording.",
    },
    {
      term: "Seamless",
      approved: "Structured and managed",
      avoid: ["Seamless"],
      notes: "Avoid zero-risk implication.",
    },
  ],
  rules: [
    "Name facts first, interpretations second.",
    "Use plain language before domain jargon.",
    "Avoid hype, absolutes, and emotional intensifiers.",
    "Never imply legal or financial guarantees without contractual basis.",
  ],
  doDont: [
    {
      topic: "Escalation message",
      do: "We are currently delayed by one business day due to pending client approval. Revised plan attached.",
      dont: "This delay is not our fault and should not be an issue.",
      why: "Neutral, factual tone supports trust and accountability.",
    },
  ],
  templates: [
    {
      name: "Status update tone block",
      purpose: "Maintain consistent communication quality in weekly updates.",
      whenToUse: "Client weekly reports and internal dependency notes.",
      template:
        "Status: <green/amber/red>\nWhat changed: <fact>\nImpact: <timeline/scope/cost>\nOwner: <name>\nNext action: <dated action>\nSupport needed: <specific ask>",
      guardrails: [
        "No blame wording.",
        "Include one concrete next action.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  personas: readonly VoicePersona[];
  terminology: readonly TerminologyEntry[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
