"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA, ServiceItem } from "../config/services";
import { getPackageBookingWhatsAppUrl, SITE_CONFIG } from "../config/site";

interface ServicesCardsSectionProps {
  onOpenInquiry?: (service: ServiceItem) => void;
}

export default function ServicesCardsSection({ onOpenInquiry }: ServicesCardsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "houseboats") {
      return item.id === "private-houseboats" || item.id === "sharing-houseboats";
    }
    if (activeFilter === "canals") {
      return item.id === "shikara" || item.id === "kayaking";
    }
    if (activeFilter === "adventure-stays") {
      return item.id === "speed-boat" || item.id === "homestays";
    }
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-linear-to-b from-white via-emerald-50/25 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold mb-3 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Verified Kerala Fleet &amp; Waterfront Stays</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Alleppey Boat Tour Packages &amp; Stays
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Find the perfect backwater cruise tailored to your budget and travel style. Direct local boat owner rates, government-approved crew, and transparent pricing.
          </p>

          {/* Quick Filter Tabs (30% Light Green theme) */}
          <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "all", label: "All 6 Boat Experiences" },
              { id: "houseboats", label: "Houseboats (Private & Sharing)" },
              { id: "canals", label: "Canal Tours (Shikara & Kayaking)" },
              { id: "adventure-stays", label: "Speed Boats & Homestays" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-800/20"
                    : "bg-white text-slate-700 hover:bg-emerald-50 border border-emerald-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 High-Conversion Cards Grid (60% White + 30% Light Green + 10% Orange) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const whatsAppUrl = getPackageBookingWhatsAppUrl({
              packageName: service.title,
              boatType: service.shortTitle,
            });

            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-md hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for bottom text readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Floating Badge Strip */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-extrabold text-slate-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm border border-white/60">
                        {service.badge}
                      </span>
                      {/* Orange Star Rating Chip */}
                      <span className="flex items-center gap-1 text-[11px] font-extrabold text-orange-900 bg-orange-100/95 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm border border-orange-200/60">
                        <span className="text-orange-500">★</span>
                        <span>{service.rating} ({service.reviewCount})</span>
                      </span>
                    </div>

                    {/* Bottom Image Strip with Specs */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="bg-emerald-950/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-emerald-500/30">
                        ⏱️ {service.duration}
                      </span>
                      <span className="bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20">
                        👥 {service.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Card Body (Crisp White with 30% Light Green Details) */}
                  <div className="p-6">
                    <Link href={`/${service.slug}`} className="block group-hover:text-emerald-700 transition-colors">
                      <h3 className="text-xl font-bold text-slate-900 leading-snug">
                        {service.title}
                      </h3>
                    </Link>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Price Block with Light Green Background & Orange Highlights */}
                    <div className="mt-4 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-baseline justify-between gap-2">
                      <div>
                        <span className="text-[11px] text-slate-500 font-medium block">Direct Owner Starting Price</span>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-2xl sm:text-3xl font-black text-slate-900">
                            {service.startingPrice}
                          </span>
                          {service.originalPrice && (
                            <span className="text-xs line-through text-slate-400">
                              {service.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-emerald-800 font-semibold block mt-0.5">
                          {service.priceSub}
                        </span>
                      </div>
                      <span className="shrink-0 text-[11px] font-extrabold text-orange-700 bg-orange-100 px-2.5 py-1 rounded-lg border border-orange-200">
                        Zero Broker Fee
                      </span>
                    </div>

                    {/* Key Highlights Checklist */}
                    <ul className="mt-4 space-y-2 text-xs text-slate-700">
                      {service.highlights.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons: Crisp White/Emerald + 10% High-Conversion Orange WhatsApp */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/${service.slug}`}
                      className="flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors text-center border border-slate-200"
                    >
                      <span>View Specs</span>
                      <svg className="w-3.5 h-3.5 ml-1 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <button
                      onClick={() => onOpenInquiry?.(service)}
                      className="py-2.5 px-3 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
                    >
                      Inquire Quote
                    </button>
                  </div>

                  {/* 10% High-Conversion Vibrant Orange WhatsApp Action Button */}
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/20 transition-all hover:scale-[1.01]"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                    </svg>
                    <span>Book on WhatsApp (Instant Reply)</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner (Light Green Container with White & Orange Elements) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-950/10">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-200 text-xs font-semibold">
              <span>Local Harbour Coordination</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Can’t decide which boat tour fits your group?
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
              Talk directly with our local Alleppey coordinator at Finishing Point. We help you choose between private houseboats, shikaras, kayaking, or combo packages based on your budget.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={SITE_CONFIG.phoneTel}
              className="flex-1 md:flex-none text-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-colors"
            >
              Call {SITE_CONFIG.phone}
            </a>
            <a
              href={getPackageBookingWhatsAppUrl({
                packageName: "General Alleppey Boat Tour Consultation",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-orange-950/20 orange-pulse"
            >
              <span>Get Free Advice on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
