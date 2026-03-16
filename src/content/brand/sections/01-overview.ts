import type {
  QuickAnswerCard,
  RoleGuide,
  SectionHeader,
  SectionSummaryStrip,
} from "../../../lib/types/brand";

export const OVERVIEW_SECTION = {
  header: {
    id: "overview",
    number: "01",
    title: "Overview",
    summary: "Start here for the fastest correct answer by role, task, and channel.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You need a correct answer in under a minute.",
    doThis: "Pick your role or task first, then use the linked checklist or full section only if needed.",
    neverDoThis: "Do not improvise wording, promises, service scope, or asset usage from memory.",
    whoNeedsThis: "All employees, with first priority for field/site and client-facing teams.",
  } satisfies SectionSummaryStrip,

  intro:
    "This handbook is the operating reference for how Vayasya should be introduced, described, written, shown, and represented in daily work. Use it to answer real work questions quickly, then move deeper only when the task needs it.",

  audience:
    "Primary audience: field/site teams, supervisors, sales/account staff, HR/admin, leadership, and any employee speaking, writing, or sharing something client-facing.",

  goldenRules: [
    "Use approved words, scripts, and assets. Do not invent your own version.",
    "If you cannot prove a claim, remove it or downgrade it.",
    "State owner, timing, and next action in every external update.",
    "Use the correct brand or vertical name before you shorten anything.",
    "If a message could create legal, commercial, or client confusion, escalate before sending.",
    "For daily work, start with the task cards below. Do not read the whole handbook unless the task needs it.",
    "When in doubt, choose the safer, more specific statement.",
  ],

  roleGuides: [
    {
      role: "Site supervisor",
      mustKnow: [
        "How to introduce Vayasya on a site visit",
        "Uniform and ID expectations",
        "How to report delay, risk, or dependency factually",
      ],
      topTasks: [
        "Client visit introduction",
        "WhatsApp status update",
        "Site closeout summary",
      ],
      commonMistakes: [
        "Speaking beyond approved scope",
        "Giving verbal guarantees",
        "Sharing casual updates with no owner or date",
      ],
      escalateWhen:
        "The client asks for commitments, pricing, legal/compliance promises, or a service outside the approved scope.",
      relatedAnchors: ["#02-identity", "#09-voice-tone", "#15-meetings", "#16-pre-send-checklist"],
    },
    {
      role: "Field staff",
      mustKnow: [
        "How to identify yourself correctly",
        "When to use WhatsApp versus escalation",
        "What not to say about capability or timelines",
      ],
      topTasks: [
        "Daily status note",
        "Delay update",
        "Client-facing introduction",
      ],
      commonMistakes: [
        "Using unapproved shorthand for the company",
        "Overpromising on someone else's behalf",
        "Sharing incomplete updates",
      ],
      escalateWhen:
        "A client asks for a decision, a commitment date, or a capability explanation you do not own.",
      relatedAnchors: ["#02-identity", "#11-writing-mechanics", "#15-meetings", "#16-pre-send-checklist"],
    },
    {
      role: "Sales / account",
      mustKnow: [
        "Approved company description and service map",
        "Quotation and proposal cover-note rules",
        "Claims and evidence boundaries",
      ],
      topTasks: [
        "Capability introduction",
        "Quotation sharing note",
        "Proposal and deck review",
      ],
      commonMistakes: [
        "Using broad leadership or guarantee language",
        "Mixing verticals without clear ownership",
        "Describing services more narrowly or more broadly than the public site",
      ],
      escalateWhen:
        "Measured claims, contractual wording, joint-offering material, or any exception to the standard service description is needed.",
      relatedAnchors: ["#02-identity", "#10-claims-discipline", "#12-documents", "#13-presentations"],
    },
    {
      role: "HR / admin",
      mustKnow: [
        "Approved company intro for candidates and vendors",
        "Signature, bio, and profile copy rules",
        "How to route non-standard asks",
      ],
      topTasks: [
        "Recruiter explanation",
        "Profile or signature setup",
        "Routine external communication",
      ],
      commonMistakes: [
        "Describing Vayasya as a staffing marketplace or job portal",
        "Using outdated bios or signatures",
        "Adapting templates silently",
      ],
      escalateWhen:
        "New public-facing copy, new templates, or any claim about scale, compliance, or service performance is requested.",
      relatedAnchors: ["#02-identity", "#11-writing-mechanics", "#governance-approvals", "#templates-downloadables"],
    },
    {
      role: "Leadership / spokespeople",
      mustKnow: [
        "Master brand versus vertical framing",
        "Claim class and evidence expectations",
        "The approved service map and operating model",
      ],
      topTasks: [
        "Leadership introduction",
        "High-level client narrative",
        "Presentation review",
      ],
      commonMistakes: [
        "Using aspirational language as if already delivered",
        "Ad-libbing service breadth",
        "Approving one-off phrasing that creates a new standard",
      ],
      escalateWhen:
        "A statement will be published broadly, measured claims are used, or a new company description is proposed.",
      relatedAnchors: ["#02-identity", "#10-claims-discipline", "#13-presentations", "#governance-approvals"],
    },
    {
      role: "Design / marketing",
      mustKnow: [
        "The quick-reference layer serves non-design staff first",
        "Visual system detail remains authoritative lower in the page",
        "Standard assets are self-serve; exceptions route through governance",
      ],
      topTasks: [
        "Asset support",
        "Collateral review",
        "Copy/layout consistency",
      ],
      commonMistakes: [
        "Making the page denser instead of clearer",
        "Assuming field staff will read long rationale",
        "Treating design detail as universal guidance",
      ],
      escalateWhen:
        "A new asset variant, new template type, or new visual rule is proposed.",
      relatedAnchors: ["#05-logo-usage", "#06-color-palette", "#07-typography", "#templates-downloadables"],
    },
  ] satisfies readonly RoleGuide[],

  taskCards: [
    {
      title: "Introduce Vayasya in 20 seconds",
      roleOrTask: "Task",
      tenSecondRule:
        "Say who we serve, what services we run, and how we work with compliance and operating discipline.",
      checklistItems: [
        "Use the approved company intro",
        "Mention only services we actually provide",
        "Do not claim leadership or guarantees",
      ],
      fullGuideAnchor: "#02-identity",
    },
    {
      title: "Send a WhatsApp update",
      roleOrTask: "Task",
      tenSecondRule:
        "State current status, what changed, required action, owner, and next checkpoint in plain language.",
      checklistItems: [
        "Lead with current status",
        "Add date/time if action is needed",
        "Move to email or escalation if scope or claim risk exists",
      ],
      fullGuideAnchor: "#11-writing-mechanics",
    },
    {
      title: "Share a quotation",
      roleOrTask: "Task",
      tenSecondRule:
        "Use a short cover note that names scope, assumptions, owner, and next action without adding new promises.",
      checklistItems: [
        "Check service description against Identity",
        "Avoid promise language not in the quotation",
        "Run the pre-share gate before sending",
      ],
      fullGuideAnchor: "#12-documents",
    },
    {
      title: "Handle a client delay",
      roleOrTask: "Task",
      tenSecondRule:
        "Acknowledge the issue, state impact, name owner, and give the next dated action.",
      checklistItems: [
        "Do not hide or soften the issue",
        "Avoid blame wording",
        "Escalate if scope, money, or contract terms are affected",
      ],
      fullGuideAnchor: "#09-voice-tone",
    },
    {
      title: "Go on a site visit",
      roleOrTask: "Task",
      tenSecondRule:
        "Use approved identity, appearance, intro, observation language, and visit closeout behavior.",
      checklistItems: [
        "Carry correct ID and use approved uniform guidance",
        "Introduce yourself with role and purpose",
        "End with owner and next step",
      ],
      fullGuideAnchor: "#15-meetings",
    },
    {
      title: "Use a logo, signature, or intro paragraph",
      roleOrTask: "Task",
      tenSecondRule:
        "Take the approved asset or copy as-is. If you need a new version, escalate instead of editing it yourself.",
      checklistItems: [
        "Use the self-serve representation pack",
        "Do not recolor or rewrite from scratch",
        "Escalate only for exceptions",
      ],
      fullGuideAnchor: "#templates-downloadables",
    },
  ] satisfies readonly QuickAnswerCard[],
} as const;
