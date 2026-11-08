import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import KayakingView from "@/components/activities/KayakingView";

export const metadata: Metadata = {
  title: "Alleppey Backwater Kayaking | Sunrise & Sunset Guided Tours",
  description:
    "Experience guided kayaking in Alleppey backwaters from ₹1,000/person. Sunrise and sunset tours through tranquil village canals. Book on WhatsApp.",
  alternates: {
    canonical: `${siteConfig.url}/kayaking-in-alleppey/`,
  },
  openGraph: {
    title: "Alleppey Backwater Kayaking | Sunrise & Sunset Guided Tours",
    description:
      "Experience guided kayaking in Alleppey backwaters from ₹1,000/person. Sunrise and sunset tours through tranquil village canals. Book on WhatsApp.",
    url: `${siteConfig.url}/kayaking-in-alleppey/`,
  },
};

export default function KayakingPage() {
  return <KayakingView />;
}
