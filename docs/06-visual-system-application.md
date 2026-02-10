# Phase C: Visual System Application

## Design Philosophy

The handbook design should be invisible. Content is the focus. Visual treatment supports comprehension without competing for attention.

---

## Color Application

### Background Hierarchy
```
Page:          --vy-bg (#FFFFFF)
Content zones: --vy-muted (#F6F7F8)
Cards:         --vy-bg (#FFFFFF) with --vy-border
```

### Text Colors
```
Headings:      --vy-text-strong (#000000)
Body:          --vy-fg (#111111)
Helper/muted:  --vy-muted-fg (#4B5563)
```

### Semantic Usage
```
Do examples:   --vy-success (#2E6B4F) for badge/border
Don't examples: --vy-danger (#B42318) for badge/border
Warnings:      --vy-warning (#C97A2B)
Info:          --vy-info (#2F3E5C)
```

### Accent Usage
- --vy-gold-ui: Logo proximity, premium highlights only
- Vertical accents: Section dividers, navigation active states
- Maximum one accent per section

---

## Typography Application

### Heading Levels
```css
.section-title {
  font-family: Hind;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  color: var(--vy-text-strong);
}

.subsection-title {
  font-family: Hind;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: var(--vy-text-strong);
}

.body-text {
  font-family: Hind;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: var(--vy-fg);
  max-width: 65ch;
}

.data-text {
  font-family: JetBrains Mono;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}
```

### Line Width Control
- Body paragraphs: max-width 65ch
- Tables: full width within container
- Lists: max-width 65ch
- Cards: responsive grid

---

## Spacing System

### Vertical Rhythm
```css
--space-section: 80px;    /* Between sections */
--space-block: 32px;      /* Between content blocks */
--space-element: 24px;    /* Between paragraphs */
--space-item: 12px;       /* Between list items */
--space-inline: 8px;      /* Inline spacing */
```

### Container Widths
```css
--max-width-content: 1200px;
--max-width-reading: 65ch;
--max-width-card: 480px;
```

---

## Component Styling

### Cards
```css
.content-card {
  background: var(--vy-bg);
  border: 1px solid var(--vy-border);
  border-radius: 8px;
  padding: 24px;
}
```

### Tables
```css
.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid var(--vy-border);
  font-weight: 600;
  color: var(--vy-muted-fg);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.data-table td {
  padding: 12px;
  border-bottom: 1px solid var(--vy-border);
}
```

### Badges
```css
.badge-do {
  background: color-mix(in srgb, var(--vy-success) 10%, transparent);
  color: var(--vy-success);
  border: 1px solid var(--vy-success);
}

.badge-dont {
  background: color-mix(in srgb, var(--vy-danger) 10%, transparent);
  color: var(--vy-danger);
  border: 1px solid var(--vy-danger);
}
```

---

## Section-Specific Styling

### Philosophy (01)
- Manifesto band: Full width, --vy-muted background
- Mission statement: Large display text, centered
- Belief cards: 2-column grid, subtle borders

### Positioning (02)
- Statement plates: Prominent display, copy button
- Elevator pitch: Highlighted box

### Logo Usage (04)
- Comparison plates: Side-by-side correct/incorrect
- Green/red borders for validation

### Color Palette (05)
- Swatch grid: Color preview with token name below
- Grouped by role with section headers

### Typography (06)
- Specimen ladder: Each level at actual size
- Clear visual hierarchy demonstration

### Claims (09)
- Matrix: Color-coded by claim type
- Prominent evidence requirements

### Pre-Send (15)
- Checklist: Printable format
- Clear pass/fail indicators

---

## Border Strategy

### Use Borders Sparingly
- Card outlines: 1px --vy-border
- Table row separators: 1px --vy-border
- Section dividers: Use spacing, not lines
- Do/Don't: Colored borders for semantic meaning

### Avoid
- Multiple nested borders
- Heavy border widths
- Borders as decoration

---

## Shadow Strategy

### No Decorative Shadows
- Cards: Border only, no shadow
- Modals: Subtle shadow for elevation
- Focus states: Outline, not shadow

---

## Responsive Adaptations

### Mobile (< 768px)
- Single column grids
- Full-width cards
- Stacked navigation
- Increased padding for touch

### Tablet (768px - 1024px)
- 2-column grids
- Side navigation collapsed
- Medium padding

### Desktop (> 1024px)
- Multi-column grids
- Sticky side navigation
- Full spacing system
