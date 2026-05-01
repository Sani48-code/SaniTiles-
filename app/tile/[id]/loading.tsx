export default function TileLoading() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
      {/* Left — image skeleton */}
      <div className="lg:w-1/2 flex flex-col">
        <div className="px-6 pt-5 pb-3">
          <div className="h-4 w-32 bg-muted rounded animate-pulse" />
        </div>
        <div className="flex-1 bg-muted animate-pulse min-h-[50vh]" />
      </div>

      {/* Right — info skeleton */}
      <div className="lg:w-1/2 p-8 space-y-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          {[10, 2, 16, 2, 28].map((w, i) => (
            <div key={i} className="h-3 bg-muted rounded animate-pulse" style={{ width: `${w * 4}px` }} />
          ))}
        </div>

        {/* Title */}
        <div className="h-7 w-3/4 bg-muted rounded animate-pulse" />

        {/* Price + badge */}
        <div className="flex items-end justify-between">
          <div className="h-8 w-28 bg-muted rounded animate-pulse" />
          <div className="h-6 w-16 bg-muted rounded-full animate-pulse" />
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {[60, 80, 70, 55].map((w, i) => (
            <div key={i} className="h-5 rounded-full bg-muted animate-pulse" style={{ width: `${w}px` }} />
          ))}
        </div>

        {/* Details table */}
        <div className="rounded-xl border border-border/50 overflow-hidden divide-y divide-border/50">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center px-4 py-3 gap-4">
              <div className="h-3 w-20 bg-muted rounded animate-pulse" />
              <div className="h-3 w-24 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Description lines */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-muted rounded animate-pulse" />
          <div className="h-3 w-5/6 bg-muted rounded animate-pulse" />
          <div className="h-3 w-4/6 bg-muted rounded animate-pulse" />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          <div className="h-8 flex-1 bg-muted rounded-lg animate-pulse" />
          <div className="h-8 w-20 bg-muted rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}
