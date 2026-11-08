"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useBooking } from "./BookingContext";
import BookingCard from "./BookingCard";
import { ChevronUp, X } from "lucide-react";

export default function MobileStickyBar() {
  const { pricing } = useBooking();
  const [isBarVisible, setIsBarVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Show sticky bar after scrolling past 350px
  useEffect(() => {
    const handleScroll = () => {
      setIsBarVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Close on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsDrawerOpen(false);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen, handleKeyDown]);

  if (!isBarVisible) return null;

  return (
    <>
      {/* ── Sticky Bottom Bar (always visible once scrolled) ── */}
      <div
        className="ab-mobile-sticky-bar fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3 lg:hidden animate-slideUp"
        role="region"
        aria-label="Mobile booking action bar"
      >
        {/* Left: price + modify button */}
        <div
          className="ab-msb-info flex flex-col cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Open booking details"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsDrawerOpen(true);
            }
          }}
        >
          <div className="ab-msb-price flex items-baseline gap-1.5">
            <span className="text-[11px] font-semibold text-slate-400">Total</span>
            <strong className="text-base font-black text-brand-navy">
              {pricing.formattedTotal}
            </strong>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
            <span>Tap to customise</span>
            <ChevronUp size={12} className="stroke-[3]" />
          </div>
        </div>

        {/* Right: Book Now CTA */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open booking details"
          className="flex items-center gap-2 py-2.5 px-5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm rounded-xl shadow-md shadow-orange-500/20 active:scale-95 transition-all"
        >
          Book Now
        </button>
      </div>

      {/* ── Bottom Drawer ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Booking details"
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F5] rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          isDrawerOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "92dvh" }}
      >
        {/* Drawer Handle + Header */}
        <div className="flex-shrink-0 px-4 pt-3 pb-2">
          {/* Drag handle pill */}
          <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" aria-hidden="true" />
          <div className="flex items-center justify-between">
            <h2 className="font-black text-brand-navy text-base">Booking Details</h2>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close booking details"
              className="p-2 rounded-full hover:bg-slate-200/70 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable body — renders the full BookingCard in compact mode */}
        <div className="overflow-y-auto flex-1 overscroll-contain pb-safe">
          <BookingCard review={null} compact={true} />
        </div>
      </div>
    </>
  );
}
