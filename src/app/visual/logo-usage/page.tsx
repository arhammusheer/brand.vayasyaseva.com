import Image from "next/image";

import {
  ReferenceDoDontBlock,
  ReferenceDownloadablesBlock,
  ReferenceFieldDefaults,
  ReferenceNote,
  ReferenceRulesBlock,
  ReferenceSectionHeading,
  ReferenceTemplatesBlock,
  VisualReferencePageShell,
} from "../../../components/brand/visual-reference-shell";
import { LOGO_USAGE_SECTION } from "../../../content/brand/sections/logo-usage";
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
    "Full Vayasya logo reference covering asset packs, approved variants, minimum sizes, clear space, and misuse prevention.",
  path: "/visual/logo-usage",
});

export default function VisualLogoUsagePage() {
  return (
    <VisualReferencePageShell page={visualPage}>
      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Logo packs"
          description={LOGO_USAGE_SECTION.intro}
        />
        <ReferenceFieldDefaults
          items={LOGO_USAGE_SECTION.employeeDefaults}
          title="Employee-safe default"
        />
        <ReferenceDownloadablesBlock
          assets={LOGO_USAGE_SECTION.downloadables}
          title="Approved logo packages"
        />
        {LOGO_USAGE_SECTION.accessNote ? <ReferenceNote note={LOGO_USAGE_SECTION.accessNote} /> : null}
      </section>

      <section className="space-y-6">
        <ReferenceSectionHeading
          title="Approved variants"
          description="Use the correct master asset for the background and preserve the minimum size and clear-space requirements."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {LOGO_USAGE_SECTION.variants.map((variant) => (
            <div key={variant.id} className="rounded-lg border border-[color:var(--vy-border)] p-6">
              <div
                className={`flex h-36 items-center justify-center rounded-lg ${
                  variant.background === "dark"
                    ? "bg-[color:var(--vy-gold-950)]"
                    : "bg-[color:var(--vy-bg)]"
                }`}
              >
                <div className="relative h-24 w-24">
                  <Image
                    src={variant.filePath}
                    alt={variant.label}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="mt-4 text-lg font-medium text-[color:var(--vy-text-strong)]">
                {variant.label}
              </p>
              <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                Minimum width: {variant.minWidthPx}px
              </p>
              <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                Clear space: {variant.clearSpaceRule}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ReferenceRulesBlock rules={LOGO_USAGE_SECTION.rules} />
      <ReferenceDoDontBlock examples={LOGO_USAGE_SECTION.doDont} />
      <ReferenceTemplatesBlock templates={LOGO_USAGE_SECTION.templates} />
    </VisualReferencePageShell>
  );
}
