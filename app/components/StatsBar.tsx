export default function StatsBar() {
  const stats = [
    {
      value: "150+",
      label: "Verified Boats",
      desc: "Deluxe, Premium & Shikara",
    },
    {
      value: "12,500+",
      label: "Delighted Guests",
      desc: "Couples, Families & Groups",
    },
    {
      value: "4.9 ★",
      label: "Guest Satisfaction",
      desc: "Over 3,400+ 5-star reviews",
    },
    {
      value: "100%",
      label: "Government Certified",
      desc: "Safety gear & licensed crew",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-800 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-800 mt-0.5">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5 font-medium">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
