import type {
  DoDontExample,
  Scenario,
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
} from "../../../lib/types/brand";

export const IMAGERY_SECTION = {
  header: {
    id: "imagery",
    number: "08",
    title: "Imagery",
    summary: "Use imagery only when it adds proof, context, or operational meaning.",
  },
  summaryStrip: {
    useThisWhen: "You are choosing photos, screenshots, or visual evidence for a deck, document, or page.",
    doThis: "Prefer real operational context, masked proof, or approved source imagery.",
    neverDoThis: "Do not use decorative stock visuals to fake credibility or emotion.",
    whoNeedsThis: "Design/marketing first, plus anyone choosing or approving client-facing visuals.",
  } satisfies SectionSummaryStrip,
  intro:
    "Imagery should support understanding of service environments, outcomes, and processes. Avoid abstract visuals that do not add operational meaning.",
  employeeDefaults: [
    "If the image does not prove or explain something, leave it out.",
    "If the image contains client-sensitive information, mask it or do not use it.",
  ],
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
  summaryStrip: SectionSummaryStrip;
  intro: string;
  employeeDefaults: readonly string[];
  rules: readonly string[];
  scenarios: readonly Scenario[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
