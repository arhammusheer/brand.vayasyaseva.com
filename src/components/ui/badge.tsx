import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--vy-info)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[color:var(--vy-muted)] text-[color:var(--vy-fg)]",
        outline: "border-[color:var(--vy-border)] text-[color:var(--vy-fg)]",
        info:
          "border-transparent bg-[color:var(--vy-info)] text-[color:var(--vy-bg)]",
        warning:
          "border-transparent bg-[color:var(--vy-warning)] text-[color:var(--vy-bg)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
