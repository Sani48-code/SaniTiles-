export interface Tile {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "ceramic" | "porcelain" | "marble" | "stone";
  price: number;
  currency: string;
  dimensions: string;
  material: string;
  inStock: boolean;
  creator: string;
  tags: string[];
  featured: boolean;
}
