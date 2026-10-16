"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import BookingModal from "./BookingModal";
import { ServiceItem, SERVICES_DATA } from "../config/services";
import { getPackageBookingWhatsAppUrl, SITE_CONFIG } from "../config/site";

interface ServicePageTemplateProps {
  service: ServiceItem;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTierName, setSelectedTierName] = useState<string>(service.title);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleOpenInquiry = (tierName?: string) => {
    setSelectedTierName(tierName || service.title);
    setModalOpen(true);
  };

  // Other services for cross-linking
  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Navbar */}
      <Navbar onOpenBookingModal={() => handleOpenInquiry()} />

      <main className="flex-1 w-full">
        {/* Breadcrumb Bar */}
        <div className="bg-slate-100 border-b border-slate-200/80 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-emerald-700 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-emerald-700 transition-colors">
                Alleppey Boat Tour Packages
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold truncate">{service.shortTitle}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-12 sm:py-16 lg:py-20">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Value Prop */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{service.badge} • Verified Fleet</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                  {service.tagline}
                </p>

                {/* Rating & Review Counter */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                    <span className="text-amber-400 font-bold">★ {service.rating}</span>
                    <span className="text-slate-300">({service.reviewCount} Reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Instant WhatsApp Confirmation</span>
                  </div>
                </div>

                {/* Price Callout Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-emerald-300 font-medium block">
                      Guaranteed Direct Owner Pricing:
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">
                        {service.startingPrice}
                      </span>
                      {service.originalPrice && (
                        <span className="text-sm line-through text-slate-400">
                          {service.originalPrice}
                        </span>
                      )}
                      <span className="text-xs font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded">
                        Save 20%
                      </span>
                    </div>
                    <span className="text-xs text-slate-300 mt-0.5 block">{service.priceSub}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenInquiry()}
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
                    >
                      Inquire Quote
                    </button>
                    <a
                      href={getPackageBookingWhatsAppUrl({
                        packageName: service.title,
                        boatType: service.shortTitle,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-950/50 transition-all hover:scale-105"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                      </svg>
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image with Frame */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    priority
                    className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                      Authentic Alleppey Experience
                    </span>
                    <p className="text-sm font-semibold mt-0.5 text-slate-200">
                      {service.suitableFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Specs Strip */}
        <section className="bg-white border-b border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Duration
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-1 block">
                  {service.quickSpecs.duration}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Capacity
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-1 block">
                  {service.quickSpecs.capacity}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Meals / Catering
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-1 block truncate">
                  {service.quickSpecs.meals}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Timings
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-1 block">
                  {service.quickSpecs.timing}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Overview & Highlights Section */}
        <section className="py-14 sm:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Text Overview */}
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  About This Service
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Experience {service.shortTitle} in Alleppey
                </h2>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.overview.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="pt-4">
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    Key Features &amp; Tour Inclusions:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.highlights.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800"
                      >
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
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Quick Booking Box */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Fast Booking Support
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Check Real-Time Availability
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Get photos of available boats, food menus, and direct pricing on WhatsApp in 5 minutes.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                    <span className="text-slate-600 font-medium">Service Name</span>
                    <span className="font-bold text-slate-900">{service.shortTitle}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                    <span className="text-slate-600 font-medium">Pricing Guarantee</span>
                    <span className="font-bold text-emerald-700">Direct Owner Rates</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                    <span className="text-slate-600 font-medium">Boarding Point</span>
                    <span className="font-bold text-slate-900">Finishing Point, Punnamada</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={getPackageBookingWhatsAppUrl({
                      packageName: service.title,
                      boatType: service.shortTitle,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-900/20 transition-all hover:scale-[1.02]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                    </svg>
                    <span>Instant Booking on WhatsApp</span>
                  </a>

                  <a
                    href={SITE_CONFIG.phoneTel}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
                  >
                    <span>Call Harbour Coordinator: {SITE_CONFIG.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Package Tiers / Options Section */}
        <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Choose Your Plan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                {service.shortTitle} Options &amp; Packages
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                All package tiers include verified safety gear, trained staff, and no hidden taxes or unexpected surcharges.
              </p>
            </div>

            <div className={`grid grid-cols-1 ${service.tiers.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-8`}>
              {service.tiers.map((tier) => {
                const tierWhatsAppUrl = getPackageBookingWhatsAppUrl({
                  packageName: `${service.shortTitle} - ${tier.name}`,
                  boatType: service.shortTitle,
                });

                return (
                  <div
                    key={tier.id}
                    className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl ring-2 ring-emerald-500 scale-[1.02]"
                        : "bg-white text-slate-800 border border-slate-200/90 shadow-md hover:shadow-xl"
                    }`}
                  >
                    <div>
                      {/* Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                            tier.popular
                              ? "bg-emerald-500 text-slate-950 font-extrabold"
                              : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          }`}
                        >
                          {tier.badge || "Verified Option"}
                        </span>
                        {tier.popular && (
                          <span className="text-xs font-bold text-amber-300">★ Most Popular</span>
                        )}
                      </div>

                      {/* Tier Name */}
                      <h3
                        className={`text-xl font-bold ${
                          tier.popular ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {tier.name}
                      </h3>

                      {/* Pricing */}
                      <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex items-baseline gap-2">
                          <span
                            className={`text-3xl font-extrabold ${
                              tier.popular ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {tier.price}
                          </span>
                          {tier.originalPrice && (
                            <span className="text-xs line-through text-slate-400">
                              {tier.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-400 block mt-0.5">
                          {tier.priceNote}
                        </span>
                      </div>

                      {/* Tier Specs */}
                      <div className="mt-4 space-y-1.5 text-xs text-slate-400">
                        <p>⏱️ Duration: <span className="font-semibold text-slate-200">{tier.duration}</span></p>
                        <p>👥 Capacity: <span className="font-semibold text-slate-200">{tier.capacity}</span></p>
                      </div>

                      {/* Features */}
                      <ul className="mt-5 space-y-2.5 text-xs">
                        {tier.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className={tier.popular ? "text-slate-300" : "text-slate-600"}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 pt-4 border-t border-white/10 space-y-2">
                      <a
                        href={tierWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all ${
                          tier.popular
                            ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                            : "bg-emerald-600 hover:bg-emerald-700 text-white"
                        }`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                        </svg>
                        <span>Book This Tier (WhatsApp)</span>
                      </a>

                      <button
                        onClick={() => handleOpenInquiry(tier.name)}
                        className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                          tier.popular
                            ? "bg-white/10 hover:bg-white/20 text-white"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                      >
                        Inquire Availability
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Itinerary Timeline */}
        <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Step-by-Step Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                Tour Timeline &amp; Highlights
              </h2>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/40 space-y-8 ml-3 sm:ml-6">
              {service.itinerary.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-slate-50 group-hover:scale-125 transition-transform" />

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      {step.time}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inclusions vs Exclusions Comparison */}
        <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Clear Inclusions &amp; Exclusions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Zero hidden surprises. Here is exactly what is covered in your booking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200/80">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <h3 className="text-base font-bold text-emerald-950">Included in Package:</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-900">
                  {service.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold text-sm">
                    ✕
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Not Included:</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {service.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                Frequently Asked Questions About {service.shortTitle}
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base">{faq.question}</span>
                      <span className="text-emerald-600 text-lg font-bold">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cross-linking Related Boat Tour Packages */}
        <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Explore Other Alleppey Boat Tour Packages
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Combine experiences for the ultimate Kerala backwaters holiday.
                </p>
              </div>
              <Link
                href="/#services"
                className="text-xs sm:text-sm font-bold text-emerald-700 hover:underline"
              >
                View all 6 services →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/${rel.slug}`}
                  className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all"
                >
                  <div className="aspect-16/10 relative overflow-hidden bg-slate-900">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold text-slate-900 bg-white/95 px-2 py-0.5 rounded">
                        {rel.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors text-sm">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                      {rel.tagline}
                    </p>
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
                      <span className="font-bold text-emerald-800">{rel.startingPrice}</span>
                      <span className="text-slate-600 font-semibold group-hover:translate-x-1 transition-transform">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Booking Banner */}
        <section className="bg-gradient-to-r from-emerald-950 via-slate-950 to-teal-950 text-white py-14 sm:py-18">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Book Your {service.shortTitle} in Alleppey?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Get direct boat owner rates with zero middleman markup. Instant confirmation and route advice on WhatsApp.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getPackageBookingWhatsAppUrl({
                  packageName: service.title,
                  boatType: service.shortTitle,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-xl shadow-emerald-950/60 hover:scale-105"
              >
                <span>Book on WhatsApp Now</span>
              </a>
              <button
                onClick={() => handleOpenInquiry()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
              >
                Inquire via Web Form
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialSearchData={{
          boatType: selectedTierName,
          date: "",
          guests: "2 Guests (Couple)",
        }}
      />
    </div>
  );
}
