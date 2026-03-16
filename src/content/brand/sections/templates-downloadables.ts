import type {
  RepresentationAsset,
  SectionHeader,
} from "../../../lib/types/brand";

export const TEMPLATES_DOWNLOADABLES_SECTION = {
  header: {
    id: "templates-downloadables",
    number: "18",
    title: "Representation Pack & Assets",
    summary: "Use self-serve approved assets and copy blocks for everyday representation work.",
  } satisfies SectionHeader,

  intro:
    "This section replaces a controlled-access mindset for routine assets. Standard representation materials should be easy to use without waiting for approval each time.",

  assets: [
    {
      name: "Approved email signature",
      audience: "All employees",
      copy: "Use the standard company signature block with approved logo, role title, and contact format.",
      whenToUse: "Any official company email account.",
      governanceLevel: "self-serve",
    },
    {
      name: "Short company intro",
      audience: "Field/site, sales/account, HR/admin",
      copy:
        "Vayasya is a compliance-first industrial services company supporting approved operational service areas with clear ownership and disciplined execution.",
      whenToUse: "Introductions, profile text, quotation notes, and first-contact communication.",
      governanceLevel: "self-serve",
    },
    {
      name: "Vertical descriptions",
      audience: "Sales/account, leadership, HR/admin",
      copy: "Use the approved one-line vertical descriptions only when the context is clearly vertical-specific.",
      whenToUse: "Decks, bios, capability notes, and role-specific communication.",
      governanceLevel: "self-serve",
    },
    {
      name: "Phone and site scripts",
      audience: "Field/site teams and supervisors",
      copy: "Use approved intro, closeout, and delay-update scripts from the handbook without rewriting them.",
      whenToUse: "Calls, site visits, and live client interaction.",
      governanceLevel: "self-serve",
    },
    {
      name: "New public copy or custom asset",
      audience: "Owners and reviewers",
      copy: "Anything outside the approved pack requires governance review.",
      whenToUse: "Public copy changes, new templates, new logo variants, or high-risk claims.",
      governanceLevel: "approval-required",
    },
  ] satisfies readonly RepresentationAsset[],

  rules: [
    "Routine approved assets are self-serve by default.",
    "If you edit an approved template structurally, route it through governance before reuse.",
    "Do not create alternate bios, signatures, or intro paragraphs when an approved one already exists.",
  ],
} as const;
