import type {
  ApprovalTrigger,
  DoDontExample,
  SectionHeader,
  SectionSummaryStrip,
  TemplateSpec,
} from "../../../lib/types/brand";

export const GOVERNANCE_APPROVALS_SECTION = {
  header: {
    id: "governance-approvals",
    number: "17",
    title: "Governance & Approvals",
    summary: "Governance is for exceptions, risky claims, and public-facing changes, not for routine approved assets.",
  } satisfies SectionHeader,

  summaryStrip: {
    useThisWhen: "You need to know whether a message, asset, or document must be approved before release.",
    doThis: "Use the trigger matrix below. If the item is standard and already approved, self-serve it.",
    neverDoThis: "Do not send risky wording first and hope approval can be added later.",
    whoNeedsThis: "Reviewers, owners, leadership, HR/admin, sales/account, and anyone unsure about approval needs.",
  } satisfies SectionSummaryStrip,

  intro:
    "The default mode is self-serve for standard assets, approved copy blocks, and routine usage. Governance is only for exceptions, public-risk language, new templates, or non-standard brand decisions.",

  triggers: [
    {
      title: "Approval required",
      requiredFor: [
        "Measured or contractual claims",
        "New public-facing company or service copy",
        "New template variants or asset variants",
        "Joint-offering material involving multiple verticals",
        "Changes to legal, commercial, or scope language",
      ],
      notRequiredFor: [
        "Routine use of approved signatures, logos, bios, and copy blocks",
        "Using the approved representation pack as supplied",
      ],
      approverRole: "Brand lead, plus legal or business owner when claim/commercial risk exists",
      responseSla: "2-4 business days depending on risk",
    },
    {
      title: "Self-serve allowed",
      requiredFor: [
        "Approved representation assets and copy blocks",
        "Approved templates used without structural changes",
        "Routine logo/font/signature usage",
      ],
      notRequiredFor: [
        "Fresh wording that changes promise level",
        "Edited templates with removed mandatory sections",
      ],
      approverRole: "No prior approval required if used exactly as approved",
      responseSla: "Immediate use",
    },
  ] satisfies readonly ApprovalTrigger[],

  rules: [
    "If the wording becomes stronger, broader, or more public, re-check approval need.",
    "If you edit an approved template structurally, it is no longer routine usage.",
    "If legal or commercial meaning changes, prior approval no longer covers it.",
  ],

  doDont: [
    {
      topic: "Routine asset use",
      do: "Use the approved signature and company intro block directly from the representation pack.",
      dont: "Wait for Brand Office approval every time a routine signature is needed.",
      why: "Standard approved assets are meant to reduce dependency, not create it.",
    },
    {
      topic: "High-risk wording",
      do: "Route revised performance or contract wording back through governance before release.",
      dont: "Assume earlier approval still applies after the wording is strengthened.",
      why: "Small wording changes can materially change the promise level.",
    },
  ] satisfies readonly DoDontExample[],

  templates: [
    {
      name: "Approval request block",
      purpose: "Submit high-risk or exception items with enough context for review.",
      whenToUse: "Public copy changes, non-standard claims, new templates, and new asset variants.",
      template:
        "Item: <name and link>\nWhy approval is needed: <trigger>\nChannel: <web/deck/email/document/profile>\nClaim / scope risk: <summary>\nRequested approver: <role>\nDeadline: <DD MMM YYYY>\nOwner: <name>",
      guardrails: [
        "Attach the actual wording or asset under review.",
        "State the trigger clearly instead of saying 'for approval' only.",
      ],
    },
  ] satisfies readonly TemplateSpec[],
} as const;
