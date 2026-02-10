import type {
  ApprovalRule,
  BrandFooter,
  ChecklistGroup,
  ClaimRule,
  DoDontExample,
  MeetingStandard,
  NavSection,
  Pillar,
  QASection,
  Scenario,
  SectionHeader,
  TemplateSpec,
  TerminologyEntry,
  VoicePersona,
} from "../../lib/types/brand";
import {
  BRAND_NAME,
  COLOR_TOKENS,
  COLOR_USAGE_RULES,
  FONT_STACKS,
  LOGO_RULES,
  TYPO_RULES,
  VERTICALS,
} from "./fundamentals";
import { BRAND_NAVIGATION } from "./navigation";
import {
  MASTER_LOGO_DARK,
  MASTER_LOGO_LIGHT,
  VERTICAL_LOGOS,
} from "./placeholders";
import { CLAIMS_DISCIPLINE_SECTION } from "./sections/claims-discipline";
import { COLOR_PALETTE_SECTION } from "./sections/color-palette";
import { DOCUMENTS_SECTION } from "./sections/documents";
import { EMAIL_SECTION } from "./sections/email";
import { FAQ_EDGE_CASES_SECTION } from "./sections/faq-edge-cases";
import { FOOTER_VERSIONING_SECTION } from "./sections/footer-versioning";
import { GOVERNANCE_APPROVALS_SECTION } from "./sections/governance-approvals";
import { IMAGERY_SECTION } from "./sections/imagery";
import { LOGO_USAGE_SECTION } from "./sections/logo-usage";
import { MEETINGS_SECTION } from "./sections/meetings";
import { OPERATING_PILLARS_SECTION } from "./sections/operating-pillars";
import { PHILOSOPHY_SECTION } from "./sections/philosophy";
import { POSITIONING_SECTION } from "./sections/positioning";
import { PRE_SEND_CHECKLIST_SECTION } from "./sections/pre-send-checklist";
import { PRESENTATIONS_SECTION } from "./sections/presentations";
import { TEMPLATES_DOWNLOADABLES_SECTION } from "./sections/templates-downloadables";
import { TYPOGRAPHY_SECTION } from "./sections/typography";
import { VOICE_TONE_SECTION } from "./sections/voice-tone";
import { WRITING_MECHANICS_SECTION } from "./sections/writing-mechanics";

type BrandSection = {
  header: SectionHeader;
  intro: string;
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates: readonly TemplateSpec[];
  pillars?: readonly Pillar[];
  scenarios?: readonly Scenario[];
  personas?: readonly VoicePersona[];
  terminology?: readonly TerminologyEntry[];
  claimRules?: readonly ClaimRule[];
  legalSafePatterns?: readonly string[];
  standards?: readonly MeetingStandard[];
  approvals?: readonly ApprovalRule[];
  checklist?: readonly ChecklistGroup[];
  faq?: readonly QASection[];
  footer?: BrandFooter;
};

type BrandContent = {
  fundamentals: {
    brandName: typeof BRAND_NAME;
    verticals: typeof VERTICALS;
    fontStacks: typeof FONT_STACKS;
    colorTokens: typeof COLOR_TOKENS;
    logoRules: typeof LOGO_RULES;
    colorUsageRules: typeof COLOR_USAGE_RULES;
    typoRules: typeof TYPO_RULES;
  };
  navigation: NavSection;
  placeholders: {
    masterLogoLight: typeof MASTER_LOGO_LIGHT;
    masterLogoDark: typeof MASTER_LOGO_DARK;
    verticalLogos: typeof VERTICAL_LOGOS;
  };
  sections: {
    philosophy: BrandSection;
    positioning: BrandSection;
    operatingPillars: BrandSection;
    logoUsage: BrandSection;
    colorPalette: BrandSection;
    typography: BrandSection;
    imagery: BrandSection;
    voiceTone: BrandSection;
    claimsDiscipline: BrandSection;
    writingMechanics: BrandSection;
    documents: BrandSection;
    presentations: BrandSection;
    email: BrandSection;
    meetings: BrandSection;
    preSendChecklist: BrandSection;
    governanceApprovals: BrandSection;
    templatesDownloadables: BrandSection;
    faqEdgeCases: BrandSection;
    footerVersioning: BrandSection;
  };
};

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
} as const satisfies BrandContent;
