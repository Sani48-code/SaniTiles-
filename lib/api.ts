import { Tile } from "@/types/tile";

const BASE =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    : "";

export async function getAllTiles(
  category?: string,
  search?: string
): Promise<Tile[]> {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (search) params.set("search", search);

  const qs = params.toString();
  const res = await fetch(`${BASE}/api/tiles${qs ? `?${qs}` : ""}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch tiles");
  return res.json();
}

export async function getTileById(id: string): Promise<Tile> {
  const res = await fetch(`${BASE}/api/tiles/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`Tile "${id}" not found`);
  return res.json();
}

export async function getFeaturedTiles(): Promise<Tile[]> {
  const res = await fetch(`${BASE}/api/tiles?featured=true`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error("Failed to fetch featured tiles");
  return res.json();
}
