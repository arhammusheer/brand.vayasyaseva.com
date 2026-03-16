import type {
  Pillar,
  SectionHeader,
} from "../../../lib/types/brand";

export const OPERATING_PILLARS_SECTION = {
  header: {
    id: "operating-pillars",
    number: "04",
    title: "Operating Pillars",
    summary: "Daily behavior standards for handoff quality, escalation, compliance, and client interaction.",
  } satisfies SectionHeader,

  intro:
    "The pillars are daily operating behaviors. They matter most when work is under pressure, when something changes, or when the client needs a clear answer.",

  pillars: [
    {
      name: "Clarity",
      definition: "Every update should make the current situation understandable without a follow-up call.",
      behaviors: [
        "Name the owner, status, next step, and timing in every update.",
        "State what is included and what is not included before work starts.",
        "Use plain language when handing off tasks across shifts or teams.",
      ],
      redFlags: [
        "Update has no owner or date.",
        "Scope is implied instead of written.",
        "People leave a meeting with different interpretations.",
      ],
    },
    {
      name: "Reliability",
      definition: "Commitments should be realistic, visible, and tracked until closed.",
      behaviors: [
        "Commit only to dates and actions you own or that have been confirmed.",
        "Raise risk before the deadline is missed, not after.",
        "Close the loop with the client or internal owner once the action is complete.",
      ],
      redFlags: [
        "Repeated status updates with no movement.",
        "Surprise delay messaging.",
        "Verbal promises with no written follow-through.",
      ],
    },
    {
      name: "Accountability",
      definition: "Decisions, changes, and exceptions should always have a named owner.",
      behaviors: [
        "Record who approved the decision and what changed.",
        "Escalate when a request moves beyond your authority or approved scope.",
        "Own the message even when the news is negative.",
      ],
      redFlags: [
        "Everyone references 'the team' but no person is named.",
        "Scope changes are discussed but not recorded.",
        "People assume prior approval still applies after wording changes.",
      ],
    },
    {
      name: "Respect",
      definition: "Professional discipline should show in tone, appearance, and client handling.",
      behaviors: [
        "Use factual, calm language in delays or disagreements.",
        "Show up with approved identity, appearance, and purpose on site visits.",
        "Respect the client's time by making every meeting or update action-ready.",
      ],
      redFlags: [
        "Blame-focused or emotional language.",
        "Casual or unclear site introductions.",
        "Long updates that hide the actual decision or request.",
      ],
    },
  ] satisfies readonly Pillar[],

  rules: [
    "If an update does not tell the receiver what changed, what to do, and by when, it is not ready.",
    "If a date or promise is not confirmed, label it as pending or target-based.",
    "If you are not the owner, do not make the commitment on behalf of someone else.",
    "If the interaction is client-facing, the pillar test applies before the pre-share test.",
  ],
} as const satisfies {
  header: SectionHeader;
  intro: string;
  pillars: readonly Pillar[];
  rules: readonly string[];
};
