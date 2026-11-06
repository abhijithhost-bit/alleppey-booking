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

const page = pagesData["house-boat-alleppey"];

export const metadata: Metadata = {
  title: page?.seo?.title || "House Boat Alleppey | 1-14 Bedroom Fleet | Book Direct",
  description:
    page?.seo?.description ||
    "Compare the best house boat alleppey rates. Choose from our verified 1 to 14 bedroom fleet with AC, private crew, and zero hidden fees. Book now!",
  alternates: {
    canonical: `${siteConfig.url}/house-boat-alleppey/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/house-boat-alleppey/`,
  },
};

export default function HouseboatFleetPage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
