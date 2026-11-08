import { notFound } from "next/navigation";
import type { Metadata } from "next";
import houseboatsData from "@/data/houseboats.json";
import siteConfig from "@/data/siteConfig.json";
import HouseboatDetailTemplate from "@/components/houseboat/HouseboatDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const houseboatsBySlug = Object.fromEntries(
  houseboatsData.map((boat) => [boat.slug, boat])
);

export const dynamicParams = false;

export async function generateStaticParams() {
  return houseboatsData.map((boat) => ({ slug: boat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const boat = houseboatsBySlug[slug];

  if (!boat) {
    return {
      title: "Houseboat Not Found | Alleppey Booking",
    };
  }

  const imageUrl = boat.image ? `${siteConfig.url}${boat.image}` : undefined;

  return {
    title: boat.seo.title,
    description: boat.seo.description,
    keywords: boat.seo.focusKeyword ? [boat.seo.focusKeyword] : undefined,
    alternates: {
      canonical: `${siteConfig.url}/${slug}/`,
    },
    openGraph: {
      title: boat.seo.title,
      description: boat.seo.description,
      url: `${siteConfig.url}/${slug}/`,
      siteName: siteConfig.name,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 800,
              alt: boat.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: boat.seo.title,
      description: boat.seo.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function HouseboatSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const boat = houseboatsBySlug[slug];

  if (!boat) {
    notFound();
  }

  return <HouseboatDetailTemplate boat={boat as any} />;
}