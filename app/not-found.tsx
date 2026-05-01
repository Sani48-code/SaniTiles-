import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function DecorativeTileGrid() {
  const opacities = [0.06, 0.04, 0.08, 0.05, 0.07, 0.04, 0.09, 0.05, 0.06];
  return (
    <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 pointer-events-none">
      {opacities.map((opacity, i) => (
        <div
          key={i}
          className="rounded-2xl"
          style={{ background: "#C1572B", opacity }}
        />
      ))}
    </div>
  );
}

function TileIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="28" height="28" x="2" y="2" rx="4" fill="#C1572B" opacity="0.9" />
      <rect width="28" height="28" x="34" y="2" rx="4" fill="#C1572B" opacity="0.65" />
      <rect width="28" height="28" x="2" y="34" rx="4" fill="#C1572B" opacity="0.65" />
      <rect width="28" height="28" x="34" y="34" rx="4" fill="#C1572B" opacity="0.4" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center text-center px-4 overflow-hidden bg-cream">
      <DecorativeTileGrid />

      <div className="relative z-10">
        <TileIcon />

        <p
          className="font-bold leading-none mt-6 mb-2"
          style={{ fontSize: "80px", color: "#1E3A5F" }}
        >
          404
        </p>

        <h1 className="text-xl font-semibold text-foreground mb-3">
          This tile doesn&apos;t exist
        </h1>
        <p className="text-muted-foreground max-w-sm mx-auto mb-10 text-sm leading-relaxed">
          The page you&apos;re looking for has been moved or never existed.
          Let&apos;s get you back to solid ground.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className={cn(buttonVariants(), "bg-primary hover:bg-primary/90")}
          >
            Back to Home
          </Link>
          <Link href="/all-tiles" className={buttonVariants({ variant: "outline" })}>
            Browse All Tiles
          </Link>
        </div>
      </div>
    </div>
  );
}
