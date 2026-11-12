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
  Flame,
  Phone,
  MessageCircle,
  MoonStar,
  Sun,
  Moon,
} from "lucide-react";

const PACKAGE_THEMES = {
  overnight: {
    badge: "Best Seller",
    icon: MoonStar,
    triggerBg: "bg-blue-50/70 hover:bg-blue-100/60",
    triggerBorder: "border-blue-200",
    iconContainerBg: "bg-blue-600 text-white shadow-xs shadow-blue-500/20",
    titleColor: "text-blue-950",
    subtitleColor: "text-blue-700/80",
    badgeClass: "bg-brand-orange text-white",
    dropdownActiveBg: "bg-blue-50/80",
    dropdownActiveBorder: "border-l-4 border-l-blue-600",
  },
  day: {
    badge: undefined,
    icon: Sun,
    triggerBg: "bg-orange-50/70 hover:bg-orange-100/60",
    triggerBorder: "border-orange-200",
    iconContainerBg: "bg-amber-500 text-white shadow-xs shadow-amber-500/20",
    titleColor: "text-amber-950",
    subtitleColor: "text-amber-700/80",
    badgeClass: "bg-amber-500 text-white",
    dropdownActiveBg: "bg-orange-50/80",
    dropdownActiveBorder: "border-l-4 border-l-amber-500",
  },
  night: {
    badge: undefined,
    icon: Moon,
    triggerBg: "bg-slate-100 hover:bg-slate-200/70",
    triggerBorder: "border-slate-300",
    iconContainerBg: "bg-slate-800 text-amber-200 shadow-xs shadow-slate-900/20",
    titleColor: "text-slate-900",
    subtitleColor: "text-slate-600",
    badgeClass: "bg-slate-800 text-white",
    dropdownActiveBg: "bg-slate-100",
    dropdownActiveBorder: "border-l-4 border-l-slate-800",
  },
} as const;

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
    seasonInfo,
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
  const currentTheme = PACKAGE_THEMES[packageId];
  const CurrentIcon = currentTheme.icon;

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
                  className={`ab-custom-select-trigger w-full flex items-center justify-between p-2.5 sm:p-3 border rounded-xl text-left transition-all ${currentTheme.triggerBg} ${currentTheme.triggerBorder}`}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${currentTheme.iconContainerBg}`}
                    >
                      <CurrentIcon size={18} />
                    </div>
                    <div className="ab-cst-content min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`ab-cst-title font-bold text-sm block ${currentTheme.titleColor}`}>
                          {currentPkgInfo.title}
                        </span>
                        {currentTheme.badge && (
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${currentTheme.badgeClass}`}
                          >
                            {currentTheme.badge}
                          </span>
                        )}
                      </div>
                      <span className={`ab-cst-subtitle text-xs block mt-0.5 ${currentTheme.subtitleColor}`}>
                        {currentPkgInfo.subtitle}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isDropdownOpen ? "rotate-180 text-brand-orange" : ""
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
                      const theme = PACKAGE_THEMES[item.id];
                      const ItemIcon = theme.icon;
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
                          className={`ab-cso-item w-full p-2.5 sm:p-3 text-left transition-colors flex items-center justify-between gap-2.5 ${
                            isSelected
                              ? `${theme.dropdownActiveBg} ${theme.dropdownActiveBorder} font-semibold`
                              : "hover:bg-slate-50 border-l-4 border-l-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${theme.iconContainerBg}`}
                            >
                              <ItemIcon size={16} />
                            </div>
                            <div className="min-w-0">
                              <div className="ab-cso-title flex items-center gap-1.5 flex-wrap">
                                <span className="ab-cso-title-text text-sm font-bold text-brand-navy">
                                  {info.title}
                                </span>
                                {item.badge && (
                                  <span
                                    className={`ab-cso-badge text-[10px] font-bold px-2 py-0.5 rounded-full ${theme.badgeClass}`}
                                  >
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <span className="ab-cso-subtitle text-xs text-slate-500 mt-0.5 block truncate">
                                {info.subtitle}
                              </span>
                            </div>
                          </div>
                          {isSelected && (
                            <div className="flex-shrink-0 pr-1">
                              <Check size={16} className="text-emerald-600 stroke-[3]" />
                            </div>
                          )}
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
              </div>
            </div>
          </div>

          {/* Seasonal Notice & Starting Price Display */}
          {seasonInfo.isPeak ? (
            <div className="ab-season-card mt-3 space-y-2">
              <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 rounded-xl text-left shadow-xs">
                <div className="flex items-center gap-1.5 text-amber-950 font-bold text-xs mb-1">
                  <Flame size={15} className="text-amber-600 flex-shrink-0 fill-amber-500" />
                  <span>{seasonInfo.periodName ? `${seasonInfo.periodName} Selected` : "Peak Holiday Season Selected"}</span>
                </div>
                <p className="text-[11px] text-amber-900/90 leading-relaxed">
                  {seasonInfo.description}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-slate-500 font-medium">Regular Base Tariff:</span>
                  <span className="font-semibold text-slate-500 line-through">
                    {pricing.formattedBase}
                  </span>
                </div>
                {pricing.extraCharges > 0 && (
                  <div className="flex justify-between items-baseline text-xs text-slate-500">
                    <span>Extra Adults ({adults - pricing.threshold} Guests):</span>
                    <span className="font-medium text-amber-900">Bedding included</span>
                  </div>
                )}
                <div className="flex justify-between items-baseline pt-1 border-t border-slate-200 font-bold">
                  <span className="text-xs text-brand-navy">Holiday Tariff:</span>
                  <span className="text-sm font-black text-amber-700 uppercase tracking-tight">
                    Custom Quote
                  </span>
                </div>
              </div>

              <div className="ab-capacity-note flex items-center gap-1.5 text-xs text-slate-500 font-medium px-0.5">
                <Info size={13} className="text-slate-400 flex-shrink-0" />
                <span>Capacity: Up to {maxCapacity} guests • Rates depend on live boat availability.</span>
              </div>
            </div>
          ) : seasonInfo.isWeekend ? (
            <div className="ab-season-card mt-3 space-y-2">
              <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl text-left shadow-xs">
                <div className="flex items-center gap-1.5 text-blue-950 font-bold text-xs mb-1">
                  <Zap size={14} className="text-blue-600 flex-shrink-0 fill-blue-500" />
                  <span>Weekend Date Selected</span>
                </div>
                <p className="text-[11px] text-blue-900/90 leading-relaxed">
                  Weekend rates apply due to higher backwater demand. Exact rate will be confirmed on WhatsApp based on real-time boat availability.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-slate-500 font-medium">Weekday Starting Rate:</span>
                  <span className="font-semibold text-slate-600">
                    {pricing.formattedBase}
                  </span>
                </div>
                {pricing.extraCharges > 0 && (
                  <div className="flex justify-between items-baseline text-xs text-slate-500">
                    <span>Extra Adults ({adults - pricing.threshold} Guests):</span>
                    <span className="font-medium text-blue-900">Bedding included</span>
                  </div>
                )}
                <div className="flex justify-between items-baseline pt-1 border-t border-slate-200 font-bold">
                  <span className="text-xs text-brand-navy">Weekend Tariff:</span>
                  <span className="text-sm font-black text-blue-900 uppercase tracking-tight">
                    Custom Quote
                  </span>
                </div>
              </div>

              <div className="ab-capacity-note flex items-center gap-1.5 text-xs text-slate-500 font-medium px-0.5">
                <Info size={13} className="text-slate-400 flex-shrink-0" />
                <span>Capacity: Up to {maxCapacity} guests • Final quote shared on WhatsApp.</span>
              </div>
            </div>
          ) : (
            <div className="ab-season-card mt-3 space-y-2">
              {pricing.extraCharges > 0 ? (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                  <div className="flex justify-between items-baseline text-xs text-slate-600">
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

                  <div className="flex justify-between items-baseline text-xs text-slate-600">
                    <span className="flex items-center">
                      Extra Adults{" "}
                      <span className="text-[11px] text-slate-400 ml-1">
                        ({adults - pricing.threshold} × ₹{pricing.extraPerAdult.toLocaleString("en-IN")})
                      </span>
                    </span>
                    <span className="font-semibold text-brand-orange">
                      {pricing.formattedExtra}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline font-bold">
                    <span className="text-xs sm:text-sm text-brand-navy">Total Estimate</span>
                    <span className="text-base sm:text-lg font-black text-brand-navy">
                      {pricing.formattedTotal}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="text-xs font-bold text-brand-navy block">
                        Starting Rate
                      </span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Up to {pricing.threshold} Adults • {currentPkgInfo.title}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-base sm:text-lg font-black text-brand-navy">
                        {pricing.formattedBase}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="ab-capacity-note flex items-center gap-1.5 text-xs text-slate-500 font-medium px-0.5">
                <Info size={13} className="text-slate-400 flex-shrink-0" />
                <span>Maximum capacity is {maxCapacity} guests total.</span>
              </div>

              <p className="text-[11px] text-slate-400 italic leading-snug px-0.5">
                {pricing.extraCharges > 0
                  ? `Standard season estimate for ${adults} adults (all meals included). Final rate depends on travel date and boat availability.`
                  : "Starting rate for standard dates. Rates vary based on travel date, weekends, seasonal demand & boat availability."}
              </p>
            </div>
          )}

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
            <span>
              {seasonInfo.isPeak || seasonInfo.isWeekend
                ? "Get Live Rate on WhatsApp"
                : "Check Availability on WhatsApp"}
            </span>
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

