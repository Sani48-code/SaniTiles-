import type { Metadata } from "next";
import { tilesData } from "@/lib/tiles-data";
import TileGrid from "@/components/tiles/TileGrid";
import { Badge } from "@/components/ui/badge";
import { Tile } from "@/types/tile";

export const metadata: Metadata = {
  title: "All Tiles",
  description: "Browse our complete collection of premium tiles.",
};

const CATEGORIES: Array<{ value: Tile["category"] | "all"; label: string }> = [
  { value: "all", label: "All" },
  { value: "ceramic", label: "Ceramic" },
  { value: "porcelain", label: "Porcelain" },
  { value: "marble", label: "Marble" },
  { value: "stone", label: "Stone" },
];

export default async function AllTilesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string; featured?: string }>;
}) {
  const params = await searchParams;

  let tiles = tilesData;

  if (params.category && params.category !== "all") {
    tiles = tiles.filter((t) => t.category === params.category);
  }
  if (params.featured === "true") {
    tiles = tiles.filter((t) => t.featured);
  }
  if (params.search) {
    const q = params.search.toLowerCase();
    tiles = tiles.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.material.toLowerCase().includes(q) ||
        t.creator.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }

  const activeCategory = params.category ?? "all";

  return (
    <div className="container mx-auto px-4 py-10 md:px-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">
          {params.featured === "true" ? "Featured Tiles" : "All Tiles"}
        </h1>
        <p className="text-muted-foreground">
          {tiles.length} tile{tiles.length !== 1 ? "s" : ""}
          {params.category && params.category !== "all"
            ? ` in ${params.category}`
            : ""}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map(({ value, label }) => (
          <a key={value} href={value === "all" ? "/all-tiles" : `/all-tiles?category=${value}`}>
            <Badge
              variant={activeCategory === value ? "default" : "outline"}
              className={`capitalize cursor-pointer ${
                activeCategory === value
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : ""
              }`}
            >
              {label}
            </Badge>
          </a>
        ))}
      </div>

      <TileGrid tiles={tiles} />
    </div>
  );
}
