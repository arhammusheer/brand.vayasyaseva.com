import {
  ReferenceDownloadablesBlock,
  ReferenceFieldDefaults,
  ReferenceRulesBlock,
  ReferenceSectionHeading,
  VisualReferencePageShell,
} from "../../../components/brand/visual-reference-shell";
import { TYPOGRAPHY_SECTION } from "../../../content/brand/sections/typography";
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
    "Full Vayasya typography reference covering approved font packs, stacks, hierarchy, formatting controls, and implementation guidance.",
  path: "/visual/typography",
});

export default function VisualTypographyPage() {
  return (
    <VisualReferencePageShell page={visualPage}>
      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Font system"
          description={TYPOGRAPHY_SECTION.intro}
        />
        <ReferenceFieldDefaults
          items={TYPOGRAPHY_SECTION.employeeDefaults}
          title="Employee-safe default"
        />
        <ReferenceDownloadablesBlock assets={[TYPOGRAPHY_SECTION.fontPack]} title="Approved font pack" />
      </section>

      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Font stacks"
          description="Apply the approved family and usage role consistently across brand, product, and engineering work."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {TYPOGRAPHY_SECTION.stacks.map((stack) => (
            <div key={stack.family} className="rounded-lg border border-[color:var(--vy-border)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                {stack.label}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[color:var(--vy-text-strong)]">
                {stack.family}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--vy-muted-fg)]">{stack.usage}</p>
              <p className="mt-3 text-xs text-[color:var(--vy-muted-fg)]">
                Fallbacks: {stack.fallback.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Type hierarchy"
          description="Use the approved hierarchy levels as the default scale for titles, body copy, and data-heavy contexts."
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
          description="Keep language, casing, and line-length controls consistent across long-form content and interfaces."
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

      <ReferenceRulesBlock rules={TYPOGRAPHY_SECTION.rules} />
    </VisualReferencePageShell>
  );
}
