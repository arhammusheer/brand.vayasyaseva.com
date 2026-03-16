import {
  ReferenceDownloadablesBlock,
  ReferenceRulesBlock,
  ReferenceSectionHeading,
  VisualReferencePageShell,
} from "../../../components/brand/visual-reference-shell";
import {
  TypographyHierarchyExamplesGrid,
  TypographyQuickActionsGrid,
  TypographyRoleActionsGrid,
  TypographySpecimenGrid,
  TypographySurfaceGuidesGrid,
} from "../../../components/brand/typography-panels";
import {
  TYPOGRAPHY_REFERENCE,
  TYPOGRAPHY_SECTION,
} from "../../../content/brand/sections/typography";
import { getVisualReferencePage } from "../../../content/brand/visual-reference";
import { buildBrandPageMetadata } from "../../../lib/brand-utils";

const visualPage = (() => {
  const page = getVisualReferencePage("typography");
  if (!page) {
    throw new Error("Missing visual reference page configuration for typography.");
  }

  return page;
})();

export const metadata = buildBrandPageMetadata({
  title: "Typography | Vayasya Visual Reference",
  description:
    "Role-first Vayasya typography reference for designers, developers, and reviewers covering font packs, hierarchy, surface guidance, and technical checks.",
  path: "/visual/typography",
});

export default function VisualTypographyPage() {
  return (
    <VisualReferencePageShell page={visualPage}>
      <section className="space-y-6">
        <TypographyRoleActionsGrid
          items={TYPOGRAPHY_REFERENCE.roleActions}
          title="Role quick actions"
        />
        <TypographyQuickActionsGrid
          actions={TYPOGRAPHY_REFERENCE.specialistQuickActions}
          title="Specialist quick actions"
          description="Jump to the right pack, hierarchy view, surface guidance, or review path before scanning the whole page."
        />
      </section>

      <section className="space-y-6" id="font-pack-approved-stacks">
        <ReferenceSectionHeading
          title="Font pack and approved stacks"
          description={TYPOGRAPHY_SECTION.intro}
        />
        <ReferenceDownloadablesBlock assets={[TYPOGRAPHY_SECTION.fontPack]} title="Approved font pack" />
        <TypographySpecimenGrid
          cards={TYPOGRAPHY_SECTION.specimenCards}
          title="Approved stacks and roles"
        />
        <ReferenceRulesBlock rules={TYPOGRAPHY_SECTION.rules} title="Core family rules" />
      </section>

      <section className="space-y-6" id="surface-chooser">
        <ReferenceSectionHeading
          title="Surface chooser"
          description="Choose the type treatment by actual surface so product, data, and collateral work stay aligned to the same system."
        />
        <TypographySurfaceGuidesGrid
          items={TYPOGRAPHY_REFERENCE.surfaceGuides}
          title="Approved surface guidance"
        />
      </section>

      <section className="space-y-6" id="hierarchy-system">
        <ReferenceSectionHeading
          title="Hierarchy system"
          description="Use the specimen-led scale first, then confirm the technical size and line-height values in the matrix below."
        />
        <TypographyHierarchyExamplesGrid
          items={TYPOGRAPHY_REFERENCE.hierarchyExamples}
          title="Specimen-led hierarchy"
        />
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

      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Formatting controls"
          description="Use these as execution checks for readability, casing, data formatting, and hierarchy discipline."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {TYPOGRAPHY_SECTION.languageControls.map((item) => (
            <div key={item.rule} className="rounded-lg border border-[color:var(--vy-border)] p-5">
              <p className="font-medium text-[color:var(--vy-text-strong)]">{item.rule}</p>
              <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{item.rationale}</p>
              <p className="mt-3 text-sm text-[color:var(--vy-fg)]">{item.examples.join(" ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6" id="review-technical-notes">
        <ReferenceSectionHeading
          title="Review and technical notes"
          description="Use these checks before approving a branded surface or shipping a product implementation that relies on the type system."
        />
        <ReferenceRulesBlock
          rules={TYPOGRAPHY_REFERENCE.reviewerChecklist}
          title="Reviewer checklist"
        />
        <ReferenceRulesBlock
          rules={TYPOGRAPHY_REFERENCE.technicalNotes}
          title="Technical notes"
        />
      </section>
    </VisualReferencePageShell>
  );
}
