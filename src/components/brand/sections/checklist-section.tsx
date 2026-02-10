import { BRAND_CONTENT } from "../../../content/brand";
import { SectionWrapper } from "../section-wrapper";
import { RulesBlock } from "../rules-block";
import { DoDontBlock } from "../do-dont-block";
import { Check, Circle } from "lucide-react";

const section = BRAND_CONTENT.sections.preSendChecklist;

export function ChecklistSection() {
  const checklist = "checklist" in section ? section.checklist : [];

  return (
    <SectionWrapper
      id="15-pre-send-checklist"
      number={section.header.number}
      title={section.header.title}
      summary={section.header.summary}
    >
      <p className="max-w-prose text-lg leading-relaxed text-[color:var(--vy-fg)]">
        {section.intro}
      </p>

      {/* Printable Checklist */}
      {checklist.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
            Pre-Send Checklist
          </h3>
          <div className="rounded-lg border-2 border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-6 print:border print:p-4">
            <div className="mb-4 border-b border-[color:var(--vy-border)] pb-4">
              <p className="text-sm text-[color:var(--vy-muted-fg)]">
                Complete all checks before sending any external brand communication.
              </p>
            </div>
            <div className="space-y-6">
              {checklist.map((group, groupIndex) => (
                <div key={groupIndex} className="space-y-3">
                  <h4 className="font-semibold text-[color:var(--vy-text-strong)]">
                    {group.title}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[color:var(--vy-border)] print:border-2">
                          <Circle className="h-3 w-3 text-transparent" />
                        </span>
                        <span className="text-[color:var(--vy-fg)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="ml-8 text-sm text-[color:var(--vy-muted-fg)]">
                    <span className="font-medium text-[color:var(--vy-success)]">
                      Pass condition:
                    </span>{" "}
                    {group.passCondition}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-[color:var(--vy-border)] pt-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Sender
                  </label>
                  <div className="mt-1 border-b border-[color:var(--vy-border)]" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Date
                  </label>
                  <div className="mt-1 border-b border-[color:var(--vy-border)]" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wide text-[color:var(--vy-muted-fg)]">
                    Approver (if required)
                  </label>
                  <div className="mt-1 border-b border-[color:var(--vy-border)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Reference */}
      <div className="rounded-lg bg-[color:var(--vy-muted)] p-6">
        <h4 className="mb-4 font-semibold text-[color:var(--vy-text-strong)]">
          Quick Reference: Common Blockers
        </h4>
        <ul className="grid gap-2 md:grid-cols-2">
          <li className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
            <span>All measured claims have dated evidence attached</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
            <span>Contractual terms match signed agreement exactly</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
            <span>Logo is original source file, not recolored</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
            <span>All dates use DD MMM YYYY format</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
            <span>Owner and timeline are explicit, not vague</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]" />
            <span>No banned phrases or absolute language</span>
          </li>
        </ul>
      </div>

      <RulesBlock rules={section.rules} />
      <DoDontBlock examples={section.doDont} />
    </SectionWrapper>
  );
}
