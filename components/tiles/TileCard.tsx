import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tile } from "@/types/tile";

interface TileCardProps {
  tile: Tile;
}

export default function TileCard({ tile }: TileCardProps) {
  return (
    <div
      className="group flex flex-col rounded-2xl overflow-hidden border border-border/50 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <Link href={`/tile/${tile.id}`} className="relative aspect-4/3 overflow-hidden bg-muted block">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Out of stock overlay — top-left */}
        {!tile.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              Out of Stock
            </Badge>
          </div>
        )}

        {/* Category badge — top-right */}
        <Badge
          className="absolute top-3 right-3 capitalize text-xs font-semibold"
          style={{ background: "#C1572B", color: "#fff" }}
        >
          {tile.category}
        </Badge>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <Link href={`/tile/${tile.id}`}>
          <h3 className="font-semibold text-base leading-snug line-clamp-1 group-hover:text-primary transition-colors mb-1">
            {tile.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-1 mb-3">
          {tile.creator}
        </p>

        {/* Price row */}
        <div className="flex items-baseline justify-between mb-3 mt-auto">
          <span className="text-lg font-bold text-primary">
            {tile.currency}&nbsp;${tile.price}
          </span>
          <span className="text-sm text-muted-foreground">per m²</span>
        </div>

        {/* View Details button */}
        <Link
          href={`/tile/${tile.id}`}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full justify-center h-9 text-sm border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
          )}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
