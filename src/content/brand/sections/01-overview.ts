import type { SectionHeader } from "../../../lib/types/brand";

export const OVERVIEW_SECTION = {
  header: {
    id: "overview",
    number: "01",
    title: "Overview",
    summary: "What this handbook is, who it is for, and how to navigate it.",
  } satisfies SectionHeader,

  intro:
    "This is the single source of truth for Vayasya brand communication. It governs identity, visual system, voice, and operational standards across all verticals.",

  audience:
    "All employees, contractors, and partners producing Vayasya-branded materials — documents, presentations, emails, web content, and client-facing artifacts.",

  howToUse: [
    {
      step: "Read Foundations first",
      detail:
        "Understand what Vayasya is, how the brand architecture works, and what operating pillars govern execution.",
    },
    {
      step: "Reference Visual System and Voice during creation",
      detail:
        "Use logo, color, typography, and voice rules as active constraints while producing materials.",
    },
    {
      step: "Run Pre-Send Checklist before any external release",
      detail:
        "Every client-facing artifact must pass the quality gate in Section 16.",
    },
    {
      step: "Escalate edge cases through Governance",
      detail:
        "If a situation is not covered, do not improvise. Raise a governance request before publishing.",
    },
  ],

  quickLinks: [
    { label: "Logo Usage", anchor: "#05-logo-usage" },
    { label: "Color Palette", anchor: "#06-color-palette" },
    { label: "Voice & Tone", anchor: "#09-voice-tone" },
    { label: "Pre-Send Checklist", anchor: "#16-pre-send-checklist" },
    { label: "Templates & Assets", anchor: "#templates-downloadables" },
    { label: "Governance", anchor: "#governance-approvals" },
  ],
} as const;
