import type { Metadata } from "next";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import ItineraryTimeline from "@/components/ItineraryTimeline";

export const metadata: Metadata = {
  title: "Alleppey Boat House Booking & Itinerary Guide 2026",
  description:
    "Comprehensive guide to booking houseboats in Alleppey. Detailed 21-hour backwater cruising itinerary, meal plan schedules, route information, and booking tips.",
  alternates: {
    canonical: `${siteConfig.url}/alleppey-boat-house-booking/`,
  },
  openGraph: {
    title: "Alleppey Boat House Booking & Itinerary Guide 2026",
    description:
      "Comprehensive guide to booking houseboats in Alleppey. Detailed 21-hour backwater cruising itinerary and meal plans.",
    url: `${siteConfig.url}/alleppey-boat-house-booking/`,
  },
};

export default function ItineraryGuidePage() {
  return (
    <div className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Houseboat Itinerary & Guide" }]} />

        <div className="text-center max-w-3xl mx-auto my-8">
          <span className="text-xs font-bold text-[#2CD664] uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            Cruising Guide 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0A2540] mt-3 tracking-tight">
            Alleppey Boat House Booking &amp; Itinerary Guide
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Detailed 21-hour cruise program, route map through Punnamada Lake and Vembanad canals, authentic Kerala menu schedules, and booking tips.
          </p>
        </div>

        <ItineraryTimeline />

        <div className="my-12">
          <BookingForm title="Reserve Your Houseboat Itinerary" />
        </div>
      </div>
    </div>
  );
}

