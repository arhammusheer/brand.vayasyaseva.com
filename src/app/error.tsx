"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RotateCcw } from "lucide-react";

import { StatePageShell } from "@/components/brand/state-page-shell";
import { Button } from "@/components/ui/button";

type AppErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: AppErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatePageShell
      code="500"
      title="Something went wrong"
      description="An unexpected error occurred while loading this page."
      meta={
        error.digest ? <>Ref: {error.digest}</> : null
      }
      actions={
        <>
          <Button onClick={reset}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Retry
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              Home
            </Link>
          </Button>
        </>
      }
    />
  );
}
