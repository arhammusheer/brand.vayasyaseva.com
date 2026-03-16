import {
  ArrowRight,
  Download,
  LayoutTemplate,
  Rows3,
  ShieldCheck,
  TableProperties,
} from "lucide-react";

import { sanitizeTokenMentions } from "../../lib/brand-utils";
import { cn } from "../../lib/utils";
import type {
  TypographyHierarchyExample,
  TypographyMisuseExample,
  TypographyNeed,
  TypographyQuickAction,
  TypographyRoleAction,
  TypographySpecimenCard,
  TypographySurfaceGuide,
} from "../../lib/types/brand";
import { Button } from "../ui/button";

const actionIcons = {
  download: Download,
  interface: LayoutTemplate,
  data: TableProperties,
  review: ShieldCheck,
  hierarchy: Rows3,
} as const;

function typographyPreviewClass(fontClass: TypographySpecimenCard["fontClass"]) {
  if (fontClass === "font-display") {
    return "font-display text-3xl font-semibold leading-tight sm:text-4xl";
  }

  if (fontClass === "font-mono") {
    return "font-mono text-sm leading-6 sm:text-base";
  }

  return "font-sans text-base leading-7 sm:text-lg";
}

function hierarchyPreviewClass(fontClass: TypographyHierarchyExample["fontClass"]) {
  if (fontClass === "font-display") {
    return "font-display";
  }

  if (fontClass === "font-mono") {
    return "font-mono";
  }

  return "font-sans";
}

function surfacePreviewClass(fontClass: TypographySurfaceGuide["fontClass"]) {
  if (fontClass === "font-display") {
    return "font-display text-2xl font-semibold leading-tight";
  }

  if (fontClass === "font-mono") {
    return "font-mono text-sm leading-6";
  }

  return "font-sans text-base leading-7";
}

function TypographyMisuseSurface({ example }: { example: TypographyMisuseExample }) {
  const baseFrame =
    "relative overflow-hidden rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-4";

  switch (example.previewKind) {
    case "mono-paragraph":
      return (
        <div className={baseFrame}>
          <div className="font-mono text-[11px] leading-5 text-[color:var(--vy-text-strong)] sm:text-xs">
            <p>status update requires quick client confirmation before team movement begins.</p>
            <p className="mt-2">site access, ppe review, and reporting ownership are aligned.</p>
          </div>
        </div>
      );
    case "display-body":
      return (
        <div className={baseFrame}>
          <p className="font-display text-lg font-semibold leading-7 text-[color:var(--vy-text-strong)]">
            This entire explanation is using a display face when it should be calm body copy.
          </p>
        </div>
      );
    case "all-caps":
      return (
        <div className={baseFrame}>
          <p className="font-sans text-sm uppercase leading-6 tracking-[0.14em] text-[color:var(--vy-text-strong)]">
            ALL BODY COPY DOES NOT NEED TO SHOUT TO FEEL IMPORTANT.
          </p>
        </div>
      );
    case "extra-font":
      return (
        <div className={baseFrame}>
          <p
            className="text-lg italic leading-7 text-[color:var(--vy-text-strong)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Random local font choices create a second brand language.
          </p>
        </div>
      );
  }
}

export function TypographyQuickActionsGrid({
  actions,
  title,
  description,
}: {
  actions: readonly TypographyQuickAction[];
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
        {description ? (
          <p className="mt-2 max-w-3xl text-sm text-[color:var(--vy-muted-fg)]">
            {sanitizeTokenMentions(description)}
          </p>
        ) : null}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = actionIcons[action.icon];

          return (
            <article
              key={action.id}
              className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-lg bg-[color:var(--vy-bg)] p-2 text-[color:var(--vy-text-strong)]">
                  <Icon className="h-5 w-5" />
                </span>
                {action.badge ? (
                  <span className="rounded-full bg-[color:var(--vy-bg)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--vy-muted-fg)]">
                    {sanitizeTokenMentions(action.badge)}
                  </span>
                ) : null}
              </div>
              <h5 className="mt-4 text-base font-semibold text-[color:var(--vy-text-strong)]">
                {sanitizeTokenMentions(action.title)}
              </h5>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
                {sanitizeTokenMentions(action.description)}
              </p>
              <Button asChild variant="outline" className="mt-5 w-full justify-between">
                <a href={action.href} download={action.download}>
                  {sanitizeTokenMentions(action.ctaLabel)}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function TypographySpecimenGrid({
  cards,
  title,
}: {
  cards: readonly TypographySpecimenCard[];
  title: string;
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6 xl:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.id}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h5 className="text-base font-semibold text-[color:var(--vy-text-strong)]">
                  {sanitizeTokenMentions(card.title)}
                </h5>
                <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(card.family)}
                </p>
              </div>
              {card.badge ? (
                <span className="rounded-full bg-[color:var(--vy-bg)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(card.badge)}
                </span>
              ) : null}
            </div>
            <div className="mt-5 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5">
              {card.previewLabel ? (
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(card.previewLabel)}
                </p>
              ) : null}
              <p
                className={cn(
                  "mt-4 text-[color:var(--vy-text-strong)]",
                  typographyPreviewClass(card.fontClass),
                )}
              >
                {sanitizeTokenMentions(card.previewText)}
              </p>
              {card.previewDetail ? (
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(card.previewDetail)}
                </p>
              ) : null}
            </div>
            <p className="mt-5 text-sm font-medium text-[color:var(--vy-fg)]">
              When to use: {sanitizeTokenMentions(card.whenToUse)}
            </p>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              Hard rule: {sanitizeTokenMentions(card.hardRule)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function TypographyRootChooser({
  cards,
  title,
}: {
  cards: readonly TypographySpecimenCard[];
  title: string;
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6 xl:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.id}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
          >
            <h5 className="text-base font-semibold text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(card.title)}
            </h5>
            <div className="mt-5 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5">
              <p
                className={cn(
                  "text-[color:var(--vy-text-strong)]",
                  typographyPreviewClass(card.fontClass),
                )}
              >
                {sanitizeTokenMentions(card.previewText)}
              </p>
            </div>
            <p className="mt-5 text-sm font-medium text-[color:var(--vy-fg)]">
              {sanitizeTokenMentions(card.whenToUse)}
            </p>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(card.hardRule)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function TypographyCommonNeedsGrid({
  items,
  title = "Common needs",
}: {
  items: readonly TypographyNeed[];
  title?: string;
}) {
  if (!items.length) return null;

  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.need}
            className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
          >
            <p className="font-medium text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(item.need)}
            </p>
            <p className="mt-3 text-sm font-medium text-[color:var(--vy-fg)]">
              Use: {sanitizeTokenMentions(item.useThis)}
            </p>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(item.note)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TypographyMisuseGrid({
  examples,
  title,
}: {
  examples: readonly TypographyMisuseExample[];
  title: string;
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {examples.map((example) => (
          <article
            key={example.id}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-4"
          >
            <TypographyMisuseSurface example={example} />
            <h5 className="mt-4 text-sm font-semibold text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(example.title)}
            </h5>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(example.issue)}
            </p>
            <p className="mt-3 text-sm text-[color:var(--vy-fg)]">
              Use instead: {sanitizeTokenMentions(example.correction)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function TypographyRoleActionsGrid({
  items,
  title,
}: {
  items: readonly TypographyRoleAction[];
  title: string;
}) {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--vy-text-strong)]">
        {sanitizeTokenMentions(title)}
      </h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.role}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
          >
            <h3 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(item.role)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(item.summary)}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[color:var(--vy-fg)]">
              {item.actions.map((action) => (
                <li key={action} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--vy-gold-ui)]" />
                  <span>{sanitizeTokenMentions(action)}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-5 w-full justify-between">
              <a href={item.href}>
                Open this path
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}

export function TypographySurfaceGuidesGrid({
  items,
  title,
}: {
  items: readonly TypographySurfaceGuide[];
  title: string;
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h5 className="text-base font-semibold text-[color:var(--vy-text-strong)]">
                {sanitizeTokenMentions(item.title)}
              </h5>
              {item.badge ? (
                <span className="rounded-full bg-[color:var(--vy-bg)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(item.badge)}
                </span>
              ) : null}
            </div>
            <div className="mt-5 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5">
              <p
                className={cn(
                  "text-[color:var(--vy-text-strong)]",
                  surfacePreviewClass(item.fontClass),
                )}
              >
                {sanitizeTokenMentions(item.sampleText)}
              </p>
              {item.sampleDetail ? (
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(item.sampleDetail)}
                </p>
              ) : null}
            </div>
            <p className="mt-5 text-sm font-medium text-[color:var(--vy-fg)]">
              Use: {sanitizeTokenMentions(item.useThis)}
            </p>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(item.note)}
            </p>
            <p className="mt-3 text-sm text-[color:var(--vy-fg)]">
              Hard rule: {sanitizeTokenMentions(item.hardRule)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function TypographyHierarchyExamplesGrid({
  items,
  title,
}: {
  items: readonly TypographyHierarchyExample[];
  title: string;
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                {sanitizeTokenMentions(item.level)}
              </p>
              <p className="text-xs font-medium text-[color:var(--vy-muted-fg)]">
                {item.fontSize} / {item.lineHeight}
              </p>
            </div>
            <div className="mt-5 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5">
              <p
                className={cn(
                  "text-[color:var(--vy-text-strong)]",
                  hierarchyPreviewClass(item.fontClass),
                )}
                style={{
                  fontWeight: item.fontWeight,
                  fontSize: item.fontSize,
                  lineHeight: item.lineHeight,
                }}
              >
                {sanitizeTokenMentions(item.specimen)}
              </p>
            </div>
            <p className="mt-5 text-sm font-medium text-[color:var(--vy-fg)]">
              Usage: {sanitizeTokenMentions(item.usage)}
            </p>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(item.note)}
            </p>
            <p className="mt-3 text-xs text-[color:var(--vy-muted-fg)]">
              Weight {item.fontWeight}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
