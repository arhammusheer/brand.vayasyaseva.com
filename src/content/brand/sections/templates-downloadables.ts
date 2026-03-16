import type {
  DoDontExample,
  RepresentationAsset,
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
} from "../../../lib/types/brand";

export const TEMPLATES_DOWNLOADABLES_SECTION = {
  header: {
    id: "templates-downloadables",
    number: "18",
    title: "Representation Pack & Assets",
    summary: "Use self-serve approved assets and copy blocks for everyday representation work.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You need a signature, bio line, approved intro, script, or standard external asset quickly.",
    doThis: "Use the approved pack exactly as supplied and only escalate for non-standard needs.",
    neverDoThis: "Do not rewrite routine company copy or quietly edit standard templates.",
    whoNeedsThis: "All employees, especially HR/admin, supervisors, sales/account, and field/site teams.",
  } satisfies SectionSummaryStrip,

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

  doDont: [
    {
      topic: "Routine asset use",
      do: "Use the approved signature and intro paragraph directly from the representation pack.",
      dont: "Rewrite the company intro every time you send a quotation or update your profile.",
      why: "Consistency is faster and safer than reinvention.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Representation pack checklist",
      purpose: "Make sure a routine external-facing setup uses the approved basics.",
      whenToUse: "New employee setup, role change, or external-facing material creation.",
      template:
        "Need: <signature/bio/intro/script/template>\nApproved source used: <yes/no>\nRole / audience: <who will use it>\nAny edits made: <none or summary>\nGovernance required: <yes/no>",
      guardrails: [
        "If edits are made to a standard asset, re-check whether approval is required.",
        "Use self-serve only when the asset is already approved and unchanged.",
      ],
    },
    {
      name: "Quotation note block",
      purpose: "Give quotation owners an approved short note they can reuse safely.",
      whenToUse: "Quotations, proposal attachments, and commercial document sharing.",
      template:
        "Please find the attached quotation for <scope>. This version covers <included items> and follows the approved service description. Owner for follow-up: <name>. Next step requested: <specific action/date>.",
      guardrails: [
        "Do not add promises or broaden the service description in the note.",
        "Surface assumptions when they affect interpretation.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
