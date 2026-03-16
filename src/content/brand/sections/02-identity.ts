import type {
  SectionHeader,
  SectionSummaryStrip,
  ServiceCapability,
} from "../../../lib/types/brand";

export const IDENTITY_SECTION = {
  header: {
    id: "identity",
    number: "02",
    title: "Identity",
    summary: "The approved company description, service map, operating model, and scope boundaries.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You need to explain what Vayasya is, what we do, or what we should be called.",
    doThis: "Use the approved intro, service map, and scope boundaries exactly as written.",
    neverDoThis:
      "Do not describe Vayasya as a staffing marketplace, a job portal, or a generalist company that does everything.",
    whoNeedsThis:
      "Field/site teams, sales/account, HR/admin, leadership, recruiters, and anyone client-facing.",
  } satisfies SectionSummaryStrip,

  intro:
    "Vayasya should be described as a compliance-first industrial services company with defined operating services, clear ownership, and disciplined delivery. This section is the source of truth for how the company is introduced and scoped.",

  approvedIntros: {
    short:
      "Vayasya supports industrial and operational environments with compliance-first services across workforce deployment, housekeeping, warehouses and logistics, civil and fabrication works, maintenance, and equipment or material support.",
    paragraph:
      "Vayasya is a compliance-first industrial services company serving operational environments that need dependable execution, clear ownership, and disciplined controls. We support workforce deployment, housekeeping, warehouses and logistics, civil and fabrication works, machinery maintenance, and equipment or material support through a structured operating model from intake to compliance closure.",
    recruiter:
      "Vayasya is not a job marketplace or staffing app. We run structured industrial service operations for client environments with strong compliance, supervision, and delivery controls.",
  },

  identitySignals: [
    "Compliance-first and audit-aware",
    "Industrial and operations-grounded",
    "Clear on scope, ownership, and timelines",
    "Professional, disciplined, and non-dramatic",
  ],

  serviceCapabilities: [
    {
      name: "Workforce deployment",
      approvedDescription:
        "Deployment and management support for workforce requirements in operational environments.",
      scopeBoundary: "Do not describe this as a job marketplace, hiring app, or open-ended recruitment service.",
    },
    {
      name: "Housekeeping",
      approvedDescription:
        "Managed housekeeping support for industrial and operational facilities with defined supervision and service controls.",
      scopeBoundary: "Keep the language operational and managed-service focused, not lifestyle or hospitality-focused.",
    },
    {
      name: "Warehouses and logistics",
      approvedDescription:
        "Operational support for warehouse and logistics environments where process reliability and compliance matter.",
      scopeBoundary:
        "Do not imply a national logistics network or software platform capability unless it is specifically approved.",
    },
    {
      name: "Civil and fabrication works",
      approvedDescription:
        "Defined civil and fabrication support for client operating environments with controlled scope and supervision.",
      scopeBoundary: "Do not generalize this into unlimited turnkey construction capability.",
    },
    {
      name: "Machinery maintenance",
      approvedDescription:
        "Maintenance support for machinery and operational equipment within approved service boundaries.",
      scopeBoundary: "Do not use OEM, fail-proof, or zero-downtime language without specific evidence and approval.",
    },
    {
      name: "Equipment and material support",
      approvedDescription:
        "Support for equipment or material-related operational needs where the scope, owner, and delivery method are defined.",
      scopeBoundary: "Do not broaden this into open-ended procurement or supply-chain capability.",
    },
  ] satisfies readonly ServiceCapability[],

  operatingModel: [
    {
      step: "Intake",
      detail: "Clarify requirement, site context, ownership, and scope before committing language or timelines.",
    },
    {
      step: "Scope definition",
      detail: "Document what is included, what is excluded, and what depends on client input or approval.",
    },
    {
      step: "Execution setup",
      detail: "Assign owners, checkpoints, and operating controls before active delivery begins.",
    },
    {
      step: "Service delivery",
      detail: "Run the work with visible status, dated updates, and disciplined escalation.",
    },
    {
      step: "Compliance closure",
      detail: "Close the loop with documentation, follow-through, and evidence where required.",
    },
  ],

  boundaries: [
    "Not a staffing marketplace or consumer job portal.",
    "Not a lifestyle, wellness, or inspiration-led brand.",
    "Not a vague general contractor for every possible business need.",
    "Do not say we do everything for every industry.",
    "Do not promise outcomes, dates, or compliance states that have not been confirmed.",
  ],

  rules: [
    "Describe the company using approved service categories, not improvised umbrella labels.",
    "Lead with operating clarity, compliance, and scope control rather than hype or abstraction.",
    "If a client asks about a service beyond the approved map, state that the scope must be confirmed first.",
    "Use one approved intro for the situation instead of writing a fresh one every time.",
    "Keep service breadth aligned with the public site and current approved capability.",
  ],
} as const;
