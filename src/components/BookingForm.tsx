"use client";

import { useState } from "react";
import { MessageCircle, Calendar, Users, Ship, CheckCircle2 } from "lucide-react";
import DatePicker from "@/components/DatePicker";
import { formatDateToDDMMYYYY } from "@/lib/utils";

interface BookingFormProps {
  initialService?: string;
  title?: string;
  subtitle?: string;
}

export default function BookingForm({
  initialService = "1 Bedroom Houseboat",
  title = "Quick Backwater Booking Enquiry",
  subtitle = "Instant rates & availability confirmed on WhatsApp in 2 minutes",
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialService,
    date: "",
    guests: "2 Guests",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Booking Enquiry - Alleppey Booking*
----------------------------------------
*Name:* ${formData.name || "Customer"}
*Phone:* ${formData.phone || "Not provided"}
*Service/Boat:* ${formData.service}
*Date of Cruise:* ${formatDateToDDMMYYYY(formData.date) || "To be discussed"}
*Number of Guests:* ${formData.guests}
${formData.notes ? `*Special Request:* ${formData.notes}` : ""}
----------------------------------------
Please confirm room availability, photos, and current best rates.`;

    const url = `https://wa.me/917012761588?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-[#0A2540]/15 border-2 border-[#EAE5DD] p-6 sm:p-8 relative">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF6600] text-xs font-bold uppercase tracking-wider mb-2.5">
          <span>⚡ Instant 2-Min WhatsApp Quote</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#0A2540] tracking-tight mb-1.5">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-1.5">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#EAE5DD] bg-[#FAF8F5]/40 focus:bg-white focus:border-[#FF6600] focus:ring-2 focus:ring-orange-200 text-sm outline-none transition-all text-[#0A2540]"
          />
        </div>

        {/* WhatsApp Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-1.5">
            WhatsApp Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#EAE5DD] bg-[#FAF8F5]/40 focus:bg-white focus:border-[#FF6600] focus:ring-2 focus:ring-orange-200 text-sm outline-none transition-all text-[#0A2540]"
          />
        </div>

        {/* Service Type Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-1.5">
            Select Boat or Activity *
          </label>
          <div className="relative">
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#EAE5DD] bg-[#FAF8F5]/40 focus:bg-white focus:border-[#FF6600] focus:ring-2 focus:ring-orange-200 text-sm outline-none appearance-none transition-all text-[#0A2540] font-medium"
            >
              <optgroup label="Houseboats">
                <option value="Sharing Houseboat">Sharing Houseboat (Budget AC Room)</option>
                <option value="1 Bedroom Houseboat">1 Bedroom Houseboat (Couples)</option>
                <option value="2 Bedroom Houseboat">2 Bedroom Houseboat (Family 4-8)</option>
                <option value="3 Bedroom Houseboat">3 Bedroom Houseboat (Group 6-12)</option>
                <option value="4 Bedroom Houseboat">4 Bedroom Houseboat (Group 8-16)</option>
                <option value="5 Bedroom Houseboat">5 Bedroom Houseboat (Group 10-20)</option>
                <option value="6 Bedroom Houseboat">6 Bedroom Houseboat (Group 12-24)</option>
                <option value="7 Bedroom Houseboat">7 Bedroom Houseboat (Group 14-28)</option>
                <option value="8 Bedroom Houseboat">8 Bedroom Houseboat (Group 16-32)</option>
                <option value="10 Bedroom Houseboat">10 Bedroom Houseboat (Up to 40 Guests)</option>
                <option value="12 Bedroom Houseboat">12 Bedroom Houseboat (Up to 48 Guests)</option>
                <option value="14 Bedroom Houseboat">14 Bedroom Houseboat (Biggest in Kerala)</option>
              </optgroup>
              <optgroup label="Day Boating & Activities">
                <option value="Shikara Ride">Shikara Boat Ride (Hourly / Narrow Canals)</option>
                <option value="Kayaking Tour">Guided Kayaking Tour (Sunrise / Sunset)</option>
                <option value="Speed Boat">Speed Boat Cruise (High-Speed Lake Tour)</option>
              </optgroup>
            </select>
            <Ship className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Travel Date & Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-1.5">
              Cruise Date
            </label>
            <DatePicker
              value={formData.date}
              onChange={(date) => setFormData({ ...formData, date })}
              placeholder="Select check-in date"
              className="px-4 py-2.5 rounded-xl border border-[#EAE5DD] bg-[#FAF8F5]/40 focus-within:bg-white focus-within:border-[#FF6600] focus-within:ring-2 focus-within:ring-orange-200 text-sm outline-none transition-all text-[#0A2540]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-1.5">
              Total Guests
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. 2 Adults, 1 Child"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#EAE5DD] bg-[#FAF8F5]/40 focus:bg-white focus:border-[#FF6600] focus:ring-2 focus:ring-orange-200 text-sm outline-none transition-all text-[#0A2540]"
              />
              <Users className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Notes / Special Requests */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-1.5">
            Special Requests (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Pure veg food, flower bed decoration, honeymoon cake..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-[#EAE5DD] bg-[#FAF8F5]/40 focus:bg-white focus:border-[#FF6600] focus:ring-2 focus:ring-orange-200 text-sm outline-none transition-all text-[#0A2540]"
          />
        </div>

        {/* Submit to WhatsApp */}
        <button
          type="submit"
          className="w-full py-4 rounded-xl font-extrabold text-base bg-[#FF6600] hover:bg-[#E65C00] text-white flex items-center justify-center gap-2 shadow-xl shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>Get Live Rates & Photos on WhatsApp →</span>
        </button>

        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-2">
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2CD664]" /> Zero Booking Fee
          </span>
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2CD664]" /> Official Boats
          </span>
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2CD664]" /> Best Price Guarantee
          </span>
        </div>
      </form>
    </div>
  );
}

