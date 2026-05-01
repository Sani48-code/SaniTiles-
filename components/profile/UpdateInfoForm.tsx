"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface UpdateInfoFormProps {
  initialData?: {
    name: string;
    email: string;
    phone?: string;
    address?: string;
  };
}

export default function UpdateInfoForm({ initialData }: UpdateInfoFormProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    address: initialData?.address || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/update-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to update profile");

      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const field = (
    id: keyof typeof form,
    label: string,
    type = "text",
    placeholder = ""
  ) => (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground mb-1.5"
      >
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {field("name", "Full Name", "text", "Your full name")}
      {field("email", "Email Address", "email", "you@example.com")}
      {field("phone", "Phone Number", "tel", "+1 (416) 555-0000")}
      {field("address", "Address", "text", "123 Main St, Toronto, ON")}

      <Button
        type="submit"
        className="bg-primary hover:bg-primary/90"
        disabled={loading}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Save Changes
      </Button>
    </form>
  );
}
