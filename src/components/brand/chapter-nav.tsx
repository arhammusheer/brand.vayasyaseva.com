"use client";

import { BRAND_CONTENT } from "../../content/brand";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "../../lib/utils";

const navGroups = BRAND_CONTENT.navGroups;
const navItems = BRAND_CONTENT.navItems;

type ChapterNavProps = {
  activeSection: string | null;
  onNavigate: (anchorId: string) => void;
};

export function ChapterNav({ activeSection, onNavigate }: ChapterNavProps) {
  return (
    <nav aria-label="Chapter navigation" className="space-y-8">
      {navGroups.map((group) => {
        const groupItemIds = group.items as readonly string[];
        const groupItems = navItems.filter((item) =>
          groupItemIds.includes(item.id)
        );

        return (
          <div key={group.id}>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--vy-brand-text)]">
              {group.title}
            </p>
            <ul className="space-y-2">
              {groupItems.map((item) => {
                const anchorId = item.href.replace("#", "");
                const isActive = activeSection === anchorId;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(anchorId)}
                      className={cn(
                        "group flex w-full items-start gap-3 border-l px-3 py-1 text-left transition-colors",
                        isActive
                          ? "border-[color:var(--vy-gold-ui)] text-[color:var(--vy-text-strong)]"
                          : "border-[color:var(--vy-border)] text-[color:var(--vy-muted-fg)] hover:border-[color:var(--vy-gold-300)] hover:text-[color:var(--vy-text-strong)]"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span
                        className={cn(
                          "shrink-0 pt-0.5 text-[11px] font-semibold tracking-[0.16em]",
                          isActive
                            ? "text-[color:var(--vy-brand-text)]"
                            : "text-[color:var(--vy-muted-fg)]/70 group-hover:text-[color:var(--vy-brand-text)]",
                        )}
                      >
                        {item.label.split(" ")[0]}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium">
                          {item.label.split(" ").slice(1).join(" ")}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {/* Appendix */}
      <div>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--vy-brand-text)]">
          Appendix
        </p>
        <ul className="space-y-2">
          {BRAND_CONTENT.appendixItems.map((item) => {
            const anchorId = item.href.replace("#", "");
            const isActive = activeSection === anchorId;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(anchorId)}
                  className={cn(
                    "flex w-full items-start gap-3 border-l px-3 py-1 text-left transition-colors",
                    isActive
                      ? "border-[color:var(--vy-gold-ui)] text-[color:var(--vy-text-strong)]"
                      : "border-[color:var(--vy-border)] text-[color:var(--vy-muted-fg)] hover:border-[color:var(--vy-gold-300)] hover:text-[color:var(--vy-text-strong)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="truncate text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export function ChapterNavSidebar({
  activeSection,
  onNavigate,
}: ChapterNavProps) {
  return (
    <div className="sticky top-6 rounded-[1.75rem] border border-[color:var(--vy-border)] bg-[color:rgba(255,255,255,0.9)] p-5 backdrop-blur-sm">
      <div className="mb-5 border-b border-[color:var(--vy-border)] pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--vy-brand-text)]">
          Handbook Rail
        </p>
        <h2 className="mt-2 text-sm font-semibold text-[color:var(--vy-text-strong)]">
          Contents
        </h2>
      </div>
      <ScrollArea className="h-[calc(100vh-160px)]">
        <ChapterNav activeSection={activeSection} onNavigate={onNavigate} />
      </ScrollArea>
    </div>
  );
}
