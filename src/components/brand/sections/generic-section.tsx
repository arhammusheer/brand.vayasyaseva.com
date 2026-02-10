import { SectionWrapper } from "../section-wrapper";
import { RulesBlock } from "../rules-block";
import { DoDontBlock } from "../do-dont-block";
import type { DoDontExample, SectionHeader } from "../../../lib/types/brand";

type GenericSectionProps = {
  anchorId: string;
  header: SectionHeader;
  intent?: string;
  intro: string;
  rules: readonly string[];
  doDont: readonly DoDontExample[];
  children?: React.ReactNode;
};

export function GenericSection({
  anchorId,
  header,
  intent,
  intro,
  rules,
  doDont,
  children,
}: GenericSectionProps) {
  return (
    <SectionWrapper
      id={anchorId}
      number={header.number}
      title={header.title}
      summary={header.summary}
      intent={intent}
    >
      <p className="max-w-prose text-lg leading-relaxed text-[color:var(--vy-fg)]">
        {intro}
      </p>

      {children}

      <RulesBlock rules={rules} />
      <DoDontBlock examples={doDont} />
    </SectionWrapper>
  );
}
