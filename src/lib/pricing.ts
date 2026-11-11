import { formatDateToDDMMYYYY } from "./utils";

export type CruisePackageId = "overnight" | "day" | "night";

export interface PackagePricingConfig {
  base: number;
  extraPerAdult: number;
  threshold: number;
}

export interface BoatPricingConfig {
  bedrooms: number;
  baseGuests: number;
  maxGuestsOvernight: number;
  maxGuestsDay: number;
  overnight: PackagePricingConfig;
  day: PackagePricingConfig;
  night: PackagePricingConfig;
}

export const FLEET_PRICING: Record<number, BoatPricingConfig> = {
  1: {
    bedrooms: 1,
    baseGuests: 2,
    maxGuestsOvernight: 4,
    maxGuestsDay: 6,
    overnight: { base: 11000, extraPerAdult: 1000, threshold: 2 },
    day: { base: 8000, extraPerAdult: 1000, threshold: 2 },
    night: { base: 7500, extraPerAdult: 500, threshold: 2 },
  },
  2: {
    bedrooms: 2,
    baseGuests: 4,
    maxGuestsOvernight: 8,
    maxGuestsDay: 25,
    overnight: { base: 14000, extraPerAdult: 800, threshold: 4 },
    day: { base: 12000, extraPerAdult: 750, threshold: 4 },
    night: { base: 9000, extraPerAdult: 500, threshold: 4 },
  },
  3: {
    bedrooms: 3,
    baseGuests: 6,
    maxGuestsOvernight: 12,
    maxGuestsDay: 30,
    overnight: { base: 18000, extraPerAdult: 1000, threshold: 6 },
    day: { base: 14000, extraPerAdult: 700, threshold: 6 },
    night: { base: 13500, extraPerAdult: 500, threshold: 6 },
  },
  4: {
    bedrooms: 4,
    baseGuests: 8,
    maxGuestsOvernight: 16,
    maxGuestsDay: 30,
    overnight: { base: 24000, extraPerAdult: 1000, threshold: 8 },
    day: { base: 20000, extraPerAdult: 750, threshold: 8 },
    night: { base: 18000, extraPerAdult: 500, threshold: 8 },
  },
  5: {
    bedrooms: 5,
    baseGuests: 10,
    maxGuestsOvernight: 20,
    maxGuestsDay: 40,
    overnight: { base: 30000, extraPerAdult: 1000, threshold: 10 },
    day: { base: 26000, extraPerAdult: 800, threshold: 10 },
    night: { base: 22500, extraPerAdult: 500, threshold: 10 },
  },
  6: {
    bedrooms: 6,
    baseGuests: 12,
    maxGuestsOvernight: 24,
    maxGuestsDay: 60,
    overnight: { base: 36000, extraPerAdult: 1000, threshold: 12 },
    day: { base: 32000, extraPerAdult: 800, threshold: 12 },
    night: { base: 27000, extraPerAdult: 500, threshold: 12 },
  },
  7: {
    bedrooms: 7,
    baseGuests: 14,
    maxGuestsOvernight: 28,
    maxGuestsDay: 80,
    overnight: { base: 42000, extraPerAdult: 1000, threshold: 14 },
    day: { base: 28000, extraPerAdult: 800, threshold: 14 },
    night: { base: 31500, extraPerAdult: 500, threshold: 14 },
  },
  8: {
    bedrooms: 8,
    baseGuests: 16,
    maxGuestsOvernight: 32,
    maxGuestsDay: 100,
    overnight: { base: 48000, extraPerAdult: 1000, threshold: 16 },
    day: { base: 32000, extraPerAdult: 800, threshold: 16 },
    night: { base: 36000, extraPerAdult: 500, threshold: 16 },
  },
  10: {
    bedrooms: 10,
    baseGuests: 20,
    maxGuestsOvernight: 40,
    maxGuestsDay: 120,
    overnight: { base: 60000, extraPerAdult: 1000, threshold: 20 },
    day: { base: 40000, extraPerAdult: 800, threshold: 40 },
    night: { base: 45000, extraPerAdult: 500, threshold: 20 },
  },
  12: {
    bedrooms: 12,
    baseGuests: 24,
    maxGuestsOvernight: 48,
    maxGuestsDay: 150,
    overnight: { base: 72000, extraPerAdult: 1000, threshold: 24 },
    day: { base: 48000, extraPerAdult: 800, threshold: 48 },
    night: { base: 54000, extraPerAdult: 500, threshold: 24 },
  },
  14: {
    bedrooms: 14,
    baseGuests: 28,
    maxGuestsOvernight: 56,
    maxGuestsDay: 200,
    overnight: { base: 84000, extraPerAdult: 1000, threshold: 28 },
    day: { base: 56000, extraPerAdult: 800, threshold: 56 },
    night: { base: 63000, extraPerAdult: 500, threshold: 28 },
  },
};

export const PACKAGE_INFO: Record<
  CruisePackageId,
  {
    title: string;
    subtitle: string;
    shortSubtitle: string;
    badge?: string;
  }
> = {
  overnight: {
    title: "Overnight Cruise",
    subtitle: "12:00 PM - 9:00 AM (All Meals Included)",
    shortSubtitle: "12:00 PM - 9:00 AM",
    badge: "Best Seller",
  },
  day: {
    title: "Day Cruise",
    subtitle: "11:30 AM - 5:00 PM (Lunch + Snacks)",
    shortSubtitle: "11:30 AM - 5:00 PM",
  },
  night: {
    title: "Night Stay",
    subtitle: "5:00 PM - 9:00 AM (Dinner + Breakfast)",
    shortSubtitle: "5:00 PM - 9:00 AM",
  },
};

export const PACKAGE_TERMS: Record<CruisePackageId, string[]> = {
  overnight: [
    "<strong>Itinerary &amp; Menu Variations:</strong> The cruise route and food menu are subject to slight changes depending on the specific boat assigned, weather conditions, or seasonal availability.",
    "<strong>Check in:</strong> 12 noon. <strong>Check out:</strong> 09:00 AM.",
    "Guests are not allowed to sleep outside the bedrooms for safety reasons.",
    "Beverages and any cook-to-order items will be charged extra on actuals.",
    "Air conditioners in the bedrooms will be switched on only from 09:00 PM to 06:00 AM. If you require full-time AC, please inform us at the time of booking (extra charges apply).",
    "Meal plan applied on APAI / full board basis (inclusive of breakfast, lunch &amp; dinner).",
    "Management is not responsible for late arrivals. Check-out time will be followed strictly as per schedule.",
    "You can enjoy complete privacy in the boat; it is exclusively booked for your group.",
    "The boat will be anchored in a designated backwater area during the night and will not cruise after 17:30 hrs.",
  ],
  day: [
    "<strong>Itinerary &amp; Menu Variations:</strong> The cruise route and food menu are subject to slight changes depending on the specific boat assigned, weather conditions, or seasonal availability.",
    "<strong>Check in:</strong> 11:30 AM. <strong>Check out:</strong> 5:00 PM.",
    "Guests are not allowed to sleep outside the bedrooms for safety reasons.",
    "Beverages and any cook-to-order items will be charged extra on actuals.",
    "Air conditioners in the bedrooms will be switched on only from 09:00 PM to 06:00 AM. If you require full-time AC, please inform us at the time of booking (extra charges apply).",
    "Management is not responsible for late arrivals. Check-out time will be followed strictly as per schedule.",
    "You can enjoy complete privacy in the boat; it is exclusively booked for your group.",
  ],
  night: [
    "<strong>Itinerary &amp; Menu Variations:</strong> The cruise route and food menu are subject to slight changes depending on the specific boat assigned, weather conditions, or seasonal availability.",
    "<strong>Check in:</strong> 5:00 PM. <strong>Check out:</strong> 09:00 AM.",
    "Guests are not allowed to sleep outside the bedrooms for safety reasons.",
    "Beverages and any cook-to-order items will be charged extra on actuals.",
    "Air conditioners in the bedrooms will be switched on only from 09:00 PM to 06:00 AM. If you require full-time AC, please inform us at the time of booking (extra charges apply).",
    "Management is not responsible for late arrivals. Check-out time will be followed strictly as per schedule.",
    "You can enjoy complete privacy in the boat; it is exclusively booked for your group.",
  ],
};

export function getPricingForBedrooms(bedrooms: number): BoatPricingConfig {
  return FLEET_PRICING[bedrooms] || FLEET_PRICING[1];
}

export interface CalculatedPrice {
  basePrice: number;
  extraCharges: number;
  totalPrice: number;
  threshold: number;
  extraPerAdult: number;
  baseGuests: number;
  maxCapacity: number;
  formattedBase: string;
  formattedExtra: string;
  formattedTotal: string;
}

export function calculateHouseboatPrice(
  bedrooms: number,
  pkg: CruisePackageId,
  adults: number
): CalculatedPrice {
  const boatConfig = getPricingForBedrooms(bedrooms);
  const pkgConfig = boatConfig[pkg] || boatConfig.overnight;
  const maxCapacity = pkg === "day" ? boatConfig.maxGuestsDay : boatConfig.maxGuestsOvernight;

  const basePrice = pkgConfig.base;
  const threshold = pkgConfig.threshold;
  const extraCount = Math.max(0, adults - threshold);
  const extraCharges = extraCount * pkgConfig.extraPerAdult;
  const totalPrice = basePrice + extraCharges;

  return {
    basePrice,
    extraCharges,
    totalPrice,
    threshold,
    extraPerAdult: pkgConfig.extraPerAdult,
    baseGuests: boatConfig.baseGuests,
    maxCapacity,
    formattedBase: "₹" + basePrice.toLocaleString("en-IN"),
    formattedExtra: "+ ₹" + extraCharges.toLocaleString("en-IN"),
    formattedTotal: "₹" + totalPrice.toLocaleString("en-IN"),
  };
}

export function buildHouseboatWhatsAppUrl({
  bedrooms,
  packageName,
  date,
  adults,
  kids,
  totalPriceFormatted,
}: {
  bedrooms: number;
  packageName: string;
  date?: string;
  adults: number;
  kids: number;
  totalPriceFormatted: string;
}): string {
  const dateVal = date && date.trim() ? formatDateToDDMMYYYY(date.trim()) : "To be decided";
  const msg = `Hi Alleppey Booking! I would like to check availability for a ${bedrooms} Bedroom Houseboat Alleppey.\n\n*Package:* ${packageName}\n*Check-in Date:* ${dateVal}\n*Guests:* ${adults} Adults, ${kids} Kids\n*Estimated Price:* ${totalPriceFormatted}\n\nPlease confirm availability.`;
  return `https://wa.me/917012761588?text=${encodeURIComponent(msg)}`;
}

