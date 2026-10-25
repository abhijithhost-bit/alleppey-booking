"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../config/site";
import { PackageItem } from "./PackagesSection";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: PackageItem | null;
  initialSearchData?: {
    boatType: string;
    date: string;
    guests: string;
  } | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPackage,
  initialSearchData,
}: BookingModalProps) {
  const [boatType, setBoatType] = useState(
    selectedPackage?.title ||
      initialSearchData?.boatType ||
      "1-BHK Deluxe Houseboat (Couples)"
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(initialSearchData?.date || "");
  const [guests, setGuests] = useState(
    initialSearchData?.guests || "2 Guests (Couple)"
  );
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const customMessage = [
      `*New Booking Inquiry - ${SITE_CONFIG.name}*`,
      `👤 *Name:* ${name || "Traveler"}`,
      phone ? `📞 *Phone:* ${phone}` : "",
      `🛥️ *Boat Choice:* ${boatType}`,
      date ? `📅 *Date:* ${date}` : "📅 *Date:* Flexible",
      `👥 *Guests:* ${guests}`,
      notes ? `📝 *Special Requests:* ${notes}` : "",
      `\nPlease check boat availability and share real unedited photos/best direct owner rates.`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      customMessage
    )}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-emerald-100 animate-in zoom-in-95 duration-200">
        {/* Modal Header (30% Light Green theme) */}
        <div className="bg-linear-to-r from-emerald-800 to-teal-800 p-6 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
              <span>Direct Boat Owner Inquiry</span>
            </div>
            <h3 className="text-xl font-black mt-1">
              Check Availability &amp; Get Direct Quote
            </h3>
            <p className="text-xs text-emerald-100 mt-0.5">
              Zero commission • Receive real boat photos on WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Form (60% White Body with 30% Light Green Inputs & 10% Orange CTA) */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Select Package / Boat Category
            </label>
            <select
              value={boatType}
              onChange={(e) => setBoatType(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold border border-emerald-200 rounded-2xl px-3.5 py-2.5 bg-emerald-50/40 text-slate-900 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            >
              <option value="1-BHK Deluxe Houseboat (Couples)">1-BHK Deluxe Houseboat (Couples Retreat)</option>
              <option value="1-BHK Premium Houseboat (24H AC)">1-BHK Premium Houseboat (Full-Time AC)</option>
              <option value="2-BHK Deluxe Houseboat (Family)">2-BHK Deluxe Houseboat (Family Cruise)</option>
              <option value="3-BHK to 7-BHK Houseboat (Group)">3-BHK to 7-BHK Luxury Houseboat (Group)</option>
              <option value="Shikara Boat Ride (3 Hours)">Shikara Boat Ride (3 Hours Private)</option>
              <option value="Sunrise Shikara Cruise">Sunrise Shikara Cruise (Morning Canal Tour)</option>
              <option value="Full-Day Houseboat Day Cruise">Full-Day Houseboat Day Cruise (6 Hours)</option>
              <option value="Guided Backwater Kayak Safari">Guided Backwater Kayak Safari</option>
              <option value="Waterfront Homestay Stay">Waterfront Backwater Homestay</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs sm:text-sm border border-emerald-200 rounded-2xl px-3.5 py-2.5 bg-emerald-50/40 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs sm:text-sm border border-emerald-200 rounded-2xl px-3.5 py-2.5 bg-emerald-50/40 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Travel Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-xs sm:text-sm border border-emerald-200 rounded-2xl px-3.5 py-2.5 bg-emerald-50/40 text-slate-900 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Guests / Group Size
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full text-xs sm:text-sm border border-emerald-200 rounded-2xl px-3.5 py-2.5 bg-emerald-50/40 text-slate-900 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              >
                <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                <option value="3 - 4 Guests (Family)">3 - 4 Guests (Family)</option>
                <option value="5 - 8 Guests (Group)">5 - 8 Guests (Group)</option>
                <option value="9 - 15 Guests (Large Family)">9 - 15 Guests</option>
                <option value="16+ Guests (Day Cruise/Celebration)">16+ Guests</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Food Preferences &amp; Requests (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Vegetarian only, anniversary cake, extra fish fry..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-xs sm:text-sm border border-emerald-200 rounded-2xl px-3.5 py-2 bg-emerald-50/40 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* 10% High-Conversion Orange Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-extrabold text-white bg-linear-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.01] cursor-pointer text-sm orange-pulse"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
              </svg>
              <span>Send Inquiry to Local Boat Owner ⚡</span>
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-2">
              🔒 No advance required for inquiry • Direct response in &lt; 3 mins
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
