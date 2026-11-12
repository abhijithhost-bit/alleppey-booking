"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  CruisePackageId,
  getPricingForBedrooms,
  calculateHouseboatPrice,
  CalculatedPrice,
  buildHouseboatWhatsAppUrl,
  PACKAGE_INFO,
  DateSeasonInfo,
  getDateSeasonInfo,
} from "@/lib/pricing";

interface BookingContextType {
  bedrooms: number;
  packageId: CruisePackageId;
  setPackageId: (pkg: CruisePackageId) => void;
  date: string;
  setDate: (date: string) => void;
  adults: number;
  setAdults: (val: number | ((prev: number) => number)) => void;
  kids: number;
  setKids: (val: number | ((prev: number) => number)) => void;
  pricing: CalculatedPrice;
  seasonInfo: DateSeasonInfo;
  whatsAppUrl: string;
  scrollToBookingWidget: () => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({
  bedrooms,
  children,
}: {
  bedrooms: number;
  children: React.ReactNode;
}) {
  const boatPricing = getPricingForBedrooms(bedrooms);

  const [packageId, setPackageId] = useState<CruisePackageId>("overnight");
  const [date, setDate] = useState<string>("");
  const [adults, setAdults] = useState<number>(boatPricing.baseGuests);
  const [kids, setKids] = useState<number>(0);

  // Compute pricing
  const pricing = calculateHouseboatPrice(bedrooms, packageId, adults);

  // Compute seasonal context
  const seasonInfo = getDateSeasonInfo(date);

  // Clamp adults + kids if exceeding maxCapacity
  useEffect(() => {
    const currentMax = pricing.maxCapacity;
    if (adults + kids > currentMax) {
      const clampedAdults = Math.min(adults, currentMax);
      const clampedKids = Math.min(kids, currentMax - clampedAdults);
      setAdults(Math.max(1, clampedAdults));
      setKids(Math.max(0, clampedKids));
    }
  }, [packageId, pricing.maxCapacity, adults, kids]);

  // Build WhatsApp URL
  const packageName = PACKAGE_INFO[packageId]?.title || "Overnight Cruise";
  const isSpecialDate = seasonInfo.isPeak || seasonInfo.isWeekend;
  const whatsAppUrl = buildHouseboatWhatsAppUrl({
    bedrooms,
    packageName,
    date,
    adults,
    kids,
    totalPriceFormatted: isSpecialDate ? undefined : pricing.formattedTotal,
  });

  const scrollToBookingWidget = () => {
    const widget =
      document.getElementById("booking-widget") ||
      document.querySelector(".ab-sh-price-card");
    if (widget) {
      widget.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <BookingContext.Provider
      value={{
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
        scrollToBookingWidget,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

