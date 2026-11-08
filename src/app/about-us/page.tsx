import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import AboutUsView from "@/components/static/AboutUsView";

export const metadata: Metadata = {
  title: "About Alleppey Booking | Local Backwater Cruise Experts",
  description:
    "Learn about Alleppey Booking, local backwater cruise operators in Alappuzha, Kerala. Verified houseboats, transparent rates, and direct captain connections.",
  alternates: {
    canonical: `${siteConfig.url}/about-us/`,
  },
  openGraph: {
    title: "About Alleppey Booking | Local Backwater Cruise Experts",
    description:
      "Learn about Alleppey Booking, local backwater cruise operators in Alappuzha, Kerala. Verified houseboats, transparent rates, and direct captain connections.",
    url: `${siteConfig.url}/about-us/`,
  },
};

export default function AboutUsPage() {
  return <AboutUsView />;
}
