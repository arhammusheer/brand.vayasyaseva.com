import type { BrandFooter as BrandFooterData } from "../../src/lib/types/brand";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

type FooterProps = {
  footer: BrandFooterData;
};

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="pb-8" aria-labelledby="footer-versioning">
      <Card>
        <CardHeader>
          <CardTitle id="footer-versioning" className="text-base">
            Version Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{footer.version}</Badge>
            <Badge variant="outline">{footer.effectiveDate}</Badge>
            <Badge variant="outline">{footer.nextReviewDate}</Badge>
          </div>
          <Separator />
          <dl className="grid gap-3 text-sm md:grid-cols-2">
            <div>
              <dt className="text-[color:var(--vy-muted-fg)]">Owner</dt>
              <dd>{footer.owner}</dd>
            </div>
            <div>
              <dt className="text-[color:var(--vy-muted-fg)]">Contact</dt>
              <dd>
                <a
                  href={`mailto:${footer.contact}`}
                  className="underline decoration-[color:var(--vy-border)] underline-offset-2"
                >
                  {footer.contact}
                </a>
              </dd>
            </div>
          </dl>
          <div className="space-y-2">
            <p className="text-sm font-medium">Approval trail</p>
            <ul className="list-disc space-y-1 pl-4 text-sm text-[color:var(--vy-muted-fg)]">
              {footer.approvalTrail.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
