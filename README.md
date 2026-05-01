# SaniTiles — Your Space. Your Style.

## Overview

Premium tile gallery web application built with Next.js 16 App Router. Browse, search, and discover curated ceramic, porcelain, marble, and stone tiles with email and Google OAuth authentication, protected routes, and a fully responsive UI.

---

## Live URL

[deployed url here]

---

## Key Features

- Home page with animated hero (Framer Motion), scrolling marquee, and featured tiles
- Browse and search/filter tiles by name, material, category, and in-stock status
- Tile detail page with sticky image column and product information
- Email + password authentication and Google OAuth via BetterAuth
- User profile page with sidebar navigation and inline update form
- Protected routes — `/tile/[id]`, `/my-profile`, `/update-profile` require login
- Full-screen split-panel login and register pages
- Loading skeleton screens on all data pages
- Custom 404 not-found page with decorative tile grid background
- Fully responsive — mobile, tablet, and desktop

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js (App Router) | 16.2.4 | Framework |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Styling |
| shadcn/ui (base-nova) | ^4.6.0 | UI components |
| BetterAuth | ^1.6.9 | Authentication |
| MongoDB | via `mongodb` driver | Database |
| Framer Motion | ^12.38.0 | Animations |
| React Hook Form | ^7.74.0 | Form handling |
| Sonner | ^2.0.7 | Toast notifications |
| Lucide React | ^1.14.0 | Icons |

---

## NPM Packages

```json
{
  "next": "16.2.4",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "typescript": "^5",
  "tailwindcss": "^4",
  "@base-ui/react": "^1.4.1",
  "shadcn": "^4.6.0",
  "better-auth": "^1.6.9",
  "framer-motion": "^12.38.0",
  "react-hook-form": "^7.74.0",
  "sonner": "^2.0.7",
  "lucide-react": "^1.14.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.5.0",
  "tw-animate-css": "^1.4.0",
  "next-themes": "^0.4.6",
  "embla-carousel-react": "^8.6.0"
}
```

---

## Environment Variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_32_character_random_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```

---

## Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/sanitiles.git
cd sanitiles
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**
```bash
# Copy the example and fill in your values
cp .env.local.example .env.local
```

**4. Start the development server**
```bash
npm run dev
```

**5. Open in browser**
```
http://localhost:3000
```

---

## Pages & Routes

| Route | Access | Description |
|---|---|---|
| `/` | Public | Home — hero, marquee, featured tiles |
| `/all-tiles` | Public | Browse + search + filter gallery |
| `/login` | Public | Split-screen email/Google sign-in |
| `/register` | Public | Split-screen registration form |
| `/tile/[id]` | **Protected** | Sticky two-column tile detail |
| `/my-profile` | **Protected** | Profile sidebar + update form |

---

## Project Structure

```
sanitiles/
├── app/
│   ├── page.tsx                   # Home page
│   ├── layout.tsx                 # Root layout
│   ├── loading.tsx                # Global loading spinner
│   ├── not-found.tsx              # 404 page
│   ├── all-tiles/
│   │   ├── page.tsx               # Client-side gallery + filters
│   │   └── loading.tsx            # Skeleton loading
│   ├── tile/[id]/
│   │   ├── page.tsx               # Tile detail (server, protected)
│   │   └── loading.tsx            # Skeleton loading
│   ├── login/page.tsx             # Split-screen login
│   ├── register/page.tsx          # Split-screen register
│   ├── my-profile/page.tsx        # Profile + update (protected)
│   └── api/
│       ├── tiles/route.ts         # GET /api/tiles
│       ├── tiles/[id]/route.ts    # GET /api/tiles/:id
│       └── auth/[...all]/route.ts # BetterAuth handler
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ConditionalLayout.tsx
│   ├── home/
│   │   ├── HeroBanner.tsx
│   │   ├── MarqueeTicker.tsx
│   │   └── FeaturedTiles.tsx
│   ├── tiles/
│   │   ├── TileCard.tsx
│   │   ├── TileSkeletonCard.tsx
│   │   ├── TileGrid.tsx
│   │   ├── TileSwiper.tsx
│   │   └── TileImageGallery.tsx
│   └── auth/
│       ├── LoginForm.tsx
│       ├── RegisterForm.tsx
│       └── GoogleSignInButton.tsx
├── lib/
│   ├── api.ts                     # Fetch helpers
│   ├── auth.ts                    # BetterAuth server config
│   ├── auth-client.ts             # BetterAuth client
│   ├── tiles-data.ts              # Static mock data (12 tiles)
│   └── utils.ts                   # cn() helper
├── types/
│   └── tile.ts                    # Tile interface
├── proxy.ts                       # Route protection (Next.js 16)
├── next.config.ts                 # Image remote patterns
└── app/globals.css                # SaniTiles design tokens
```

---

## Author

Sani

> Built as part of a full-stack web development assignment using Next.js 16 App Router.
