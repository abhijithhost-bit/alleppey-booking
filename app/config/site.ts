export const SITE_CONFIG = {
  name: "Alleppey Booking",
  tagline: "Premier Kerala Houseboat & Backwater Tour Bookings",
  description:
    "Book verified Alleppey boat tour packages. Luxury overnight houseboats, day cruises, private shikara rides, and kayaking in the Kerala backwaters. Best rates guaranteed, authentic meals, and instant WhatsApp booking.",
  phone: "7012761588",
  phoneFormatted: "+91 7012761588",
  phoneTel: "tel:+917012761588",
  whatsappNumber: "917012761588",
  whatsappDefaultMsg:
    "Hello Alleppey Booking, I would like to inquire about booking a backwater boat tour.",
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
    `🛥️ *Package:* ${params.packageName}`,
    params.boatType ? `⚓ *Boat Type:* ${params.boatType}` : "",
    params.date ? `📅 *Preferred Date:* ${params.date}` : "",
    params.guests ? `👥 *Guests:* ${params.guests}` : "",
    `\nPlease share availability, best price quote, and photos. Thank you!`,
  ].filter(Boolean);

  return getWhatsAppUrl(lines.join("\n"));
}
