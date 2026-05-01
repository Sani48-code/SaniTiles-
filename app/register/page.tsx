import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import RegisterForm from "@/components/auth/RegisterForm";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your SaniTiles account.",
};

function TileLogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="12" height="12" x="1" y="1" rx="2" fill="#C1572B" />
      <rect width="12" height="12" x="15" y="1" rx="2" fill="#C1572B" opacity="0.75" />
      <rect width="12" height="12" x="1" y="15" rx="2" fill="#C1572B" opacity="0.75" />
      <rect width="12" height="12" x="15" y="15" rx="2" fill="#C1572B" opacity="0.5" />
    </svg>
  );
}

function DecorativeTileGrid() {
  const tiles = Array.from({ length: 9 });
  return (
    <div className="grid grid-cols-3 gap-3 w-56 opacity-20">
      {tiles.map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-lg"
          style={{
            background: i % 3 === 0 ? "#C1572B" : i % 3 === 1 ? "#D4A853" : "#2d4f73",
            opacity: 0.6 + (i % 3) * 0.15,
          }}
        />
      ))}
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left panel — hidden on mobile */}
      <div
        className="hidden md:flex md:w-1/2 flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1E3A5F 0%, #0f2035 100%)" }}
      >
        <div className="absolute inset-0 tile-pattern-diagonal opacity-[0.06]" />

        <Link href="/" className="relative flex items-center gap-2.5">
          <TileLogoIcon />
          <span className="text-xl font-semibold tracking-tight text-white">SaniTiles</span>
        </Link>

        <div className="relative space-y-6">
          <DecorativeTileGrid />
          <div>
            <h2 className="text-3xl font-bold text-white leading-snug mb-3">
              Join the SaniTiles
              <br />
              community.
            </h2>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Create an account to save your favourite tiles, get quotes, and
              request samples from our premium collection.
            </p>
          </div>
        </div>

        <p className="relative text-xs text-white/30">
          © {new Date().getFullYear()} SaniTiles. All rights reserved.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 bg-background overflow-y-auto">
        {/* Mobile logo */}
        <Link href="/" className="md:hidden flex items-center gap-2 mb-8">
          <TileLogoIcon />
          <span className="text-lg font-semibold" style={{ color: "#C1572B" }}>SaniTiles</span>
        </Link>

        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-secondary">Create an account</h1>
            <p className="text-muted-foreground text-sm mt-1">Join SaniTiles for free</p>
          </div>

          {/* Google sign-up */}
          <GoogleSignInButton />

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>

          {/* Register form */}
          <RegisterForm />

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "link" }), "px-0 text-xs h-auto")}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
