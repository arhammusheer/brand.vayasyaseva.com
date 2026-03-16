import {
  ReferenceDoDontBlock,
  ReferenceFieldDefaults,
  ReferenceRulesBlock,
  ReferenceSectionHeading,
  ReferenceTemplatesBlock,
  VisualReferencePageShell,
} from "../../../components/brand/visual-reference-shell";
import { IMAGERY_SECTION } from "../../../content/brand/sections/imagery";
import { getVisualReferencePage } from "../../../content/brand/visual-reference";
import { buildBrandPageMetadata } from "../../../lib/brand-utils";

const visualPage = (() => {
  const page = getVisualReferencePage("imagery");
  if (!page) {
    throw new Error("Missing visual reference page configuration for imagery.");
  }

  return page;
})();

export const metadata = buildBrandPageMetadata({
  title: "Imagery | Vayasya Visual Reference",
  description:
    "Full Vayasya imagery reference covering sourcing rules, proof-first scenarios, acceptable usage, and release guidance.",
  path: "/visual/imagery",
});

export default function VisualImageryPage() {
  return (
    <VisualReferencePageShell page={visualPage}>
      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Imagery principles"
          description={IMAGERY_SECTION.intro}
        />
        <ReferenceFieldDefaults
          items={IMAGERY_SECTION.employeeDefaults}
          title="Employee-safe default"
        />
      </section>

      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Scenario guidance"
          description="Use these scenarios to decide whether the selected imagery adds proof, context, and operational meaning."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {IMAGERY_SECTION.scenarios.map((scenario) => (
            <div key={scenario.context} className="rounded-lg border border-[color:var(--vy-border)] p-5">
              <p className="font-medium text-[color:var(--vy-text-strong)]">{scenario.context}</p>
              <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">Risk: {scenario.risk}</p>
              <p className="mt-3 text-sm text-[color:var(--vy-fg)]">{scenario.recommended}</p>
            </div>
          ))}
        </div>
      </section>

      <ReferenceRulesBlock rules={IMAGERY_SECTION.rules} />
      <ReferenceDoDontBlock examples={IMAGERY_SECTION.doDont} />
      <ReferenceTemplatesBlock templates={IMAGERY_SECTION.templates} />
    </VisualReferencePageShell>
  );
}
