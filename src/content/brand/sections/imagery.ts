import type {
  DoDontExample,
  Scenario,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const IMAGERY_SECTION = {
  header: {
    id: "imagery",
    number: "07",
    title: "Imagery",
    summary: "Use imagery as evidence and context, not decoration.",
  },
  intro:
    "Imagery should support understanding of service environments, outcomes, and processes. Avoid abstract visuals that do not add operational meaning.",
  rules: [
    "Prefer real operational scenes, interfaces, or context-rich photography.",
    "Use images with clear rights and documented source attribution.",
    "Avoid stereotypes and exaggerated success imagery.",
    "When showing people, ensure role relevance and consent status.",
    "Keep overlays minimal to preserve clarity.",
  ],
  scenarios: [
    {
      context: "Client case narrative",
      risk: "Using unrelated stock imagery can weaken credibility.",
      recommended: "Use process screenshots or authentic environment photography.",
    },
    {
      context: "Dark background slides",
      risk: "Low-contrast logo placement over busy photo can fail readability.",
      recommended: "Place logo on a calm plate and test at presentation scale.",
    },
  ],
  doDont: [
    {
      topic: "Proof imagery",
      do: "Use dashboard excerpt with sensitive fields masked.",
      dont: "Use random handshake stock photo for service reliability claim.",
      why: "Evidence-based visuals better support operational messaging.",
    },
  ],
  templates: [
    {
      name: "Image caption standard",
      purpose: "Ensure every published image contributes usable context.",
      whenToUse: "Reports, decks, and website modules.",
      template:
        "Image purpose: <what this image proves>\nSource: <internal/client/licensed>\nDate captured: <DD MMM YYYY>\nSensitivity check: <PII removed yes/no>\nCaption: <single sentence with context>",
      guardrails: [
        "Never publish imagery containing unapproved client identifiers.",
        "If source is third-party, record license reference.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  rules: readonly string[];
  scenarios: readonly Scenario[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
