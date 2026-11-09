import React from "react";
import { Houseboat } from "@/types";
import {
  Bed,
  Bath,
  Users,
  Utensils,
  Wind,
  ShieldCheck,
  MapPin,
  Star,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface HouseboatQuickSpecsProps {
  boat: Houseboat;
}

export default function HouseboatQuickSpecs({ boat }: HouseboatQuickSpecsProps) {
  const bedroomCount = boat.bedrooms;
  const bathCount = boat.bedrooms; // Every bedroom has an attached bathroom in Alleppey Booking fleet
  const ratingDisplay = "4.8 / 5.0";
  const reviewCountDisplay = "124+ Verified Reviews";
  const startingRate = boat.priceDisplay || `₹${boat.startingPrice?.toLocaleString("en-IN")}`;

  return (
    <section
      aria-label="Houseboat Specifications and Inclusions"
      className="ab-quick-specs bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-bold tracking-wide uppercase mb-1.5">
            <Sparkles size={12} className="text-emerald-600" />
            <span>Verified Backwater Experience</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight">
            Houseboat at a Glance
          </h2>
        </div>

        {/* Rating badge */}
        <div className="flex items-center gap-2 bg-amber-50/80 border border-amber-200/80 px-3.5 py-1.5 rounded-2xl">
          <div className="flex items-center gap-1 text-amber-600 font-extrabold text-sm">
            <Star size={16} className="fill-amber-500 text-amber-500" />
            <span>{ratingDisplay}</span>
          </div>
          <span className="text-xs text-slate-500 font-medium border-l border-amber-200 pl-2">
            {reviewCountDisplay}
          </span>
        </div>
      </div>

      {/* Structured Machine-Readable Specification Grid */}
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
        {/* Specification 1: Bedrooms & Bathrooms */}
        <div className="flex items-start gap-3.5 p-3.5 bg-slate-50/70 rounded-2xl border border-slate-100">
          <div className="p-2.5 bg-white rounded-xl text-brand-orange shadow-xs border border-slate-100 flex-shrink-0">
            <Bed size={18} />
          </div>
          <div>
            <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Bedrooms &amp; Bathrooms
            </dt>
            <dd className="text-sm font-bold text-brand-navy mt-0.5">
              {bedroomCount} AC Bedroom{bedroomCount > 1 ? "s" : ""} + {bathCount} Attached Bath{bathCount > 1 ? "s" : ""}
            </dd>
            <p className="text-xs text-slate-500 mt-0.5">
              100% Private attached western washrooms
            </p>
          </div>
        </div>

        {/* Specification 2: Guest Capacity */}
        <div className="flex items-start gap-3.5 p-3.5 bg-slate-50/70 rounded-2xl border border-slate-100">
          <div className="p-2.5 bg-white rounded-xl text-brand-orange shadow-xs border border-slate-100 flex-shrink-0">
            <Users size={18} />
          </div>
          <div>
            <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Guest Capacity
            </dt>
            <dd className="text-sm font-bold text-brand-navy mt-0.5">
              {boat.capacity}
            </dd>
            <p className="text-xs text-slate-500 mt-0.5">
              Exclusive private charter for your group
            </p>
          </div>
        </div>

        {/* Specification 3: Meal Plan */}
        <div className="flex items-start gap-3.5 p-3.5 bg-slate-50/70 rounded-2xl border border-slate-100">
          <div className="p-2.5 bg-white rounded-xl text-brand-orange shadow-xs border border-slate-100 flex-shrink-0">
            <Utensils size={18} />
          </div>
          <div>
            <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Meals &amp; Dining
            </dt>
            <dd className="text-sm font-bold text-brand-navy mt-0.5">
              All 3 Kerala Meals Included
            </dd>
            <p className="text-xs text-slate-500 mt-0.5">
              Lunch, Evening Tea/Snacks, Dinner &amp; Breakfast
            </p>
          </div>
        </div>

        {/* Specification 4: AC Timings */}
        <div className="flex items-start gap-3.5 p-3.5 bg-slate-50/70 rounded-2xl border border-slate-100">
          <div className="p-2.5 bg-white rounded-xl text-brand-orange shadow-xs border border-slate-100 flex-shrink-0">
            <Wind size={18} />
          </div>
          <div>
            <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Air Conditioning
            </dt>
            <dd className="text-sm font-bold text-brand-navy mt-0.5">
              Night AC (Deluxe) / 24h AC (Premium)
            </dd>
            <p className="text-xs text-slate-500 mt-0.5">
              Selectable tier options to suit your comfort
            </p>
          </div>
        </div>

        {/* Specification 5: Dedicated Crew */}
        <div className="flex items-start gap-3.5 p-3.5 bg-slate-50/70 rounded-2xl border border-slate-100">
          <div className="p-2.5 bg-white rounded-xl text-brand-orange shadow-xs border border-slate-100 flex-shrink-0">
            <ShieldCheck size={18} />
          </div>
          <div>
            <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Private Crew
            </dt>
            <dd className="text-sm font-bold text-brand-navy mt-0.5">
              3-Person Dedicated Crew
            </dd>
            <p className="text-xs text-slate-500 mt-0.5">
              Captain, Engine Driver &amp; Personal Chef
            </p>
          </div>
        </div>

        {/* Specification 6: Timings & Location */}
        <div className="flex items-start gap-3.5 p-3.5 bg-slate-50/70 rounded-2xl border border-slate-100">
          <div className="p-2.5 bg-white rounded-xl text-brand-orange shadow-xs border border-slate-100 flex-shrink-0">
            <Clock size={18} />
          </div>
          <div>
            <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Cruise Timings &amp; Jetty
            </dt>
            <dd className="text-sm font-bold text-brand-navy mt-0.5">
              12:00 PM Check-in • 9:00 AM Checkout
            </dd>
            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
              <MapPin size={11} className="inline text-brand-orange" />
              Finishing Point, Alleppey
            </p>
          </div>
        </div>
      </dl>

      {/* Highlights summary bar for AI extractors and guests */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
            <CheckCircle2 size={14} className="text-emerald-500" />
            Zero Booking Fees
          </span>
          <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
            <CheckCircle2 size={14} className="text-emerald-500" />
            Govt. Licensed Boats
          </span>
          <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
            <CheckCircle2 size={14} className="text-emerald-500" />
            Instant WhatsApp Confirmation
          </span>
        </div>

        <div className="font-semibold text-slate-700">
          Tariff from <span className="text-base font-black text-brand-orange">{startingRate}</span> / night
        </div>
      </div>
    </section>
  );
}

