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

const page = pagesData["shikara-ride-in-alleppey"];

export const metadata: Metadata = {
  title: page?.seo?.title || "Best Shikara Ride in Alleppey | Explore Alappuzha Backwaters",
  description:
    page?.seo?.description ||
    "Book a private Shikara Ride in Alleppey to explore the Kerala backwaters on your own schedule. Message us on WhatsApp for instant confirmation",
  alternates: {
    canonical: `${siteConfig.url}/shikara-ride-in-alleppey/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/shikara-ride-in-alleppey/`,
  },
};

export default function ShikaraRidePage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
