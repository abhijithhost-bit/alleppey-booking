"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE_CONFIG, getPackageBookingWhatsAppUrl } from "../config/site";

interface HeroSectionProps {
  onSearch?: (searchData: { boatType: string; date: string; guests: string }) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [boatType, setBoatType] = useState("Private Houseboats (1 to 7 BHK Luxury/Deluxe)");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2 Guests (Couple / 1 Bedroom)");

  // Quick price guide preview based on selection to increase confidence
  const getEstimatedPrice = () => {
    if (boatType.includes("Private Houseboat")) return "From ₹6,500/night (All Meals Inc.)";
    if (boatType.includes("Sharing Houseboat")) return "From ₹3,999/room (All Meals Inc.)";
    if (boatType.includes("Shikara")) return "From ₹800/hour (Narrow Canals)";
    if (boatType.includes("Kayaking")) return "From ₹1,200/person (Guided)";
    if (boatType.includes("Speed Boat")) return "From ₹1,800/ride (Vembanad Thrill)";
    return "From ₹2,500/night";
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ boatType, date, guests });
    } else {
      const targetUrl = getPackageBookingWhatsAppUrl({
        packageName: "Hero Search Inquiry",
        boatType,
        date: date || "Flexible / Upcoming",
        guests,
      });
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-linear-to-b from-emerald-50/60 via-white to-white pt-8 pb-16 sm:pt-14 sm:pb-24"
      aria-label="Alleppey Boat Tour Booking"
    >
      {/* Decorative Light Green Ambient Blurs (30% Light Green Atmosphere) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-r from-emerald-100/40 via-teal-100/30 to-emerald-100/40 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-emerald-200/20 blur-2xl -z-10 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-orange-100/30 blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 shadow-xs text-xs font-bold text-emerald-800">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kerala Tourism Approved Fleet</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 shadow-xs text-xs font-bold text-orange-800">
            <span>⚡ Direct Boat Owner Rates (Zero Broker Fee)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
            <span className="text-orange-500">★★★★★</span>
            <span>4.9/5 from 3,420+ Guests</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
            Alleppey Boat Tour Packages &amp;{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-700 via-emerald-600 to-teal-700 underline decoration-orange-400 decoration-wavy decoration-2">
              Backwater Cruises
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Book private luxury houseboats, budget sharing houseboats, scenic village shikara canal rides, and sunrise kayaking with direct local boat owners. Fresh Kerala meals cooked live onboard.
          </p>
        </div>

        {/* Hero Main Grid: Interactive Booking Card (Left) + High Visual Media Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* High-Converting Form Card (60% White + 30% Light Green Border + 10% Orange CTA) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 shadow-xl shadow-emerald-950/5 border border-emerald-100 relative">
            {/* Quick Benefit Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                  Quick Availability &amp; Price Check
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Find the Best Boat for Your Dates
                </h2>
              </div>
              <span className="text-xs font-bold text-orange-700 bg-orange-100/80 px-2.5 py-1 rounded-full border border-orange-200">
                ⚡ Instant Reply
              </span>
            </div>

            <form onSubmit={handleSearchSubmit} className="space-y-4">
              {/* Boat Category Selector */}
              <div>
                <label
                  htmlFor="hero-boat-type"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  1. Select Boat &amp; Tour Type
                </label>
                <div className="relative">
                  <select
                    id="hero-boat-type"
                    value={boatType}
                    onChange={(e) => setBoatType(e.target.value)}
                    className="w-full bg-emerald-50/40 text-slate-900 text-sm font-semibold rounded-2xl px-4 py-3.5 border border-emerald-200 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-200 appearance-none cursor-pointer transition-colors"
                  >
                    <option value="Private Houseboats (1 to 7 BHK Luxury/Deluxe)">
                      🏠 Private Houseboat (1 to 7 BHK Luxury / Deluxe)
                    </option>
                    <option value="Sharing Houseboats (Budget Rooms)">
                      🤝 Sharing Houseboat (Budget Room + Meals)
                    </option>
                    <option value="Shikara Boat Rides (Narrow Village Canals)">
                      🛶 Shikara Boat Ride (Village Canals - 2 to 5 Hours)
                    </option>
                    <option value="Backwater Kayaking & Canoe Tours">
                      🚣 Guided Kayaking &amp; Canoe Safari
                    </option>
                    <option value="Speed Boat Rides (Vembanad Thrill)">
                      ⚡ Speed Boat (Lake Vembanad Adventure)
                    </option>
                    <option value="Backwater Homestay & Heritage Cottages">
                      🏡 Waterfront Heritage Homestay
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-emerald-800">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Date & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="hero-date"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    2. Preferred Travel Date
                  </label>
                  <input
                    type="date"
                    id="hero-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-emerald-50/40 text-slate-900 text-sm font-semibold rounded-2xl px-4 py-3.5 border border-emerald-200 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    htmlFor="hero-guests"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    3. Guests / Group Size
                  </label>
                  <div className="relative">
                    <select
                      id="hero-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-emerald-50/40 text-slate-900 text-sm font-semibold rounded-2xl px-4 py-3.5 border border-emerald-200 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-200 appearance-none cursor-pointer transition-colors"
                    >
                      <option value="2 Guests (Couple / 1 Bedroom)">2 Guests (Couple / 1 Bedroom)</option>
                      <option value="3 - 4 Guests (Family / 2 Bedroom)">3 - 4 Guests (Family / 2 Bedrooms)</option>
                      <option value="5 - 8 Guests (Group / 3-4 Bedrooms)">5 - 8 Guests (3 - 4 Bedrooms)</option>
                      <option value="9 - 15 Guests (Large Family / Group)">9 - 15 Guests (5+ Bedrooms)</option>
                      <option value="16+ Guests (Day Cruise / Big Group)">16+ Guests (Day Cruise / Celebration)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-emerald-800">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Estimated Fare Highlight */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-base">🏷️</span>
                  <div>
                    <span className="text-slate-500 font-medium block text-[11px]">Direct Owner Estimate:</span>
                    <span className="font-extrabold text-emerald-900 text-sm sm:text-base">
                      {getEstimatedPrice()}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-orange-700 bg-orange-100 px-2 py-1 rounded-md border border-orange-200">
                  Save ~20%
                </span>
              </div>

              {/* High-Converting 10% Orange Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-base font-extrabold text-white bg-linear-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/30 transition-all hover:scale-[1.01] cursor-pointer orange-pulse"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                  </svg>
                  <span>Check Live Rates &amp; Availability ⚡</span>
                </button>

                <a
                  href={SITE_CONFIG.phoneTel}
                  className="w-full sm:w-auto px-5 py-4 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-center"
                >
                  Direct Call: {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Reassurance Micro-Copy */}
              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <span className="text-emerald-600 font-bold">✓</span> No advance needed for inquiry
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-emerald-600 font-bold">✓</span> Real boat photos sent directly
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-emerald-600 font-bold">✓</span> Free cancellation up to 48 hrs
                </span>
              </div>
            </form>
          </div>

          {/* Right Visual Showcase with Floating Trust Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              {/* Picture for High-Performance LCP */}
              <picture className="w-full h-full block">
                <source media="(max-width: 768px)" srcSet="/hero-image-mobile.webp" type="image/webp" />
                <source media="(min-width: 769px)" srcSet="/hero-image-desktop.webp" type="image/webp" />
                <img
                  src="/hero-image-desktop.webp"
                  alt="Traditional Alleppey houseboat cruising scenic Kerala backwaters in Alappuzha"
                  className="w-full h-105 sm:h-115 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </picture>

              {/* Bottom Gradient Overlay for High Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-black/10 pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md border border-white/50 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Punnamada Lake, Alleppey
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-extrabold shadow-md">
                  Direct Boat Owner
                </span>
              </div>

              {/* Bottom Floating Info Strip */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-800 block">
                    Verified Guest Review
                  </span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-orange-500 font-bold">★★★★★</span>
                    <span className="font-bold text-slate-900">&ldquo;Unforgettable cruise!&rdquo;</span>
                  </div>
                  <span className="text-[11px] text-slate-600 block">Ananya &amp; Rohit, Bengaluru</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block">Houseboat Category</span>
                  <span className="font-extrabold text-emerald-800 text-xs sm:text-sm">1–7 BHK Deluxe</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Card Accent */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3.5 rounded-2xl shadow-xl border border-emerald-100 items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-lg">
                🛡️
              </div>
              <div>
                <span className="text-xs font-extrabold text-slate-900 block">100% Certified Safety</span>
                <span className="text-[11px] text-slate-500 block">Govt Licensed Crew &amp; Life Jackets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
