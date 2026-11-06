import Link from "next/link";
import Image from "next/image";
import { Users, Bed, Utensils, MessageCircle, ArrowRight } from "lucide-react";
import { Houseboat } from "@/types";

interface HouseboatCardProps {
  boat: Houseboat;
}

export default function HouseboatCard({ boat }: HouseboatCardProps) {
  const whatsappUrl = `https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20want%20to%20check%20availability%20and%20rates%20for%20the%20${encodeURIComponent(
    boat.title
  )}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EAE5DD] hover:border-orange-200 flex flex-col group">
      {/* Image Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={boat.image}
          alt={boat.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {boat.badge && (
          <span className="absolute top-3 left-3 bg-[#FF6600] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
            {boat.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 bg-[#0A2540]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-xs font-bold border border-white/10 shadow-md">
          From <span className="text-amber-300 font-black">{boat.priceDisplay}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-[#0A2540] group-hover:text-[#FF6600] transition-colors mb-2">
            <Link href={`/${boat.slug}/`}>{boat.title}</Link>
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {boat.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 mb-6 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE5DD]">
            <div className="flex items-center gap-1.5 font-medium">
              <Bed className="w-4 h-4 text-[#FF6600]" />
              <span>{boat.bedrooms} AC Bedroom{boat.bedrooms > 1 ? "s" : ""}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-[#FF6600]" />
              <span>{boat.capacity}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Utensils className="w-4 h-4 text-[#2CD664]" />
              <span>All 3 Meals Included</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-[#2CD664]"></span>
              <span>Private Chef & Crew</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#EAE5DD]">
          <Link
            href={`/${boat.slug}/`}
            className="flex-1 py-2.5 px-3 rounded-xl text-center text-xs font-bold text-[#0A2540] bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#EAE5DD] transition-colors flex items-center justify-center gap-1"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl text-center text-xs font-extrabold text-white bg-[#FF6600] hover:bg-[#E65C00] transition-all flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}

