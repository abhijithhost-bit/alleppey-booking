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

const page = pagesData["speed-boat-in-alleppey"];

export const metadata: Metadata = {
  title: page?.seo?.title || "Speed Boat in Alleppey | Thrilling Backwater Rides Kerala",
  description:
    page?.seo?.description ||
    "Enjoy the best speed boat in Alleppey starting at just ₹300 per person. Experience the ultimate adventure in Alappuzha backwaters. Book your fast ride now",
  alternates: {
    canonical: `${siteConfig.url}/speed-boat-in-alleppey/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/speed-boat-in-alleppey/`,
  },
};

export default function SpeedboatPage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
