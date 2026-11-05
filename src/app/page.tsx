import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Shield, Award, Sparkles, CheckCircle2, PhoneCall, Star, Clock, Compass, Anchor } from "lucide-react";
import houseboatsData from "@/data/houseboats.json";
import activitiesData from "@/data/activities.json";
import blogsData from "@/data/blogs.json";
import HouseboatCard from "@/components/HouseboatCard";
import ActivityCard from "@/components/ActivityCard";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
import ItineraryTimeline from "@/components/ItineraryTimeline";
import { Houseboat, Activity, BlogPost } from "@/types";

export default function HomePage() {
  const houseboats = houseboatsData as Houseboat[];
  const activities = activitiesData as Activity[];
  const blogs = (blogsData as BlogPost[]).slice(0, 3);

  const homeFaqs = [
    {
      q: "What is the difference between a Private Houseboat and a Sharing Houseboat in Alleppey?",
      a: "A Private Houseboat is chartered exclusively for your family, couple, or group with complete privacy, dedicated crew, and customized meal preferences. A Sharing Houseboat provides you with your own private, lockable air-conditioned bedroom with attached bathroom, while sharing common areas like the front lounge deck and dining room with other travelers at a very budget-friendly rate."
    },
    {
      q: "Are all meals included in the houseboat booking rate?",
      a: "Yes! All overnight houseboat packages with Alleppey Booking include welcome tender coconut drink, traditional Kerala backwater lunch (with authentic Pearl Spot / Karimeen fry), evening tea/coffee with hot banana fritters (Pazham Pori), candlelight dinner, and next morning's breakfast prepared fresh onboard by your dedicated chef."
    },
    {
      q: "What are the standard check-in and checkout timings for houseboats?",
      a: "Standard check-in is at 12:00 PM (Noon) and checkout is at 09:00 AM the following morning. Cruising runs from 12:00 PM to 5:30 PM on Day 1 with scenic stops, and from 7:30 AM to 9:00 AM on Day 2 across morning mist on the lake."
    },
    {
      q: "How do I confirm my booking and what are the payment terms?",
      a: "You can book directly via WhatsApp (+91 70127 61588). We confirm boat photos, room category, and dates within minutes. A small advance token secures your booking, and the balance is paid upon boarding at the jetty."
    },
    {
      q: "Which boat is best for exploring narrow village canals?",
      a: "Shikara boats and kayaks are ideal for narrow village canals (like Kainakary and Meenappally). Large houseboats cruise the wide rivers and Vembanad Lake. Many guests book an overnight houseboat cruise plus a 2-hour morning Shikara or Kayak ride for the complete experience."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0A2540] text-white overflow-hidden py-16 sm:py-20">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-18-at-2.58.55-PM-scaled.jpeg"
            alt="Alleppey Houseboat Kerala Backwaters"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0A2540, rgba(10,37,64,0.85), transparent)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[#2CD664] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Alleppey Backwater Bookings 2026</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                Experience Pure Magic on{" "}
                <span className="text-[#FF6600]">Alleppey Backwaters</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Book government-verified private houseboats, budget-friendly sharing houseboats, scenic Shikara rides, and kayaking in Alappuzha with zero booking fees and instant WhatsApp confirmation.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                  <Shield className="w-4 h-4 text-[#2CD664]" />
                  <span>Govt. Verified Boats</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                  <Award className="w-4 h-4 text-[#FF6600]" />
                  <span>Fresh Kerala Meals</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>4.9/5 Rating (1,200+ Guests)</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20want%20to%20check%20availability%20and%20rates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full font-extrabold text-sm sm:text-base bg-[#2CD664] hover:bg-[#22B350] text-white flex items-center gap-2.5 shadow-xl shadow-green-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href="tel:+917012761588"
                  className="px-6 py-4 rounded-full font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#2CD664]" />
                  <span>Call +91 70127 61588</span>
                </a>
              </div>
            </div>

            {/* Hero Right Booking Form */}
            <div className="lg:col-span-5">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Strip */}
      <section className="bg-slate-50 border-y border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6600] flex items-center justify-center flex-shrink-0 font-bold">
                <Anchor className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A2540]">1 to 14 Bedroom Fleet</p>
                <p className="text-xs text-slate-500 mt-0.5">Couples, families, and massive group cruises</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#2CD664] flex items-center justify-center flex-shrink-0 font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A2540]">All Meals Included</p>
                <p className="text-xs text-slate-500 mt-0.5">Authentic Karimeen, chicken & vegetarian sadya</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A2540]">Instant Confirmation</p>
                <p className="text-xs text-slate-500 mt-0.5">Direct chat on WhatsApp with actual photos</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A2540]">Complete Boating Hub</p>
                <p className="text-xs text-slate-500 mt-0.5">Houseboats, Shikara, Kayaks & Speedboats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Houseboat Fleet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                Private & Sharing Fleet
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] mt-3">
                Alleppey Houseboat Packages
              </h2>
              <p className="text-sm text-slate-500 mt-2 max-w-xl">
                Choose from private 1 bedroom to massive 14 bedroom houseboats, or budget sharing houseboats. All include AC rooms, dedicated crew, and freshly prepared meals.
              </p>
            </div>
            <Link
              href="/house-boat-alleppey/"
              className="mt-4 md:mt-0 text-sm font-bold text-[#FF6600] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore All 14 Fleet Options →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houseboats.slice(0, 6).map((boat) => (
              <HouseboatCard key={boat.slug} boat={boat} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/house-boat-alleppey/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm bg-[#0A2540] text-white hover:bg-slate-800 transition-colors shadow-md"
            >
              View Full Fleet (7, 8, 10, 12, 14 Bedroom Houseboats) →
            </Link>
          </div>
        </div>
      </section>

      {/* Alternative Boating: Shikara, Kayaking, Speedboat */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#2CD664] uppercase tracking-wider bg-emerald-100/80 px-3 py-1 rounded-full">
              Day Tours & Adventures
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] mt-3">
              Shikara Rides, Kayaking & Speedboats
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Want to explore narrow village canals or get an adrenaline rush on Vembanad Lake? Book hourly rides with local guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act) => (
              <ActivityCard key={act.slug} activity={act} />
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary & Meal Plan Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ItineraryTimeline />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* Latest Travel Guides & Blogs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                Kerala Backwater Guides
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] mt-3">
                Latest Travel Tips & Guides
              </h2>
              <p className="text-sm text-slate-500 mt-2 max-w-xl">
                Expert tips on best cruising routes, budget saving strategies, couples guides, and seasonal timing in Alleppey.
              </p>
            </div>
            <Link
              href="/blogs/"
              className="mt-4 md:mt-0 text-sm font-bold text-[#FF6600] hover:underline"
            >
              View All 10 Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((b) => (
              <article
                key={b.slug}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {b.date} • {b.author}
                    </span>
                    <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#FF6600] transition-colors mt-2 mb-2 line-clamp-2">
                      <Link href={`/blogs/${b.slug}/`}>{b.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {b.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blogs/${b.slug}/`}
                    className="text-xs font-bold text-[#FF6600] mt-4 inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Read Article</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="bg-[#0A2540] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2CD664] bg-emerald-950/60 border border-emerald-800 px-3.5 py-1.5 rounded-full inline-block">
            Need Instant Help Planning Your Trip?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Speak Directly with Our Local Alleppey Booking Captain
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get actual real-time boat photos, live availability, weather updates, and tailored package rates directly on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20please%20help%20me%20plan%20my%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-extrabold text-sm sm:text-base bg-[#2CD664] hover:bg-[#22B350] text-white flex items-center gap-2 shadow-xl shadow-green-500/20 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chat on WhatsApp (+91 70127 61588)</span>
            </a>
            <a
              href="tel:+917012761588"
              className="px-6 py-4 rounded-full font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#2CD664]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

