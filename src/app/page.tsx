"use client";

import { ArrowUp, Menu } from "lucide-react";

import { BRAND_CONTENT } from "../content/brand";
import { useActiveSection } from "../hooks/use-active-section";
import { anchorsFromNavigation, smoothScrollToSection } from "../lib/brand-utils";

// Components
import { HandbookHero } from "../components/brand/handbook-hero";
import { ChapterNav, ChapterNavSidebar } from "../components/brand/chapter-nav";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

// Purpose-built sections
import { PhilosophySection } from "../components/brand/sections/philosophy-section";
import { PillarsSection } from "../components/brand/sections/pillars-section";
import { ColorSection } from "../components/brand/sections/color-section";
import { TypographySection } from "../components/brand/sections/typography-section";
import { VoiceToneSection } from "../components/brand/sections/voice-tone-section";
import { ClaimsSection } from "../components/brand/sections/claims-section";
import { ChecklistSection } from "../components/brand/sections/checklist-section";
import { GenericSection } from "../components/brand/sections/generic-section";

// Content
const sections = BRAND_CONTENT.sections;

export default function Page() {
  const { activeSectionId, progress } = useActiveSection(anchorsFromNavigation);

  const handleNavigate = (anchorId: string) => {
    smoothScrollToSection(anchorId);
  };

  return (
    <div className="bg-[color:var(--vy-bg)] text-[color:var(--vy-fg)]">
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
          aria-hidden="true"
        />
      </div>

      {/* Mobile Header */}
      <header className="print:hidden sticky top-1 z-50 border-b border-[color:var(--vy-border)] bg-[color:var(--vy-bg)]/95 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3">
          <p className="text-sm font-medium text-[color:var(--vy-text-strong)]">
            Brand Handbook
          </p>
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
                <ChapterNav
                  activeSection={activeSectionId}
                  onNavigate={(id) => {
                    handleNavigate(id);
                  }}
                />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 pt-4 lg:grid-cols-[280px_1fr] lg:px-6 lg:pt-6">
        {/* Sidebar Navigation (Desktop) */}
        <aside className="print:hidden hidden lg:block">
          <ChapterNavSidebar
            activeSection={activeSectionId}
            onNavigate={handleNavigate}
          />
        </aside>

        {/* Main Content */}
        <main id="main-content" aria-label="Brand handbook content">
          <HandbookHero />

          <Separator className="my-8" />

          {/* Section 01: Philosophy */}
          <PhilosophySection />

          {/* Section 02: Positioning */}
          <GenericSection
            anchorId="02-positioning"
            header={sections.positioning.header}
            intro={sections.positioning.intro}
            rules={sections.positioning.rules}
            doDont={sections.positioning.doDont}
          />

          {/* Section 03: Operating Pillars */}
          <PillarsSection />

          {/* Section 04: Logo Usage */}
          <GenericSection
            anchorId="04-logo-usage"
            header={sections.logoUsage.header}
            intro={sections.logoUsage.intro}
            rules={sections.logoUsage.rules}
            doDont={sections.logoUsage.doDont}
          >
            {"variants" in sections.logoUsage && sections.logoUsage.variants && (
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
                  Logo Variants
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {sections.logoUsage.variants.map((variant) => (
                    <div
                      key={variant.id}
                      className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-4"
                    >
                      <div
                        className={`mb-4 flex h-24 items-center justify-center rounded-md ${
                          variant.background === "dark"
                            ? "bg-[color:var(--vy-fg)]"
                            : "bg-[color:var(--vy-muted)]"
                        }`}
                      >
                        <span className="text-xs text-[color:var(--vy-muted-fg)]">
                          [Logo Placeholder]
                        </span>
                      </div>
                      <p className="font-medium text-[color:var(--vy-text-strong)]">
                        {variant.label}
                      </p>
                      <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                        Min width: {variant.minWidthPx}px
                      </p>
                      <p className="text-sm text-[color:var(--vy-muted-fg)]">
                        {variant.clearSpaceRule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </GenericSection>

          {/* Section 05: Color Palette */}
          <ColorSection />

          {/* Section 06: Typography */}
          <TypographySection />

          {/* Section 07: Imagery */}
          <GenericSection
            anchorId="07-imagery"
            header={sections.imagery.header}
            intro={sections.imagery.intro}
            rules={sections.imagery.rules}
            doDont={sections.imagery.doDont}
          />

          {/* Section 08: Voice & Tone */}
          <VoiceToneSection />

          {/* Section 09: Claims Discipline */}
          <ClaimsSection />

          {/* Section 10: Writing Mechanics */}
          <GenericSection
            anchorId="10-writing-mechanics"
            header={sections.writingMechanics.header}
            intro={sections.writingMechanics.intro}
            rules={sections.writingMechanics.rules}
            doDont={sections.writingMechanics.doDont}
          >
            {"mechanics" in sections.writingMechanics && sections.writingMechanics.mechanics && (
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
                  Writing Mechanics
                </h3>
                <div className="grid gap-4">
                  {sections.writingMechanics.mechanics.map((mechanic, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
                    >
                      <p className="font-medium text-[color:var(--vy-text-strong)]">
                        {mechanic.rule}
                      </p>
                      <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
                        {mechanic.rationale}
                      </p>
                      <div className="mt-3 space-y-1">
                        {mechanic.examples.map((example, exIndex) => (
                          <p
                            key={exIndex}
                            className="font-mono text-sm text-[color:var(--vy-fg)]"
                          >
                            {example}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </GenericSection>

          {/* Section 11: Documents */}
          <GenericSection
            anchorId="11-documents"
            header={sections.documents.header}
            intro={sections.documents.intro}
            rules={sections.documents.rules}
            doDont={sections.documents.doDont}
          />

          {/* Section 12: Presentations */}
          <GenericSection
            anchorId="12-presentations"
            header={sections.presentations.header}
            intro={sections.presentations.intro}
            rules={sections.presentations.rules}
            doDont={sections.presentations.doDont}
          />

          {/* Section 13: Email */}
          <GenericSection
            anchorId="13-email"
            header={sections.email.header}
            intro={sections.email.intro}
            rules={sections.email.rules}
            doDont={sections.email.doDont}
          />

          {/* Section 14: Meetings */}
          <GenericSection
            anchorId="14-meetings"
            header={sections.meetings.header}
            intro={sections.meetings.intro}
            rules={sections.meetings.rules}
            doDont={sections.meetings.doDont}
          >
            {"standards" in sections.meetings && sections.meetings.standards && (
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
                  Meeting Standards
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {sections.meetings.standards.map((standard) => (
                    <div
                      key={standard.meetingType}
                      className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
                    >
                      <p className="font-medium text-[color:var(--vy-text-strong)]">
                        {standard.meetingType}
                      </p>
                      <p className="mt-1 text-xs text-[color:var(--vy-muted-fg)]">
                        {standard.timeboxMinutes} min | Owner: {standard.ownerRole}
                      </p>
                      <div className="mt-3 grid gap-2 text-sm">
                        <div>
                          <span className="font-medium text-[color:var(--vy-success)]">
                            Inputs:{" "}
                          </span>
                          <span className="text-[color:var(--vy-fg)]">
                            {standard.requiredInputs.join(", ")}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-[color:var(--vy-info)]">
                            Outputs:{" "}
                          </span>
                          <span className="text-[color:var(--vy-fg)]">
                            {standard.requiredOutputs.join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </GenericSection>

          {/* Section 15: Pre-Send Checklist */}
          <ChecklistSection />

          {/* Appendix Divider */}
          <div className="mt-16 pt-8 border-t-2 border-[color:var(--vy-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--vy-muted-fg)]">
              Appendix
            </p>
          </div>

          {/* Appendix: Governance */}
          <GenericSection
            anchorId="governance-approvals"
            header={sections.governanceApprovals.header}
            intro={sections.governanceApprovals.intro}
            rules={sections.governanceApprovals.rules}
            doDont={sections.governanceApprovals.doDont}
          >
            {"approvals" in sections.governanceApprovals && sections.governanceApprovals.approvals && (
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
                  Approval Matrix
                </h3>
                <div className="overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
                  <table className="w-full text-sm">
                    <thead className="bg-[color:var(--vy-muted)]">
                      <tr>
                        <th className="p-3 text-left font-medium">Artifact</th>
                        <th className="p-3 text-left font-medium">Approver</th>
                        <th className="p-3 text-left font-medium">SLA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sections.governanceApprovals.approvals.map((approval) => (
                        <tr key={approval.artifact} className="border-t border-[color:var(--vy-border)]">
                          <td className="p-3">{approval.artifact}</td>
                          <td className="p-3 text-[color:var(--vy-muted-fg)]">{approval.approverRole}</td>
                          <td className="p-3 text-[color:var(--vy-muted-fg)]">{approval.slaBusinessDays} days</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </GenericSection>

          {/* Appendix: Templates */}
          <GenericSection
            anchorId="templates-downloadables"
            header={sections.templatesDownloadables.header}
            intro={sections.templatesDownloadables.intro}
            rules={sections.templatesDownloadables.rules}
            doDont={sections.templatesDownloadables.doDont}
          />

          {/* Appendix: FAQ */}
          <GenericSection
            anchorId="faq-edge-cases"
            header={sections.faqEdgeCases.header}
            intro={sections.faqEdgeCases.intro}
            rules={sections.faqEdgeCases.rules}
            doDont={sections.faqEdgeCases.doDont}
          >
            {"faq" in sections.faqEdgeCases && sections.faqEdgeCases.faq && (
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {sections.faqEdgeCases.faq.map((entry, index) => (
                    <details
                      key={index}
                      className="group rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)]"
                    >
                      <summary className="cursor-pointer p-4 font-medium text-[color:var(--vy-text-strong)]">
                        {entry.question}
                      </summary>
                      <div className="border-t border-[color:var(--vy-border)] p-4 text-[color:var(--vy-muted-fg)]">
                        {entry.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </GenericSection>

          {/* Footer */}
          <section
            id="footer-versioning"
            className="mt-16 rounded-lg bg-[color:var(--vy-muted)] p-6"
          >
            {"footer" in sections.footerVersioning && sections.footerVersioning.footer && (
              <div className="grid gap-4 text-sm md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Version
                  </p>
                  <p className="mt-1 font-mono text-[color:var(--vy-text-strong)]">
                    {sections.footerVersioning.footer.version}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Effective Date
                  </p>
                  <p className="mt-1 text-[color:var(--vy-fg)]">
                    {sections.footerVersioning.footer.effectiveDate}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Owner
                  </p>
                  <p className="mt-1 text-[color:var(--vy-fg)]">
                    {sections.footerVersioning.footer.owner}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Contact
                  </p>
                  <p className="mt-1 text-[color:var(--vy-fg)]">
                    {sections.footerVersioning.footer.contact}
                  </p>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>

      {/* Back to Top */}
      <Button
        variant="default"
        size="icon"
        className="print:hidden fixed bottom-6 right-6 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
