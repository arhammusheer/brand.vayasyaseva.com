"use client";

import Image from "next/image";
import { ArrowUp, Menu, Check, X, Copy, AlertTriangle } from "lucide-react";
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
    description: "Core philosophy, positioning, and behavioral pillars that define Vayasya.",
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
    description: "Governance, templates, FAQ, and version information.",
    accent: "appendix",
  },
} as const;

// Helper components for inline rendering
function RulesBlock({ rules, title = "Rules" }: { rules: readonly string[]; title?: string }) {
  if (!rules.length) return null;
  return (
    <div className="mt-8">
      <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-3 md:grid-cols-2">
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
    <div className="mt-8">
      <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6 lg:grid-cols-2">
        {examples.map((ex, i) => (
          <div key={i} className="rounded-lg border border-[color:var(--vy-border)] p-5">
            <p className="mb-3 font-medium text-[color:var(--vy-text-strong)]">{ex.topic}</p>
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
            <p className="mt-3 text-sm text-[color:var(--vy-muted-fg)]">{ex.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ id, number, title, summary }: { id: string; number: string; title: string; summary: string }) {
  return (
    <header id={id} className="scroll-mt-8 border-b border-[color:var(--vy-border)] pb-6">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-[color:var(--vy-muted-fg)]">{number}</span>
        <h3 className="text-2xl font-semibold text-[color:var(--vy-text-strong)]">{title}</h3>
      </div>
      <p className="mt-2 max-w-2xl text-[color:var(--vy-muted-fg)]">{summary}</p>
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

  const manifesto = "manifesto" in sections.philosophy ? sections.philosophy.manifesto : null;
  const pillars = "pillars" in sections.operatingPillars ? sections.operatingPillars.pillars : [];
  const personas = "personas" in sections.voiceTone ? sections.voiceTone.personas : [];
  const terminology = "terminology" in sections.voiceTone ? sections.voiceTone.terminology : [];
  const bannedPhrases = "bannedPhrases" in sections.voiceTone ? sections.voiceTone.bannedPhrases : [];
  const claimRules = "claimRules" in sections.claimsDiscipline ? sections.claimsDiscipline.claimRules : [];
  const evidenceTiers = "evidenceTiers" in sections.claimsDiscipline ? sections.claimsDiscipline.evidenceTiers : [];
  const checklist = "checklist" in sections.preSendChecklist ? sections.preSendChecklist.checklist : [];
  const standards = "standards" in sections.meetings ? sections.meetings.standards : [];
  const approvals = "approvals" in sections.governanceApprovals ? sections.governanceApprovals.approvals : [];
  const mechanics = "mechanics" in sections.writingMechanics ? sections.writingMechanics.mechanics : [];

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
          <p className="text-sm font-semibold">Brand Handbook</p>
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
          <header className="mb-16 pb-8 border-b border-[color:var(--vy-border)]">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--vy-muted-fg)]">
              {fundamentals.brandName.parent}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--vy-text-strong)] md:text-5xl">
              Brand Handbook
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[color:var(--vy-muted-fg)]">
              The canonical guide to Vayasya brand communication. Five chapters covering identity, visual system, voice, and operational standards.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-[color:var(--vy-gold-ui)] px-3 py-1 text-sm font-medium text-white">
                v{"footer" in sections.footerVersioning ? sections.footerVersioning.footer.version : "1.0"}
              </span>
              {fundamentals.verticals.map((v) => (
                <span key={v} className="rounded-full border border-[color:var(--vy-border)] px-3 py-1 text-sm">
                  {v}
                </span>
              ))}
            </div>
          </header>

          {/* ==================== CHAPTER I: FOUNDATION ==================== */}
          <ChapterWrapper {...CHAPTERS.foundation}>
            {/* 01 Philosophy */}
            <section className="mb-16">
              <SectionHeader {...sections.philosophy.header} id="01-philosophy" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.philosophy.intro}</p>

                {manifesto && (
                  <>
                    {/* Mission Band */}
                    <div className="my-8 rounded-xl bg-[color:var(--vy-muted)] p-8 text-center">
                      <p className="text-2xl font-medium text-[color:var(--vy-text-strong)] md:text-3xl">
                        "{manifesto.mission}"
                      </p>
                    </div>

                    {/* Beliefs */}
                    <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">What We Believe</h4>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {manifesto.beliefs.map((b, i) => (
                        <div key={i} className="rounded-lg border border-[color:var(--vy-border)] p-4">
                          <p className="font-semibold text-[color:var(--vy-text-strong)]">{b.belief}</p>
                          <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{b.explanation}</p>
                        </div>
                      ))}
                    </div>

                    {/* Stand For / Reject */}
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <div className="rounded-lg border-2 border-[color:var(--vy-success)] p-5">
                        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[color:var(--vy-success)]">
                          <Check className="h-5 w-5" /> We Stand For
                        </h4>
                        <ul className="space-y-2">
                          {manifesto.standFor.map((s, i) => (
                            <li key={i} className="text-[color:var(--vy-fg)]">• {s}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg border-2 border-[color:var(--vy-danger)] p-5">
                        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[color:var(--vy-danger)]">
                          <X className="h-5 w-5" /> We Reject
                        </h4>
                        <ul className="space-y-2">
                          {manifesto.reject.map((r, i) => (
                            <li key={i} className="text-[color:var(--vy-muted-fg)]">• {r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                <RulesBlock rules={sections.philosophy.rules} />
                <DoDontBlock examples={sections.philosophy.doDont} />
              </div>
            </section>

            {/* 02 Positioning */}
            <section className="mb-16">
              <SectionHeader {...sections.positioning.header} id="02-positioning" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.positioning.intro}</p>
                <RulesBlock rules={sections.positioning.rules} />
                <DoDontBlock examples={sections.positioning.doDont} />
              </div>
            </section>

            {/* 03 Operating Pillars */}
            <section className="mb-16">
              <SectionHeader {...sections.operatingPillars.header} id="03-operating-pillars" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.operatingPillars.intro}</p>

                {pillars.length > 0 && (
                  <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {pillars.map((p) => (
                      <div key={p.name} className="rounded-lg border border-[color:var(--vy-border)] overflow-hidden">
                        <div className="bg-[color:var(--vy-muted)] p-4">
                          <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">{p.name}</h5>
                          <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">{p.definition}</p>
                        </div>
                        <div className="p-4 space-y-4">
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                              <Check className="inline h-3 w-3 mr-1" />Behaviors
                            </p>
                            <ul className="space-y-1 text-sm">
                              {p.behaviors.map((b, i) => <li key={i}>• {b}</li>)}
                            </ul>
                          </div>
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                              <AlertTriangle className="inline h-3 w-3 mr-1" />Red Flags
                            </p>
                            <ul className="space-y-1 text-sm text-[color:var(--vy-muted-fg)]">
                              {p.redFlags.map((r, i) => <li key={i}>• {r}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <RulesBlock rules={sections.operatingPillars.rules} />
                <DoDontBlock examples={sections.operatingPillars.doDont} />
              </div>
            </section>
          </ChapterWrapper>

          {/* ==================== CHAPTER II: VISUAL SYSTEM ==================== */}
          <ChapterWrapper {...CHAPTERS.visual}>
            {/* 04 Logo Usage */}
            <section className="mb-16">
              <SectionHeader {...sections.logoUsage.header} id="04-logo-usage" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.logoUsage.intro}</p>

                {/* Logo Previews */}
                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Logo Variants</h4>
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
                      <p className="text-sm text-[color:var(--vy-muted-fg)]">Min width: 120px • Clear space: 1x V height</p>
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
                      <p className="text-sm text-[color:var(--vy-muted-fg)]">Min width: 120px • Clear space: 1x V height</p>
                    </div>
                  </div>
                </div>

                {/* Vertical Logos */}
                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Vertical Logos</h4>
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
              </div>
            </section>

            {/* 05 Color Palette */}
            <section className="mb-16">
              <SectionHeader {...sections.colorPalette.header} id="05-color-palette" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.colorPalette.intro}</p>

                {/* Color Swatches by Role */}
                {["Base", "Support", "Identity", "Vertical Accent", "Semantic"].map((role) => {
                  const colors = fundamentals.colorTokens.filter((c) => c.role === role);
                  if (!colors.length) return null;
                  return (
                    <div key={role} className="mt-8">
                      <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">{role}</h4>
                      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {colors.map((c) => (
                          <ColorSwatch key={c.token} token={c.token} hex={c.hex} usage={c.usage} />
                        ))}
                      </div>
                    </div>
                  );
                })}

                <RulesBlock rules={sections.colorPalette.rules} />
                <DoDontBlock examples={sections.colorPalette.doDont} />
              </div>
            </section>

            {/* 06 Typography */}
            <section className="mb-16">
              <SectionHeader {...sections.typography.header} id="06-typography" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.typography.intro}</p>

                {/* Type Specimen */}
                <div className="mt-8 rounded-lg border border-[color:var(--vy-border)] p-6 space-y-6">
                  {fundamentals.typoRules.hierarchy.map((h) => (
                    <div key={h.level} className="border-b border-[color:var(--vy-border)] pb-4 last:border-0 last:pb-0">
                      <div className="flex items-baseline justify-between mb-2">
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
                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">India-First Formatting</h4>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(fundamentals.typoRules.indiaFirstFormats).map(([key, val]) => (
                      <div key={key} className="rounded-lg bg-[color:var(--vy-muted)] p-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="mt-1 font-mono text-sm">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <RulesBlock rules={sections.typography.rules} />
                <DoDontBlock examples={sections.typography.doDont} />
              </div>
            </section>

            {/* 07 Imagery */}
            <section className="mb-16">
              <SectionHeader {...sections.imagery.header} id="07-imagery" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.imagery.intro}</p>
                <RulesBlock rules={sections.imagery.rules} />
                <DoDontBlock examples={sections.imagery.doDont} />
              </div>
            </section>
          </ChapterWrapper>

          {/* ==================== CHAPTER III: COMMUNICATION ==================== */}
          <ChapterWrapper {...CHAPTERS.communication}>
            {/* 08 Voice & Tone */}
            <section className="mb-16">
              <SectionHeader {...sections.voiceTone.header} id="08-voice-tone" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.voiceTone.intro}</p>

                {/* Voice Personas */}
                {personas.length > 0 && (
                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Voice Traits</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {personas.map((p) => (
                        <div key={p.trait} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                          <h5 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">{p.trait}</h5>
                          <p className="mt-1 text-[color:var(--vy-muted-fg)]">{p.description}</p>
                          <div className="mt-4 space-y-3">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">Sounds like</p>
                              <ul className="mt-1 space-y-1 text-sm">
                                {p.soundsLike.map((s, i) => <li key={i}>"{s}"</li>)}
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
                )}

                {/* Terminology */}
                {terminology.length > 0 && (
                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Terminology Dictionary</h4>
                    <div className="overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
                      <table className="w-full text-sm">
                        <thead className="bg-[color:var(--vy-muted)]">
                          <tr>
                            <th className="p-3 text-left font-medium">Instead of</th>
                            <th className="p-3 text-left font-medium text-[color:var(--vy-success)]">Use</th>
                            <th className="p-3 text-left font-medium text-[color:var(--vy-danger)]">Avoid</th>
                            <th className="p-3 text-left font-medium">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {terminology.map((t) => (
                            <tr key={t.term} className="border-t border-[color:var(--vy-border)]">
                              <td className="p-3 font-medium">{t.term}</td>
                              <td className="p-3 text-[color:var(--vy-success)]">{t.approved}</td>
                              <td className="p-3 text-[color:var(--vy-danger)]">{t.avoid.join(", ")}</td>
                              <td className="p-3 text-[color:var(--vy-muted-fg)]">{t.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Banned Phrases */}
                {bannedPhrases.length > 0 && (
                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Banned Phrases</h4>
                    <div className="grid gap-3 md:grid-cols-2">
                      {bannedPhrases.map((b) => (
                        <div key={b.phrase} className="rounded-lg border border-[color:var(--vy-danger)] bg-red-50 p-4">
                          <p className="font-medium text-[color:var(--vy-danger)]">"{b.phrase}"</p>
                          <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">{b.reason}</p>
                          <p className="mt-2 text-sm"><span className="font-medium text-[color:var(--vy-success)]">Use:</span> {b.alternative}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <RulesBlock rules={sections.voiceTone.rules} />
                <DoDontBlock examples={sections.voiceTone.doDont} />
              </div>
            </section>

            {/* 09 Claims Discipline */}
            <section className="mb-16">
              <SectionHeader {...sections.claimsDiscipline.header} id="09-claims-discipline" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.claimsDiscipline.intro}</p>

                {/* Claims Matrix */}
                {claimRules.length > 0 && (
                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Claim Classification</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {claimRules.map((c) => {
                        const colors: Record<string, string> = {
                          aspirational: "border-l-blue-500 bg-blue-50",
                          directional: "border-l-amber-500 bg-amber-50",
                          measured: "border-l-green-500 bg-green-50",
                          contractual: "border-l-purple-500 bg-purple-50",
                        };
                        return (
                          <div key={c.claimType} className={`rounded-lg border-l-4 p-5 ${colors[c.claimType] || ""}`}>
                            <h5 className="text-lg font-semibold capitalize">{c.claimType}</h5>
                            <div className="mt-3 space-y-2 text-sm">
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
                )}

                {/* Evidence Tiers */}
                {evidenceTiers.length > 0 && (
                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Evidence Requirements</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {evidenceTiers.map((e) => (
                        <div key={e.tier} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                          <div className="flex items-center justify-between">
                            <h5 className="font-semibold">{e.tier}</h5>
                            {e.expirationDays && (
                              <span className="rounded bg-[color:var(--vy-muted)] px-2 py-0.5 text-xs">
                                Expires: {e.expirationDays}d
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">{e.description}</p>
                          <div className="mt-3 grid gap-3 text-sm">
                            <div>
                              <p className="text-xs font-semibold uppercase text-[color:var(--vy-success)]">Valid</p>
                              <ul className="mt-1 space-y-1">{e.validEvidence.map((v, i) => <li key={i}>• {v}</li>)}</ul>
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase text-[color:var(--vy-danger)]">Invalid</p>
                              <ul className="mt-1 space-y-1 text-[color:var(--vy-muted-fg)]">{e.invalidEvidence.map((v, i) => <li key={i}>• {v}</li>)}</ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <RulesBlock rules={sections.claimsDiscipline.rules} />
                <DoDontBlock examples={sections.claimsDiscipline.doDont} />
              </div>
            </section>

            {/* 10 Writing Mechanics */}
            <section className="mb-16">
              <SectionHeader {...sections.writingMechanics.header} id="10-writing-mechanics" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.writingMechanics.intro}</p>

                {mechanics.length > 0 && (
                  <div className="mt-8 space-y-4">
                    {mechanics.map((m, i) => (
                      <div key={i} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                        <p className="font-medium text-[color:var(--vy-text-strong)]">{m.rule}</p>
                        <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">{m.rationale}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {m.examples.map((ex, j) => (
                            <span key={j} className="rounded bg-[color:var(--vy-muted)] px-3 py-1 font-mono text-sm">{ex}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <RulesBlock rules={sections.writingMechanics.rules} />
                <DoDontBlock examples={sections.writingMechanics.doDont} />
              </div>
            </section>
          </ChapterWrapper>

          {/* ==================== CHAPTER IV: APPLICATION ==================== */}
          <ChapterWrapper {...CHAPTERS.application}>
            {/* 11-14: Documents, Presentations, Email, Meetings */}
            {[
              { s: sections.documents, id: "11-documents" },
              { s: sections.presentations, id: "12-presentations" },
              { s: sections.email, id: "13-email" },
            ].map(({ s, id }) => (
              <section key={id} className="mb-16">
                <SectionHeader {...s.header} id={id} />
                <div className="mt-6">
                  <p className="max-w-prose text-lg leading-relaxed">{s.intro}</p>
                  <RulesBlock rules={s.rules} />
                  <DoDontBlock examples={s.doDont} />
                </div>
              </section>
            ))}

            {/* 14 Meetings */}
            <section className="mb-16">
              <SectionHeader {...sections.meetings.header} id="14-meetings" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.meetings.intro}</p>

                {standards.length > 0 && (
                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-medium text-[color:var(--vy-text-strong)]">Meeting Standards</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {standards.map((st) => (
                        <div key={st.meetingType} className="rounded-lg border border-[color:var(--vy-border)] p-5">
                          <h5 className="font-semibold">{st.meetingType}</h5>
                          <p className="text-xs text-[color:var(--vy-muted-fg)]">{st.timeboxMinutes} min • {st.ownerRole}</p>
                          <div className="mt-3 grid gap-2 text-sm">
                            <p><span className="font-medium text-[color:var(--vy-success)]">Inputs:</span> {st.requiredInputs.join(", ")}</p>
                            <p><span className="font-medium text-[color:var(--vy-info)]">Outputs:</span> {st.requiredOutputs.join(", ")}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <RulesBlock rules={sections.meetings.rules} />
                <DoDontBlock examples={sections.meetings.doDont} />
              </div>
            </section>

            {/* 15 Pre-Send Checklist */}
            <section className="mb-16">
              <SectionHeader {...sections.preSendChecklist.header} id="15-pre-send-checklist" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.preSendChecklist.intro}</p>

                {checklist.length > 0 && (
                  <div className="mt-8 rounded-xl border-2 border-[color:var(--vy-border)] p-6 print:p-4">
                    <p className="mb-4 text-sm text-[color:var(--vy-muted-fg)]">Complete all checks before sending external communication.</p>
                    <div className="space-y-6">
                      {checklist.map((g, i) => (
                        <div key={i}>
                          <h5 className="mb-3 font-semibold">{g.title}</h5>
                          <ul className="space-y-2">
                            {g.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[color:var(--vy-border)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-2 ml-8 text-sm text-[color:var(--vy-success)]">Pass: {g.passCondition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <RulesBlock rules={sections.preSendChecklist.rules} />
                <DoDontBlock examples={sections.preSendChecklist.doDont} />
              </div>
            </section>
          </ChapterWrapper>

          {/* ==================== CHAPTER V: APPENDIX ==================== */}
          <ChapterWrapper {...CHAPTERS.appendix}>
            {/* Governance */}
            <section className="mb-16">
              <SectionHeader {...sections.governanceApprovals.header} id="governance-approvals" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.governanceApprovals.intro}</p>

                {approvals.length > 0 && (
                  <div className="mt-8 overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
                    <table className="w-full text-sm">
                      <thead className="bg-[color:var(--vy-muted)]">
                        <tr>
                          <th className="p-3 text-left font-medium">Artifact</th>
                          <th className="p-3 text-left font-medium">Approver</th>
                          <th className="p-3 text-left font-medium">SLA</th>
                          <th className="p-3 text-left font-medium">Escalation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {approvals.map((a) => (
                          <tr key={a.artifact} className="border-t border-[color:var(--vy-border)]">
                            <td className="p-3 font-medium">{a.artifact}</td>
                            <td className="p-3">{a.approverRole}</td>
                            <td className="p-3">{a.slaBusinessDays}d</td>
                            <td className="p-3 text-[color:var(--vy-muted-fg)]">{a.escalation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <RulesBlock rules={sections.governanceApprovals.rules} />
              </div>
            </section>

            {/* Templates */}
            <section className="mb-16">
              <SectionHeader {...sections.templatesDownloadables.header} id="templates-downloadables" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.templatesDownloadables.intro}</p>
                <RulesBlock rules={sections.templatesDownloadables.rules} />
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <SectionHeader {...sections.faqEdgeCases.header} id="faq-edge-cases" />
              <div className="mt-6">
                <p className="max-w-prose text-lg leading-relaxed">{sections.faqEdgeCases.intro}</p>
                {"faq" in sections.faqEdgeCases && sections.faqEdgeCases.faq && (
                  <div className="mt-8 space-y-3">
                    {sections.faqEdgeCases.faq.map((f, i) => (
                      <details key={i} className="rounded-lg border border-[color:var(--vy-border)]">
                        <summary className="cursor-pointer p-4 font-medium">{f.question}</summary>
                        <div className="border-t border-[color:var(--vy-border)] p-4 text-[color:var(--vy-muted-fg)]">{f.answer}</div>
                      </details>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Footer/Version */}
            <section id="footer-versioning" className="rounded-xl bg-[color:var(--vy-muted)] p-6">
              {"footer" in sections.footerVersioning && (
                <div className="grid gap-4 text-sm md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">Version</p>
                    <p className="mt-1 font-mono">{sections.footerVersioning.footer.version}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">Effective</p>
                    <p className="mt-1">{sections.footerVersioning.footer.effectiveDate}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">Owner</p>
                    <p className="mt-1">{sections.footerVersioning.footer.owner}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">Contact</p>
                    <p className="mt-1">{sections.footerVersioning.footer.contact}</p>
                  </div>
                </div>
              )}
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
