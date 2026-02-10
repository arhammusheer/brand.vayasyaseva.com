import type { NavGroup, NavItem, NavSection } from "../../lib/types/brand";

export const BRAND_NAV_ITEMS = [
  { id: "philosophy", label: "01 Philosophy", href: "#01-philosophy", order: 1 },
  { id: "positioning", label: "02 Positioning", href: "#02-positioning", order: 2 },
  { id: "operating-pillars", label: "03 Operating Pillars", href: "#03-operating-pillars", order: 3 },
  { id: "logo-usage", label: "04 Logo Usage", href: "#04-logo-usage", order: 4 },
  { id: "color-palette", label: "05 Color Palette", href: "#05-color-palette", order: 5 },
  { id: "typography", label: "06 Typography", href: "#06-typography", order: 6 },
  { id: "imagery", label: "07 Imagery", href: "#07-imagery", order: 7 },
  { id: "voice-tone", label: "08 Voice & Tone", href: "#08-voice-tone", order: 8 },
  { id: "claims-discipline", label: "09 Claims Discipline", href: "#09-claims-discipline", order: 9 },
  { id: "writing-mechanics", label: "10 Writing Mechanics", href: "#10-writing-mechanics", order: 10 },
  { id: "documents", label: "11 Documents", href: "#11-documents", order: 11 },
  { id: "presentations", label: "12 Presentations", href: "#12-presentations", order: 12 },
  { id: "email", label: "13 Email", href: "#13-email", order: 13 },
  { id: "meetings", label: "14 Meetings", href: "#14-meetings", order: 14 },
  { id: "pre-send-checklist", label: "15 Pre-Send Checklist", href: "#15-pre-send-checklist", order: 15 },
] as const satisfies readonly NavItem[];

export const APPENDIX_NAV_ITEMS = [
  { id: "governance-approvals", label: "Governance & Approvals", href: "#governance-approvals", order: 16 },
  { id: "templates-downloadables", label: "Templates & Downloadables", href: "#templates-downloadables", order: 17 },
  { id: "faq-edge-cases", label: "FAQ / Edge Cases", href: "#faq-edge-cases", order: 18 },
  { id: "footer-versioning", label: "Versioning", href: "#footer-versioning", order: 19 },
] as const satisfies readonly NavItem[];

export const NAV_GROUPS = [
  {
    id: "foundation",
    title: "Foundation",
    items: ["philosophy", "positioning", "operating-pillars"],
  },
  {
    id: "visual",
    title: "Visual System",
    items: ["logo-usage", "color-palette", "typography", "imagery"],
  },
  {
    id: "communication",
    title: "Communication",
    items: ["voice-tone", "claims-discipline", "writing-mechanics"],
  },
  {
    id: "application",
    title: "Application",
    items: ["documents", "presentations", "email", "meetings", "pre-send-checklist"],
  },
] as const satisfies readonly NavGroup[];

export const BRAND_NAVIGATION = {
  id: "brand-handbook",
  title: "Brand Handbook",
  items: [...BRAND_NAV_ITEMS, ...APPENDIX_NAV_ITEMS],
  groups: NAV_GROUPS,
} as const satisfies NavSection;
