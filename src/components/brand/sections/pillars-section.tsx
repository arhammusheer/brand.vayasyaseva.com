import { BRAND_CONTENT } from "../../../content/brand";
import { SectionWrapper } from "../section-wrapper";
import { RulesBlock } from "../rules-block";
import { DoDontBlock } from "../do-dont-block";
import { Check, AlertTriangle } from "lucide-react";

const section = BRAND_CONTENT.sections.operatingPillars;

export function PillarsSection() {
  const pillars = "pillars" in section ? section.pillars : [];

  return (
    <SectionWrapper
      id="03-operating-pillars"
      number={section.header.number}
      title={section.header.title}
      summary={section.header.summary}
    >
      <p className="max-w-prose text-lg leading-relaxed text-[color:var(--vy-fg)]">
        {section.intro}
      </p>

      {/* Pillar Lanes */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <div
            key={pillar.name}
            className="flex flex-col rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)]"
          >
            <div className="border-b border-[color:var(--vy-border)] p-4">
              <h4 className="text-xl font-semibold text-[color:var(--vy-text-strong)]">
                {pillar.name}
              </h4>
              <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                {pillar.definition}
              </p>
            </div>
            <div className="flex-1 space-y-4 p-4">
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                  <Check className="h-3.5 w-3.5" />
                  Behaviors
                </p>
                <ul className="space-y-1.5">
                  {pillar.behaviors.map((behavior, index) => (
                    <li
                      key={index}
                      className="text-sm text-[color:var(--vy-fg)]"
                    >
                      {behavior}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Red Flags
                </p>
                <ul className="space-y-1.5">
                  {pillar.redFlags.map((flag, index) => (
                    <li
                      key={index}
                      className="text-sm text-[color:var(--vy-muted-fg)]"
                    >
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <RulesBlock rules={section.rules} />
      <DoDontBlock examples={section.doDont} />
    </SectionWrapper>
  );
}
