import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Bed,
  Users,
  Utensils,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import houseboatsData from "@/data/houseboats.json";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
import ItineraryTimeline from "@/components/ItineraryTimeline";
import { Houseboat } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const houseboats = houseboatsData as Houseboat[];

export async function generateStaticParams() {
  return houseboats.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const boat = houseboats.find((b) => b.slug === slug);
  if (!boat) {
    return {
      title: "Houseboat Not Found | Alleppey Booking",
    };
  }

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
      images: [{ url: `${siteConfig.url}${boat.image}` }],
    },
  };
}

export default async function HouseboatSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const boat = houseboats.find((b) => b.slug === slug);

  if (!boat) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(
    boat.title
  )}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: boat.title,
    image: `${siteConfig.url}${boat.image}`,
    description: boat.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/${boat.slug}/`,
      priceCurrency: "INR",
      price: boat.startingPrice.toString(),
      availability: "https://schema.org/InStock",
    },
  };

  const boatFaqs = [
    {
      q: `What is included in the ${boat.shortTitle} package?`,
      a: `All our ${boat.shortTitle} packages include full cruise on Vembanad Lake and Punnamada backwaters, private AC bedrooms with en-suite bathrooms, all 3 freshly prepared Kerala meals (Lunch, Evening Tea/Coffee with Banana Fritters, Candlelight Dinner, and next morning Breakfast), onboard private chef, and licensed captain.`,
    },
    {
      q: "What is the difference between Deluxe, Premium, and Luxury tiers?",
      a: "Deluxe includes nighttime air conditioning (9:00 PM to 6:00 AM) and standard Kerala meals. Premium offers full 24-hour unlimited AC, upper sun deck seating, and premium menu with local fish fry. Luxury includes 24h AC, glass-enclosed upper lounge, gourmet seafood, and specialized chef specials.",
    },
    {
      q: "Can we customize the food menu for vegetarians or kids?",
      a: "Yes, 100%! Upon booking on WhatsApp, inform us of any vegetarian, Jain, non-spicy, or kid-friendly dietary preferences. Our onboard chef will tailor every meal to your exact taste.",
    },
    {
      q: "How do I secure the booking?",
      a: "Directly on WhatsApp (+91 70127 61588). We send you live photos of the boat and confirm room availability. A small advance token secures your booking, and the balance is paid upon boarding.",
    },
  ];

  return (
    <article className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Houseboats", href: "/house-boat-alleppey/" },
            { label: boat.shortTitle },
          ]}
        />

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mt-4 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-7">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src={boat.image}
                  alt={boat.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <span className="absolute top-4 left-4 bg-[#FF6600] text-white text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {boat.badge}
                </span>
                <div className="absolute bottom-4 right-4 bg-[#0A2540]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-extrabold">
                  Starts from {boat.priceDisplay}
                </div>
              </div>
            </div>

            {/* Right Information & CTA */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2CD664] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
                Verified Alleppey Backwater Fleet
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-[#0A2540] tracking-tight">
                {boat.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {boat.description}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4 text-[#FF6600]" />
                  <span className="font-semibold text-slate-800">
                    {boat.bedrooms} Private AC Bedroom{boat.bedrooms > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FF6600]" />
                  <span className="font-semibold text-slate-800">{boat.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#2CD664]" />
                  <span className="font-semibold text-slate-800">All 3 Meals Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-800">12:00 PM - 9:00 AM</span>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#2CD664] hover:bg-[#22B350] text-white flex items-center justify-center gap-2 shadow-md shadow-green-500/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Check Availability on WhatsApp</span>
                </a>
                <a
                  href="tel:+917012761588"
                  className="py-3.5 px-5 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0A2540]" />
                  <span>Call Captain</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tiers Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
              Choose Your Package Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              All tiers include the full backwater cruise route and private onboard chef
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boat.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                  tier.name === "Premium"
                    ? "border-[#FF6600] shadow-md ring-2 ring-orange-100 relative bg-orange-50/20"
                    : "border-slate-200 bg-white"
                }`}
              >
                {tier.name === "Premium" && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF6600] text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full">
                    Recommended Choice
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-bold text-[#0A2540]">{tier.name}</h3>
                  <div className="mt-2 mb-4">
                    <span className="text-2xl font-black text-[#0A2540]">
                      ₹{tier.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-slate-500 ml-1">/ Overnight Cruise</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2CD664] flex-shrink-0" />
                      <span>{tier.ac}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2CD664] flex-shrink-0" />
                      <span>{tier.meals}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2CD664] flex-shrink-0" />
                      <span>{tier.deck}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2CD664] flex-shrink-0" />
                      <span>Dedicated Captain &amp; Private Chef</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={`https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                    tier.name
                  )}%20package%20for%20the%20${encodeURIComponent(boat.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl font-bold text-xs text-center bg-[#0A2540] hover:bg-[#FF6600] text-white transition-colors"
                >
                  Book {tier.name} on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary Timeline */}
        <ItineraryTimeline />

        {/* Booking Form Strip */}
        <div className="my-12">
          <BookingForm
            initialService={boat.shortTitle}
            title={`Book Your ${boat.shortTitle} Today`}
            subtitle="Send your dates to get confirmed live photos and current seasonal discount"
          />
        </div>

        {/* FAQs */}
        <FAQAccordion items={boatFaqs} />
      </div>
    </article>
  );
}
