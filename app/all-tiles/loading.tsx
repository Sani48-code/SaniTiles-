import TileGrid from "@/components/tiles/TileGrid";

export default function AllTilesLoading() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <div className="mb-8">
        <div className="h-8 w-40 bg-muted animate-pulse rounded mb-2" />
        <div className="h-4 w-24 bg-muted animate-pulse rounded" />
      </div>
      <TileGrid loading skeletonCount={12} />
    </div>
  );
}
