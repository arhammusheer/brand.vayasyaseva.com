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
    description: "Role-first logo reference with asset packs, approved variants, misuse checks, and review guidance.",
  },
  {
    href: "/visual/color-palette",
    label: "Color Palette",
    description: "Full token catalog, semantic roles, scenario mappings, and handoff rules.",
  },
  {
    href: "/visual/typography",
    label: "Typography",
    description: "Font packs, hierarchy, formatting controls, and implementation notes.",
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
      "Role-first logo reference for designers, developers, and reviewers covering asset packs, approved variants, misuse checks, and technical assets.",
    pageIntro:
      "Use this page when you are designing, implementing, or reviewing a branded surface and need more than the quick chooser on the handbook root.",
    specialistAudience: "Marketing, design, product, and engineering teams.",
    handbookHref: "/#05-logo-usage",
    guidanceBlocks: [
      {
        title: "Role quick actions",
        description: "Jump straight into the designer, developer, or reviewer path instead of scanning the whole page.",
      },
      {
        title: "Asset packs",
        description: "Choose the correct SVG, PNG, or full media-kit package for the actual delivery surface.",
      },
      {
        title: "Approved variants",
        description: "Use the right master or vertical asset and verify contrast, lockup integrity, and clear space.",
      },
      {
        title: "Misuse review",
        description: "Reject recoloring, distortion, low-contrast placement, and unreadable or improvised use before release.",
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
      "Full color reference for tokens, semantic roles, scenario mappings, and engineering-facing implementation guidance.",
    pageIntro:
      "Use this page when you are selecting, reviewing, or implementing palette decisions beyond template defaults.",
    specialistAudience: "Design, product, and engineering teams.",
    handbookHref: "/#06-color-palette",
    guidanceBlocks: [
      {
        title: "Full swatch catalog",
        description: "Review the full neutral, brand, semantic, and chart token system in one place.",
      },
      {
        title: "Scenario mappings",
        description: "Match token usage to migration, UI, and reporting contexts.",
      },
      {
        title: "Semantic roles",
        description: "Keep state colors meaningful and separate from decorative accents.",
      },
      {
        title: "Implementation handoff",
        description: "Use token names and compatibility rules for product and engineering delivery.",
      },
    ],
    assets: [
      {
        name: "Token catalog",
        description: "Complete token set with roles, hex values, and usage guidance.",
      },
      {
        name: "Scenario mappings",
        description: "Migration, UI, reporting, and semantic role examples.",
      },
      {
        name: "Implementation notes",
        description: "Engineering-facing reminders for using tokens instead of local color guesses.",
      },
    ],
    implementationNotes: [
      "Reference tokens in reviews and handoffs instead of raw hex values.",
      "Use one clear brand owner per artifact unless the piece is explicitly multi-vertical.",
      "Treat semantic and chart colors as meaning-bearing system roles, not decoration.",
    ],
  },
  {
    slug: "typography",
    href: "/visual/typography",
    navLabel: "Typography",
    title: "Typography",
    summary:
      "Full typography reference for font packs, stacks, hierarchy, language controls, and implementation decisions.",
    pageIntro:
      "Use this page when you need the production and implementation detail behind the handbook’s default rule to stay inside approved templates and font systems.",
    specialistAudience: "Design, product, and engineering teams.",
    handbookHref: "/#07-typography",
    guidanceBlocks: [
      {
        title: "Font pack",
        description: "Download the approved company font package and respect internal-use controls.",
      },
      {
        title: "Stacks and roles",
        description: "Use Anek for display, Hind for narrative/UI copy, and JetBrains Mono for data.",
      },
      {
        title: "Hierarchy controls",
        description: "Apply the approved size, line-height, and usage hierarchy consistently.",
      },
      {
        title: "Implementation notes",
        description: "Carry the same type system into product and engineering work without ad hoc substitutions.",
      },
    ],
    assets: [
      {
        name: "Vayasya Font Pack",
        description: "Approved font files for design, marketing, and implementation teams.",
      },
      {
        name: "Type hierarchy",
        description: "Approved hierarchy levels for titles, body copy, and data contexts.",
      },
      {
        name: "Formatting controls",
        description: "Working rules for casing, hierarchy use, and readable long-form layouts.",
      },
    ],
    implementationNotes: [
      "Do not introduce additional fonts beyond Anek, Hind, and JetBrains Mono.",
      "Keep data-heavy UI and tables in mono where alignment and character distinction matter.",
      "Escalate rendering issues instead of silently switching to fallback families.",
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
