import Link from "next/link";
import { User, Settings, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface ProfileSidebarProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const navItems = [
  { href: "/my-profile", label: "My Profile", icon: User },
  { href: "/update-profile", label: "Edit Profile", icon: Settings },
];

export default function ProfileSidebar({ user }: ProfileSidebarProps) {
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-white rounded-xl border border-border/50 p-6 sticky top-24">
        <div className="flex flex-col items-center text-center mb-6">
          <Avatar className="h-20 w-20 mb-3">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h2 className="font-semibold text-foreground">
            {user?.name || "Guest"}
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {user?.email || ""}
          </p>
        </div>

        <Separator className="mb-4" />

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <Separator className="my-4" />

        <form action="/api/auth/sign-out" method="POST">
          <button
            type="submit"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            )}
          >
            <LogOut className="mr-3 h-4 w-4" />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
