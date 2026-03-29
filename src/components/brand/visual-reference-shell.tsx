import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { orderedVisualReferencePages } from "../../content/brand/visual-reference";
import { sanitizeTokenMentions } from "../../lib/brand-utils";
import { cn } from "../../lib/utils";
import type {
  ColorSwatch,
  DownloadableAsset,
  DownloadableBundle,
  VisualReferencePage,
} from "../../lib/types/brand";
import { Button } from "../ui/button";

type ReferenceRulesBlockProps = {
  rules: readonly string[];
  title?: string;
  className?: string;
};

type ReferenceFieldDefaultsProps = {
  items?: readonly string[];
  title?: string;
  className?: string;
};

export function ReferenceSectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-3 border-t border-[color:var(--vy-border)] pt-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--vy-brand-text)]">
        Topic
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-3xl">
        {sanitizeTokenMentions(title)}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-7 text-[color:var(--vy-muted-fg)]">
          {sanitizeTokenMentions(description)}
        </p>
      ) : null}
    </div>
  );
}

export function ReferenceRulesBlock({
  rules,
  title = "Rules",
  className,
}: ReferenceRulesBlockProps) {
  if (!rules.length) return null;

  return (
    <div className={cn("space-y-5", className)}>
      <h3 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {rules.map((rule) => (
          <div key={rule} className="flex gap-3 border-l border-[color:var(--vy-border)] pl-4">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--vy-gold-ui)]"
              aria-hidden="true"
            />
            <span className="text-[color:var(--vy-fg)]">{sanitizeTokenMentions(rule)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReferenceFieldDefaults({
  items,
  title = "Fast default",
  className,
}: ReferenceFieldDefaultsProps) {
  if (!items?.length) return null;

  return (
    <div
      className={cn(
        "border-l-2 border-l-[color:var(--vy-gold-ui)] bg-[color:var(--vy-gold-50)]/70 px-5 py-4",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-[color:var(--vy-fg)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--vy-gold-ui)]"
              aria-hidden="true"
            />
            <span>{sanitizeTokenMentions(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ReferenceNote({
  note,
  className,
}: {
  note: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.25rem] border border-[color:var(--vy-warning)] bg-[color:rgba(255,249,232,0.85)] p-5",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-warning)]" />
        <p className="text-sm text-[color:var(--vy-muted-fg)]">{sanitizeTokenMentions(note)}</p>
      </div>
    </div>
  );
}

export function ReferenceDownloadablesBlock({
  assets,
  title = "Downloadables",
}: {
  assets: readonly (DownloadableAsset | DownloadableBundle)[];
  title?: string;
}) {
  if (!assets.length) return null;

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h3>
      <div className="grid gap-6 lg:grid-cols-3">
        {assets.map((asset) => (
          <article
            key={asset.filePath}
            className="rounded-[1.5rem] border border-[color:var(--vy-border)] bg-[color:rgba(255,255,255,0.78)] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(asset.fileType)}
            </p>
            <h4 className="mt-2 text-lg font-medium text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(asset.name)}
            </h4>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(asset.description)}
            </p>
            {"includes" in asset ? (
              <ul className="mt-4 space-y-1 text-sm text-[color:var(--vy-fg)]">
                {asset.includes.map((item) => (
                  <li key={item}>{sanitizeTokenMentions(item)}</li>
                ))}
              </ul>
            ) : null}
            {asset.accessNote ? (
              <p className="mt-4 text-xs text-[color:var(--vy-muted-fg)]">
                {sanitizeTokenMentions(asset.accessNote)}
              </p>
            ) : null}
            <Button asChild className="mt-5 w-full justify-between">
              <a href={asset.filePath} download>
                Download
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ReferenceDownloadRow({
  assets,
  title = "Downloads",
  description,
  className,
}: {
  assets: readonly (DownloadableAsset | DownloadableBundle)[];
  title?: string;
  description?: string;
  className?: string;
}) {
  if (!assets.length) return null;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h3>
        {description ? (
          <p className="max-w-3xl text-sm text-[color:var(--vy-muted-fg)]">
            {sanitizeTokenMentions(description)}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-3">
        {assets.map((asset) => (
          <Button
            key={asset.filePath}
            asChild
            variant="outline"
            className="h-auto min-w-[11.5rem] items-start gap-1 rounded-full whitespace-normal border-[color:var(--vy-border)] px-4 py-3 text-left"
          >
            <a href={asset.filePath} download>
              <span className="font-medium text-[color:var(--vy-text-strong)]">
                {sanitizeTokenMentions(asset.name)}
              </span>
              <span className="text-xs text-[color:var(--vy-muted-fg)]">
                {sanitizeTokenMentions(asset.fileType)}
              </span>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}

export function ReferenceColorSwatchGrid({
  title,
  swatches,
}: {
  title: string;
  swatches: readonly ColorSwatch[];
}) {
  if (!swatches.length) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h3>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {swatches.map((swatch) => (
          <div key={swatch.token} className="rounded-lg border border-[color:var(--vy-border)] p-4">
            <div
              className="mb-3 h-20 rounded-md border border-[color:var(--vy-border)]"
              style={{ backgroundColor: swatch.hex }}
            />
            <p className="font-mono text-xs text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(swatch.token)}
            </p>
            <p className="mt-1 font-mono text-sm font-medium text-[color:var(--vy-text-strong)]">
              {swatch.hex}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(swatch.usage)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VisualReferencePageShell({
  page,
  children,
}: {
  page: VisualReferencePage;
  children: ReactNode;
}) {
  const siblingPages = orderedVisualReferencePages.filter(
    (candidate) => candidate.slug !== page.slug,
  );

  return (
    <section className="space-y-12">
      <header className="relative isolate overflow-hidden border-b border-[color:var(--vy-border)] pb-12">
        <div
          className="absolute -right-12 top-8 h-48 w-48 rounded-full bg-[color:var(--vy-gold-100)] blur-3xl"
          aria-hidden="true"
        />
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="ghost" className="-ml-3 px-3">
            <Link href="/visual">
              <ArrowLeft className="h-4 w-4" />
              Back to visual reference
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={page.handbookHref}>Back to handbook section</Link>
          </Button>
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--vy-brand-text)]">
          Specialist Reference
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-5xl">
          {page.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[color:var(--vy-muted-fg)]">
          {page.summary}
        </p>

        <div className="mt-8 grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-[1.75rem] border border-[color:var(--vy-border)] bg-[color:rgba(255,255,255,0.82)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
              When to use this page
            </p>
            <p className="mt-3 text-[color:var(--vy-fg)]">{page.pageIntro}</p>
          </div>
          <div className="rounded-[1.75rem] border border-[color:var(--vy-border)] bg-[color:rgba(253,241,207,0.55)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
              Specialist audience
            </p>
            <p className="mt-3 text-[color:var(--vy-fg)]">{page.specialistAudience}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {page.guidanceBlocks.map((block) => (
            <div
              key={block.title}
              className="border-l border-[color:var(--vy-border)] pl-5"
            >
              <p className="font-medium text-[color:var(--vy-text-strong)]">{block.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
            Assets and references
          </p>
          <div className="mt-4 grid gap-4 border-y border-[color:var(--vy-border)] py-4 md:grid-cols-2 xl:grid-cols-3">
            {page.assets.map((asset) => (
              <div
                key={asset.name}
                className="border-l border-[color:var(--vy-border)] pl-4"
              >
                <p className="font-medium text-[color:var(--vy-text-strong)]">{asset.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
                  {asset.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {page.implementationNotes?.length ? (
          <ReferenceRulesBlock
            rules={page.implementationNotes}
            title="Implementation notes"
            className="mt-8"
          />
        ) : null}
      </header>

      <div className="space-y-12">{children}</div>

      <section className="rounded-[1.75rem] border border-[color:var(--vy-border)] bg-[color:rgba(255,255,255,0.82)] p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[color:var(--vy-text-strong)]">
              Related visual topics
            </h2>
            <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
              Move across the sibling specialist pages or return to the handbook root.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/">Back to handbook</Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {siblingPages.map((sibling) => (
            <Link
              key={sibling.slug}
              href={sibling.href}
              className="group rounded-[1.25rem] border border-[color:var(--vy-border)] bg-[color:rgba(252,252,253,0.82)] p-5 transition-colors hover:border-[color:var(--vy-gold-ui)]"
            >
              <p className="font-medium text-[color:var(--vy-text-strong)]">{sibling.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
                {sibling.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--vy-text-strong)]">
                Open topic
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
