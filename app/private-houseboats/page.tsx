import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../config/services";
import { SITE_CONFIG } from "../config/site";
import ServicePageTemplate from "../components/ServicePageTemplate";

const service = getServiceBySlug("private-houseboats")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: [
    "Alleppey private houseboat packages",
    "private houseboat booking Alleppey",
    "luxury private houseboat Kerala",
    "1 BHK deluxe houseboat Alleppey",
    "2 BHK premium houseboat Alleppey",
    "houseboat with private chef Alleppey",
    "Alleppey boat tour packages",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/private-houseboats`,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${SITE_CONFIG.url}/private-houseboats`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: service.image,
        width: 1200,
        height: 900,
        alt: service.title,
      },
    ],
  },
};

export default function PrivateHouseboatsPage() {
  if (!service) notFound();

  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: service.title,
    image: `${SITE_CONFIG.url}${service.image}`,
    description: service.metaDescription,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "6500",
      highPrice: "25000",
      offerCount: "12",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: service.rating.toString(),
      reviewCount: service.reviewCount.toString(),
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
