export const SITE_CONFIG = {
  name: "Alleppey Booking",
  tagline: "Alleppey Boat Tour Packages & Backwater Vacations",
  description:
    "Book verified Alleppey boat tour packages with direct local rates. Luxury private houseboats, budget sharing houseboats, scenic shikara canal rides, kayaking, speed boats, and authentic waterfront homestays in Kerala.",
  phone: "7012761588",
  phoneFormatted: "+91 7012761588",
  phoneTel: "tel:+917012761588",
  whatsappNumber: "917012761588",
  whatsappDefaultMsg:
    "Hello Alleppey Booking, I would like to inquire about Alleppey boat tour packages.",
  email: "bookings@alleppeybooking.com",
  address: {
    street: "Finishing Point Road, Punnamada",
    city: "Alappuzha (Alleppey)",
    state: "Kerala",
    postalCode: "688013",
    country: "India",
  },
  rating: {
    value: 4.9,
    count: 3420,
  },
  url: "https://alleppeybooking.com",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = customMessage || SITE_CONFIG.whatsappDefaultMsg;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export function getPackageBookingWhatsAppUrl(params: {
  packageName: string;
  boatType?: string;
  date?: string;
  guests?: string;
}): string {
  const lines = [
    `*Booking Inquiry - ${SITE_CONFIG.name}*`,
    `✨ *Service/Package:* ${params.packageName}`,
    params.boatType ? `⚓ *Category:* ${params.boatType}` : "",
    params.date ? `📅 *Preferred Date:* ${params.date}` : "",
    params.guests ? `👥 *Guests:* ${params.guests}` : "",
    `\nPlease share availability, best discounted rates, and photos. Thank you!`,
  ].filter(Boolean);

  return getWhatsAppUrl(lines.join("\n"));
}
