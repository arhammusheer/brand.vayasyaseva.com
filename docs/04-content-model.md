# Phase B: Content Model

## Overview

All handbook content is sourced from typed TypeScript files. This ensures:
- Type-safe content contracts
- Single source of truth
- Compile-time validation
- Easy maintenance and updates

---

## Type System

### Core Types (`src/lib/types/brand.ts`)

The type system defines strict contracts for all content structures:

```typescript
// Navigation
NavItem, NavSection, NavGroup

// Section structure
SectionHeader, SectionIntent, SectionContent

// Visual system
ColorSwatch, LogoVariant, TypographyStack, TypeHierarchy

// Communication
VoicePersona, TerminologyEntry, BannedPhrase
ClaimRule, EvidenceTier

// Operational
Pillar, DoDontExample, TemplateSpec, ChecklistGroup
MeetingStandard, ApprovalRule, QASection

// Metadata
BrandFooter, HeroData
```

---

## Content File Structure

```
src/content/brand/
├── index.ts                    # Master export aggregating all content
├── fundamentals.ts             # Brand constants, tokens, locked values
├── navigation.ts               # Section navigation with groups
├── placeholders.ts             # Asset file paths
└── sections/
    ├── 01-philosophy.ts
    ├── 02-positioning.ts
    ├── 03-operating-pillars.ts
    ├── 04-logo-usage.ts
    ├── 05-color-palette.ts
    ├── 06-typography.ts
    ├── 07-imagery.ts
    ├── 08-voice-tone.ts
    ├── 09-claims-discipline.ts
    ├── 10-writing-mechanics.ts
    ├── 11-documents.ts
    ├── 12-presentations.ts
    ├── 13-email.ts
    ├── 14-meetings.ts
    └── 15-pre-send-checklist.ts
```

---

## Section Content Contract

Every core section (01-15) follows this structure:

```typescript
type SectionContent = {
  header: {
    id: string;           // kebab-case identifier
    number: string;       // "01" through "15"
    title: string;        // Section name
    summary: string;      // One-line purpose
  };
  intent: string;         // Why this section matters (2-3 sentences)
  intro: string;          // Opening statement
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  templates?: readonly TemplateSpec[];

  // Section-specific reference data (varies by section)
  [referenceData]?: ...
};
```

---

## Content Enhancement Requirements

### 1. Intent Statements
Every section must include an `intent` field explaining:
- Why the section exists
- What problem it solves
- What happens when ignored

### 2. Anti-Pattern Warnings
Each section should include common mistakes and their consequences.

### 3. Real-World Examples
Move beyond abstract rules to include:
- Copy-ready text blocks
- Annotated examples
- Before/after rewrites

### 4. Terminology Dictionary (Voice & Tone)
Expanded terminology entries covering:
- Approved terms
- Banned phrases with reasons
- Context-specific alternatives

### 5. Claims Evidence Tiers (Claims Discipline)
Each claim type must include:
- Evidence requirements
- Validation process
- Expiration rules
- Sample evidence documents

### 6. Operational Checklists
Actionable pass/fail criteria for:
- Pre-send review
- Brand compliance
- Legal review triggers

---

## Fundamentals Content

### Brand Identity (`fundamentals.ts`)

```typescript
BRAND_NAME = {
  parent: "Vayasya",
  vertical: "Vayasya Seva",
  full: "Vayasya Seva, a Vayasya vertical"
}

VERTICALS = [
  "Vayasya Seva",
  "Vayasya Setu",
  "Vayasya Kaushal",
  "Vayasya Prabandh"
]
```

### Color Tokens (Locked)

| Token | Hex | Role |
|-------|-----|------|
| --vy-bg | #FFFFFF | Base background |
| --vy-fg | #111111 | Base foreground |
| --vy-text-strong | #000000 | High-emphasis text |
| --vy-muted | #F6F7F8 | Secondary surfaces |
| --vy-muted-fg | #4B5563 | Low-emphasis text |
| --vy-border | #E5E7EB | Borders and dividers |
| --vy-gold-ui | #C9A24A | Brand gold UI accents |
| --vy-seva | #C97A2B | Vayasya Seva accent |
| --vy-setu | #2F3E5C | Vayasya Setu accent |
| --vy-kaushal | #2E6B4F | Vayasya Kaushal accent |
| --vy-prabandh | #3A3A3A | Vayasya Prabandh accent |
| --vy-success | #2E6B4F | Success states |
| --vy-warning | #C97A2B | Warning states |
| --vy-info | #2F3E5C | Info states |
| --vy-danger | #B42318 | Error states |

### Typography (Locked)

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Primary | Hind | 400, 500, 600 | Body, UI, navigation |
| Display | Hind | 600 | Headlines, section titles |
| Mono | JetBrains Mono | 500 | Data, code, identifiers |

---

## Navigation Structure

### Grouped Navigation

```typescript
NAV_GROUPS = [
  {
    id: "foundation",
    title: "Foundation",
    items: ["philosophy", "positioning", "operating-pillars"]
  },
  {
    id: "visual",
    title: "Visual System",
    items: ["logo-usage", "color-palette", "typography", "imagery"]
  },
  {
    id: "communication",
    title: "Communication",
    items: ["voice-tone", "claims-discipline", "writing-mechanics"]
  },
  {
    id: "application",
    title: "Application",
    items: ["documents", "presentations", "email", "meetings", "pre-send-checklist"]
  }
]

APPENDIX_ITEMS = [
  "governance-approvals",
  "templates-downloadables",
  "faq-edge-cases",
  "footer-versioning"
]
```

---

## Content Quality Standards

### Rule Writing
- Active voice with named actors
- Specific and measurable where possible
- Maximum 25 words per rule
- Starts with action verb when procedural

### Do/Don't Examples
- Real operational scenarios
- Specific dates, names, numbers
- Clear rationale for preference
- Demonstrates brand voice

### Template Specifications
- Copy-ready format strings
- Field placeholders in angle brackets
- Guardrails for validation
- Context for when to use

---

## Content Validation

Before deployment, content must pass:

1. **Type check**: All files compile without errors
2. **Completeness**: All required fields populated
3. **Consistency**: Terminology matches dictionary
4. **Accuracy**: Claims match evidence tier requirements
5. **Readability**: No sentences over 30 words in rules
