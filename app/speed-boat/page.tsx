import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../config/services";
import { SITE_CONFIG } from "../config/site";
import ServicePageTemplate from "../components/ServicePageTemplate";

const service = getServiceBySlug("speed-boat")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: [
    "Alleppey speed boat tour packages",
    "speed boat booking Alleppey",
    "motor boat ride Alleppey",
    "Vembanad lake speed boat",
    "Pathiramanal island speed boat",
    "fast boat ride Kerala backwaters",
    "Alleppey boat tour packages",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/speed-boat`,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${SITE_CONFIG.url}/speed-boat`,
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

export default function SpeedBoatPage() {
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
      lowPrice: "1499",
      highPrice: "5000",
      offerCount: "6",
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
