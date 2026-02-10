import type { ClaimRule } from "../../lib/types/brand";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type ClaimsMatrixProps = {
  claimRules: readonly ClaimRule[];
};

const claimTypeVariantMap: Record<
  ClaimRule["claimType"],
  "default" | "info" | "warning" | "outline"
> = {
  aspirational: "default",
  directional: "info",
  measured: "warning",
  contractual: "outline",
};

export function ClaimsMatrix({ claimRules }: ClaimsMatrixProps) {
  if (!claimRules.length) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Claim Matrix</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Claim type</TableHead>
              <TableHead>Allowed pattern</TableHead>
              <TableHead>Required evidence</TableHead>
              <TableHead>Prohibited pattern</TableHead>
              <TableHead>Review trigger</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {claimRules.map((rule) => (
              <TableRow key={rule.claimType}>
                <TableCell>
                  <Badge variant={claimTypeVariantMap[rule.claimType]}>
                    {rule.claimType}
                  </Badge>
                </TableCell>
                <TableCell>{rule.allowedPattern}</TableCell>
                <TableCell>{rule.requiredEvidence}</TableCell>
                <TableCell>{rule.prohibitedPattern}</TableCell>
                <TableCell>{rule.reviewTrigger}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
