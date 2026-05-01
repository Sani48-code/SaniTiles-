export default function TileSkeletonCard() {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-border/50 bg-white">
      {/* Image skeleton — 4/3 aspect ratio */}
      <div className="aspect-4/3 bg-muted animate-pulse" />

      {/* Content skeleton */}
      <div className="flex flex-col p-4 gap-3">
        <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
        <div className="h-3 w-1/2 bg-muted rounded animate-pulse" />
        <div className="flex items-center justify-between mt-1">
          <div className="h-5 w-16 bg-muted rounded animate-pulse" />
          <div className="h-3 w-12 bg-muted rounded animate-pulse" />
        </div>
        <div className="h-7 w-full bg-muted rounded-lg animate-pulse mt-1" />
      </div>
    </div>
  );
}
