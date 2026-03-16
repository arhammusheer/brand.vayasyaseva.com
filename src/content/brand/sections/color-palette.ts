import type {
  ColorLanePreview,
  ColorMisuseExample,
  ColorNeed,
  ColorPaletteReference,
  ColorQuickAction,
  ColorSwatch,
  Scenario,
  SectionHeader,
  SectionSummaryStrip,
  VisualReferenceLinkMeta,
} from "../../../lib/types/brand";
import { COLOR_TOKENS } from "../fundamentals";

const swatchByToken = new Map<string, ColorSwatch>(
  COLOR_TOKENS.map((swatch) => [swatch.token, swatch] as const),
);

function getSwatch(token: string): ColorSwatch {
  const swatch = swatchByToken.get(token);

  if (!swatch) {
    throw new Error(`Missing color token: ${token}`);
  }

  return swatch;
}

function pickSwatches(tokens: readonly string[]) {
  return tokens.map(getSwatch);
}

function swatchesByRole(role: string) {
  return COLOR_TOKENS.filter((swatch) => swatch.role === role);
}

export const COLOR_ROLE_ORDER = [
  "Neutral",
  "Gold",
  "Seva",
  "Setu",
  "Kaushal",
  "Prabandh",
  "Semantic",
  "Data Visualization",
  "Role Mapping",
  "Compatibility",
] as const;

const COLOR_SCENARIOS = [
  {
    context: "Legacy palette migration",
    risk: "Keeping legacy hex values creates visible drift between current templates, UI work, and new brand artifacts.",
    recommended:
      "Replace legacy values with current approved tokens and confirm the closest role match before release.",
  },
  {
    context: "UI role mapping",
    risk: "Using accent colors for structural UI roles makes the interface harder to scan and breaks consistency with the brand system.",
    recommended:
      "Map background, border, text, focus, and semantic states to the approved role aliases instead of raw decorative picks.",
  },
  {
    context: "Chart and reporting usage",
    risk: "Mixing arbitrary chart colors weakens comparison speed and makes repeated reports harder to trust.",
    recommended:
      "Use the approved chart sequence first and reserve semantic colors for actual states, not data categories.",
  },
] as const satisfies readonly Scenario[];

export const COLOR_PALETTE_SECTION = {
  header: {
    id: "color-palette",
    number: "06",
    title: "Color Palette",
    summary: "Use neutrals for most of the surface, one owner accent for ownership, and semantic colors only for meaning.",
  } satisfies SectionHeader,
  summaryStrip: {
    useThisWhen:
      "You are choosing, reviewing, or approving color on a branded asset and need the safe default fast.",
    doThis: "Keep most of the surface neutral, let one owner accent lead, and reserve semantic colors for real status meaning.",
    neverDoThis: "Do not invent colors, mix multiple ownership accents casually, or decorate routine work with status colors.",
    whoNeedsThis: "All employees for the quick chooser; token-level detail is for design, product, and engineering work.",
  } satisfies SectionSummaryStrip,
  intro:
    "Most people only need three color rules: neutrals carry readability, one owner accent carries brand ownership, and semantic colors carry operational meaning.",
  referenceHref: "/visual/color-palette",
  referenceTitle: "Open full color reference",
  referenceAudience: "Design, product, and engineering teams",
  employeeDefaults: [
    "If you are not designing from scratch, stay inside approved templates and exported assets.",
    "Use one clear brand owner per artifact. Do not mix vertical accents to make a routine piece feel richer.",
    "Treat semantic colors as states and alerts, not decoration.",
  ],
  quickActions: [
    {
      id: "owner-color",
      title: "Need the approved brand owner color",
      description: "Check the owner-accent lane before you choose gold or a vertical-specific accent.",
      href: "/visual/color-palette#lane-owner-accents",
      ctaLabel: "Open owner accents",
      icon: "owner",
      badge: "Brand ownership",
    },
    {
      id: "semantic-status",
      title: "Need semantic or status colors",
      description: "Use the semantic lane for success, info, warning, danger, and pending states only.",
      href: "/visual/color-palette#lane-semantic",
      ctaLabel: "Open semantic colors",
      icon: "semantic",
      badge: "Meaning only",
    },
    {
      id: "chart-report",
      title: "Need chart or report colors",
      description: "Open the data-viz lane before choosing colors for charts, dashboards, or repeated reporting.",
      href: "/visual/color-palette#lane-data-viz",
      ctaLabel: "Open chart colors",
      icon: "chart",
      badge: "Reporting",
    },
    {
      id: "token-catalog",
      title: "Open full swatch wall",
      description: "Open the stripped-back swatch wall when you need every approved color in one place.",
      href: "/visual/color-palette#color-swatches",
      ctaLabel: "Open swatches",
      icon: "catalog",
      badge: "Deep reference",
    },
  ] satisfies readonly ColorQuickAction[],
  previewGroups: [
    {
      id: "foundation-neutrals",
      title: "Foundation neutrals",
      previewKind: "neutrals",
      summary: "Most of the artifact should live in neutrals so reading, spacing, and hierarchy stay calm and legible.",
      hardRule: "Let neutrals carry the majority of the surface before you add any accent at all.",
      swatches: pickSwatches([
        "--vy-neutral-0",
        "--vy-neutral-50",
        "--vy-neutral-100",
        "--vy-neutral-600",
        "--vy-neutral-900",
      ]),
      badge: "Default lane",
    },
    {
      id: "one-owner-accent",
      title: "One owner accent",
      previewKind: "owner-accents",
      summary: "Use gold for master-brand ownership or one vertical family when a specific vertical clearly owns the piece.",
      hardRule: "Never mix multiple owner accents in one routine artifact unless the piece is explicitly joint.",
      swatches: pickSwatches([
        "--vy-gold-500",
        "--vy-seva-600",
        "--vy-setu-600",
        "--vy-kaushal-600",
        "--vy-prabandh-600",
      ]),
      badge: "Ownership only",
    },
    {
      id: "semantic-meaning",
      title: "Semantic meaning colors",
      previewKind: "semantic",
      summary: "Use semantic colors only when the color itself is carrying a real status or alert meaning.",
      hardRule: "Do not borrow success, warning, or danger colors just to add visual energy.",
      swatches: pickSwatches([
        "--vy-success",
        "--vy-info",
        "--vy-warning",
        "--vy-danger",
        "--vy-pending",
      ]),
      badge: "States and alerts",
    },
  ] satisfies readonly ColorLanePreview[],
  commonNeeds: [
    {
      need: "Decks and proposals",
      useThis: "Neutral foundation with one owner accent leading headings, dividers, or key emphasis.",
      note: "Keep the page mostly calm; the accent should signal ownership, not repaint the whole slide.",
    },
    {
      need: "Product and UI surfaces",
      useThis: "Role-mapped background, border, text, focus, and semantic aliases.",
      note: "Use structural aliases and semantic roles before you reach for decorative brand colors.",
    },
    {
      need: "Charts and reports",
      useThis: "Approved data-viz sequence, with semantic colors reserved for actual state meaning.",
      note: "Use chart colors for category separation, not for danger/success language unless the data itself is semantic.",
    },
    {
      need: "Status and alert states",
      useThis: "Semantic tokens only.",
      note: "If the state is not actually success, warning, danger, info, or pending, do not color it like one.",
    },
  ] satisfies readonly ColorNeed[],
  misuseChecks: [
    {
      id: "mixed-owners",
      title: "Mixed ownership accents",
      previewKind: "mixed-owners",
      issue: "Using multiple vertical accents in one routine artifact makes ownership look unclear and improvised.",
      correction: "Pick one owner accent or stay with the master-brand gold for the whole piece.",
    },
    {
      id: "semantic-decoration",
      title: "Semantic colors used decoratively",
      previewKind: "semantic-decoration",
      issue: "Status colors lose meaning when they are used as decorative highlights or section styling.",
      correction: "Move decorative emphasis back to neutrals and the approved owner accent.",
    },
    {
      id: "low-contrast",
      title: "Low-contrast accent text",
      previewKind: "low-contrast",
      issue: "Accent-heavy surfaces with weak text contrast create polish problems and slow down scanning.",
      correction: "Return the surface to neutral or use a higher-contrast approved foreground.",
    },
    {
      id: "local-color",
      title: "Unapproved local color",
      previewKind: "local-color",
      issue: "Adding a random local shade creates a second palette language that breaks handoff consistency.",
      correction: "Stay inside the approved token set and escalate if a real gap exists.",
    },
  ] satisfies readonly ColorMisuseExample[],
  swatches: COLOR_TOKENS,
  scenarios: COLOR_SCENARIOS,
  rules: [
    "Use neutrals for the majority of the surface.",
    "Use one owner accent per artifact unless the piece is explicitly joint.",
    "Use semantic colors only for states, alerts, and operational meaning.",
    "Do not invent local colors or mix vertical accents in gradients.",
    "Open the full color reference for token-level implementation work.",
  ],
} as const satisfies {
  header: SectionHeader;
  summaryStrip: SectionSummaryStrip;
  intro: string;
  referenceHref: VisualReferenceLinkMeta["referenceHref"];
  referenceTitle: VisualReferenceLinkMeta["referenceTitle"];
  referenceAudience?: VisualReferenceLinkMeta["referenceAudience"];
  employeeDefaults: readonly string[];
  quickActions: readonly ColorQuickAction[];
  previewGroups: readonly ColorLanePreview[];
  commonNeeds: readonly ColorNeed[];
  misuseChecks: readonly ColorMisuseExample[];
  swatches: readonly ColorSwatch[];
  scenarios: readonly Scenario[];
  rules: readonly string[];
};

export const COLOR_PALETTE_REFERENCE = {
  specialistQuickActions: [
    {
      id: "jump-neutrals",
      title: "Jump to neutrals",
      description: "Review the foundation lane before choosing surface, border, or text behavior.",
      href: "#lane-neutrals",
      ctaLabel: "Open neutrals",
      icon: "neutral",
      badge: "Foundation",
    },
    {
      id: "jump-owner-accents",
      title: "Jump to owner accents",
      description: "Go straight to gold and vertical ownership guidance before choosing an accent family.",
      href: "#lane-owner-accents",
      ctaLabel: "Open owner accents",
      icon: "owner",
      badge: "Ownership",
    },
    {
      id: "jump-semantic",
      title: "Jump to semantic colors",
      description: "Use the semantic lane when you need states, alerts, and meaning-bearing colors.",
      href: "#lane-semantic",
      ctaLabel: "Open semantic colors",
      icon: "semantic",
      badge: "States",
    },
    {
      id: "jump-role-mapping",
      title: "Jump to role-mapping aliases",
      description: "Use the alias section for UI and compatibility handoff instead of guessing from raw brand tones.",
      href: "#role-mapping-compatibility",
      ctaLabel: "Open aliases",
      icon: "alias",
      badge: "Implementation",
    },
  ] satisfies readonly ColorQuickAction[],
  filterOrder: COLOR_ROLE_ORDER,
  laneSummaries: [
    {
      id: "lane-neutrals",
      title: "Neutrals",
      previewKind: "neutrals",
      summary: "Neutrals carry the canvas, panels, borders, and reading hierarchy that make the rest of the system usable.",
      hardRule: "Let neutrals do the structural work before adding accent color to a surface.",
      swatches: pickSwatches([
        "--vy-neutral-0",
        "--vy-neutral-100",
        "--vy-neutral-200",
        "--vy-neutral-600",
        "--vy-neutral-900",
      ]),
      badge: "Foundation",
    },
    {
      id: "lane-owner-accents",
      title: "Owner accents",
      previewKind: "owner-accents",
      summary: "Gold is the master-brand owner. Vertical accents are used only when a specific vertical clearly owns the material.",
      hardRule: "Choose one owner accent family for a routine artifact, not several.",
      swatches: pickSwatches([
        "--vy-gold-500",
        "--vy-seva-600",
        "--vy-setu-600",
        "--vy-kaushal-600",
        "--vy-prabandh-600",
      ]),
      badge: "Ownership",
    },
    {
      id: "lane-semantic",
      title: "Semantic colors",
      previewKind: "semantic",
      summary: "Semantic tokens are for actual operational meaning such as success, info, warning, danger, and pending states.",
      hardRule: "If the color is not carrying state meaning, it should not come from the semantic lane.",
      swatches: pickSwatches([
        "--vy-success",
        "--vy-info",
        "--vy-warning",
        "--vy-danger",
        "--vy-pending",
      ]),
      badge: "Meaning",
    },
    {
      id: "lane-data-viz",
      title: "Data visualization",
      previewKind: "data-viz",
      summary: "The chart sequence exists for repeated reporting and category separation without borrowing status semantics.",
      hardRule: "Use the approved sequence first and keep semantic colors out of category charts unless the data itself is semantic.",
      swatches: pickSwatches([
        "--vy-chart-1",
        "--vy-chart-2",
        "--vy-chart-3",
        "--vy-chart-4",
        "--vy-chart-5",
        "--vy-chart-6",
      ]),
      badge: "Reports",
    },
    {
      id: "lane-role-mapping",
      title: "Role mapping aliases",
      previewKind: "role-mapping",
      summary: "These aliases map the palette to UI and implementation roles so teams can hand off by token purpose instead of raw color guessing.",
      hardRule: "Use role aliases for implementation when the surface needs background, border, text, focus, or primary-brand behavior.",
      swatches: pickSwatches([
        "--vy-bg-canvas",
        "--vy-border-default",
        "--vy-text-primary",
        "--vy-brand-primary",
        "--vy-focus-ring",
      ]),
      badge: "Product / engineering",
    },
    {
      id: "lane-compatibility",
      title: "Compatibility aliases",
      previewKind: "compatibility",
      summary: "Compatibility aliases exist so older surfaces and shared utilities can stay stable while still mapping back to the current palette.",
      hardRule: "Do not create new work on top of compatibility aliases when a current role token already exists.",
      swatches: pickSwatches([
        "--vy-bg",
        "--vy-fg",
        "--vy-muted",
        "--vy-border",
        "--vy-gold-ui",
      ]),
      badge: "Legacy support",
    },
  ] satisfies readonly ColorLanePreview[],
  scenarioGuidance: COLOR_SCENARIOS,
  reviewerNotes: [
    "Check that most of the surface is still neutral and readable before judging the accent work.",
    "Reject routine artifacts that mix multiple owner accents without an explicitly joint context.",
    "Reject semantic colors used as decoration rather than state meaning.",
    "Check contrast on accent-led surfaces before approving the asset.",
  ],
  implementationNotes: [
    "Reference tokens in handoff and implementation work instead of ad hoc hex guesses.",
    "Do not mix ownership accents casually; pick one family per artifact unless the piece is intentionally joint.",
    "Semantic colors carry meaning and should stay separate from decorative emphasis.",
    "Compatibility aliases exist for older surfaces, but they should not become a second palette language.",
  ],
} as const satisfies ColorPaletteReference;

export const COLOR_ROLE_GROUPS = {
  roleMapping: swatchesByRole("Role Mapping"),
  compatibility: swatchesByRole("Compatibility"),
} as const;
