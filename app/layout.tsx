import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SaniTiles — Premium Tile Gallery",
    template: "%s | SaniTiles",
  },
  description:
    "Discover our curated collection of premium tiles. From handcrafted terracotta to luxurious marble, find the perfect tile for every space.",
  keywords: ["tiles", "ceramic", "marble", "porcelain", "interior design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
