"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { TemplateSpec } from "../../src/lib/types/brand";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type TemplateTableProps = {
  templates: readonly TemplateSpec[];
};

export function TemplateTable({ templates }: TemplateTableProps) {
  const [openRows, setOpenRows] = useState<Record<string, boolean>>({});

  if (!templates.length) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Templates</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Purpose</TableHead>
              <TableHead>When to use</TableHead>
              <TableHead>Guardrails</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {templates.map((template) => (
              <TableRow key={template.name}>
                <TableCell className="font-medium">{template.name}</TableCell>
                <TableCell>{template.purpose}</TableCell>
                <TableCell>{template.whenToUse}</TableCell>
                <TableCell>{template.guardrails.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="space-y-3">
          {templates.map((template) => {
            const rowIsOpen = openRows[template.name] ?? false;

            return (
              <Collapsible
                key={`${template.name}-details`}
                open={rowIsOpen}
                onOpenChange={(nextOpen) => {
                  setOpenRows((current) => ({
                    ...current,
                    [template.name]: nextOpen,
                  }));
                }}
              >
                <div className="rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-muted)] p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium">{template.name}</p>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-1">
                        <span>{rowIsOpen ? "Hide detail" : "Show detail"}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            rowIsOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent>
                    <div className="mt-3 space-y-3">
                      <pre className="overflow-x-auto rounded-md border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-3 text-xs leading-5">
                        {template.template}
                      </pre>
                      <ul className="list-disc space-y-1 pl-4 text-xs text-[color:var(--vy-muted-fg)]">
                        {template.guardrails.map((guardrail, index) => (
                          <li key={`${template.name}-guardrail-${index}`}>{guardrail}</li>
                        ))}
                      </ul>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
