import { CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type RulesGridProps = {
  rules: readonly string[];
};

export function RulesGrid({ rules }: RulesGridProps) {
  if (!rules.length) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Rules</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="grid gap-3 md:grid-cols-2">
          {rules.map((rule, index) => (
            <li
              key={`${rule}-${index}`}
              className="flex gap-2 rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-3"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]"
                aria-hidden="true"
              />
              <span className="text-sm leading-6">{rule}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
