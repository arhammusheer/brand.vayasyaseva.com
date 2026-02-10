import { BRAND_CONTENT } from "../../../content/brand";
import { SectionWrapper } from "../section-wrapper";
import { RulesBlock } from "../rules-block";
import { DoDontBlock } from "../do-dont-block";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

const section = BRAND_CONTENT.sections.typography;
const fontStacks = BRAND_CONTENT.fundamentals.fontStacks;
const typoRules = BRAND_CONTENT.fundamentals.typoRules;

export function TypographySection() {
  return (
    <SectionWrapper
      id="06-typography"
      number={section.header.number}
      title={section.header.title}
      summary={section.header.summary}
    >
      <p className="max-w-prose text-lg leading-relaxed text-[color:var(--vy-fg)]">
        {section.intro}
      </p>

      {/* Type Specimen Ladder */}
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
          Type Hierarchy
        </h3>
        <div className="space-y-6 rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-6">
          {typoRules.hierarchy.map((level) => (
            <div
              key={level.level}
              className="border-b border-[color:var(--vy-border)] pb-4 last:border-0 last:pb-0"
            >
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                  {level.level}
                </span>
                <span className="font-mono text-xs text-[color:var(--vy-muted-fg)]">
                  {level.fontFamily} {level.fontWeight} / {level.fontSize} / {level.lineHeight}
                </span>
              </div>
              <p
                style={{
                  fontFamily: level.fontFamily,
                  fontWeight: level.fontWeight,
                  fontSize: level.fontSize,
                  lineHeight: level.lineHeight,
                }}
                className="text-[color:var(--vy-text-strong)]"
              >
                {level.usage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Font Stacks */}
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
          Font Stacks
        </h3>
        <div className="overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Role</TableHead>
                <TableHead className="w-[140px]">Family</TableHead>
                <TableHead>Fallback Stack</TableHead>
                <TableHead>Usage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fontStacks.map((stack) => (
                <TableRow key={stack.label}>
                  <TableCell className="font-medium">
                    {stack.label}
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {stack.family}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-[color:var(--vy-muted-fg)]">
                    {stack.fallback.join(", ")}
                  </TableCell>
                  <TableCell className="text-[color:var(--vy-muted-fg)]">
                    {stack.usage}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Formatting Rules */}
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
          India-First Formatting
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(typoRules.indiaFirstFormats).map(([key, value]) => (
            <div
              key={key}
              className="rounded-lg bg-[color:var(--vy-muted)] p-4"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
              <p className="mt-1 font-mono text-sm text-[color:var(--vy-text-strong)]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <RulesBlock rules={section.rules} />
      <DoDontBlock examples={section.doDont} />
    </SectionWrapper>
  );
}
