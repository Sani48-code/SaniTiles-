import { NextRequest } from "next/server";
import { tilesData } from "@/lib/tiles-data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search")?.toLowerCase();
  const featured = searchParams.get("featured");

  let tiles = tilesData;

  if (category) {
    tiles = tiles.filter((t) => t.category === category);
  }

  if (featured === "true") {
    tiles = tiles.filter((t) => t.featured);
  }

  if (search) {
    tiles = tiles.filter(
      (t) =>
        t.title.toLowerCase().includes(search) ||
        t.description.toLowerCase().includes(search) ||
        t.material.toLowerCase().includes(search) ||
        t.creator.toLowerCase().includes(search) ||
        t.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  }

  return Response.json(tiles);
}
