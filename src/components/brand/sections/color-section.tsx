"use client";

import { useState } from "react";
import { BRAND_CONTENT } from "../../../content/brand";
import { SectionWrapper } from "../section-wrapper";
import { RulesBlock } from "../rules-block";
import { DoDontBlock } from "../do-dont-block";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const section = BRAND_CONTENT.sections.colorPalette;
const colorTokens = BRAND_CONTENT.fundamentals.colorTokens;
const scenarios = BRAND_CONTENT.fundamentals.colorUsageRules;

// Group colors by role
const colorGroups = {
  Base: colorTokens.filter((c) => c.role === "Base"),
  Support: colorTokens.filter((c) => c.role === "Support"),
  Identity: colorTokens.filter((c) => c.role === "Identity"),
  "Vertical Accent": colorTokens.filter((c) => c.role === "Vertical Accent"),
  Semantic: colorTokens.filter((c) => c.role === "Semantic"),
};

export function ColorSection() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = async (hex: string, token: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedToken(token);
      toast.success(`Copied ${hex}`);
      setTimeout(() => setCopiedToken(null), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <SectionWrapper
      id="05-color-palette"
      number={section.header.number}
      title={section.header.title}
      summary={section.header.summary}
    >
      <p className="max-w-prose text-lg leading-relaxed text-[color:var(--vy-fg)]">
        {section.intro}
      </p>

      {/* Color Swatches by Group */}
      <div className="space-y-8">
        {Object.entries(colorGroups).map(([groupName, colors]) => (
          <div key={groupName} className="space-y-4">
            <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
              {groupName}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {colors.map((color) => (
                <button
                  key={color.token}
                  onClick={() => copyToClipboard(color.hex, color.token)}
                  className="group rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-4 text-left transition-shadow hover:shadow-md"
                >
                  <div
                    className="mb-3 flex h-16 items-center justify-center rounded-md"
                    style={{ backgroundColor: color.hex }}
                  >
                    {copiedToken === color.token ? (
                      <Check className="h-5 w-5 text-white drop-shadow" />
                    ) : (
                      <Copy className="h-5 w-5 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100" />
                    )}
                  </div>
                  <p className="font-mono text-xs text-[color:var(--vy-muted-fg)]">
                    {color.token}
                  </p>
                  <p className="font-mono text-sm font-medium text-[color:var(--vy-text-strong)]">
                    {color.hex}
                  </p>
                  <p className="mt-1 text-xs text-[color:var(--vy-muted-fg)]">
                    {color.usage}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Usage Scenarios */}
      {scenarios.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
            Usage Scenarios
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
              >
                <p className="font-medium text-[color:var(--vy-text-strong)]">
                  {scenario.context}
                </p>
                <div className="mt-3 space-y-2">
                  <p className="text-sm">
                    <span className="font-medium text-[color:var(--vy-danger)]">
                      Risk:
                    </span>{" "}
                    <span className="text-[color:var(--vy-muted-fg)]">
                      {scenario.risk}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-[color:var(--vy-success)]">
                      Recommended:
                    </span>{" "}
                    <span className="text-[color:var(--vy-fg)]">
                      {scenario.recommended}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <RulesBlock rules={section.rules} />
      <DoDontBlock examples={section.doDont} />
    </SectionWrapper>
  );
}
