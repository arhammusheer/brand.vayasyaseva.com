"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { VISUAL_REFERENCE_NAV_ITEMS } from "../../content/brand/visual-reference";
import { cn } from "../../lib/utils";

type VisualReferenceNavProps = {
  className?: string;
};

export function VisualReferenceNav({ className }: VisualReferenceNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Visual reference navigation" className={cn("space-y-8", className)}>
      <div>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--vy-brand-text)]">
          Visual Reference
        </p>
        <ul className="space-y-2">
          {VISUAL_REFERENCE_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group block border-l px-3 py-2 transition-colors",
                    isActive
                      ? "border-[color:var(--vy-gold-ui)] text-[color:var(--vy-text-strong)]"
                      : "border-[color:var(--vy-border)] text-[color:var(--vy-fg)] hover:border-[color:var(--vy-gold-300)]",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <p className="text-sm font-medium">{item.label}</p>
                  <p
                    className={cn(
                      "mt-1 max-w-[24ch] text-xs leading-relaxed",
                      isActive
                        ? "text-[color:var(--vy-muted-fg)]"
                        : "text-[color:var(--vy-muted-fg)] group-hover:text-[color:var(--vy-fg)]",
                    )}
                  >
                    {item.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
