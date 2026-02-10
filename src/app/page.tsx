"use client";

import Image from "next/image";
import { ArrowUp, Menu, Check, X, Copy, AlertTriangle, ArrowRight, FileText, Minus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { BRAND_CONTENT } from "../content/brand";
import { useActiveSection } from "../hooks/use-active-section";
import { anchorsFromNavigation, smoothScrollToSection } from "../lib/brand-utils";

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

// Content
const sections = BRAND_CONTENT.sections;
const fundamentals = BRAND_CONTENT.fundamentals;

// Chapter definitions
const CHAPTERS = {
  foundation: {
    id: "chapter-foundation",
    number: "I",
    title: "Foundation",
    description: "Identity, brand architecture, and behavioral pillars that define Vayasya.",
    accent: "foundation",
  },
  visual: {
    id: "chapter-visual",
    number: "II",
    title: "Visual System",
    description: "Logo usage, color palette, typography, and imagery guidelines.",
    accent: "visual",
  },
  communication: {
    id: "chapter-communication",
    number: "III",
    title: "Communication",
    description: "Voice, tone, claims discipline, and writing mechanics.",
    accent: "communication",
  },
  application: {
    id: "chapter-application",
    number: "IV",
    title: "Application",
    description: "Documents, presentations, email, meetings, and quality gates.",
    accent: "application",
  },
  appendix: {
    id: "chapter-appendix",
    number: "V",
    title: "Appendix",
    description: "Governance, templates, FAQ, changelog, and version information.",
    accent: "appendix",
  },
} as const;

// Helper components for inline rendering
function RulesBlock({ rules, title = "Rules" }: { rules: readonly string[]; title?: string }) {
  if (!rules.length) return null;
  return (
    <div className="mt-12">
      <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-4 md:grid-cols-2">
        {rules.map((rule, i) => (
          <div key={i} className="flex gap-3 rounded-lg bg-[color:var(--vy-muted)] p-4">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-success)]" />
            <span className="text-[color:var(--vy-fg)]">{rule}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DoDontBlock({ examples, title = "Do / Don't" }: { examples: readonly { topic: string; do: string; dont: string; why: string }[]; title?: string }) {
  if (!examples.length) return null;
  return (
    <div className="mt-12">
      <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6 lg:grid-cols-2">
        {examples.map((ex, i) => (
          <div key={i} className="rounded-lg border border-[color:var(--vy-border)] p-6">
            <p className="mb-4 font-medium text-[color:var(--vy-text-strong)]">{ex.topic}</p>
            <div className="space-y-3">
              <div className="flex gap-3 rounded bg-green-50 p-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-success)]" />
                <p className="text-[color:var(--vy-fg)]">{ex.do}</p>
              </div>
              <div className="flex gap-3 rounded bg-red-50 p-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-danger)]" />
                <p className="text-[color:var(--vy-muted-fg)]">{ex.dont}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-[color:var(--vy-muted-fg)]">{ex.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TemplatesBlock({ templates, title = "Templates" }: { templates: readonly { name: string; purpose: string; whenToUse: string; template: string; guardrails: readonly string[] }[]; title?: string }) {
  if (!templates.length) return null;
  return (
    <div className="mt-12">
      <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6">
        {templates.map((t, i) => (
          <div key={i} className="rounded-lg border border-[color:var(--vy-border)] overflow-hidden">
            <div className="bg-[color:var(--vy-muted)] p-5">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[color:var(--vy-muted-fg)]" />
                <h5 className="font-semibold text-[color:var(--vy-text-strong)]">{t.name}</h5>
              </div>
              <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{t.purpose}</p>
              <p className="mt-1 text-xs text-[color:var(--vy-muted-fg)]">When to use: {t.whenToUse}</p>
            </div>
            <div className="p-5 space-y-4">
              <pre className="whitespace-pre-wrap rounded bg-[color:var(--vy-muted)] p-4 font-mono text-sm leading-relaxed">{t.template}</pre>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)] mb-2">Guardrails</p>
                <ul className="space-y-1 text-sm">
                  {t.guardrails.map((g, j) => (
                    <li key={j} className="flex gap-2">
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--vy-warning)]" />
                      <span className="text-[color:var(--vy-muted-fg)]">{g}</span>
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

function SectionHeader({ id, number, title, summary }: { id: string; number: string; title: string; summary: string }) {
  return (
    <header id={id} className="scroll-mt-8 border-b border-[color:var(--vy-border)] pb-8">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-[color:var(--vy-muted-fg)]">{number}</span>
        <h3 className="text-2xl font-semibold text-[color:var(--vy-text-strong)]">{title}</h3>
      </div>
      <p className="mt-3 max-w-2xl text-lg text-[color:var(--vy-muted-fg)]">{summary}</p>
    </header>
  );
}

// Color Swatch Component
function ColorSwatch({ token, hex, usage }: { token: string; hex: string; usage: string }) {
  const [copied, setCopied] = useState(false);
  const copyHex = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    toast.success(`Copied ${hex}`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={copyHex} className="group text-left">
      <div
        className="mb-2 flex h-20 items-center justify-center rounded-lg border border-[color:var(--vy-border)] transition-transform group-hover:scale-105"
        style={{ backgroundColor: hex }}
      >
        {copied ? (
          <Check className="h-5 w-5 text-white drop-shadow-md" />
        ) : (
          <Copy className="h-5 w-5 text-white opacity-0 drop-shadow-md transition-opacity group-hover:opacity-100" />
        )}
      </div>
      <p className="font-mono text-xs text-[color:var(--vy-muted-fg)]">{token}</p>
      <p className="font-mono text-sm font-medium">{hex}</p>
      <p className="mt-1 text-xs text-[color:var(--vy-muted-fg)] line-clamp-2">{usage}</p>
    </button>
  );
}

export default function Page() {
  const { activeSectionId, progress } = useActiveSection(anchorsFromNavigation);

  const handleNavigate = (anchorId: string) => {
    smoothScrollToSection(anchorId);
  };

  const manifesto = sections.identity.manifesto;
  const pillars = sections.operatingPillars.pillars;
  const personas = sections.voiceTone.personas;
  const terminology = sections.voiceTone.terminology;
  const bannedPhrases = sections.voiceTone.bannedPhrases;
  const claimRules = sections.claimsDiscipline.claimRules;
  const evidenceTiers = sections.claimsDiscipline.evidenceTiers;
  const checklist = sections.preSendChecklist.checklist;
  const standards = sections.meetings.standards;
  const approvals = sections.governanceApprovals.approvals;
  const mechanics = sections.writingMechanics.mechanics;

  return (
    <div className="min-h-screen bg-[color:var(--vy-bg)] text-[color:var(--vy-fg)]">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-[color:var(--vy-bg)] focus:px-3 focus:py-2 focus:outline focus:outline-2 focus:outline-[color:var(--vy-info)]"
      >
        Skip to content
      </a>

      {/* Progress Bar */}
      <div className="print:hidden fixed inset-x-0 top-0 z-[60] h-1 bg-[color:var(--vy-muted)]">
        <div
          className="h-full bg-[color:var(--vy-seva)] transition-[width]"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      {/* Mobile Header */}
      <header className="print:hidden sticky top-1 z-50 border-b border-[color:var(--vy-border)] bg-[color:var(--vy-bg)]/95 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <p className="text-sm font-semibold">Vayasya Brand Handbook</p>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Contents</SheetTitle>
              </SheetHeader>
              <ScrollArea className="mt-4 h-[calc(100vh-100px)]">
                <ChapterNav activeSection={activeSectionId} onNavigate={handleNavigate} />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-6 lg:grid-cols-[260px_1fr] lg:px-6">
        {/* Sidebar */}
        <aside className="print:hidden hidden lg:block">
          <ChapterNavSidebar activeSection={activeSectionId} onNavigate={handleNavigate} />
        </aside>

        {/* Main Content */}
        <main id="main-content" className="min-w-0">
          {/* Hero */}
          <header className="mb-20 pb-12 border-b border-[color:var(--vy-border)]">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--vy-muted-fg)]">
              {fundamentals.brandName.parent}
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[color:var(--vy-text-strong)] md:text-5xl lg:text-6xl">
              Brand Handbook
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-[color:var(--vy-muted-fg)] leading-relaxed">
              The single source of truth for Vayasya brand communication. Identity, visual system, voice, operational standards, and governance across all verticals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-[color:var(--vy-gold-ui)] px-4 py-1.5 text-sm font-medium text-white">
                {sections.footerVersioning.footer.version}
              </span>
              {fundamentals.verticals.map((v) => (
                <span key={v} className="rounded-full border border-[color:var(--vy-border)] px-4 py-1.5 text-sm">
                  {v}
                </span>
              ))}
            </div>
          </header>

          {/* ==================== CHAPTER I: FOUNDATION ==================== */}
          <ChapterWrapper {...CHAPTERS.foundation}>
            {/* 01 Overview */}
            <section>
              <SectionHeader {...sections.overview.header} id="01-overview" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.overview.intro}</p>

                <div className="mt-10 rounded-lg bg-[color:var(--vy-muted)] p-6">
                  <p className="text-sm font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)] mb-2">Who this is for</p>
                  <p className="text-[color:var(--vy-fg)]">{sections.overview.audience}</p>
                </div>

                {/* How to Use */}
                <div className="mt-10">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">How to Use This Handbook</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {sections.overview.howToUse.map((item, i) => (
                      <div key={i} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                        <div className="flex items-start gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--vy-gold-ui)] text-xs font-semibold text-white">
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-semibold text-[color:var(--vy-text-strong)]">{item.step}</p>
                            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-10">
                  <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Quick Reference</h4>
                  <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
                    {sections.overview.quickLinks.map((link) => (
                      <button
                        key={link.anchor}
                        onClick={() => handleNavigate(link.anchor.replace("#", ""))}
                        className="flex items-center gap-2 rounded-lg border border-[color:var(--vy-border)] p-3 text-left text-sm hover:bg-[color:var(--vy-muted)] transition-colors"
                      >
                        <ArrowRight className="h-3.5 w-3.5 text-[color:var(--vy-muted-fg)]" />
                        <span>{link.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 02 Identity */}
            <section>
              <SectionHeader {...sections.identity.header} id="02-identity" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.identity.intro}</p>

                {/* What We Are */}
                <div className="mt-10 rounded-lg border-2 border-[color:var(--vy-gold-ui)] p-6">
                  <p className="text-xl font-medium text-[color:var(--vy-text-strong)]">{sections.identity.whatWeAre.statement}</p>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {sections.identity.whatWeAre.signals.map((s, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-[color:var(--vy-gold-ui)]" />
                        <span className="text-sm">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What We Are Not */}
                <div className="mt-8 rounded-lg border-2 border-[color:var(--vy-danger)] p-6">
                  <h4 className="mb-4 flex items-center gap-2 font-semibold text-[color:var(--vy-danger)]">
                    <X className="h-5 w-5" /> What Vayasya is NOT
                  </h4>
                  <ul className="space-y-3">
                    {sections.identity.whatWeAreNot.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[color:var(--vy-fg)]">
                        <Minus className="mt-1 h-4 w-4 shrink-0 text-[color:var(--vy-danger)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Anti-Brand */}
                <div className="mt-8 rounded-lg bg-red-50 border border-[color:var(--vy-danger)] p-6">
                  <h4 className="mb-4 font-semibold text-[color:var(--vy-danger)]">Anti-Brand: Always Avoid</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    {sections.identity.antiBrand.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-danger)]" />
                        <span className="text-sm text-[color:var(--vy-fg)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mission Band */}
                <div className="my-12 rounded-xl bg-[color:var(--vy-muted)] p-10 text-center">
                  <p className="text-2xl font-medium text-[color:var(--vy-text-strong)] md:text-3xl leading-relaxed">
                    &ldquo;{manifesto.mission}&rdquo;
                  </p>
                </div>

                {/* Beliefs */}
                <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">What We Believe</h4>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {manifesto.beliefs.map((b, i) => (
                    <div key={i} className="rounded-lg border border-[color:var(--vy-border)] p-4">
                      <p className="font-semibold text-[color:var(--vy-text-strong)]">{b.belief}</p>
                      <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{b.explanation}</p>
                    </div>
                  ))}
                </div>

                {/* Stand For / Reject */}
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                  <div className="rounded-lg border-2 border-[color:var(--vy-success)] p-6">
                    <h4 className="mb-4 flex items-center gap-2 font-semibold text-[color:var(--vy-success)]">
                      <Check className="h-5 w-5" /> We Stand For
                    </h4>
                    <ul className="space-y-3">
                      {manifesto.standFor.map((s, i) => (
                        <li key={i} className="text-[color:var(--vy-fg)]">&bull; {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border-2 border-[color:var(--vy-danger)] p-6">
                    <h4 className="mb-4 flex items-center gap-2 font-semibold text-[color:var(--vy-danger)]">
                      <X className="h-5 w-5" /> We Reject
                    </h4>
                    <ul className="space-y-3">
                      {manifesto.reject.map((r, i) => (
                        <li key={i} className="text-[color:var(--vy-muted-fg)]">&bull; {r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Positioning */}
                <div className="mt-12">
                  <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Positioning</h4>
                  <p className="max-w-prose text-[color:var(--vy-muted-fg)]">{sections.identity.positioning.intro}</p>
                  <RulesBlock rules={sections.identity.positioning.rules} title="Positioning Rules" />
                </div>

                {/* Positioning Terminology */}
                {sections.identity.positioning.terminology.length > 0 && (
                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Positioning Terminology</h4>
                    <div className="overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
                      <table className="w-full text-sm">
                        <thead className="bg-[color:var(--vy-muted)]">
                          <tr>
                            <th className="p-4 text-left font-medium">Instead of</th>
                            <th className="p-4 text-left font-medium text-[color:var(--vy-success)]">Use</th>
                            <th className="p-4 text-left font-medium text-[color:var(--vy-danger)]">Avoid</th>
                            <th className="p-4 text-left font-medium">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sections.identity.positioning.terminology.map((t) => (
                            <tr key={t.term} className="border-t border-[color:var(--vy-border)]">
                              <td className="p-4 font-medium">{t.term}</td>
                              <td className="p-4 text-[color:var(--vy-success)]">{t.approved}</td>
                              <td className="p-4 text-[color:var(--vy-danger)]">{t.avoid.join(", ")}</td>
                              <td className="p-4 text-[color:var(--vy-muted-fg)]">{t.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <RulesBlock rules={sections.identity.rules} />
                <DoDontBlock examples={sections.identity.doDont} />
                <TemplatesBlock templates={sections.identity.templates} />
              </div>
            </section>

            {/* 03 Brand Architecture */}
            <section>
              <SectionHeader {...sections.brandArchitecture.header} id="03-brand-architecture" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.brandArchitecture.intro}</p>

                {/* Master Brand */}
                <div className="mt-10 rounded-lg border-2 border-[color:var(--vy-gold-ui)] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded" style={{ backgroundColor: sections.brandArchitecture.masterBrand.accentHex }} />
                    <h5 className="text-xl font-semibold text-[color:var(--vy-text-strong)]">{sections.brandArchitecture.masterBrand.name}</h5>
                    <span className="font-mono text-xs text-[color:var(--vy-muted-fg)]">{sections.brandArchitecture.masterBrand.accentToken}</span>
                  </div>
                  <p className="text-[color:var(--vy-muted-fg)]">{sections.brandArchitecture.masterBrand.role}</p>
                </div>

                {/* Verticals */}
                <div className="mt-8">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">Verticals</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {sections.brandArchitecture.verticals.map((v) => (
                      <div key={v.name} className="rounded-lg border border-[color:var(--vy-border)] overflow-hidden">
                        <div className="h-2" style={{ backgroundColor: v.accentHex }} />
                        <div className="p-5">
                          <div className="flex items-center justify-between">
                            <h5 className="font-semibold text-[color:var(--vy-text-strong)]">{v.name}</h5>
                            <span className="font-mono text-xs text-[color:var(--vy-muted-fg)]">{v.accentHex}</span>
                          </div>
                          <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{v.domain}</p>
                          <p className="mt-1 font-mono text-xs text-[color:var(--vy-muted-fg)]">{v.accentToken}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Naming Rules */}
                <RulesBlock rules={sections.brandArchitecture.namingRules} title="Naming Rules" />

                {/* Lockup Rules */}
                <RulesBlock rules={sections.brandArchitecture.lockupRules} title="Lockup Rules" />

                {/* Usage Guidance */}
                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">When to Use Which Brand</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {sections.brandArchitecture.usageGuidance.map((g, i) => (
                      <div key={i} className="rounded-lg bg-[color:var(--vy-muted)] p-5">
                        <p className="font-medium text-[color:var(--vy-text-strong)]">{g.context}</p>
                        <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{g.rule}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.brandArchitecture.rules} />
                <DoDontBlock examples={sections.brandArchitecture.doDont} />
              </div>
            </section>

            {/* 04 Operating Pillars */}
            <section>
              <SectionHeader {...sections.operatingPillars.header} id="04-operating-pillars" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.operatingPillars.intro}</p>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {pillars.map((p) => (
                    <div key={p.name} className="rounded-lg border border-[color:var(--vy-border)] overflow-hidden">
                      <div className="bg-[color:var(--vy-muted)] p-5">
                        <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">{p.name}</h5>
                        <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{p.definition}</p>
                      </div>
                      <div className="p-5 space-y-5">
                        <div>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                            <Check className="inline h-3 w-3 mr-1" />Behaviors
                          </p>
                          <ul className="space-y-2 text-sm">
                            {p.behaviors.map((b, i) => <li key={i}>&bull; {b}</li>)}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                            <AlertTriangle className="inline h-3 w-3 mr-1" />Red Flags
                          </p>
                          <ul className="space-y-2 text-sm text-[color:var(--vy-muted-fg)]">
                            {p.redFlags.map((r, i) => <li key={i}>&bull; {r}</li>)}
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

          {/* ==================== CHAPTER II: VISUAL SYSTEM ==================== */}
          <ChapterWrapper {...CHAPTERS.visual}>
            {/* 05 Logo Usage */}
            <section>
              <SectionHeader {...sections.logoUsage.header} id="05-logo-usage" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.logoUsage.intro}</p>

                {/* Flat Gold Callout */}
                <div className="mt-6 rounded-lg border-2 border-[color:var(--vy-gold-ui)] bg-[color:var(--vy-muted)] p-5">
                  <p className="font-medium text-[color:var(--vy-text-strong)]">Gold is flat. No gradients, no shimmer, no effects.</p>
                  <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">The logo uses flat gold (#C9A24A) as supplied. Do not apply CSS filters, gradient overlays, or decorative effects.</p>
                </div>

                {/* Logo Previews */}
                <div className="mt-10">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">Logo Variants</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <div className="flex h-32 items-center justify-center rounded bg-white">
                        <Image
                          src="/brand/logos/master-logo-light.svg"
                          alt="Vayasya master logo on light background"
                          width={180}
                          height={60}
                        />
                      </div>
                      <p className="mt-4 font-medium">Light Background</p>
                      <p className="text-sm text-[color:var(--vy-muted-fg)]">Min width: 120px &bull; Clear space: 1x V height</p>
                    </div>
                    <div className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <div className="flex h-32 items-center justify-center rounded bg-[#111111]">
                        <Image
                          src="/brand/logos/master-logo-dark.svg"
                          alt="Vayasya master logo on dark background"
                          width={180}
                          height={60}
                        />
                      </div>
                      <p className="mt-4 font-medium">Dark Background</p>
                      <p className="text-sm text-[color:var(--vy-muted-fg)]">Min width: 120px &bull; Clear space: 1x V height</p>
                    </div>
                  </div>
                </div>

                {/* Vertical Logos */}
                <div className="mt-10">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">Vertical Logos</h4>
                  <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                    {Object.entries(BRAND_CONTENT.placeholders.verticalLogos).map(([key, path]) => (
                      <div key={key} className="rounded-lg border border-[color:var(--vy-border)] p-4">
                        <div className="flex h-16 items-center justify-center">
                          <Image src={path} alt={`${key} logo`} width={120} height={40} />
                        </div>
                        <p className="mt-2 text-center text-sm capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.logoUsage.rules} />
                <DoDontBlock examples={sections.logoUsage.doDont} />
                <TemplatesBlock templates={sections.logoUsage.templates} />
              </div>
            </section>

            {/* 06 Color Palette */}
            <section>
              <SectionHeader {...sections.colorPalette.header} id="06-color-palette" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.colorPalette.intro}</p>

                {/* Color Swatches by Role */}
                {["Base", "Support", "Identity", "Vertical Accent", "Semantic"].map((role) => {
                  const colors = fundamentals.colorTokens.filter((c) => c.role === role);
                  if (!colors.length) return null;
                  return (
                    <div key={role} className="mt-10">
                      <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">{role}</h4>
                      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {colors.map((c) => (
                          <ColorSwatch key={c.token} token={c.token} hex={c.hex} usage={c.usage} />
                        ))}
                      </div>
                    </div>
                  );
                })}

                <RulesBlock rules={sections.colorPalette.rules} />
                <DoDontBlock examples={sections.colorPalette.doDont} />
                <TemplatesBlock templates={sections.colorPalette.templates} />
              </div>
            </section>

            {/* 07 Typography */}
            <section>
              <SectionHeader {...sections.typography.header} id="07-typography" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.typography.intro}</p>

                {/* Type Specimen */}
                <div className="mt-10 rounded-lg border border-[color:var(--vy-border)] p-8 space-y-8">
                  {fundamentals.typoRules.hierarchy.map((h) => (
                    <div key={h.level} className="border-b border-[color:var(--vy-border)] pb-6 last:border-0 last:pb-0">
                      <div className="flex items-baseline justify-between mb-3">
                        <span className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">{h.level}</span>
                        <span className="font-mono text-xs text-[color:var(--vy-muted-fg)]">
                          {h.fontFamily} {h.fontWeight} / {h.fontSize} / {h.lineHeight}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: h.fontFamily === "JetBrains Mono" ? "var(--font-jetbrains-mono)" : "var(--font-hind)",
                          fontWeight: h.fontWeight,
                          fontSize: h.fontSize,
                          lineHeight: h.lineHeight,
                        }}
                        className="text-[color:var(--vy-text-strong)]"
                      >
                        {h.usage}
                      </p>
                    </div>
                  ))}
                </div>

                {/* India-First Formats */}
                <div className="mt-12">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">India-First Formatting</h4>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(fundamentals.typoRules.indiaFirstFormats).map(([key, val]) => (
                      <div key={key} className="rounded-lg bg-[color:var(--vy-muted)] p-5">
                        <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="mt-2 font-mono text-sm">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.typography.rules} />
                <DoDontBlock examples={sections.typography.doDont} />
                <TemplatesBlock templates={sections.typography.templates} />
              </div>
            </section>

            {/* 08 Imagery */}
            <section>
              <SectionHeader {...sections.imagery.header} id="08-imagery" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.imagery.intro}</p>
                <RulesBlock rules={sections.imagery.rules} />
                <DoDontBlock examples={sections.imagery.doDont} />
                <TemplatesBlock templates={sections.imagery.templates} />
              </div>
            </section>
          </ChapterWrapper>

          {/* ==================== CHAPTER III: COMMUNICATION ==================== */}
          <ChapterWrapper {...CHAPTERS.communication}>
            {/* 09 Voice & Tone */}
            <section>
              <SectionHeader {...sections.voiceTone.header} id="09-voice-tone" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.voiceTone.intro}</p>

                {/* Voice Personas */}
                <div className="mt-10">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">Voice Traits</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    {personas.map((p) => (
                      <div key={p.trait} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                        <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">{p.trait}</h5>
                        <p className="mt-2 text-[color:var(--vy-muted-fg)]">{p.description}</p>
                        <div className="mt-5 space-y-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">Sounds like</p>
                            <ul className="mt-1 space-y-1 text-sm">
                              {p.soundsLike.map((s, i) => <li key={i}>&ldquo;{s}&rdquo;</li>)}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">Avoid</p>
                            <div className="mt-1 flex flex-wrap gap-2">
                              {p.avoid.map((a, i) => (
                                <span key={i} className="rounded bg-red-50 px-2 py-0.5 text-sm text-[color:var(--vy-danger)]">{a}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminology */}
                <div className="mt-12">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">Terminology Dictionary</h4>
                  <div className="overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
                    <table className="w-full text-sm">
                      <thead className="bg-[color:var(--vy-muted)]">
                        <tr>
                          <th className="p-4 text-left font-medium">Instead of</th>
                          <th className="p-4 text-left font-medium text-[color:var(--vy-success)]">Use</th>
                          <th className="p-4 text-left font-medium text-[color:var(--vy-danger)]">Avoid</th>
                          <th className="p-4 text-left font-medium">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {terminology.map((t) => (
                          <tr key={t.term} className="border-t border-[color:var(--vy-border)]">
                            <td className="p-4 font-medium">{t.term}</td>
                            <td className="p-4 text-[color:var(--vy-success)]">{t.approved}</td>
                            <td className="p-4 text-[color:var(--vy-danger)]">{t.avoid.join(", ")}</td>
                            <td className="p-4 text-[color:var(--vy-muted-fg)]">{t.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Banned Phrases */}
                <div className="mt-12">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">Banned Phrases</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {bannedPhrases.map((b) => (
                      <div key={b.phrase} className="rounded-lg border border-[color:var(--vy-danger)] bg-red-50 p-5">
                        <p className="font-medium text-[color:var(--vy-danger)]">&ldquo;{b.phrase}&rdquo;</p>
                        <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{b.reason}</p>
                        <p className="mt-3 text-sm"><span className="font-medium text-[color:var(--vy-success)]">Use:</span> {b.alternative}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.voiceTone.rules} />
                <DoDontBlock examples={sections.voiceTone.doDont} />
                <TemplatesBlock templates={sections.voiceTone.templates} />
              </div>
            </section>

            {/* 10 Claims Discipline */}
            <section>
              <SectionHeader {...sections.claimsDiscipline.header} id="10-claims-discipline" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.claimsDiscipline.intro}</p>

                {/* Claims Matrix */}
                <div className="mt-10">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">Claim Classification</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    {claimRules.map((c) => {
                      const colors: Record<string, string> = {
                        aspirational: "border-l-blue-500 bg-blue-50",
                        directional: "border-l-amber-500 bg-amber-50",
                        measured: "border-l-green-500 bg-green-50",
                        contractual: "border-l-purple-500 bg-purple-50",
                      };
                      return (
                        <div key={c.claimType} className={`rounded-lg border-l-4 p-6 ${colors[c.claimType] || ""}`}>
                          <h5 className="text-lg font-semibold capitalize">{c.claimType}</h5>
                          <div className="mt-4 space-y-3 text-sm">
                            <p><span className="font-medium text-[color:var(--vy-success)]">Pattern:</span> {c.allowedPattern}</p>
                            <p><span className="font-medium">Evidence:</span> {c.requiredEvidence}</p>
                            <p><span className="font-medium text-[color:var(--vy-danger)]">Prohibited:</span> {c.prohibitedPattern}</p>
                            <p><span className="font-medium">Review trigger:</span> {c.reviewTrigger}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Evidence Tiers */}
                <div className="mt-12">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">Evidence Requirements</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    {evidenceTiers.map((e) => (
                      <div key={e.tier} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                        <div className="flex items-center justify-between">
                          <h5 className="font-semibold">{e.tier}</h5>
                          {e.expirationDays && (
                            <span className="rounded bg-[color:var(--vy-muted)] px-2 py-0.5 text-xs">
                              Expires: {e.expirationDays}d
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{e.description}</p>
                        <div className="mt-4 grid gap-4 text-sm">
                          <div>
                            <p className="text-xs font-semibold uppercase text-[color:var(--vy-success)]">Valid</p>
                            <ul className="mt-2 space-y-1">{e.validEvidence.map((v, i) => <li key={i}>&bull; {v}</li>)}</ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase text-[color:var(--vy-danger)]">Invalid</p>
                            <ul className="mt-2 space-y-1 text-[color:var(--vy-muted-fg)]">{e.invalidEvidence.map((v, i) => <li key={i}>&bull; {v}</li>)}</ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal Safe Patterns */}
                <div className="mt-12">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">Legal-Safe Patterns</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    {sections.claimsDiscipline.legalSafePatterns.map((p, i) => (
                      <div key={i} className={`flex gap-3 rounded-lg p-4 ${p.startsWith("Avoid") ? "bg-red-50" : "bg-[color:var(--vy-muted)]"}`}>
                        {p.startsWith("Avoid") ? (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-danger)]" />
                        ) : (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                        )}
                        <span className="text-sm">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.claimsDiscipline.rules} />
                <DoDontBlock examples={sections.claimsDiscipline.doDont} />
                <TemplatesBlock templates={sections.claimsDiscipline.templates} />
              </div>
            </section>

            {/* 11 Writing Mechanics */}
            <section>
              <SectionHeader {...sections.writingMechanics.header} id="11-writing-mechanics" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.writingMechanics.intro}</p>

                <div className="mt-10 space-y-5">
                  {mechanics.map((m, i) => (
                    <div key={i} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                      <p className="font-medium text-[color:var(--vy-text-strong)]">{m.rule}</p>
                      <p className="mt-3 text-sm text-[color:var(--vy-muted-fg)]">{m.rationale}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {m.examples.map((ex, j) => (
                          <span key={j} className="rounded bg-[color:var(--vy-muted)] px-3 py-1 font-mono text-sm">{ex}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <RulesBlock rules={sections.writingMechanics.rules} />
                <DoDontBlock examples={sections.writingMechanics.doDont} />
                <TemplatesBlock templates={sections.writingMechanics.templates} />
              </div>
            </section>
          </ChapterWrapper>

          {/* ==================== CHAPTER IV: APPLICATION ==================== */}
          <ChapterWrapper {...CHAPTERS.application}>
            {/* 12 Documents */}
            <section>
              <SectionHeader {...sections.documents.header} id="12-documents" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.documents.intro}</p>
                <RulesBlock rules={sections.documents.rules} />
                <DoDontBlock examples={sections.documents.doDont} />
                <TemplatesBlock templates={sections.documents.templates} />
              </div>
            </section>

            {/* 13 Presentations */}
            <section>
              <SectionHeader {...sections.presentations.header} id="13-presentations" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.presentations.intro}</p>
                <RulesBlock rules={sections.presentations.rules} />
                <DoDontBlock examples={sections.presentations.doDont} />
                <TemplatesBlock templates={sections.presentations.templates} />
              </div>
            </section>

            {/* 14 Email */}
            <section>
              <SectionHeader {...sections.email.header} id="14-email" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.email.intro}</p>

                {/* Legal Safe Patterns */}
                <div className="mt-10">
                  <h4 className="mb-5 text-lg font-medium text-[color:var(--vy-text-strong)]">Legal-Safe Email Patterns</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    {sections.email.legalSafePatterns.map((p, i) => (
                      <div key={i} className={`flex gap-3 rounded-lg p-4 ${p.startsWith("Avoid") ? "bg-red-50" : "bg-[color:var(--vy-muted)]"}`}>
                        {p.startsWith("Avoid") ? (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-danger)]" />
                        ) : (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
                        )}
                        <span className="text-sm">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.email.rules} />
                <DoDontBlock examples={sections.email.doDont} />
                <TemplatesBlock templates={sections.email.templates} />
              </div>
            </section>

            {/* 15 Meetings */}
            <section>
              <SectionHeader {...sections.meetings.header} id="15-meetings" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.meetings.intro}</p>

                <div className="mt-10">
                  <h4 className="mb-6 text-lg font-medium text-[color:var(--vy-text-strong)]">Meeting Standards</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    {standards.map((st) => (
                      <div key={st.meetingType} className="rounded-lg border border-[color:var(--vy-border)] p-6">
                        <h5 className="font-semibold">{st.meetingType}</h5>
                        <p className="mt-1 text-xs text-[color:var(--vy-muted-fg)]">{st.timeboxMinutes} min &bull; {st.ownerRole}</p>
                        <div className="mt-4 grid gap-3 text-sm">
                          <p><span className="font-medium text-[color:var(--vy-success)]">Inputs:</span> {st.requiredInputs.join(", ")}</p>
                          <p><span className="font-medium text-[color:var(--vy-info)]">Outputs:</span> {st.requiredOutputs.join(", ")}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.meetings.rules} />
                <DoDontBlock examples={sections.meetings.doDont} />
                <TemplatesBlock templates={sections.meetings.templates} />
              </div>
            </section>

            {/* 16 Pre-Send Checklist */}
            <section>
              <SectionHeader {...sections.preSendChecklist.header} id="16-pre-send-checklist" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.preSendChecklist.intro}</p>

                <div className="mt-10 rounded-xl border-2 border-[color:var(--vy-border)] p-8 print:p-4">
                  <p className="mb-6 text-sm text-[color:var(--vy-muted-fg)]">Complete all checks before sending external communication.</p>
                  <div className="space-y-8">
                    {checklist.map((g, i) => (
                      <div key={i}>
                        <h5 className="mb-4 font-semibold">{g.title}</h5>
                        <ul className="space-y-3">
                          {g.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[color:var(--vy-border)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-3 ml-8 text-sm text-[color:var(--vy-success)]">Pass: {g.passCondition}</p>
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

          {/* ==================== CHAPTER V: APPENDIX ==================== */}
          <ChapterWrapper {...CHAPTERS.appendix}>
            {/* 17 Governance */}
            <section>
              <SectionHeader {...sections.governanceApprovals.header} id="governance-approvals" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.governanceApprovals.intro}</p>

                <div className="mt-10 overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
                  <table className="w-full text-sm">
                    <thead className="bg-[color:var(--vy-muted)]">
                      <tr>
                        <th className="p-4 text-left font-medium">Artifact</th>
                        <th className="p-4 text-left font-medium">Approver</th>
                        <th className="p-4 text-left font-medium">Criteria</th>
                        <th className="p-4 text-left font-medium">SLA</th>
                        <th className="p-4 text-left font-medium">Escalation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {approvals.map((a) => (
                        <tr key={a.artifact} className="border-t border-[color:var(--vy-border)]">
                          <td className="p-4 font-medium">{a.artifact}</td>
                          <td className="p-4">{a.approverRole}</td>
                          <td className="p-4">
                            <ul className="space-y-1">
                              {a.criteria.map((c, i) => <li key={i} className="text-[color:var(--vy-muted-fg)]">&bull; {c}</li>)}
                            </ul>
                          </td>
                          <td className="p-4">{a.slaBusinessDays}d</td>
                          <td className="p-4 text-[color:var(--vy-muted-fg)]">{a.escalation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <RulesBlock rules={sections.governanceApprovals.rules} />
                <TemplatesBlock templates={sections.governanceApprovals.templates} />
              </div>
            </section>

            {/* 18 Templates & Assets */}
            <section>
              <SectionHeader {...sections.templatesDownloadables.header} id="templates-downloadables" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.templatesDownloadables.intro}</p>

                {/* TODO Notice */}
                <div className="mt-6 rounded-lg border-2 border-dashed border-[color:var(--vy-warning)] bg-amber-50 p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vy-warning)]" />
                    <div>
                      <p className="font-medium text-[color:var(--vy-text-strong)]">TODO: Downloadable files not yet available</p>
                      <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">Template specifications are listed below. Contact the brand office for current template files until downloads are enabled.</p>
                    </div>
                  </div>
                </div>

                <RulesBlock rules={sections.templatesDownloadables.rules} />
                <DoDontBlock examples={sections.templatesDownloadables.doDont} />
                <TemplatesBlock templates={sections.templatesDownloadables.templates} />
              </div>
            </section>

            {/* 19 FAQ */}
            <section>
              <SectionHeader {...sections.faqEdgeCases.header} id="faq-edge-cases" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.faqEdgeCases.intro}</p>
                <div className="mt-10 space-y-4">
                  {sections.faqEdgeCases.faq.map((f, i) => (
                    <details key={i} className="rounded-lg border border-[color:var(--vy-border)]">
                      <summary className="cursor-pointer p-5 font-medium">{f.question}</summary>
                      <div className="border-t border-[color:var(--vy-border)] p-5 text-[color:var(--vy-muted-fg)]">{f.answer}</div>
                    </details>
                  ))}
                </div>
                <RulesBlock rules={sections.faqEdgeCases.rules} />
                <DoDontBlock examples={sections.faqEdgeCases.doDont} />
              </div>
            </section>

            {/* 20 Changelog */}
            <section>
              <SectionHeader {...sections.changelog.header} id="changelog" />
              <div className="mt-10">
                <p className="max-w-prose text-lg leading-relaxed">{sections.changelog.intro}</p>
                <div className="mt-10 space-y-8">
                  {sections.changelog.entries.map((entry) => (
                    <div key={entry.version} className="rounded-lg border border-[color:var(--vy-border)] overflow-hidden">
                      <div className="bg-[color:var(--vy-muted)] p-5 flex items-center justify-between">
                        <div>
                          <span className="font-mono font-semibold text-[color:var(--vy-text-strong)]">{entry.version}</span>
                          <span className="ml-3 text-sm text-[color:var(--vy-muted-fg)]">{entry.date}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-sm text-[color:var(--vy-muted-fg)] mb-4">{entry.summary}</p>
                        <ul className="space-y-2">
                          {entry.changes.map((change, i) => {
                            const typeColors: Record<string, string> = {
                              added: "bg-green-100 text-green-800",
                              removed: "bg-red-100 text-red-800",
                              changed: "bg-blue-100 text-blue-800",
                              fixed: "bg-amber-100 text-amber-800",
                            };
                            return (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <span className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${typeColors[change.type] || ""}`}>
                                  {change.type}
                                </span>
                                <span className="text-[color:var(--vy-fg)]">{change.description}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 21 Footer/Version */}
            <section id="footer-versioning" className="rounded-xl bg-[color:var(--vy-muted)] p-8">
              <div className="grid gap-6 text-sm md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">Version</p>
                  <p className="mt-2 font-mono">{sections.footerVersioning.footer.version}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">Effective</p>
                  <p className="mt-2">{sections.footerVersioning.footer.effectiveDate}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">Owner</p>
                  <p className="mt-2">{sections.footerVersioning.footer.owner}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">Contact</p>
                  <p className="mt-2">{sections.footerVersioning.footer.contact}</p>
                </div>
              </div>
            </section>
          </ChapterWrapper>
        </main>
      </div>

      {/* Back to Top */}
      <Button
        variant="default"
        size="icon"
        className="print:hidden fixed bottom-6 right-6 z-50 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
