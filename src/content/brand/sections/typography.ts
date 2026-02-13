import type {
  DownloadableAsset,
  DoDontExample,
  LanguageGuideItem,
  SectionHeader,
  TemplateSpec,
  TypeHierarchy,
  TypographyStack,
} from "../../../lib/types/brand";

export const TYPOGRAPHY_SECTION = {
  header: {
    id: "typography",
    number: "07",
    title: "Typography",
    summary: "Use Anek for display, Hind for narrative text, and JetBrains Mono for tabular reliability.",
  },
  intro:
    "Typography is a readability control with three mandatory systems: Anek for display hierarchy, Hind for narrative and UI copy, and JetBrains Mono for data-heavy contexts where character distinction is critical.",
  fontPack: {
    name: "Vayasya Font Pack",
    description: "Approved company font files bundled for local installation.",
    filePath: "/brand/fonts/vayasya-font-pack.zip",
    fileType: "ZIP",
    accessNote:
      "This package contains internal-use fonts. Keep distribution restricted to authorized company teams.",
  },
  stacks: [
    {
      label: "Display",
      family: "Anek",
      fallback: ["Hind", "Noto Sans", "Segoe UI", "sans-serif"],
      usage: "Headlines",
    },
    {
      label: "Serif",
      family: "Hind",
      fallback: ["Noto Sans", "Segoe UI", "sans-serif"],
      usage: "Body and labels",
    },
    {
      label: "Mono",
      family: "JetBrains Mono",
      fallback: ["ui-monospace", "monospace"],
      usage: "Tables and identifiers",
    },
  ],
  hierarchy: [
    {
      level: "Display",
      fontFamily: "Anek",
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "48px",
      usage: "Page titles",
    },
    {
      level: "H2",
      fontFamily: "Anek",
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "38px",
      usage: "Section headings",
    },
    {
      level: "Body",
      fontFamily: "Hind",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "30px",
      usage: "Primary long-form content",
    },
    {
      level: "Data",
      fontFamily: "JetBrains Mono",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "22px",
      usage: "Data values and table content",
    },
  ],
  languageControls: [
    {
      rule: "Keep body line length between 55 and 72 characters.",
      rationale: "Improves legibility on desktop and mobile layouts.",
      examples: ["Break paragraphs before dense clause chains."],
    },
    {
      rule: "Prefer sentence case for labels and helper text.",
      rationale: "Sentence case reduces visual noise.",
      examples: ["Use: Approval owner", "Avoid: APPROVAL OWNER"],
    },
  ],
  rules: [
    "Use Anek only for display hierarchy and high-emphasis identity copy.",
    "Do not replace Hind with fallback unless rendering error is confirmed.",
    "Use JetBrains Mono only for data and code-like values, not narrative body text.",
    "Do not introduce additional fonts beyond Anek, Hind, and JetBrains Mono.",
    "Avoid all-caps body paragraphs.",
    "Numeric tables must use tabular alignment and mono font.",
  ],
  doDont: [
    {
      topic: "Display hierarchy",
      do: "Use Anek for section headings and short, high-emphasis titles.",
      dont: "Set long body paragraphs in Anek.",
      why: "Separating display and narrative systems preserves hierarchy and readability.",
    },
    {
      topic: "Data table typography",
      do: "Use JetBrains Mono for invoice IDs and decimal values.",
      dont: "Use proportional text for table values needing alignment.",
      why: "Mono alignment reduces interpretation errors.",
    },
  ],
  templates: [
    {
      name: "Typographic spec note",
      purpose: "Capture type decisions in one implementation-ready block.",
      whenToUse: "Design and frontend handoff.",
      template:
        "Context: <screen/doc>\nDisplay style: <Anek level + weight>\nBody style: <Hind Body/Body Small>\nData style: <JetBrains Mono where applicable>\nLine length target: <55-72 chars>\nExceptions: <if any>",
      guardrails: [
        "Document any exceptions with reason and approver.",
        "Keep style count low to protect consistency.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  fontPack: DownloadableAsset;
  stacks: readonly TypographyStack[];
  hierarchy: readonly TypeHierarchy[];
  languageControls: readonly LanguageGuideItem[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
