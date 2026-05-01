"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Loader2, LogOut, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

type Tab = "info" | "update";

interface UpdateFields {
  name: string;
  image: string;
}

export default function MyProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [activeTab, setActiveTab] = useState<Tab>("info");

  const initials = user?.name
    ? user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<UpdateFields>({
    values: { name: user?.name ?? "", image: user?.image ?? "" },
  });

  async function onUpdate(data: UpdateFields) {
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image || undefined,
    });

    if (error) {
      toast.error(error.message ?? "Update failed");
      return;
    }

    toast.success("Profile updated!");
    setActiveTab("info");
  }

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  const MENU: Array<{ id: Tab; label: string; icon: React.ReactNode }> = [
    { id: "info", label: "Profile Info", icon: <User className="h-4 w-4" /> },
    { id: "update", label: "Update Info", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r border-border/50 bg-white p-6 flex flex-col">
        {/* User info */}
        <div className="flex flex-col items-center text-center mb-6">
          <Avatar className="w-16 h-16 mb-3">
            <AvatarImage src={user?.image ?? undefined} alt={user?.name ?? ""} />
            <AvatarFallback
              className="text-lg font-bold text-white"
              style={{ background: "#1E3A5F" }}
            >
              {initials}
            </AvatarFallback>
          </Avatar>
          <p className="font-semibold text-sm text-foreground leading-tight">{user?.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5 truncate w-full">{user?.email}</p>
        </div>

        <Separator className="mb-4" />

        {/* Nav menu */}
        <nav className="flex flex-col gap-1 flex-1">
          {MENU.map(({ id, label, icon }) => (
            <Button
              key={id}
              variant="ghost"
              onClick={() => setActiveTab(id)}
              className={`justify-start gap-2 text-sm ${
                activeTab === id
                  ? "bg-accent text-accent-foreground"
                  : ""
              }`}
            >
              {icon}
              {label}
            </Button>
          ))}
        </nav>

        <Separator className="my-4" />

        {/* Logout */}
        <Button
          variant="ghost"
          onClick={handleSignOut}
          className="justify-start gap-2 text-sm text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-background">
        {activeTab === "info" && (
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-secondary mb-6">Profile Information</h2>

            {/* Large avatar */}
            <div className="flex items-center gap-5 mb-8">
              {user?.image ? (
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border/50">
                  <Image src={user.image} alt={user.name ?? ""} fill className="object-cover" sizes="80px" />
                </div>
              ) : (
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white shrink-0"
                  style={{ background: "#1E3A5F" }}
                >
                  {initials}
                </div>
              )}
              <div>
                <p className="text-lg font-semibold text-foreground">{user?.name}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>

            {/* Read-only fields */}
            <div className="space-y-4 bg-white rounded-xl border border-border/50 p-6 mb-6">
              {[
                ["Display Name", user?.name ?? "—"],
                ["Email", user?.email ?? "—"],
              ].map(([label, value]) => (
                <div key={label as string}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </div>

            <Button
              onClick={() => setActiveTab("update")}
              className="bg-primary hover:bg-primary/90"
            >
              Update Information
            </Button>
          </div>
        )}

        {activeTab === "update" && (
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-secondary mb-6">Update Information</h2>

            <form
              onSubmit={handleSubmit(onUpdate)}
              className="bg-white rounded-xl border border-border/50 p-6 space-y-5"
              noValidate
            >
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Display Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  {...register("name", { required: true })}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="photo" className="text-sm font-medium text-foreground">
                  Photo URL{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <Input
                  id="photo"
                  type="url"
                  placeholder="https://example.com/avatar.jpg"
                  {...register("image")}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Changes
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => { setActiveTab("info"); reset(); }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
