import {
  ReferenceDownloadRow,
  ReferenceRulesBlock,
  ReferenceSectionHeading,
} from "../../../components/brand/visual-reference-shell";
import {
  TypographyHierarchyExamplesGrid,
  TypographySpecimenGrid,
  TypographySurfaceGuidesGrid,
} from "../../../components/brand/typography-panels";
import {
  TYPOGRAPHY_REFERENCE,
  TYPOGRAPHY_SECTION,
} from "../../../content/brand/sections/typography";
import { buildBrandPageMetadata } from "../../../lib/brand-utils";

export const metadata = buildBrandPageMetadata({
  title: "Typography | Vayasya Visual Reference",
  description:
    "Reference-first Vayasya typography page covering the font pack, family roles, surface guidance, hierarchy, and release checks.",
  path: "/visual/typography",
});

export default function VisualTypographyPage() {
  return (
    <section className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--vy-muted-fg)]">
          Visual Reference
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-5xl">
          Typography
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-[color:var(--vy-muted-fg)] md:text-lg">
          Download the approved font pack, match each family to the right surface, and review hierarchy before release.
        </p>
      </header>

      <ReferenceDownloadRow assets={[TYPOGRAPHY_SECTION.fontPack]} title="Download font pack" />

      <section className="space-y-6" id="family-roles">
        <ReferenceSectionHeading
          title="Family roles"
          description="Use the three approved families by role: display, readable text, and precision-heavy data."
        />
        <TypographySpecimenGrid cards={TYPOGRAPHY_SECTION.specimenCards} title="Approved families" />
        <ReferenceRulesBlock rules={TYPOGRAPHY_SECTION.rules} title="Core family rules" />
      </section>

      <section className="space-y-6" id="surface-chooser">
        <ReferenceSectionHeading
          title="Use by surface"
          description="Choose the type treatment by actual surface so decks, UI, reports, and exports stay aligned."
        />
        <TypographySurfaceGuidesGrid items={TYPOGRAPHY_REFERENCE.surfaceGuides} title="Surface guidance" />
      </section>

      <section className="space-y-6" id="hierarchy-system">
        <ReferenceSectionHeading
          title="Hierarchy system"
          description="Use the specimen-led scale first, then confirm the technical size and line-height values in the matrix."
        />
        <TypographyHierarchyExamplesGrid items={TYPOGRAPHY_REFERENCE.hierarchyExamples} title="Specimen-led hierarchy" />
        <div className="overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--vy-muted)]">
              <tr>
                <th className="p-4 text-left font-medium">Level</th>
                <th className="p-4 text-left font-medium">Family</th>
                <th className="p-4 text-left font-medium">Weight</th>
                <th className="p-4 text-left font-medium">Size / line height</th>
                <th className="p-4 text-left font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              {TYPOGRAPHY_SECTION.hierarchy.map((level) => (
                <tr key={level.level} className="border-t border-[color:var(--vy-border)]">
                  <td className="p-4 font-medium">{level.level}</td>
                  <td className="p-4">{level.fontFamily}</td>
                  <td className="p-4">{level.fontWeight}</td>
                  <td className="p-4">
                    {level.fontSize} / {level.lineHeight}
                  </td>
                  <td className="p-4 text-[color:var(--vy-muted-fg)]">{level.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6" id="readability-implementation-checks">
        <ReferenceSectionHeading
          title="Readability and implementation checks"
          description="Use these execution checks to keep reading comfort, data precision, and product handoff aligned."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {TYPOGRAPHY_SECTION.languageControls.map((item) => (
            <div
              key={item.rule}
              className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-5"
            >
              <p className="font-medium text-[color:var(--vy-text-strong)]">{item.rule}</p>
              <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{item.rationale}</p>
              <p className="mt-3 text-sm text-[color:var(--vy-fg)]">{item.examples.join(" ")}</p>
            </div>
          ))}
        </div>
        <ReferenceRulesBlock rules={TYPOGRAPHY_REFERENCE.technicalNotes} title="Technical notes" />
      </section>

      <section className="space-y-6" id="review-technical-notes">
        <ReferenceSectionHeading
          title="Reviewer checklist"
          description="Use these checks before approving a branded surface or shipping a product implementation."
        />
        <ReferenceRulesBlock rules={TYPOGRAPHY_REFERENCE.reviewerChecklist} title="Release checks" />
      </section>
    </section>
  );
}
