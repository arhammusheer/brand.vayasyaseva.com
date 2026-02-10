import type {
  DoDontExample,
  LanguageGuideItem,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const WRITING_MECHANICS_SECTION = {
  header: {
    id: "writing-mechanics",
    number: "10",
    title: "Writing Mechanics",
    summary: "Standardize writing structure, punctuation, and formatting for operational clarity.",
  },
  intro:
    "Writing mechanics are shared controls to reduce ambiguity. Follow this section for sentence length, punctuation, capitalization, and India-first formatting conventions.",
  mechanics: [
    {
      rule: "Use one idea per sentence for procedural instructions.",
      rationale: "Reduces execution errors during handoffs.",
      examples: [
        "Step 1: Validate KYC documents.",
        "Step 2: Send confirmation by 17:30 IST.",
      ],
    },
    {
      rule: "Prefer bullets for conditions and exceptions.",
      rationale: "Improves scan speed during legal and operations review.",
      examples: [
        "Condition A: Data received before cutoff.",
        "Exception: National holiday calendar applies.",
      ],
    },
    {
      rule: "Use India-first standards: DD MMM YYYY, 24-hour IST, Indian number grouping.",
      rationale: "Prevents date and number interpretation errors.",
      examples: ["10 Feb 2026", "17:30 IST", "INR 1,25,000"],
    },
  ],
  rules: [
    "Target 55-72 characters per line for body copy where layout allows.",
    "Limit paragraphs to 3-4 sentences unless legal clause requires length.",
    "Use serial commas in multi-item legal or technical lists.",
    "Spell out first mention of abbreviations followed by acronym in parentheses.",
  ],
  doDont: [
    {
      topic: "Date format",
      do: "Review meeting scheduled on 10 Feb 2026 at 14:00 IST.",
      dont: "Review meeting on 2/10/26 at 2 PM.",
      why: "India-first date and 24-hour time reduce locale confusion.",
    },
  ],
  templates: [
    {
      name: "Instruction block",
      purpose: "Provide procedural instruction without ambiguity.",
      whenToUse: "Runbooks, SOPs, and execution notes.",
      template:
        "Objective: <one sentence>\nScope: <who/what is included>\nPreconditions: <list>\nSteps: <numbered actions>\nOutput: <expected result>\nEscalation: <owner and contact>",
      guardrails: [
        "Each step starts with an action verb.",
        "Include one explicit output statement.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  mechanics: readonly LanguageGuideItem[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
