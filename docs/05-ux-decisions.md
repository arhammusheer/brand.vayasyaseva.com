# Phase C: UX Decisions

## Core Interaction Philosophy

**Reading-first, not clicking-first.**

The handbook is designed for continuous reading with navigation as a fallback. All core content is immediately visible. Progressive disclosure is reserved for appendix and detail content only.

---

## Navigation Architecture

### Desktop
- **Sticky left sidebar** with grouped chapter list
- Groups: Foundation, Visual System, Communication, Application
- Active section highlighting with scroll tracking
- Simple hover states (no HoverCards - reduces distraction)
- Progress indicator at top of page

### Mobile
- **Fixed header** with hamburger trigger
- **Sheet drawer** with full chapter list
- Same grouping structure as desktop
- Back-to-top button

### Removed
- Command palette (Cmd+K) - unnecessary for 15 sections
- HoverCard previews - distracting during reading
- Multiple redundant navigation systems

---

## Section Layout Patterns

Each section type has a purpose-built layout. No generic shell.

### Philosophy Section (01)
- Full-width manifesto band with mission statement
- Belief cards in 2-column grid
- "We stand for / We reject" comparison columns
- Rules as numbered list
- Do/Don't examples inline

### Positioning Section (02)
- Statement plates with copy-ready text
- Elevator pitch in prominent display
- Vertical positioning in cards
- Copy button on key statements

### Operating Pillars Section (03)
- Pillar lanes (vertical strips)
- Each pillar: name, definition, behaviors, red flags
- "Say this / Avoid this" inline per pillar
- No accordions - all visible

### Logo Usage Section (04)
- Correct/incorrect visual comparison plates
- Logo variants in grid with specifications
- Prohibited treatments as visual gallery
- Clear space diagram
- Size minimums prominently displayed

### Color Palette Section (05)
- Swatch grid with token names
- Click to copy hex value
- Usage ratios visualization
- Scenario cards (not accordions)
- Role-based grouping (Base, Support, Identity, Vertical, Semantic)

### Typography Section (06)
- Live type specimen ladder
- Each level shown at actual size
- Font stack specifications in table
- Weight usage guidelines
- Wordmark rules highlighted

### Imagery Section (07)
- Preferred/forbidden comparison board
- Category cards with visual examples
- Style guidelines as bullets

### Voice & Tone Section (08)
- Persona cards with trait, description, sounds like, avoid
- Terminology table (visible, not in accordion)
- Banned phrases table
- Rewrite examples inline

### Claims Discipline Section (09)
- Evidence tier matrix (visible, not in tab)
- Claim type cards with allowed/prohibited patterns
- Legal-safe patterns list
- Evidence validation checklist
- Risk indicators

### Writing Mechanics Section (10)
- Mechanics as rule blocks with examples inline
- No accordion - all visible
- India-first format reference card
- Punctuation and capitalization quick reference

### Documents Section (11)
- Document anatomy diagram
- Template references as cards
- Header/footer requirements visible

### Presentations Section (12)
- Slide anatomy diagram
- Layout patterns illustrated
- Animation rules

### Email Section (13)
- Email anatomy with annotated example
- Subject/greeting/body/signature blocks
- Template cards

### Meetings Section (14)
- Meeting type standards table (visible)
- Agenda/minutes/decision templates
- No accordion

### Pre-Send Checklist Section (15)
- Printable checklist format
- Checkboxes visible (not in accordion)
- Pass conditions displayed
- Quick reference card

---

## Content Display Rules

### Always Visible
- Section header and summary
- Intent statement
- Core rules
- Do/Don't examples
- Reference tables (personas, terminology, claims matrix, etc.)

### Expandable (Single Level Only)
- Template specifications detail
- Appendix content
- FAQ answers (questions visible)

### Never Use
- Nested accordions
- Tabs for core content
- HoverCards for content preview
- Multi-level disclosure

---

## Visual Hierarchy

### Typography Scale
- Section title: Display (40px/48px, 600 weight)
- Subsection: H3 (24px/32px, 500 weight)
- Body: 18px/30px, 400 weight
- Helper: 16px/26px, 400 weight
- Data: JetBrains Mono 14px/22px, 500 weight

### Spacing
- Section margin: 80px vertical
- Content block margin: 32px
- Paragraph spacing: 24px
- List item spacing: 12px

### Colors
- Body text: --vy-fg (#111111)
- Muted text: --vy-muted-fg (#4B5563)
- Backgrounds: --vy-bg, --vy-muted
- Borders: --vy-border (use sparingly)
- Accent (sparingly): --vy-gold-ui

---

## Component Strategy

### Keep and Enhance
- DoDontCard - clean comparison pattern
- RulesGrid - works well, make always visible
- Footer - metadata display
- Separator - visual breaks

### Remove
- SectionShell (generic tab wrapper)
- ReferencePanel (mega-component)
- TemplateTable (collapsible rows)
- ChecklistPanel (accordion-based)
- Hero tabs

### New Components
- SectionWrapper - simple semantic wrapper
- ManifestoBand - philosophy display
- PillarLanes - operating pillars
- SwatchGrid - color palette
- TypeSpecimen - typography display
- ClaimsMatrix - evidence tiers
- TerminologyTable - approved/banned terms
- ChecklistBlock - visible checklist

---

## Responsive Behavior

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Adaptations
- Single column layouts
- Full-width cards
- Stacked navigation
- Larger touch targets
- Reduced horizontal padding

---

## Print Optimization

### @media print
- Hide navigation sidebar
- Hide progress bar
- Hide interactive buttons
- Show all content (expand any collapsed sections)
- Page breaks before major sections
- Visible URLs for links
- Appropriate font sizes
