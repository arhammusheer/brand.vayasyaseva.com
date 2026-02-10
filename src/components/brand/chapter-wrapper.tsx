import type { ReactNode } from "react";

type ChapterWrapperProps = {
  id: string;
  number: string;
  title: string;
  description: string;
  accentColor?: string;
  children: ReactNode;
};

const chapterAccents: Record<string, string> = {
  foundation: "border-l-[color:var(--vy-gold-ui)]",
  visual: "border-l-[color:var(--vy-seva)]",
  communication: "border-l-[color:var(--vy-setu)]",
  application: "border-l-[color:var(--vy-kaushal)]",
  appendix: "border-l-[color:var(--vy-prabandh)]",
};

export function ChapterWrapper({
  id,
  number,
  title,
  description,
  accentColor = "foundation",
  children,
}: ChapterWrapperProps) {
  const accent = chapterAccents[accentColor] || chapterAccents.foundation;

  return (
    <div id={id} className="scroll-mt-8">
      {/* Chapter Header */}
      <header
        className={`mb-12 border-l-4 ${accent} bg-[color:var(--vy-muted)] py-8 pl-6 pr-4`}
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm font-medium text-[color:var(--vy-muted-fg)]">
            {number}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-3xl">
            {title}
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-[color:var(--vy-muted-fg)]">
          {description}
        </p>
      </header>

      {/* Chapter Content */}
      <div className="space-y-0">{children}</div>
    </div>
  );
}
