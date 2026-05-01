import { Skeleton } from "@/components/ui/skeleton";

export default function TileDetailLoading() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <Skeleton className="h-5 w-36 mb-8" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Skeleton className="aspect-square rounded-2xl" />
        <div className="space-y-4">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-28" />
          <Skeleton className="h-20 w-full" />
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-12" />
            ))}
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-11 flex-1" />
            <Skeleton className="h-11 flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
