import type { SectionHeader } from "../../../lib/types/brand";

export const CHANGELOG_SECTION = {
  header: {
    id: "changelog",
    number: "20",
    title: "Changelog",
    summary: "Version history and change records for this handbook.",
  } satisfies SectionHeader,

  intro:
    "Every change to the brand handbook is recorded here. Major versions indicate policy or framework changes. Minor versions indicate wording refinements.",

  entries: [
    {
      version: "v3.0.0",
      date: "12 Feb 2026",
      summary:
        "Major color system overhaul: neutral/gold scales, harmonized vertical families, semantic decoupling, and chart palette standardization.",
      changes: [
        {
          type: "changed" as const,
          description:
            "Replaced legacy gold and accent tones with the new master gold and vertical color families.",
        },
        {
          type: "added" as const,
          description:
            "Introduced full neutral, gold, Seva, Setu, Kaushal, and Prabandh token scales.",
        },
        {
          type: "added" as const,
          description:
            "Added semantic pending token and ordered 8-color data-visualization palette.",
        },
        {
          type: "changed" as const,
          description:
            "Applied explicit token role mapping for canvas, text, border, brand, and focus-ring usage.",
        },
        {
          type: "changed" as const,
          description:
            "Updated architecture and handbook guidance to enforce 70/20/10 color usage ratio.",
        },
        {
          type: "fixed" as const,
          description:
            "Updated logo placeholder assets to reflect new gold and vertical accent values.",
        },
      ],
    },
    {
      version: "v2.0.0",
      date: "11 Feb 2026",
      summary:
        "Major restructure: added identity foundations, brand architecture, and changelog. Renumbered all sections.",
      changes: [
        {
          type: "added" as const,
          description:
            "Section 01 Overview — handbook usage guide and quick-reference links",
        },
        {
          type: "added" as const,
          description:
            "Section 02 Identity — what Vayasya is, anti-brand rules, merged from philosophy and positioning",
        },
        {
          type: "added" as const,
          description:
            "Section 03 Brand Architecture — master brand vs verticals, naming and accent rules",
        },
        {
          type: "added" as const,
          description: "Section 20 Changelog — version history",
        },
        {
          type: "removed" as const,
          description:
            "Philosophy and Positioning as standalone sections (content absorbed into Identity)",
        },
        {
          type: "changed" as const,
          description:
            "All sections renumbered to accommodate new additions",
        },
        {
          type: "changed" as const,
          description:
            "Page title updated from Vayasya Seva to Vayasya Brand Handbook",
        },
        {
          type: "fixed" as const,
          description: "Logo file paths corrected in data files",
        },
        {
          type: "fixed" as const,
          description:
            "Footer contact email updated to brand office inbox",
        },
        {
          type: "changed" as const,
          description:
            "Templates, legal patterns, and approval criteria now rendered in UI",
        },
      ],
    },
    {
      version: "v1.0.0",
      date: "10 Feb 2026",
      summary: "Initial release of the Vayasya brand handbook.",
      changes: [
        {
          type: "added" as const,
          description:
            "19 sections covering philosophy, visual system, communication, application, and appendix",
        },
        {
          type: "added" as const,
          description:
            "Interactive color swatches, type specimen, logo previews",
        },
        {
          type: "added" as const,
          description:
            "Claims discipline framework with evidence tiers",
        },
        {
          type: "added" as const,
          description:
            "Pre-send checklist and governance approval matrix",
        },
      ],
    },
  ],
} as const;
