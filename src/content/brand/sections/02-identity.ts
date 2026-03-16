import type {
  DoDontExample,
  SectionHeader,
  SectionSummaryStrip,
  ServiceCapability,
  TemplateSpec,
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
    neverDoThis: "Do not describe Vayasya as a staffing marketplace, a job portal, or a generalist company that does everything.",
    whoNeedsThis: "Field/site teams, sales/account, HR/admin, leadership, recruiters, and anyone client-facing.",
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

  whatWeAreNot: [
    "Not a staffing marketplace or consumer job portal",
    "Not a lifestyle, wellness, or inspiration-led brand",
    "Not a vague general contractor for every possible business need",
    "Not a company that makes promises without evidence or operating controls",
  ],

  serviceCapabilities: [
    {
      name: "Workforce deployment",
      approvedDescription:
        "Deployment and management support for workforce requirements in operational environments.",
      includes: [
        "Structured manpower deployment",
        "Client-site coordination",
        "Attendance and compliance-linked operating support",
      ],
      notIncluded: [
        "Open-ended recruitment promises",
        "Consumer job placement messaging",
      ],
      onRequest: [
        "Location-specific deployment details",
        "Role-specific operating notes",
      ],
      proofPoints: [
        "Use when discussing workforce service execution",
        "Keep the focus on operating discipline, not hiring hype",
      ],
    },
    {
      name: "Housekeeping",
      approvedDescription:
        "Managed housekeeping support for industrial and operational facilities with defined supervision and service controls.",
      includes: [
        "Routine site housekeeping support",
        "Defined service ownership",
        "Operational reporting and review points",
      ],
      notIncluded: [
        "Lifestyle or hospitality positioning",
        "Decorative service language",
      ],
      onRequest: [
        "Site-specific scope breakdown",
        "Frequency and supervision details",
      ],
      proofPoints: [
        "Describe as managed service execution",
        "Avoid generic 'facility solution' phrasing",
      ],
    },
    {
      name: "Warehouses and logistics",
      approvedDescription:
        "Operational support for warehouse and logistics environments where process reliability and compliance matter.",
      includes: [
        "Warehouse-support workflows",
        "Operational coordination",
        "Structured supervision and reporting",
      ],
      notIncluded: [
        "National logistics network claims without evidence",
        "Technology-platform claims unless verified",
      ],
      onRequest: [
        "Site and process-specific scope details",
        "Role coverage by client need",
      ],
      proofPoints: [
        "Keep the language operational and scope-led",
        "Do not imply software capability unless accurate",
      ],
    },
    {
      name: "Civil and fabrication works",
      approvedDescription:
        "Defined civil and fabrication support for client operating environments with controlled scope and supervision.",
      includes: [
        "Civil works support",
        "Fabrication-related execution support",
        "Scope-led delivery language",
      ],
      notIncluded: [
        "Unlimited turnkey construction claims",
        "Guarantees beyond approved scope",
      ],
      onRequest: [
        "Project-type examples",
        "Scope boundary clarification",
      ],
      proofPoints: [
        "Always tie the service to defined scope",
        "Do not generalize into all-construction capability",
      ],
    },
    {
      name: "Machinery maintenance",
      approvedDescription:
        "Maintenance support for machinery and operational equipment within approved service boundaries.",
      includes: [
        "Maintenance-related support services",
        "Operational coordination and follow-through",
        "Client-specific maintenance context when approved",
      ],
      notIncluded: [
        "OEM-level claims without evidence",
        "Zero-downtime or fail-proof language",
      ],
      onRequest: [
        "Specific maintenance coverage examples",
        "Asset-type references where approved",
      ],
      proofPoints: [
        "Use maintenance language only where current capability exists",
        "Tie promises to approved scope and evidence",
      ],
    },
    {
      name: "Equipment and material support",
      approvedDescription:
        "Support for equipment or material-related operational needs where the scope, owner, and delivery method are defined.",
      includes: [
        "Operational support tied to client requirements",
        "Defined delivery ownership",
        "Structured follow-up and review",
      ],
      notIncluded: [
        "Open-ended procurement or supply-chain claims",
        "Capabilities not already offered or approved",
      ],
      onRequest: [
        "Channel-specific description",
        "Project-specific scope boundaries",
      ],
      proofPoints: [
        "Keep the wording precise and scoped",
        "Avoid broad procurement positioning",
      ],
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

  whatWeDoNotSay: [
    "We do everything for every industry.",
    "We guarantee any outcome not tied to scope or contract.",
    "We are a job portal, recruitment marketplace, or staffing app.",
    "We are the best, leading, or unmatched without measured evidence.",
    "We can start immediately with no dependencies or approvals.",
  ],

  rules: [
    "Describe the company using approved service categories, not improvised umbrella labels.",
    "Lead with operating clarity, compliance, and scope control rather than hype or abstraction.",
    "If a client asks about a service beyond the approved map, state that the scope must be confirmed first.",
    "Use one approved intro for the situation instead of writing a fresh one every time.",
    "Keep service breadth aligned with the public site and current approved capability.",
  ],

  doDont: [
    {
      topic: "20-second company intro",
      do: "Vayasya is a compliance-first industrial services company supporting workforce deployment, housekeeping, warehouses and logistics, civil and fabrication works, machinery maintenance, and equipment or material support.",
      dont: "Vayasya is a complete workforce platform and recruitment marketplace for every staffing need.",
      why: "The approved version matches current public positioning and stays within real operating scope.",
    },
    {
      topic: "Recruiter explanation",
      do: "We support structured industrial service operations. We are not a consumer job portal.",
      dont: "We are basically a hiring platform for anyone looking for work.",
      why: "This keeps the company description aligned to business reality.",
    },
    {
      topic: "Capability explanation",
      do: "We can discuss maintenance support within approved scope after reviewing the site need and ownership.",
      dont: "Yes, we handle every kind of maintenance end to end with no issue.",
      why: "Scope-first wording prevents overcommitment.",
    },
    {
      topic: "Service breadth",
      do: "For this conversation, the relevant services are workforce deployment and site housekeeping.",
      dont: "We handle all industrial needs, so there is no need to define scope.",
      why: "Focused scope language is more credible and safer.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "20-second introduction",
      purpose: "Keep verbal introductions consistent across field, sales, and leadership contexts.",
      whenToUse: "Calls, site visits, first meetings, and client introductions.",
      template:
        "Vayasya is a compliance-first industrial services company supporting <relevant approved services> with clear ownership, disciplined execution, and structured operating controls.",
      guardrails: [
        "Mention only services relevant to the context.",
        "Do not add comparative or guarantee language.",
        "If the ask is outside approved scope, say the scope must be confirmed first.",
      ],
    },
    {
      name: "Recruiter / HR company explanation",
      purpose: "Give candidates and vendors a correct company description.",
      whenToUse: "Recruiter outreach, HR/admin communication, and vendor introductions.",
      template:
        "Vayasya supports industrial service operations through workforce deployment, housekeeping, warehouses and logistics, civil and fabrication works, maintenance, and equipment or material support. We operate with compliance-first controls rather than marketplace-style hiring language.",
      guardrails: [
        "Do not position Vayasya as a staffing app or job portal.",
        "Do not add unapproved scale claims.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
