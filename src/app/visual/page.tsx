import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  VISUAL_REFERENCE_HUB,
  orderedVisualReferencePages,
} from "../../content/brand/visual-reference";
import { buildBrandPageMetadata } from "../../lib/brand-utils";

export const metadata = buildBrandPageMetadata({
  title: "Vayasya Visual Reference",
  description:
    "Specialist visual reference for Vayasya logo usage, color palette, typography, and imagery guidance.",
  path: "/visual",
});

export default function VisualReferenceHubPage() {
  return (
    <section className="space-y-10">
      <header className="relative isolate overflow-hidden border-b border-[color:var(--vy-border)] pb-12">
        <div
          className="absolute -right-16 top-8 h-48 w-48 rounded-full bg-[color:var(--vy-gold-100)] blur-3xl"
          aria-hidden="true"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--vy-brand-text)]">
          Specialist Reference
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-5xl">
          {VISUAL_REFERENCE_HUB.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[color:var(--vy-muted-fg)]">
          {VISUAL_REFERENCE_HUB.summary}
        </p>

        <div className="mt-8 grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-[1.75rem] border border-[color:var(--vy-border)] bg-[color:rgba(255,255,255,0.82)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
              When to use this area
            </p>
            <p className="mt-3 text-[color:var(--vy-fg)]">{VISUAL_REFERENCE_HUB.intro}</p>
          </div>
          <div className="rounded-[1.75rem] border border-[color:var(--vy-border)] bg-[color:rgba(253,241,207,0.55)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
              Specialist audience
            </p>
            <p className="mt-3 text-[color:var(--vy-fg)]">
              {VISUAL_REFERENCE_HUB.specialistAudience}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {VISUAL_REFERENCE_HUB.rules.map((rule) => (
            <div key={rule} className="flex gap-3 border-l border-[color:var(--vy-border)] pl-4">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--vy-gold-ui)]"
              />
              <span>{rule}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/">Back to handbook root</Link>
          </Button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {orderedVisualReferencePages.map((page) => (
          <article
            key={page.slug}
            className="rounded-[1.75rem] border border-[color:var(--vy-border)] bg-[color:rgba(255,255,255,0.82)] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-[color:var(--vy-text-strong)]">
                  {page.title}
                </h2>
                <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                  {page.specialistAudience}
                </p>
              </div>
            </div>

            <p className="mt-4 text-[color:var(--vy-fg)]">{page.summary}</p>

            <div className="mt-6 grid gap-4 border-y border-[color:var(--vy-border)] py-4 md:grid-cols-2">
              {page.guidanceBlocks.map((block) => (
                <div
                  key={block.title}
                  className="border-l border-[color:var(--vy-border)] pl-4"
                >
                  <p className="font-medium text-[color:var(--vy-text-strong)]">{block.title}</p>
                  <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                Assets and references
              </p>
              <div className="mt-3 grid gap-3">
                {page.assets.map((asset) => (
                  <div
                    key={asset.name}
                    className="border-l border-[color:var(--vy-border)] pl-4"
                  >
                    <p className="font-medium text-[color:var(--vy-text-strong)]">{asset.name}</p>
                    <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                      {asset.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild className="mt-6 justify-between">
              <Link href={page.href}>
                Open reference
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
