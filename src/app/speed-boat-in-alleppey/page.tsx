import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import SpeedBoatView from "@/components/activities/SpeedBoatView";

export const metadata: Metadata = {
  title: "Speed Boat in Alleppey | High-Speed Vembanad Lake Tours",
  description:
    "Book high-speed motorboats in Alleppey. Fast thrills across Vembanad Lake and Punnamada for groups & families. Instant booking on WhatsApp.",
  alternates: {
    canonical: `${siteConfig.url}/speed-boat-in-alleppey/`,
  },
  openGraph: {
    title: "Speed Boat in Alleppey | High-Speed Vembanad Lake Tours",
    description:
      "Book high-speed motorboats in Alleppey. Fast thrills across Vembanad Lake and Punnamada for groups & families. Instant booking on WhatsApp.",
    url: `${siteConfig.url}/speed-boat-in-alleppey/`,
  },
};

export default function SpeedBoatPage() {
  return <SpeedBoatView />;
}
