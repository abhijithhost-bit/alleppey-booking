import { notFound } from "next/navigation";
import type { Metadata } from "next";
import pagesDataRaw from "@/data/pages_full.json";
import siteConfig from "@/data/siteConfig.json";
import WordPressPageView from "@/components/WordPressPageView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

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

const houseboatSlugs = [
  "1-bedroom-houseboat-alleppey",
  "2-bedroom-houseboat-alleppey",
  "3-bedroom-houseboat-alleppey",
  "4-bedroom-houseboat-alleppey",
  "5-bedroom-houseboat-alleppey",
  "6-bedroom-houseboat-alleppey",
  "7-bedroom-houseboat-alleppey",
  "8-bedroom-houseboat-alleppey",
  "10-bedroom-houseboat-alleppey",
  "12-bedroom-houseboat-alleppey",
  "14-bedroom-houseboat-alleppey",
];

export async function generateStaticParams() {
  return houseboatSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pagesData[slug];

  if (!page) {
    return {
      title: "Houseboat Not Found | Alleppey Booking",
    };
  }

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.focusKeyword ? [page.seo.focusKeyword] : undefined,
    alternates: {
      canonical: `${siteConfig.url}/${slug}/`,
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: `${siteConfig.url}/${slug}/`,
    },
  };
}

export default async function HouseboatSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pagesData[slug];

  if (!page) {
    notFound();
  }

  return (
    <WordPressPageView
      htmlContent={page.htmlContent}
      schemas={page.schemas}
    />
  );
}
