import type { Metadata } from "next";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import UpdateInfoForm from "@/components/profile/UpdateInfoForm";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Update Profile",
  description: "Update your SaniTiles account information.",
};

const mockUser = {
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "+1 (416) 555-0123",
  address: "123 Tile Street, Toronto, ON M5V 3K1",
  avatar: "",
};

export default function UpdateProfilePage() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <h1 className="text-2xl font-bold text-secondary mb-8">Update Profile</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <ProfileSidebar user={mockUser} />

        <div className="flex-1">
          <div className="bg-white rounded-xl border border-border/50 p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Edit Information
            </h2>
            <Separator className="mb-6" />
            <UpdateInfoForm initialData={mockUser} />
          </div>
        </div>
      </div>
    </div>
  );
}
