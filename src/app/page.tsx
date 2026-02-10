"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUp,
  ClipboardCopy,
  Link2,
  Menu,
  MoveUpRight,
  PanelsTopLeft,
  Search,
} from "lucide-react";
import { toast } from "sonner";

import { BRAND_CONTENT } from "../content/brand";
import {
  activeSectionLabel,
  anchorsFromNavigation,
  canonicalSectionUrl,
  formatReadinessSla,
  getSectionForNavItem,
  handbookMetadata,
  navHrefToAnchor,
  orderedNavItems,
  orderedSections,
  sectionSummaryById,
  smoothScrollToSection,
} from "../lib/brand-utils";
import { useActiveSection } from "../hooks/use-active-section";
import { ClaimsMatrix } from "../components/brand/claims-matrix";
import { ChecklistPanel } from "../components/brand/checklist-panel";
import { Footer } from "../components/brand/footer";
import { Hero } from "../components/brand/hero";
import { SectionShell } from "../components/brand/section-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../components/ui/hover-card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

function ReferencePanel({ sectionId }: { sectionId: string }) {
  const section = orderedSections.find((candidate) => candidate.header.id === sectionId);

  if (!section) {
    return null;
  }

  return (
    <div className="space-y-4">
      {"claimRules" in section && section.claimRules?.length ? (
        <ClaimsMatrix claimRules={section.claimRules} />
      ) : null}

      {"legalSafePatterns" in section && section.legalSafePatterns?.length ? (
        <Alert>
          <AlertTitle>Legal-safe patterns</AlertTitle>
          <AlertDescription>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              {section.legalSafePatterns.map((pattern, index) => (
                <li key={`${section.header.id}-legal-${index}`}>{pattern}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      ) : null}

      {"swatches" in section && section.swatches?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Color Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>Hex</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Usage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.swatches.map((swatch) => (
                  <TableRow key={swatch.token}>
                    <TableCell className="font-mono text-xs">{swatch.token}</TableCell>
                    <TableCell className="font-mono text-xs">{swatch.hex}</TableCell>
                    <TableCell>{swatch.role}</TableCell>
                    <TableCell>{swatch.usage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : null}

      {"scenarios" in section && section.scenarios?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Scenarios</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple">
              {section.scenarios.map((scenario, index) => (
                <AccordionItem key={`${section.header.id}-scenario-${index}`} value={`${section.header.id}-scenario-${index}`}>
                  <AccordionTrigger>{scenario.context}</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      <strong>Risk:</strong> {scenario.risk}
                    </p>
                    <p className="text-sm">
                      <strong>Recommended:</strong> {scenario.recommended}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ) : null}

      {"variants" in section && section.variants?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Logo Variants</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Variant</TableHead>
                  <TableHead>Background</TableHead>
                  <TableHead>Minimum width</TableHead>
                  <TableHead>Clear space</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.variants.map((variant) => (
                  <TableRow key={variant.id}>
                    <TableCell>
                      <p className="font-medium">{variant.label}</p>
                      <p className="font-mono text-xs text-[color:var(--vy-muted-fg)]">{variant.filePath}</p>
                    </TableCell>
                    <TableCell>{variant.background}</TableCell>
                    <TableCell>{variant.minWidthPx}px</TableCell>
                    <TableCell>{variant.clearSpaceRule}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : null}

      {"stacks" in section && section.stacks?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Font Stacks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Label</TableHead>
                  <TableHead>Family</TableHead>
                  <TableHead>Fallback</TableHead>
                  <TableHead>Usage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.stacks.map((stack) => (
                  <TableRow key={stack.label}>
                    <TableCell>{stack.label}</TableCell>
                    <TableCell>{stack.family}</TableCell>
                    <TableCell className="text-xs">{stack.fallback.join(", ")}</TableCell>
                    <TableCell>{stack.usage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : null}

      {"hierarchy" in section && section.hierarchy?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Type Hierarchy</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Level</TableHead>
                  <TableHead>Font</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Line height</TableHead>
                  <TableHead>Usage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.hierarchy.map((entry) => (
                  <TableRow key={entry.level}>
                    <TableCell>{entry.level}</TableCell>
                    <TableCell>{entry.fontFamily}</TableCell>
                    <TableCell>{entry.fontSize}</TableCell>
                    <TableCell>{entry.lineHeight}</TableCell>
                    <TableCell>{entry.usage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : null}

      {"languageControls" in section && section.languageControls?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Language Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {section.languageControls.map((control, index) => (
                <AccordionItem key={`${section.header.id}-lang-${index}`} value={`${section.header.id}-lang-${index}`}>
                  <AccordionTrigger>{control.rule}</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm text-[color:var(--vy-muted-fg)]">{control.rationale}</p>
                    <ul className="list-disc pl-4 text-sm">
                      {control.examples.map((example, exampleIndex) => (
                        <li key={`${section.header.id}-lang-example-${exampleIndex}`}>{example}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ) : null}

      {"mechanics" in section && section.mechanics?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Writing Mechanics</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {section.mechanics.map((mechanic, index) => (
                <AccordionItem key={`${section.header.id}-mechanic-${index}`} value={`${section.header.id}-mechanic-${index}`}>
                  <AccordionTrigger>{mechanic.rule}</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm text-[color:var(--vy-muted-fg)]">{mechanic.rationale}</p>
                    <ul className="list-disc pl-4 text-sm">
                      {mechanic.examples.map((example, exampleIndex) => (
                        <li key={`${section.header.id}-mechanic-example-${exampleIndex}`}>{example}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ) : null}

      {"pillars" in section && section.pillars?.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {section.pillars.map((pillar) => (
            <Card key={pillar.name}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{pillar.name}</CardTitle>
                <CardDescription>{pillar.definition}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Behaviors
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-sm">
                    {pillar.behaviors.map((behavior, index) => (
                      <li key={`${pillar.name}-behavior-${index}`}>{behavior}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Red flags
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-sm">
                    {pillar.redFlags.map((flag, index) => (
                      <li key={`${pillar.name}-red-${index}`}>{flag}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : null}

      {"terminology" in section && section.terminology?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Terminology</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Term</TableHead>
                  <TableHead>Approved</TableHead>
                  <TableHead>Avoid</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.terminology.map((term) => (
                  <TableRow key={term.term}>
                    <TableCell>{term.term}</TableCell>
                    <TableCell>{term.approved}</TableCell>
                    <TableCell>{term.avoid.join(", ")}</TableCell>
                    <TableCell>{term.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : null}

      {"personas" in section && section.personas?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Voice Personas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Trait</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Sounds like</TableHead>
                  <TableHead>Avoid</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.personas.map((persona) => (
                  <TableRow key={persona.trait}>
                    <TableCell>{persona.trait}</TableCell>
                    <TableCell>{persona.description}</TableCell>
                    <TableCell>{persona.soundsLike.join(" | ")}</TableCell>
                    <TableCell>{persona.avoid.join(" | ")}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : null}

      {"standards" in section && section.standards?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Meeting Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Meeting type</TableHead>
                  <TableHead>Inputs</TableHead>
                  <TableHead>Outputs</TableHead>
                  <TableHead>Timebox</TableHead>
                  <TableHead>Owner role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.standards.map((standard) => (
                  <TableRow key={standard.meetingType}>
                    <TableCell>{standard.meetingType}</TableCell>
                    <TableCell>{standard.requiredInputs.join(", ")}</TableCell>
                    <TableCell>{standard.requiredOutputs.join(", ")}</TableCell>
                    <TableCell>{standard.timeboxMinutes} min</TableCell>
                    <TableCell>{standard.ownerRole}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : null}

      {"approvals" in section && section.approvals?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Approval Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Artifact</TableHead>
                  <TableHead>Approver role</TableHead>
                  <TableHead>Criteria</TableHead>
                  <TableHead>SLA</TableHead>
                  <TableHead>Escalation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.approvals.map((approval) => (
                  <TableRow key={approval.artifact}>
                    <TableCell>{approval.artifact}</TableCell>
                    <TableCell>{approval.approverRole}</TableCell>
                    <TableCell>{approval.criteria.join(", ")}</TableCell>
                    <TableCell>{formatReadinessSla(approval.slaBusinessDays)}</TableCell>
                    <TableCell>{approval.escalation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : null}

      {"checklist" in section && section.checklist?.length ? (
        <ChecklistPanel checklist={section.checklist} />
      ) : null}

      {"faq" in section && section.faq?.length ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {section.faq.map((entry, index) => (
                <AccordionItem key={`${section.header.id}-faq-${index}`} value={`${section.header.id}-faq-${index}`}>
                  <AccordionTrigger>{entry.question}</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">{entry.answer}</p>
                    {entry.tags?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <Badge key={`${entry.question}-${tag}`} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ) : null}

      {"footer" in section && section.footer ? <Footer footer={section.footer} /> : null}
    </div>
  );
}

function sectionHasReferenceData(sectionId: string) {
  const section = orderedSections.find((candidate) => candidate.header.id === sectionId);

  if (!section) {
    return false;
  }

  return Boolean(
    ("claimRules" in section && section.claimRules?.length) ||
      ("legalSafePatterns" in section && section.legalSafePatterns?.length) ||
      ("swatches" in section && section.swatches?.length) ||
      ("scenarios" in section && section.scenarios?.length) ||
      ("variants" in section && section.variants?.length) ||
      ("stacks" in section && section.stacks?.length) ||
      ("hierarchy" in section && section.hierarchy?.length) ||
      ("languageControls" in section && section.languageControls?.length) ||
      ("mechanics" in section && section.mechanics?.length) ||
      ("pillars" in section && section.pillars?.length) ||
      ("terminology" in section && section.terminology?.length) ||
      ("personas" in section && section.personas?.length) ||
      ("standards" in section && section.standards?.length) ||
      ("approvals" in section && section.approvals?.length) ||
      ("checklist" in section && section.checklist?.length) ||
      ("faq" in section && section.faq?.length) ||
      ("footer" in section && section.footer),
  );
}

export default function Page() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isLogoDialogOpen, setIsLogoDialogOpen] = useState(false);
  const { activeSectionId, progress } = useActiveSection(anchorsFromNavigation);

  const activeSection = useMemo(
    () => activeSectionLabel(activeSectionId),
    [activeSectionId],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsCommandOpen((current) => !current);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const copySectionLink = async (anchorId: string) => {
    try {
      await navigator.clipboard.writeText(canonicalSectionUrl(anchorId));
      toast.success(anchorId, {
        description: "Section link copied",
      });
    } catch {
      toast.error(anchorId, {
        description: "Clipboard access unavailable",
      });
    }
  };

  return (
    <div className="bg-[color:var(--vy-bg)] text-[color:var(--vy-fg)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-[color:var(--vy-bg)] focus:px-3 focus:py-2 focus:outline focus:outline-2 focus:outline-[color:var(--vy-info)]"
      >
        Skip to content
      </a>

      <div className="print-hidden fixed inset-x-0 top-0 z-[60] h-1 bg-[color:var(--vy-muted)]">
        <div
          className="h-full bg-[color:var(--vy-seva)] transition-[width]"
          style={{ width: `${Math.round(progress * 100)}%` }}
          aria-hidden="true"
        />
      </div>

      <header className="print-hidden sticky top-1 z-50 border-b border-[color:var(--vy-border)] bg-[color:var(--vy-bg)]/95 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>{BRAND_CONTENT.navigation.title}</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {activeSection?.number} {activeSection?.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsCommandOpen(true)}>
              <Search className="mr-1 h-4 w-4" /> Jump
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open section menu">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[90vw] max-w-sm">
                <SheetHeader>
                  <SheetTitle>{BRAND_CONTENT.navigation.title}</SheetTitle>
                  <SheetDescription>{handbookMetadata.lastUpdated}</SheetDescription>
                </SheetHeader>
                <ScrollArea className="mt-4 h-[80dvh] pr-2">
                  <nav aria-label="Mobile section navigation" className="space-y-2">
                    {orderedNavItems.map((item) => {
                      const anchor = navHrefToAnchor(item.href);
                      const section = getSectionForNavItem(item.id);
                      const isActive = anchor === activeSectionId;

                      return (
                        <Button
                          key={item.id}
                          variant={isActive ? "default" : "outline"}
                          className="h-auto w-full justify-start whitespace-normal text-left"
                          onClick={() => smoothScrollToSection(anchor)}
                        >
                          <span>
                            {section?.header.number} {section?.header.title}
                          </span>
                        </Button>
                      );
                    })}
                  </nav>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-10 pt-4 lg:grid-cols-[300px_1fr] lg:px-6 lg:pt-6">
        <aside className="print-hidden hidden lg:block">
          <div className="sticky top-6 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Section navigation</CardTitle>
                <CardDescription>{handbookMetadata.lastUpdated}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                  onClick={() => setIsCommandOpen(true)}
                >
                  <PanelsTopLeft className="mr-2 h-4 w-4" /> Quick jump
                </Button>
                <NavigationMenu orientation="vertical" className="block max-w-full">
                  <ScrollArea className="h-[68dvh] pr-2">
                    <NavigationMenuList className="w-full flex-col items-stretch gap-1 space-x-0">
                      {orderedNavItems.map((item) => {
                        const anchor = navHrefToAnchor(item.href);
                        const section = getSectionForNavItem(item.id);
                        const isActive = activeSectionId === anchor;

                        return (
                          <NavigationMenuItem key={item.id} className="w-full">
                            <HoverCard openDelay={120}>
                              <HoverCardTrigger asChild>
                                <NavigationMenuLink
                                  href={item.href}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    smoothScrollToSection(anchor);
                                  }}
                                  className={`${navigationMenuTriggerStyle()} ${
                                    isActive
                                      ? "bg-[color:var(--vy-seva)] text-[color:var(--vy-bg)] hover:bg-[color:var(--vy-seva)]"
                                      : ""
                                  }`}
                                  aria-current={isActive ? "page" : undefined}
                                >
                                  <span className="font-mono text-xs">{section?.header.number}</span>
                                  <span className="truncate">{section?.header.title ?? item.label}</span>
                                </NavigationMenuLink>
                              </HoverCardTrigger>
                              <HoverCardContent side="right" className="space-y-1">
                                <p className="text-sm font-medium">
                                  {section?.header.number} {section?.header.title}
                                </p>
                                <p className="text-xs text-[color:var(--vy-muted-fg)]">
                                  {sectionSummaryById.get(item.id)}
                                </p>
                              </HoverCardContent>
                            </HoverCard>
                          </NavigationMenuItem>
                        );
                      })}
                    </NavigationMenuList>
                  </ScrollArea>
                </NavigationMenu>
              </CardContent>
            </Card>
          </div>
        </aside>

        <main id="main-content" className="space-y-6 pb-8" aria-label="Brand handbook content">
          <div className="print-hidden hidden lg:block">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>{BRAND_CONTENT.navigation.title}</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {activeSection?.number} {activeSection?.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <Hero
            navigationTitle={BRAND_CONTENT.navigation.title}
            summary={BRAND_CONTENT.sections.philosophy.intro}
            sectionCount={handbookMetadata.sectionCount}
            version={BRAND_CONTENT.sections.footerVersioning.footer.version}
            lastUpdated={handbookMetadata.lastUpdated}
            owner={BRAND_CONTENT.sections.footerVersioning.footer.owner}
            fundamentals={BRAND_CONTENT.fundamentals}
            onOpenQuickJump={() => setIsCommandOpen(true)}
            onOpenLogoReference={() => setIsLogoDialogOpen(true)}
            onCopyCurrentLink={() => copySectionLink(activeSectionId ?? anchorsFromNavigation[0])}
          />

          <Separator className="print:hidden" />

          {orderedSections.map((section) => {
            const navItem = orderedNavItems.find((item) => item.id === section.header.id);
            const anchorId = navItem ? navHrefToAnchor(navItem.href) : section.header.id;
            const hasReference = sectionHasReferenceData(section.header.id);

            return (
              <SectionShell
                key={section.header.id}
                section={section}
                anchorId={anchorId}
                onCopyLink={copySectionLink}
                referencePanel={
                  hasReference ? <ReferencePanel sectionId={section.header.id} /> : undefined
                }
              />
            );
          })}

          <div className="rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-3 text-xs text-[color:var(--vy-muted-fg)]">
            {handbookMetadata.lastUpdated}
          </div>
        </main>
      </div>

      <Button
        variant="default"
        size="icon"
        className="print-hidden fixed bottom-6 right-6 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      <Dialog open={isLogoDialogOpen} onOpenChange={setIsLogoDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{BRAND_CONTENT.sections.logoUsage.header.title}</DialogTitle>
            <DialogDescription>
              {BRAND_CONTENT.sections.logoUsage.header.summary}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Label</TableHead>
                  <TableHead>Background</TableHead>
                  <TableHead>File path</TableHead>
                  <TableHead>Minimum width</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {BRAND_CONTENT.sections.logoUsage.variants.map((variant) => (
                  <TableRow key={variant.id}>
                    <TableCell>{variant.label}</TableCell>
                    <TableCell>{variant.background}</TableCell>
                    <TableCell className="font-mono text-xs">{variant.filePath}</TableCell>
                    <TableCell>{variant.minWidthPx}px</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="grid gap-2">
              {Object.entries(BRAND_CONTENT.placeholders.verticalLogos).map(([key, filePath]) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] px-3 py-2 text-sm"
                >
                  <span>{key}</span>
                  <span className="font-mono text-xs text-[color:var(--vy-muted-fg)]">{filePath}</span>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
        <CommandInput placeholder="Jump to section..." />
        <CommandList>
          <CommandEmpty>No sections found.</CommandEmpty>
          <CommandGroup heading={BRAND_CONTENT.navigation.title}>
            {orderedNavItems.map((item) => {
              const anchor = navHrefToAnchor(item.href);
              const section = getSectionForNavItem(item.id);

              return (
                <CommandItem
                  key={item.id}
                  value={`${section?.header.number ?? ""} ${section?.header.title ?? item.label}`}
                  onSelect={() => {
                    smoothScrollToSection(anchor);
                    setIsCommandOpen(false);
                  }}
                >
                  <MoveUpRight className="mr-2 h-4 w-4" />
                  <span>
                    {section?.header.number} {section?.header.title}
                  </span>
                  <CommandShortcut>{section?.header.number}</CommandShortcut>
                </CommandItem>
              );
            })}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem
              value="copy section link"
              onSelect={() => {
                copySectionLink(activeSectionId ?? anchorsFromNavigation[0]);
                setIsCommandOpen(false);
              }}
            >
              <ClipboardCopy className="mr-2 h-4 w-4" />
              <span>Copy current section link</span>
            </CommandItem>
            <CommandItem
              value="logo usage quick reference"
              onSelect={() => {
                setIsCommandOpen(false);
                setIsLogoDialogOpen(true);
              }}
            >
              <Link2 className="mr-2 h-4 w-4" />
              <span>Logo usage quick reference</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
