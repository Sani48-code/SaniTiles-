import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeroBanner from "@/components/home/HeroBanner";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import FeaturedTiles from "@/components/home/FeaturedTiles";
import TileGrid from "@/components/tiles/TileGrid";
import { tilesData } from "@/lib/tiles-data";

export default function HomePage() {
  const recentTiles = tilesData.slice(0, 8);

  return (
    <>
      <HeroBanner />
      <MarqueeTicker />
      <FeaturedTiles />

      {/* Latest Tiles grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Our Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-1">
                Latest Tiles
              </h2>
            </div>
            <Link
              href="/all-tiles"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hidden md:flex text-primary"
              )}
            >
              Browse All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <TileGrid tiles={recentTiles} />
          <div className="mt-10 text-center md:hidden">
            <Link href="/all-tiles" className={buttonVariants({ variant: "outline" })}>
              View All Tiles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why SaniTiles */}
      <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">SaniTiles</span>?
          </h2>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-12">
            Premium tiles from the world&apos;s finest makers, curated for quality and style.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { icon: "🏛️", title: "Premium Quality", desc: "Every tile hand-selected for durability and aesthetics." },
              { icon: "🎨", title: "Vast Selection", desc: "Ceramic to marble — 12 categories, endless possibilities." },
              { icon: "🚚", title: "Fast Delivery", desc: "Nationwide delivery with expert handling and care." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <span className="text-4xl mb-4">{item.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-secondary-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
