"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Tile } from "@/types/tile";

interface TileSwiperProps {
  tiles: Tile[];
}

export default function TileSwiper({ tiles }: TileSwiperProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex shadow-md bg-white"
        )}
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            href={`/tile/${tile.id}`}
            className="group snap-start shrink-0 w-64"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-muted mb-3">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="256px"
              />
              {tile.featured && (
                <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs">
                  Featured
                </Badge>
              )}
            </div>
            <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
              {tile.title}
            </h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-muted-foreground">{tile.creator}</span>
              <span className="text-sm font-bold text-primary">
                {tile.currency} ${tile.price}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <button
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex shadow-md bg-white"
        )}
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
