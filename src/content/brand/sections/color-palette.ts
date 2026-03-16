import type {
  ColorSwatch,
  Scenario,
  SectionHeader,
  SectionSummaryStrip,
  VisualReferenceLinkMeta,
} from "../../../lib/types/brand";
import { COLOR_TOKENS } from "../fundamentals";

export const COLOR_PALETTE_SECTION = {
  header: {
    id: "color-palette",
    number: "06",
    title: "Color Palette",
    summary: "For non-design staff: do not choose colors manually; use approved templates and assets.",
  },
  summaryStrip: {
    useThisWhen:
      "You are using or reviewing a branded asset and need to know whether color decisions are allowed.",
    doThis: "Stay inside approved templates and one approved accent context.",
    neverDoThis: "Do not invent colors, mix vertical accents casually, or decorate routine material.",
    whoNeedsThis: "All employees; token details are for design, marketing, and implementation work.",
  } satisfies SectionSummaryStrip,
  intro:
    "Use the token system exactly. Neutrals carry operational readability, one vertical or master-brand color carries ownership context, and semantic colors carry meaning.",
  referenceHref: "/visual/color-palette",
  referenceTitle: "Open full color reference",
  referenceAudience: "Design, product, and engineering teams",
  employeeDefaults: [
    "If you are not designing from scratch, use approved templates and do not touch the palette.",
    "Use one clear brand owner per artifact. Do not mix vertical colors to make something feel richer.",
    "Treat semantic colors as meaning, not decoration.",
  ],
  swatches: COLOR_TOKENS,
  scenarios: [
    {
      context: "Legacy palette migration",
      risk: "Keeping legacy hex values produces inconsistent identity across artifacts.",
      recommended:
        "Replace old colors with the approved current token set instead of preserving local legacy shades.",
    },
    {
      context: "UI role mapping",
      risk: "Using decorative tones for structural UI roles breaks consistency between docs and product.",
      recommended:
        "Use structural background, border, text, and semantic tokens by role instead of ad hoc color choices.",
    },
    {
      context: "Chart-heavy reporting",
      risk: "Out-of-order palette usage reduces category separation and weakens scan speed.",
      recommended:
        "Use the approved chart sequence unless business semantics require a specific ordering.",
    },
  ],
  rules: [
    "No new brand colors without governance approval.",
    "Use one vertical accent or the master-brand accent per artifact unless the piece is explicitly joint.",
    "Use semantic tokens only for semantic meaning, not decoration.",
    "Do not use gradients that mix two vertical accents.",
    "Reference tokens in implementation work instead of inventing raw hex usage locally.",
  ],
} as const satisfies {
  header: SectionHeader;
  summaryStrip: SectionSummaryStrip;
  intro: string;
  referenceHref: VisualReferenceLinkMeta["referenceHref"];
  referenceTitle: VisualReferenceLinkMeta["referenceTitle"];
  referenceAudience?: VisualReferenceLinkMeta["referenceAudience"];
  employeeDefaults: readonly string[];
  swatches: readonly ColorSwatch[];
  scenarios: readonly Scenario[];
  rules: readonly string[];
};
