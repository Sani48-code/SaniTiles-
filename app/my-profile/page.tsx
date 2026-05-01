import type { Metadata } from "next";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "My Profile",
  description: "View and manage your SaniTiles profile.",
};

const mockUser = {
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "+1 (416) 555-0123",
  address: "123 Tile Street, Toronto, ON M5V 3K1",
  avatar: "",
  memberSince: "January 2024",
};

export default function MyProfilePage() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <h1 className="text-2xl font-bold text-secondary mb-8">My Profile</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <ProfileSidebar user={mockUser} />

        <div className="flex-1">
          <div className="bg-white rounded-xl border border-border/50 p-6 mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Personal Information
            </h2>
            <Separator className="mb-6" />
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["Full Name", mockUser.name],
                ["Email", mockUser.email],
                ["Phone", mockUser.phone],
                ["Address", mockUser.address],
                ["Member Since", mockUser.memberSince],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                    {label}
                  </dt>
                  <dd className="text-sm text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-white rounded-xl border border-border/50 p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Account Status
            </h2>
            <Separator className="mb-6" />
            <div className="flex items-center gap-3">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                Active
              </Badge>
              <span className="text-sm text-muted-foreground">
                Your account is in good standing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
