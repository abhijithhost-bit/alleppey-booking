import { getWhatsAppUrl } from "../config/site";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Cruise Style",
      description:
        "Select between an overnight deluxe/luxury houseboat, hourly shikara canal ride, kayaking tour, or full-day cruise based on your group and budget.",
      icon: "🛥️",
      time: "Step 1",
    },
    {
      number: "02",
      title: "Get Real Photos & Direct Rate",
      description:
        "Message our local harbour team on WhatsApp. We send actual unedited photos and walk-around videos of available boats with direct owner quotes.",
      icon: "📱",
      time: "Within 5 Mins",
    },
    {
      number: "03",
      title: "Pay Small Advance & Cruise",
      description:
        "Lock in your date with a nominal advance token. Our coordinator warmly welcomes you at Finishing Point jetty for a memorable backwater voyage.",
      icon: "⚓",
      time: "Stress-Free Boarding",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-linear-to-b from-emerald-50/50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Decorative ambient light green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-emerald-200/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            Effortless 3-Step Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            How to Book Your Alleppey Boat Tour
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            No complicated reservation forms or payment surprises. Fast, transparent booking in less than 5 minutes.
          </p>
        </div>

        {/* 60% White Cards with 30% Light Green Accents & 10% Orange Numerals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-8 rounded-3xl bg-white border border-emerald-100 shadow-md hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* High-Impact Orange Step Number */}
                  <span className="text-4xl font-black text-orange-500 tracking-tighter">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-lg">
                    {step.icon}
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wide mb-2">
                  {step.time}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-emerald-500">
                  <div className="w-8 h-8 rounded-full bg-white shadow-md border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 10% High-Conversion Vibrant Orange WhatsApp Button */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl("Hi Alleppey Booking, I want to book a boat today with direct owner rates.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base bg-linear-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-xl shadow-orange-500/30 transition-all hover:scale-105 orange-pulse"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
            </svg>
            <span>Start Booking on WhatsApp (Instant Reply)</span>
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Average response time: <strong>under 3 minutes</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
