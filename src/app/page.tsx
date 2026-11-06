import type { Metadata } from "next";
import pagesDataRaw from "@/data/pages_full.json";
import siteConfig from "@/data/siteConfig.json";
import WordPressPageView from "@/components/WordPressPageView";

const pagesData = pagesDataRaw as Record<string, {
  slug: string;
  title: string;
  seo: { title: string; description: string; focusKeyword?: string };
  htmlContent: string;
  schemas: any[];
}>;

const page = pagesData["home"];

export const metadata: Metadata = {
  title: page?.seo?.title || "Alleppey Boat Tour Packages | Kerala Backwater Bookings 2026",
  description: page?.seo?.description || "Explore all Alleppey boat tour packages in one place. Book verified private houseboats, Shikara rides, kayaking, and speed boats | Alleppey Booking",
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/wp-content/uploads/2026/06/Untitled-design-2-1.webp`,
        width: 1200,
        height: 630,
        alt: "Alleppey Boat Tour Packages",
      },
    ],
  },
};

export default function HomePage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
