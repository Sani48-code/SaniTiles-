"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const FILTERS = [
  { label: "Original", style: "none" },
  { label: "Warm", style: "sepia(0.3)" },
  { label: "Cool", style: "hue-rotate(30deg)" },
];

export default function TileImageGallery({ images, title }: { images: string[]; title: string }) {
  const [filterIndex, setFilterIndex] = useState(0);
  const src = images[0];

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="relative flex-1 overflow-hidden bg-muted" style={{ minHeight: "calc(100vh - 64px - 120px)" }}>
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-all duration-300"
          style={{ filter: FILTERS[filterIndex].style }}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      <div className="flex gap-3 px-4 pb-4">
        {FILTERS.map((f, i) => (
          <button
            key={i}
            onClick={() => setFilterIndex(i)}
            title={f.label}
            className={cn(
              "relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all",
              filterIndex === i
                ? "border-primary ring-2 ring-primary ring-offset-1"
                : "border-border hover:border-primary/50"
            )}
          >
            <Image
              src={src}
              alt={`${title} — ${f.label}`}
              fill
              className="object-cover"
              style={{ filter: f.style }}
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
