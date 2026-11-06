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

const page = pagesData["kayaking-in-alleppey"];

export const metadata: Metadata = {
  title: page?.seo?.title || "Kayaking in Alleppey | Best Backwater Experience Alappuzha",
  description:
    page?.seo?.description ||
    "Experience guided kayaking in Alleppey backwaters | peaceful sunrise and sunset tours starting at just ₹499. Book your Alappuzha trip today",
  alternates: {
    canonical: `${siteConfig.url}/kayaking-in-alleppey/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/kayaking-in-alleppey/`,
  },
};

export default function KayakingPage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
