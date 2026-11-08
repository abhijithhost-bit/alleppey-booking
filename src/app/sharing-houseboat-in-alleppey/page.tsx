import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import SharingHouseboatView from "@/components/activities/SharingHouseboatView";

export const metadata: Metadata = {
  title: "Best Sharing Houseboat in Alleppey | Budget-Friendly Cruises",
  description:
    "Book a budget-friendly sharing houseboat in Alleppey. Cruise the scenic Kerala backwaters, enjoy local meals & get instant WhatsApp confirmation",
  alternates: {
    canonical: `${siteConfig.url}/sharing-houseboat-in-alleppey/`,
  },
  openGraph: {
    title: "Best Sharing Houseboat in Alleppey | Budget-Friendly Cruises",
    description:
      "Book a budget-friendly sharing houseboat in Alleppey. Cruise the scenic Kerala backwaters, enjoy local meals & get instant WhatsApp confirmation",
    url: `${siteConfig.url}/sharing-houseboat-in-alleppey/`,
  },
};

export default function SharingHouseboatPage() {
  return <SharingHouseboatView />;
}
