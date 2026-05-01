"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Share2, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import type { Tile } from "@/types/tile";

const WISHLIST_KEY = "sanitiles-wishlist";

interface TileDetailActionsProps {
  tile: Tile;
  similarTiles: Tile[];
}

export default function TileDetailActions({ tile, similarTiles }: TileDetailActionsProps) {
  const { data: session } = useSession();
  const [inWishlist, setInWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(WISHLIST_KEY) ?? "[]") as string[];
    setInWishlist(stored.includes(tile.id));
  }, [tile.id]);

  function handleWishlist() {
    if (!session?.user) {
      toast.error("Please sign in to save tiles to your wishlist.");
      return;
    }
    const stored = JSON.parse(localStorage.getItem(WISHLIST_KEY) ?? "[]") as string[];
    let next: string[];
    if (stored.includes(tile.id)) {
      next = stored.filter((id) => id !== tile.id);
      setInWishlist(false);
      toast.success("Removed from wishlist.");
    } else {
      next = [...stored, tile.id];
      setInWishlist(true);
      toast.success("Added to wishlist!");
    }
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(next));
  }

  async function handleShare() {
    const shareData = {
      title: tile.title,
      text: `Check out ${tile.title} on SaniTiles!`,
      url: window.location.href,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled — no toast needed
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    }
  }

  const total = (tile.price * quantity).toFixed(2);

  return (
    <>
      {/* Quantity selector */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm font-medium text-muted-foreground">Quantity (m²)</span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center font-semibold text-sm">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setQuantity((q) => q + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        <span className="text-sm text-muted-foreground ml-auto">
          Total:{" "}
          <span className="font-bold text-primary">
            {tile.currency} ${total}
          </span>
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <Button
          className={`flex-1 transition-colors ${
            inWishlist
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-primary hover:bg-primary/90"
          }`}
          disabled={!tile.inStock}
          onClick={handleWishlist}
        >
          <Heart className={`h-4 w-4 mr-2 ${inWishlist ? "fill-current" : ""}`} />
          {inWishlist ? "✓ In Wishlist" : "Add to Wishlist"}
        </Button>
        <Button variant="ghost" className="gap-2" onClick={handleShare}>
          <Share2 className="h-4 w-4" />
          {shareCopied ? "✓ Copied!" : "Share"}
        </Button>
      </div>

      {/* Similar Tiles */}
      {similarTiles.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Similar Tiles
            </h3>
            <Link
              href={`/all-tiles?category=${tile.category}`}
              className="text-xs text-primary hover:underline"
            >
              View All Similar →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {similarTiles.map((t) => (
              <Link
                key={t.id}
                href={`/tile/${t.id}`}
                className="flex items-center gap-3 rounded-xl border border-border/50 p-3 hover:border-primary/30 hover:bg-muted/50 transition-all"
              >
                <div className="relative h-14 w-14 shrink-0 rounded-lg overflow-hidden bg-muted">
                  <Image src={t.image} alt={t.title} fill className="object-cover" sizes="56px" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium line-clamp-1">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.creator}</p>
                </div>
                <span className="text-sm font-bold text-primary shrink-0">${t.price}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
