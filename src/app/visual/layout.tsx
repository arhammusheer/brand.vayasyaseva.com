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
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(252,252,253,1)_0%,rgba(255,255,255,1)_22%,rgba(252,252,253,1)_100%)] text-[color:var(--vy-fg)]">
      <header className="border-b border-[color:var(--vy-border)] bg-[color:rgba(255,255,255,0.88)] backdrop-blur-sm">
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--vy-brand-text)]">
                Vayasya Brand Handbook
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-[color:var(--vy-text-strong)]">
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

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-10 lg:grid-cols-[260px_1fr] lg:px-6 lg:pt-14">
        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-[1.75rem] border border-[color:var(--vy-border)] bg-[color:rgba(255,255,255,0.84)] p-5 backdrop-blur-sm">
            <div className="mb-5 border-b border-[color:var(--vy-border)] pb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--vy-brand-text)]">
                Specialist Rail
              </p>
              <h2 className="mt-2 text-sm font-semibold text-[color:var(--vy-text-strong)]">
                Visual topics
              </h2>
            </div>
            <ScrollArea className="h-[calc(100vh-160px)]">
              <VisualReferenceNav />
            </ScrollArea>
          </div>
        </aside>

        <main className="min-w-0">
          <div className="mb-8 rounded-[1.5rem] border border-[color:var(--vy-border)] bg-[color:rgba(255,255,255,0.88)] p-5 lg:hidden">
            <VisualReferenceNav />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
