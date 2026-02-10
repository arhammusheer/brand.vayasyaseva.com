import type { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  number: string;
  title: string;
  summary: string;
  intent?: string;
  children: ReactNode;
};

export function SectionWrapper({
  id,
  number,
  title,
  summary,
  intent,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-8 py-16 first:pt-8"
    >
      <div className="space-y-6">
        <header className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm font-medium text-[color:var(--vy-muted-fg)]">
              {number}
            </span>
            <h2
              id={`${id}-title`}
              className="text-3xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-4xl"
            >
              {title}
            </h2>
          </div>
          <p className="max-w-prose text-lg text-[color:var(--vy-muted-fg)]">
            {summary}
          </p>
          {intent && (
            <p className="max-w-prose border-l-2 border-[color:var(--vy-gold-ui)] pl-4 text-[color:var(--vy-fg)]">
              {intent}
            </p>
          )}
        </header>
        <div className="space-y-8">{children}</div>
      </div>
    </section>
  );
}
