import type { Metadata } from "next";
import pagesDataRaw from "@/data/pages_full.json";
import siteConfig from "@/data/siteConfig.json";
import WordPressPageView from "@/components/WordPressPageView";

const pagesData = pagesDataRaw as Record<
  string,
  {
    slug: string;
    title: string;
    seo: { title: string; description: string; focusKeyword?: string };
    htmlContent: string;
    schemas: any[];
  }
>;

const page = pagesData["alleppey-boat-house-booking"];

export const metadata: Metadata = {
  title: page?.seo?.title || "Alleppey Boat House Booking | Best Kerala Rates (2026)",
  description:
    page?.seo?.description ||
    "Secure your Alleppey boat house booking Explore 1-14 bedroom private houseboats. DTPC verified, AC, chef & delicious meals included. Book now",
  alternates: {
    canonical: `${siteConfig.url}/alleppey-boat-house-booking/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/alleppey-boat-house-booking/`,
  },
};

export default function ItineraryGuidePage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
