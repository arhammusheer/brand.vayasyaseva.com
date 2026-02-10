import { CheckSquare } from "lucide-react";

import type { ChecklistGroup } from "../../src/lib/types/brand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type ChecklistPanelProps = {
  checklist: readonly ChecklistGroup[];
};

export function ChecklistPanel({ checklist }: ChecklistPanelProps) {
  if (!checklist.length) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Pre-send Gate</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="w-full">
          {checklist.map((group) => (
            <AccordionItem key={group.title} value={group.title}>
              <AccordionTrigger>{group.title}</AccordionTrigger>
              <AccordionContent className="space-y-3">
                <ul className="space-y-2">
                  {group.items.map((item, index) => (
                    <li
                      key={`${group.title}-item-${index}`}
                      className="flex gap-2 rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-2"
                    >
                      <CheckSquare
                        className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vy-success)]"
                        aria-hidden="true"
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Badge variant="outline">{group.passCondition}</Badge>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
