"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { authClient } from "@/lib/auth-client";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/all-tiles", label: "All Tiles" },
  { href: "/my-profile", label: "My Profile" },
] as const;

function TileLogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      {/* four-quadrant tile icon */}
      <rect width="12" height="12" x="1" y="1" rx="2" fill="#C1572B" />
      <rect width="12" height="12" x="15" y="1" rx="2" fill="#C1572B" opacity="0.75" />
      <rect width="12" height="12" x="1" y="15" rx="2" fill="#C1572B" opacity="0.75" />
      <rect width="12" height="12" x="15" y="15" rx="2" fill="#C1572B" opacity="0.5" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const initials = user?.name
    ? user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* ── LEFT: Logo ───────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <TileLogoIcon />
          <span
            className="text-xl font-semibold tracking-tight"
            style={{ color: "#C1572B" }}
          >
            SaniTiles
          </span>
        </Link>

        {/* ── CENTER: NavigationMenu (desktop) ─────────────── */}
        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink
                      render={<Link href={href} />}
                      active={isActive}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "text-primary underline underline-offset-4 decoration-primary/60"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* ── RIGHT: Auth actions (desktop) ────────────────── */}
        <div className="hidden md:flex items-center gap-2">
          {isPending ? (
            <div className="h-8 w-20 rounded-lg bg-muted animate-pulse" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-full p-0 w-9 h-9"
                )}
                aria-label="Account menu"
              >
                <Avatar className="w-9 h-9">
                  <AvatarImage src={user.image ?? undefined} alt={user.name ?? "User"} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5 mb-1">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem render={<Link href="/my-profile" />}>
                  My Profile
                </DropdownMenuItem>
                <DropdownMenuItem render={<Link href="/update-profile" />}>
                  Update Info
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={handleSignOut}
                  className="text-destructive focus:text-destructive focus:bg-destructive/10"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link
                href="/login"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "bg-primary hover:bg-primary/90 text-primary-foreground"
                )}
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* ── MOBILE: Hamburger Sheet ───────────────────────── */}
        <Sheet>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "md:hidden"
            )}
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-10 px-6">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <TileLogoIcon />
              <span className="text-lg font-semibold" style={{ color: "#C1572B" }}>
                SaniTiles
              </span>
            </Link>

            <nav className="flex flex-col gap-1 mb-8">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 border-t pt-6" style={{ borderColor: "var(--border)" }}>
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-1">
                    <Avatar className="w-9 h-9 shrink-0">
                      <AvatarImage src={user.image ?? undefined} alt={user.name ?? ""} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full text-destructive border-destructive/30 hover:bg-destructive/10"
                    )}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={cn(buttonVariants({ variant: "outline" }), "w-full")}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className={cn(
                      buttonVariants(),
                      "w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    )}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
