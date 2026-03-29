import {
  LogoAssetMatrix,
  LogoMisuseGrid,
  LogoRoleSections,
  LogoVariantGrid,
} from "../../../components/brand/logo-usage-panels";
import {
  ReferenceDownloadRow,
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
    "Reference-first Vayasya logo page covering downloads, approved variants, placement rules, and misuse review.",
  path: "/visual/logo-usage",
});

export default function VisualLogoUsagePage() {
  const masterVariants = LOGO_USAGE_SECTION.variants.filter((variant) =>
    variant.id.startsWith("master-"),
  );
  const verticalVariants = LOGO_USAGE_SECTION.variants.filter((variant) =>
    variant.id.startsWith("vertical-"),
  );
  const misuseExamples = LOGO_USAGE_REFERENCE.misuseExamples.filter(
    (example) => example.id !== "stretch",
  );

  return (
    <VisualReferencePageShell page={visualPage}>
      <ReferenceDownloadRow assets={LOGO_USAGE_SECTION.downloadables} title="Downloads" />

      <section className="space-y-6" id="master-logos">
        <ReferenceSectionHeading
          title="Master logos"
          description="Use the master pair for most Vayasya-owned surfaces. Choose the variant by contrast only."
        />
        <LogoVariantGrid variants={masterVariants} />
      </section>

      <section className="space-y-6" id="approved-variants">
        <ReferenceSectionHeading
          title="Vertical logos"
          description="Use a vertical logo only when one vertical clearly owns the material, service, or release context."
        />
        <LogoVariantGrid variants={verticalVariants} />
      </section>

      <section className="space-y-6" id="choose-by-need">
        <ReferenceSectionHeading
          title="Choose by need"
          description="Pick the pack by real delivery surface instead of repurposing files from another workflow."
        />
        <LogoAssetMatrix items={LOGO_USAGE_REFERENCE.assetMatrix} />
      </section>

      <section className="space-y-6" id="placement-background-rules">
        <ReferenceSectionHeading
          title="Placement rules"
          description="Use these checks when you are placing, implementing, or approving a logo on any surface."
        />
        <ReferenceRulesBlock rules={LOGO_USAGE_SECTION.rules} title="Core logo rules" />
      </section>

      <section className="space-y-6" id="misuse-review">
        <ReferenceSectionHeading
          title="Misuse review"
          description="Reject these failures before the mark leaves design, product, or engineering review."
        />
        <LogoMisuseGrid examples={misuseExamples} title="High-signal failures" />
      </section>

      <section className="space-y-6" id="by-responsibility">
        <ReferenceSectionHeading
          title="By responsibility"
          description="Use the compact notes below when the work needs a designer, developer, or reviewer check."
        />
        <LogoRoleSections sections={LOGO_USAGE_REFERENCE.roleSections} />
        <ReferenceRulesBlock rules={LOGO_USAGE_REFERENCE.technicalNotes} title="Technical notes" />
      </section>
    </VisualReferencePageShell>
  );
}
