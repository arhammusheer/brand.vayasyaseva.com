import { BRAND_CONTENT } from "../../../content/brand";
import { SectionWrapper } from "../section-wrapper";
import { RulesBlock } from "../rules-block";
import { DoDontBlock } from "../do-dont-block";
import { Badge } from "../../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

const section = BRAND_CONTENT.sections.claimsDiscipline;

const claimTypeColors: Record<string, string> = {
  aspirational: "bg-blue-100 text-blue-800 border-blue-200",
  directional: "bg-amber-100 text-amber-800 border-amber-200",
  measured: "bg-green-100 text-green-800 border-green-200",
  contractual: "bg-purple-100 text-purple-800 border-purple-200",
};

export function ClaimsSection() {
  const claimRules = "claimRules" in section ? section.claimRules : [];
  const evidenceTiers = "evidenceTiers" in section ? section.evidenceTiers : [];
  const legalSafePatterns = "legalSafePatterns" in section ? section.legalSafePatterns : [];

  return (
    <SectionWrapper
      id="09-claims-discipline"
      number={section.header.number}
      title={section.header.title}
      summary={section.header.summary}
      intent={"intent" in section ? section.intent : undefined}
    >
      <p className="max-w-prose text-lg leading-relaxed text-[color:var(--vy-fg)]">
        {section.intro}
      </p>

      {/* Claims Matrix */}
      {claimRules.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
            Claim Classification Matrix
          </h3>
          <div className="overflow-x-auto rounded-lg border border-[color:var(--vy-border)]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[140px]">Claim Type</TableHead>
                  <TableHead>Allowed Pattern</TableHead>
                  <TableHead>Required Evidence</TableHead>
                  <TableHead className="text-[color:var(--vy-danger)]">
                    Prohibited
                  </TableHead>
                  <TableHead>Review Trigger</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {claimRules.map((rule) => (
                  <TableRow key={rule.claimType}>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={claimTypeColors[rule.claimType] || ""}
                      >
                        {rule.claimType}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-[color:var(--vy-fg)]">
                      {rule.allowedPattern}
                    </TableCell>
                    <TableCell className="text-[color:var(--vy-muted-fg)]">
                      {rule.requiredEvidence}
                    </TableCell>
                    <TableCell className="text-[color:var(--vy-danger)]">
                      {rule.prohibitedPattern}
                    </TableCell>
                    <TableCell className="text-[color:var(--vy-muted-fg)]">
                      {rule.reviewTrigger}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {/* Evidence Tiers */}
      {evidenceTiers.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
            Evidence Requirements by Tier
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {evidenceTiers.map((tier) => (
              <div
                key={tier.tier}
                className="rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-[color:var(--vy-text-strong)]">
                    {tier.tier}
                  </h4>
                  {tier.expirationDays && (
                    <span className="rounded bg-[color:var(--vy-muted)] px-2 py-0.5 text-xs text-[color:var(--vy-muted-fg)]">
                      Expires: {tier.expirationDays} days
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-[color:var(--vy-muted-fg)]">
                  {tier.description}
                </p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-success)]">
                      Valid Evidence
                    </p>
                    <ul className="mt-1 space-y-1">
                      {tier.validEvidence.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-[color:var(--vy-fg)]"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--vy-danger)]">
                      Invalid Evidence
                    </p>
                    <ul className="mt-1 space-y-1">
                      {tier.invalidEvidence.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-[color:var(--vy-muted-fg)]"
                        >
                          • {item}
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

      {/* Legal Safe Patterns */}
      {legalSafePatterns.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
            Legal-Safe Patterns
          </h3>
          <div className="rounded-lg bg-[color:var(--vy-muted)] p-6">
            <ul className="grid gap-2 md:grid-cols-2">
              {legalSafePatterns.map((pattern, index) => (
                <li
                  key={index}
                  className={`text-sm ${
                    pattern.toLowerCase().startsWith("avoid")
                      ? "text-[color:var(--vy-danger)]"
                      : "text-[color:var(--vy-fg)]"
                  }`}
                >
                  {pattern}
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
