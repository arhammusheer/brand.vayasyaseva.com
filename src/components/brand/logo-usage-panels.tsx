import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileCode2,
  FileImage,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

import { sanitizeTokenMentions } from "../../lib/brand-utils";
import { cn } from "../../lib/utils";
import type {
  LogoAssetNeed,
  LogoMisuseExample,
  LogoPreviewCard,
  LogoQuickAction,
  LogoRelatedAsset,
  LogoRoleAction,
  LogoRoleSection,
  LogoVariant,
} from "../../lib/types/brand";
import { Button } from "../ui/button";

const actionIcons = {
  svg: FileCode2,
  png: FileImage,
  media: MonitorSmartphone,
  vertical: Layers3,
  review: ShieldCheck,
} as const;

function LogoPreviewSurface({ card }: { card: LogoPreviewCard }) {
  if (card.kind === "vertical-pack") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {card.members?.map((member) => (
          <div
            key={member.label}
            className="flex h-24 items-center justify-center rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-4"
          >
            <div className="relative h-12 w-full">
              <Image
                src={member.filePath}
                alt={member.label}
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-40 items-center justify-center rounded-xl border border-[color:var(--vy-border)] p-6",
        card.background === "dark"
          ? "bg-[color:var(--vy-gold-950)]"
          : "bg-[color:var(--vy-bg)]",
      )}
    >
      {card.filePath ? (
        <div className="relative h-20 w-52 max-w-full">
          <Image
            src={card.filePath}
            alt={card.title}
            fill
            sizes="240px"
            className="object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}

function LogoMisuseSurface({ example }: { example: LogoMisuseExample }) {
  const baseFrame =
    "relative flex h-28 items-center justify-center overflow-hidden rounded-lg border border-[color:var(--vy-border)]";

  switch (example.previewKind) {
    case "recolor":
      return (
        <div className={cn(baseFrame, "bg-[color:var(--vy-bg)]")}>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(34,197,94,0.18))]" />
          <div className="relative h-12 w-36 [filter:hue-rotate(150deg)_saturate(1.6)]">
            <Image
              src="/brand/logos/master-logo-light.svg"
              alt="Incorrect recolored logo example"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
        </div>
      );
    case "stretch":
      return (
        <div className={cn(baseFrame, "bg-[color:var(--vy-bg)]")}>
          <div className="relative h-10 w-44">
            <Image
              src="/brand/logos/master-logo-light.svg"
              alt="Incorrect stretched logo example"
              fill
              sizes="180px"
              className="object-fill"
            />
          </div>
        </div>
      );
    case "rebuild":
      return (
        <div className={cn(baseFrame, "bg-[color:var(--vy-bg)] px-4")}>
          <div className="text-center">
            <p className="font-display text-2xl font-semibold tracking-[0.22em] text-[color:var(--vy-text-strong)]">
              VAYASYA
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.36em] text-[color:var(--vy-muted-fg)]">
              seva
            </p>
          </div>
        </div>
      );
    case "low-contrast":
      return (
        <div className={cn(baseFrame, "bg-[#b09042]")}>
          <div className="relative h-12 w-36 opacity-70">
            <Image
              src="/brand/logos/master-logo-light.svg"
              alt="Incorrect low contrast logo example"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
        </div>
      );
    case "busy-image":
      return (
        <div
          className={cn(
            baseFrame,
            "bg-[linear-gradient(135deg,#173b57_0%,#6d3417_25%,#b58a3b_50%,#244e35_75%,#173b57_100%)]",
          )}
        >
          <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45)_0,transparent_22%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.32)_0,transparent_18%),radial-gradient(circle_at_35%_80%,rgba(255,255,255,0.22)_0,transparent_20%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.38)_0,transparent_20%)]" />
          <div className="relative h-12 w-36">
            <Image
              src="/brand/logos/master-logo-dark.svg"
              alt="Incorrect busy background logo example"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
        </div>
      );
    case "too-small":
      return (
        <div className={cn(baseFrame, "bg-[color:var(--vy-bg)]")}>
          <div className="relative h-4 w-12">
            <Image
              src="/brand/logos/master-logo-light.svg"
              alt="Incorrect too small logo example"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
        </div>
      );
  }
}

export function LogoQuickActionsGrid({
  actions,
  title,
  description,
}: {
  actions: readonly LogoQuickAction[];
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

export function LogoCommonNeedsGrid({
  items,
  title = "Common needs",
}: {
  items: readonly LogoAssetNeed[];
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

export function LogoPreviewGrid({
  cards,
  title,
}: {
  cards: readonly LogoPreviewCard[];
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
              <h5 className="text-base font-semibold text-[color:var(--vy-text-strong)]">
                {sanitizeTokenMentions(card.title)}
              </h5>
              {card.badge ? (
                <span className="rounded-full bg-[color:var(--vy-bg)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(card.badge)}
                </span>
              ) : null}
            </div>
            <div className="mt-5">
              <LogoPreviewSurface card={card} />
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

export function LogoRootChooser({
  cards,
  title,
}: {
  cards: readonly LogoPreviewCard[];
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
            <div className="mt-5">
              <LogoPreviewSurface card={card} />
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

export function LogoMisuseGrid({
  examples,
  title,
}: {
  examples: readonly LogoMisuseExample[];
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
            <LogoMisuseSurface example={example} />
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

export function LogoVariantGrid({
  variants,
  title,
}: {
  variants: readonly LogoVariant[];
  title?: string;
}) {
  return (
    <div className="space-y-5">
      {title ? (
        <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      ) : null}
      <div className="grid gap-6 lg:grid-cols-2">
        {variants.map((variant) => (
          <article
            key={variant.id}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
          >
            <div
              className={cn(
                "flex h-40 items-center justify-center rounded-xl border border-[color:var(--vy-border)] p-6",
                variant.background === "dark"
                  ? "bg-[color:var(--vy-gold-950)]"
                  : "bg-[color:var(--vy-bg)]",
              )}
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
            <p className="mt-5 text-base font-semibold text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(variant.label)}
            </p>
            <p className="mt-2 text-sm text-[color:var(--vy-fg)]">
              {sanitizeTokenMentions(variant.usageNote)}
            </p>
            <p className="mt-3 text-sm text-[color:var(--vy-muted-fg)]">
              Clear space: {sanitizeTokenMentions(variant.clearSpaceRule)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function LogoRoleActionsGrid({
  items,
  title,
}: {
  items: readonly LogoRoleAction[];
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
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                  <span>{sanitizeTokenMentions(action)}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-6 w-full justify-between">
              <a href={item.href}>
                Open workflow
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}

export function LogoAssetMatrix({
  items,
  title,
}: {
  items: readonly LogoAssetNeed[];
  title?: string;
}) {
  return (
    <div className="space-y-5">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--vy-text-strong)]">
          {sanitizeTokenMentions(title)}
        </h2>
      ) : null}
      <div className="overflow-hidden rounded-xl border border-[color:var(--vy-border)]">
        <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] bg-[color:var(--vy-muted)] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
          <span>Need</span>
          <span>Use this file pack</span>
        </div>
        <div className="divide-y divide-[color:var(--vy-border)] bg-[color:var(--vy-bg)]">
          {items.map((item) => (
            <div key={item.need} className="grid gap-3 px-5 py-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-6">
              <div>
                <p className="font-medium text-[color:var(--vy-text-strong)]">
                  {sanitizeTokenMentions(item.need)}
                </p>
                <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(item.note)}
                </p>
              </div>
              <p className="text-sm font-medium text-[color:var(--vy-fg)]">
                {sanitizeTokenMentions(item.useThis)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LogoRoleSections({
  sections,
  title,
}: {
  sections: readonly LogoRoleSection[];
  title?: string;
}) {
  return (
    <div className="space-y-5">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--vy-text-strong)]">
          {sanitizeTokenMentions(title)}
        </h2>
      ) : null}
      <div className="grid gap-6 lg:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(section.role)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(section.summary)}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[color:var(--vy-fg)]">
              {section.rules.map((rule) => (
                <li key={rule} className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                  <span>{sanitizeTokenMentions(rule)}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export function LogoRelatedAssetsGrid({
  items,
  title,
}: {
  items: readonly LogoRelatedAsset[];
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
            key={item.name}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
          >
            <h3 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(item.name)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(item.description)}
            </p>
            {item.href.startsWith("/#") ? (
              <Button asChild variant="outline" className="mt-6 w-full justify-between">
                <Link href={item.href}>
                  {sanitizeTokenMentions(item.ctaLabel)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button asChild variant="outline" className="mt-6 w-full justify-between">
                <a href={item.href} download={item.download}>
                  {sanitizeTokenMentions(item.ctaLabel)}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
