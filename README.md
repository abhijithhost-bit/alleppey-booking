# Alleppey Booking — Next.js Migration

Official website for **Alleppey Booking** (`https://alleppeybooking.com/`), migrated from WordPress + Elementor to **Next.js 15 (App Router)**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Key Architectural & SEO Highlights

- **100% SEO Preservation**:
  - Trailing slash configuration (`trailingSlash: true`) matching WordPress permalinks.
  - Complete Rank Math metadata preservation (custom meta titles, descriptions, focus keywords, canonical tags, OpenGraph & Twitter tags).
  - Schema.org structured data: `TravelAgency` / `LocalBusiness`, `Product`, `FAQPage`, `BreadcrumbList`, and `BlogPosting`.
  - Automated dynamic `sitemap.xml` and `robots.txt`.
- **Automatic 301 Permanent Redirects**:
  - All historical root-level blog URLs (e.g. `/top-5-things-to-do-in-alleppey-2026-guide/`) permanently redirect (`HTTP 301`) to `/blogs/[slug]/`.
- **Instant WhatsApp Booking**:
  - WhatsApp lead generation buttons and interactive inquiry form pre-filling selected boats, cruise dates, and guest count directly into WhatsApp chat with `+91 70127 61588`.
  - Floating WhatsApp bubble and mobile quick action bar.
- **Local Media Assets**:
  - Over 280 images and media files localized into `/public/wp-content/uploads/` with Next.js image optimization.
- **Static Site Generation (SSG)**:
  - All 38 customer pages, houseboat fleet listings, activity tours, and blog posts are pre-rendered as static HTML for instant TTFB and 100/100 Core Web Vitals.

---

## 📁 Project Structure

```
alleppey-booking/
├── public/
│   ├── favicon.ico
│   └── wp-content/uploads/     # Localized image and media library
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind & typography styles
│   │   ├── layout.tsx          # Root layout with Header, Footer & Schema
│   │   ├── page.tsx            # High-converting Homepage
│   │   ├── [slug]/page.tsx     # Dynamic routes for 1-14 Bedroom houseboats & activities
│   │   ├── blogs/
│   │   │   ├── page.tsx        # Blogs hub listing
│   │   │   └── [slug]/page.tsx # Single blog article reader
│   │   ├── sitemap.ts          # Dynamic XML sitemap
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   └── not-found.tsx       # Custom 404 navigation page
│   ├── components/
│   │   ├── Header.tsx          # Sticky navbar with dropdowns & mobile drawer
│   │   ├── Footer.tsx          # Comprehensive footer with fleet & legal links
│   │   ├── BookingForm.tsx     # Instant WhatsApp lead form
│   │   ├── HouseboatCard.tsx   # Fleet card with pricing & quick specs
│   │   ├── ActivityCard.tsx    # Card for Shikara, Kayaking, Speedboat
│   │   ├── FAQAccordion.tsx    # Accessible FAQ accordion with schema
│   │   ├── ItineraryTimeline.tsx# Day 1 & Day 2 cruising schedule & meals
│   │   ├── FloatingWhatsApp.tsx# Fixed floating WhatsApp button
│   │   ├── MobileCallBar.tsx   # Fixed bottom bar on mobile screens
│   │   └── Breadcrumb.tsx      # Breadcrumbs with JSON-LD
│   ├── data/
│   │   ├── siteConfig.json     # Phone numbers, WhatsApp, address, office hours
│   │   ├── navigation.json     # Menu links & dropdown hierarchy
│   │   ├── houseboats.json     # 1-14 Bedroom houseboat fleet data & pricing
│   │   ├── activities.json     # Shikara, Kayaking, Speedboat packages
│   │   ├── blogs.json          # 10 full-length travel articles & SEO meta
│   │   └── pages.json          # Static pages (About Us, Contact, Terms, Privacy)
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── next.config.ts              # Trailing slash & 301 redirect map
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Local Development

```bash
# Install dependencies (if needed)
npm install

# Start development server on http://localhost:3000
npm run dev

# Build production bundle (Static Site Generation)
npm run build

# Start production server
npm run start
```

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/), click **Add New Project** and import `alleppey-booking`.
3. Framework preset: **Next.js** (auto-detected).
4. Click **Deploy**. Vercel will automatically build all 38 static pages and deploy them globally to its Edge Network.
5. In your domain settings, update the DNS records for `alleppeybooking.com` to point to Vercel.

