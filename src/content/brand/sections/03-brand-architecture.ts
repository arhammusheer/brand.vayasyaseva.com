import type {
  DoDontExample,
  SectionHeader,
} from "../../../lib/types/brand";

export const BRAND_ARCHITECTURE_SECTION = {
  header: {
    id: "brand-architecture",
    number: "03",
    title: "Brand Architecture",
    summary:
      "Master brand, verticals, naming conventions, and accent assignment.",
  } satisfies SectionHeader,

  intro:
    "Vayasya is the master brand. Verticals operate under it with distinct functional domains and accent colors. The master brand is always visually dominant.",

  masterBrand: {
    name: "Vayasya",
    role: "Parent brand for all verticals. Used for group-level communications, cross-vertical materials, governance documents, and any context where no single vertical applies.",
    accentToken: "--vy-gold-ui",
    accentHex: "#C9A24A",
  },

  verticals: [
    {
      name: "Vayasya Seva",
      domain: "Manpower and labour services operations",
      accentToken: "--vy-seva",
      accentHex: "#C97A2B",
    },
    {
      name: "Vayasya Setu",
      domain:
        "HRMS and workforce operating system — attendance, scheduling, payroll, compliance rails",
      accentToken: "--vy-setu",
      accentHex: "#2F3E5C",
    },
    {
      name: "Vayasya Kaushal",
      domain: "Training, upskilling, and workforce readiness",
      accentToken: "--vy-kaushal",
      accentHex: "#2E6B4F",
    },
    {
      name: "Vayasya Prabandh",
      domain: "Workforce administration, governance, and controls layer",
      accentToken: "--vy-prabandh",
      accentHex: "#3A3A3A",
    },
  ],

  namingRules: [
    "Always write \"Vayasya [Vertical]\" — never the vertical name alone in formal contexts.",
    "First mention in any document uses the full name. Subsequent mentions may use the vertical name if context is clear.",
    "Do not abbreviate to initials. No \"VS\", \"VK\", \"VP\", or \"VSetu\".",
    "In conversation, \"Seva\" or \"Setu\" alone is acceptable after the full name has been established.",
  ],

  lockupRules: [
    "Parent wordmark (Vayasya) is always larger and semibold.",
    "Vertical name is smaller, regular or medium weight.",
    "Never set parent and vertical at equal weight or equal size.",
    "Logo lockup hierarchy is fixed. Do not modify proportions without governance approval.",
  ],

  usageGuidance: [
    {
      context: "Single-vertical material",
      rule: "Use that vertical's accent color and vertical logo variant.",
    },
    {
      context: "Cross-vertical material",
      rule: "Use master brand gold accent. No vertical accent colors.",
    },
    {
      context: "Multi-vertical joint offering",
      rule: "Both vertical accents may appear only if both vertical owners approve in writing. Label the material as joint.",
    },
    {
      context: "Internal-only communication",
      rule: "Master brand is default. Vertical accents are optional for team-specific context.",
    },
  ],

  rules: [
    "Use exactly one vertical accent per document unless explicitly multi-vertical and labeled accordingly.",
    "Do not create new verticals, sub-brands, or product brands without governance approval.",
    "Master brand gold (#C9A24A) is reserved for logo-adjacent and premium identity uses only.",
    "Vertical accent coverage must remain below 20% of total visible surface area.",
  ],

  doDont: [
    {
      topic: "Vertical naming",
      do: "Vayasya Seva manages workforce deployment for this engagement.",
      dont: "Seva manages workforce deployment for this engagement.",
      why: "First mention must use the full name to establish context.",
    },
    {
      topic: "Cross-vertical document",
      do: "Use Vayasya master brand with gold accent for the joint quarterly report.",
      dont: "Use half Seva orange and half Setu navy on the same cover page.",
      why: "Mixed vertical accents create visual confusion about ownership.",
    },
    {
      topic: "Abbreviation",
      do: "The Vayasya Kaushal training module launches in March.",
      dont: "The VK training module launches in March.",
      why: "Abbreviations are not part of the approved naming system.",
    },
  ] satisfies readonly DoDontExample[],
} as const;
