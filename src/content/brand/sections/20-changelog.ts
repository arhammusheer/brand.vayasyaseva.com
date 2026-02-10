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
            "Contact email marked as TODO (was example domain)",
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
