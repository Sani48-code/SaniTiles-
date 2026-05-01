"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TileImageGalleryProps {
  images: string[];
  title: string;
}

export default function TileImageGallery({ images, title }: TileImageGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative w-full flex-1 overflow-hidden bg-muted" style={{ minHeight: "calc(100vh - 64px - 100px)" }}>
        <Image
          src={images[selected]}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnail row */}
      {images.length > 1 && (
        <div className="flex gap-2 px-2 pb-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                "relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                selected === i
                  ? "border-primary ring-2 ring-primary ring-offset-1"
                  : "border-border hover:border-primary/50"
              )}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={src} alt={`${title} thumbnail ${i + 1}`} fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
