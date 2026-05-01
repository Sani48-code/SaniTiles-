import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getTileById, getTilesByCategory } from "@/lib/tiles-data";
import TileImageGallery from "@/components/tiles/TileImageGallery";
import TileDetailActions from "@/components/tiles/TileDetailActions";

interface TilePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: TilePageProps): Promise<Metadata> {
  const { id } = await params;
  const tile = getTileById(id);
  if (!tile) return { title: "Tile Not Found" };
  return { title: tile.title, description: tile.description };
}

const TAG_COLORS = ["default", "secondary", "outline"] as const;

export default async function TilePage({ params }: TilePageProps) {
  const { id } = await params;
  const tile = getTileById(id);
  if (!tile) notFound();

  const similarTiles = getTilesByCategory(tile.category)
    .filter((t) => t.id !== tile.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
      {/* LEFT — sticky image column */}
      <div className="lg:w-1/2 lg:sticky lg:top-16 lg:self-start lg:h-[calc(100vh-64px)] flex flex-col">
        {/* Back link */}
        <div className="px-6 pt-5 pb-3 shrink-0">
          <Link
            href="/all-tiles"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
        </div>

        {/* Image gallery fills remaining height */}
        <div className="flex-1 overflow-hidden">
          <TileImageGallery images={[tile.image]} title={tile.title} />
        </div>
      </div>

      {/* RIGHT — info column */}
      <div className="lg:w-1/2 p-8 overflow-y-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Separator orientation="vertical" className="h-3" />
          <Link href="/all-tiles" className="hover:text-primary transition-colors">All Tiles</Link>
          <Separator orientation="vertical" className="h-3" />
          <span className="text-foreground font-medium truncate">{tile.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl font-bold text-secondary mb-4">{tile.title}</h1>

        {/* Price row */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <span
              className="text-[28px] font-bold leading-none"
              style={{ color: "#C1572B" }}
            >
              {tile.currency}&nbsp;${tile.price}
            </span>
            <span className="text-sm text-muted-foreground ml-2">per m²</span>
          </div>
          {tile.inStock ? (
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
              In Stock
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-red-100 text-red-600 hover:bg-red-100">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tile.tags.map((tag, i) => (
            <Badge
              key={tag}
              variant={TAG_COLORS[i % TAG_COLORS.length]}
              className="capitalize text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Details table */}
        <div className="divide-y divide-border/50 mb-6 rounded-xl border border-border/50 overflow-hidden">
          {[
            ["Material", tile.material],
            ["Dimensions", tile.dimensions],
            ["Category", tile.category],
            ["Creator", tile.creator],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between px-4 py-3">
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="text-sm font-semibold text-foreground capitalize text-right">{value}</dd>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-sm mb-6">
          {tile.description}
        </p>

        {/* Client-side actions: quantity, wishlist, share, similar tiles */}
        <TileDetailActions tile={tile} similarTiles={similarTiles} />
      </div>
    </div>
  );
}
