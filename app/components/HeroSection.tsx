"use client";

import { useState } from "react";
import { SITE_CONFIG, getPackageBookingWhatsAppUrl } from "../config/site";

interface HeroSectionProps {
  onSearch?: (searchData: { boatType: string; date: string; guests: string }) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [boatType, setBoatType] = useState("Overnight Houseboat (Deluxe/Luxury)");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2 Guests (Couple)");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ boatType, date, guests });
    } else {
      // Directly redirect to WhatsApp with pre-filled inquiry
      const targetUrl = getPackageBookingWhatsAppUrl({
        packageName: "Quick Search Inquiry",
        boatType,
        date: date || "Flexible / Upcoming",
        guests,
      });
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="relative min-h-[620px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-slate-900"
      aria-label="Alleppey Backwater Boat Tour Booking"
    >
      {/* Responsive Hero Picture for Mobile & Desktop (LCP Optimized) */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none">
        {/* Mobile image for screen widths up to 768px */}
        <source
          media="(max-width: 768px)"
          srcSet="/hero-image-mobile.webp"
          type="image/webp"
        />
        {/* Desktop image for screen widths above 768px */}
        <source
          media="(min-width: 769px)"
          srcSet="/hero-image-desktop.webp"
          type="image/webp"
        />
        {/* Fallback image with priority hints */}
        <img
          src="/hero-image-desktop.webp"
          alt="Traditional Alleppey houseboat cruising scenic Kerala backwaters in Alappuzha"
          className="w-full h-full object-cover object-center transform scale-105 duration-1000 ease-out"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Dark Vignette Overlay for High Readability and Contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/85"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 text-center">
        {/* Trust & Certification Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Kerala Tourism Approved • Direct Boat Owner Rates</span>
        </div>

        {/* SEO H1 Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
          Alleppey Houseboat Booking &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
            Backwater Boat Tours
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
          Cruise tranquil lagoons, lush paddy fields, and canal villages. Verified houseboats, private shikara rides, and kayak adventures with fresh authentic Kerala meals.
        </p>

        {/* Value Proposition Highlights */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Verified Crew &amp; Safety Jackets</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Authentic Kerala Meals Included</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Agent Commission (Best Price)</span>
          </div>
        </div>

        {/* High Conversion Quick Search & Availability Filter Card */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className="p-3 sm:p-5 rounded-2xl glass-panel-dark shadow-2xl border border-white/20 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Experience / Boat Type */}
              <div className="space-y-1">
                <label
                  htmlFor="hero-boat-type"
                  className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider"
                >
                  Experience Type
                </label>
                <div className="relative">
                  <select
                    id="hero-boat-type"
                    value={boatType}
                    onChange={(e) => setBoatType(e.target.value)}
                    className="w-full bg-slate-900/90 text-white text-sm font-medium rounded-xl px-3.5 py-3 border border-slate-700 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 appearance-none cursor-pointer"
                  >
                    <option value="Overnight Houseboat (Deluxe/Luxury)">
                      Overnight Houseboat (Deluxe/Luxury)
                    </option>
                    <option value="Day Cruise Houseboat (11:30 AM - 5 PM)">
                      Day Cruise Houseboat (11:30 AM - 5 PM)
                    </option>
                    <option value="Shikara Boat Ride (2 - 4 Hours)">
                      Shikara Boat Ride (2 - 4 Hours)
                    </option>
                    <option value="Sunrise Shikara Cruise">
                      Sunrise Shikara Cruise (Early Morning)
                    </option>
                    <option value="Backwater Kayaking & Canoe Tour">
                      Backwater Kayaking &amp; Canoe Tour
                    </option>
                    <option value="Speedboat & Motorboat Ride">
                      Speedboat &amp; Motorboat Ride
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-1">
                <label
                  htmlFor="hero-date"
                  className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="hero-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-900/90 text-white text-sm font-medium rounded-xl px-3.5 py-3 border border-slate-700 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              {/* Guests Selection */}
              <div className="space-y-1">
                <label
                  htmlFor="hero-guests"
                  className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider"
                >
                  Guests / Group Size
                </label>
                <div className="relative">
                  <select
                    id="hero-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-slate-900/90 text-white text-sm font-medium rounded-xl px-3.5 py-3 border border-slate-700 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 appearance-none cursor-pointer"
                  >
                    <option value="2 Guests (Couple)">2 Guests (Couple / 1 Bedroom)</option>
                    <option value="3 - 4 Guests (Family)">3 - 4 Guests (Family / 2 Bedroom)</option>
                    <option value="5 - 8 Guests (Group)">5 - 8 Guests (3 - 4 Bedrooms)</option>
                    <option value="9 - 15 Guests (Large Family)">9 - 15 Guests (5+ Bedrooms)</option>
                    <option value="16+ Guests (Corporate / Party)">16+ Guests (Day Cruise / Big Group)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit & Quick Call Row */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400 hidden sm:inline-block">
                ⚡ Instant availability check via WhatsApp or Direct Call
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="w-full sm:w-auto text-center px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  Call {SITE_CONFIG.phone}
                </a>
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-900/50 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                  </svg>
                  <span>Check Rates &amp; Availability</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
