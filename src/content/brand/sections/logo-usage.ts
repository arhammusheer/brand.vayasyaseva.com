import type {
  DownloadableBundle,
  LogoVariant,
  SectionHeader,
  SectionSummaryStrip,
  VisualReferenceLinkMeta,
} from "../../../lib/types/brand";

export const LOGO_USAGE_SECTION = {
  header: {
    id: "logo-usage",
    number: "05",
    title: "Logo Usage",
    summary: "For most employees: use the approved logo pack as-is and do not edit it.",
  } satisfies SectionHeader,
  summaryStrip: {
    useThisWhen: "You need a logo, signature logo, or branded asset for a real job.",
    doThis: "Download the approved pack and use the supplied file that fits the background and channel.",
    neverDoThis: "Do not recolor, redraw, restack, or improvise the logo.",
    whoNeedsThis: "All employees; deeper detail is for specialist teams.",
  } satisfies SectionSummaryStrip,
  intro:
    "Logo consistency is mandatory. The source gold logo asset is authoritative and must remain untouched. Any deviation needs explicit approval.",
  referenceHref: "/visual/logo-usage",
  referenceTitle: "Open full logo usage reference",
  referenceAudience: "Marketing, design, product, and engineering teams",
  employeeDefaults: [
    "If you only need a logo for email, a document, a slide, or a signature, use the supplied pack and stop there.",
    "If you need a new size or new lockup, ask for it. Do not edit the file yourself.",
    "Use governance only for exceptions, not for routine pack usage.",
  ],
  downloadables: [
    {
      name: "Logo Source Pack",
      description: "All approved logo variants in original SVG for design and print workflows.",
      filePath: "/api/brand/logo-pack?profile=svg",
      fileType: "ZIP / SVG",
      includes: [
        "Master logos (light and dark)",
        "All vertical variants (Seva, Setu, Kaushal, Prabandh)",
        "Vector source files with no raster loss",
      ],
    },
    {
      name: "Logo PNG Pack",
      description: "Transparent PNG exports in production-ready widths for day-to-day usage.",
      filePath: "/api/brand/logo-pack?profile=png",
      fileType: "ZIP / PNG",
      includes: [
        "All logo variants as PNG",
        "Standard export sizes for office and presentation workflows",
        "Ready for slides, docs, and tools without SVG support",
      ],
    },
    {
      name: "Complete Media Kit",
      description: "Combined logo package with SVG, PNG, and web/app icon assets.",
      filePath: "/api/brand/logo-pack?profile=media",
      fileType: "ZIP / FULL KIT",
      includes: [
        "SVG source files",
        "PNG exports in standard sizes",
        "Favicon, Apple touch, Android icons, and web manifest",
      ],
    },
  ],
  accessNote:
    "Use only generated packs for official materials. Do not recreate or recolor logos manually.",
  variants: [
    {
      id: "master-light",
      label: "Master Logo Light",
      filePath: "/brand/logos/master-logo-light.svg",
      background: "light",
      usageNote: "Use on light backgrounds where the gold mark remains clean and fully visible.",
      clearSpaceRule: "Keep clear space equal to the height of the V around all sides.",
    },
    {
      id: "master-dark",
      label: "Master Logo Dark",
      filePath: "/brand/logos/master-logo-dark.svg",
      background: "dark",
      usageNote: "Use on dark backgrounds where the mark needs the darker variant for clean contrast.",
      clearSpaceRule: "Keep clear space equal to the height of the V around all sides.",
    },
  ],
  rules: [
    "Do not recolor, retint, distort, or gradient-map the logo.",
    "Use the approved light or dark master variant based on background contrast only.",
    "If the logo must sit over imagery, place it on a calm solid plate first.",
    "If the logo becomes too small to read clearly, switch to an approved fallback instead of forcing it smaller.",
    "Use the supplied lockup as-is; do not rebuild it manually.",
  ],
} as const satisfies {
  header: SectionHeader;
  summaryStrip: SectionSummaryStrip;
  intro: string;
  referenceHref: VisualReferenceLinkMeta["referenceHref"];
  referenceTitle: VisualReferenceLinkMeta["referenceTitle"];
  referenceAudience?: VisualReferenceLinkMeta["referenceAudience"];
  employeeDefaults: readonly string[];
  downloadables: readonly DownloadableBundle[];
  accessNote?: string;
  variants: readonly LogoVariant[];
  rules: readonly string[];
};
