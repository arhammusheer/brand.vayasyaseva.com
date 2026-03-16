import {
  ReferenceColorSwatchGrid,
  ReferenceFieldDefaults,
  ReferenceRulesBlock,
  ReferenceSectionHeading,
  VisualReferencePageShell,
} from "../../../components/brand/visual-reference-shell";
import { COLOR_PALETTE_SECTION } from "../../../content/brand/sections/color-palette";
import { getVisualReferencePage } from "../../../content/brand/visual-reference";
import { buildBrandPageMetadata } from "../../../lib/brand-utils";

const COLOR_ROLE_ORDER = [
  "Neutral",
  "Gold",
  "Seva",
  "Setu",
  "Kaushal",
  "Prabandh",
  "Semantic",
  "Data Visualization",
  "Role Mapping",
  "Compatibility",
] as const;

const visualPage = (() => {
  const page = getVisualReferencePage("color-palette");
  if (!page) {
    throw new Error("Missing visual reference page configuration for color palette.");
  }

  return page;
})();

export const metadata = buildBrandPageMetadata({
  title: "Color Palette | Vayasya Visual Reference",
  description:
    "Full Vayasya color reference covering brand tokens, semantic roles, scenario mappings, and implementation guidance.",
  path: "/visual/color-palette",
});

export default function VisualColorPalettePage() {
  const orderedColorRoles = [
    ...COLOR_ROLE_ORDER,
    ...Array.from(new Set(COLOR_PALETTE_SECTION.swatches.map((color) => color.role))).filter(
      (role) => !COLOR_ROLE_ORDER.includes(role as (typeof COLOR_ROLE_ORDER)[number]),
    ),
  ];

  return (
    <VisualReferencePageShell page={visualPage}>
      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Token system"
          description={COLOR_PALETTE_SECTION.intro}
        />
        <ReferenceFieldDefaults
          items={COLOR_PALETTE_SECTION.employeeDefaults}
          title="Employee-safe default"
        />
      </section>

      <section className="space-y-10">
        <ReferenceSectionHeading
          title="Full swatch catalog"
          description="Review the complete palette by role before making or approving a color decision."
        />
        {orderedColorRoles.map((role) => {
          const swatches = COLOR_PALETTE_SECTION.swatches.filter((color) => color.role === role);
          if (!swatches.length) return null;

          return <ReferenceColorSwatchGrid key={role} title={role} swatches={swatches} />;
        })}
      </section>

      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Scenario mappings"
          description="These scenarios show how the palette should behave in migrations, UI implementation, and reporting contexts."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {COLOR_PALETTE_SECTION.scenarios.map((scenario) => (
            <div key={scenario.context} className="rounded-lg border border-[color:var(--vy-border)] p-5">
              <p className="font-medium text-[color:var(--vy-text-strong)]">{scenario.context}</p>
              <p className="mt-3 text-sm text-[color:var(--vy-muted-fg)]">Risk: {scenario.risk}</p>
              <p className="mt-3 text-sm text-[color:var(--vy-fg)]">{scenario.recommended}</p>
            </div>
          ))}
        </div>
      </section>

      <ReferenceRulesBlock rules={COLOR_PALETTE_SECTION.rules} />
    </VisualReferencePageShell>
  );
}
