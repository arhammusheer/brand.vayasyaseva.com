import type {
  DownloadableBundle,
  LogoAssetNeed,
  LogoMisuseExample,
  LogoPreviewCard,
  LogoQuickAction,
  LogoRelatedAsset,
  LogoRoleAction,
  LogoRoleSection,
  LogoUsageReference,
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
    "Most people only need to grab the right pack, choose the right background variant, and avoid the common failures.",
  referenceHref: "/visual/logo-usage",
  referenceTitle: "Open full logo usage reference",
  referenceAudience: "Marketing, design, product, and engineering teams",
  quickActions: [
    {
      id: "svg-pack",
      title: "Download SVG pack",
      description: "Use for design, print, scalable web, or whenever the logo must stay crisp at any size.",
      href: "/api/brand/logo-pack?profile=svg",
      ctaLabel: "Get SVG pack",
      icon: "svg",
      download: true,
      badge: "Design / print / scalable",
    },
    {
      id: "png-pack",
      title: "Download PNG pack",
      description: "Use for slides, documents, office tools, and workflows that do not support SVG cleanly.",
      href: "/api/brand/logo-pack?profile=png",
      ctaLabel: "Get PNG pack",
      icon: "png",
      download: true,
      badge: "Slides / docs / office",
    },
    {
      id: "media-kit",
      title: "Need favicon or app icons",
      description: "Use the complete media kit for browser, mobile, manifest, and app-surface logo assets.",
      href: "/api/brand/logo-pack?profile=media",
      ctaLabel: "Get media kit",
      icon: "media",
      download: true,
      badge: "Product / web",
    },
    {
      id: "vertical-logos",
      title: "Need a vertical logo",
      description: "Use a vertical lockup only when one vertical clearly owns the material and the naming is approved.",
      href: "/visual/logo-usage#approved-variants",
      ctaLabel: "View vertical options",
      icon: "vertical",
      badge: "Specialist check",
    },
  ] satisfies readonly LogoQuickAction[],
  commonNeeds: [
    {
      need: "Website header or scalable UI",
      useThis: "Logo Source Pack (SVG)",
      note: "Use the supplied SVG source asset and pick light or dark by contrast.",
    },
    {
      need: "Deck, Word, or PPT",
      useThis: "Logo PNG Pack",
      note: "Use the transparent PNG exports instead of screenshots or copied slide assets.",
    },
    {
      need: "Favicon or app icon",
      useThis: "Complete Media Kit",
      note: "Use the supplied browser and app icon files, not cropped logo exports.",
    },
    {
      need: "Single-vertical material",
      useThis: "Approved vertical logo",
      note: "Only use it when a single vertical clearly owns the work.",
    },
  ] satisfies readonly LogoAssetNeed[],
  previewCards: [
    {
      id: "master-light",
      title: "Master on light background",
      kind: "variant",
      background: "light",
      filePath: "/brand/logos/master-logo-light.svg",
      whenToUse: "Use on most documents, slides, templates, and light digital surfaces.",
      hardRule: "Switch variants only for contrast, not personal preference.",
      badge: "Default",
    },
    {
      id: "master-dark",
      title: "Master on dark background",
      kind: "variant",
      background: "dark",
      filePath: "/brand/logos/master-logo-dark.svg",
      whenToUse: "Use on dark hero areas, dark UI surfaces, and approved dark-background placements.",
      hardRule: "Do not place the light-background logo on dark surfaces just to match a layout mood.",
      badge: "Dark surfaces",
    },
    {
      id: "vertical-pack",
      title: "Vertical logos live in the pack",
      kind: "vertical-pack",
      background: "mixed",
      whenToUse: "Use only when one vertical clearly owns the material, service, or release context.",
      hardRule: "Never type, abbreviate, or rebuild a vertical lockup manually.",
      badge: "When ownership is specific",
      members: [
        { label: "Vayasya Seva", filePath: "/brand/logos/vertical-seva.svg" },
        { label: "Vayasya Setu", filePath: "/brand/logos/vertical-setu.svg" },
        { label: "Vayasya Kaushal", filePath: "/brand/logos/vertical-kaushal.svg" },
        { label: "Vayasya Prabandh", filePath: "/brand/logos/vertical-prabandh.svg" },
      ],
    },
  ] satisfies readonly LogoPreviewCard[],
  employeeDefaults: [
    "If you only need a logo for email, a document, a slide, or a signature, use the supplied pack and stop there.",
    "If you need a new size, new lockup, or a product-specific implementation choice, open the full reference instead of editing locally.",
    "Use governance only for exceptions, not for routine approved pack usage.",
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
    {
      id: "vertical-seva",
      label: "Vayasya Seva",
      filePath: "/brand/logos/vertical-seva.svg",
      background: "light",
      usageNote: "Use only when Vayasya Seva clearly owns the material or service context.",
      clearSpaceRule: "Keep clear space equal to the height of the V around all sides.",
    },
    {
      id: "vertical-setu",
      label: "Vayasya Setu",
      filePath: "/brand/logos/vertical-setu.svg",
      background: "light",
      usageNote: "Use only when Vayasya Setu clearly owns the material or release context.",
      clearSpaceRule: "Keep clear space equal to the height of the V around all sides.",
    },
    {
      id: "vertical-kaushal",
      label: "Vayasya Kaushal",
      filePath: "/brand/logos/vertical-kaushal.svg",
      background: "light",
      usageNote: "Use only when Vayasya Kaushal clearly owns the material or release context.",
      clearSpaceRule: "Keep clear space equal to the height of the V around all sides.",
    },
    {
      id: "vertical-prabandh",
      label: "Vayasya Prabandh",
      filePath: "/brand/logos/vertical-prabandh.svg",
      background: "light",
      usageNote: "Use only when Vayasya Prabandh clearly owns the material or release context.",
      clearSpaceRule: "Keep clear space equal to the height of the V around all sides.",
    },
  ],
  misuseChecks: [
    {
      id: "recolor",
      title: "Recolored mark",
      previewKind: "recolor",
      issue: "The logo cannot be tinted, recolored, or made to match a random surface palette.",
      correction: "Use the supplied light or dark asset exactly as provided.",
    },
    {
      id: "rebuild",
      title: "Rebuilt lockup",
      previewKind: "rebuild",
      issue: "Typed or manually rebuilt lockups break spacing, hierarchy, and ownership cues.",
      correction: "Take the approved logo or vertical asset from the pack instead.",
    },
    {
      id: "busy-image",
      title: "Busy photo background",
      previewKind: "busy-image",
      issue: "Logo visibility collapses on noisy imagery without a calm support plate.",
      correction: "Place the approved variant on a calm solid plate first.",
    },
    {
      id: "too-small",
      title: "Forced too small",
      previewKind: "too-small",
      issue: "If the logo becomes unreadable, the placement is wrong even if the file is technically correct.",
      correction: "Use an approved fallback or give the mark more room.",
    },
  ] satisfies readonly LogoMisuseExample[],
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
  quickActions: readonly LogoQuickAction[];
  commonNeeds: readonly LogoAssetNeed[];
  previewCards: readonly LogoPreviewCard[];
  employeeDefaults: readonly string[];
  downloadables: readonly DownloadableBundle[];
  accessNote?: string;
  variants: readonly LogoVariant[];
  misuseChecks: readonly LogoMisuseExample[];
  rules: readonly string[];
};

export const LOGO_USAGE_REFERENCE = {
  specialistQuickActions: [
    {
      id: "svg-source",
      title: "Get SVG source assets",
      description: "Use vector source files for design, print, and scalable product or web placements.",
      href: "/api/brand/logo-pack?profile=svg",
      ctaLabel: "Download SVG pack",
      icon: "svg",
      download: true,
      badge: "Designer / scalable",
    },
    {
      id: "png-exports",
      title: "Get PNG exports",
      description: "Use transparent PNGs for office workflows, decks, and surfaces where SVG support is weak.",
      href: "/api/brand/logo-pack?profile=png",
      ctaLabel: "Download PNG pack",
      icon: "png",
      download: true,
      badge: "Office / exports",
    },
    {
      id: "app-web-icons",
      title: "Get app and web icons",
      description: "Use the media kit for favicon, Apple touch, Android, and manifest-ready icon assets.",
      href: "/api/brand/logo-pack?profile=media",
      ctaLabel: "Download media kit",
      icon: "media",
      download: true,
      badge: "Product / web",
    },
    {
      id: "review-release",
      title: "Review before release",
      description: "Run the misuse and release checks before the asset leaves design, product, or engineering.",
      href: "#misuse-review",
      ctaLabel: "Jump to review",
      icon: "review",
      badge: "Reviewer",
    },
  ] satisfies readonly LogoQuickAction[],
  roleActions: [
    {
      role: "Designer",
      summary: "Choose the right source pack, variant, and placement treatment before export.",
      href: "#designer-workflow",
      actions: [
        "Start with SVG for design and print work.",
        "Pick light or dark by contrast, not by taste.",
        "Check clear space and imagery plate rules before export.",
      ],
    },
    {
      role: "Developer",
      summary: "Choose production-safe file formats and surface behavior for product and web implementation.",
      href: "#developer-workflow",
      actions: [
        "Prefer SVG for scalable web placements.",
        "Use the media kit for favicon and app icons.",
        "Never recolor, rebuild, or recompose the logo in code.",
      ],
    },
    {
      role: "Technical reviewer",
      summary: "Reject the common failures before the asset ships or goes live.",
      href: "#technical-review",
      actions: [
        "Check contrast and background first.",
        "Check lockup integrity and asset source.",
        "Reject busy-image, recolored, stretched, or unreadable use.",
      ],
    },
  ] satisfies readonly LogoRoleAction[],
  assetMatrix: [
    {
      need: "Website header",
      useThis: "Logo Source Pack (SVG)",
      note: "Use the supplied master light or dark asset based on surface contrast.",
    },
    {
      need: "Deck or proposal",
      useThis: "Logo PNG Pack",
      note: "Use transparent PNGs for office tooling and export-safe placements.",
    },
    {
      need: "Word, PPT, or email signature",
      useThis: "Logo PNG Pack",
      note: "Use approved exports instead of copied screenshots or pasted slide assets.",
    },
    {
      need: "Favicon",
      useThis: "Complete Media Kit",
      note: "Use the supplied favicon assets rather than cropping the main logo locally.",
    },
    {
      need: "App icon or web manifest",
      useThis: "Complete Media Kit",
      note: "Use the supplied icon set for browser and mobile surfaces.",
    },
    {
      need: "Dark hero surface",
      useThis: "Master Logo Dark",
      note: "Use the dark-surface asset when contrast requires it.",
    },
    {
      need: "Photo background",
      useThis: "Approved variant plus calm plate",
      note: "Do not place the mark directly on busy imagery.",
    },
    {
      need: "Single-vertical artifact",
      useThis: "Approved vertical logo",
      note: "Only when vertical ownership is explicit and naming is approved.",
    },
  ] satisfies readonly LogoAssetNeed[],
  roleSections: [
    {
      id: "designer-workflow",
      role: "Designer",
      summary: "Use this when you are building or exporting branded visuals.",
      rules: [
        "Start from the SVG source pack for design, print, and scalable exports.",
        "Choose light or dark by background contrast, not by aesthetic preference.",
        "Keep clear space intact and preserve the supplied lockup hierarchy.",
        "If the logo sits over photography, add a calm solid plate before release.",
        "Use a vertical lockup only when ownership is single-vertical and approved.",
      ],
    },
    {
      id: "developer-workflow",
      role: "Developer",
      summary: "Use this when you are implementing the brand in product, web, or app surfaces.",
      rules: [
        "Prefer SVG for scalable web and product placements.",
        "Use PNG exports where SVG support is weak or the workflow is office-oriented.",
        "Use the media kit for favicon, Apple touch, Android, and manifest-ready icons.",
        "Never CSS-recolor, redraw, or rebuild the logo from text or shapes.",
        "Choose the master light or dark asset by actual rendered contrast on the target surface.",
      ],
    },
    {
      id: "technical-review",
      role: "Technical reviewer",
      summary: "Use this when you are approving or QA-checking a logo implementation before release.",
      rules: [
        "Confirm the asset came from the approved pack, not a copied screenshot or local recreation.",
        "Check that the correct light or dark variant is used for the final background.",
        "Reject stretched, recolored, or manually rebuilt lockups immediately.",
        "Reject placement over noisy imagery when there is no calm support plate.",
        "Reject placements where the mark is too small to read comfortably.",
      ],
    },
  ] satisfies readonly LogoRoleSection[],
  misuseExamples: [
    {
      id: "recolor",
      title: "Recolored mark",
      previewKind: "recolor",
      issue: "The approved logo cannot be tinted to match local UI or campaign colors.",
      correction: "Use the supplied light or dark asset exactly as provided.",
    },
    {
      id: "stretch",
      title: "Stretched shape",
      previewKind: "stretch",
      issue: "Stretching or condensing changes the mark proportion and makes it look unapproved instantly.",
      correction: "Resize proportionally from the supplied source asset only.",
    },
    {
      id: "rebuild",
      title: "Rebuilt lockup",
      previewKind: "rebuild",
      issue: "Typed or manually rebuilt lockups break hierarchy, spacing, and brand ownership clarity.",
      correction: "Use the approved master or vertical logo file instead of typing it.",
    },
    {
      id: "low-contrast",
      title: "Low-contrast placement",
      previewKind: "low-contrast",
      issue: "A technically correct file still fails if the surface contrast is too weak.",
      correction: "Switch to the correct variant or change the support surface.",
    },
    {
      id: "busy-image",
      title: "Busy image background",
      previewKind: "busy-image",
      issue: "Details behind the mark destroy clarity and make the logo feel improvised.",
      correction: "Place the mark on a calm solid plate before release.",
    },
    {
      id: "too-small",
      title: "Unreadable small use",
      previewKind: "too-small",
      issue: "If the logo is too small to read, the placement has failed even if the file is approved.",
      correction: "Give the mark more room or use an approved fallback asset.",
    },
  ] satisfies readonly LogoMisuseExample[],
  technicalNotes: [
    "Use supplied icon assets for browser, web app, and mobile surfaces.",
    "Prefer SVG for scalable web and product placements.",
    "Use PNG exports where SVG support is weak or the tool chain is office-oriented.",
    "Never derive local variants, recolor with CSS, or rebuild the lockup in code.",
  ],
  relatedAssets: [
    {
      name: "Complete media kit",
      description: "SVG, PNG, favicon, Apple touch, Android icons, and manifest-ready assets in one package.",
      href: "/api/brand/logo-pack?profile=media",
      ctaLabel: "Download media kit",
      download: true,
    },
    {
      name: "Brand architecture guidance",
      description: "Check when a vertical logo is actually allowed before choosing a vertical lockup.",
      href: "/#03-brand-architecture",
      ctaLabel: "Open naming guidance",
    },
    {
      name: "Imagery placement guidance",
      description: "If the logo sits over photography, confirm the background-treatment rule before release.",
      href: "/#08-imagery",
      ctaLabel: "Open imagery guidance",
    },
  ] satisfies readonly LogoRelatedAsset[],
} as const satisfies LogoUsageReference;
