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

const page = pagesData["privacy-policy"];

export const metadata: Metadata = {
  title: page?.seo?.title || "Privacy Policy | Alleppey Booking",
  description:
    page?.seo?.description ||
    "Privacy Policy for Alleppey Booking website, booking inquiries, and customer data handling.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy/`,
  },
  openGraph: {
    title: page?.seo?.title,
    description: page?.seo?.description,
    url: `${siteConfig.url}/privacy-policy/`,
  },
};

export default function PrivacyPolicyPage() {
  if (!page) return null;
  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
