import { BRAND_CONTENT } from "../../content/brand";

const fundamentals = BRAND_CONTENT.fundamentals;
const footer = BRAND_CONTENT.sections.footerVersioning;
const verticals = fundamentals.verticals;

export function HandbookHero() {
  const version = "footer" in footer ? footer.footer.version : "1.0";
  const owner = "footer" in footer ? footer.footer.owner : "Brand Operations";

  return (
    <header className="py-12 md:py-16">
      <div className="space-y-6">
        {/* Eyebrow */}
        <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--vy-muted-fg)]">
          {fundamentals.brandName.parent}
        </p>

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-5xl lg:text-6xl">
          Brand Handbook
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg text-[color:var(--vy-muted-fg)] md:text-xl">
          The canonical guide to Vayasya brand communication. 15 sections covering
          identity, voice, claims discipline, and operational standards.
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-[color:var(--vy-muted-fg)]">
          <span className="rounded bg-[color:var(--vy-muted)] px-2 py-1 font-mono text-xs">
            v{version}
          </span>
          <span>Owner: {owner}</span>
          <span>15 Sections</span>
        </div>

        {/* Verticals */}
        <div className="pt-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
            Verticals
          </p>
          <div className="flex flex-wrap gap-2">
            {verticals.map((vertical) => (
              <span
                key={vertical}
                className="rounded-full border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] px-3 py-1 text-sm text-[color:var(--vy-fg)]"
              >
                {vertical}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
