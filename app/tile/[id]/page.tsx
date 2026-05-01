import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { getTileById } from "@/lib/tiles-data";

interface TilePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: TilePageProps): Promise<Metadata> {
  const { id } = await params;
  const tile = getTileById(id);
  if (!tile) return { title: "Tile Not Found" };
  return { title: tile.title, description: tile.description };
}

export default async function TilePage({ params }: TilePageProps) {
  const { id } = await params;
  const tile = getTileById(id);
  if (!tile) notFound();

  return (
    <div className="container mx-auto px-4 py-10 md:px-6 max-w-7xl">
      <Link
        href="/all-tiles"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to All Tiles
      </Link>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {tile.featured && (
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
          {!tile.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <Badge variant="outline" className="capitalize w-fit mb-3">
            {tile.category}
          </Badge>

          <h1 className="text-3xl font-bold text-secondary mb-1">{tile.title}</h1>
          <p className="text-sm text-muted-foreground mb-4">by {tile.creator}</p>

          <p className="text-3xl font-bold text-primary mb-6">
            {tile.currency} ${tile.price}
            <span className="text-sm font-normal text-muted-foreground ml-1">/ m²</span>
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">{tile.description}</p>

          <Separator className="mb-6" />

          <dl className="grid grid-cols-2 gap-4 text-sm mb-6">
            {[
              ["Material", tile.material],
              ["Dimensions", tile.dimensions],
              ["Category", tile.category],
              ["Creator", tile.creator],
              ["ID", tile.id],
              ["In Stock", tile.inStock ? "Yes" : "No"],
            ].map(([label, value]) => (
              <div key={label as string}>
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium capitalize">{value as string}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-2 mb-8">
            {tile.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            {tile.inStock ? (
              <>
                <button
                  className={cn(
                    buttonVariants(),
                    "flex-1 bg-primary hover:bg-primary/90"
                  )}
                >
                  Request Sample
                </button>
                <button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  Get Quote
                </button>
              </>
            ) : (
              <button
                disabled
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex-1 cursor-not-allowed opacity-50"
                )}
              >
                <Package className="mr-2 h-4 w-4" />
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
