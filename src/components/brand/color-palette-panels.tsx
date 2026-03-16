import { AlertTriangle, ArrowRight, BarChart3, Flag, Layers3, Palette } from "lucide-react";

import { sanitizeTokenMentions } from "../../lib/brand-utils";
import { cn } from "../../lib/utils";
import type {
  ColorLanePreview,
  ColorMisuseExample,
  ColorNeed,
  ColorQuickAction,
  ColorSwatch,
} from "../../lib/types/brand";
import { Button } from "../ui/button";

const actionIcons = {
  owner: Flag,
  semantic: AlertTriangle,
  chart: BarChart3,
  catalog: Palette,
  neutral: Layers3,
  alias: Layers3,
} as const;

function roleLabelFromToken(token: string) {
  return token
    .replace(/^--vy-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function textColorForHex(hex: string) {
  const normalized = hex.replace("#", "");
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  return luminance > 0.63 ? "#0F172A" : "#FFFFFF";
}

function ColorLaneSurface({ lane }: { lane: ColorLanePreview }) {
  if (lane.previewKind === "neutrals") {
    const [canvas, panel, border, secondaryText, primaryText] = lane.swatches;

    return (
      <div
        className="rounded-xl border border-[color:var(--vy-border)] p-4"
        style={{ backgroundColor: canvas.hex }}
      >
        <div
          className="rounded-lg border p-4"
          style={{ backgroundColor: panel.hex, borderColor: border.hex }}
        >
          <div className="h-2.5 w-28 rounded-full" style={{ backgroundColor: primaryText.hex }} />
          <div className="mt-3 h-2 w-20 rounded-full" style={{ backgroundColor: secondaryText.hex }} />
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {lane.swatches.slice(0, 3).map((swatch) => (
              <div key={swatch.token} className="h-8 rounded-md border border-white/50" style={{ backgroundColor: swatch.hex }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (lane.previewKind === "owner-accents") {
    return (
      <div className="grid gap-3 sm:grid-cols-5">
        {lane.swatches.map((swatch) => (
          <div
            key={swatch.token}
            className="flex h-16 items-end rounded-lg border border-[color:var(--vy-border)] p-2"
            style={{ backgroundColor: swatch.hex, color: textColorForHex(swatch.hex) }}
          >
            <span className="text-[11px] font-semibold tracking-wide">
              {roleLabelFromToken(swatch.token).split(" ")[1] ?? roleLabelFromToken(swatch.token)}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (lane.previewKind === "semantic") {
    return (
      <div className="flex flex-wrap gap-2">
        {lane.swatches.map((swatch) => (
          <span
            key={swatch.token}
            className="inline-flex rounded-full px-3 py-1.5 text-xs font-semibold"
            style={{ backgroundColor: swatch.hex, color: textColorForHex(swatch.hex) }}
          >
            {roleLabelFromToken(swatch.token).replace("Vy ", "")}
          </span>
        ))}
      </div>
    );
  }

  if (lane.previewKind === "data-viz") {
    const heights = [52, 76, 44, 64, 36, 58];

    return (
      <div className="flex h-32 items-end gap-2 rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-4">
        {lane.swatches.map((swatch, index) => (
          <div
            key={swatch.token}
            className="flex-1 rounded-t-md"
            style={{ backgroundColor: swatch.hex, height: `${heights[index % heights.length]}%` }}
          />
        ))}
      </div>
    );
  }

  if (lane.previewKind === "role-mapping") {
    const [canvas, border, text, brand, focus] = lane.swatches;

    return (
      <div
        className="rounded-xl border p-4"
        style={{ backgroundColor: canvas.hex, borderColor: border.hex }}
      >
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-24 rounded-full" style={{ backgroundColor: text.hex }} />
          <div
            className="rounded-full px-3 py-1 text-[11px] font-semibold"
            style={{ backgroundColor: brand.hex, color: textColorForHex(brand.hex) }}
          >
            Primary
          </div>
        </div>
        <div className="mt-4 rounded-lg border p-3" style={{ borderColor: border.hex }}>
          <div className="h-2 w-20 rounded-full" style={{ backgroundColor: text.hex, opacity: 0.8 }} />
          <div className="mt-3 h-9 rounded-md border-2" style={{ borderColor: focus.hex }} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-5">
      {lane.swatches.map((swatch) => (
        <div
          key={swatch.token}
          className="h-16 rounded-lg border border-[color:var(--vy-border)]"
          style={{ backgroundColor: swatch.hex }}
        />
      ))}
    </div>
  );
}

function ColorMisuseSurface({ example }: { example: ColorMisuseExample }) {
  const baseFrame =
    "relative overflow-hidden rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-4";

  switch (example.previewKind) {
    case "mixed-owners":
      return (
        <div className={cn(baseFrame, "grid grid-cols-5 gap-1")}>
          {["#DAA236", "#BA511A", "#445FA8", "#2E7A58", "#556073"].map((hex) => (
            <div key={hex} className="h-20 rounded-md" style={{ backgroundColor: hex }} />
          ))}
        </div>
      );
    case "semantic-decoration":
      return (
        <div className={baseFrame}>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Promo", hex: "#1F7A4D" },
              { label: "Highlight", hex: "#A45E0C" },
              { label: "Feature", hex: "#B42318" },
            ].map((item) => (
              <span
                key={item.label}
                className="rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ backgroundColor: item.hex, color: textColorForHex(item.hex) }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      );
    case "low-contrast":
      return (
        <div className={baseFrame} style={{ backgroundColor: "#DAA236" }}>
          <p className="text-sm font-medium" style={{ color: "#FDF1CF" }}>
            Accent surface with weak text contrast
          </p>
        </div>
      );
    case "local-color":
      return (
        <div
          className={cn(
            baseFrame,
            "bg-[linear-gradient(135deg,#14B8A6_0%,#0EA5E9_33%,#EC4899_66%,#F97316_100%)]",
          )}
        />
      );
  }
}

export function ColorQuickActionsGrid({
  actions,
  title,
  description,
}: {
  actions: readonly ColorQuickAction[];
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
        {description ? (
          <p className="mt-2 max-w-3xl text-sm text-[color:var(--vy-muted-fg)]">
            {sanitizeTokenMentions(description)}
          </p>
        ) : null}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = actionIcons[action.icon];

          return (
            <article
              key={action.id}
              className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-lg bg-[color:var(--vy-bg)] p-2 text-[color:var(--vy-text-strong)]">
                  <Icon className="h-5 w-5" />
                </span>
                {action.badge ? (
                  <span className="rounded-full bg-[color:var(--vy-bg)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--vy-muted-fg)]">
                    {sanitizeTokenMentions(action.badge)}
                  </span>
                ) : null}
              </div>
              <h5 className="mt-4 text-base font-semibold text-[color:var(--vy-text-strong)]">
                {sanitizeTokenMentions(action.title)}
              </h5>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
                {sanitizeTokenMentions(action.description)}
              </p>
              <Button asChild variant="outline" className="mt-5 w-full justify-between">
                <a href={action.href}>
                  {sanitizeTokenMentions(action.ctaLabel)}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function ColorRootChooser({
  lanes,
  title = "Quick chooser",
}: {
  lanes: readonly ColorLanePreview[];
  title?: string;
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-4 xl:grid-cols-3">
        {lanes.map((lane) => (
          <article
            key={lane.id}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h5 className="text-base font-semibold text-[color:var(--vy-text-strong)]">
                {sanitizeTokenMentions(lane.title)}
              </h5>
              {lane.badge ? (
                <span className="rounded-full bg-[color:var(--vy-bg)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(lane.badge)}
                </span>
              ) : null}
            </div>
            <div className="mt-4">
              <ColorLaneSurface lane={lane} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--vy-fg)]">
              {sanitizeTokenMentions(lane.summary)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ColorLanePreviewGrid({
  lanes,
  title,
}: {
  lanes: readonly ColorLanePreview[];
  title: string;
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-6 xl:grid-cols-3">
        {lanes.map((lane) => (
          <article
            key={lane.id}
            id={lane.id}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h5 className="text-base font-semibold text-[color:var(--vy-text-strong)]">
                {sanitizeTokenMentions(lane.title)}
              </h5>
              {lane.badge ? (
                <span className="rounded-full bg-[color:var(--vy-bg)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(lane.badge)}
                </span>
              ) : null}
            </div>
            <div className="mt-5">
              <ColorLaneSurface lane={lane} />
            </div>
            <p className="mt-5 text-sm font-medium text-[color:var(--vy-fg)]">
              {sanitizeTokenMentions(lane.summary)}
            </p>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              Hard rule: {sanitizeTokenMentions(lane.hardRule)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ColorCommonNeedsGrid({
  items,
  title = "Common needs",
}: {
  items: readonly ColorNeed[];
  title?: string;
}) {
  if (!items.length) return null;

  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.need}
            className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
          >
            <p className="font-medium text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(item.need)}
            </p>
            <p className="mt-3 text-sm font-medium text-[color:var(--vy-fg)]">
              Use: {sanitizeTokenMentions(item.useThis)}
            </p>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(item.note)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ColorMisuseGrid({
  examples,
  title,
}: {
  examples: readonly ColorMisuseExample[];
  title: string;
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {examples.map((example) => (
          <article
            key={example.id}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-4"
          >
            <ColorMisuseSurface example={example} />
            <h5 className="mt-4 text-sm font-semibold text-[color:var(--vy-text-strong)]">
              {sanitizeTokenMentions(example.title)}
            </h5>
            <p className="mt-2 text-sm text-[color:var(--vy-muted-fg)]">
              {sanitizeTokenMentions(example.issue)}
            </p>
            <p className="mt-3 text-sm text-[color:var(--vy-fg)]">
              Use instead: {sanitizeTokenMentions(example.correction)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ColorStaticSwatchGrid({
  title,
  swatches,
}: {
  title: string;
  swatches: readonly ColorSwatch[];
}) {
  if (!swatches.length) return null;

  return (
    <div className="space-y-5">
      <h4 className="text-lg font-medium text-[color:var(--vy-text-strong)]">{title}</h4>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {swatches.map((swatch) => (
          <article
            key={swatch.token}
            className="rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-5"
          >
            <div className="flex items-start gap-4">
              <div
                className="h-16 w-16 shrink-0 rounded-lg border border-[color:var(--vy-border)]"
                style={{ backgroundColor: swatch.hex }}
              />
              <div className="min-w-0">
                <p className="font-mono text-xs text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(swatch.token)}
                </p>
                <p className="mt-1 font-mono text-sm font-medium text-[color:var(--vy-text-strong)]">
                  {swatch.hex}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--vy-muted-fg)]">
                  {sanitizeTokenMentions(swatch.usage)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
