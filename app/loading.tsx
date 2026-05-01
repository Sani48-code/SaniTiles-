function SpinningTile() {
  return (
    <div
      className="relative w-10 h-10 animate-spin"
      style={{ animationDuration: "1.2s" }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="16" height="16" x="1" y="1" rx="3" fill="#C1572B" />
        <rect width="16" height="16" x="23" y="1" rx="3" fill="#C1572B" opacity="0.7" />
        <rect width="16" height="16" x="1" y="23" rx="3" fill="#C1572B" opacity="0.7" />
        <rect width="16" height="16" x="23" y="23" rx="3" fill="#C1572B" opacity="0.4" />
      </svg>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
      <div className="flex items-center gap-2 mb-2">
        <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect width="12" height="12" x="1" y="1" rx="2" fill="#C1572B" />
          <rect width="12" height="12" x="15" y="1" rx="2" fill="#C1572B" opacity="0.75" />
          <rect width="12" height="12" x="1" y="15" rx="2" fill="#C1572B" opacity="0.75" />
          <rect width="12" height="12" x="15" y="15" rx="2" fill="#C1572B" opacity="0.5" />
        </svg>
        <span className="text-sm font-semibold" style={{ color: "#C1572B" }}>SaniTiles</span>
      </div>
      <SpinningTile />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
