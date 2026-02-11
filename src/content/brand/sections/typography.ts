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
    summary: "Use Hind for brand communication and JetBrains Mono for tabular data reliability.",
  },
  intro:
    "Typography is a readability control. Hind is mandatory for primary and display use. JetBrains Mono is reserved for data-heavy contexts where character distinction is critical.",
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
      label: "Primary",
      family: "Hind",
      fallback: ["Noto Sans", "Segoe UI", "sans-serif"],
      usage: "Body and labels",
    },
    {
      label: "Display",
      family: "Hind",
      fallback: ["Noto Sans", "Segoe UI", "sans-serif"],
      usage: "Headlines",
    },
    {
      label: "Data Mono",
      family: "JetBrains Mono",
      fallback: ["ui-monospace", "monospace"],
      usage: "Tables and identifiers",
    },
  ],
  hierarchy: [
    {
      level: "Display",
      fontFamily: "Hind",
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "48px",
      usage: "Page titles",
    },
    {
      level: "H2",
      fontFamily: "Hind",
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
    "Do not replace Hind with fallback unless rendering error is confirmed.",
    "Use JetBrains Mono only for data and code-like values, not narrative body text.",
    "Avoid all-caps body paragraphs.",
    "Numeric tables must use tabular alignment and mono font.",
  ],
  doDont: [
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
        "Context: <screen/doc>\nHeading style: <Display/H2/H3>\nBody style: <Body/Body Small>\nData style: <Data Mono where applicable>\nLine length target: <55-72 chars>\nExceptions: <if any>",
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
