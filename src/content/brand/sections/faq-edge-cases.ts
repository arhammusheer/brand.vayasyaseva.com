import type {
  QASection,
  SectionHeader,
} from "../../../lib/types/brand";

export const FAQ_EDGE_CASES_SECTION = {
  header: {
    id: "faq-edge-cases",
    number: "19",
    title: "Common Scenarios & Edge Cases",
    summary: "Plain-language answers for the real questions employees ask during the workday.",
  } satisfies SectionHeader,

  intro:
    "This index is written for browser-find and quick lookup. Use the tags exactly as an employee would search for them during real work.",

  faq: [
    {
      question: "WhatsApp: can I send a client update on WhatsApp?",
      answer:
        "Yes for short operational updates with status, owner, and next checkpoint. No for new commitments, pricing, legal wording, or anything that changes scope.",
      tags: ["whatsapp", "client update", "message"],
    },
    {
      question: "Phone: how should I open a client call?",
      answer:
        "State your name, company, role or team, and purpose in the first sentence. Keep the call scope-specific and move risky commitments to the right owner.",
      tags: ["phone", "call", "intro"],
    },
    {
      question: "Quotation: what should the cover note say?",
      answer:
        "State the scope, key assumptions, owner, and next action. Do not add new promises or broaden the approved service description in the note.",
      tags: ["quotation", "proposal", "cover note"],
    },
    {
      question: "Site visit: what should I say when I arrive?",
      answer:
        "Introduce yourself with name, company, role, and visit purpose. Close the visit with the next step, owner, and timing.",
      tags: ["site visit", "arrival", "intro"],
    },
    {
      question: "Uniform / ID card: when do these matter for brand representation?",
      answer:
        "Whenever you are in a client-facing visit or on-site context. Use approved identity and appearance guidance so the company presentation is professional and consistent.",
      tags: ["uniform", "id card", "appearance"],
    },
    {
      question: "Recruiter: how do I describe Vayasya to candidates?",
      answer:
        "Describe Vayasya as a compliance-first industrial services company, not a staffing marketplace or job portal.",
      tags: ["recruiter", "candidate", "hr"],
    },
    {
      question: "Supervisor: can I confirm a date on behalf of another owner?",
      answer:
        "No. You can communicate the current target and dependency status, but confirmed commitments should come from the owner or approved plan.",
      tags: ["supervisor", "date", "commitment"],
    },
    {
      question: "LinkedIn / social: can I write my own company description?",
      answer:
        "Use the approved short company intro and keep it general. Do not publish unapproved scale, performance, or service claims in personal profiles.",
      tags: ["linkedin", "social", "profile"],
    },
    {
      question: "Client visit: what if the client asks for an adjacent service?",
      answer:
        "State what is in scope for the current discussion and say the wider requirement will be reviewed before confirmation.",
      tags: ["client visit", "scope", "adjacent service"],
    },
    {
      question: "Delay: what is the minimum acceptable update?",
      answer:
        "Current status, what changed, impact, owner, and next checkpoint. If cost, scope, or contract is affected, escalate.",
      tags: ["delay", "status", "escalation"],
    },
  ] satisfies readonly QASection[],
} as const;
