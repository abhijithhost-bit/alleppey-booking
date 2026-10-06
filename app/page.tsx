import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import FadeInSection from "./components/FadeInSection";

export const metadata: Metadata = {
  title: "Alleppey Boat Tour Packages | Houseboats, Shikara Rides & More",
  description:
    "Book premium Alleppey boat tour packages. Houseboats, Shared Boathouses, Shikara Rides, Kayaking & Speedboats. Starting from Rs.499. Verified operators. No hidden charges.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <StatsSection />
        <PackagesSection />
        <HowToBookSection />
        <CTABannerSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <GallerySection />
        <FooterSection />
      </main>
    </>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="hero" aria-label="Alleppey boat tours hero">
      {/* Background images */}
      <div className="hero__bg hero__bg--desktop" aria-hidden="true">
        <Image
          src="/hero-image-desktop.webp"
          alt="Kiliroor Pearl houseboat on Alleppey backwaters"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="hero__bg hero__bg--mobile" aria-hidden="true">
        <Image
          src="/hero-image-mobile.webp"
          alt="Kiliroor Pearl houseboat on Alleppey backwaters"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Gradient overlay — tropical sunset feel */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        {/* Social proof pill */}
        <div className="hero__proof-pill">
          <div className="hero__avatars" aria-hidden="true">
            {["R", "A", "S", "P"].map((l, i) => (
              <div key={i} className="hero__avatar">{l}</div>
            ))}
          </div>
          <span className="hero__stars" aria-label="4.8 stars">★★★★★</span>
          <span className="hero__rating-bold">4.8</span>
          <span className="hero__rating-dim">2,000+ reviews</span>
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          <span className="hero__title-accent">Kerala's Finest</span>
          <br />
          Backwater Escapes
        </h1>

        <p className="hero__subtitle">
          Houseboats &ndash; Shikara Rides &ndash; Kayaking &ndash; Speedboats
        </p>
        <p className="hero__tagline">
          Starting from &#8377;499 &middot; Verified operators &middot; No hidden charges
        </p>

        {/* CTA buttons */}
        <div className="hero__ctas">
          <a
            href="/packages"
            id="hero-view-packages-btn"
            className="btn btn--green btn--lg"
          >
            Explore Packages &#8594;
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="btn btn--ghost btn--lg"
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-hint" aria-hidden="true">
          <span className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  );
}

/* ─── PACKAGES ─── */
const packages = [
  {
    badge: "EXCLUSIVE",
    badgeColor: "badge--green",
    title: "Private Houseboat",
    desc: "Rent an entire boat exclusively for your group. Choose from Deluxe, Premium, or Luxury setups.",
    price: "9,000",
    gradient: "pkg-gradient--teal",
    emoji: "🛥️",
    href: "/private-houseboat-in-alleppey",
  },
  {
    badge: "BEST VALUE",
    badgeColor: "badge--orange",
    title: "Shared Boathouse",
    desc: "Book a private cabin on a shared boat. Same route, same Kerala meals, same crew at a lower price.",
    price: "5,999",
    gradient: "pkg-gradient--amber",
    emoji: "⛵",
    href: "/shared-boathouse-in-alleppey",
  },
  {
    badge: "DAY TRIP",
    badgeColor: "badge--blue",
    title: "Shikara Ride",
    desc: "Experience the backwaters comfortably and peacefully without breaking the bank.",
    price: "1,000",
    gradient: "pkg-gradient--green",
    emoji: "🚤",
    href: "/shikara-in-alleppey",
  },
  {
    badge: "ADVENTURE",
    badgeColor: "badge--purple",
    title: "Kayaking",
    desc: "Paddle through open backwaters and narrow canals. Available in 2-hour sessions.",
    price: "500",
    gradient: "pkg-gradient--emerald",
    emoji: "🛶",
    href: "/kayaking-in-alleppey",
  },
  {
    badge: "THRILL",
    badgeColor: "badge--red",
    title: "Speedboat",
    desc: "Cover more of Alleppey in less time. Min. 3 guests or ₹1000 base charge applies.",
    price: "300",
    gradient: "pkg-gradient--sky",
    emoji: "💨",
    href: "/speedboat-in-alleppey",
  },
];

function PackagesSection() {
  return (
    <section className="section bg-light" id="packages">
      <div className="container">
        <FadeInSection>
          <p className="section__eyebrow">What We Offer</p>
          <h2 className="section__title">Best Alleppey Boat Tour Packages</h2>
          <p className="section__subtitle">
            From luxury overnight cruises to adrenaline-pumping speedboat rides — find your perfect backwater adventure.
          </p>
        </FadeInSection>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="pkg-scroll-track">
          {packages.map((pkg, i) => (
            <FadeInSection key={i} delay={i * 80} className="pkg-card-wrapper">
              <a href={pkg.href} className="pkg-card" id={`pkg-card-${i}`}>
                {/* Visual */}
                <div className={`pkg-card__visual ${pkg.gradient}`}>
                  <span className="pkg-card__emoji" aria-hidden="true">{pkg.emoji}</span>
                  <span className={`pkg-card__badge ${pkg.badgeColor}`}>{pkg.badge}</span>
                </div>

                {/* Body */}
                <div className="pkg-card__body">
                  <h3 className="pkg-card__title">{pkg.title}</h3>
                  <p className="pkg-card__desc">{pkg.desc}</p>
                  <div className="pkg-card__footer">
                    <div>
                      <span className="pkg-card__from">From</span>
                      <span className="pkg-card__price">&#8377;{pkg.price}</span>
                    </div>
                    <span className="pkg-card__cta btn btn--orange btn--sm">
                      Book Now &#8594;
                    </span>
                  </div>
                </div>
              </a>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="packages__view-all">
            <a href="/packages" className="btn btn--green btn--lg" id="packages-view-all-btn">
              View All Packages &#8594;
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

/* ─── HOW TO BOOK ─── */
const steps = [
  {
    step: "01",
    title: "Select Activity",
    desc: "Explore our packages, routes, and durations. Compare options to find the perfect fit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="step-icon" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Customize & Pick Date",
    desc: "Select travel dates, group size, and your authentic Kerala dining preferences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="step-icon" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Confirm & Enjoy",
    desc: "Secure your slot instantly. Receive all boarding details and start times via WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="step-icon" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

function HowToBookSection() {
  return (
    <section className="section bg-dark-green" id="how-to-book">
      <div className="container">
        <FadeInSection>
          <p className="section__eyebrow section__eyebrow--light">Simple Process</p>
          <h2 className="section__title section__title--light">Book in 3 Easy Steps</h2>
          <p className="section__subtitle section__subtitle--light">
            From browsing to boarding — we make it effortless.
          </p>
        </FadeInSection>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <FadeInSection key={i} delay={i * 120}>
              <div className="step-card">
                <div className="step-card__number">{step.step}</div>
                <div className="step-card__icon-wrap">
                  {step.icon}
                </div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ─── */
function CTABannerSection() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__inner">
        <FadeInSection>
          <p className="cta-banner__eyebrow">🔥 Limited Slots This Season</p>
          <h2 className="cta-banner__title">
            Don't Miss Kerala's Most Iconic Backwater Experience
          </h2>
          <p className="cta-banner__subtitle">
            Join over 2,000 travelers who made memories on the Alleppey backwaters.
          </p>
          <div className="cta-banner__actions">
            <a
              href="/packages"
              id="cta-banner-book-btn"
              className="btn btn--orange btn--lg btn--glow"
            >
              Reserve Your Spot &#8594;
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-banner-whatsapp-btn"
              className="btn btn--ghost-light btn--lg"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE US ─── */
const features = [
  {
    title: "Diverse Backwater Fleet",
    desc: "Choose from private cruises, budget-friendly shared boathouses, high-speed boats, and peaceful kayaks.",
    icon: "🗺️",
  },
  {
    title: "100% Safe & Verified",
    desc: "Rigorous pre-trip safety checks, quality life jackets, and scheduled maintenance keep our fleet top-notch.",
    icon: "🛡️",
  },
  {
    title: "Expert Crews & Guides",
    desc: "Licensed captains and experienced guides ensure you're in safe hands on every trip.",
    icon: "👨‍✈️",
  },
  {
    title: "Transparent Pricing",
    desc: "Clear, upfront pricing. What you see is exactly what you pay — zero hidden fees.",
    icon: "💎",
  },
];

function WhyChooseUsSection() {
  return (
    <section className="section bg-white" id="why-us">
      <div className="container">
        <div className="why-us__grid">
          {/* Image column */}
          <FadeInSection className="why-us__image-col">
            <div className="why-us__image-frame">
              <div className="why-us__image-gradient" aria-hidden="true" />
              <div className="why-us__badge-float">
                <span className="why-us__badge-icon">🔥</span>
                <div>
                  <p className="why-us__badge-num">2k+</p>
                  <p className="why-us__badge-text">Happy Travelers</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Text column */}
          <div className="why-us__text-col">
            <FadeInSection>
              <p className="section__eyebrow">Trusted Local Experts</p>
              <h2 className="section__title why-us__heading">
                Your Complete Alleppey Backwater Experience.
              </h2>
              <p className="why-us__intro">
                We provide a full range of adventures — whether you want a relaxing overnight cruise, a quick thrill on the open water, or a peaceful paddle through village canals.
              </p>
            </FadeInSection>

            <div className="features-grid">
              {features.map((f, i) => (
                <FadeInSection key={i} delay={i * 80}>
                  <div className="feature-card">
                    <div className="feature-card__icon-wrap">
                      <span className="feature-card__emoji">{f.icon}</span>
                    </div>
                    <div>
                      <h3 className="feature-card__title">{f.title}</h3>
                      <p className="feature-card__desc">{f.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Bangalore",
    rating: 5,
    text: "The private houseboat was absolutely magical. Woke up to the sound of water and birds. The crew was incredibly attentive and the Kerala meals were the best we've ever had!",
    avatar: "PR",
  },
  {
    name: "Sanjay Mehta",
    location: "Mumbai",
    rating: 5,
    text: "Booked the shikara ride for my family and it exceeded all expectations. Very organized, punctual, and the guide knew every corner of the backwaters. Highly recommended!",
    avatar: "SM",
  },
  {
    name: "Anjali Thomas",
    location: "Delhi",
    rating: 5,
    text: "The kayaking session was an absolute adventure. Paddling through the narrow village canals was surreal. Booking was seamless and WhatsApp support was instant.",
    avatar: "AT",
  },
  {
    name: "Vikram & Deepa",
    location: "Chennai",
    rating: 5,
    text: "Went for the shared boathouse — best budget decision of our trip. Same experience as a private boat at half the price. Will definitely be back for the private houseboat next time.",
    avatar: "VD",
  },
];

function TestimonialsSection() {
  return (
    <section className="section bg-light" id="testimonials">
      <div className="container">
        <FadeInSection>
          <p className="section__eyebrow">What Guests Say</p>
          <h2 className="section__title">Real Stories, Real Magic</h2>
          <p className="section__subtitle">
            Over 2,000 travelers have explored the Alleppey backwaters with us. Here's what they say.
          </p>
        </FadeInSection>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <div className="testimonial-card">
                <div className="testimonial-card__stars" aria-label={`${t.rating} stars`}>
                  {"★".repeat(t.rating)}
                </div>
                <p className="testimonial-card__text">&#8220;{t.text}&#8221;</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__location">📍 {t.location}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY ─── */
const gallery = [
  { alt: "Tourists dining on houseboat", gradient: "gallery-grad--1", emoji: "🍽️" },
  { alt: "Kerala sadya on banana leaf", gradient: "gallery-grad--2", emoji: "🌿" },
  { alt: "Sunset shikara ride", gradient: "gallery-grad--3", emoji: "🌅" },
  { alt: "Group kayaking", gradient: "gallery-grad--4", emoji: "🛶" },
  { alt: "Traditional wooden houseboat", gradient: "gallery-grad--5", emoji: "⛵" },
  { alt: "Luxury houseboat exterior", gradient: "gallery-grad--6", emoji: "🛥️" },
  { alt: "Cozy houseboat cabin interior", gradient: "gallery-grad--7", emoji: "🛏️" },
  { alt: "Family on speedboat adventure", gradient: "gallery-grad--8", emoji: "💨" },
];

function GallerySection() {
  return (
    <section className="section bg-white" id="gallery">
      <div className="container">
        <FadeInSection>
          <p className="section__eyebrow">Visual Stories</p>
          <h2 className="section__title">Alleppey Experiences</h2>
          <p className="section__subtitle">
            Glimpses of our premium houseboats, shikara rides, and authentic Kerala backwater tours.
          </p>
        </FadeInSection>

        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <FadeInSection key={i} delay={i * 50} className="gallery-item-wrapper">
              <div className={`gallery-item ${item.gradient}`} title={item.alt}>
                <span className="gallery-item__emoji" aria-hidden="true">{item.emoji}</span>
                <div className="gallery-item__overlay">
                  <p className="gallery-item__label">{item.alt}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function FooterSection() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span>🌿</span>
            <span className="footer__logo-text">
              <strong>Alleppey</strong>Booking
            </span>
          </div>
          <p className="footer__tagline">
            Kerala's most trusted backwater tour operator. Making memories since 2021.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--green footer__whatsapp"
            id="footer-whatsapp-btn"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>

        {/* Links */}
        <div className="footer__links-col">
          <h3 className="footer__col-title">Packages</h3>
          <ul className="footer__link-list">
            <li><a href="/private-houseboat-in-alleppey" className="footer__link">Private Houseboat</a></li>
            <li><a href="/shared-boathouse-in-alleppey" className="footer__link">Shared Boathouse</a></li>
            <li><a href="/shikara-in-alleppey" className="footer__link">Shikara Rides</a></li>
            <li><a href="/kayaking-in-alleppey" className="footer__link">Kayaking</a></li>
            <li><a href="/speedboat-in-alleppey" className="footer__link">Speedboat</a></li>
          </ul>
        </div>

        <div className="footer__links-col">
          <h3 className="footer__col-title">Company</h3>
          <ul className="footer__link-list">
            <li><a href="/#why-us" className="footer__link">About Us</a></li>
            <li><a href="/#gallery" className="footer__link">Gallery</a></li>
            <li><a href="/#testimonials" className="footer__link">Reviews</a></li>
            <li><a href="/#how-to-book" className="footer__link">How to Book</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__links-col">
          <h3 className="footer__col-title">Contact</h3>
          <ul className="footer__link-list">
            <li>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="footer__link footer__link--icon">
                <WhatsAppIcon /> +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:hello@alleppeybooking.com" className="footer__link footer__link--icon">
                ✉️ hello@alleppeybooking.com
              </a>
            </li>
            <li className="footer__link footer__link--icon" aria-label="Location">
              📍 Alleppey (Alappuzha), Kerala, India
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} AlleppeyBooking. All rights reserved.</p>
        <p>Made with 💚 in Kerala</p>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP ICON ─── */
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={18}
      height={18}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}