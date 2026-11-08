import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import FleetPageView from "@/components/FleetPageView";

export const metadata: Metadata = {
  title: "House Boat Alleppey | 1-14 Bedroom Fleet | Book Direct",
  description:
    "Compare the best house boat alleppey rates. Choose from our verified 1 to 14 bedroom fleet with AC, private crew, and zero hidden fees. Book now!",
  alternates: {
    canonical: `${siteConfig.url}/house-boat-alleppey/`,
  },
  openGraph: {
    title: "House Boat Alleppey | 1-14 Bedroom Fleet | Book Direct",
    description:
      "Compare the best house boat alleppey rates. Choose from our verified 1 to 14 bedroom fleet with AC, private crew, and zero hidden fees. Book now!",
    url: `${siteConfig.url}/house-boat-alleppey/`,
  },
};

export default function HouseboatFleetPage() {
  return <FleetPageView />;
}
