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

const page = pagesData["about-us"];

export const metadata: Metadata = {
  title: page?.seo?.title || "About Alleppey Booking | Local Backwater Cruise Experts",
  description:
    page?.seo?.description ||
    "Learn about Alleppey Booking, local backwater cruise operators in Alappuzha, Kerala. Verified houseboats, transparent rates, and direct captain connections.",
  alternates: {
    canonical: `${siteConfig.url}/about-us/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/about-us/`,
  },
};

export default function AboutUsPage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
