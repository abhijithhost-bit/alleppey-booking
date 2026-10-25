"use client";

import { useState } from "react";
import { getWhatsAppUrl, SITE_CONFIG } from "../config/site";

interface BoatFareOption {
  id: string;
  name: string;
  type: "houseboat" | "shikara" | "kayaking" | "daycruise";
  basePrice: number;
  priceType: "per_night" | "per_boat" | "per_person";
  capacity: string;
  defaultGuests: number;
  mealsIncluded: string;
  acType: string;
  features: string[];
}

const BOAT_OPTIONS: BoatFareOption[] = [
  {
    id: "1-bhk-deluxe",
    name: "1-BHK Deluxe Houseboat (Couples)",
    type: "houseboat",
    basePrice: 6500,
    priceType: "per_night",
    capacity: "2 Guests (+ 1 child)",
    defaultGuests: 2,
    mealsIncluded: "All 4 Meals (Lunch, Sunset Snacks, Dinner, Breakfast)",
    acType: "Night AC (9 PM - 6 AM)",
    features: ["Private bedroom", "Live onboard chef", "Sunset lake cruise"],
  },
  {
    id: "1-bhk-premium",
    name: "1-BHK Premium Houseboat (24H AC)",
    type: "houseboat",
    basePrice: 8500,
    priceType: "per_night",
    capacity: "2 Guests (+ 1 child)",
    defaultGuests: 2,
    mealsIncluded: "Grand Kerala Feast + Karimeen Fish Fry",
    acType: "Full-Time 24-Hour AC",
    features: ["Upper sun deck", "Glass dining area", "Gourmet meal plan"],
  },
  {
    id: "2-bhk-deluxe",
    name: "2-BHK Deluxe Houseboat (Families)",
    type: "houseboat",
    basePrice: 10500,
    priceType: "per_night",
    capacity: "4 to 6 Guests",
    defaultGuests: 4,
    mealsIncluded: "All 4 Meals Included for 4 Guests",
    acType: "Night AC in both bedrooms",
    features: ["2 Private bedrooms", "Spacious lounge", "Fishing rod assistance"],
  },
  {
    id: "3-bhk-deluxe",
    name: "3-BHK Deluxe Houseboat (Large Family)",
    type: "houseboat",
    basePrice: 14500,
    priceType: "per_night",
    capacity: "6 to 9 Guests",
    defaultGuests: 6,
    mealsIncluded: "All 4 Meals Included for 6 Guests",
    acType: "Night AC in all 3 bedrooms",
    features: ["3 Private bedrooms", "Large front deck", "Full crew of 3"],
  },
  {
    id: "shikara-3hr",
    name: "Shikara Boat Ride (3 Hours Private)",
    type: "shikara",
    basePrice: 2400,
    priceType: "per_boat",
    capacity: "Up to 6 Guests",
    defaultGuests: 4,
    mealsIncluded: "Village tea/snack stop (self-payable)",
    acType: "Open-air naturally ventilated",
    features: ["Narrow canal access", "Cushioned seating", "Local guide boatman"],
  },
  {
    id: "day-cruise-houseboat",
    name: "Full-Day Houseboat Cruise (6 Hours)",
    type: "daycruise",
    basePrice: 7500,
    priceType: "per_boat",
    capacity: "Up to 10 Guests",
    defaultGuests: 8,
    mealsIncluded: "Grand Kerala Buffet Lunch + Evening Tea",
    acType: "Daytime living room AC available",
    features: ["No overnight stay", "Dining hall with music", "Vembanad cruise"],
  },
  {
    id: "kayaking-tour",
    name: "Guided Backwater Kayaking (3 Hours)",
    type: "kayaking",
    basePrice: 1200,
    priceType: "per_person",
    capacity: "Solo or Tandem Kayaks",
    defaultGuests: 2,
    mealsIncluded: "Fresh Tender Coconut + Local Snacks",
    acType: "Eco-friendly open water",
    features: ["Life jackets", "Certified paddle guide", "Hidden village routes"],
  },
];

export default function FareCalculator() {
  const [selectedBoatId, setSelectedBoatId] = useState<string>("1-bhk-deluxe");
  const [guestCount, setGuestCount] = useState<number>(2);
  const [includeExtraMeal, setIncludeExtraMeal] = useState<boolean>(false);

  const selectedBoat =
    BOAT_OPTIONS.find((b) => b.id === selectedBoatId) || BOAT_OPTIONS[0];

  // Dynamic calculation logic
  const calculateTotal = () => {
    let base = selectedBoat.basePrice;
    if (selectedBoat.priceType === "per_person") {
      base = base * guestCount;
    }
    // Extra bed/guest calculation for houseboats if exceeding base capacity
    if (selectedBoat.type === "houseboat") {
      const extraGuests = Math.max(0, guestCount - selectedBoat.defaultGuests);
      base += extraGuests * 1200; // Extra person rate with bed & all meals
    }
    if (includeExtraMeal && selectedBoat.type === "shikara") {
      base += guestCount * 300; // Traditional lunch add-on
    }
    return base;
  };

  const estimatedTotal = calculateTotal();
  const originalEstimate = Math.round(estimatedTotal * 1.25); // Show ~20-25% broker savings

  const handleWhatsAppBooking = () => {
    const message = [
      `*Instant Backwater Fare Calculation - ${SITE_CONFIG.name}*`,
      `🛥️ *Boat Choice:* ${selectedBoat.name}`,
      `👥 *Number of Guests:* ${guestCount}`,
      `💰 *Estimated Direct Rate:* ₹${estimatedTotal.toLocaleString("en-IN")}`,
      `🍽️ *Meal Plan:* ${selectedBoat.mealsIncluded}`,
      `❄️ *AC Plan:* ${selectedBoat.acType}`,
      `\nPlease check available boat options and send real videos/photos for my dates. Thank you!`,
    ].join("\n");

    const url = getWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="fare-calculator"
      className="py-16 sm:py-24 bg-linear-to-b from-emerald-50/40 via-emerald-50/20 to-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span>⚡ Interactive Estimation Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Alleppey Backwater Fare Calculator
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Get an instant, transparent price estimate for your Alleppey tour with direct boat owner rates. No middleman markup or hidden jetty surprises.
          </p>
        </div>

        {/* 60% White Card + 30% Light Green Details + 10% Orange Highlight Widget */}
        <div className="bg-white rounded-3xl shadow-xl shadow-emerald-950/5 border border-emerald-100 overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-emerald-100">
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                  Step 1: Choose Boat &amp; Tour Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BOAT_OPTIONS.map((boat) => {
                    const isSelected = boat.id === selectedBoatId;
                    return (
                      <button
                        key={boat.id}
                        type="button"
                        onClick={() => {
                          setSelectedBoatId(boat.id);
                          setGuestCount(boat.defaultGuests);
                        }}
                        className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-emerald-50/90 border-emerald-500 ring-2 ring-emerald-400/40"
                            : "bg-white border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/30"
                        }`}
                      >
                        <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {boat.name}
                        </span>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[11px]">
                          <span className="text-slate-500">{boat.capacity}</span>
                          <span className="font-extrabold text-orange-600">
                            From ₹{boat.basePrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guest Count Stepper */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                  Step 2: Number of Guests (Adults + Kids)
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-emerald-200 rounded-2xl bg-emerald-50/40 p-1">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="w-10 h-10 rounded-xl bg-white hover:bg-emerald-100 text-slate-900 font-bold flex items-center justify-center transition-colors shadow-xs"
                      aria-label="Decrease guests"
                    >
                      −
                    </button>
                    <span className="w-16 text-center font-extrabold text-lg text-slate-900">
                      {guestCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.min(30, guestCount + 1))}
                      className="w-10 h-10 rounded-xl bg-white hover:bg-emerald-100 text-slate-900 font-bold flex items-center justify-center transition-colors shadow-xs"
                      aria-label="Increase guests"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {guestCount === 1
                      ? "1 Solo Traveler"
                      : guestCount === 2
                      ? "Couple / 2 Guests"
                      : `${guestCount} Guests Group`}
                  </span>
                </div>
              </div>

              {/* Optional Shikara Meal Addon */}
              {selectedBoat.type === "shikara" && (
                <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Add Authentic Kerala Lunch Stop?</span>
                    <span className="text-slate-500">Village restaurant stop with Karimeen (+₹300/person)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeExtraMeal}
                    onChange={(e) => setIncludeExtraMeal(e.target.checked)}
                    className="w-5 h-5 accent-orange-600 cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Right Summary & WhatsApp Trigger (5 cols) */}
            <div className="lg:col-span-5 bg-linear-to-b from-emerald-50/60 via-white to-emerald-50/30 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200">
                  Estimated Summary
                </span>

                <h3 className="text-xl font-black text-slate-900 mt-2">
                  {selectedBoat.name}
                </h3>

                {/* Specs List */}
                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span><strong>Capacity:</strong> {selectedBoat.capacity}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span><strong>Meals:</strong> {selectedBoat.mealsIncluded}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span><strong>Air Conditioning:</strong> {selectedBoat.acType}</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="mt-6 p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm">
                  <span className="text-xs text-slate-500 font-medium block">
                    Direct Boat Owner Rate
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      ₹{estimatedTotal.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm line-through text-slate-400">
                      ₹{originalEstimate.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-emerald-800 font-bold mt-2 pt-2 border-t border-slate-100">
                    <span>You Save ~20% with Direct Rate</span>
                    <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      Save ₹{(originalEstimate - estimatedTotal).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* 10% High-Conversion Vibrant Orange WhatsApp Action Button */}
              <div className="mt-6 space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full flex items-center justify-center gap-2 py-4 px-5 rounded-2xl text-sm sm:text-base font-extrabold text-white bg-linear-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] cursor-pointer orange-pulse"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
                  </svg>
                  <span>Lock in Direct Rate on WhatsApp ⚡</span>
                </button>
                <p className="text-[11px] text-center text-slate-500">
                  ⚡ 100% Free Inquiry • Real boat photos sent directly to your phone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
