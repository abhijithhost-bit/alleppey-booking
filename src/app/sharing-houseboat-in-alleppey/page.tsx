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

const page = pagesData["sharing-houseboat-in-alleppey"];

export const metadata: Metadata = {
  title: page?.seo?.title || "Best Sharing Houseboat in Alleppey | Budget-Friendly Cruises",
  description:
    page?.seo?.description ||
    "Book a budget-friendly sharing houseboat in Alleppey. Cruise the scenic Kerala backwaters, enjoy local meals & get instant WhatsApp confirmation",
  alternates: {
    canonical: `${siteConfig.url}/sharing-houseboat-in-alleppey/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/sharing-houseboat-in-alleppey/`,
  },
};

export default function SharingHouseboatPage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
