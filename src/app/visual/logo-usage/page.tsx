import Image from "next/image";

import {
  LogoAssetMatrix,
  LogoMisuseGrid,
  LogoPreviewGrid,
  LogoQuickActionsGrid,
  LogoRelatedAssetsGrid,
  LogoRoleActionsGrid,
  LogoRoleSections,
} from "../../../components/brand/logo-usage-panels";
import {
  ReferenceDownloadablesBlock,
  ReferenceFieldDefaults,
  ReferenceNote,
  ReferenceRulesBlock,
  ReferenceSectionHeading,
  VisualReferencePageShell,
} from "../../../components/brand/visual-reference-shell";
import {
  LOGO_USAGE_REFERENCE,
  LOGO_USAGE_SECTION,
} from "../../../content/brand/sections/logo-usage";
import { getVisualReferencePage } from "../../../content/brand/visual-reference";
import { buildBrandPageMetadata } from "../../../lib/brand-utils";

const visualPage = (() => {
  const page = getVisualReferencePage("logo-usage");
  if (!page) {
    throw new Error("Missing visual reference page configuration for logo usage.");
  }

  return page;
})();

export const metadata = buildBrandPageMetadata({
  title: "Logo Usage | Vayasya Visual Reference",
  description:
    "Role-first Vayasya logo reference for designers, developers, and reviewers covering asset packs, approved variants, misuse checks, and technical assets.",
  path: "/visual/logo-usage",
});

export default function VisualLogoUsagePage() {
  const variantPreviewCards = LOGO_USAGE_SECTION.previewCards;

  return (
    <VisualReferencePageShell page={visualPage}>
      <section className="space-y-6">
        <LogoRoleActionsGrid
          items={LOGO_USAGE_REFERENCE.roleActions}
          title="Role quick actions"
        />
        <LogoQuickActionsGrid
          actions={LOGO_USAGE_REFERENCE.specialistQuickActions}
          title="Specialist quick actions"
          description="Go straight to the right pack or review task before you inspect the full system."
        />
      </section>

      <section className="space-y-6" id="asset-packs">
        <ReferenceSectionHeading title="Asset packs" description={LOGO_USAGE_SECTION.intro} />
        <ReferenceFieldDefaults
          items={LOGO_USAGE_SECTION.employeeDefaults}
          title="Employee-safe default"
        />
        <ReferenceDownloadablesBlock
          assets={LOGO_USAGE_SECTION.downloadables}
          title="Approved logo packages"
        />
        {LOGO_USAGE_SECTION.accessNote ? <ReferenceNote note={LOGO_USAGE_SECTION.accessNote} /> : null}
        <LogoAssetMatrix
          items={LOGO_USAGE_REFERENCE.assetMatrix}
          title="Asset matrix"
        />
      </section>

      <section className="space-y-6" id="approved-variants">
        <ReferenceSectionHeading
          title="Approved variants"
          description="Choose the correct master or vertical asset, then verify the background contrast and lockup treatment before release."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {LOGO_USAGE_SECTION.variants.map((variant) => (
            <div key={variant.id} className="rounded-lg border border-[color:var(--vy-border)] p-6">
              <div
                className={`flex h-40 items-center justify-center rounded-lg ${
                  variant.background === "dark"
                    ? "bg-[color:var(--vy-gold-950)]"
                    : "bg-[color:var(--vy-bg)]"
                }`}
              >
                <div className="relative h-20 w-52 max-w-full">
                  <Image
                    src={variant.filePath}
                    alt={variant.label}
                    fill
                    sizes="240px"
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="mt-4 text-lg font-medium text-[color:var(--vy-text-strong)]">
                {variant.label}
              </p>
              <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                {variant.usageNote}
              </p>
              <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                Clear space: {variant.clearSpaceRule}
              </p>
            </div>
          ))}
        </div>
        <LogoPreviewGrid cards={variantPreviewCards} title="Fast visual chooser" />
      </section>

      <section className="space-y-6" id="placement-background-rules">
        <ReferenceSectionHeading
          title="Placement and background rules"
          description="Use the role-specific rules below when you are creating, implementing, or approving a logo placement."
        />
        <ReferenceRulesBlock rules={LOGO_USAGE_SECTION.rules} title="Core logo rules" />
        <LogoRoleSections
          sections={LOGO_USAGE_REFERENCE.roleSections}
          title="Role-specific checks"
        />
      </section>

      <section className="space-y-6" id="misuse-review">
        <ReferenceSectionHeading
          title="Misuse review"
          description="Use these visual checks to reject incorrect logo handling quickly before the asset ships."
        />
        <LogoMisuseGrid
          examples={LOGO_USAGE_REFERENCE.misuseExamples}
          title="Common failures to reject"
        />
      </section>

      <section className="space-y-6" id="related-technical-assets">
        <ReferenceSectionHeading
          title="Related technical assets"
          description="Use these when product, web, or release workflows need more than the core logo pair."
        />
        <ReferenceRulesBlock
          rules={LOGO_USAGE_REFERENCE.technicalNotes}
          title="Technical notes"
        />
        <LogoRelatedAssetsGrid
          items={LOGO_USAGE_REFERENCE.relatedAssets}
          title="Related assets and guidance"
        />
      </section>
    </VisualReferencePageShell>
  );
}
