"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

interface RegisterFields {
  name: string;
  email: string;
  image?: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFields>();

  const passwordValue = watch("password");

  async function onSubmit(data: RegisterFields) {
    const { error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image || undefined,
    });

    if (error) {
      toast.error(error.message ?? "Registration failed");
      return;
    }

    toast.success("Account created! Welcome to SaniTiles.");
    router.push("/my-profile");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Full Name */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Jane Smith"
          autoComplete="name"
          aria-invalid={!!errors.name}
          {...register("name", { required: "Full name is required" })}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
          })}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Photo URL (optional) */}
      <div className="space-y-1.5">
        <label htmlFor="image" className="text-sm font-medium text-foreground">
          Photo URL{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <Input
          id="image"
          type="url"
          placeholder="https://example.com/avatar.jpg"
          {...register("image", {
            pattern: { value: /^https?:\/\/.+/, message: "Must be a valid URL" },
          })}
        />
        {errors.image && (
          <p className="text-xs text-destructive">{errors.image.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label htmlFor="password" className="text-sm font-medium text-foreground">
          Password
        </label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Min. 6 characters"
            autoComplete="new-password"
            className="pr-10"
            aria-invalid={!!errors.password}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
          Confirm Password
        </label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          autoComplete="new-password"
          aria-invalid={!!errors.confirmPassword}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (v) => v === passwordValue || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Create Account
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
