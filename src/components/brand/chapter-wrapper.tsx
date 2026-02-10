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
    <article id={id} className="scroll-mt-8 pt-8 pb-16 first:pt-0">
      {/* Chapter Header */}
      <header
        className={`mb-16 border-l-4 ${accent} bg-[color:var(--vy-muted)] py-10 pl-8 pr-6 rounded-r-lg`}
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-lg font-semibold text-[color:var(--vy-muted-fg)]">
            {number}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] md:text-3xl">
            {title}
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-lg text-[color:var(--vy-muted-fg)]">
          {description}
        </p>
      </header>

      {/* Chapter Content - sections have their own spacing */}
      <div className="space-y-24">{children}</div>
    </article>
  );
}
