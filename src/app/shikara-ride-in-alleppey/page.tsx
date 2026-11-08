import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import ShikaraRideView from "@/components/activities/ShikaraRideView";

export const metadata: Metadata = {
  title: "Alleppey Shikara Boat Ride | Narrow Canals & Village Tours",
  description:
    "Book an authentic Shikara boat ride in Alleppey from ₹800/hr. Explore shallow village canals inaccessible to houseboats. Instant WhatsApp booking.",
  alternates: {
    canonical: `${siteConfig.url}/shikara-ride-in-alleppey/`,
  },
  openGraph: {
    title: "Alleppey Shikara Boat Ride | Narrow Canals & Village Tours",
    description:
      "Book an authentic Shikara boat ride in Alleppey from ₹800/hr. Explore shallow village canals inaccessible to houseboats. Instant WhatsApp booking.",
    url: `${siteConfig.url}/shikara-ride-in-alleppey/`,
  },
};

export default function ShikaraRidePage() {
  return <ShikaraRideView />;
}
