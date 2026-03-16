// Navigation types
export type NavItem = {
  id: string;
  label: string;
  href: string;
  order: number;
  description?: string;
};

export type NavGroup = {
  id: string;
  title: string;
  items: readonly string[];
};

export type NavSection = {
  id: string;
  title: string;
  items: readonly NavItem[];
  groups?: readonly NavGroup[];
};

// Hero and metadata types
export type HeroMeta = {
  eyebrow: string;
  title: string;
  subtitle: string;
  version: string;
  lastUpdated: string;
  owner: string;
};

export type HeroData = {
  meta: HeroMeta;
  highlights: readonly HighlightCard[];
};

export type HighlightCard = {
  label: string;
  value: string;
  note?: string;
};

// Section header with enhanced intent
export type SectionHeader = {
  id: string;
  number: string;
  title: string;
  summary: string;
};

export type SectionSummaryStrip = {
  useThisWhen: string;
  doThis: string;
  neverDoThis: string;
  whoNeedsThis: string;
};

export type QuickAnswerCard = {
  title: string;
  roleOrTask: string;
  tenSecondRule: string;
  checklistItems: readonly string[];
  fullGuideAnchor: string;
};

export type VisualReferenceLinkMeta = {
  referenceHref: string;
  referenceTitle: string;
  referenceAudience?: string;
};

export type RoleGuide = {
  role: string;
  mustKnow: readonly string[];
  topTasks: readonly string[];
  commonMistakes: readonly string[];
  escalateWhen: string;
  relatedAnchors: readonly string[];
};

export type TaskGuide = {
  title: string;
  channel: string;
  approvedScript: string;
  topRules: readonly string[];
  escalateWhen: string;
  relatedChecklist: readonly string[];
  fullGuideAnchor: string;
};

export type ServiceCapability = {
  name: string;
  approvedDescription: string;
  scopeBoundary: string;
};

export type RepresentationAsset = {
  name: string;
  audience: string;
  copy: string;
  whenToUse: string;
  governanceLevel: "self-serve" | "approval-required";
};

// Core brand content types
export type Scenario = {
  context: string;
  risk: string;
  recommended: string;
};

export type Pillar = {
  name: string;
  definition: string;
  behaviors: readonly string[];
  redFlags: readonly string[];
};

export type LogoVariant = {
  id: string;
  label: string;
  filePath: string;
  background: "light" | "dark" | "mixed";
  usageNote: string;
  clearSpaceRule: string;
};

export type LogoProhibition = {
  description: string;
  example?: string;
};

export type ColorSwatch = {
  token: string;
  hex: string;
  role: string;
  usage: string;
};

export type TypographyStack = {
  label: string;
  family: string;
  fallback: readonly string[];
  usage: string;
};

export type TypeHierarchy = {
  level: string;
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  usage: string;
};

export type LanguageGuideItem = {
  rule: string;
  rationale: string;
  examples: readonly string[];
};

export type ChecklistGroup = {
  title: string;
  items: readonly string[];
  passCondition: string;
};

export type QASection = {
  question: string;
  answer: string;
  tags?: readonly string[];
};

export type BrandFooter = {
  version: string;
  effectiveDate: string;
  owner: string;
  contact: string;
};

export type ClaimType = "aspirational" | "directional" | "measured" | "contractual";

export type ClaimRule = {
  claimType: ClaimType;
  allowedPattern: string;
  requiredEvidence: string;
  prohibitedPattern: string;
  reviewTrigger: string;
};

export type TemplateSpec = {
  name: string;
  purpose: string;
  whenToUse: string;
  template: string;
  guardrails: readonly string[];
};

export type DownloadableAsset = {
  name: string;
  description: string;
  filePath: string;
  fileType: string;
  accessNote?: string;
};

export type DownloadableBundle = DownloadableAsset & {
  includes: readonly string[];
};

export type VisualReferenceResource = {
  name: string;
  description: string;
};

export type VisualReferenceGuidanceBlock = {
  title: string;
  description: string;
};

export type VisualReferenceNavItem = {
  href: string;
  label: string;
  description: string;
};

export type VisualReferencePage = {
  slug: string;
  href: string;
  navLabel: string;
  title: string;
  summary: string;
  pageIntro: string;
  specialistAudience: string;
  handbookHref: string;
  guidanceBlocks: readonly VisualReferenceGuidanceBlock[];
  assets: readonly VisualReferenceResource[];
  implementationNotes?: readonly string[];
};

export type ApprovalRule = {
  artifact: string;
  approverRole: string;
  criteria: readonly string[];
  slaBusinessDays: number;
  escalation: string;
};

export type TerminologyEntry = {
  term: string;
  approved: string;
  avoid: readonly string[];
  notes: string;
};

export type ImageryGuideline = {
  category: string;
  preferred: readonly string[];
  forbidden: readonly string[];
};

export type DocumentAnatomy = {
  element: string;
  requirement: string;
  example?: string;
};

export type SlideLayout = {
  type: string;
  usage: string;
  elements: readonly string[];
};

export type EmailComponent = {
  component: string;
  format: string;
  example: string;
};
