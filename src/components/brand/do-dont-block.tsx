import type { DoDontExample } from "../../lib/types/brand";
import { Check, X } from "lucide-react";

type DoDontBlockProps = {
  examples: readonly DoDontExample[];
  title?: string;
};

export function DoDontBlock({ examples, title = "Examples" }: DoDontBlockProps) {
  if (!examples.length) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
        {title}
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        {examples.map((example, index) => (
          <div
            key={index}
            className="space-y-4 rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
          >
            <p className="font-medium text-[color:var(--vy-text-strong)]">
              {example.topic}
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--vy-success)]">
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                <p className="text-[color:var(--vy-fg)]">{example.do}</p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--vy-danger)]">
                  <X className="h-3.5 w-3.5 text-white" />
                </span>
                <p className="text-[color:var(--vy-muted-fg)]">{example.dont}</p>
              </div>
            </div>
            <p className="border-t border-[color:var(--vy-border)] pt-3 text-sm text-[color:var(--vy-muted-fg)]">
              {example.why}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
