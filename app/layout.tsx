import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "./config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#047857",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Alleppey Houseboat Booking & Shikara Rides | Alleppey Booking",
    template: "%s | Alleppey Booking",
  },
  description:
    "Book verified Alleppey boat tour packages. Luxury overnight houseboats, day cruises, private shikara rides, and kayaking in Kerala backwaters. Starting from ₹499. Instant WhatsApp booking.",
  keywords: [
    "Alleppey houseboat booking",
    "Alleppey boat booking",
    "Kerala backwaters houseboat",
    "Alappuzha shikara ride",
    "Alleppey day cruise",
    "Alleppey kayak tour",
    "houseboat price Alleppey",
    "luxury houseboat Alappuzha",
    "Alleppey backwater tour packages",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Alleppey Houseboat Booking & Shikara Rides | Alleppey Booking",
    description:
      "Verified Kerala backwater houseboats, private shikara boat rides, and day cruises in Alleppey. Direct local pricing with no commission. Book now on WhatsApp.",
    images: [
      {
        url: "/hero-image-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Alleppey Houseboat cruising through Kerala backwaters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alleppey Houseboat Booking & Shikara Rides | Alleppey Booking",
    description:
      "Verified Kerala backwater houseboats, private shikara rides & day cruises in Alleppey. Starting from ₹499.",
    images: ["/hero-image-desktop.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_CONFIG.name,
  image: `${SITE_CONFIG.url}/hero-image-desktop.webp`,
  "@id": `${SITE_CONFIG.url}/#travelagency`,
  url: SITE_CONFIG.url,
  telephone: "+917012761588",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.4981,
    longitude: 76.3388,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE_CONFIG.rating.value.toString(),
    reviewCount: SITE_CONFIG.rating.count.toString(),
    bestRating: "5",
    worstRating: "1",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a houseboat booking cost in Alleppey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alleppey houseboat rates typically start from ₹6,500 to ₹8,500 for a 1-BHK Deluxe Houseboat (inclusive of all meals: lunch, sunset tea, dinner, breakfast). Premium and Luxury houseboats range between ₹9,500 and ₹18,000+ depending on the season, bedroom count, and amenities.",
      },
    },
    {
      "@type": "Question",
      name: "What are the check-in and check-out timings for overnight houseboats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard overnight houseboat cruise check-in is at 11:30 AM or 12:00 PM, and checkout is the following morning at 9:00 AM after breakfast. Houseboats anchor safely by 5:30 PM per government regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Are meals included in Alleppey houseboat bookings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all overnight houseboat bookings include authentic Kerala cuisine freshly prepared onboard by a private chef: Welcome drink, traditional Kerala Lunch with Karimeen fry/chicken, evening tea/coffee with local snacks, Dinner, and morning South Indian/Continental Breakfast.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Shikara rides and Houseboats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shikara boats are open wooden boats equipped with shaded canopies and cushioned seating, ideal for exploring narrow canals and shallow village waterways for 2 to 4 hours starting at ₹800/hour. Houseboats are larger floating villas with bedrooms, bathrooms, dining decks, and full kitchen crews for day cruises or overnight stays.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <title>Alleppey Houseboat Booking &amp; Shikara Rides | Alleppey Booking</title>
        <meta
          name="description"
          content="Book verified Alleppey boat tour packages. Luxury overnight houseboats, day cruises, private shikara rides, and kayaking in Kerala backwaters. Starting from ₹499. Instant WhatsApp booking."
        />
        <link rel="canonical" href={SITE_CONFIG.url} />

        {/* Preload Hero Images for LCP Optimization */}
        <link
          rel="preload"
          as="image"
          href="/hero-image-mobile.webp"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/hero-image-desktop.webp"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdFaq),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-slate-50">
        {children}
      </body>
    </html>
  );
}
