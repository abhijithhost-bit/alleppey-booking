"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import PackagesSection, { PackageItem } from "./components/PackagesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Navigation */}
      <Navbar onOpenBookingModal={() => setModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* SEO Hero Section with Responsive Mobile/Desktop Images & Quick Search */}
        <HeroSection onSearch={handleOpenSearchModal} />

        {/* Credibility & Stats Bar */}
        <StatsBar />

        {/* Curated Boat Tour Packages */}
        <div id="houseboats">
          <div id="shikara">
            <PackagesSection onSelectPackage={handleSelectPackage} />
          </div>
        </div>

        {/* Why Choose Us Trust Factors */}
        <WhyChooseUs />

        {/* 3-Step Booking Walkthrough */}
        <HowItWorks />

        {/* Traveler Testimonials */}
        <TestimonialsSection />

        {/* FAQs & Local Travel Guide */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking & Inquiry Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackage={selectedPackage}
        initialSearchData={searchData}
      />
    </div>
  );
}
