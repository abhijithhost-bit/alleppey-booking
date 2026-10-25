"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import ServicesCardsSection from "./components/ServicesCardsSection";
import PackagesSection, { PackageItem } from "./components/PackagesSection";
import FareCalculator from "./components/FareCalculator";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { ServiceItem } from "./config/services";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [searchData, setSearchData] = useState<{
    boatType: string;
    date: string;
    guests: string;
  } | null>(null);

  const handleOpenSearchModal = (data: {
    boatType: string;
    date: string;
    guests: string;
  }) => {
    setSearchData(data);
    setSelectedPackage(null);
    setModalOpen(true);
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSearchData({
      boatType: service.title,
      date: "",
      guests: "2 Guests (Couple)",
    });
    setSelectedPackage(null);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* 1. Top Navigation & Urgency Banner */}
      <Navbar onOpenBookingModal={() => setModalOpen(true)} />

      {/* Main Content (60% White + 30% Light Green + 10% Orange Aesthetic) */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section with Live Availability Search & Fare Estimation Card */}
        <HeroSection onSearch={handleOpenSearchModal} />

        {/* 3. Credibility & Verified Fleet Stats Bar */}
        <StatsBar />

        {/* 4. 6 Curated Backwater Experience Cards with Quick Category Filters */}
        <ServicesCardsSection onOpenInquiry={handleSelectService} />

        {/* 5. Best-Selling Handpicked Boat Tour Packages */}
        <div id="houseboats">
          <div id="shikara">
            <PackagesSection onSelectPackage={handleSelectPackage} />
          </div>
        </div>

        {/* 6. Interactive Backwater Fare Estimator (High Conversion Tool) */}
        <FareCalculator />

        {/* 7. Why Choose Us (Zero Broker Fee, Live Kerala Meals, Certified Captains) */}
        <WhyChooseUs />

        {/* 8. Simple 3-Step Booking Walkthrough */}
        <HowItWorks />

        {/* 9. Verified Traveler Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 10. FAQs & Local Guidance Accordion */}
        <FAQSection />
      </main>

      {/* 11. Footer with Direct Contact Guarantees */}
      <Footer />

      {/* 12. Persistent Floating WhatsApp & Mobile Sticky Conversion Bar */}
      <FloatingWhatsApp />

      {/* 13. High-Converting Instant Booking & Custom Inquiry Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackage={selectedPackage}
        initialSearchData={searchData}
      />
    </div>
  );
}
