import type {
  DoDontExample,
  LogoVariant,
  SectionHeader,
  TemplateSpec,
} from "../../../lib/types/brand";

export const LOGO_USAGE_SECTION = {
  header: {
    id: "logo-usage",
    number: "04",
    title: "Logo Usage",
    summary: "Protect identity through consistent lockup, spacing, and color handling.",
  },
  intro:
    "Logo consistency is mandatory. The source gold logo asset is authoritative and must remain untouched. Any deviation needs explicit approval.",
  variants: [
    {
      id: "master-light",
      label: "Master Logo Light",
      filePath: "/public/brand/placeholders/master-logo-light.svg",
      background: "light",
      minWidthPx: 120,
      clearSpaceRule: "Keep clear space equal to the height of the V around all sides.",
    },
    {
      id: "master-dark",
      label: "Master Logo Dark",
      filePath: "/public/brand/placeholders/master-logo-dark.svg",
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
  intro: string;
  variants: readonly LogoVariant[];
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
};
