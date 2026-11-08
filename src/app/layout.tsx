import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import "./home.css";
import "./fleet.css";
import "./sharing-houseboat.css";
import "./shikara-ride.css";
import "./kayaking.css";
import "./speed-boat.css";
import "./about-us.css";
import "./contact.css";
import "./legal.css";
import "./blogs.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfig from "@/data/siteConfig.json";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Alleppey Boat Tour Packages | Kerala Backwater Bookings 2026",
    template: "%s | Alleppey Booking",
  },
  description:
    "Explore all Alleppey boat tour packages in one place. Book verified private houseboats, Shikara rides, kayaking, and speed boats with instant WhatsApp confirmation.",
  keywords: [
    "alleppey houseboat booking",
    "kerala backwaters tour",
    "shikara ride alleppey",
    "sharing houseboat alleppey",
    "kayaking alleppey",
    "speed boat alleppey",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Alleppey Boat Tour Packages | Kerala Backwater Bookings 2026",
    description:
      "Explore all Alleppey boat tour packages in one place. Book verified private houseboats, Shikara rides, kayaking, and speed boats | Alleppey Booking",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/wp-content/uploads/2026/06/Untitled-design-2-1.webp`,
        width: 1200,
        height: 630,
        alt: "Alleppey Booking Kerala Backwaters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alleppey Boat Tour Packages | Kerala Backwater Bookings 2026",
    description:
      "Book verified private houseboats, Shikara rides, kayaking, and speed boats with instant WhatsApp confirmation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Alleppey Booking",
    alternateName: "Alleppey Boat House Booking",
    url: siteConfig.url,
    logo: `${siteConfig.url}/wp-content/uploads/2026/06/Untitled-design-2-1.webp`,
    image: `${siteConfig.url}/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-18-at-2.58.55-PM-scaled.jpeg`,
    description:
      "Official booking service for verified private houseboats, sharing boathouses, Shikara rides, kayaking, and speedboat tours in Alleppey backwaters, Kerala.",
    telephone: "+91-7012761588",
    priceRange: "₹800 - ₹84,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Finishing Point Road, Punnamada",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      postalCode: "688013",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.4981,
      longitude: 76.3388,
    },
    openingHoursSpecification: [
      {
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
        opens: "06:00",
        closes: "23:00",
      },
    ],
    sameAs: ["https://wa.me/917012761588"],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}