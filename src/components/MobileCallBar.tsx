import { Phone, MessageCircle } from "lucide-react";

export default function MobileCallBar() {
  return (
    <nav
      aria-label="Mobile quick actions"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-3 py-2 flex items-center gap-2 shadow-2xl"
    >
      <a
        href="tel:+917012761588"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0A2540] text-white rounded-xl text-sm font-bold active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-[#2CD664]" />
        <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20want%20to%20enquire%20about%20houseboat%20booking"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#2CD664] text-white rounded-xl text-sm font-bold active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}

