import type { NavItem, NavSection } from "../../lib/types/brand";

export const BRAND_NAV_ITEMS = [
  { id: "philosophy", label: "01 Philosophy", href: "#01-philosophy", order: 1 },
  { id: "positioning", label: "02 Positioning", href: "#02-positioning", order: 2 },
  {
    id: "operating-pillars",
    label: "03 Operating Pillars",
    href: "#03-operating-pillars",
    order: 3,
  },
  { id: "logo-usage", label: "04 Logo Usage", href: "#04-logo-usage", order: 4 },
  { id: "color-palette", label: "05 Color Palette", href: "#05-color-palette", order: 5 },
  { id: "typography", label: "06 Typography", href: "#06-typography", order: 6 },
  { id: "imagery", label: "07 Imagery", href: "#07-imagery", order: 7 },
  { id: "voice-tone", label: "08 Voice & Tone", href: "#08-voice-tone", order: 8 },
  {
    id: "claims-discipline",
    label: "09 Claims Discipline",
    href: "#09-claims-discipline",
    order: 9,
  },
  {
    id: "writing-mechanics",
    label: "10 Writing Mechanics",
    href: "#10-writing-mechanics",
    order: 10,
  },
  { id: "documents", label: "11 Documents", href: "#11-documents", order: 11 },
  {
    id: "presentations",
    label: "12 Presentations",
    href: "#12-presentations",
    order: 12,
  },
  { id: "email", label: "13 Email", href: "#13-email", order: 13 },
  { id: "meetings", label: "14 Meetings", href: "#14-meetings", order: 14 },
  {
    id: "pre-send-checklist",
    label: "15 Pre-Send Checklist",
    href: "#15-pre-send-checklist",
    order: 15,
  },
  {
    id: "governance-approvals",
    label: "16 Governance & Approvals",
    href: "#16-governance-approvals",
    order: 16,
  },
  {
    id: "templates-downloadables",
    label: "17 Templates & Downloadables",
    href: "#17-templates-downloadables",
    order: 17,
  },
  {
    id: "faq-edge-cases",
    label: "18 FAQ / Edge Cases",
    href: "#18-faq-edge-cases",
    order: 18,
  },
  {
    id: "footer-versioning",
    label: "19 Footer / Versioning",
    href: "#19-footer-versioning",
    order: 19,
  },
] as const satisfies readonly NavItem[];

export const BRAND_NAVIGATION = {
  id: "brand-handbook",
  title: "Brand Fundamentals",
  items: BRAND_NAV_ITEMS,
} as const satisfies NavSection;
