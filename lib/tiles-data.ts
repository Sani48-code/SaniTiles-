import { Tile } from "@/types/tile";

export const tilesData: Tile[] = [
  // ── Ceramic (3) ──────────────────────────────────────────────
  {
    id: "c-001",
    title: "Terracotta Sun Ceramic",
    description:
      "Handcrafted ceramic tile with a warm sun-baked terracotta glaze. Ideal for kitchen backsplashes and rustic feature walls.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    category: "ceramic",
    price: 42,
    currency: "CAD",
    dimensions: "10 × 10 cm",
    material: "Glazed ceramic",
    inStock: true,
    creator: "Studio Terra",
    tags: ["rustic", "warm", "kitchen", "backsplash"],
    featured: true,
  },
  {
    id: "c-002",
    title: "Chalk White Metro",
    description:
      "Classic subway-format ceramic in chalk white. Timeless bevelled profile suits both modern and traditional interiors.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    category: "ceramic",
    price: 58,
    currency: "CAD",
    dimensions: "10 × 20 cm",
    material: "Ceramic",
    inStock: true,
    creator: "SaniCraft Originals",
    tags: ["subway", "white", "classic", "bathroom"],
    featured: false,
  },
  {
    id: "c-003",
    title: "Sage Geo Pattern",
    description:
      "Geometric patterned ceramic in muted sage green. Adds botanical warmth to any living space.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600",
    category: "ceramic",
    price: 38,
    currency: "CAD",
    dimensions: "20 × 20 cm",
    material: "Patterned ceramic",
    inStock: true,
    creator: "Geo Tiles",
    tags: ["geometric", "sage", "green", "decorative"],
    featured: false,
  },

  // ── Porcelain (3) ────────────────────────────────────────────
  {
    id: "p-001",
    title: "Nordic Frost Porcelain",
    description:
      "Large-format matte porcelain with a cool Nordic grey tone. Engineered for both floor and wall applications.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600",
    category: "porcelain",
    price: 72,
    currency: "CAD",
    dimensions: "60 × 60 cm",
    material: "Matte porcelain",
    inStock: true,
    creator: "Nordic Tile Co",
    tags: ["grey", "matte", "large-format", "floor"],
    featured: true,
  },
  {
    id: "p-002",
    title: "Concrete Loft Porcelain",
    description:
      "Industrial concrete-effect porcelain in ash grey. Brings authentic loft character to modern interiors.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
    category: "porcelain",
    price: 65,
    currency: "CAD",
    dimensions: "80 × 80 cm",
    material: "Porcelain",
    inStock: true,
    creator: "SaniCraft Originals",
    tags: ["concrete", "industrial", "loft", "grey"],
    featured: false,
  },
  {
    id: "p-003",
    title: "Ivory Wood-Look Plank",
    description:
      "Realistic oak wood-look porcelain plank. All the warmth of timber with the durability of stone.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600",
    category: "porcelain",
    price: 48,
    currency: "CAD",
    dimensions: "20 × 120 cm",
    material: "Porcelain",
    inStock: true,
    creator: "Geo Tiles",
    tags: ["wood-look", "plank", "warm", "floor"],
    featured: false,
  },

  // ── Marble (3) ───────────────────────────────────────────────
  {
    id: "m-001",
    title: "Calacatta Oro Marble",
    description:
      "Premium Italian Calacatta marble with dramatic gold veining on a luminous white field. The pinnacle of luxury.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    category: "marble",
    price: 125,
    currency: "CAD",
    dimensions: "60 × 60 cm",
    material: "Natural marble",
    inStock: true,
    creator: "Marmo Milano",
    tags: ["luxury", "gold-veining", "italian", "statement"],
    featured: true,
  },
  {
    id: "m-002",
    title: "Bardiglio Grigio Marble",
    description:
      "Dark grey Italian marble with subtle cloud-like veining. Sophisticated choice for bathrooms and feature walls.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    category: "marble",
    price: 98,
    currency: "CAD",
    dimensions: "45 × 45 cm",
    material: "Natural marble",
    inStock: false,
    creator: "Marmo Milano",
    tags: ["dark", "grey", "bathroom", "veined"],
    featured: false,
  },
  {
    id: "m-003",
    title: "Bianco Carrara Honed",
    description:
      "Classic Carrara marble with a matte honed finish. Soft grey veining on pure white — an eternal favourite.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600",
    category: "marble",
    price: 110,
    currency: "CAD",
    dimensions: "30 × 60 cm",
    material: "Honed natural marble",
    inStock: true,
    creator: "Lusso Stone",
    tags: ["white", "carrara", "honed", "bathroom"],
    featured: false,
  },

  // ── Stone (3) ────────────────────────────────────────────────
  {
    id: "s-001",
    title: "Travertine Romano",
    description:
      "Authentic Roman travertine with natural pitting and warm cream veining. Brings Old World grandeur to any space.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600",
    category: "stone",
    price: 85,
    currency: "CAD",
    dimensions: "45 × 45 cm",
    material: "Natural travertine",
    inStock: true,
    creator: "Lusso Stone",
    tags: ["travertine", "cream", "natural", "luxury"],
    featured: true,
  },
  {
    id: "s-002",
    title: "Slate Blue-Black Riven",
    description:
      "Natural riven slate with a cool blue-black palette. Frost-resistant and slip-resistant for outdoor and wet areas.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
    category: "stone",
    price: 67,
    currency: "CAD",
    dimensions: "40 × 40 cm",
    material: "Natural slate",
    inStock: true,
    creator: "Nordic Tile Co",
    tags: ["slate", "outdoor", "blue", "slip-resistant"],
    featured: false,
  },
  {
    id: "s-003",
    title: "Sandstone Desert Rose",
    description:
      "Warm sandstone in rosy blush tones with natural texture. Perfect for Mediterranean-style gardens and patios.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600",
    category: "stone",
    price: 54,
    currency: "CAD",
    dimensions: "30 × 30 cm",
    material: "Natural sandstone",
    inStock: true,
    creator: "Studio Terra",
    tags: ["sandstone", "blush", "patio", "outdoor"],
    featured: false,
  },
];

export function getTileById(id: string): Tile | undefined {
  return tilesData.find((t) => t.id === id);
}

export function getFeaturedTiles(): Tile[] {
  return tilesData.filter((t) => t.featured);
}

export function getTilesByCategory(
  category: Tile["category"]
): Tile[] {
  return tilesData.filter((t) => t.category === category);
}
