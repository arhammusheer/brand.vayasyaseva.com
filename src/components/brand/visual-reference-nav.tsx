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
    <nav aria-label="Visual reference navigation" className={cn("space-y-6", className)}>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--vy-muted-fg)]">
          Visual Reference
        </p>
        <ul className="space-y-1">
          {VISUAL_REFERENCE_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-3 transition-colors",
                    isActive
                      ? "bg-[color:var(--vy-gold-ui)] text-[color:var(--vy-brand-on-primary)]"
                      : "text-[color:var(--vy-fg)] hover:bg-[color:var(--vy-muted)]",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <p className="text-sm font-medium">{item.label}</p>
                  <p
                    className={cn(
                      "mt-1 text-xs leading-relaxed",
                      isActive
                        ? "text-[color:var(--vy-brand-on-primary)]/80"
                        : "text-[color:var(--vy-muted-fg)]",
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
