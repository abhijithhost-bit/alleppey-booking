import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import HomePageView from "@/components/HomePageView";

export const metadata: Metadata = {
  title: "Alleppey Boat Tour Packages | Kerala Backwater Bookings 2026",
  description:
    "Explore all Alleppey boat tour packages in one place. Book verified private houseboats, Shikara rides, kayaking, and speed boats | Alleppey Booking",
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  openGraph: {
    title: "Alleppey Boat Tour Packages | Kerala Backwater Bookings 2026",
    description:
      "Explore all Alleppey boat tour packages in one place. Book verified private houseboats, Shikara rides, kayaking, and speed boats | Alleppey Booking",
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/wp-content/uploads/2026/06/Untitled-design-2-1.webp`,
        width: 1200,
        height: 630,
        alt: "Alleppey Boat Tour Packages",
      },
    ],
  },
};

export default function HomePage() {
  return <HomePageView />;
}
