import type {
  VisualReferenceNavItem,
  VisualReferencePage,
} from "../../lib/types/brand";

export const VISUAL_REFERENCE_NAV_ITEMS = [
  {
    href: "/visual",
    label: "Overview",
    description: "Start here to choose the right visual reference topic.",
  },
  {
    href: "/visual/logo-usage",
    label: "Logo Usage",
    description: "Download logo packs, compare approved marks, and review placement and misuse checks.",
  },
  {
    href: "/visual/color-palette",
    label: "Color Palette",
    description: "Copy-ready swatch wall for approved brand, semantic, chart, and alias colors.",
  },
  {
    href: "/visual/typography",
    label: "Typography",
    description: "Download the font pack, compare family roles, and review surface and hierarchy guidance.",
  },
  {
    href: "/visual/imagery",
    label: "Imagery",
    description: "Source controls, proof-first scenarios, and acceptable visual evidence.",
  },
] as const satisfies readonly VisualReferenceNavItem[];

export const VISUAL_REFERENCE_HUB = {
  title: "Visual Reference",
  summary:
    "Specialist guidance for logo, color, typography, and imagery decisions used in marketing, design, product, and engineering work.",
  intro:
    "Use the handbook root for employee-safe defaults. Use this visual reference when you are making, reviewing, or implementing branded visuals and need the deeper system rules.",
  specialistAudience:
    "Primary audience: marketing, design, product, and engineering teams, plus anyone approving branded visuals.",
  rules: [
    "Use the handbook root when you only need the safe default.",
    "Use these pages when you are choosing, implementing, or reviewing visual details.",
    "Do not invent new visual rules locally; route exceptions through governance.",
  ],
} as const;

export const VISUAL_REFERENCE_PAGES = [
  {
    slug: "logo-usage",
    href: "/visual/logo-usage",
    navLabel: "Logo Usage",
    title: "Logo Usage",
    summary:
      "Reference-first logo page for approved packs, master and vertical marks, placement rules, and misuse review.",
    pageIntro:
      "Use this page when you need the full approved logo set, surface-specific pack choices, or a faster review path than the handbook root provides.",
    specialistAudience: "Marketing, design, product, and engineering teams.",
    handbookHref: "/#05-logo-usage",
    guidanceBlocks: [
      {
        title: "Approved downloads",
        description: "Get the SVG pack, PNG pack, or full media kit without scanning a large asset wall.",
      },
      {
        title: "Master and vertical marks",
        description: "Compare the approved master pair and the full vertical set in one place.",
      },
      {
        title: "Choose by need",
        description: "Map the real delivery surface to the right pack instead of repurposing files from elsewhere.",
      },
      {
        title: "Misuse review",
        description: "Reject recoloring, low-contrast placement, rebuilt lockups, and unreadable use before release.",
      },
    ],
    assets: [
      {
        name: "Logo Source Pack",
        description: "Vector source files for design and print workflows.",
      },
      {
        name: "Logo PNG Pack",
        description: "Production-ready transparent exports for day-to-day usage.",
      },
      {
        name: "Complete Media Kit",
        description: "Combined logo, icon, and web/app assets for implementation.",
      },
    ],
    implementationNotes: [
      "Use SVG sources for design, print, and scalable web placements.",
      "Do not recreate or CSS-recolor the logo for product surfaces.",
      "Use the media kit for favicon, Apple touch, Android, and manifest-ready icon assets.",
    ],
  },
  {
    slug: "color-palette",
    href: "/visual/color-palette",
    navLabel: "Color Palette",
    title: "Color Palette",
    summary:
      "Full copy-ready swatch wall for approved brand, semantic, chart, and alias colors.",
    pageIntro:
      "Use this page when you need the full approved color set in one place and want to copy exact hex values without extra reference chrome.",
    specialistAudience: "Design, product, and engineering teams.",
    handbookHref: "/#06-color-palette",
    guidanceBlocks: [
      {
        title: "Full swatch wall",
        description: "Scan the approved palette in one uninterrupted grid instead of working through filters or guidance blocks.",
      },
      {
        title: "Click to copy",
        description: "Each swatch copies the hex value directly so handoff and implementation stay fast.",
      },
      {
        title: "Token-first labeling",
        description: "Every card shows the token label, hex value, and a short usage note on the swatch itself.",
      },
      {
        title: "Zero extra chrome",
        description: "The page stays intentionally stripped back so the colors remain the only thing competing for attention.",
      },
    ],
    assets: [
      {
        name: "Copy-ready swatches",
        description: "Full approved color set with one-click hex copying.",
      },
      {
        name: "Token labels",
        description: "Readable token names presented directly on each swatch.",
      },
      {
        name: "Short usage notes",
        description: "Brief usage guidance embedded on every swatch card.",
      },
    ],
    implementationNotes: [
      "Copy hex values directly from the swatches instead of retyping them.",
      "Use the token label on the card when calling out a color in review or handoff.",
      "Return to the handbook root for behavior guidance; this page is intentionally just the palette.",
    ],
  },
  {
    slug: "typography",
    href: "/visual/typography",
    navLabel: "Typography",
    title: "Typography",
    summary:
      "Reference-first typography page with the font pack, family roles, surface guidance, hierarchy, and release checks.",
    pageIntro:
      "Use this page when you need the full family roles, surface mapping, and hierarchy detail behind the root quick chooser.",
    specialistAudience: "Design, product, and engineering teams.",
    handbookHref: "/#07-typography",
    guidanceBlocks: [
      {
        title: "Approved font pack",
        description: "Download the approved font package before working in design, product, or implementation files.",
      },
      {
        title: "Family roles",
        description: "Use live specimens to compare Anek for display, Hind for readable text, and JetBrains Mono for data.",
      },
      {
        title: "Use by surface",
        description: "Map decks, product UI, reports, exports, and data-heavy surfaces to the approved family roles.",
      },
      {
        title: "Hierarchy and review",
        description: "Check the specimen-led scale, technical values, and release checks before approval.",
      },
    ],
    assets: [
      {
        name: "Vayasya Font Pack",
        description: "Approved font files for design, marketing, and implementation teams.",
      },
      {
        name: "Surface guidance",
        description: "Approved mapping for decks, UI, reports, exports, and data-heavy surfaces.",
      },
      {
        name: "Hierarchy examples",
        description: "Specimen-led scale with technical size and line-height detail for release work.",
      },
    ],
    implementationNotes: [
      "Keep product and collateral typography aligned to the same Anek, Hind, and JetBrains Mono role system.",
      "Use JetBrains Mono only where precision, alignment, or character distinction materially help the reader.",
      "Escalate font-loading or rendering problems instead of silently switching to fallback families.",
    ],
  },
  {
    slug: "imagery",
    href: "/visual/imagery",
    navLabel: "Imagery",
    title: "Imagery",
    summary:
      "Full imagery reference for sourcing, proof-first use cases, acceptability checks, and release guidance.",
    pageIntro:
      "Use this page when you are choosing, approving, or publishing visuals and need the deeper proof, sensitivity, and sourcing rules behind the handbook’s quick default.",
    specialistAudience: "Design, marketing, and content approval teams.",
    handbookHref: "/#08-imagery",
    guidanceBlocks: [
      {
        title: "Source control",
        description: "Use images with clear rights, traceable sources, and appropriate consent status.",
      },
      {
        title: "Proof-first scenarios",
        description: "Prefer visuals that explain service environments, outcomes, or processes.",
      },
      {
        title: "Sensitivity review",
        description: "Mask or remove client-sensitive content before publication.",
      },
      {
        title: "Usage checks",
        description: "Reject decorative or credibility-faking visuals that do not add operational meaning.",
      },
    ],
    assets: [
      {
        name: "Scenario guidance",
        description: "Case narrative and presentation-context examples for imagery use.",
      },
      {
        name: "Proof imagery checks",
        description: "Acceptable versus unacceptable evidence-style visuals.",
      },
      {
        name: "Sensitivity checks",
        description: "Guidance for masking, source control, and client-safe release decisions.",
      },
    ],
    implementationNotes: [
      "Prefer authentic operational visuals over decorative stock photography.",
      "Check client identifiers, privacy, and licensing before publication.",
      "Test logo overlays on imagery only after establishing a calm, readable plate.",
    ],
  },
] as const satisfies readonly VisualReferencePage[];

export const orderedVisualReferencePages = [...VISUAL_REFERENCE_PAGES];

export const getVisualReferencePage = (slug: string) =>
  orderedVisualReferencePages.find((page) => page.slug === slug);
