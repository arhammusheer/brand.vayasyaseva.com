import type { ReactNode } from "react";
import Image from "next/image";

type StatePageShellProps = {
  code: string;
  title: string;
  description: string;
  actions: ReactNode;
  meta?: ReactNode;
};

export function StatePageShell({
  code,
  title,
  description,
  actions,
  meta,
}: StatePageShellProps) {
  return (
    <main className="min-h-screen bg-[color:var(--vy-bg)] px-4 py-8 text-[color:var(--vy-fg)] sm:px-6">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-2xl place-items-center">
        <div className="w-full rounded-xl border border-[color:var(--vy-border)] bg-[color:var(--vy-bg)] p-6 shadow-sm sm:p-8">
          <div className="mb-6 h-1 w-20 rounded-full bg-[color:var(--vy-gold-ui)]" />
          <Image
            src="/brand/logos/master-logo-light.svg"
            alt="Vayasya logo"
            width={195}
            height={151}
            priority
            className="mb-6 h-10 w-auto"
          />

          <p className="font-mono text-3xl font-semibold tracking-tight text-[color:var(--vy-setu)]">
            {code}
          </p>
          <h1 className="font-display mt-3 text-2xl font-semibold tracking-tight text-[color:var(--vy-text-strong)] sm:text-3xl">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[color:var(--vy-muted-fg)]">
            {description}
          </p>
          {meta ? (
            <div className="mt-3 font-mono text-xs text-[color:var(--vy-muted-fg)]">{meta}</div>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">{actions}</div>
        </div>
      </section>
    </main>
  );
}
