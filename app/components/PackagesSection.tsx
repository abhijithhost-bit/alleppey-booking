"use client";

import { useState } from "react";
import { getPackageBookingWhatsAppUrl, SITE_CONFIG } from "../config/site";

export interface PackageItem {
  id: string;
  title: string;
  category: "houseboat" | "shikara" | "daycruise" | "kayaking";
  price: string;
  originalPrice?: string;
  priceSub: string;
  duration: string;
  capacity: string;
  mealPlan: string;
  badge?: string;
  features: string[];
  recommendedFor: string;
}

const PACKAGES_DATA: PackageItem[] = [
  {
    id: "1-bhk-deluxe",
    title: "1-BHK Deluxe Houseboat (Couples Retreat)",
    category: "houseboat",
    price: "₹6,500",
    originalPrice: "₹8,500",
    priceSub: "per night / 2 guests",
    duration: "21 Hours (12:00 PM – 9:00 AM)",
    capacity: "2 Adults (+ 1 Child)",
    mealPlan: "All Meals Included (Lunch, Tea, Dinner, Breakfast)",
    badge: "Most Popular for Couples",
    features: [
      "Private AC Bedroom with Attached Bath",
      "Dedicated Captain, Engine Driver & Private Chef",
      "Traditional Kerala Feast with Karimeen Fish Fry",
      "Sunset Cruise through Punnamada & Vembanad Lake",
      "Night AC (9:00 PM to 6:00 AM)",
    ],
    recommendedFor: "Honeymoon & Romantic Getaways",
  },
  {
    id: "2-bhk-premium",
    title: "2-BHK Premium Houseboat (Family Cruise)",
    category: "houseboat",
    price: "₹10,500",
    originalPrice: "₹13,500",
    priceSub: "per night / 4 guests",
    duration: "21 Hours (12:00 PM – 9:00 AM)",
    capacity: "4 to 6 Guests",
    mealPlan: "All Meals Included (Kerala Non-Veg / Veg)",
    badge: "Best for Families",
    features: [
      "2 Spacious AC Bedrooms with Private Bathrooms",
      "Open Front Sundeck & Dining Area",
      "Full Time or Night AC options available",
      "Freshly caught fish cooked live onboard",
      "Village walk & sunset photo stops",
    ],
    recommendedFor: "Small Families & Close Friends",
  },
  {
    id: "3-hour-shikara",
    title: "Scenic Canal Shikara Ride (Private Boat)",
    category: "shikara",
    price: "₹2,400",
    originalPrice: "₹3,000",
    priceSub: "for 3 hours (up to 4 guests)",
    duration: "3 Hours (Flexible Timings)",
    capacity: "1 to 8 Guests",
    mealPlan: "Snacks can be arranged / local village tea stops",
    badge: "Top Value",
    features: [
      "Traditional wooden Shikara with cushioned lounge",
      "Access to narrow canals houseboats cannot reach",
      "Close-up views of village life & duck farming",
      "Life jackets and experienced local boatman guide",
      "Starting at ₹800/hour for extra time",
    ],
    recommendedFor: "Day Visitors, Photographers & Budget Travelers",
  },
  {
    id: "sunrise-shikara",
    title: "Magical Sunrise Shikara Cruise",
    category: "shikara",
    price: "₹1,800",
    originalPrice: "₹2,400",
    priceSub: "for 2 hours early morning",
    duration: "2 Hours (6:00 AM – 8:00 AM)",
    capacity: "1 to 6 Guests",
    mealPlan: "Complimentary Hot Kerala Chai / Coffee",
    badge: "Breathtaking Views",
    features: [
      "Witness morning mist lifting over Vembanad lake",
      "Bird watching: Kingfishers, cormorants & egrets",
      "Pure tranquility before backwater traffic starts",
      "Scenic lotus ponds and silent canals",
    ],
    recommendedFor: "Nature Lovers & Early Risers",
  },
  {
    id: "day-cruise-houseboat",
    title: "Exclusive Full-Day Houseboat Cruise",
    category: "daycruise",
    price: "₹7,500",
    originalPrice: "₹9,500",
    priceSub: "for up to 10 guests",
    duration: "6 Hours (11:30 AM – 5:30 PM)",
    capacity: "5 to 25+ Guests",
    mealPlan: "Grand Kerala Banana Leaf Buffet Lunch + Evening Tea",
    badge: "Best for Celebrations",
    features: [
      "No overnight stay needed – return the same evening",
      "Spacious dining hall & music system onboard",
      "Lavish traditional Kerala buffet lunch",
      "Route: Punnamada Lake, Kuttanad & rivers",
      "Great for birthdays, reunions, and team outings",
    ],
    recommendedFor: "Day Trippers & Corporate Groups",
  },
  {
    id: "kayak-adventure",
    title: "Guided Backwater Kayak & Canoe Safari",
    category: "kayaking",
    price: "₹1,200",
    originalPrice: "₹1,500",
    priceSub: "per person (3-hour tour)",
    duration: "3 Hours (Morning / Evening)",
    capacity: "Solo or Tandem Kayaks",
    mealPlan: "Tender Coconut Water & Traditional Snacks",
    badge: "Eco Adventure",
    features: [
      "Paddle through hidden, serene interior village canals",
      "High quality touring kayaks & safety gear provided",
      "Accompanied by an English/Hindi speaking certified guide",
      "Immersive eco-friendly zero-carbon backwater journey",
    ],
    recommendedFor: "Adventure Seekers & Fitness Enthusiasts",
  },
];

interface PackagesSectionProps {
  onSelectPackage?: (pkg: PackageItem) => void;
}

export default function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  const [selectedTab, setSelectedTab] = useState<string>("all");

  const filteredPackages =
    selectedTab === "all"
      ? PACKAGES_DATA
      : PACKAGES_DATA.filter((p) => p.category === selectedTab);

  return (
    <section id="packages" className="py-16 sm:py-24 bg-linear-to-b from-white via-emerald-50/20 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200">
            Handpicked Backwater Best-Sellers
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Curated Alleppey Boat Tour Packages
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            All boat packages include verified safety equipment, licensed local drivers, and zero hidden charges. Direct owner rates guaranteed.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2">
            {[
              { id: "all", label: "All Packages" },
              { id: "houseboat", label: "Overnight Houseboats" },
              { id: "shikara", label: "Shikara Boat Rides" },
              { id: "daycruise", label: "Day Cruises" },
              { id: "kayaking", label: "Kayaking & Canoe" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedTab === tab.id
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-800/20"
                    : "bg-white text-slate-700 hover:bg-emerald-50 border border-emerald-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid (60% White + 30% Light Green + 10% Orange) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => {
            const whatsAppUrl = getPackageBookingWhatsAppUrl({
              packageName: pkg.title,
              boatType: pkg.category,
            });

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Card Body */}
                <div className="p-6">
                  {/* Badge & Category Strip */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {pkg.category === "houseboat"
                        ? "Houseboat"
                        : pkg.category === "shikara"
                        ? "Shikara Ride"
                        : pkg.category === "daycruise"
                        ? "Day Cruise"
                        : "Adventure"}
                    </span>
                    {pkg.badge && (
                      <span className="text-[11px] font-bold text-orange-800 bg-orange-100 px-2.5 py-1 rounded-md border border-orange-200">
                        ★ {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Ideal for: <span className="text-slate-700 font-semibold">{pkg.recommendedFor}</span>
                  </p>

                  {/* Pricing Box with Light Green Tint & Orange Discount Badge */}
                  <div className="mt-4 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900">
                        {pkg.price}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-xs line-through text-slate-400">
                          {pkg.originalPrice}
                        </span>
                      )}
                      <span className="text-xs font-extrabold text-orange-700 bg-orange-100 px-2 py-0.5 rounded ml-auto border border-orange-200">
                        Save 20%
                      </span>
                    </div>
                    <span className="block text-[11px] text-emerald-800 font-semibold mt-1">
                      {pkg.priceSub}
                    </span>
                  </div>

                  {/* Trip Specs (Light Green 30% Details) */}
                  <div className="mt-4 space-y-2 py-3 border-y border-emerald-100 text-xs text-slate-700 bg-emerald-50/30 -mx-6 px-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-slate-900">Duration:</span>
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-semibold text-slate-900">Capacity:</span>
                      <span>{pkg.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-semibold text-slate-900">Meals:</span>
                      <span className="truncate">{pkg.mealPlan}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                      Inclusions &amp; Highlights:
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer with High-Conversion Orange WhatsApp Button */}
                <div className="p-6 pt-0 bg-white">
                  <div className="flex flex-col sm:flex-row items-center gap-2 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onSelectPackage?.(pkg)}
                      className="w-full sm:w-1/2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors cursor-pointer border border-slate-200"
                    >
                      Inquire Details
                    </button>
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-extrabold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all shadow-md shadow-orange-500/20"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                      </svg>
                      <span>Book WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Booking Callout (Lush Light Green Gradient Container with Orange Accent) */}
        <div className="mt-12 bg-linear-to-r from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200 bg-white/10 px-2.5 py-1 rounded-md">
              Group &amp; Event Booking
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-2">
              Need a Custom Boat Tour or Large Group Booking?
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              We arrange 3 to 10-bedroom houseboats for weddings, family reunions, and corporate offsites. Get custom itineraries and direct group discounts.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={SITE_CONFIG.phoneTel}
              className="flex-1 md:flex-none text-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              Call {SITE_CONFIG.phone}
            </a>
            <a
              href={getPackageBookingWhatsAppUrl({
                packageName: "Custom Group / Family Booking",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-orange-950/20 transition-all hover:scale-105 orange-pulse"
            >
              <span>Instant WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
