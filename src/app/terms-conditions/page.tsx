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

const page = pagesData["terms-conditions"];

export const metadata: Metadata = {
  title: page?.seo?.title || "Terms & Conditions | Alleppey Booking",
  description:
    page?.seo?.description ||
    "Official terms and conditions for Alleppey Booking houseboats, Shikara rides, and water activity reservations in Kerala.",
  alternates: {
    canonical: `${siteConfig.url}/terms-conditions/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/terms-conditions/`,
  },
};

export default function TermsConditionsPage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
