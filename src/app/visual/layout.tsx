import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { VisualReferenceNav } from "../../components/brand/visual-reference-nav";
import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";
import { BRAND_CONTENT } from "../../content/brand";
import { VISUAL_REFERENCE_HUB } from "../../content/brand/visual-reference";

export default function VisualLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[color:var(--vy-bg)] text-[color:var(--vy-fg)]">
      <header className="border-b border-[color:var(--vy-border)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--vy-focus-ring)] focus-visible:ring-offset-2"
              aria-label="Return to the Vayasya brand handbook"
            >
              <Image
                src="/brand/logos/master-logo-light.svg"
                alt="Vayasya logo"
                width={195}
                height={151}
                priority
                className="h-8 w-auto md:h-9"
              />
            </Link>
            <div className="leading-tight">
              <p className="text-sm font-medium text-[color:var(--vy-muted-fg)]">
                Vayasya Brand Handbook
              </p>
              <p className="font-display text-lg font-semibold text-[color:var(--vy-text-strong)]">
                {VISUAL_REFERENCE_HUB.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-[color:var(--vy-muted)] px-3 py-1 font-mono text-xs text-[color:var(--vy-muted-fg)] sm:inline-flex">
              {BRAND_CONTENT.sections.footerVersioning.footer.version}
            </span>
            <Button asChild variant="outline">
              <Link href="/">Back to handbook</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-12 lg:grid-cols-[280px_1fr] lg:px-6">
        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-4">
            <h2 className="mb-4 text-sm font-semibold text-[color:var(--vy-text-strong)]">
              Visual topics
            </h2>
            <ScrollArea className="h-[calc(100vh-160px)]">
              <VisualReferenceNav />
            </ScrollArea>
          </div>
        </aside>

        <main className="min-w-0">
          <div className="mb-8 rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-4 lg:hidden">
            <VisualReferenceNav />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
