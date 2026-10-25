export default function StatsBar() {
  const stats = [
    {
      value: "150+",
      label: "Verified Backwater Boats",
      desc: "Deluxe, Luxury Houseboats & Shikaras",
      icon: "🛥️",
      highlight: "Kerala Govt Approved",
    },
    {
      value: "12,500+",
      label: "Delighted Voyagers",
      desc: "Couples, Families & Corporate Groups",
      icon: "👥",
      highlight: "100% Safe Cruise",
    },
    {
      value: "4.9 ★",
      label: "Traveler Satisfaction",
      desc: "Over 3,420+ 5-star verified reviews",
      icon: "⭐",
      highlight: "Top Rated in Alleppey",
      isRating: true,
    },
    {
      value: "0%",
      label: "Middleman Commission",
      desc: "Direct boat owner rates save you 20-30%",
      icon: "💰",
      highlight: "Best Price Guarantee",
      isDiscount: true,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 60% White Card with 30% Light Green Border & Details, 10% Orange Highlights */}
      <div className="bg-white rounded-3xl shadow-xl shadow-emerald-950/5 border border-emerald-100/90 p-5 sm:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-100/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 ${
                idx > 0 ? "pt-5 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              {/* Soft Light Green Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-xl shadow-xs">
                {stat.icon}
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-2xl sm:text-3xl font-black tracking-tight ${
                      stat.isRating
                        ? "text-orange-600"
                        : stat.isDiscount
                        ? "text-emerald-700"
                        : "text-slate-900"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    {stat.highlight}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
