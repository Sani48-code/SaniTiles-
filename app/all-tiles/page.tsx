"use client";

import { useEffect, useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TileCard from "@/components/tiles/TileCard";
import TileSkeletonCard from "@/components/tiles/TileSkeletonCard";
import { tilesData } from "@/lib/tiles-data";
import { Tile } from "@/types/tile";

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "ceramic", label: "Ceramic" },
  { value: "porcelain", label: "Porcelain" },
  { value: "marble", label: "Marble" },
  { value: "stone", label: "Stone" },
  { value: "in-stock", label: "In Stock" },
] as const;

type CategoryValue = (typeof CATEGORIES)[number]["value"];

export default function AllTilesPage() {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");

  useEffect(() => {
    setTiles(tilesData);
    setLoading(false);
  }, []);

  const filtered = useMemo(() => {
    let result = tiles;

    if (activeCategory === "in-stock") {
      result = result.filter((t) => t.inStock);
    } else if (activeCategory !== "all") {
      result = result.filter((t) => t.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.material.toLowerCase().includes(q) ||
          t.creator.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return result;
  }, [tiles, searchQuery, activeCategory]);

  return (
    <div>
      {/* Search hero */}
      <div className="bg-white py-12 text-center border-b border-border/50">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          Browse Our Collection
        </h1>
        <div className="relative mx-auto max-w-lg px-4">
          <Search className="absolute left-7 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Search by name, material, style..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 bg-muted/40"
          />
        </div>
      </div>

      {/* Filter chips — scrollable row */}
      <div className="overflow-x-auto border-b border-border/50 bg-white">
        <div className="flex items-center gap-2 px-6 py-4 w-max">
          {CATEGORIES.map(({ value, label }) => {
            const isActive = activeCategory === value;
            if (isActive) {
              return (
                <button
                  key={value}
                  onClick={() => setActiveCategory(value)}
                  className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium text-white shrink-0 transition-colors"
                  style={{ background: "#C1572B" }}
                >
                  {label}
                </button>
              );
            }
            return (
              <Button
                key={value}
                variant="outline"
                size="sm"
                onClick={() => setActiveCategory(value)}
                className="rounded-full shrink-0"
              >
                {label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Results info + grid */}
      <div className="container mx-auto px-4 py-10 md:px-6 max-w-7xl">
        {!loading && (
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filtered.length} tile{filtered.length !== 1 ? "s" : ""}
          </p>
        )}

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <TileSkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-5xl mb-4">🪨</span>
            <h3 className="text-lg font-semibold text-foreground mb-2">No tiles found</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Try a different search term or filter category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
