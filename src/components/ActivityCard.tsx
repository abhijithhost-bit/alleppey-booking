import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ArrowRight, MessageCircle } from "lucide-react";
import { Activity } from "@/types";

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const whatsappUrl = `https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(
    activity.title
  )}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EAE5DD] hover:border-orange-200 flex flex-col group">
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          loading="eager"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {activity.badge && (
          <span className="absolute top-3 left-3 bg-[#0A2540] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
            {activity.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 bg-[#0A2540]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-xs font-bold border border-white/10 shadow-md">
          <span className="text-amber-300 font-black">{activity.priceDisplay}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-[#0A2540] group-hover:text-[#FF6600] transition-colors mb-2">
            <Link href={`/${activity.slug}/`}>{activity.title}</Link>
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {activity.tagline}
          </p>

          <div className="space-y-2 text-xs text-slate-700 mb-6 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE5DD]">
            <div className="flex items-center gap-2 font-medium">
              <Clock className="w-4 h-4 text-[#FF6600]" />
              <span>{activity.duration}</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <Users className="w-4 h-4 text-[#2CD664]" />
              <span>{activity.capacity}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-[#EAE5DD]">
          <Link
            href={`/${activity.slug}/`}
            className="flex-1 py-2.5 px-3 rounded-xl text-center text-xs font-bold text-[#0A2540] bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#EAE5DD] transition-colors flex items-center justify-center gap-1"
          >
            <span>Learn More</span>
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

