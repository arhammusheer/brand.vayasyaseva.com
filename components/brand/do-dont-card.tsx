import type { DoDontExample } from "../../src/lib/types/brand";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type DoDontCardProps = {
  example: DoDontExample;
};

export function DoDontCard({ example }: DoDontCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{example.topic}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-3">
          <Badge variant="info">Do</Badge>
          <p className="text-sm leading-6">{example.do}</p>
        </div>
        <div className="space-y-2 rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-3">
          <Badge variant="warning">Don&apos;t</Badge>
          <p className="text-sm leading-6">{example.dont}</p>
        </div>
        <p className="text-xs leading-5 text-[color:var(--vy-muted-fg)]">{example.why}</p>
      </CardContent>
    </Card>
  );
}
