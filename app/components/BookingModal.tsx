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
      "1-BHK Deluxe Houseboat"
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
      `\nPlease check boat availability and share real photos/best rates.`,
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
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Quick Inquiry
            </span>
            <h3 className="text-xl font-bold mt-1">
              Check Availability &amp; Get Direct Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Select Package / Boat Type
            </label>
            <select
              value={boatType}
              onChange={(e) => setBoatType(e.target.value)}
              className="w-full text-sm font-medium border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
            >
              <option value="Private Houseboats (1 to 7 BHK Luxury/Deluxe)">
                Private Houseboat (1 to 7 BHK)
              </option>
              <option value="Sharing Houseboats (Budget AC Room)">
                Sharing Houseboat (Budget Room)
              </option>
              <option value="Shikara Boat Rides (Narrow Village Canals)">
                Shikara Boat Ride (Canal Tour)
              </option>
              <option value="Backwater Kayaking & Canoe Safari">
                Backwater Kayak &amp; Canoe Safari
              </option>
              <option value="Speed Boat Rides (Vembanad Thrill)">
                Speed Boat Ride (Vembanad Lake)
              </option>
              <option value="Backwater Homestays & Heritage Cottages">
                Backwater Homestay &amp; Cottages
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                className="w-full text-sm border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Contact Phone
              </label>
              <input
                type="tel"
                placeholder="e.g. 98470XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-sm border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Preferred Travel Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-sm border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Number of Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full text-sm font-medium border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
              >
                <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                <option value="3 - 4 Guests (Family)">3 - 4 Guests (Family)</option>
                <option value="5 - 8 Guests (Group)">5 - 8 Guests (Group)</option>
                <option value="9+ Guests (Large Party)">9+ Guests (Large Party)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Special Requests / Meal Preferences (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Candlelight dinner, pure veg food, upper deck boat, pickup from station..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-sm border border-slate-300 rounded-xl px-3.5 py-2 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-900/20 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
              </svg>
              <span>Send Inquiry to WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
