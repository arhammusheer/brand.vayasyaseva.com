"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUp,
  Check,
  FileText,
  Menu,
} from "lucide-react";

import { ChapterNav, ChapterNavSidebar } from "../components/brand/chapter-nav";
import { ChapterWrapper } from "../components/brand/chapter-wrapper";
import {
  ColorRootChooser,
} from "../components/brand/color-palette-panels";
import {
  LogoCommonNeedsGrid,
  LogoMisuseGrid,
  LogoPreviewGrid,
  LogoQuickActionsGrid,
} from "../components/brand/logo-usage-panels";
import {
  TypographyCommonNeedsGrid,
  TypographyMisuseGrid,
  TypographyQuickActionsGrid,
  TypographySpecimenGrid,
} from "../components/brand/typography-panels";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { BRAND_CONTENT } from "../content/brand";
import { useActiveSection } from "../hooks/use-active-section";
import {
  anchorsFromNavigation,
  sanitizeTokenMentions,
  smoothScrollToSection,
} from "../lib/brand-utils";

const sections = BRAND_CONTENT.sections;
const fundamentals = BRAND_CONTENT.fundamentals;
const navigationItems = BRAND_CONTENT.navigation.items;

const navAnchorBySectionId = new Map<string, string>(
  navigationItems.map((item) => [item.id, item.href.replace(/^#/, "")] as const),
);

const navLabelByAnchor = new Map<string, string>(
  navigationItems.map((item) => [
    item.href.replace(/^#/, ""),
    item.label.replace(/^\d+\s+/, ""),
  ] as const),
);

const CHAPTERS = {
  foundation: {
    id: "chapter-foundation",
    number: "I",
    title: "Foundation",
    description: "Start with identity, service scope, naming, and the daily behavior standards that shape representation.",
    accentColor: "foundation",
  },
  visual: {
    id: "chapter-visual",
    number: "II",
    title: "Visual System",
    description: "Use approved assets and defaults on the root handbook. Open the deeper visual reference only for specialist work.",
    accentColor: "visual",
  },
  communication: {
    id: "chapter-communication",
    number: "III",
    title: "Communication",
    description: "Use approved scripts, claim discipline, and short-form channel patterns for everyday communication.",
    accentColor: "communication",
  },
  application: {
    id: "chapter-application",
    number: "IV",
    title: "Application",
    description: "Use these rules for quotations, proposals, decks, email, calls, site visits, and final release checks.",
    accentColor: "application",
  },
  appendix: {
    id: "chapter-appendix",
    number: "V",
    title: "Appendix",
    description: "Use this area for approvals, self-serve assets, and searchable real-world scenarios.",
    accentColor: "appendix",
  },
} as const;

function sectionAnchor(sectionId: string, sectionNumber?: string) {
  return navAnchorBySectionId.get(sectionId) ?? (sectionNumber ? `${sectionNumber}-${sectionId}` : sectionId);
}

function jumpTarget(anchor: string) {
  return anchor.replace(/^#/, "");
}

function SectionHeader({
  number,
  title,
  summary,
}: {
  number: string;
  title: string;
  summary: string;
}) {
  return (
    <header className="border-b border-[color:var(--vy-border)] pb-8">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-sm font-semibold text-[color:var(--vy-muted-fg)]">
          {number}
        </span>
        <h3 className="font-display text-2xl font-semibold text-[color:var(--vy-text-strong)]">
          {sanitizeTokenMentions(title)}
        </h3>
      </div>
      <p className="mt-3 max-w-3xl text-lg text-[color:var(--vy-muted-fg)]">
        {sanitizeTokenMentions(summary)}
      </p>
    </header>
  );
}

function SummaryStrip({
  useThisWhen,
  doThis,
  neverDoThis,
  whoNeedsThis,
}: {
  useThisWhen: string;
  doThis: string;
  neverDoThis: string;
  whoNeedsThis: string;
}) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {[
        { label: "Use This When", value: useThisWhen },
        { label: "Do This", value: doThis },
        { label: "Never Do This", value: neverDoThis },
        { label: "Who Needs This", value: whoNeedsThis },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
            {item.label}
          </p>
          <p className="mt-2 text-sm text-[color:var(--vy-fg)]">
            {sanitizeTokenMentions(item.value)}
          </p>
        </div>
      ))}
    </div>
  );
}

function RulesBlock({ rules, title = "Rules" }: { rules: readonly string[]; title?: string }) {
  if (!rules.length) return null;

  return (
    <div className="mt-12">
      <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
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

function FieldDefaults({
  items,
  title = "Fast default",
}: {
  items?: readonly string[];
  title?: string;
}) {
  if (!items?.length) return null;

  return (
    <div className="mt-8 rounded-lg border-l-4 border-l-[color:var(--vy-gold-ui)] bg-[color:var(--vy-muted)] p-5">
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

function TemplatesBlock({
  templates,
  title = "Templates",
}: {
  templates: readonly {
    name: string;
    purpose: string;
    whenToUse: string;
    template: string;
    guardrails: readonly string[];
  }[];
  title?: string;
}) {
  if (!templates.length) return null;

  return (
    <div className="mt-12">
      <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6">
        {templates.map((template) => (
          <div key={template.name} className="overflow-hidden rounded-lg border border-[color:var(--vy-border)]">
            <div className="bg-[color:var(--vy-muted)] p-5">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[color:var(--vy-muted-fg)]" />
                <h5 className="font-semibold text-[color:var(--vy-text-strong)]">
                  {sanitizeTokenMentions(template.name)}
                </h5>
              </div>
              <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                {sanitizeTokenMentions(template.purpose)}
              </p>
              <p className="mt-1 text-xs text-[color:var(--vy-muted-fg)]">
                When to use: {sanitizeTokenMentions(template.whenToUse)}
              </p>
            </div>
            <div className="space-y-4 p-5">
              <pre className="whitespace-pre-wrap rounded bg-[color:var(--vy-muted)] p-4 font-mono text-sm leading-relaxed">
                {sanitizeTokenMentions(template.template)}
              </pre>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                  Guardrails
                </p>
                <ul className="space-y-1 text-sm">
                  {template.guardrails.map((guardrail) => (
                    <li key={guardrail} className="flex gap-2">
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--vy-warning)]" />
                      <span className="text-[color:var(--vy-muted-fg)]">
                        {sanitizeTokenMentions(guardrail)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReferenceLinkCard({
  href,
  title,
  audience,
}: {
  href: string;
  title: string;
  audience?: string;
}) {
  return (
    <div className="mt-10 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
            Specialist reference
          </p>
          <p className="mt-2 text-[color:var(--vy-fg)]">
            {audience
              ? `For ${sanitizeTokenMentions(audience)}. Use the root handbook for the safe default, then open the deeper reference only when you need production or implementation detail.`
              : "Open the deeper reference only when you need production or implementation detail."}
          </p>
        </div>
        <Button asChild variant="outline" className="justify-between">
          <Link href={href}>
            {sanitizeTokenMentions(title)}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function TaskGuideCard({
  title,
  channel,
  approvedScript,
  topRules,
  escalateWhen,
}: {
  title: string;
  channel: string;
  approvedScript: string;
  topRules: readonly string[];
  escalateWhen: string;
}) {
  return (
    <div className="rounded-lg border border-[color:var(--vy-border)] p-6">
      <div className="flex items-start justify-between gap-4">
        <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
          {sanitizeTokenMentions(title)}
        </h5>
        <span className="rounded-full bg-[color:var(--vy-muted)] px-2.5 py-1 text-xs font-medium text-[color:var(--vy-muted-fg)]">
          {sanitizeTokenMentions(channel)}
        </span>
      </div>
      <div className="mt-5 rounded-lg bg-[color:var(--vy-muted)] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
          Approved script
        </p>
        <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-[color:var(--vy-fg)]">
          {sanitizeTokenMentions(approvedScript)}
        </p>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-[color:var(--vy-fg)]">
        {topRules.map((rule) => (
          <li key={rule} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
            <span>{sanitizeTokenMentions(rule)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-[color:var(--vy-muted-fg)]">
        <span className="font-medium text-[color:var(--vy-text-strong)]">Escalate when:</span>{" "}
        {sanitizeTokenMentions(escalateWhen)}
      </p>
    </div>
  );
}

export default function Page() {
  const { activeSectionId, progress } = useActiveSection(anchorsFromNavigation);

  const handleNavigate = (anchorId: string) => {
    smoothScrollToSection(anchorId);
  };

  const anchorLabel = (anchor: string) => {
    const normalized = jumpTarget(anchor);
    const label = navLabelByAnchor.get(normalized);

    if (label) {
      return label;
    }

    return normalized.replace(/^\d+-/, "").replace(/-/g, " ");
  };

  const heroQuickActions = sections.overview.taskCards;
  const footer = sections.footerVersioning.footer;

  return (
    <div className="min-h-screen bg-[color:var(--vy-bg)] text-[color:var(--vy-fg)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-[color:var(--vy-bg)] focus:px-3 focus:py-2 focus:outline focus:outline-2 focus:outline-[color:var(--vy-focus-ring)]"
      >
        Skip to content
      </a>

      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-[color:var(--vy-muted)] print:hidden">
        <div
          className="h-full bg-[color:var(--vy-gold-ui)] transition-[width]"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      <header className="border-b border-[color:var(--vy-border)] print:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#main-content"
              aria-label="Go to handbook content"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--vy-focus-ring)] focus-visible:ring-offset-2"
            >
              <Image
                src="/brand/logos/master-logo-light.svg"
                alt="Vayasya logo"
                width={195}
                height={151}
                priority
                className="h-8 w-auto md:h-9"
              />
            </a>
            <span className="hidden h-8 w-px bg-[color:var(--vy-border)] sm:block" aria-hidden="true" />
            <div className="hidden leading-tight sm:block">
              <p className="mt-1 text-sm font-medium text-[color:var(--vy-muted-fg)]">Brand Handbook</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-[color:var(--vy-muted)] px-3 py-1 font-mono text-xs text-[color:var(--vy-muted-fg)] md:inline">
              {footer.version}
            </span>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open navigation">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px]">
                  <SheetHeader>
                    <SheetTitle>Contents</SheetTitle>
                  </SheetHeader>
                  <ScrollArea className="mt-4 h-[calc(100vh-100px)]">
                    <ChapterNav activeSection={activeSectionId} onNavigate={handleNavigate} />
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-12 lg:grid-cols-[260px_1fr] lg:px-6">
        <aside className="hidden print:hidden lg:block">
          <ChapterNavSidebar activeSection={activeSectionId} onNavigate={handleNavigate} />
        </aside>

        <main id="main-content" className="min-w-0">
          <header className="mb-20 border-b border-[color:var(--vy-border)] pb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(fundamentals.brandName.parent)}
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[color:var(--vy-text-strong)] md:text-5xl lg:text-6xl">
              Brand Handbook
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[color:var(--vy-muted-fg)]">
              A glance-first operating guide for how Vayasya should be introduced, written,
              shown, and represented across field work, client communication, and brand assets.
            </p>
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--vy-muted-fg)]">
                    Most-used entry points
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                    Jump straight to the task you need most often.
                  </p>
                </div>
                <span className="hidden rounded-full bg-[color:var(--vy-muted)] px-3 py-1 font-mono text-xs text-[color:var(--vy-muted-fg)] sm:inline-flex">
                  {footer.version}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {heroQuickActions.map((action) => (
                  <button
                    key={action.title}
                    type="button"
                    onClick={() => handleNavigate(jumpTarget(action.fullGuideAnchor))}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] px-4 py-4 text-left transition-colors hover:border-[color:var(--vy-gold-ui)] hover:bg-[color:var(--vy-bg)]"
                  >
                    <div>
                      <p className="font-medium text-[color:var(--vy-text-strong)]">
                        {sanitizeTokenMentions(action.title)}
                      </p>
                      <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                        {sanitizeTokenMentions(action.tenSecondRule)}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[color:var(--vy-muted-fg)] transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          </header>

          <ChapterWrapper {...CHAPTERS.foundation}>
            <section
              id={sectionAnchor(sections.overview.header.id, sections.overview.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.overview.header} />
              <SummaryStrip {...sections.overview.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.overview.intro)}
                </p>
                <div className="mt-8 rounded-lg bg-[color:var(--vy-muted)] p-6">
                  <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Who this is for
                  </p>
                  <p className="text-[color:var(--vy-fg)]">
                    {sanitizeTokenMentions(sections.overview.audience)}
                  </p>
                </div>

                <RulesBlock
                  rules={sections.overview.goldenRules}
                  title={`If You Only Remember ${sections.overview.goldenRules.length} Things`}
                />

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    By role
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {sections.overview.roleGuides.map((role) => (
                      <div key={role.role} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                        <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                          {sanitizeTokenMentions(role.role)}
                        </h5>
                        <div className="mt-5 grid gap-4 text-sm md:grid-cols-2">
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                              Must know
                            </p>
                            <ul className="space-y-2">
                              {role.mustKnow.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                                  <span>{sanitizeTokenMentions(item)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-info)]">
                              Top tasks
                            </p>
                            <ul className="space-y-2">
                              {role.topTasks.map((item) => (
                                <li key={item} className="text-[color:var(--vy-fg)]">
                                  {sanitizeTokenMentions(item)}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-5 rounded-lg bg-[color:var(--vy-muted)] p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                            Common mistakes
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-[color:var(--vy-muted-fg)]">
                            {role.commonMistakes.map((item) => (
                              <li key={item}>{sanitizeTokenMentions(item)}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="mt-4 text-sm text-[color:var(--vy-muted-fg)]">
                          <span className="font-medium text-[color:var(--vy-text-strong)]">Escalate when:</span>{" "}
                          {sanitizeTokenMentions(role.escalateWhen)}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {role.relatedAnchors.map((anchor) => (
                            <Button
                              key={anchor}
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleNavigate(jumpTarget(anchor))}
                            >
                              {sanitizeTokenMentions(anchorLabel(anchor))}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              id={sectionAnchor(sections.identity.header.id, sections.identity.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.identity.header} />
              <SummaryStrip {...sections.identity.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.identity.intro)}
                </p>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  <div className="rounded-lg border border-[color:var(--vy-border)] p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                      Short intro
                    </p>
                    <p className="mt-3 text-[color:var(--vy-fg)]">
                      {sanitizeTokenMentions(sections.identity.approvedIntros.short)}
                    </p>
                  </div>
                  <div className="rounded-lg border border-[color:var(--vy-border)] p-6 lg:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                      Approved paragraph
                    </p>
                    <p className="mt-3 text-[color:var(--vy-fg)]">
                      {sanitizeTokenMentions(sections.identity.approvedIntros.paragraph)}
                    </p>
                    <p className="mt-4 text-sm text-[color:var(--vy-muted-fg)]">
                      Recruiter version: {sanitizeTokenMentions(sections.identity.approvedIntros.recruiter)}
                    </p>
                  </div>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {sections.identity.identitySignals.map((signal) => (
                    <div key={signal} className="flex gap-3 rounded-lg bg-[color:var(--vy-muted)] p-4">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-success)]" />
                      <span>{sanitizeTokenMentions(signal)}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    Service map
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {sections.identity.serviceCapabilities.map((service) => (
                      <div key={service.name} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                        <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                          {sanitizeTokenMentions(service.name)}
                        </h5>
                        <p className="mt-3 text-[color:var(--vy-fg)]">
                          {sanitizeTokenMentions(service.approvedDescription)}
                        </p>
                        <div className="mt-5 rounded-lg bg-[color:var(--vy-muted)] p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                            Scope boundary
                          </p>
                          <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                            {sanitizeTokenMentions(service.scopeBoundary)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    Operating model
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                    {sections.identity.operatingModel.map((step) => (
                      <div key={step.step} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                          {sanitizeTokenMentions(step.step)}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[color:var(--vy-fg)]">
                          {sanitizeTokenMentions(step.detail)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 rounded-xl border border-[color:var(--vy-warning)] bg-[color:var(--vy-muted)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Scope boundaries
                  </p>
                  <ul className="mt-4 grid gap-3 md:grid-cols-2">
                    {sections.identity.boundaries.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-[color:var(--vy-fg)]">
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-warning)]" />
                        <span>{sanitizeTokenMentions(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <RulesBlock rules={sections.identity.rules} />
              </div>
            </section>

            <section
              id={sectionAnchor(
                sections.brandArchitecture.header.id,
                sections.brandArchitecture.header.number,
              )}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.brandArchitecture.header} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.brandArchitecture.intro)}
                </p>
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  {sections.brandArchitecture.choiceGuide.map((item) => (
                    <div key={item.context} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                        {sanitizeTokenMentions(item.context)}
                      </p>
                      <p className="mt-3 text-[color:var(--vy-fg)]">
                        {sanitizeTokenMentions(item.rule)}
                      </p>
                    </div>
                  ))}
                </div>
                <RulesBlock rules={sections.brandArchitecture.rules} />
              </div>
            </section>

            <section
              id={sectionAnchor(
                sections.operatingPillars.header.id,
                sections.operatingPillars.header.number,
              )}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.operatingPillars.header} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.operatingPillars.intro)}
                </p>
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  {sections.operatingPillars.pillars.map((pillar) => (
                    <div key={pillar.name} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                        {sanitizeTokenMentions(pillar.name)}
                      </h5>
                      <p className="mt-3 text-[color:var(--vy-fg)]">
                        {sanitizeTokenMentions(pillar.definition)}
                      </p>
                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                            Behaviors
                          </p>
                          <ul className="space-y-2 text-sm text-[color:var(--vy-fg)]">
                            {pillar.behaviors.map((item) => (
                              <li key={item} className="flex gap-2">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                                <span>{sanitizeTokenMentions(item)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                            Red flags
                          </p>
                          <ul className="space-y-2 text-sm text-[color:var(--vy-muted-fg)]">
                            {pillar.redFlags.map((item) => (
                              <li key={item}>{sanitizeTokenMentions(item)}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <RulesBlock rules={sections.operatingPillars.rules} />
              </div>
            </section>
          </ChapterWrapper>

          <ChapterWrapper {...CHAPTERS.visual}>
            <section
              id={sectionAnchor(sections.logoUsage.header.id, sections.logoUsage.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.logoUsage.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.logoUsage.intro)}
                </p>
                <div className="mt-10 space-y-12">
                  <LogoQuickActionsGrid
                    actions={sections.logoUsage.quickActions}
                    title="What you probably need"
                    description="Pick the pack or task first. If none of these covers your case, open the full logo reference."
                  />
                  <LogoCommonNeedsGrid items={sections.logoUsage.commonNeeds} />
                  <LogoPreviewGrid
                    cards={sections.logoUsage.previewCards}
                    title="Choose the right logo"
                  />
                  <LogoMisuseGrid
                    examples={sections.logoUsage.misuseChecks}
                    title="Never do this"
                  />
                </div>
                <ReferenceLinkCard
                  href={sections.logoUsage.referenceHref}
                  title={sections.logoUsage.referenceTitle}
                  audience={sections.logoUsage.referenceAudience}
                />
              </div>
            </section>

            <section
              id={sectionAnchor(sections.colorPalette.header.id, sections.colorPalette.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.colorPalette.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.colorPalette.intro)}
                </p>
                <FieldDefaults items={sections.colorPalette.employeeDefaults} />
                <div className="mt-10">
                  <ColorRootChooser
                    lanes={sections.colorPalette.previewGroups}
                    title="Choose the right palette lane"
                  />
                </div>
                <ReferenceLinkCard
                  href={sections.colorPalette.referenceHref}
                  title={sections.colorPalette.referenceTitle}
                  audience={sections.colorPalette.referenceAudience}
                />
              </div>
            </section>

            <section
              id={sectionAnchor(sections.typography.header.id, sections.typography.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.typography.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.typography.intro)}
                </p>
                <div className="mt-10 space-y-12">
                  <TypographyQuickActionsGrid
                    actions={sections.typography.quickActions}
                    title="What you probably need"
                    description="Start with the task. If you need more than the family role and the safe default, open the full typography reference."
                  />
                  <TypographySpecimenGrid
                    cards={sections.typography.specimenCards}
                    title="Pick the right type role"
                  />
                  <TypographyCommonNeedsGrid items={sections.typography.commonNeeds} />
                  <TypographyMisuseGrid
                    examples={sections.typography.misuseChecks}
                    title="Never do this"
                  />
                </div>
                <ReferenceLinkCard
                  href={sections.typography.referenceHref}
                  title={sections.typography.referenceTitle}
                  audience={sections.typography.referenceAudience}
                />
              </div>
            </section>

            <section
              id={sectionAnchor(sections.imagery.header.id, sections.imagery.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.imagery.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.imagery.intro)}
                </p>
                <FieldDefaults items={sections.imagery.employeeDefaults} title="Employee-safe default" />
                <RulesBlock rules={sections.imagery.rules} title="Critical imagery rules" />
                <ReferenceLinkCard
                  href={sections.imagery.referenceHref}
                  title={sections.imagery.referenceTitle}
                  audience={sections.imagery.referenceAudience}
                />
              </div>
            </section>
          </ChapterWrapper>

          <ChapterWrapper {...CHAPTERS.communication}>
            <section
              id={sectionAnchor(sections.voiceTone.header.id, sections.voiceTone.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.voiceTone.header} />
              <SummaryStrip {...sections.voiceTone.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.voiceTone.intro)}
                </p>
                <RulesBlock rules={sections.voiceTone.rules} title="Voice rules" />

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    High-frequency scripts
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {sections.voiceTone.scripts.map((script) => (
                      <TaskGuideCard key={script.title} {...script} />
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    Terminology to prefer
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {sections.voiceTone.terminology.map((item) => (
                      <div key={item.term} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                          Replace
                        </p>
                        <h5 className="mt-2 text-lg font-semibold text-[color:var(--vy-text-strong)]">
                          {sanitizeTokenMentions(item.term)}
                        </h5>
                        <p className="mt-4 text-sm font-medium text-[color:var(--vy-success)]">
                          Use: {sanitizeTokenMentions(item.approved)}
                        </p>
                        <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                          Avoid: {item.avoid.map((entry) => sanitizeTokenMentions(entry)).join(", ")}
                        </p>
                        <p className="mt-4 text-sm text-[color:var(--vy-fg)]">
                          {sanitizeTokenMentions(item.notes)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              id={sectionAnchor(
                sections.claimsDiscipline.header.id,
                sections.claimsDiscipline.header.number,
              )}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.claimsDiscipline.header} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.claimsDiscipline.intro)}
                </p>

                <div className="mt-10 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Can I say this?
                  </p>
                  <ol className="mt-4 space-y-3">
                    {sections.claimsDiscipline.decisionLadder.map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--vy-bg)] text-xs font-semibold text-[color:var(--vy-text-strong)]">
                          {index + 1}
                        </span>
                        <span className="text-sm text-[color:var(--vy-fg)]">
                          {sanitizeTokenMentions(step)}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                  {sections.claimsDiscipline.claimRules.map((rule) => (
                    <div key={rule.claimType} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                        {sanitizeTokenMentions(rule.claimType)}
                      </p>
                      <div className="mt-4 space-y-3 text-sm">
                        <p className="text-[color:var(--vy-fg)]">
                          <span className="font-medium text-[color:var(--vy-text-strong)]">Allowed:</span>{" "}
                          {sanitizeTokenMentions(rule.allowedPattern)}
                        </p>
                        <p className="text-[color:var(--vy-fg)]">
                          <span className="font-medium text-[color:var(--vy-text-strong)]">Evidence:</span>{" "}
                          {sanitizeTokenMentions(rule.requiredEvidence)}
                        </p>
                        <p className="text-[color:var(--vy-muted-fg)]">
                          <span className="font-medium text-[color:var(--vy-text-strong)]">Avoid:</span>{" "}
                          {sanitizeTokenMentions(rule.prohibitedPattern)}
                        </p>
                        <p className="text-[color:var(--vy-muted-fg)]">
                          <span className="font-medium text-[color:var(--vy-text-strong)]">Review trigger:</span>{" "}
                          {sanitizeTokenMentions(rule.reviewTrigger)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <RulesBlock
                  rules={sections.claimsDiscipline.legalSafePatterns}
                  title="Safe wording patterns"
                />

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    Field examples
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {sections.claimsDiscipline.fieldExamples.map((example) => (
                      <div key={example.context} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                        <h5 className="font-medium text-[color:var(--vy-text-strong)]">
                          {sanitizeTokenMentions(example.context)}
                        </h5>
                        <div className="mt-4 rounded-lg border border-[color:var(--vy-success)] bg-[color:var(--vy-muted)] p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                            Safer
                          </p>
                          <p className="mt-2 text-sm text-[color:var(--vy-fg)]">
                            {sanitizeTokenMentions(example.safe)}
                          </p>
                        </div>
                        <div className="mt-4 rounded-lg border border-[color:var(--vy-danger)] bg-[color:var(--vy-muted)] p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                            Unsafe
                          </p>
                          <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                            {sanitizeTokenMentions(example.unsafe)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.claimsDiscipline.rules} title="Fast claim checks" />
              </div>
            </section>

            <section
              id={sectionAnchor(
                sections.writingMechanics.header.id,
                sections.writingMechanics.header.number,
              )}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.writingMechanics.header} />
              <SummaryStrip {...sections.writingMechanics.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.writingMechanics.intro)}
                </p>
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                  {sections.writingMechanics.channelGuides.map((guide) => (
                    <TaskGuideCard key={guide.title} {...guide} />
                  ))}
                </div>
                <RulesBlock rules={sections.writingMechanics.rules} />
              </div>
            </section>
          </ChapterWrapper>

          <ChapterWrapper {...CHAPTERS.application}>
            <section
              id={sectionAnchor(sections.documents.header.id, sections.documents.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.documents.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.documents.intro)}
                </p>
                <RulesBlock rules={sections.documents.rules} />
                <TemplatesBlock templates={sections.documents.templates} />
              </div>
            </section>

            <section
              id={sectionAnchor(
                sections.presentations.header.id,
                sections.presentations.header.number,
              )}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.presentations.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.presentations.intro)}
                </p>
                <RulesBlock rules={sections.presentations.rules} />
              </div>
            </section>

            <section
              id={sectionAnchor(sections.email.header.id, sections.email.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.email.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.email.intro)}
                </p>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  {sections.email.channelChoice.map((item) => (
                    <div key={item.situation} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                        Situation
                      </p>
                      <p className="mt-3 text-[color:var(--vy-text-strong)]">
                        {sanitizeTokenMentions(item.situation)}
                      </p>
                      <p className="mt-4 text-sm font-medium text-[color:var(--vy-success)]">
                        Use: {sanitizeTokenMentions(item.use)}
                      </p>
                      <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                        Avoid: {sanitizeTokenMentions(item.avoid)}
                      </p>
                    </div>
                  ))}
                </div>

                <RulesBlock rules={sections.email.rules} />
                <TemplatesBlock templates={sections.email.templates} />
              </div>
            </section>

            <section
              id={sectionAnchor(sections.meetings.header.id, sections.meetings.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.meetings.header} />
              <SummaryStrip {...sections.meetings.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.meetings.intro)}
                </p>
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-lg border border-[color:var(--vy-border)] p-6">
                    <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">
                      Site visit behavior
                    </h4>
                    <ul className="mt-5 space-y-3 text-sm text-[color:var(--vy-fg)]">
                      {sections.meetings.siteVisitRules.map((rule) => (
                        <li key={rule} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                          <span>{sanitizeTokenMentions(rule)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[color:var(--vy-border)] p-6">
                    <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">
                      Call handling
                    </h4>
                    <ul className="mt-5 space-y-3 text-sm text-[color:var(--vy-fg)]">
                      {sections.meetings.callRules.map((rule) => (
                        <li key={rule} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                          <span>{sanitizeTokenMentions(rule)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <RulesBlock rules={sections.meetings.rules} />
                <TemplatesBlock templates={sections.meetings.templates} />
              </div>
            </section>

            <section
              id={sectionAnchor(
                sections.preSendChecklist.header.id,
                sections.preSendChecklist.header.number,
              )}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.preSendChecklist.header} />
              <SummaryStrip {...sections.preSendChecklist.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.preSendChecklist.intro)}
                </p>
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  {sections.preSendChecklist.checklist.map((group) => (
                    <div key={group.title} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">
                        {sanitizeTokenMentions(group.title)}
                      </h4>
                      <ul className="mt-5 space-y-3 text-sm text-[color:var(--vy-fg)]">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                            <span>{sanitizeTokenMentions(item)}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 rounded-lg bg-[color:var(--vy-muted)] p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                          Pass condition
                        </p>
                        <p className="mt-2 text-sm text-[color:var(--vy-fg)]">
                          {sanitizeTokenMentions(group.passCondition)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <RulesBlock rules={sections.preSendChecklist.rules} />
              </div>
            </section>
          </ChapterWrapper>

          <ChapterWrapper {...CHAPTERS.appendix}>
            <section
              id={sectionAnchor(
                sections.governanceApprovals.header.id,
                sections.governanceApprovals.header.number,
              )}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.governanceApprovals.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.governanceApprovals.intro)}
                </p>
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-lg border border-[color:var(--vy-border)] p-6">
                    <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">
                      Approval needed only when...
                    </h4>
                    <ul className="mt-5 space-y-3 text-sm text-[color:var(--vy-fg)]">
                      {sections.governanceApprovals.approvalNeededWhen.map((item) => (
                        <li key={item} className="flex gap-2">
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-warning)]" />
                          <span>{sanitizeTokenMentions(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[color:var(--vy-border)] p-6">
                    <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">
                      Self-serve allowed
                    </h4>
                    <ul className="mt-5 space-y-3 text-sm text-[color:var(--vy-fg)]">
                      {sections.governanceApprovals.selfServeAllowed.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                          <span>{sanitizeTokenMentions(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <RulesBlock rules={sections.governanceApprovals.rules} />
              </div>
            </section>

            <section
              id={sectionAnchor(
                sections.templatesDownloadables.header.id,
                sections.templatesDownloadables.header.number,
              )}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.templatesDownloadables.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.templatesDownloadables.intro)}
                </p>
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  {sections.templatesDownloadables.assets.map((asset) => (
                    <div key={asset.name} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">
                          {sanitizeTokenMentions(asset.name)}
                        </h4>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                            asset.governanceLevel === "self-serve"
                              ? "bg-[color:var(--vy-muted)] text-[color:var(--vy-success)]"
                              : "bg-[color:var(--vy-muted)] text-[color:var(--vy-warning)]"
                          }`}
                        >
                          {sanitizeTokenMentions(asset.governanceLevel)}
                        </span>
                      </div>
                      <p className="mt-3 text-[color:var(--vy-fg)]">
                        {sanitizeTokenMentions(asset.copy)}
                      </p>
                      <p className="mt-4 text-sm text-[color:var(--vy-muted-fg)]">
                        Audience: {sanitizeTokenMentions(asset.audience)}
                      </p>
                      <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                        When to use: {sanitizeTokenMentions(asset.whenToUse)}
                      </p>
                    </div>
                  ))}
                </div>
                <RulesBlock rules={sections.templatesDownloadables.rules} />
              </div>
            </section>

            <section
              id={sectionAnchor(sections.faqEdgeCases.header.id, sections.faqEdgeCases.header.number)}
              className="scroll-mt-8"
            >
              <SectionHeader {...sections.faqEdgeCases.header} />
              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">
                  {sanitizeTokenMentions(sections.faqEdgeCases.intro)}
                </p>
                <div className="mt-10 space-y-4">
                  {sections.faqEdgeCases.faq.map((item) => (
                    <details key={item.question} className="rounded-lg border border-[color:var(--vy-border)]">
                      <summary className="cursor-pointer p-5 font-medium text-[color:var(--vy-text-strong)]">
                        {sanitizeTokenMentions(item.question)}
                      </summary>
                      <div className="border-t border-[color:var(--vy-border)] p-5">
                        <p className="text-[color:var(--vy-muted-fg)]">
                          {sanitizeTokenMentions(item.answer)}
                        </p>
                        {item.tags?.length ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-[color:var(--vy-muted)] px-2.5 py-1 text-xs text-[color:var(--vy-muted-fg)]"
                              >
                                {sanitizeTokenMentions(tag)}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          </ChapterWrapper>

          <div className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-8">
            <div className="grid gap-6 text-sm md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                  Version
                </p>
                <p className="mt-2 font-mono">{sanitizeTokenMentions(footer.version)}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                  Effective
                </p>
                <p className="mt-2">{sanitizeTokenMentions(footer.effectiveDate)}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                  Owner
                </p>
                <p className="mt-2">{sanitizeTokenMentions(footer.owner)}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                  Contact
                </p>
                <p className="mt-2">
                  <a
                    href={`mailto:${footer.contact}`}
                    className="underline decoration-[color:var(--vy-border)] underline-offset-4"
                  >
                    {sanitizeTokenMentions(footer.contact)}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Button
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 z-50 shadow-lg print:hidden"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
