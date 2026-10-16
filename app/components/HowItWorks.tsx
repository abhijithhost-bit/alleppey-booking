import { getWhatsAppUrl } from "../config/site";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Cruise Type",
      description:
        "Select between an overnight deluxe/luxury houseboat, hourly shikara ride, or day cruise based on your schedule and budget.",
    },
    {
      number: "02",
      title: "Confirm Details via WhatsApp",
      description:
        "Share your preferred dates, bedroom count, and meal preferences. We immediately send real boat photos, videos, and transparent pricing.",
    },
    {
      number: "03",
      title: "Pay Token & Board Stress-Free",
      description:
        "Secure your booking with a small token advance. Our cruise coordinator welcomes you at Finishing Point jetty for an unforgettable voyage.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3.5 py-1 rounded-full">
            Simple 3-Step Process
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            How to Book Your Alleppey Boat Tour
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            No complicated forms or payment surprises. Fast, transparent booking in less than 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-black text-emerald-400/80 tracking-tighter">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-emerald-500">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Hi Alleppey Booking, I want to book a boat today.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <span>Start Booking on WhatsApp</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.057-2.203-.541-1.849-.733-3.037-2.607-3.13-2.731-.093-.124-.747-.991-.747-1.89 0-.9.472-1.343.64-1.527.169-.184.368-.231.491-.231.124 0 .248.002.355.007.113.006.264-.043.414.318.15.362.513 1.25.558 1.343.045.093.076.202.016.324-.061.123-.092.199-.183.307-.091.108-.192.241-.274.324-.092.092-.188.192-.081.376.107.184.475.784 1.021 1.27.702.627 1.294.821 1.478.913.184.092.291.077.399-.046.107-.123.46-538.583-.722.123-.184.246-.153.414-.092.169.061 1.075.507 1.259.599.184.092.307.138.353.215.046.077.046.446-.098.851z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
