const ITEMS = [
  "Terracotta",
  "Marble",
  "Porcelain",
  "Natural Stone",
  "Glass Mosaic",
  "Travertine",
  "Slate",
  "Zellige",
  "Encaustic",
  "Limestone",
  "Ceramic",
  "Wood Look",
];

export default function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden bg-primary py-3 border-y border-primary/80">
      <div className="flex whitespace-nowrap marquee-animation">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-primary-foreground text-sm font-medium px-6 inline-flex items-center gap-3"
          >
            {item}
            <span className="text-primary-foreground/40 text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
