# Alleppey Booking

Official booking site for verified Kerala backwater experiences — private houseboats, shared boathouses, Shikara rides, kayaking, and speedboat tours.

🌐 **Live:** [alleppeybooking.com](https://alleppeybooking.com)

---

## Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Google Fonts via `next/font/google` (Poppins, Inter) |
| Data | Static JSON files in `src/data/` |

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── globals.css             # Tailwind directives + brand CSS variables
│   ├── layout.tsx              # Root layout (Header, Footer, metadata, Schema.org)
│   ├── page.tsx                # Home page
│   ├── robots.ts               # robots.txt generation
│   ├── sitemap.ts              # sitemap.xml generation
│   ├── not-found.tsx           # 404 page
│   ├── blogs/                  # Blog listing + [slug] detail
│   ├── house-boat-alleppey/    # Private houseboat fleet page
│   ├── sharing-houseboat-in-alleppey/
│   ├── shikara-ride-in-alleppey/
│   ├── kayaking-in-alleppey/
│   ├── speed-boat-in-alleppey/
│   ├── about-us/
│   ├── contact/
│   ├── privacy-policy/
│   └── terms-conditions/
├── components/
│   ├── HomePageView.tsx        # Full homepage (hero, packages, gallery, reviews, FAQ)
│   ├── FleetPageView.tsx       # Private houseboat fleet listing
│   ├── Header.tsx / Footer.tsx
│   ├── activities/             # KayakingView, ShikaraRideView, SpeedBoatView, SharingHouseboatView
│   ├── booking/                # BookingCard, PackageTabs, BookingContext, MobileStickyBar
│   ├── gallery/                # HouseboatGallery
│   ├── houseboat/              # HouseboatDetailTemplate (single houseboat page)
│   └── static/                 # AboutUsView, ContactView, PrivacyPolicyView, TermsConditionsView
├── data/                       # Static JSON content (no CMS/DB)
│   ├── houseboats.json         # All houseboat listings + pricing
│   ├── activities.json         # Kayaking, Shikara, Speedboat data
│   ├── blogs.json              # Blog posts
│   ├── pages.json              # Static page content
│   ├── navigation.json         # Nav links
│   └── siteConfig.json         # Site name, URL, phone numbers, address
├── lib/
│   ├── pricing.ts              # Pricing calculation helpers
│   └── utils.ts                # Shared utilities
└── types/
    └── index.ts                # TypeScript interfaces
```

---

## Key Configuration

### `next.config.ts`
- `trailingSlash: true` — all URLs end with `/`
- 301 redirects for legacy WordPress blog post slugs (root → `/blogs/[slug]/`)
- 301 redirect: `/alleppey-boat-house-booking/` → `/house-boat-alleppey/`
- 301 redirects for WordPress `/category/`, `/author/`, `/feed` paths
- Cache-Control headers for `/wp-content/uploads/` images (1 year, immutable)
- Security headers on all routes

### `public/wp-content/uploads/`
Images migrated from the previous WordPress site. Served as static assets. The `/wp-content/uploads/` path is preserved to maintain image URL compatibility with existing inbound links and social shares.

---

## SEO

- Metadata via Next.js `generateMetadata` / static `metadata` exports
- `sitemap.xml` auto-generated from JSON data
- `robots.txt` auto-generated
- Schema.org JSON-LD: `TravelAgency`, `ItemList`, `Product`, `FAQPage`, `BreadcrumbList`
