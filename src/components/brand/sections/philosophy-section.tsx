import { BRAND_CONTENT } from "../../../content/brand";
import { SectionWrapper } from "../section-wrapper";
import { RulesBlock } from "../rules-block";
import { DoDontBlock } from "../do-dont-block";
import { Check, X } from "lucide-react";

const section = BRAND_CONTENT.sections.philosophy;

export function PhilosophySection() {
  const manifesto = "manifesto" in section ? section.manifesto : null;

  return (
    <SectionWrapper
      id="01-philosophy"
      number={section.header.number}
      title={section.header.title}
      summary={section.header.summary}
      intent={"intent" in section ? section.intent : undefined}
    >
      {/* Manifesto Band */}
      {manifesto && (
        <div className="rounded-lg bg-[color:var(--vy-muted)] p-8 md:p-12">
          <p className="text-center text-2xl font-medium text-[color:var(--vy-text-strong)] md:text-3xl">
            "{manifesto.mission}"
          </p>
        </div>
      )}

      {/* Intro */}
      <p className="max-w-prose text-lg leading-relaxed text-[color:var(--vy-fg)]">
        {section.intro}
      </p>

      {/* Beliefs */}
      {manifesto?.beliefs && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
            What We Believe
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {manifesto.beliefs.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
              >
                <p className="font-semibold text-[color:var(--vy-text-strong)]">
                  {item.belief}
                </p>
                <p className="mt-2 text-[color:var(--vy-muted-fg)]">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stand For / Reject */}
      {manifesto && (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-medium text-[color:var(--vy-success)]">
              <Check className="h-5 w-5" />
              We Stand For
            </h3>
            <ul className="space-y-2">
              {manifesto.standFor.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-md bg-[color:var(--vy-muted)] p-3"
                >
                  <span className="text-[color:var(--vy-fg)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-medium text-[color:var(--vy-danger)]">
              <X className="h-5 w-5" />
              We Reject
            </h3>
            <ul className="space-y-2">
              {manifesto.reject.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-md bg-[color:var(--vy-muted)] p-3"
                >
                  <span className="text-[color:var(--vy-muted-fg)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <RulesBlock rules={section.rules} />
      <DoDontBlock examples={section.doDont} />
    </SectionWrapper>
  );
}
