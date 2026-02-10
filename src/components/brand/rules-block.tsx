import { Check } from "lucide-react";

type RulesBlockProps = {
  rules: readonly string[];
  title?: string;
};

export function RulesBlock({ rules, title = "Rules" }: RulesBlockProps) {
  if (!rules.length) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-[color:var(--vy-text-strong)]">
        {title}
      </h3>
      <ol className="grid gap-3 md:grid-cols-2">
        {rules.map((rule, index) => (
          <li
            key={index}
            className="flex gap-3 rounded-md bg-[color:var(--vy-muted)] p-4"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--vy-success)] text-xs font-medium text-white">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-[color:var(--vy-fg)]">{rule}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
