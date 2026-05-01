# SaniTiles 🪨
### Your Space. Your Style.

A premium tile gallery web application where users can explore, search, and discover curated ceramic, porcelain, marble, and stone tiles.

---

## 🌐 Live URL

**[https://sanitiles.vercel.app](https://sanitiles.vercel.app)**

---

## ✨ Key Features

- 🏠 Home page with hero banner, scrolling marquee, and featured tiles carousel
- 🔍 Browse and search tiles by name, material, or category
- 🖼️ Detailed tile view with high-res preview and product information
- 🔐 Email & password authentication with Google OAuth
- 👤 User profile page with name and photo update
- 🔒 Protected routes for authenticated users only
- 💀 Loading skeleton screens on all data pages
- 📱 Fully responsive — mobile, tablet, and desktop
- 🎠 SwiperJS carousel for featured tiles
- 🚫 Custom 404 not-found page

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| shadcn/ui | UI components |
| BetterAuth | Authentication |
| MongoDB | Database |
| SwiperJS | Carousel |
| Framer Motion | Animations |
| React Hook Form | Form handling |
| React Hot Toast | Notifications |
| Lucide React | Icons |

---

## 📦 NPM Packages Used

```json
"better-auth": "^1.x.x",
"mongoose": "^8.x.x",
"swiper": "^11.x.x",
"framer-motion": "^11.x.x",
"react-hook-form": "^7.x.x",
"react-hot-toast": "^2.x.x",
"lucide-react": "^0.4x.x",
"react-icons": "^5.x.x"
```

---

## 🚦 Pages & Routes

| Route | Access | Description |
|---|---|---|
| `/` | Public | Home page |
| `/all-tiles` | Public | Full tile gallery |
| `/login` | Public | Login page |
| `/register` | Public | Register page |
| `/tile/[id]` | **Private** | Tile detail page |
| `/my-profile` | **Private** | User profile |
| `/update-profile` | **Private** | Update name & photo |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_32_character_random_secret
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```

---

## 🚀 Run Locally

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
cp .env.example .env.local
# Fill in your values in .env.local
```

**4. Run the development server**
```bash
npm run dev
```

**5. Open in browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
sanitiles/
├── app/
│   ├── page.tsx               # Home
│   ├── layout.tsx             # Root layout
│   ├── not-found.tsx          # 404 page
│   ├── all-tiles/page.tsx     # Gallery
│   ├── tile/[id]/page.tsx     # Detail (private)
│   ├── login/page.tsx         # Login
│   ├── register/page.tsx      # Register
│   ├── my-profile/page.tsx    # Profile (private)
│   └── api/                   # API routes
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── tiles/                 # TileCard, Skeleton
│   └── ui/                    # shadcn components
├── lib/
│   ├── api.ts                 # Fetch functions
│   ├── auth.ts                # BetterAuth config
│   └── tiles-data.ts          # Static tile data
├── types/
│   └── tile.ts                # TypeScript types
└── middleware.ts               # Route protection
```

---

## 👨‍💻 Author
Sani
---

> Built with ❤️ as part of a web development assignment.