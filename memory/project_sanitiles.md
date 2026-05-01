---
name: SaniTiles project setup
description: Key architecture decisions for the SaniTiles Next.js 16 tile gallery project
type: project
---

SaniTiles is a tile gallery ecommerce app built on Next.js 16.2.4 (App Router), React 19, Tailwind CSS v4, and shadcn/ui (base-nova style).

**Why:** Assignment 8 conversion from a Figma Make (React+Vite) Interior Design Ecommerce export.

**How to apply:** All code in this project must account for these breaking differences from Next.js 14:

- `params` in dynamic routes are Promises → must `await params` before accessing fields
- `searchParams` in page props are also Promises → `await searchParams`
- `middleware.ts` is deprecated → use `proxy.ts` with a named `proxy` export
- shadcn/ui now uses `@base-ui/react` instead of Radix UI — `asChild` prop is GONE
  - For `Button asChild + Link`: use `buttonVariants()` class directly on `<Link>`
  - For Trigger/Item components: use `render={<Link href="..." />}` prop
- Route Handler dynamic params: use `RouteContext<'/path/[id]'>` type
- Tailwind v4 canonical classes: `bg-gradient-to-r` → `bg-linear-to-r`, `min-h-[560px]` → `min-h-140` etc.

**Stack:**
- better-auth (auth, MongoDB adapter)
- mongoose + MongoDB
- json-server (mock REST API on port 3001 via db.json)
- framer-motion, lucide-react, swiper, react-hot-toast/sonner

**Brand colors:** primary #C1572B (terracotta), secondary #1E3A5F (navy), background #F7F4F0 (cream), accent #D4A853 (gold)
