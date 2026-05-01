import { Tile } from "@/types/tile";
import TileCard from "./TileCard";
import TileSkeletonCard from "./TileSkeletonCard";

interface TileGridProps {
  tiles?: Tile[];
  loading?: boolean;
  skeletonCount?: number;
}

export default function TileGrid({
  tiles,
  loading = false,
  skeletonCount = 8,
}: TileGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <TileSkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!tiles || tiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-6xl mb-4">🪨</div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No tiles found
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Try adjusting your filters or search terms to discover our full
          collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tiles.map((tile) => (
        <TileCard key={tile.id} tile={tile} />
      ))}
    </div>
  );
}
