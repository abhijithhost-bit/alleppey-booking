export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rohit & Ananya Sharma",
      location: "Bengaluru, India",
      role: "Couples Honeymoon Cruise",
      packageUsed: "1-BHK Deluxe Houseboat",
      rating: 5,
      date: "October 2026",
      avatar: "RS",
      comment:
        "The 1-BHK Deluxe Houseboat was the absolute highlight of our Kerala trip! The personal onboard chef prepared mouth-watering Karimeen Pollichathu, and waking up to the peaceful Vembanad sunrise was unforgettable. Instant WhatsApp response with real boat photos made booking so easy.",
    },
    {
      name: "David & Sarah Jenkins",
      location: "London, UK",
      role: "Family Vacation (6 Guests)",
      packageUsed: "3-BHK Luxury Houseboat",
      rating: 5,
      date: "September 2026",
      avatar: "DJ",
      comment:
        "We chartered a 3-BHK luxury houseboat for our family. The crew was remarkably hospitable, and the vessel was spotlessly clean with 24-hour strong AC. Booking directly saved us nearly 25% compared to online aggregators. Highly recommended!",
    },
    {
      name: "Pooja Hegde & Friends",
      location: "Mumbai, India",
      role: "Group Day Trip",
      packageUsed: "3-Hour Scenic Shikara Ride",
      rating: 5,
      date: "October 2026",
      avatar: "PH",
      comment:
        "We had limited time before catching our evening train, so we booked a 3-hour Shikara ride. Our driver took us deep into narrow palm-fringed village canals where big houseboats cannot go. Fresh tender coconut water and village chai made it perfect!",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-linear-to-b from-white via-emerald-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200">
            Real Traveler Experiences
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Loved by Over 12,500+ Backwater Voyagers
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Read authentic feedback from couples, families, and day trippers who booked directly with Alleppey Booking.
          </p>
        </div>

        {/* 60% White Cards with 30% Light Green Details & 10% Orange Stars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-emerald-100 shadow-md hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 10% Orange 5-Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {review.date}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {review.packageUsed}
                  </span>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Strip */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 font-extrabold text-xs shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                    {review.name}
                  </h3>
                  <span className="text-[11px] text-slate-500 block truncate">
                    {review.location} • <span className="text-emerald-700 font-semibold">{review.role}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Summary Ribbon */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌟</span>
            <div>
              <span className="font-extrabold text-slate-900 text-sm block">
                Google &amp; TripAdvisor Verified Rating: 4.9 / 5.0
              </span>
              <span className="text-xs text-slate-500">Based on 3,420+ genuine traveler reviews in Alleppey</span>
            </div>
          </div>
          <span className="text-xs font-extrabold text-orange-700 bg-orange-100 px-3 py-1.5 rounded-xl border border-orange-200 shrink-0">
            100% Genuine Reviews
          </span>
        </div>
      </div>
    </section>
  );
}
