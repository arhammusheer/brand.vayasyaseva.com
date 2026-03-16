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
  X,
} from "lucide-react";

import { BRAND_CONTENT } from "../content/brand";
import { useActiveSection } from "../hooks/use-active-section";
import {
  anchorsFromNavigation,
  sanitizeTokenMentions,
  smoothScrollToSection,
} from "../lib/brand-utils";
import { ChapterNav, ChapterNavSidebar } from "../components/brand/chapter-nav";
import { ChapterWrapper } from "../components/brand/chapter-wrapper";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

const sections = BRAND_CONTENT.sections;
const fundamentals = BRAND_CONTENT.fundamentals;

const CHAPTERS = {
  foundation: {
    id: "chapter-foundation",
    number: "I",
    title: "Foundation",
    description: "Start with identity, service scope, brand ownership, and daily operating behavior.",
    accentColor: "foundation",
  },
  visual: {
    id: "chapter-visual",
    number: "II",
    title: "Visual System",
    description: "Use approved assets by default; deeper visual rules stay available for specialist work.",
    accentColor: "visual",
  },
  communication: {
    id: "chapter-communication",
    number: "III",
    title: "Communication",
    description: "Approved scripts, claim safety, and channel-specific writing guidance.",
    accentColor: "communication",
  },
  application: {
    id: "chapter-application",
    number: "IV",
    title: "Application",
    description: "The actual work outputs: quotations, decks, email, calls, visits, and final release checks.",
    accentColor: "application",
  },
  appendix: {
    id: "chapter-appendix",
    number: "V",
    title: "Appendix",
    description: "Governance, self-serve assets, scenarios, changelog, and version information.",
    accentColor: "appendix",
  },
} as const;

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
        {rules.map((rule, index) => (
          <div key={index} className="flex gap-3 rounded-lg bg-[color:var(--vy-muted)] p-4">
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

function DoDontBlock({
  examples,
  title = "Do / Don't",
}: {
  examples: readonly { topic: string; do: string; dont: string; why: string }[];
  title?: string;
}) {
  if (!examples.length) return null;

  return (
    <div className="mt-12">
      <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6 lg:grid-cols-2">
        {examples.map((example, index) => (
          <div key={index} className="rounded-lg border border-[color:var(--vy-border)] p-6">
            <p className="mb-4 font-medium text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(example.topic)}
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 rounded border-l-2 border-[color:var(--vy-success)] bg-[color:var(--vy-muted)] p-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-success)]" />
                <p className="text-[color:var(--vy-fg)]">{sanitizeTokenMentions(example.do)}</p>
              </div>
              <div className="flex gap-3 rounded border-l-2 border-[color:var(--vy-danger)] bg-[color:var(--vy-muted)] p-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-danger)]" />
                <p className="text-[color:var(--vy-muted-fg)]">{sanitizeTokenMentions(example.dont)}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(example.why)}
            </p>
          </div>
        ))}
      </div>
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
        {templates.map((template, index) => (
          <div key={index} className="overflow-hidden rounded-lg border border-[color:var(--vy-border)]">
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
              ? `For ${sanitizeTokenMentions(audience)}. Use the handbook root for employee-safe defaults, then open the deeper visual reference only when you need production or implementation detail.`
              : "Open the deeper visual reference only when you need production or implementation detail."}
          </p>
        </div>
        <Button asChild variant="outline" className="justify-between">
          <Link href={href}>
            {title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function Page() {
  const { activeSectionId, progress } = useActiveSection(anchorsFromNavigation);

  const handleNavigate = (anchorId: string) => {
    smoothScrollToSection(anchorId);
  };

  const anchorLabel = (anchor: string) => {
    const normalized = anchor.replace(/^#/, "");
    const section = Object.values(sections).find((item) => {
      const numberedId = `${item.header.number}-${item.header.id}`.toLowerCase();
      return (
        normalized.toLowerCase() === numberedId || normalized.toLowerCase() === item.header.id.toLowerCase()
      );
    });

    if (section) {
      return section.header.title;
    }

    return normalized.replace(/^\d+-/, "").replace(/-/g, " ");
  };

  const heroQuickActions = sections.overview.taskCards;

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
              {sections.footerVersioning.footer.version}
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
              {fundamentals.brandName.parent}
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
                  {sections.footerVersioning.footer.version}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {heroQuickActions.map((action) => (
                  <button
                    key={action.title}
                    type="button"
                    onClick={() => handleNavigate(action.fullGuideAnchor.replace("#", ""))}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] px-4 py-4 text-left transition-colors hover:border-[color:var(--vy-gold-ui)] hover:bg-[color:var(--vy-bg)]"
                  >
                    <div>
                      <p className="font-medium text-[color:var(--vy-text-strong)]">{action.title}</p>
                      <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                        {action.tenSecondRule}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[color:var(--vy-muted-fg)] transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          </header>

          <ChapterWrapper {...CHAPTERS.foundation}>
            <section id="01-overview" className="scroll-mt-8">
              <SectionHeader {...sections.overview.header} />
              <SummaryStrip {...sections.overview.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.overview.intro}</p>
                <div className="mt-8 rounded-lg bg-[color:var(--vy-muted)] p-6">
                  <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Who this is for
                  </p>
                  <p className="text-[color:var(--vy-fg)]">{sections.overview.audience}</p>
                </div>

                <RulesBlock rules={sections.overview.goldenRules} title="If You Only Remember 7 Things" />

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    By Role
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {sections.overview.roleGuides.map((role) => (
                      <div
                        key={role.role}
                        className="rounded-lg border border-[color:var(--vy-border)] p-6"
                      >
                        <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                          {role.role}
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
                                  <span>{item}</span>
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
                                  {item}
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
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="mt-4 text-sm text-[color:var(--vy-muted-fg)]">
                          <span className="font-medium text-[color:var(--vy-text-strong)]">Escalate when:</span>{" "}
                          {role.escalateWhen}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {role.relatedAnchors.map((anchor) => (
                            <Button
                              key={anchor}
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleNavigate(anchor.replace("#", ""))}
                            >
                              {anchorLabel(anchor)}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    By Task
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {sections.overview.taskCards.map((card) => (
                      <div
                        key={card.title}
                        className="rounded-lg border border-[color:var(--vy-border)] p-6"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                            {card.title}
                          </h5>
                          <span className="rounded-full bg-[color:var(--vy-muted)] px-2.5 py-1 text-xs font-medium text-[color:var(--vy-muted-fg)]">
                            {card.roleOrTask}
                          </span>
                        </div>
                        <p className="mt-4 text-[color:var(--vy-fg)]">{card.tenSecondRule}</p>
                        <ul className="mt-4 space-y-2 text-sm text-[color:var(--vy-muted-fg)]">
                          {card.checklistItems.map((item) => (
                            <li key={item} className="flex gap-2">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-5 justify-between"
                          onClick={() => handleNavigate(card.fullGuideAnchor.replace("#", ""))}
                        >
                          Open full guidance
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="02-identity" className="scroll-mt-8">
              <SectionHeader {...sections.identity.header} />
              <SummaryStrip {...sections.identity.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.identity.intro}</p>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  <div className="rounded-lg border border-[color:var(--vy-border)] p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                      Short intro
                    </p>
                    <p className="mt-3 text-[color:var(--vy-fg)]">
                      {sections.identity.approvedIntros.short}
                    </p>
                  </div>
                  <div className="rounded-lg border border-[color:var(--vy-border)] p-6 lg:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                      Approved paragraph
                    </p>
                    <p className="mt-3 text-[color:var(--vy-fg)]">
                      {sections.identity.approvedIntros.paragraph}
                    </p>
                    <p className="mt-4 text-sm text-[color:var(--vy-muted-fg)]">
                      Recruiter version: {sections.identity.approvedIntros.recruiter}
                    </p>
                  </div>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {sections.identity.identitySignals.map((signal) => (
                    <div key={signal} className="flex gap-3 rounded-lg bg-[color:var(--vy-muted)] p-4">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-success)]" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    Approved Service Map
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {sections.identity.serviceCapabilities.map((service) => (
                      <div
                        key={service.name}
                        className="rounded-lg border border-[color:var(--vy-border)] p-6"
                      >
                        <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                          {service.name}
                        </h5>
                        <p className="mt-3 text-[color:var(--vy-fg)]">
                          {service.approvedDescription}
                        </p>
                        <div className="mt-5 grid gap-4 text-sm md:grid-cols-2">
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                              Includes
                            </p>
                            <ul className="space-y-1">
                              {service.includes.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                              Not included
                            </p>
                            <ul className="space-y-1 text-[color:var(--vy-muted-fg)]">
                              {service.notIncluded.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-info)]">
                              On request
                            </p>
                            <ul className="space-y-1 text-[color:var(--vy-muted-fg)]">
                              {service.onRequest.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                              Proof points
                            </p>
                            <ul className="space-y-1 text-[color:var(--vy-muted-fg)]">
                              {service.proofPoints.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    Operating Model
                  </h4>
                  <div className="grid gap-4 md:grid-cols-5">
                    {sections.identity.operatingModel.map((step) => (
                      <div key={step.step} className="rounded-lg bg-[color:var(--vy-muted)] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                          {step.step}
                        </p>
                        <p className="mt-3 text-sm text-[color:var(--vy-fg)]">{step.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-lg border-2 border-[color:var(--vy-danger)] p-6">
                    <h4 className="mb-4 font-semibold text-[color:var(--vy-danger)]">
                      What Vayasya is not
                    </h4>
                    <ul className="space-y-3">
                      {sections.identity.whatWeAreNot.map((item) => (
                        <li key={item} className="flex gap-2">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-danger)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[color:var(--vy-warning)] bg-[color:var(--vy-muted)] p-6">
                    <h4 className="mb-4 font-semibold text-[color:var(--vy-text-strong)]">
                      What we do not say
                    </h4>
                    <ul className="space-y-3 text-[color:var(--vy-muted-fg)]">
                      {sections.identity.whatWeDoNotSay.map((item) => (
                        <li key={item} className="flex gap-2">
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-warning)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <RulesBlock rules={sections.identity.rules} />
                <DoDontBlock examples={sections.identity.doDont} />
                <TemplatesBlock templates={sections.identity.templates} />
              </div>
            </section>

            <section id="03-brand-architecture" className="scroll-mt-8">
              <SectionHeader {...sections.brandArchitecture.header} />
              <SummaryStrip {...sections.brandArchitecture.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.brandArchitecture.intro}</p>

                <div className="mt-10 rounded-lg border-2 border-[color:var(--vy-gold-ui)] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="h-8 w-8 rounded"
                      style={{ backgroundColor: sections.brandArchitecture.masterBrand.accentHex }}
                    />
                    <h5 className="text-xl font-semibold text-[color:var(--vy-text-strong)]">
                      {sections.brandArchitecture.masterBrand.name}
                    </h5>
                  </div>
                  <p className="text-[color:var(--vy-muted-fg)]">
                    {sections.brandArchitecture.masterBrand.role}
                  </p>
                </div>

                <div className="mt-10">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    Verticals
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {sections.brandArchitecture.verticals.map((vertical) => (
                      <div
                        key={vertical.name}
                        className="overflow-hidden rounded-lg border border-[color:var(--vy-border)]"
                      >
                        <div className="h-2" style={{ backgroundColor: vertical.accentHex }} />
                        <div className="p-5">
                          <div className="flex items-center justify-between">
                            <h5 className="font-semibold text-[color:var(--vy-text-strong)]">
                              {vertical.name}
                            </h5>
                            <span className="font-mono text-xs text-[color:var(--vy-muted-fg)]">
                              {vertical.accentHex}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                            {vertical.domain}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.brandArchitecture.namingRules} title="Naming Rules" />
                <RulesBlock rules={sections.brandArchitecture.lockupRules} title="Lockup Rules" />

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    When to Use Which Brand
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {sections.brandArchitecture.usageGuidance.map((item) => (
                      <div key={item.context} className="rounded-lg bg-[color:var(--vy-muted)] p-5">
                        <p className="font-medium text-[color:var(--vy-text-strong)]">{item.context}</p>
                        <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{item.rule}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.brandArchitecture.rules} />
                <DoDontBlock examples={sections.brandArchitecture.doDont} />
              </div>
            </section>

            <section id="04-operating-pillars" className="scroll-mt-8">
              <SectionHeader {...sections.operatingPillars.header} />
              <SummaryStrip {...sections.operatingPillars.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.operatingPillars.intro}</p>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {sections.operatingPillars.pillars.map((pillar) => (
                    <div
                      key={pillar.name}
                      className="rounded-lg border border-[color:var(--vy-border)] overflow-hidden"
                    >
                      <div className="bg-[color:var(--vy-muted)] p-5">
                        <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                          {pillar.name}
                        </h5>
                        <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                          {pillar.definition}
                        </p>
                      </div>
                      <div className="space-y-5 p-5 text-sm">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                            Behaviors
                          </p>
                          <ul className="space-y-2">
                            {pillar.behaviors.map((item) => (
                              <li key={item} className="flex gap-2">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                            Red flags
                          </p>
                          <ul className="space-y-2 text-[color:var(--vy-muted-fg)]">
                            {pillar.redFlags.map((item) => (
                              <li key={item} className="flex gap-2">
                                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-danger)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <RulesBlock rules={sections.operatingPillars.rules} />
                <DoDontBlock examples={sections.operatingPillars.doDont} />
                <TemplatesBlock templates={sections.operatingPillars.templates} />
              </div>
            </section>
          </ChapterWrapper>

          <ChapterWrapper {...CHAPTERS.visual}>
            <section id="05-logo-usage" className="scroll-mt-8">
              <SectionHeader {...sections.logoUsage.header} />
              <SummaryStrip {...sections.logoUsage.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.logoUsage.intro}</p>
                <FieldDefaults items={sections.logoUsage.employeeDefaults} />
                <RulesBlock rules={sections.logoUsage.rules.slice(0, 5)} title="Critical rules" />
                <ReferenceLinkCard
                  href={sections.logoUsage.referenceHref}
                  title={sections.logoUsage.referenceTitle}
                  audience={sections.logoUsage.referenceAudience}
                />
              </div>
            </section>

            <section id="06-color-palette" className="scroll-mt-8">
              <SectionHeader {...sections.colorPalette.header} />
              <SummaryStrip {...sections.colorPalette.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.colorPalette.intro}</p>
                <FieldDefaults items={sections.colorPalette.employeeDefaults} />
                <RulesBlock rules={sections.colorPalette.rules.slice(0, 5)} title="Critical rules" />
                <ReferenceLinkCard
                  href={sections.colorPalette.referenceHref}
                  title={sections.colorPalette.referenceTitle}
                  audience={sections.colorPalette.referenceAudience}
                />
              </div>
            </section>

            <section id="07-typography" className="scroll-mt-8">
              <SectionHeader {...sections.typography.header} />
              <SummaryStrip {...sections.typography.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.typography.intro}</p>
                <FieldDefaults items={sections.typography.employeeDefaults} />
                <RulesBlock rules={sections.typography.rules.slice(0, 5)} title="Critical rules" />
                <ReferenceLinkCard
                  href={sections.typography.referenceHref}
                  title={sections.typography.referenceTitle}
                  audience={sections.typography.referenceAudience}
                />
              </div>
            </section>

            <section id="08-imagery" className="scroll-mt-8">
              <SectionHeader {...sections.imagery.header} />
              <SummaryStrip {...sections.imagery.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.imagery.intro}</p>
                <FieldDefaults items={sections.imagery.employeeDefaults} />
                <RulesBlock rules={sections.imagery.rules.slice(0, 5)} title="Critical rules" />
                <ReferenceLinkCard
                  href={sections.imagery.referenceHref}
                  title={sections.imagery.referenceTitle}
                  audience={sections.imagery.referenceAudience}
                />
              </div>
            </section>
          </ChapterWrapper>

          <ChapterWrapper {...CHAPTERS.communication}>
            <section id="09-voice-tone" className="scroll-mt-8">
              <SectionHeader {...sections.voiceTone.header} />
              <SummaryStrip {...sections.voiceTone.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.voiceTone.intro}</p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {sections.voiceTone.personas.map((persona) => (
                    <div key={persona.trait} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                        {persona.trait}
                      </h5>
                      <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                        {persona.description}
                      </p>
                      <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                            Sounds like
                          </p>
                          <ul className="space-y-2">
                            {persona.soundsLike.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                            Avoid
                          </p>
                          <ul className="space-y-2 text-[color:var(--vy-muted-fg)]">
                            {persona.avoid.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    Common scripts
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {sections.voiceTone.scripts.map((script) => (
                      <div key={script.title} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                        <div className="flex items-center justify-between gap-4">
                          <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                            {script.title}
                          </h5>
                          <span className="rounded-full bg-[color:var(--vy-muted)] px-2.5 py-1 text-xs font-medium text-[color:var(--vy-muted-fg)]">
                            {script.channel}
                          </span>
                        </div>
                        <pre className="mt-4 whitespace-pre-wrap rounded bg-[color:var(--vy-muted)] p-4 text-sm leading-relaxed">
                          {script.approvedScript}
                        </pre>
                        <ul className="mt-4 space-y-2 text-sm">
                          {script.topRules.map((item) => (
                            <li key={item} className="flex gap-2">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 rounded-lg border border-[color:var(--vy-border)] p-4 text-sm">
                          <p className="font-medium text-[color:var(--vy-text-strong)]">
                            {script.doDont[0]?.topic}
                          </p>
                          <p className="mt-2 text-[color:var(--vy-fg)]">Do: {script.doDont[0]?.do}</p>
                          <p className="mt-2 text-[color:var(--vy-muted-fg)]">
                            Don&apos;t: {script.doDont[0]?.dont}
                          </p>
                        </div>
                        <p className="mt-4 text-sm text-[color:var(--vy-muted-fg)]">
                          <span className="font-medium text-[color:var(--vy-text-strong)]">Escalate when:</span>{" "}
                          {script.escalateWhen}
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-4 justify-between"
                          onClick={() => handleNavigate(script.fullGuideAnchor.replace("#", ""))}
                        >
                          Open linked guidance
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
                  <table className="w-full text-sm">
                    <thead className="bg-[color:var(--vy-muted)]">
                      <tr>
                        <th className="p-4 text-left font-medium">Instead of</th>
                        <th className="p-4 text-left font-medium">Use</th>
                        <th className="p-4 text-left font-medium">Avoid</th>
                        <th className="p-4 text-left font-medium">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sections.voiceTone.terminology.map((term) => (
                        <tr key={term.term} className="border-t border-[color:var(--vy-border)]">
                          <td className="p-4 font-medium">{term.term}</td>
                          <td className="p-4 text-[color:var(--vy-success)]">{term.approved}</td>
                          <td className="p-4 text-[color:var(--vy-danger)]">{term.avoid.join(", ")}</td>
                          <td className="p-4 text-[color:var(--vy-muted-fg)]">{term.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-2">
                  {sections.voiceTone.bannedPhrases.map((item) => (
                    <div
                      key={item.phrase}
                      className="rounded-lg border border-[color:var(--vy-danger)] bg-[color:var(--vy-muted)] p-5"
                    >
                      <p className="font-medium text-[color:var(--vy-danger)]">
                        &ldquo;{item.phrase}&rdquo;
                      </p>
                      <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{item.reason}</p>
                      <p className="mt-3 text-sm">
                        <span className="font-medium text-[color:var(--vy-success)]">Use:</span>{" "}
                        {item.alternative}
                      </p>
                    </div>
                  ))}
                </div>

                <RulesBlock rules={sections.voiceTone.rules} />
                <DoDontBlock examples={sections.voiceTone.doDont} />
                <TemplatesBlock templates={sections.voiceTone.templates} />
              </div>
            </section>

            <section id="10-claims-discipline" className="scroll-mt-8">
              <SectionHeader {...sections.claimsDiscipline.header} />
              <SummaryStrip {...sections.claimsDiscipline.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.claimsDiscipline.intro}</p>

                <div className="mt-10 rounded-lg bg-[color:var(--vy-muted)] p-6">
                  <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">Quick claim ladder</h4>
                  <ul className="mt-4 space-y-3 text-sm">
                    {sections.claimsDiscipline.decisionLadder.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {sections.claimsDiscipline.claimRules.map((rule) => (
                    <div key={rule.claimType} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <h5 className="text-lg font-semibold capitalize text-[color:var(--vy-text-strong)]">
                        {rule.claimType}
                      </h5>
                      <div className="mt-4 space-y-3 text-sm">
                        <p>
                          <span className="font-medium">Allowed:</span> {rule.allowedPattern}
                        </p>
                        <p>
                          <span className="font-medium">Evidence:</span> {rule.requiredEvidence}
                        </p>
                        <p>
                          <span className="font-medium">Avoid:</span> {rule.prohibitedPattern}
                        </p>
                        <p className="text-[color:var(--vy-muted-fg)]">
                          Review trigger: {rule.reviewTrigger}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {sections.claimsDiscipline.evidenceTiers.map((tier) => (
                    <div key={tier.tier} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <div className="flex items-center justify-between gap-4">
                        <h5 className="font-semibold text-[color:var(--vy-text-strong)]">{tier.tier}</h5>
                        {tier.expirationDays ? (
                          <span className="rounded bg-[color:var(--vy-muted)] px-2 py-0.5 text-xs">
                            {tier.expirationDays} days
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{tier.description}</p>
                      <div className="mt-4 grid gap-4 text-sm">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                            Valid
                          </p>
                          <ul className="space-y-1">
                            {tier.validEvidence.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                            Invalid
                          </p>
                          <ul className="space-y-1 text-[color:var(--vy-muted-fg)]">
                            {tier.invalidEvidence.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <p className="mt-4 text-xs text-[color:var(--vy-muted-fg)]">
                        Refresh: {tier.refreshProcess}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-2">
                  {sections.claimsDiscipline.fieldExamples.map((example) => (
                    <div key={example.context} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                      <p className="font-medium text-[color:var(--vy-text-strong)]">{example.context}</p>
                      <p className="mt-3 text-sm text-[color:var(--vy-success)]">Safe: {example.safe}</p>
                      <p className="mt-3 text-sm text-[color:var(--vy-danger)]">Unsafe: {example.unsafe}</p>
                    </div>
                  ))}
                </div>

                <RulesBlock rules={sections.claimsDiscipline.legalSafePatterns} title="Safe patterns" />
                <RulesBlock rules={sections.claimsDiscipline.rules} />
                <DoDontBlock examples={sections.claimsDiscipline.doDont} />
                <TemplatesBlock templates={sections.claimsDiscipline.templates} />
              </div>
            </section>

            <section id="11-writing-mechanics" className="scroll-mt-8">
              <SectionHeader {...sections.writingMechanics.header} />
              <SummaryStrip {...sections.writingMechanics.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.writingMechanics.intro}</p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {sections.writingMechanics.mechanics.map((item) => (
                    <div key={item.rule} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                      <p className="font-medium text-[color:var(--vy-text-strong)]">{item.rule}</p>
                      <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{item.rationale}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.examples.map((example) => (
                          <span key={example} className="rounded bg-[color:var(--vy-muted)] px-3 py-1 text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">
                    Channel guides
                  </h4>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {sections.writingMechanics.channelGuides.map((guide) => (
                      <div key={guide.title} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                        <div className="flex items-center justify-between gap-4">
                          <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                            {guide.title}
                          </h5>
                          <span className="rounded-full bg-[color:var(--vy-muted)] px-2.5 py-1 text-xs font-medium text-[color:var(--vy-muted-fg)]">
                            {guide.channel}
                          </span>
                        </div>
                        <pre className="mt-4 whitespace-pre-wrap rounded bg-[color:var(--vy-muted)] p-4 text-sm leading-relaxed">
                          {guide.approvedScript}
                        </pre>
                        <ul className="mt-4 space-y-2 text-sm">
                          {guide.topRules.map((item) => (
                            <li key={item} className="flex gap-2">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-sm text-[color:var(--vy-muted-fg)]">
                          <span className="font-medium text-[color:var(--vy-text-strong)]">Escalate when:</span>{" "}
                          {guide.escalateWhen}
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-4 justify-between"
                          onClick={() => handleNavigate(guide.fullGuideAnchor.replace("#", ""))}
                        >
                          Open linked guidance
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.writingMechanics.rules} />
                <DoDontBlock examples={sections.writingMechanics.doDont} />
                <TemplatesBlock templates={sections.writingMechanics.templates} />
              </div>
            </section>
          </ChapterWrapper>

          <ChapterWrapper {...CHAPTERS.application}>
            <section id="12-documents" className="scroll-mt-8">
              <SectionHeader {...sections.documents.header} />
              <SummaryStrip {...sections.documents.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.documents.intro}</p>
                <RulesBlock rules={sections.documents.rules} />
                <DoDontBlock examples={sections.documents.doDont} />
                <TemplatesBlock templates={sections.documents.templates} />
              </div>
            </section>

            <section id="13-presentations" className="scroll-mt-8">
              <SectionHeader {...sections.presentations.header} />
              <SummaryStrip {...sections.presentations.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.presentations.intro}</p>
                <RulesBlock rules={sections.presentations.rules} />
                <DoDontBlock examples={sections.presentations.doDont} />
                <TemplatesBlock templates={sections.presentations.templates} />
              </div>
            </section>

            <section id="14-email" className="scroll-mt-8">
              <SectionHeader {...sections.email.header} />
              <SummaryStrip {...sections.email.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.email.intro}</p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {sections.email.channelChoice.map((choice) => (
                    <div key={choice.situation} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                      <p className="font-medium text-[color:var(--vy-text-strong)]">{choice.situation}</p>
                      <p className="mt-3 text-sm text-[color:var(--vy-success)]">Use: {choice.use}</p>
                      <p className="mt-2 text-sm text-[color:var(--vy-danger)]">Avoid: {choice.avoid}</p>
                    </div>
                  ))}
                </div>

                <RulesBlock rules={sections.email.legalSafePatterns} title="Safe email patterns" />
                <RulesBlock rules={sections.email.rules} />
                <DoDontBlock examples={sections.email.doDont} />
                <TemplatesBlock templates={sections.email.templates} />
              </div>
            </section>

            <section id="15-meetings" className="scroll-mt-8">
              <SectionHeader {...sections.meetings.header} />
              <SummaryStrip {...sections.meetings.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.meetings.intro}</p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {sections.meetings.standards.map((standard) => (
                    <div key={standard.meetingType} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <h5 className="font-semibold text-[color:var(--vy-text-strong)]">{standard.meetingType}</h5>
                      <p className="mt-1 text-xs text-[color:var(--vy-muted-fg)]">
                        {standard.timeboxMinutes} min • {standard.ownerRole}
                      </p>
                      <div className="mt-4 grid gap-4 text-sm">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                            Inputs
                          </p>
                          <ul className="space-y-1">
                            {standard.requiredInputs.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-info)]">
                            Outputs
                          </p>
                          <ul className="space-y-1 text-[color:var(--vy-muted-fg)]">
                            {standard.requiredOutputs.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <RulesBlock rules={sections.meetings.siteVisitRules} title="Site visit rules" />
                <RulesBlock rules={sections.meetings.callRules} title="Call rules" />
                <RulesBlock rules={sections.meetings.rules} />
                <DoDontBlock examples={sections.meetings.doDont} />
                <TemplatesBlock templates={sections.meetings.templates} />
              </div>
            </section>

            <section id="16-pre-send-checklist" className="scroll-mt-8">
              <SectionHeader {...sections.preSendChecklist.header} />
              <SummaryStrip {...sections.preSendChecklist.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.preSendChecklist.intro}</p>

                <div className="mt-10 rounded-xl border-2 border-[color:var(--vy-border)] p-8">
                  <p className="mb-6 text-sm text-[color:var(--vy-muted-fg)]">
                    Complete all checks before sending, saying, or sharing anything externally.
                  </p>
                  <div className="space-y-8">
                    {sections.preSendChecklist.checklist.map((group) => (
                      <div key={group.title}>
                        <h5 className="mb-4 font-semibold text-[color:var(--vy-text-strong)]">
                          {group.title}
                        </h5>
                        <ul className="space-y-3">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[color:var(--vy-border)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="ml-8 mt-3 text-sm text-[color:var(--vy-success)]">
                          Pass: {group.passCondition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.preSendChecklist.rules} />
                <DoDontBlock examples={sections.preSendChecklist.doDont} />
                <TemplatesBlock templates={sections.preSendChecklist.templates} />
              </div>
            </section>
          </ChapterWrapper>

          <ChapterWrapper {...CHAPTERS.appendix}>
            <section id="governance-approvals" className="scroll-mt-8">
              <SectionHeader {...sections.governanceApprovals.header} />
              <SummaryStrip {...sections.governanceApprovals.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.governanceApprovals.intro}</p>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {sections.governanceApprovals.triggers.map((trigger) => (
                    <div key={trigger.title} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                        {trigger.title}
                      </h5>
                      <div className="mt-4 grid gap-4 text-sm">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                            Required for
                          </p>
                          <ul className="space-y-1">
                            {trigger.requiredFor.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                            Not required for
                          </p>
                          <ul className="space-y-1 text-[color:var(--vy-muted-fg)]">
                            {trigger.notRequiredFor.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <p className="mt-4 text-sm">
                        <span className="font-medium text-[color:var(--vy-text-strong)]">Approver:</span>{" "}
                        {trigger.approverRole}
                      </p>
                      <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                        SLA: {trigger.responseSla}
                      </p>
                    </div>
                  ))}
                </div>
                <RulesBlock rules={sections.governanceApprovals.rules} />
                <DoDontBlock examples={sections.governanceApprovals.doDont} />
                <TemplatesBlock templates={sections.governanceApprovals.templates} />
              </div>
            </section>

            <section id="templates-downloadables" className="scroll-mt-8">
              <SectionHeader {...sections.templatesDownloadables.header} />
              <SummaryStrip {...sections.templatesDownloadables.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.templatesDownloadables.intro}</p>
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {sections.templatesDownloadables.assets.map((asset) => (
                    <div key={asset.name} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <h5 className="font-semibold text-[color:var(--vy-text-strong)]">{asset.name}</h5>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                            asset.governanceLevel === "self-serve"
                              ? "bg-[color:var(--vy-muted)] text-[color:var(--vy-success)]"
                              : "bg-[color:var(--vy-muted)] text-[color:var(--vy-warning)]"
                          }`}
                        >
                          {asset.governanceLevel}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-[color:var(--vy-fg)]">{asset.copy}</p>
                      <p className="mt-3 text-xs text-[color:var(--vy-muted-fg)]">
                        Audience: {asset.audience}
                      </p>
                      <p className="mt-1 text-xs text-[color:var(--vy-muted-fg)]">
                        When to use: {asset.whenToUse}
                      </p>
                    </div>
                  ))}
                </div>
                <RulesBlock rules={sections.templatesDownloadables.rules} />
                <DoDontBlock examples={sections.templatesDownloadables.doDont} />
                <TemplatesBlock templates={sections.templatesDownloadables.templates} />
              </div>
            </section>

            <section id="faq-edge-cases" className="scroll-mt-8">
              <SectionHeader {...sections.faqEdgeCases.header} />
              <SummaryStrip {...sections.faqEdgeCases.summaryStrip} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.faqEdgeCases.intro}</p>
                <div className="mt-10 space-y-4">
                  {sections.faqEdgeCases.faq.map((item) => (
                    <details key={item.question} className="rounded-lg border border-[color:var(--vy-border)]">
                      <summary className="cursor-pointer p-5 font-medium text-[color:var(--vy-text-strong)]">
                        {item.question}
                      </summary>
                      <div className="border-t border-[color:var(--vy-border)] p-5">
                        <p className="text-[color:var(--vy-muted-fg)]">{item.answer}</p>
                        {item.tags?.length ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-[color:var(--vy-muted)] px-2.5 py-1 text-xs text-[color:var(--vy-muted-fg)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </details>
                  ))}
                </div>
                <RulesBlock rules={sections.faqEdgeCases.rules} />
                <DoDontBlock examples={sections.faqEdgeCases.doDont} />
                <TemplatesBlock templates={sections.faqEdgeCases.templates} />
              </div>
            </section>

            <section id="changelog" className="scroll-mt-8">
              <SectionHeader {...sections.changelog.header} />

              <div className="mt-10">
                <p className="max-w-3xl text-lg leading-relaxed">{sections.changelog.intro}</p>
                <div className="mt-10 space-y-8">
                  {sections.changelog.entries.map((entry) => (
                    <div
                      key={entry.version}
                      className="overflow-hidden rounded-lg border border-[color:var(--vy-border)]"
                    >
                      <div className="flex items-center justify-between bg-[color:var(--vy-muted)] p-5">
                        <div>
                          <span className="font-mono font-semibold text-[color:var(--vy-text-strong)]">
                            {entry.version}
                          </span>
                          <span className="ml-3 text-sm text-[color:var(--vy-muted-fg)]">
                            {entry.date}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="mb-4 text-sm text-[color:var(--vy-muted-fg)]">{entry.summary}</p>
                        <ul className="space-y-2">
                          {entry.changes.map((change, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm">
                              <span className="shrink-0 rounded border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] px-2 py-0.5 text-xs font-medium">
                                {change.type}
                              </span>
                              <span>{change.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="footer-versioning" className="scroll-mt-8 rounded-xl bg-[color:var(--vy-muted)] p-8">
              <div className="grid gap-6 text-sm md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Version
                  </p>
                  <p className="mt-2 font-mono">{sections.footerVersioning.footer.version}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Effective
                  </p>
                  <p className="mt-2">{sections.footerVersioning.footer.effectiveDate}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Owner
                  </p>
                  <p className="mt-2">{sections.footerVersioning.footer.owner}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Contact
                  </p>
                  <p className="mt-2">{sections.footerVersioning.footer.contact}</p>
                </div>
              </div>
            </section>
          </ChapterWrapper>
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
