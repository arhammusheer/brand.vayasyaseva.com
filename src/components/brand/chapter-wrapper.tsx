import type { ReactNode } from "react";

type ChapterWrapperProps = {
  id: string;
  number: string;
  title: string;
  description: string;
  accentColor?: string;
  children: ReactNode;
};

export function ChapterWrapper({
  id,
  number,
  title,
  description,
  accentColor = "foundation",
  children,
}: ChapterWrapperProps) {
  void accentColor;

  return (
    <article id={id} className="scroll-mt-8 pt-14 pb-18 first:pt-0">
      <header className="relative isolate mb-14 overflow-hidden border-y border-[color:var(--vy-border)] bg-[linear-gradient(135deg,rgba(255,255,255,1)_0%,rgba(253,241,207,0.42)_48%,rgba(255,255,255,1)_100%)] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div
          className="absolute -right-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[color:var(--vy-gold-100)] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(218,162,54,0.82),transparent)]"
          aria-hidden="true"
        />
        <div className="relative grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-end">
          <div className="flex items-start gap-4">
            <span className="font-display text-6xl font-semibold leading-none text-[color:var(--vy-gold-500)] sm:text-7xl">
              {number}
            </span>
            <div className="mt-2 h-16 w-px bg-[color:var(--vy-border)]" aria-hidden="true" />
          </div>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--vy-brand-text)]">
              Chapter Gateway
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--vy-muted-fg)] md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </header>

      <div className="space-y-24">{children}</div>
    </article>
  );
}
