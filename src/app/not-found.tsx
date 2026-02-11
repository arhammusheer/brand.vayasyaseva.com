import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import { StatePageShell } from "@/components/brand/state-page-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <StatePageShell
      code="404"
      title="Page not found"
      description="The page you requested does not exist."
      actions={
        <>
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#main-content">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              Chapters
            </Link>
          </Button>
        </>
      }
    />
  );
}
