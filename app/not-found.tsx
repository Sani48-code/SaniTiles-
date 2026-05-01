import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <span className="text-8xl mb-6">🪨</span>
      <h1 className="text-4xl font-bold text-secondary mb-3">404</h1>
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Page Not Found
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The tile you&apos;re looking for has gone missing. Let&apos;s get you back on
        solid ground.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className={cn(buttonVariants(), "bg-primary hover:bg-primary/90")}
        >
          Go Home
        </Link>
        <Link href="/all-tiles" className={buttonVariants({ variant: "outline" })}>
          Browse Tiles
        </Link>
      </div>
    </div>
  );
}
