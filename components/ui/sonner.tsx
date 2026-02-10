"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="bottom-right"
      richColors={false}
      toastOptions={{
        classNames: {
          toast:
            "group toast rounded-lg border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] text-[color:var(--vy-fg)]",
          description: "text-[color:var(--vy-muted-fg)]",
          actionButton:
            "bg-[color:var(--vy-seva)] text-[color:var(--vy-bg)]",
          cancelButton:
            "bg-[color:var(--vy-muted)] text-[color:var(--vy-fg)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
