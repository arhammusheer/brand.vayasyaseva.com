"use client";

import type { ReactNode } from "react";
import { Link2 } from "lucide-react";

import type { BrandSection } from "../../lib/brand-utils";
import { DoDontCard } from "./do-dont-card";
import { RulesGrid } from "./rules-grid";
import { TemplateTable } from "./template-table";
import { Alert, AlertDescription } from "../ui/alert";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type SectionShellProps = {
  section: BrandSection;
  anchorId: string;
  onCopyLink: (anchorId: string) => void;
  referencePanel?: ReactNode;
};

export function SectionShell({
  section,
  anchorId,
  onCopyLink,
  referencePanel,
}: SectionShellProps) {
  const hasRules = Boolean(section.rules?.length);
  const hasDoDont = Boolean(section.doDont?.length);
  const hasTemplates = Boolean(section.templates?.length);
  const hasReference = Boolean(referencePanel);

  const firstTab = hasRules
    ? "rules"
    : hasDoDont
      ? "examples"
      : hasTemplates
        ? "templates"
        : "reference";

  return (
    <section id={anchorId} aria-labelledby={`${anchorId}-title`} className="scroll-mt-24">
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <Badge variant="outline">{section.header.number}</Badge>
              <CardTitle id={`${anchorId}-title`} className="text-2xl leading-tight md:text-3xl">
                {section.header.title}
              </CardTitle>
              <p className="text-sm text-[color:var(--vy-muted-fg)]">{section.header.summary}</p>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="print:hidden"
                  onClick={() => onCopyLink(anchorId)}
                  aria-label={`Copy link for ${section.header.title}`}
                >
                  <Link2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copy section link</TooltipContent>
            </Tooltip>
          </div>
          <Alert>
            <AlertDescription className="leading-7 text-[color:var(--vy-fg)]">
              {section.intro}
            </AlertDescription>
          </Alert>
          <Separator />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={firstTab} className="w-full">
            <TabsList className="mb-2">
              {hasRules ? <TabsTrigger value="rules">Rules</TabsTrigger> : null}
              {hasDoDont ? <TabsTrigger value="examples">Do / Don&apos;t</TabsTrigger> : null}
              {hasTemplates ? <TabsTrigger value="templates">Templates</TabsTrigger> : null}
              {hasReference ? <TabsTrigger value="reference">Reference</TabsTrigger> : null}
            </TabsList>
            {hasRules ? (
              <TabsContent value="rules">
                <RulesGrid rules={section.rules} />
              </TabsContent>
            ) : null}
            {hasDoDont ? (
              <TabsContent value="examples">
                <div className="grid gap-4 md:grid-cols-2">
                  {section.doDont.map((example, index) => (
                    <DoDontCard
                      key={`${section.header.id}-do-dont-${index}`}
                      example={example}
                    />
                  ))}
                </div>
              </TabsContent>
            ) : null}
            {hasTemplates ? (
              <TabsContent value="templates">
                <TemplateTable templates={section.templates} />
              </TabsContent>
            ) : null}
            {hasReference ? (
              <TabsContent value="reference">{referencePanel}</TabsContent>
            ) : null}
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
