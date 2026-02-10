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

const section = BRAND_CONTENT.sections.voiceTone;

export function VoiceToneSection() {
  const personas = "personas" in section ? section.personas : [];
  const terminology = "terminology" in section ? section.terminology : [];
  const bannedPhrases = "bannedPhrases" in section ? section.bannedPhrases : [];

  return (
    <SectionWrapper
      id="08-voice-tone"
      number={section.header.number}
      title={section.header.title}
      summary={section.header.summary}
      intent={"intent" in section ? section.intent : undefined}
    >
      <p className="max-w-prose text-lg leading-relaxed text-[color:var(--vy-fg)]">
        {section.intro}
      </p>

      {/* Voice Personas */}
      {personas.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
            Voice Traits
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {personas.map((persona) => (
              <div
                key={persona.trait}
                className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
              >
                <h4 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                  {persona.trait}
                </h4>
                <p className="mt-1 text-[color:var(--vy-muted-fg)]">
                  {persona.description}
                </p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                      Sounds like
                    </p>
                    <ul className="mt-1 space-y-1">
                      {persona.soundsLike.map((example, index) => (
                        <li
                          key={index}
                          className="text-sm text-[color:var(--vy-fg)]"
                        >
                          "{example}"
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                      Avoid
                    </p>
                    <ul className="mt-1 flex flex-wrap gap-2">
                      {persona.avoid.map((phrase, index) => (
                        <li
                          key={index}
                          className="rounded bg-[color:var(--vy-muted)] px-2 py-0.5 text-sm text-[color:var(--vy-muted-fg)]"
                        >
                          {phrase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Terminology Dictionary */}
      {terminology.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
            Terminology
          </h3>
          <div className="overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[140px]">Instead of</TableHead>
                  <TableHead className="w-[200px]">Use</TableHead>
                  <TableHead className="w-[160px]">Avoid</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {terminology.map((entry) => (
                  <TableRow key={entry.term}>
                    <TableCell className="font-medium">
                      {entry.term}
                    </TableCell>
                    <TableCell className="text-[color:var(--vy-success)]">
                      {entry.approved}
                    </TableCell>
                    <TableCell className="text-[color:var(--vy-danger)]">
                      {entry.avoid.join(", ")}
                    </TableCell>
                    <TableCell className="text-[color:var(--vy-muted-fg)]">
                      {entry.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {/* Banned Phrases */}
      {bannedPhrases.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
            Banned Phrases
          </h3>
          <div className="overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Phrase</TableHead>
                  <TableHead className="w-[300px]">Why to avoid</TableHead>
                  <TableHead>Use instead</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bannedPhrases.map((entry) => (
                  <TableRow key={entry.phrase}>
                    <TableCell className="font-medium text-[color:var(--vy-danger)]">
                      {entry.phrase}
                    </TableCell>
                    <TableCell className="text-[color:var(--vy-muted-fg)]">
                      {entry.reason}
                    </TableCell>
                    <TableCell className="text-[color:var(--vy-success)]">
                      {entry.alternative}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      <RulesBlock rules={section.rules} />
      <DoDontBlock examples={section.doDont} />
    </SectionWrapper>
  );
}
