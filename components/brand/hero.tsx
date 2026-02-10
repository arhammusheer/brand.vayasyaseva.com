import type { BRAND_CONTENT } from "../../src/content/brand";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

type HeroProps = {
  navigationTitle: string;
  summary: string;
  sectionCount: number;
  version: string;
  lastUpdated: string;
  owner: string;
  fundamentals: typeof BRAND_CONTENT.fundamentals;
  onOpenQuickJump: () => void;
  onOpenLogoReference: () => void;
  onCopyCurrentLink: () => void;
};

export function Hero({
  navigationTitle,
  summary,
  sectionCount,
  version,
  lastUpdated,
  owner,
  fundamentals,
  onOpenQuickJump,
  onOpenLogoReference,
  onCopyCurrentLink,
}: HeroProps) {
  return (
    <header className="space-y-5" aria-labelledby="brand-handbook-title">
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{fundamentals.brandName.full}</Badge>
            <Badge variant="outline">{version}</Badge>
            <Badge variant="outline">{lastUpdated}</Badge>
          </div>
          <div className="space-y-2">
            <CardTitle id="brand-handbook-title" className="text-3xl leading-tight md:text-4xl">
              {navigationTitle}
            </CardTitle>
            <CardDescription className="max-w-3xl text-base leading-7">
              {summary}
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={onOpenQuickJump} variant="default" size="sm">
              Quick jump
            </Button>
            <Button onClick={onOpenLogoReference} variant="outline" size="sm">
              Logo usage quick reference
            </Button>
            <Button onClick={onCopyCurrentLink} variant="ghost" size="sm">
              Copy section link
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="verticals">Verticals</TabsTrigger>
              <TabsTrigger value="fonts">Typography tokens</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-3">
              <dl className="grid gap-4 rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-4 text-sm md:grid-cols-3">
                <div>
                  <dt className="text-[color:var(--vy-muted-fg)]">Sections</dt>
                  <dd className="text-lg font-semibold">{sectionCount}</dd>
                </div>
                <div>
                  <dt className="text-[color:var(--vy-muted-fg)]">Owner</dt>
                  <dd className="text-sm font-medium">{owner}</dd>
                </div>
                <div>
                  <dt className="text-[color:var(--vy-muted-fg)]">Parent brand</dt>
                  <dd className="text-sm font-medium">{fundamentals.brandName.parent}</dd>
                </div>
              </dl>
            </TabsContent>
            <TabsContent value="verticals">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {fundamentals.verticals.map((vertical) => (
                  <div
                    key={vertical}
                    className="rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] px-3 py-2 text-sm"
                  >
                    {vertical}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="fonts">
              <div className="grid gap-2 md:grid-cols-3">
                {fundamentals.fontStacks.map((stack) => (
                  <div
                    key={stack.label}
                    className="rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-3"
                  >
                    <p className="text-sm font-semibold">{stack.label}</p>
                    <p className="mt-1 text-xs text-[color:var(--vy-muted-fg)]">{stack.family}</p>
                    <p className="mt-2 text-xs leading-5">{stack.usage}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </header>
  );
}
