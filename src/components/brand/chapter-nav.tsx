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
    <nav aria-label="Chapter navigation" className="space-y-6">
      {navGroups.map((group) => {
        const groupItemIds = group.items as readonly string[];
        const groupItems = navItems.filter((item) =>
          groupItemIds.includes(item.id)
        );

        return (
          <div key={group.id}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--vy-muted-fg)]">
              {group.title}
            </p>
            <ul className="space-y-1">
              {groupItems.map((item) => {
                const anchorId = item.href.replace("#", "");
                const isActive = activeSection === anchorId;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(anchorId)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors",
                        isActive
                          ? "bg-[color:var(--vy-seva)] text-white"
                          : "text-[color:var(--vy-fg)] hover:bg-[color:var(--vy-muted)]"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="shrink-0 font-mono text-xs opacity-60">
                        {item.label.split(" ")[0]}
                      </span>
                      <span className="truncate">
                        {item.label.split(" ").slice(1).join(" ")}
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
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--vy-muted-fg)]">
          Appendix
        </p>
        <ul className="space-y-1">
          {BRAND_CONTENT.appendixItems.map((item) => {
            const anchorId = item.href.replace("#", "");
            const isActive = activeSection === anchorId;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(anchorId)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors",
                    isActive
                      ? "bg-[color:var(--vy-muted)] text-[color:var(--vy-fg)]"
                      : "text-[color:var(--vy-muted-fg)] hover:bg-[color:var(--vy-muted)] hover:text-[color:var(--vy-fg)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="truncate">{item.label}</span>
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
    <div className="sticky top-6 rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-4">
      <h2 className="mb-4 text-sm font-semibold text-[color:var(--vy-text-strong)]">
        Contents
      </h2>
      <ScrollArea className="h-[calc(100vh-160px)]">
        <ChapterNav activeSection={activeSection} onNavigate={onNavigate} />
      </ScrollArea>
    </div>
  );
}
