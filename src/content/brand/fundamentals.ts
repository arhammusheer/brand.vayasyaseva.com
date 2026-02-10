import type {
  ColorSwatch,
  LanguageGuideItem,
  LogoVariant,
  Scenario,
  TypeHierarchy,
  TypographyStack,
} from "../../lib/types/brand";

export const BRAND_NAME = {
  parent: "Vayasya",
  vertical: "Vayasya Seva",
  full: "Vayasya Seva, a Vayasya vertical",
} as const;

export const VERTICALS = [
  "Vayasya Seva",
  "Vayasya Setu",
  "Vayasya Kaushal",
  "Vayasya Prabandh",
] as const;

export const FONT_STACKS = [
  {
    label: "Primary",
    family: "Hind",
    fallback: ["Noto Sans", "Segoe UI", "sans-serif"],
    usage: "Body copy, UI labels, navigation, and long-form handbook text.",
  },
  {
    label: "Display",
    family: "Hind",
    fallback: ["Noto Sans", "Segoe UI", "sans-serif"],
    usage: "Headlines, section numerals, and key identity lockups.",
  },
  {
    label: "Data Mono",
    family: "JetBrains Mono",
    fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
    usage: "Data tables, identifiers, and revision metadata.",
  },
] as const satisfies readonly TypographyStack[];

export const COLOR_TOKENS = [
  {
    token: "--vy-bg",
    hex: "#FFFFFF",
    role: "Base",
    usage: "Primary page background.",
  },
  {
    token: "--vy-fg",
    hex: "#111111",
    role: "Base",
    usage: "Default foreground for standard interface text.",
  },
  {
    token: "--vy-text-strong",
    hex: "#000000",
    role: "Base",
    usage: "High-emphasis headings and key legal labels.",
  },
  {
    token: "--vy-muted",
    hex: "#F6F7F8",
    role: "Support",
    usage: "Muted surfaces, note panels, and secondary backgrounds.",
  },
  {
    token: "--vy-muted-fg",
    hex: "#4B5563",
    role: "Support",
    usage: "Low-emphasis text, helper copy, and table notes.",
  },
  {
    token: "--vy-border",
    hex: "#E5E7EB",
    role: "Support",
    usage: "Input borders, separators, and card outlines.",
  },
  {
    token: "--vy-gold-ui",
    hex: "#C9A24A",
    role: "Identity",
    usage: "Logo-adjacent accents and premium UI indicators only.",
  },
  {
    token: "--vy-seva",
    hex: "#C97A2B",
    role: "Vertical Accent",
    usage: "Primary accent for Vayasya Seva materials.",
  },
  {
    token: "--vy-setu",
    hex: "#2F3E5C",
    role: "Vertical Accent",
    usage: "Primary accent for Vayasya Setu materials.",
  },
  {
    token: "--vy-kaushal",
    hex: "#2E6B4F",
    role: "Vertical Accent",
    usage: "Primary accent for Vayasya Kaushal materials.",
  },
  {
    token: "--vy-prabandh",
    hex: "#3A3A3A",
    role: "Vertical Accent",
    usage: "Primary accent for Vayasya Prabandh materials.",
  },
  {
    token: "--vy-success",
    hex: "#2E6B4F",
    role: "Semantic",
    usage: "Success states and completed statuses.",
  },
  {
    token: "--vy-warning",
    hex: "#C97A2B",
    role: "Semantic",
    usage: "Risk prompts and attention-needed statuses.",
  },
  {
    token: "--vy-info",
    hex: "#2F3E5C",
    role: "Semantic",
    usage: "Informational labels and contextual status chips.",
  },
  {
    token: "--vy-danger",
    hex: "#B42318",
    role: "Semantic",
    usage: "Error states and prohibited action indicators.",
  },
] as const satisfies readonly ColorSwatch[];

export const LOGO_RULES = {
  lockupHierarchy: {
    parentWordmark: "Vayasya (larger, semibold)",
    verticalWordmark: "Vertical name (smaller, regular or medium)",
  },
  colorControl: [
    "Use source logo asset as supplied.",
    "Do not recolor logo mark or wordmark.",
    "Gold logo appearance is mandatory where the master logo is used.",
  ],
  variants: [
    {
      id: "master-light",
      label: "Master logo on light background",
      filePath: "/public/brand/placeholders/master-logo-light.svg",
      background: "light",
      minWidthPx: 120,
      clearSpaceRule: "At least 1x height of the V in Vayasya around all sides.",
    },
    {
      id: "master-dark",
      label: "Master logo on dark background",
      filePath: "/public/brand/placeholders/master-logo-dark.svg",
      background: "dark",
      minWidthPx: 120,
      clearSpaceRule: "At least 1x height of the V in Vayasya around all sides.",
    },
  ] as const satisfies readonly LogoVariant[],
  prohibited: [
    "No drop shadows, glow, bevel, or gradient overlays.",
    "No stretching, condensing, skewing, or rotation.",
    "No placing logo over visually busy image regions without a calm plate.",
  ],
} as const;

export const COLOR_USAGE_RULES = [
  {
    context: "Default interface surfaces",
    risk: "Using accent colors as full backgrounds lowers readability and creates visual noise.",
    recommended:
      "Use --vy-bg for base, --vy-muted for panels, and reserve accent colors for highlights under 20% surface coverage.",
  },
  {
    context: "Vertical-specific documents",
    risk: "Mixing vertical accents can imply wrong business entity ownership.",
    recommended:
      "Use exactly one vertical accent per document unless the content is explicitly multi-vertical and labeled accordingly.",
  },
  {
    context: "Status communication",
    risk: "Using decorative colors for risk/compliance messages can invert meaning.",
    recommended:
      "Use semantic tokens: success, warning, info, and danger for status; do not substitute decorative accents.",
  },
  {
    context: "Logo proximity",
    risk: "Competing gold-like UI color blocks can reduce logo authority.",
    recommended:
      "Use --vy-gold-ui sparingly around logo-adjacent controls; never simulate or tint the logo itself.",
  },
] as const satisfies readonly Scenario[];

const TYPE_HIERARCHY = [
  {
    level: "Display",
    fontFamily: "Hind",
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "48px",
    letterSpacing: "0",
    usage: "Top-level page headers and major section titles.",
  },
  {
    level: "H2",
    fontFamily: "Hind",
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "38px",
    letterSpacing: "0",
    usage: "Section headers and major content blocks.",
  },
  {
    level: "H3",
    fontFamily: "Hind",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "0",
    usage: "Subsections and structured guidance headings.",
  },
  {
    level: "Body",
    fontFamily: "Hind",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0",
    usage: "Primary handbook copy and explanatory text.",
  },
  {
    level: "Body Small",
    fontFamily: "Hind",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
    letterSpacing: "0",
    usage: "Helper notes, captions, and form instructions.",
  },
  {
    level: "Data",
    fontFamily: "JetBrains Mono",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0",
    usage: "Data tables, IDs, and machine-readable values.",
  },
] as const satisfies readonly TypeHierarchy[];

const LANGUAGE_GUIDE = [
  {
    rule: "Write in active voice with named owner and action.",
    rationale: "Operational text must identify accountability clearly.",
    examples: [
      "Use: The account manager sends the revised scope by 5:00 PM IST.",
      "Avoid: Revised scope will be sent soon.",
    ],
  },
  {
    rule: "Limit sentence length to 22 words unless a legal clause requires more.",
    rationale: "Shorter sentences reduce misinterpretation in client communications.",
    examples: [
      "Use two short sentences for obligation and timeline.",
      "Split long legal context into bullet points with conditions.",
    ],
  },
  {
    rule: "Use India-first formatting for dates, time, and numbers.",
    rationale: "Consistent formatting reduces ambiguity across internal and client teams.",
    examples: [
      "Date: 10 Feb 2026",
      "Time: 17:30 IST",
      "Number grouping: 12,34,567",
    ],
  },
  {
    rule: "Use title case for section headings and sentence case for body labels.",
    rationale: "Predictable capitalization improves scanability in long documents.",
    examples: [
      "Heading: Claims Discipline",
      "Label: Approval owner",
    ],
  },
] as const satisfies readonly LanguageGuideItem[];

export const TYPO_RULES = {
  hierarchy: TYPE_HIERARCHY,
  language: LANGUAGE_GUIDE,
  lineLength: {
    idealBodyCharacters: "55-72 characters per line",
    maxBodyCharacters: "80 characters per line",
    tableCellWrapThreshold: "32-40 characters per cell before wrapping",
  },
  capitalization: {
    headings: "Title Case",
    bodyLabels: "Sentence case",
    acronyms: "Uppercase only when institutionally recognized (GST, SLA, NDA)",
    mixedCaseProhibited: "Do not use random in-word caps for emphasis",
  },
  indiaFirstFormats: {
    datePrimary: "DD MMM YYYY (example: 10 Feb 2026)",
    dateNumeric: "DD/MM/YYYY (example: 10/02/2026)",
    time: "24-hour format with zone (example: 17:30 IST)",
    numberGrouping: "Indian system (example: 12,34,567)",
    currency: "INR with symbol and grouping (example: INR 1,25,000 or Rs 1,25,000)",
    decimalPolicy: "Two decimal places for contractual and finance documents",
  },
} as const;
