import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
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
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--vy-text-strong)]">
        {sanitizeTokenMentions(title)}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-relaxed text-[color:var(--vy-muted-fg)]">
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
          <div key={rule} className="flex gap-3 rounded-lg bg-[color:var(--vy-muted)] p-4">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-success)]" />
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
        "rounded-lg border-l-4 border-l-[color:var(--vy-gold-ui)] bg-[color:var(--vy-muted)] p-5",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-[color:var(--vy-fg)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
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
        "rounded-lg border border-[color:var(--vy-warning)] bg-[color:var(--vy-muted)] p-5",
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
            className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
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
      <header className="border-b border-[color:var(--vy-border)] pb-10">
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

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--vy-muted-fg)]">
          Specialist Reference
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-5xl">
          {page.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[color:var(--vy-muted-fg)]">
          {page.summary}
        </p>

        <div className="mt-8 grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
              When to use this page
            </p>
            <p className="mt-3 text-[color:var(--vy-fg)]">{page.pageIntro}</p>
          </div>
          <div className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6">
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
              className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
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
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.assets.map((asset) => (
              <div
                key={asset.name}
                className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-5"
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

      <section className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6">
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
              className="group rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5 transition-colors hover:border-[color:var(--vy-gold-ui)]"
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
