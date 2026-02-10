import {
  BRAND_NAME,
  COLOR_TOKENS,
  COLOR_USAGE_RULES,
  FONT_STACKS,
  LOGO_RULES,
  TYPO_RULES,
  VERTICALS,
} from "./fundamentals";
import { BRAND_NAVIGATION, BRAND_NAV_ITEMS, NAV_GROUPS, APPENDIX_NAV_ITEMS } from "./navigation";
import {
  MASTER_LOGO_DARK,
  MASTER_LOGO_LIGHT,
  VERTICAL_LOGOS,
} from "./placeholders";

// Core sections (01-15)
import { PHILOSOPHY_SECTION } from "./sections/01-philosophy";
import { POSITIONING_SECTION } from "./sections/positioning";
import { OPERATING_PILLARS_SECTION } from "./sections/operating-pillars";
import { LOGO_USAGE_SECTION } from "./sections/logo-usage";
import { COLOR_PALETTE_SECTION } from "./sections/color-palette";
import { TYPOGRAPHY_SECTION } from "./sections/typography";
import { IMAGERY_SECTION } from "./sections/imagery";
import { VOICE_TONE_SECTION } from "./sections/08-voice-tone";
import { CLAIMS_DISCIPLINE_SECTION } from "./sections/09-claims-discipline";
import { WRITING_MECHANICS_SECTION } from "./sections/writing-mechanics";
import { DOCUMENTS_SECTION } from "./sections/documents";
import { PRESENTATIONS_SECTION } from "./sections/presentations";
import { EMAIL_SECTION } from "./sections/email";
import { MEETINGS_SECTION } from "./sections/meetings";
import { PRE_SEND_CHECKLIST_SECTION } from "./sections/pre-send-checklist";

// Appendix sections (16-19)
import { GOVERNANCE_APPROVALS_SECTION } from "./sections/governance-approvals";
import { TEMPLATES_DOWNLOADABLES_SECTION } from "./sections/templates-downloadables";
import { FAQ_EDGE_CASES_SECTION } from "./sections/faq-edge-cases";
import { FOOTER_VERSIONING_SECTION } from "./sections/footer-versioning";

export const BRAND_CONTENT = {
  fundamentals: {
    brandName: BRAND_NAME,
    verticals: VERTICALS,
    fontStacks: FONT_STACKS,
    colorTokens: COLOR_TOKENS,
    logoRules: LOGO_RULES,
    colorUsageRules: COLOR_USAGE_RULES,
    typoRules: TYPO_RULES,
  },
  navigation: BRAND_NAVIGATION,
  navItems: BRAND_NAV_ITEMS,
  navGroups: NAV_GROUPS,
  appendixItems: APPENDIX_NAV_ITEMS,
  placeholders: {
    masterLogoLight: MASTER_LOGO_LIGHT,
    masterLogoDark: MASTER_LOGO_DARK,
    verticalLogos: VERTICAL_LOGOS,
  },
  sections: {
    philosophy: PHILOSOPHY_SECTION,
    positioning: POSITIONING_SECTION,
    operatingPillars: OPERATING_PILLARS_SECTION,
    logoUsage: LOGO_USAGE_SECTION,
    colorPalette: COLOR_PALETTE_SECTION,
    typography: TYPOGRAPHY_SECTION,
    imagery: IMAGERY_SECTION,
    voiceTone: VOICE_TONE_SECTION,
    claimsDiscipline: CLAIMS_DISCIPLINE_SECTION,
    writingMechanics: WRITING_MECHANICS_SECTION,
    documents: DOCUMENTS_SECTION,
    presentations: PRESENTATIONS_SECTION,
    email: EMAIL_SECTION,
    meetings: MEETINGS_SECTION,
    preSendChecklist: PRE_SEND_CHECKLIST_SECTION,
    governanceApprovals: GOVERNANCE_APPROVALS_SECTION,
    templatesDownloadables: TEMPLATES_DOWNLOADABLES_SECTION,
    faqEdgeCases: FAQ_EDGE_CASES_SECTION,
    footerVersioning: FOOTER_VERSIONING_SECTION,
  },
} as const;

// Type exports for use in components
export type BrandContent = typeof BRAND_CONTENT;
export type BrandSection = (typeof BRAND_CONTENT.sections)[keyof typeof BRAND_CONTENT.sections];
