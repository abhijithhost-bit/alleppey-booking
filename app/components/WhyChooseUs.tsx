import { SITE_CONFIG } from "../config/site";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Direct Owner Rates (Zero Broker Markup)",
      description:
        "Book directly with authentic local boat owners at Finishing Point, Alleppey. Save up to 25% compared to third-party travel aggregators and roadside brokers.",
      icon: "💰",
      badge: "Save Up to 25%",
      badgeColor: "orange",
    },
    {
      title: "100% Kerala Tourism Certified Fleet",
      description:
        "Every single boat in our verified fleet possesses valid navigation licenses, high-grade life jackets, fire extinguishers, and government-licensed local captains.",
      icon: "🛡️",
      badge: "Govt Certified",
      badgeColor: "emerald",
    },
    {
      title: "Fresh Kerala Cuisine Cooked Live Onboard",
      description:
        "Savor authentic regional flavors prepared live by your personal onboard chef — Pearl Spot fish (Karimeen Pollichathu), country chicken roast, and traditional vegetarian sadya feasts.",
      icon: "👨‍🍳",
      badge: "Live Chef",
      badgeColor: "emerald",
    },
    {
      title: "Transparent Pricing (No Surprise Jetty Fees)",
      description:
        "What you see is what you pay. Fuel, crew charges, port taxes, generator AC, and all scheduled Kerala meals are clearly listed upfront with zero hidden charges.",
      icon: "📋",
      badge: "100% Transparent",
      badgeColor: "emerald",
    },
    {
      title: "Tailored Village Canal & Lake Itineraries",
      description:
        "Choose between peaceful interior village canals, Kuttanad paddy fields below sea level, or expansive sunset panoramic views over Vembanad Lake.",
      icon: "🛶",
      badge: "Custom Routes",
      badgeColor: "emerald",
    },
    {
      title: "24/7 Cruise Support & Jetty Welcome",
      description:
        "Our dedicated operations team is based at Finishing Point, Alleppey. We personally receive you at the jetty and assist you from boarding until farewell.",
      icon: "🤝",
      badge: "24/7 Local Care",
      badgeColor: "orange",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-linear-to-b from-white via-emerald-50/25 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200">
            The Alleppey Booking Advantage
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Thousands of Travelers Trust Us
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Planning a Kerala houseboat cruise can be confusing with hundreds of middlemen. Here is why booking directly with {SITE_CONFIG.name} guarantees a stress-free vacation.
          </p>
        </div>

        {/* 60% White Cards with 30% Light Green Containers & 10% Orange Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-white border border-emerald-100 shadow-md hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl shadow-xs">
                    {item.icon}
                  </div>
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      item.badgeColor === "orange"
                        ? "bg-orange-100 text-orange-800 border-orange-200"
                        : "bg-emerald-50 text-emerald-800 border-emerald-200"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-800">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified Guarantee
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
