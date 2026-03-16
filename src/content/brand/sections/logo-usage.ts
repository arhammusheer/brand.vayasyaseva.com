import type {
  DownloadableBundle,
  DoDontExample,
  LogoVariant,
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
  VisualReferenceLinkMeta,
} from "../../../lib/types/brand";

export const LOGO_USAGE_SECTION = {
  header: {
    id: "logo-usage",
    number: "05",
    title: "Logo Usage",
    summary: "For most employees: use the approved logo pack as-is and do not edit it.",
  },
  summaryStrip: {
    useThisWhen: "You need a logo, signature logo, or branded asset for a real job.",
    doThis: "Download the approved pack and use the supplied file that fits the background and channel.",
    neverDoThis: "Do not recolor, redraw, restack, or improvise the logo.",
    whoNeedsThis: "All employees; deeper detail below is mainly for design/marketing.",
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
        "Widths: 128, 256, 512, 1024, 2048 px",
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
        "PNG exports in all standard widths",
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
      minWidthPx: 120,
      clearSpaceRule: "Keep clear space equal to the height of the V around all sides.",
    },
    {
      id: "master-dark",
      label: "Master Logo Dark",
      filePath: "/brand/logos/master-logo-dark.svg",
      background: "dark",
      minWidthPx: 120,
      clearSpaceRule: "Keep clear space equal to the height of the V around all sides.",
    },
  ],
  rules: [
    "Maintain lockup hierarchy: Vayasya larger semibold, vertical name smaller regular/medium.",
    "Do not recolor, retint, or gradient-map the logo in any context.",
    "Use light or dark master variant based on background contrast only.",
    "Minimum digital width is 120px; below this, use icon-free text fallback approved by brand ops.",
    "When placed over imagery, use a calm plate with at least 90% opacity.",
  ],
  doDont: [
    {
      topic: "Logo color",
      do: "Use the provided source logo file with gold preserved.",
      dont: "Apply CSS filter to turn logo white or blue.",
      why: "Recoloring breaks identity consistency and violates lock.",
    },
    {
      topic: "Lockup scale",
      do: "Set Vayasya at larger semibold and vertical name at smaller medium weight.",
      dont: "Use equal weight and equal size for both words.",
      why: "Hierarchy is part of the approved master lockup standard.",
    },
  ],
  templates: [
    {
      name: "Asset request note",
      purpose: "Request correct logo file from brand operations.",
      whenToUse: "When preparing a new collateral format.",
      template:
        "Request: Logo asset for <channel>\nBackground type: <light/dark/mixed>\nRequired size: <width x height>\nVertical context: <Seva/Setu/Kaushal/Prabandh>\nDeadline: <DD MMM YYYY>\nRequester: <name>",
      guardrails: [
        "Do not attach edited logo files in request threads.",
        "Record where the asset will be published.",
      ],
    },
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
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
