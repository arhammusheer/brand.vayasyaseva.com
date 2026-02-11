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
  minWidthPx: number;
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

export type VoicePersona = {
  trait: string;
  description: string;
  soundsLike: readonly string[];
  avoid: readonly string[];
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
  nextReviewDate: string;
  owner: string;
  approvalTrail: readonly string[];
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

export type DoDontExample = {
  topic: string;
  do: string;
  dont: string;
  why: string;
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

export type BannedPhrase = {
  phrase: string;
  reason: string;
  alternative: string;
};

export type MeetingStandard = {
  meetingType: string;
  requiredInputs: readonly string[];
  requiredOutputs: readonly string[];
  timeboxMinutes: number;
  ownerRole: string;
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
