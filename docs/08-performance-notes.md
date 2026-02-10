# Phase D: Performance Notes

## Build Analysis

### Route Classification
```
Route (app)
├ ○ /              (Static - prerendered)
└ ○ /_not-found    (Static - prerendered)
```

The main page is statically generated at build time.

## Client-Side JavaScript

### Current Architecture
- Main page uses `"use client"` for:
  - Scroll position tracking (useActiveSection hook)
  - Navigation interaction
  - Copy to clipboard (color swatches)
  - Sheet/modal interactions

### Hydration Footprint
- shadcn/ui components are Radix-based (minimal JS)
- No heavy libraries (charts, animations)
- Toast (sonner) is lazy-loaded via user interaction

## Bundle Size Considerations

### Used Components
```
ui/button
ui/scroll-area
ui/separator
ui/sheet
ui/table
ui/badge
```

### Unused Components (can be removed)
```
ui/accordion (no longer used)
ui/tabs (no longer used)
ui/command (removed command palette)
ui/hover-card (removed hover previews)
ui/dialog (minimal use)
ui/navigation-menu (replaced with custom nav)
```

## Font Optimization

### next/font Configuration
```typescript
const hind = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-hind",
});
```

- Fonts are self-hosted via next/font
- Subset to required characters only
- Font display: swap (prevents FOIT)

## Image Optimization

### Current State
- Logo placeholders are text (no actual images yet)
- When logos added, use next/image for:
  - Automatic format conversion (WebP)
  - Responsive sizing
  - Lazy loading

### Recommendation
```typescript
import Image from 'next/image';

<Image
  src="/brand/logo-master.svg"
  alt="Vayasya master logo"
  width={120}
  height={40}
  priority // for above-fold content
/>
```

## Scroll Performance

### Intersection Observer
The `useActiveSection` hook uses Intersection Observer for scroll tracking:
- No scroll event listeners (performant)
- Throttled updates
- Minimal re-renders

### Smooth Scroll
```typescript
section.scrollIntoView({
  block: "start",
  behavior: prefersReducedMotion ? "auto" : "smooth",
});
```

Native smooth scroll (CSS-based, not JS animation).

## Recommendations

### Immediate
1. Remove unused shadcn/ui components to reduce bundle size
2. Audit import chains for tree-shaking opportunities

### Future
1. Consider Server Components for static content sections
2. Implement dynamic imports for heavy sections (if added)
3. Add Lighthouse CI to build pipeline
4. Consider partial hydration for interactive islands

## Lighthouse Estimates

Based on architecture:
- Performance: 90+ (static content, minimal JS)
- Accessibility: 95+ (semantic HTML, proper labels)
- Best Practices: 95+ (HTTPS, no deprecated APIs)
- SEO: 90+ (need to enhance meta tags)

## Print Performance

@media print styles hide:
- Navigation sidebar
- Progress bar
- Back to top button
- Interactive controls

This reduces print spool size and rendering complexity.
