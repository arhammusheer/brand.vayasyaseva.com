import { ColorSwatchCatalog } from "../../../components/brand/color-swatch-catalog";
import { COLOR_PALETTE_SECTION } from "../../../content/brand/sections/color-palette";
import { buildBrandPageMetadata } from "../../../lib/brand-utils";

export const metadata = buildBrandPageMetadata({
  title: "Color Palette | Vayasya Visual Reference",
  description: "Copy-ready Vayasya color swatches for design, product, and engineering work.",
  path: "/visual/color-palette",
});

export default function VisualColorPalettePage() {
  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--vy-muted-fg)]">
          Visual Reference
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-5xl">
          Color Palette
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-[color:var(--vy-muted-fg)] md:text-lg">
          Browse the approved color system by family and click any swatch to copy its hex value.
        </p>
      </header>
      <ColorSwatchCatalog swatches={COLOR_PALETTE_SECTION.swatches} />
    </section>
  );
}
