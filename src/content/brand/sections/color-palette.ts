import type {
  ColorSwatch,
  DoDontExample,
  Scenario,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const COLOR_PALETTE_SECTION = {
  header: {
    id: "color-palette",
    number: "05",
    title: "Color Palette",
    summary: "Apply tokens with predictable roles to preserve readability and brand ownership.",
  },
  intro:
    "Use the token system exactly. Base colors carry readability; accent colors signal vertical context; semantic colors communicate state. Do not create ad hoc colors.",
  swatches: [
    { token: "--vy-bg", hex: "#FFFFFF", role: "Base", usage: "Background" },
    { token: "--vy-fg", hex: "#111111", role: "Base", usage: "Primary text" },
    {
      token: "--vy-text-strong",
      hex: "#000000",
      role: "Base",
      usage: "Strong emphasis text",
    },
    { token: "--vy-muted", hex: "#F6F7F8", role: "Support", usage: "Muted surfaces" },
    {
      token: "--vy-muted-fg",
      hex: "#4B5563",
      role: "Support",
      usage: "Secondary text",
    },
    {
      token: "--vy-border",
      hex: "#E5E7EB",
      role: "Support",
      usage: "Borders and dividers",
    },
    {
      token: "--vy-gold-ui",
      hex: "#C9A24A",
      role: "Identity",
      usage: "Premium accents",
    },
    {
      token: "--vy-seva",
      hex: "#C97A2B",
      role: "Vertical",
      usage: "Vayasya Seva accent",
    },
    {
      token: "--vy-setu",
      hex: "#2F3E5C",
      role: "Vertical",
      usage: "Vayasya Setu accent",
    },
    {
      token: "--vy-kaushal",
      hex: "#2E6B4F",
      role: "Vertical",
      usage: "Vayasya Kaushal accent",
    },
    {
      token: "--vy-prabandh",
      hex: "#3A3A3A",
      role: "Vertical",
      usage: "Vayasya Prabandh accent",
    },
    {
      token: "--vy-success",
      hex: "#2E6B4F",
      role: "Semantic",
      usage: "Success state",
    },
    {
      token: "--vy-warning",
      hex: "#C97A2B",
      role: "Semantic",
      usage: "Warning state",
    },
    { token: "--vy-info", hex: "#2F3E5C", role: "Semantic", usage: "Info state" },
    { token: "--vy-danger", hex: "#B42318", role: "Semantic", usage: "Error state" },
  ],
  scenarios: [
    {
      context: "Performance dashboard",
      risk: "Too many accent colors may imply multiple business owners.",
      recommended: "Use one vertical accent plus semantic status colors only.",
    },
    {
      context: "Proposal documents",
      risk: "Low-contrast body text can cause reading errors in review.",
      recommended: "Keep body text on --vy-bg with --vy-fg or --vy-text-strong only.",
    },
  ],
  rules: [
    "No new brand colors without governance approval.",
    "Accent coverage should remain below 20% of total visible surface.",
    "Use semantic tokens only for semantic meaning, not decoration.",
    "Do not use gradients that mix two vertical accents.",
  ],
  doDont: [
    {
      topic: "State colors",
      do: "Use --vy-danger for rejected item status.",
      dont: "Use --vy-seva for rejected item status.",
      why: "Semantic mapping must remain consistent across products.",
    },
  ],
  templates: [
    {
      name: "Color handoff block",
      purpose: "Share exact token usage in design-engineering handoff.",
      whenToUse: "Before implementation of new screens or collateral.",
      template:
        "Surface: <component name>\nBackground token: <token>\nText token: <token>\nAccent token: <token>\nSemantic states: <success/warning/info/danger mapping>\nAccessibility note: <contrast checked yes/no>",
      guardrails: [
        "Reference tokens, never raw hex in approvals.",
        "Record one owner for final sign-off.",
      ],
    },
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  swatches: readonly ColorSwatch[];
  scenarios: readonly Scenario[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
