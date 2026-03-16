"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

import type { ColorSwatch } from "../../lib/types/brand";
import { sanitizeTokenMentions } from "../../lib/brand-utils";

const ROLE_ORDER = [
  "Neutral",
  "Gold",
  "Seva",
  "Setu",
  "Kaushal",
  "Prabandh",
  "Semantic",
  "Data Visualization",
  "Role Mapping",
  "Compatibility",
] as const;

const ROLE_ANCHORS: Partial<Record<ColorSwatch["role"], string>> = {
  Neutral: "lane-neutrals",
  Gold: "lane-owner-accents",
  Seva: "lane-seva",
  Setu: "lane-setu",
  Kaushal: "lane-kaushal",
  Prabandh: "lane-prabandh",
  Semantic: "lane-semantic",
  "Data Visualization": "lane-data-viz",
  "Role Mapping": "role-mapping-compatibility",
  Compatibility: "lane-compatibility",
};

const ROLE_SUMMARIES: Record<string, string> = {
  Neutral: "Foundation tones for backgrounds, borders, and readable text.",
  Gold: "Master-brand ownership and premium emphasis.",
  Seva: "Seva-specific accent scale when Seva owns the work.",
  Setu: "Setu-specific accent scale for Setu-led surfaces.",
  Kaushal: "Kaushal-specific accent scale for Kaushal-led materials.",
  Prabandh: "Prabandh-specific accent scale for Prabandh-led materials.",
  Semantic: "Meaning-bearing colors for status, alerts, and operational states.",
  "Data Visualization": "Approved chart sequence for reports, dashboards, and repeated comparisons.",
  "Role Mapping": "Implementation aliases mapped to approved UI roles.",
  Compatibility: "Legacy aliases kept for older surfaces and transition work.",
};

function textColorForHex(hex: string) {
  const normalized = hex.replace("#", "");
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  return luminance > 0.63 ? "#0F172A" : "#FFFFFF";
}

function formatSwatchLabel(token: string) {
  return token
    .replace(/^--vy-/, "")
    .split("-")
    .map((part) => {
      if (/^\d+$/.test(part)) {
        return part;
      }

      if (part === "ui") {
        return "UI";
      }

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

function shortenUsage(usage: string) {
  const trimmed = usage.trim().replace(/\.$/, "");
  let cleaned = trimmed
    .replace(/^legacy alias for\s+/i, "Legacy ")
    .replace(/^([A-Za-z]+-\d+)\s+/i, "")
    .replace(/^Data-viz\s+/i, "Chart ")
    .replace(/\s*->\s*/g, " alias to ")
    .replace(/\bon-brand\b/gi, "brand")
    .replace(/\s+/g, " ");

  const words = cleaned.split(" ");
  if (words.length > 12) {
    cleaned = `${words.slice(0, 12).join(" ")}...`;
  }

  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

export function ColorSwatchCatalog({ swatches }: { swatches: readonly ColorSwatch[] }) {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const copiedTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) {
        window.clearTimeout(copiedTimeoutRef.current);
      }
    };
  }, []);

  const groupedSwatches = ROLE_ORDER.map((role) => ({
    role,
    swatches: swatches.filter((swatch) => swatch.role === role),
  })).filter((group) => group.swatches.length > 0);

  const handleCopy = async (swatch: ColorSwatch) => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(swatch.hex);

      if (copiedTimeoutRef.current) {
        window.clearTimeout(copiedTimeoutRef.current);
      }

      setCopiedToken(swatch.token);
      copiedTimeoutRef.current = window.setTimeout(() => {
        setCopiedToken((current) => (current === swatch.token ? null : current));
      }, 1400);
    } catch {
      setCopiedToken(null);
    }
  };

  return (
    <div id="color-swatches" className="space-y-12" aria-label="Color swatches">
      {groupedSwatches.map((group) => (
        <section key={group.role} id={ROLE_ANCHORS[group.role]} className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(group.role)}
            </h2>
            <p className="max-w-2xl text-sm text-[color:var(--vy-muted-fg)]">
              {ROLE_SUMMARIES[group.role]}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {group.swatches.map((swatch) => {
              const foreground = textColorForHex(swatch.hex);
              const isCopied = copiedToken === swatch.token;

              return (
                <button
                  key={swatch.token}
                  type="button"
                  onClick={() => void handleCopy(swatch)}
                  className="relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-2xl border border-black/10 p-5 text-left shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--vy-focus-ring)] focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: swatch.hex,
                    color: foreground,
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
                  }}
                  aria-label={`Copy ${swatch.hex} for ${formatSwatchLabel(swatch.token)}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <p className="text-xl font-semibold leading-tight">
                        {formatSwatchLabel(swatch.token)}
                      </p>
                      <p className="font-mono text-sm font-medium tracking-[0.04em]">
                        {swatch.hex}
                      </p>
                    </div>
                    {isCopied ? (
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/20 bg-black/10 backdrop-blur-sm"
                        aria-hidden="true"
                      >
                        <Check className="h-4 w-4" />
                      </span>
                    ) : null}
                  </div>

                  <p className="max-w-[22ch] text-sm leading-relaxed opacity-90">
                    {sanitizeTokenMentions(shortenUsage(swatch.usage))}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
