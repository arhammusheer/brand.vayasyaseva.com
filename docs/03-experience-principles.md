# Phase A: Experience Principles

## Core Philosophy

**This is a brand handbook, not a dashboard.**

The goal is to teach brand stewardship through reading, not to provide an interface for data manipulation. Every design decision should optimize for comprehension, retention, and practical application.

---

## Principle 1: Zero-Click Core Reading

**Definition:** All essential brand guidance must be visible without any interaction.

**Implementation:**
- No tabs for primary section content
- No accordions hiding critical rules or examples
- Reference data (tables, matrices) displayed inline
- Do/Don't examples always visible

**Exceptions allowed:**
- Appendix content may be collapsed
- Detailed template specifications may be expandable
- FAQ answers may require expansion (questions must be visible)

**Measurement:** A reader should understand 80% of any section without clicking anything.

---

## Principle 2: Section Individuality

**Definition:** Each section must have a presentation pattern appropriate to its content type.

**Implementation:**
- Philosophy: Manifesto band + principle cards
- Positioning: Statement plates with copy-ready text
- Pillars: Vertical pillar lanes with sayable/unsayable
- Logo: Visual comparison plates (correct vs. incorrect)
- Color: Swatch grid with usage ratios
- Typography: Live type specimen ladder
- Imagery: Preferred/forbidden image board
- Voice: Persona cards + terminology table
- Claims: Evidence matrix + risk indicators
- Mechanics: Inline rule blocks with examples
- Documents: Anatomy diagram
- Presentations: Slide anatomy diagram
- Email: Annotated email template
- Meetings: Meeting artifact templates
- Pre-Send: Printable checklist format

**Measurement:** A reader should recognize which section they're in without reading the title.

---

## Principle 3: Progressive Disclosure for Depth Only

**Definition:** Only use expandable UI for supplementary detail, never for core guidance.

**Implementation:**
- Core rules: Always visible
- Do/Don't examples: Always visible
- Reference data: Always visible
- Template specifications: Expandable (secondary)
- Edge cases: Expandable
- FAQ answers: Expandable (questions visible)
- Appendix content: Collapsed by default

**Measurement:** Critical operational guidance is never more than 1 click deep.

---

## Principle 4: Scannable Structure

**Definition:** Every section must be scannable in under 10 seconds.

**Implementation:**
- Strong visual hierarchy: H2 → intro → rules → examples
- Consistent heading patterns across sections
- Numbered/bulleted lists for rules
- Visual markers for Do (green) / Don't (red)
- White space between content blocks
- Maximum paragraph width (65-75 characters)

**Measurement:** A reader can identify section purpose, key rules, and examples in a quick scroll.

---

## Principle 5: Quiet Visual Design

**Definition:** The design should be calm, premium, and invisible.

**Implementation:**
- Minimal borders (use spacing instead)
- Muted backgrounds for content zones
- No decorative gradients or shadows
- Typography-driven hierarchy
- Brand gold used sparingly for emphasis
- Neutral surfaces for body content
- High contrast text

**Measurement:** The design never competes with the content for attention.

---

## Principle 6: Navigation Without Distraction

**Definition:** Navigation should be always-available but unobtrusive.

**Implementation:**
- Desktop: Sticky sidebar with chapter list (no hover effects)
- Mobile: Sheet drawer (hidden until requested)
- No command palette (unnecessary for 19 sections)
- No hover preview cards (distracting)
- Scroll progress indicator (subtle)
- Active section highlighting (clear but quiet)

**Measurement:** Navigation is immediately findable but never interrupts reading flow.

---

## Principle 7: Content-Sourced Rendering

**Definition:** All displayed text must originate from typed content files.

**Implementation:**
- No hardcoded copy in components
- All section content imported from `src/content/brand/sections/`
- All fundamentals from `src/content/brand/fundamentals.ts`
- Type contracts enforce content structure
- Section components receive content as props

**Measurement:** Changing any visible text requires editing only content files.

---

## Principle 8: Print-Ready Design

**Definition:** The handbook should produce clean printed output.

**Implementation:**
- `@media print` styles for all sections
- Page break controls between sections
- Hidden navigation in print
- Visible URLs for links
- Appropriate font sizes for print

**Measurement:** Print preview produces usable documentation.

---

## Principle 9: Accessibility by Default

**Definition:** The handbook must be usable by all readers.

**Implementation:**
- Semantic HTML structure (article, section, nav, header)
- Logical heading order (H1 → H2 → H3)
- Keyboard navigation for all interactive elements
- WCAG 2.1 AA contrast ratios
- Focus-visible states
- Screen reader-friendly content order

**Measurement:** WCAG 2.1 AA compliance.

---

## Principle 10: Performance Without Sacrifice

**Definition:** Fast loading without compromising design quality.

**Implementation:**
- Server Components for static content
- Minimal client-side JavaScript
- No unnecessary hydration
- Optimized images (next/image)
- Font subsetting (next/font)
- Lazy loading for below-fold content

**Measurement:** Lighthouse performance score > 90.

---

## Anti-Patterns to Avoid

### Never Do

1. **Tabs for core content** - Hides information, requires clicks
2. **Nested accordions** - Creates frustrating depth
3. **Identical section shells** - Removes character and scannability
4. **Hover-triggered content** - Unreliable and distracting
5. **Dashboard aesthetics** - This is reading material, not an admin panel
6. **Decorative complexity** - Gradients, shadows, ornamental elements
7. **Component showcase** - Using UI widgets to demonstrate capability
8. **Duplicate navigation** - Multiple ways to do the same thing

### Always Do

1. **Surface core content** - Visible on load
2. **Differentiate sections** - Unique treatments for unique content
3. **Use white space** - Breathing room between elements
4. **Control line width** - 65-75 characters for body text
5. **Strong hierarchy** - Clear visual weight progression
6. **Purposeful color** - Semantic meaning, not decoration
7. **Practical examples** - Real operational guidance
8. **Single source of truth** - Content from typed files only
