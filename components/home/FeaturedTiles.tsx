import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import TileSwiper from "@/components/tiles/TileSwiper";
import { getFeaturedTiles } from "@/lib/tiles-data";

export default function FeaturedTiles() {
  const featuredTiles = getFeaturedTiles();

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Handpicked for You
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-1">
              Featured Tiles
            </h2>
          </div>
          <Link
            href="/all-tiles"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden md:flex text-primary"
            )}
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <TileSwiper tiles={featuredTiles} />

        <div className="mt-8 text-center md:hidden">
          <Link href="/all-tiles" className={buttonVariants({ variant: "outline" })}>
            View All Tiles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
