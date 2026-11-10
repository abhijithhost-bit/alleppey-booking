"use client";

import React, { useState, useRef, useEffect } from "react";
import { useBooking } from "./BookingContext";
import DatePicker from "@/components/DatePicker";
import { CruisePackageId, PACKAGE_INFO } from "@/lib/pricing";
import {
  ShieldCheck,
  Check,
  ChevronDown,
  Info,
  Zap,
  Phone,
  MessageCircle,
} from "lucide-react";

interface BookingCardProps {
  review?: { quote: string; author: string } | null;
  compact?: boolean;
}

export default function BookingCard({ review, compact = false }: BookingCardProps) {
  const {
    bedrooms,
    packageId,
    setPackageId,
    date,
    setDate,
    adults,
    setAdults,
    kids,
    setKids,
    pricing,
    whatsAppUrl,
  } = useBooking();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const maxCapacity = pricing.maxCapacity;
  const totalGuests = adults + kids;

  const handleAdultMinus = () => {
    setAdults((prev) => Math.max(1, prev - 1));
  };

  const handleAdultPlus = () => {
    if (adults < maxCapacity && totalGuests < maxCapacity) {
      setAdults((prev) => prev + 1);
    }
  };

  const handleKidMinus = () => {
    setKids((prev) => Math.max(0, prev - 1));
  };

  const handleKidPlus = () => {
    if (kids < maxCapacity && totalGuests < maxCapacity) {
      setKids((prev) => prev + 1);
    }
  };

  const currentPkgInfo = PACKAGE_INFO[packageId];

  return (
    <aside className="ab-sh-sidebar w-full" id="booking-widget">
      <div className="ab-sh-price-card bg-white rounded-3xl border border-slate-200 shadow-xl">
        {/* Card Header */}
        <div className="ab-sh-price-card-body p-4 sm:p-5">
          <div className="ab-sh-price-header pb-2.5 border-b border-slate-100">
            {/* Top Badges */}
            <div className="ab-header-top-badge flex items-center gap-2 mb-1.5">
              <span className="ab-private-badge inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-orange-light text-brand-orange text-xs font-bold rounded-full border border-orange-200/60">
                <ShieldCheck size={12} className="text-brand-orange" />
                100% Private Charter
              </span>
              <span className="ab-dtpc-badge inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200/60">
                <Check size={12} className="text-emerald-600 stroke-[3]" />
                Verified Boat
              </span>
            </div>

            <p className="ab-sh-price-subtitle text-xs text-slate-500 font-medium">
              Whole boat • {bedrooms} bedroom houseboat • Up to {maxCapacity}{" "}
              guests
            </p>
          </div>

          {/* Booking Inputs */}
          <div className="ab-booking-unified mt-3.5 space-y-2.5">
            {/* 1. Cruise Package Dropdown */}
            <div className="ab-booking-field" ref={dropdownRef}>
              <label className="ab-field-label block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Cruise Package
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="ab-custom-select-trigger w-full flex items-center justify-between p-2.5 sm:p-3 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-left transition-colors"
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  <div className="ab-cst-content">
                    <span className="ab-cst-title font-bold text-sm text-brand-navy block">
                      {currentPkgInfo.title}
                    </span>
                    <span className="ab-cst-subtitle text-xs text-slate-500 block mt-0.5">
                      {currentPkgInfo.subtitle}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-brand-orange" : ""
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    className="ab-custom-select-options absolute z-50 left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1 divide-y divide-slate-100"
                    role="listbox"
                  >
                    {(
                      [
                        { id: "overnight", badge: "Best Seller" },
                        { id: "day" },
                        { id: "night" },
                      ] as { id: CruisePackageId; badge?: string }[]
                    ).map((item) => {
                      const isSelected = packageId === item.id;
                      const info = PACKAGE_INFO[item.id];
                      return (
                        <button
                          key={item.id}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setPackageId(item.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`ab-cso-item w-full p-3 text-left transition-colors flex flex-col ${isSelected
                              ? "bg-brand-orange-light/60 font-semibold"
                              : "hover:bg-slate-50"
                            }`}
                        >
                          <div className="ab-cso-title flex items-center justify-between">
                            <span className="ab-cso-title-text text-sm font-bold text-brand-navy">
                              {info.title}
                            </span>
                            {item.badge && (
                              <span className="ab-cso-badge bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <span className="ab-cso-subtitle text-xs text-slate-500 mt-0.5">
                            {info.subtitle}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* 2. Check-in Date */}
            <div className="ab-booking-field ab-date-field relative">
              <label
                className="ab-field-label block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1"
                htmlFor="ab-date"
              >
                Check-in Date
              </label>
              <DatePicker
                id="ab-date"
                value={date}
                onChange={setDate}
                placeholder="Select check-in date"
                required
              />
            </div>

            {/* 3. Guests Counter (Side-by-Side) */}
            <div className="ab-booking-field">
              <label className="ab-field-label block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Guests
              </label>
              <div className="grid grid-cols-2 gap-2">
                {/* Adults row */}
                <div className="ab-guest-inner-row flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="ab-guest-info min-w-0 pr-1">
                    <span className="text-xs font-bold text-brand-navy block">
                      Adults
                    </span>
                    <small className="text-[11px] text-slate-400 block whitespace-nowrap">
                      Age 5+
                    </small>
                  </div>
                  <div className="ab-guest-controls flex items-center gap-1.5 flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleAdultMinus}
                      disabled={adults <= 1}
                      className="ab-ctrl-btn w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs"
                      aria-label="Decrease adults"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-bold text-sm text-brand-navy">
                      {adults}
                    </span>
                    <button
                      type="button"
                      onClick={handleAdultPlus}
                      disabled={
                        adults >= maxCapacity || totalGuests >= maxCapacity
                      }
                      className="ab-ctrl-btn w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs"
                      aria-label="Increase adults"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Kids row */}
                <div className="ab-guest-inner-row flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="ab-guest-info min-w-0 pr-1">
                    <span className="text-xs font-bold text-brand-navy block">
                      Kids
                    </span>
                    <small className="text-[11px] text-slate-400 block whitespace-nowrap">
                      &lt;5y (Free)
                    </small>
                  </div>
                  <div className="ab-guest-controls flex items-center gap-1.5 flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleKidMinus}
                      disabled={kids <= 0}
                      className="ab-ctrl-btn w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs"
                      aria-label="Decrease kids"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-bold text-sm text-brand-navy">
                      {kids}
                    </span>
                    <button
                      type="button"
                      onClick={handleKidPlus}
                      disabled={
                        kids >= maxCapacity || totalGuests >= maxCapacity
                      }
                      className="ab-ctrl-btn w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs"
                      aria-label="Increase kids"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="ab-price-breakdown mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
            <div className="ab-pb-row flex justify-between text-xs text-slate-600">
              <span className="flex items-center">
                Base Price{" "}
                <span className="text-[11px] text-slate-400 ml-1">
                  (Up to {pricing.threshold} Adults)
                </span>
              </span>
              <span className="font-semibold text-brand-navy">
                {pricing.formattedBase}
              </span>
            </div>

            {pricing.extraCharges > 0 && (
              <div className="ab-pb-row flex justify-between text-xs text-slate-600">
                <span>Extra Adults Charge</span>
                <span className="font-semibold text-brand-orange">
                  {pricing.formattedExtra}
                </span>
              </div>
            )}

            <hr className="border-slate-200 my-1.5" />

            <div className="ab-pb-row ab-pb-total flex justify-between items-baseline font-bold gap-2">
              <span className="text-xs sm:text-sm text-brand-navy whitespace-nowrap">Total Estimate</span>
              <span className="text-sm sm:text-base font-black text-brand-navy whitespace-nowrap">
                {pricing.formattedTotal}
              </span>
            </div>
          </div>

          {/* Capacity Note */}
          <div className="ab-capacity-note mt-2 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Info size={13} className="text-slate-400 flex-shrink-0" />
            <span>Maximum capacity is {maxCapacity} guests total.</span>
          </div>

          {/* Pricing Disclaimer */}
          <p className="mt-1 text-[11px] text-slate-400 italic leading-snug">
            Estimate only. Final rate depends on date, weekends, season &amp; boat availability.
          </p>

          {/* Testimonial / Review snippet */}
          {!compact && review && (
            <div className="ab-sidebar-review mt-3 p-3 bg-brand-orange-light/50 rounded-xl border border-brand-orange/20">
              <div className="ab-sr-stars text-amber-500 text-xs mb-1">
                ★★★★★
              </div>
              <div className="ab-sr-quote text-xs text-slate-700 italic leading-relaxed">
                "{review.quote}"
              </div>
              <div className="ab-sr-author text-[11px] font-bold text-brand-navy mt-1">
                — {review.author}
              </div>
            </div>
          )}
        </div>

        {/* Docked Action Area */}
        <div className="ab-sh-price-card-docked p-3.5 sm:p-4 sm:pb-9 bg-slate-50 border-t border-slate-100 text-center space-y-2">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check Availability on WhatsApp"
            className="ab-btn-wa w-[80%] sm:w-full mx-auto py-3.5 sm:py-3 px-4 bg-[#2cd664] hover:bg-[#25be57] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all text-sm sm:text-base group"
          >
            <MessageCircle
              size={19}
              className="fill-white/20 group-hover:scale-110 transition-transform flex-shrink-0"
            />
            <span>Check Availability on WhatsApp</span>
          </a>

          <div className="ab-response-guarantee flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-700">
            <Zap size={13} className="text-emerald-500 fill-emerald-500" />
            Usually replies in 2 mins
          </div>

          <a
            href="tel:+917012761588"
            className="ab-docked-call-link inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-navy transition-colors mt-0.5"
            aria-label="Call Us Directly"
          >
            <Phone size={12} />
            Prefer to call? +91 70127 61588
          </a>
        </div>
      </div>
    </aside>
  );
}

