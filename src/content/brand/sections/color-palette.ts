import type {
  ColorSwatch,
  DoDontExample,
  Scenario,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";
import { COLOR_TOKENS } from "../fundamentals";

export const COLOR_PALETTE_SECTION = {
  header: {
    id: "color-palette",
    number: "06",
    title: "Color Palette",
    summary: "Apply the harmonized token system to keep brand hierarchy, readability, and semantic clarity intact.",
  },
  intro:
    "Use the token system exactly. Neutrals carry operational readability, one vertical or master-brand color carries ownership context, and semantic/data-viz colors carry meaning.",
  swatches: COLOR_TOKENS,
  scenarios: [
    {
      context: "Legacy palette migration",
      risk: "Keeping legacy hex values produces inconsistent identity across artifacts.",
      recommended:
        "Replace old gold #C9A24A with --vy-gold-500 (#DAA236) and old Seva #C97A2B with --vy-seva-600 (#BA511A).",
    },
    {
      context: "UI role mapping",
      risk: "Using decorative tones for structural UI roles breaks consistency between docs and product.",
      recommended:
        "Use bg.canvas/bg.subtle/bg.muted, border.default, text.primary/text.secondary, brand.primary and focus.ring aliases for implementation.",
    },
    {
      context: "Chart-heavy reporting",
      risk: "Out-of-order palette usage reduces category separation and weakens scan speed.",
      recommended:
        "Use data-viz colors in fixed order from --vy-chart-1 through --vy-chart-8 unless business semantics require a specific sequence.",
    },
  ],
  rules: [
    "No new brand colors without governance approval.",
    "Primary composition target: 70% neutrals, 20% single vertical/master color, 10% semantic or chart highlights.",
    "Use gold-500 for fills/highlight surfaces and gold-700 for text/icons on white.",
    "On gold surfaces, use dark text (--vy-brand-on-primary / neutral-900), never white.",
    "Use semantic tokens only for semantic meaning, not decoration.",
    "Use exactly one vertical accent per artifact unless explicitly multi-vertical and labeled.",
    "Do not use gradients that mix two vertical accents.",
  ],
  doDont: [
    {
      topic: "State colors",
      do: "Use danger state color for rejected item status.",
      dont: "Use decorative accent color for rejected item status.",
      why: "Semantic mapping must remain consistent across products.",
    },
    {
      topic: "Gold usage",
      do: "Use gold-500 as a fill with neutral-900 text on top.",
      dont: "Use white text on gold fills or use gold shades as body text.",
      why: "This preserves readability and keeps gold premium instead of dusty.",
    },
  ],
  templates: [
    {
      name: "Color handoff block",
      purpose: "Share exact token usage in design-engineering handoff.",
      whenToUse: "Before implementation of new screens or collateral.",
      template:
        "Surface: <component name>\nBackground role: <bg.canvas/bg.subtle/bg.muted>\nText role: <text.primary/text.secondary>\nAccent role: <brand.primary or one vertical token>\nOn-accent text: <brand.onPrimary>\nFocus ring: <focus.ring>\nSemantic states: <success/warning/info/danger/pending>\nChart order used: <chart-1 ... chart-8>\nAccessibility note: <contrast checked yes/no>",
      guardrails: [
        "Reference tokens, never raw hex in approvals.",
        "Capture migration mapping if replacing old colors (#C9A24A or #C97A2B).",
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
