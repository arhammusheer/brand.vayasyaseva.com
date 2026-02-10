import type { NavGroup, NavItem, NavSection } from "../../lib/types/brand";

export const BRAND_NAV_ITEMS = [
  { id: "overview", label: "01 Overview", href: "#01-overview", order: 1 },
  { id: "identity", label: "02 Identity", href: "#02-identity", order: 2 },
  { id: "brand-architecture", label: "03 Brand Architecture", href: "#03-brand-architecture", order: 3 },
  { id: "operating-pillars", label: "04 Operating Pillars", href: "#04-operating-pillars", order: 4 },
  { id: "logo-usage", label: "05 Logo Usage", href: "#05-logo-usage", order: 5 },
  { id: "color-palette", label: "06 Color Palette", href: "#06-color-palette", order: 6 },
  { id: "typography", label: "07 Typography", href: "#07-typography", order: 7 },
  { id: "imagery", label: "08 Imagery", href: "#08-imagery", order: 8 },
  { id: "voice-tone", label: "09 Voice & Tone", href: "#09-voice-tone", order: 9 },
  { id: "claims-discipline", label: "10 Claims Discipline", href: "#10-claims-discipline", order: 10 },
  { id: "writing-mechanics", label: "11 Writing Mechanics", href: "#11-writing-mechanics", order: 11 },
  { id: "documents", label: "12 Documents", href: "#12-documents", order: 12 },
  { id: "presentations", label: "13 Presentations", href: "#13-presentations", order: 13 },
  { id: "email", label: "14 Email", href: "#14-email", order: 14 },
  { id: "meetings", label: "15 Meetings", href: "#15-meetings", order: 15 },
  { id: "pre-send-checklist", label: "16 Pre-Send Checklist", href: "#16-pre-send-checklist", order: 16 },
] as const satisfies readonly NavItem[];

export const APPENDIX_NAV_ITEMS = [
  { id: "governance-approvals", label: "Governance & Approvals", href: "#governance-approvals", order: 17 },
  { id: "templates-downloadables", label: "Templates & Assets", href: "#templates-downloadables", order: 18 },
  { id: "faq-edge-cases", label: "FAQ / Edge Cases", href: "#faq-edge-cases", order: 19 },
  { id: "changelog", label: "Changelog", href: "#changelog", order: 20 },
  { id: "footer-versioning", label: "Versioning", href: "#footer-versioning", order: 21 },
] as const satisfies readonly NavItem[];

export const NAV_GROUPS = [
  {
    id: "foundation",
    title: "Foundation",
    items: ["overview", "identity", "brand-architecture", "operating-pillars"],
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
