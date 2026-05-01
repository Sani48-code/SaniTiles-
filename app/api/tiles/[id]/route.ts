import { getTileById } from "@/lib/tiles-data";

export async function GET(
  _req: Request,
  ctx: RouteContext<"/api/tiles/[id]">
) {
  const { id } = await ctx.params;
  const tile = getTileById(id);

  if (!tile) {
    return Response.json({ error: "Tile not found" }, { status: 404 });
  }

  return Response.json(tile);
}
