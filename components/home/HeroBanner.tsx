"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const STATS = [
  { value: "12+", label: "Categories" },
  { value: "200+", label: "Tile Designs" },
  { value: "6", label: "Top Creators" },
];

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center brand-gradient">
      {/* Diagonal tile pattern overlay */}
      <div className="absolute inset-0 tile-pattern-diagonal opacity-[0.07]" />

      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(193,87,43,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto relative px-4 md:px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Badge pill */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/20 text-accent border border-accent/30 mb-6">
              ✦ Premium Tile Collection
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-bold text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Transform Your Space with{" "}
            <span className="text-primary">SaniTiles</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-lg text-white/65 mb-10 leading-relaxed max-w-xl"
          >
            Discover our curated collection of premium tiles — from handcrafted
            terracotta to luxurious marble. Every tile tells a story.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/all-tiles"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary hover:bg-primary/90 text-primary-foreground"
              )}
            >
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/all-tiles?featured=true"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              )}
            >
              Featured Tiles
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div {...fadeUp(0.8)} className="flex gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-primary via-accent to-primary/30" />
    </section>
  );
}
