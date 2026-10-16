export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rohit & Ananya Sharma",
      location: "Bengaluru, India",
      role: "Couples Honeymoon Cruise",
      rating: 5,
      date: "October 2026",
      comment:
        "The 1-BHK Deluxe Houseboat was the highlight of our Kerala trip! The private chef prepared mouth-watering Karimeen Pollichathu, and sleeping on the tranquil backwaters under the starry sky was unforgettable. Seamless booking on WhatsApp with no broker headache.",
    },
    {
      name: "David & Sarah Jenkins",
      location: "London, UK",
      role: "Family Vacation",
      rating: 5,
      date: "September 2026",
      comment:
        "We rented a 3-BHK luxury houseboat for our family. The crew was remarkably hospitable, and the vessel was spotlessly clean with strong AC. The sunset view on Vembanad Lake took our breath away. Highly recommended!",
    },
    {
      name: "Pooja & Friends",
      location: "Mumbai, India",
      role: "Shikara 3-Hour Canal Tour",
      rating: 5,
      date: "October 2026",
      comment:
        "We had limited time before our evening train, so we booked a 3-hour Shikara ride. Our boat driver took us through quiet village canals where big houseboats cannot enter. Best ₹2,400 we spent in Alleppey!",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full">
            Real Guest Experiences
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by Over 12,000+ Backwater Voyagers
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Read honest feedback from couples, families, and solo adventurers who booked with Alleppey Booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-semibold text-slate-400 ml-1.5">{review.date}</span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {review.name}
                  </h4>
                  <span className="text-xs text-slate-500">
                    {review.location}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-sm">
                  {review.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
