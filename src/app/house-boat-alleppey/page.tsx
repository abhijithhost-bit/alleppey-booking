import type { Metadata } from "next";
import houseboatsData from "@/data/houseboats.json";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import HouseboatCard from "@/components/HouseboatCard";
import ItineraryTimeline from "@/components/ItineraryTimeline";
import { Houseboat } from "@/types";

const houseboats = houseboatsData as Houseboat[];

export const metadata: Metadata = {
  title: "Alleppey Houseboat Fleet & Packages | Compare 1 to 14 Bedrooms",
  description:
    "Explore our complete fleet of verified Alleppey houseboats. From 1 bedroom for couples to 14 bedrooms for groups. Direct WhatsApp booking with zero commission.",
  alternates: {
    canonical: `${siteConfig.url}/house-boat-alleppey/`,
  },
  openGraph: {
    title: "Alleppey Houseboat Fleet & Packages | Compare 1 to 14 Bedrooms",
    description:
      "Explore our complete fleet of verified Alleppey houseboats. Compare rates, AC options, and room capacities.",
    url: `${siteConfig.url}/house-boat-alleppey/`,
  },
};

export default function FleetOverviewPage() {
  return (
    <div className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Houseboats Fleet Overview" }]} />

        <div className="text-center max-w-3xl mx-auto my-8">
          <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Complete Fleet Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0A2540] mt-3 tracking-tight">
            Alleppey Houseboat Fleet &amp; Packages
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            From intimate 1 bedroom luxury boathouses for couples to the biggest 14 bedroom giant double-deckers in Kerala. Browse verified options, compare prices, and book directly on WhatsApp with zero agent commissions.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
            Browse Houseboats by Bedroom Capacity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
          {houseboats.map((b) => (
            <HouseboatCard key={b.slug} boat={b} />
          ))}
        </div>

        <ItineraryTimeline />
      </div>
    </div>
  );
}

