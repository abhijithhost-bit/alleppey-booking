"use client";

import React, { useState, useContext } from "react";
import { CruisePackageId } from "@/lib/pricing";
import { useBooking } from "./BookingContext";
import { MoonStar, Sun, Moon } from "lucide-react";

interface PackageTabsProps {
  bedrooms: number;
  initialPackage?: CruisePackageId;
  onPackageChange?: (pkg: CruisePackageId) => void;
  activePackage?: CruisePackageId;
}

export default function PackageTabs({
  bedrooms,
  initialPackage = "overnight",
  onPackageChange,
  activePackage: controlledPackage,
}: PackageTabsProps) {
  let bookingContext: ReturnType<typeof useBooking> | null = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    bookingContext = useBooking();
  } catch {
    bookingContext = null;
  }

  const [internalPackage, setInternalPackage] = useState<CruisePackageId>(initialPackage);

  const activePackage = bookingContext
    ? bookingContext.packageId
    : controlledPackage !== undefined
    ? controlledPackage
    : internalPackage;

  const handleTabClick = (pkg: CruisePackageId) => {
    if (bookingContext) {
      bookingContext.setPackageId(pkg);
    } else {
      setInternalPackage(pkg);
    }
    onPackageChange?.(pkg);
  };

  const acText =
    bedrooms === 1
      ? "AC in the bedroom is turned on at 9:00 PM."
      : `AC in all ${bedrooms} bedrooms is turned on at 9:00 PM.`;

  return (
    <div className="ab-sh-section mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-2">
        Cruise Packages, Itinerary &amp; Menu
      </h2>
      <p className="ab-sh-desc text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
        We offer three distinct cruise experiences. Select a package below to view its specific timeline and catering details.{" "}
        <strong className="text-brand-navy font-semibold">Note:</strong> Please inform us of any specific dietary requirements at the time of booking.
      </p>

      {/* Tabs Navigation */}
      <div className="ab-tabs-container bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6">
        <div className="ab-tabs-nav grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 border-b border-slate-100 pb-4">
          {/* Overnight Tab */}
          <button
            type="button"
            onClick={() => handleTabClick("overnight")}
            className={`ab-tab-btn relative p-3 sm:p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
              activePackage === "overnight"
                ? "bg-blue-50/80 border-blue-500 text-blue-950 shadow-sm ring-1 ring-blue-500/20"
                : "bg-slate-50 border-transparent hover:bg-slate-100 text-slate-700"
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className="badge inline-block bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Best Seller
                </span>
              </div>
              <div className="tab-title font-bold text-sm sm:text-base flex items-center gap-1.5">
                <MoonStar
                  size={17}
                  className={`flex-shrink-0 ${
                    activePackage === "overnight" ? "text-blue-600" : "text-slate-400"
                  }`}
                />
                <span>Overnight Cruise</span>
              </div>
            </div>
            <small
              className={`text-xs block mt-1.5 ${
                activePackage === "overnight" ? "text-blue-700/80 font-medium" : "text-slate-500"
              }`}
            >
              12:00 PM - 9:00 AM
            </small>
          </button>

          {/* Day Cruise Tab */}
          <button
            type="button"
            onClick={() => handleTabClick("day")}
            className={`ab-tab-btn p-3 sm:p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
              activePackage === "day"
                ? "bg-orange-50/80 border-orange-400 text-orange-950 shadow-sm ring-1 ring-orange-400/20"
                : "bg-slate-50 border-transparent hover:bg-slate-100 text-slate-700"
            }`}
          >
            <div>
              <div className="h-5 sm:h-6" />
              <div className="tab-title font-bold text-sm sm:text-base flex items-center gap-1.5">
                <Sun
                  size={17}
                  className={`flex-shrink-0 ${
                    activePackage === "day" ? "text-amber-500" : "text-slate-400"
                  }`}
                />
                <span>Day Cruise</span>
              </div>
            </div>
            <small
              className={`text-xs block mt-1.5 ${
                activePackage === "day" ? "text-amber-700/80 font-medium" : "text-slate-500"
              }`}
            >
              11:30 AM - 5:00 PM
            </small>
          </button>

          {/* Night Stay Tab */}
          <button
            type="button"
            onClick={() => handleTabClick("night")}
            className={`ab-tab-btn p-3 sm:p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
              activePackage === "night"
                ? "bg-slate-900 border-slate-900 text-white shadow-sm ring-1 ring-slate-900/30"
                : "bg-slate-50 border-transparent hover:bg-slate-100 text-slate-700"
            }`}
          >
            <div>
              <div className="h-5 sm:h-6" />
              <div className="tab-title font-bold text-sm sm:text-base flex items-center gap-1.5">
                <Moon
                  size={17}
                  className={`flex-shrink-0 ${
                    activePackage === "night" ? "text-amber-300" : "text-slate-400"
                  }`}
                />
                <span className={activePackage === "night" ? "text-white" : ""}>
                  Night Stay
                </span>
              </div>
            </div>
            <small
              className={`text-xs block mt-1.5 ${
                activePackage === "night" ? "text-slate-300 font-medium" : "text-slate-500"
              }`}
            >
              5:00 PM - 9:00 AM
            </small>
          </button>
        </div>

        {/* Tab 1: Overnight Content */}
        {activePackage === "overnight" && (
          <div className="ab-tab-content space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                All 3 Fresh Kerala Meals Included
              </h3>
              <div className="ab-menu-wrapper grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">🍹</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Welcome Drink</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Fresh Fruit Juice.</p>
                  </div>
                </div>
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">🍛</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Traditional Lunch</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Rice, Sambar, Karimeen Fry (Pearl Spot), Thoran, Salad, Curd, Papad, and Pickles.</p>
                  </div>
                </div>
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">☕</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Evening Tea &amp; Snacks</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Tea or Coffee with Banana Fritters or Onion Pakoras.</p>
                  </div>
                </div>
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">🍽️</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Dinner Service</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Chappathi, Rice, Chicken Curry, Mixed Veg Curries, Dal, and Curd.</p>
                  </div>
                </div>
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl md:col-span-2">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">🥞</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Morning Breakfast</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Idly, Sambar, Chutney, and Tea or Coffee.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Cruise Timeline
              </h3>
              <div className="ab-timeline space-y-3">
                <div className="ab-time-day font-bold text-sm text-brand-orange bg-brand-orange-light px-3 py-1.5 rounded-lg inline-block">
                  Day 1: Arrival &amp; Backwater Cruise
                </div>
                <div className="space-y-3 pl-3 border-l-2 border-brand-orange/30 ml-2">
                  <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                    <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                      Check-in &amp; Departure <span className="text-xs text-brand-orange font-semibold">12:00 PM</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Step aboard your private vessel from Alleppey. Once settled, the captain steers the vessel onto Punnamada Lake.</p>
                  </div>
                  <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                    <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                      Lunch Break <span className="text-xs text-brand-orange font-semibold">01:30 PM</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Gather in the dining hall for a freshly prepared traditional Kerala lunch buffet.</p>
                  </div>
                  <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                    <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                      Scenic Sightseeing <span className="text-xs text-brand-orange font-semibold">02:30 PM</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Cruise through Vembanadu Lake, C Block, and Marthandam. Marvel at the unique below-sea-level paddy fields.</p>
                  </div>
                  <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                    <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                      Evening Tea <span className="text-xs text-brand-orange font-semibold">04:00 PM</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Sip hot tea/coffee with local snacks on the upper deck during golden hour.</p>
                  </div>
                  <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                    <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                      Night Halt <span className="text-xs text-brand-orange font-semibold">05:30 PM</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">As per government regulations, the boat securely docks in a designated area for the night.</p>
                  </div>
                  <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                    <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                      Dinner &amp; Rest <span className="text-xs text-brand-orange font-semibold">08:00 PM</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Enjoy your group dinner. <strong className="text-brand-navy font-semibold">{acText}</strong></p>
                  </div>
                </div>

                <div className="ab-time-day font-bold text-sm text-brand-orange bg-brand-orange-light px-3 py-1.5 rounded-lg inline-block mt-4">
                  Day 2: Morning Cruise &amp; Departure
                </div>
                <div className="space-y-3 pl-3 border-l-2 border-brand-orange/30 ml-2">
                  <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                    <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                      Morning Cruise <span className="text-xs text-brand-orange font-semibold">08:00 AM</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Travel through Meenapally Kayal and Pallathuruthy while served a hearty breakfast onboard.</p>
                  </div>
                  <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                    <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                      Check-out <span className="text-xs text-brand-orange font-semibold">09:00 AM</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Arrive back at the original Alleppey docking point, concluding your trip.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Day Cruise Content */}
        {activePackage === "day" && (
          <div className="ab-tab-content space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                Included Catering
              </h3>
              <div className="ab-menu-wrapper grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">🍹</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Welcome Drink</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Fresh Fruit Juice upon arrival.</p>
                  </div>
                </div>
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">🍛</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Traditional Lunch</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Rice, Sambar, Karimeen Fry (Pearl Spot), Thoran, Salad, Curd, Papad, and Pickles.</p>
                  </div>
                </div>
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl md:col-span-2">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">☕</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Evening Tea &amp; Snacks</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Tea or Coffee with Banana Fritters or Onion Pakoras before check-out.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Day Cruise Timeline
              </h3>
              <div className="ab-timeline space-y-3 pl-3 border-l-2 border-brand-orange/30 ml-2">
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Check-in &amp; Departure <span className="text-xs text-brand-orange font-semibold">11:30 AM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">Step aboard your private vessel. Once settled, the captain steers the vessel onto Punnamada Lake.</p>
                </div>
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Lunch Break <span className="text-xs text-brand-orange font-semibold">01:30 PM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">Gather in the dining hall for a freshly prepared traditional Kerala lunch buffet.</p>
                </div>
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Scenic Sightseeing <span className="text-xs text-brand-orange font-semibold">02:30 PM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">Cruise through Vembanadu Lake, C Block, and Marthandam. Marvel at the unique below-sea-level paddy fields.</p>
                </div>
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Evening Tea <span className="text-xs text-brand-orange font-semibold">04:00 PM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">Sip hot tea/coffee with local snacks on the upper deck during golden hour.</p>
                </div>
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Checkout <span className="text-xs text-brand-orange font-semibold">05:00 PM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">Checkout at same location of boarding point.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Night Stay Content */}
        {activePackage === "night" && (
          <div className="ab-tab-content space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                Included Catering
              </h3>
              <div className="ab-menu-wrapper grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">🍽️</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Dinner Service</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Chappathi, Rice, Chicken Curry, Mixed Veg Curries, Dal, and Curd.</p>
                  </div>
                </div>
                <div className="ab-menu-course flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="ab-menu-icon text-2xl flex-shrink-0" aria-hidden="true">🥞</div>
                  <div className="ab-menu-content">
                    <h4 className="font-bold text-sm text-brand-navy">Morning Breakfast</h4>
                    <p className="ab-menu-text text-xs text-slate-600 mt-0.5">Idly, Sambar, Chutney, and Tea or Coffee.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Night Stay Timeline
              </h3>
              <div className="ab-timeline space-y-3 pl-3 border-l-2 border-brand-orange/30 ml-2">
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Check-in &amp; Cruise <span className="text-xs text-brand-orange font-semibold">05:00 PM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">1 hour cruise to Kuppappuram.</p>
                </div>
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Night Halt <span className="text-xs text-brand-orange font-semibold">06:00 PM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">Will halt the boat near the village area for the night. {acText}</p>
                </div>
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Morning Breakfast <span className="text-xs text-brand-orange font-semibold">07:30 AM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">Freshly prepared traditional morning breakfast.</p>
                </div>
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Morning Cruise <span className="text-xs text-brand-orange font-semibold">08:00 AM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">1 hour cruise through Punnamada Lake.</p>
                </div>
                <div className="ab-time-item bg-slate-50 p-3 rounded-xl">
                  <h4 className="font-bold text-sm text-brand-navy flex justify-between">
                    Checkout <span className="text-xs text-brand-orange font-semibold">09:00 AM</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">Checkout at same location of boarding point.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
