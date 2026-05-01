import TileSkeletonCard from "@/components/tiles/TileSkeletonCard";

export default function AllTilesLoading() {
  return (
    <div>
      {/* Search hero skeleton */}
      <div className="bg-white py-12 border-b border-border/50 flex flex-col items-center gap-6">
        <div className="h-9 w-64 bg-muted rounded-lg animate-pulse" />
        <div className="h-10 w-full max-w-lg mx-4 bg-muted rounded-lg animate-pulse" />
      </div>

      {/* Filter chips skeleton */}
      <div className="border-b border-border/50 bg-white px-6 py-4 flex gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-8 rounded-full bg-muted animate-pulse"
            style={{ width: `${60 + i * 8}px` }}
          />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="container mx-auto px-4 py-10 md:px-6 max-w-7xl">
        <div className="h-4 w-28 bg-muted rounded animate-pulse mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <TileSkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
