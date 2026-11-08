import React from "react";
import Link from "next/link";
import { Houseboat } from "@/types";
import HouseboatGallery from "@/components/gallery/HouseboatGallery";
import PackageTabs from "@/components/booking/PackageTabs";
import BookingCard from "@/components/booking/BookingCard";
import TermsAndConditions from "@/components/booking/TermsAndConditions";
import MobileStickyBar from "@/components/booking/MobileStickyBar";
import { BookingProvider } from "@/components/booking/BookingContext";
import {
  Users,
  Bed,
  Star,
  Wind,
  Lock,
  Compass,
  UtensilsCrossed,
  ShieldCheck,
  MapPin,
  Car,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

interface HouseboatDetailTemplateProps {
  boat: Houseboat & {
    amenitiesStructured?: {
      title: string;
      badge?: string;
      sub?: string;
      icon: string;
    }[];
  };
}

export default function HouseboatDetailTemplate({
  boat,
}: HouseboatDetailTemplateProps) {
  const schemas = boat.schemas || [];
  const gallery = boat.gallery || [];
  const defaultImage = boat.defaultImage || boat.image;
  const h1 = boat.h1 || `Private ${boat.bedrooms} Bedroom Houseboat Alleppey`;
  const aboutTitle = boat.aboutTitle || `About This Houseboat`;
  const aboutParagraphs = boat.aboutParagraphs || [boat.description];
  const faqs = boat.faqs || [];

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case "ac":
        return <Wind className="w-5 h-5 text-brand-orange" />;
      case "crew":
        return <Users className="w-5 h-5 text-brand-orange" />;
      case "bed":
        return <Bed className="w-5 h-5 text-brand-orange" />;
      case "private":
        return <Lock className="w-5 h-5 text-brand-orange" />;
      case "cruise":
        return <Compass className="w-5 h-5 text-brand-orange" />;
      case "food":
        return <UtensilsCrossed className="w-5 h-5 text-brand-orange" />;
      case "inclusive":
        return <ShieldCheck className="w-5 h-5 text-brand-orange" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-brand-orange" />;
    }
  };

  const boardingPointText =
    boat.bedrooms === 1
      ? "Alleppey Finishing Point. Our team will share the exact Google Maps location upon booking confirmation."
      : "Nehru Trophy Finishing Point, Alleppey. Our team will share the exact Google Maps location upon booking confirmation to ensure your entire group arrives easily.";

  const parkingText =
    boat.bedrooms === 1
      ? "Paid, secure parking is available near the docking area where you can leave your vehicle overnight safely."
      : "Paid, secure parking is available near the docking area where multiple vehicles or large buses can be left overnight safely.";

  return (
    <BookingProvider bedrooms={boat.bedrooms}>
      {/* Structured Data Schemas */}
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="houseboat-detail-pure w-full bg-[#FAF8F5] min-h-screen py-6 sm:py-10">
        <article className="ab-single-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="ab-sh-breadcrumbs flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 mb-4"
          >
            <Link
              href="/"
              className="hover:text-brand-orange transition-colors font-medium"
            >
              Home
            </Link>
            <span className="text-slate-300">›</span>
            <Link
              href="/house-boat-alleppey/"
              className="hover:text-brand-orange transition-colors font-medium"
            >
              Houseboats
            </Link>
            <span className="text-slate-300">›</span>
            <span className="text-brand-navy font-semibold">
              {boat.shortTitle || `${boat.bedrooms} Bedroom Houseboat`}
            </span>
          </nav>

          {/* Header */}
          <header className="ab-sh-header mb-6">
            <h1 className="ab-sh-title text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy tracking-tight leading-tight mb-3">
              {h1}
            </h1>

            <div className="ab-sh-meta flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200/80 rounded-full shadow-xs">
                <Users size={14} className="text-brand-orange" />
                <span>
                  {boat.headerMeta?.[0] ||
                    `Up to ${boat.capacity.replace(/Guests|Adults/g, "").trim()} Guests`}
                </span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200/80 rounded-full shadow-xs">
                <Bed size={14} className="text-brand-orange" />
                <span>
                  {boat.headerMeta?.[1] ||
                    `${boat.bedrooms} AC Bedroom${boat.bedrooms > 1 ? "s" : ""}`}
                </span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200/80 rounded-full shadow-xs">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span>{boat.headerMeta?.[2] || "4.9/5 Rating"}</span>
              </span>
            </div>
          </header>

          {/* 2-Column Responsive Layout */}
          <div className="ab-sh-layout grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Content Column */}
            <main className="ab-sh-content lg:col-span-8 space-y-8">
              {/* Photo Gallery with Lightbox */}
              <HouseboatGallery
                images={gallery}
                defaultImage={defaultImage}
                title={boat.title}
              />

              {/* About This Houseboat */}
              <section className="ab-sh-section bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">
                  {aboutTitle}
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                  {aboutParagraphs.map((paraHtml, idx) => (
                    <div
                      key={idx}
                      className="ab-sh-desc [&>strong]:text-brand-navy [&>strong]:font-bold"
                      dangerouslySetInnerHTML={{ __html: paraHtml }}
                    />
                  ))}
                </div>
              </section>

              {/* Amenities & Features */}
              <section className="ab-sh-section bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">
                  Amenities &amp; Features
                </h2>
                <ul className="ab-sh-amenities grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {boat.amenitiesStructured?.map((amenity, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 p-3.5 bg-slate-50/80 border border-slate-100 rounded-2xl"
                    >
                      <div className="p-2 bg-white rounded-xl shadow-xs border border-slate-100 flex-shrink-0">
                        {getAmenityIcon(amenity.icon)}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-brand-navy">
                          {amenity.title}
                        </div>
                        {amenity.badge && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-orange-50 text-brand-orange border border-orange-200/80 rounded-md font-bold text-[10px] tracking-wide">
                            {amenity.badge}
                          </span>
                        )}
                        {amenity.sub && (
                          <div className="text-xs text-slate-500 mt-0.5">
                            {amenity.sub}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Cruise Packages, Itinerary & Menu */}
              <PackageTabs bedrooms={boat.bedrooms} />

              {/* Boarding & Logistics */}
              <section className="ab-sh-section bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">
                  Boarding &amp; Logistics
                </h2>
                <div className="ab-tc-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="ab-tc-item flex items-start gap-3.5 p-4 bg-slate-50/80 border border-slate-100 rounded-2xl">
                    <div className="p-2.5 bg-brand-orange-light text-brand-orange rounded-xl flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <strong className="text-sm font-bold text-brand-navy block mb-1">
                        Boarding Point
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {boardingPointText}
                      </p>
                    </div>
                  </div>

                  <div className="ab-tc-item flex items-start gap-3.5 p-4 bg-slate-50/80 border border-slate-100 rounded-2xl">
                    <div className="p-2.5 bg-brand-orange-light text-brand-orange rounded-xl flex-shrink-0">
                      <Car size={20} />
                    </div>
                    <div>
                      <strong className="text-sm font-bold text-brand-navy block mb-1">
                        Safe Parking
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {parkingText}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Terms & Conditions (Reactive to selected package) */}
              <TermsAndConditions />

              {/* Good to Know */}
              <section className="ab-sh-section bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">
                  Good to Know
                </h2>
                <ul className="ab-sh-policies space-y-3">
                  <li className="flex items-start gap-3 p-3.5 bg-slate-50/80 border border-slate-100 rounded-2xl">
                    <CheckCircle2
                      size={18}
                      className="text-brand-orange flex-shrink-0 mt-0.5"
                    />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-brand-navy font-bold">
                        Booking Confirmation:
                      </strong>{" "}
                      A standard advance payment is required to reserve your
                      houseboat and block the dates. Bookings are not confirmed
                      without this initial deposit.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 bg-slate-50/80 border border-slate-100 rounded-2xl">
                    <AlertCircle
                      size={18}
                      className="text-brand-orange flex-shrink-0 mt-0.5"
                    />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-brand-navy font-bold">
                        Dynamic Pricing:
                      </strong>{" "}
                      Fares are subject to change during peak seasons, public
                      holidays, and weekends. Please request a quote for your
                      exact travel dates.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 bg-slate-50/80 border border-slate-100 rounded-2xl">
                    <Compass
                      size={18}
                      className="text-brand-orange flex-shrink-0 mt-0.5"
                    />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-brand-navy font-bold">
                        Fleet Availability:
                      </strong>{" "}
                      The photos shown are representative of our premium fleet.
                      The exact boat assigned will depend on real-time
                      availability on your travel dates.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Frequently Asked Questions */}
              {faqs.length > 0 && (
                <section className="ab-sh-section bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle size={20} className="text-brand-orange" />
                    <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="ab-faq-container space-y-3">
                    {faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="ab-faq-item group bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                        name="houseboat-faq"
                      >
                        <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer font-bold text-sm sm:text-base text-brand-navy hover:text-brand-orange transition-colors list-none">
                          <span>{faq.q}</span>
                          <span className="p-1 rounded-full bg-white text-slate-400 group-open:rotate-180 group-open:text-brand-orange transition-transform duration-200 flex-shrink-0 shadow-xs border border-slate-100">
                            <ChevronDown size={16} />
                          </span>
                        </summary>
                        <div className="ab-faq-content px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Cross-Sell Link */}
              <div className="text-center pt-4">
                <Link
                  href="/house-boat-alleppey/"
                  className="ab-btn-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-brand-navy/20 hover:border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold text-sm transition-all"
                  title="Explore more houseboat options"
                >
                  <span>Explore More Houseboats</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </main>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 lg:self-start lg:sticky lg:top-6">
              <BookingCard review={boat.review} />
            </div>
          </div>
        </article>

        {/* Mobile Sticky Bar */}
        <MobileStickyBar />
      </div>
    </BookingProvider>
  );
}

