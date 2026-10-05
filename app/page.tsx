import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alleppey Boat Tour Packages | Houseboats, Shikara Rides & More",
  description:
    "Book premium Alleppey boat tour packages. Houseboats, Shared Boathouses, Shikara Rides, Kayaking & Speedboats. Starting from Rs.499. Verified operators. No hidden charges.",
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <StatsBar />
      <PackagesSection />
      <HowToBookSection />
      <WhyChooseUsSection />
      <GallerySection />
    </main>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[580px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/hero-image-desktop.webp"
          alt="Kiliroor Pearl houseboat on Alleppey backwaters"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/hero-image-mobile.webp"
          alt="Kiliroor Pearl houseboat on Alleppey backwaters"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg mb-4">
          <span className="text-green-400">Alleppey</span> Boat Tour
          <br />Packages
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium tracking-wide mb-2 drop-shadow">
          Houseboats &ndash; Shared Boathouses &ndash; Shikara Rides &ndash; Kayaking &ndash; Speedboats
        </p>
        <p className="text-xs sm:text-sm text-white/80 mb-6 drop-shadow">
          Starting from &#8377;499 &middot; Verified operators &middot; No hidden charges
        </p>

        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <div className="flex -space-x-2">
            {["R","A","S","P"].map((l, i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white">{l}</div>
            ))}
          </div>
          <div className="flex text-amber-400 text-sm" aria-label="4.8 stars">
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <span className="text-white font-bold text-sm">4.8</span>
          <span className="text-white/70 text-xs">2,000+ reviews</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a href="/packages" id="hero-view-packages-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:scale-105">
            View All Packages &#8594;
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" id="hero-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full border border-white/50 hover:border-white transition-all duration-200 shadow-lg backdrop-blur-sm hover:scale-105">
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS BAR ─── */
function StatsBar() {
  const stats = [
    { value: "2000+", label: "Happy Guests" },
    { value: "4.8★", label: "Google Rating" },
    { value: "3+",   label: "Years Running" },
  ];
  return (
    <div className="bg-gray-900 text-white py-5 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">&#10003;</span>
            <div>
              <span className="font-bold text-base">{s.value}</span>
              <span className="text-gray-300 text-sm ml-2">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PACKAGES ─── */
const packages = [
  { badge:"EXCLUSIVE",     badgeColor:"bg-green-600",  title:"Private Houseboat",  desc:"Rent an entire boat exclusively for your group. Choose from Deluxe, Premium, or Luxury setups.", price:"9000",  gradient:"from-teal-500 to-cyan-600",    href:"/private-houseboat-in-alleppey" },
  { badge:"BUDGET FRIENDLY",badgeColor:"bg-orange-500",title:"Shared Boathouses",  desc:"Book a private cabin on a shared boat. Same route, same Kerala meals, same crew at a lower price.", price:"5999",  gradient:"from-amber-400 to-orange-500", href:"/shared-boathouse-in-alleppey" },
  { badge:"DAY TRIP",      badgeColor:"bg-blue-600",   title:"Shikara",            desc:"Experience Alleppey Backwaters comfortably and peacefully without a heavy budget.",                price:"1000",  gradient:"from-green-500 to-emerald-600",href:"/shikara-in-alleppey" },
  { badge:"EXPERIENCE",    badgeColor:"bg-purple-600", title:"Kayaking",           desc:"Paddle through the open backwaters. Narrow canal access is only available in 2-hour sessions.",    price:"500",   gradient:"from-emerald-500 to-teal-700", href:"/kayaking-in-alleppey" },
  { badge:"ADVENTURE",     badgeColor:"bg-red-500",    title:"Speedboat",          desc:"Cover more of Alleppey in less time. Min. 3 guests required or ₹1000 base charge applies.",        price:"300",   gradient:"from-sky-400 to-blue-600",     href:"/speedboat-in-alleppey" },
];

function PackagesSection() {
  return (
    <section className="py-14 px-6 bg-white" id="packages">
      <div className="max-w-6xl mx-auto">
        <p className="text-green-600 text-xs font-bold tracking-widest uppercase mb-2">What We Offer</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Best Alleppey Boat Tour Packages</h2>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 xl:grid-cols-5">
          {packages.map((pkg, i) => (
            <div key={i} className="min-w-[240px] sm:min-w-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col bg-white hover:shadow-xl transition-shadow duration-300 flex-shrink-0 sm:flex-shrink">

              {/* Image placeholder */}
              <div className={`relative h-40 bg-gradient-to-br ${pkg.gradient} flex-shrink-0`}>
                <span className={`absolute bottom-2 left-2 ${pkg.badgeColor} text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase`}>{pkg.badge}</span>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{pkg.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{pkg.desc}</p>
                <div>
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider block mb-0.5">From</span>
                  <span className="text-gray-900 font-extrabold text-xl block mb-3">&#8377;{pkg.price}</span>
                  <a href={pkg.href}
                    className="w-full inline-flex items-center justify-center bg-green-500 hover:bg-green-400 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors duration-200">
                    Check Availability &#8594;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW TO BOOK ─── */
const steps = [
  { title:"Select Activity",    desc:"Explore our various packages, routes, and durations. Compare options to find the perfect fit for your itinerary.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-green-600"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"/></svg> },
  { title:"Customize & Date",   desc:"Pick your preferred travel dates, specify your group size, and let us know your authentic Kerala dining preferences.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-green-600"><rect x="3" y="4" width="18" height="18" rx="2"/><path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18"/></svg> },
  { title:"Confirm & Enjoy",    desc:"Secure your slot instantly online. You will receive all boarding details and start times directly via WhatsApp.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg> },
];

function HowToBookSection() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="how-to-book">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-green-600 text-xs font-bold tracking-widest uppercase mb-3">Seamless Journey</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14">How to Book Your Experience</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-5 shadow-sm">
                {step.icon}
              </div>
              {/* Dotted connector — only between items on desktop */}
              <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Connector line below icon row, desktop only */}
        <div className="hidden sm:block relative -mt-[calc(6rem+5rem)] mb-[calc(6rem+5rem)] pointer-events-none" aria-hidden="true">
          <div className="absolute left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] top-8 border-t-2 border-dashed border-gray-300" />
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE US ─── */
const features = [
  { title:"Diverse Backwater Fleet",  desc:"Choose from private cruises, budget-friendly shared boathouses, high-speed boats, and peaceful kayaks.",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-green-600"><path strokeLinecap="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg> },
  { title:"100% Safe & Verified",     desc:"Rigorous pre-trip safety checks, high-quality life jackets, and scheduled maintenance keep our entire fleet in top condition.",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> },
  { title:"Expert Crews & Guides",    desc:"From licensed boat captains to experienced guides, our professional team ensures you are in safe hands on every trip.",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
  { title:"Transparent Pricing",      desc:"Enjoy a stress-free experience with clear, upfront pricing. What you see is exactly what you pay, with zero hidden fees.",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
];

function WhyChooseUsSection() {
  return (
    <section className="py-20 px-6 bg-white" id="why-us">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-emerald-400 to-teal-600 shadow-xl">
            {/* Replace with <Image> once image is available */}
          </div>
          <div className="absolute -bottom-4 right-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 border border-gray-100">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="font-extrabold text-gray-900 text-lg leading-none">2k+</p>
              <p className="text-gray-500 text-xs uppercase tracking-wide">Happy Travelers</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="pt-6 md:pt-0">
          <p className="text-green-600 text-xs font-bold tracking-widest uppercase mb-3">Trusted Local Experts</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
            Your Complete Alleppey Backwater Experience.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            We provide a full range of adventures. Whether you are looking for a relaxing overnight cruise, a quick thrill on the open water, or a peaceful paddle through the village canals, we have something perfect for every traveler.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY ─── */
const gallery = [
  { alt:"Tourists dining on houseboat",           gradient:"from-amber-300 to-orange-400" },
  { alt:"Kerala sadya on banana leaf",             gradient:"from-green-400 to-lime-500" },
  { alt:"Sunset shikara ride",                    gradient:"from-sky-400 to-blue-500" },
  { alt:"Group kayaking",                          gradient:"from-teal-400 to-cyan-500" },
  { alt:"Traditional wooden houseboat",            gradient:"from-orange-400 to-red-400" },
  { alt:"Luxury houseboat exterior",               gradient:"from-violet-400 to-purple-500" },
  { alt:"Cozy houseboat cabin interior",           gradient:"from-yellow-400 to-amber-500" },
  { alt:"Family on speedboat adventure",           gradient:"from-rose-400 to-pink-500" },
];

function GallerySection() {
  return (
    <section className="py-16 px-6 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 text-center uppercase tracking-widest mb-2">
          Alleppey Experiences
        </h2>
        <p className="text-gray-500 text-sm text-center mb-10">
          Glimpses of our premium houseboats, shikara rides, and authentic Kerala backwater tours.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {gallery.map((item, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`} aria-hidden="true" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHATSAPP ICON ─── */
function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}