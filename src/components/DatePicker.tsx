"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { getPeakHolidayPeriod } from "@/lib/pricing";

interface DatePickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (date: string) => void;
  placeholder?: string;
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
  minDate?: Date;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatToDDMMYYYY(d: Date): string {
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

function parseDateString(str: string): Date | null {
  if (!str) return null;
  const parts = str.split(/[-/]/);
  if (parts.length !== 3) return null;
  // If YYYY-MM-DD
  if (parts[0].length === 4) {
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const d = parseInt(parts[2], 10);
    if (isNaN(y) || isNaN(m) || isNaN(d)) return null;
    return new Date(y, m, d);
  }
  // If DD-MM-YYYY
  if (parts[2].length === 4) {
    const d = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const y = parseInt(parts[2], 10);
    if (isNaN(y) || isNaN(m) || isNaN(d)) return null;
    return new Date(y, m, d);
  }
  return null;
}

function formatDisplayDate(str: string): string {
  const d = parseDateString(str);
  if (!d) return "";
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function DatePicker({
  value,
  defaultValue = "",
  onChange,
  placeholder = "Select check-in date",
  id = "ab-date-picker",
  name = "date",
  className = "",
  required = false,
  minDate = new Date(),
}: DatePickerProps) {
  const [internalValue, setInternalValue] = useState<string>(value ?? defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const currentValue = value !== undefined ? value : internalValue;

  const normalizedMinDate = new Date(
    minDate.getFullYear(),
    minDate.getMonth(),
    minDate.getDate()
  );

  const selectedDate = parseDateString(currentValue);

  const [viewDate, setViewDate] = useState<Date>(() => {
    return selectedDate || normalizedMinDate;
  });

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
      const parsed = parseDateString(value);
      if (parsed) {
        setViewDate(parsed);
      }
    }
  }, [value]);

  // Close on outside click / touch / Escape
  useEffect(() => {
    function handlePointerDown(e: MouseEvent | TouchEvent) {
      const target = e.target as Node;
      if (containerRef.current && containerRef.current.contains(target)) return;
      if (popoverRef.current && popoverRef.current.contains(target)) return;
      setIsOpen(false);
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("mousedown", handlePointerDown);
      document.addEventListener("touchstart", handlePointerDown);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = new Date(viewYear, viewMonth - 1, 1);
    const minMonthStart = new Date(normalizedMinDate.getFullYear(), normalizedMinDate.getMonth(), 1);
    if (prev >= minMonthStart) {
      setViewDate(prev);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(viewYear, viewMonth + 1, 1));
  };

  const isPrevDisabled = (() => {
    const minMonthStart = new Date(normalizedMinDate.getFullYear(), normalizedMinDate.getMonth(), 1);
    const curMonthStart = new Date(viewYear, viewMonth, 1);
    return curMonthStart <= minMonthStart;
  })();

  const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay();
  const totalDaysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }
  for (let d = 1; d <= totalDaysInMonth; d++) {
    days.push(d);
  }

  const handleSelectDay = (day: number) => {
    const chosen = new Date(viewYear, viewMonth, day);
    const dateStr = formatToDDMMYYYY(chosen);
    if (value === undefined) {
      setInternalValue(dateStr);
    }
    onChange?.(dateStr);
    setIsOpen(false);

    setTimeout(() => {
      const input = document.getElementById(id) as HTMLInputElement | null;
      if (input) {
        input.value = dateStr;
        input.dispatchEvent(new Event("change", { bubbles: true }));
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, 0);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (value === undefined) {
      setInternalValue("");
    }
    onChange?.("");

    setTimeout(() => {
      const input = document.getElementById(id) as HTMLInputElement | null;
      if (input) {
        input.value = "";
        input.dispatchEvent(new Event("change", { bubbles: true }));
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, 0);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
    >
      <input
        type="hidden"
        id={id}
        name={name}
        value={currentValue}
        required={required}
      />

      {/* Trigger Button */}
      <button
        type="button"
        id={`${id}-trigger`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={currentValue ? `Selected date: ${formatDisplayDate(currentValue)}` : placeholder}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`ab-datepicker-trigger flex items-center justify-between w-full py-2.5 px-3.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-left transition-colors select-none cursor-pointer ${className}`}
      >
        <span
          className={`truncate text-sm leading-normal ${
            currentValue ? "text-brand-navy font-bold" : "text-slate-400 font-medium"
          }`}
        >
          {currentValue ? formatDisplayDate(currentValue) : placeholder}
        </span>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          {currentValue && (
            <span
              role="button"
              tabIndex={0}
              aria-label="Clear date"
              onClick={handleClear}
              className="p-1 hover:bg-slate-200/70 rounded-full text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X size={14} />
            </span>
          )}
          <CalendarIcon
            size={18}
            className="text-[#2cd664] flex-shrink-0"
          />
        </div>
      </button>

      {/* Popover directly below trigger */}
      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-modal="true"
          className="ab-datepicker-popover absolute z-[9999] left-0 right-0 top-full mt-1.5 bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-2xl animate-fadeIn"
        >
          {/* Header Month / Year & Nav */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <button
              type="button"
              onClick={handlePrevMonth}
              disabled={isPrevDisabled}
              aria-label="Previous Month"
              className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="font-bold text-sm text-brand-navy tracking-tight">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>

            <button
              type="button"
              onClick={handleNextMonth}
              aria-label="Next Month"
              className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-slate-100 transition-all cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 gap-1 mb-1 text-center">
            {DAYS_OF_WEEK.map((d) => (
              <span key={d} className="text-[11px] font-bold text-slate-400 uppercase py-0.5">
                {d}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {days.map((day, idx) => {
              if (day === null) {
                return <div key={`empty-${idx}`} className="h-8" />;
              }

              const cellDate = new Date(viewYear, viewMonth, day);
              const isPast = cellDate < normalizedMinDate;
              const isToday =
                cellDate.getFullYear() === normalizedMinDate.getFullYear() &&
                cellDate.getMonth() === normalizedMinDate.getMonth() &&
                cellDate.getDate() === normalizedMinDate.getDate();

              const isSelected =
                selectedDate !== null &&
                cellDate.getFullYear() === selectedDate.getFullYear() &&
                cellDate.getMonth() === selectedDate.getMonth() &&
                cellDate.getDate() === selectedDate.getDate();

              const peakPeriod = !isPast ? getPeakHolidayPeriod(cellDate) : null;
              const isPeak = peakPeriod !== null;

              return (
                <button
                  key={`day-${day}`}
                  type="button"
                  disabled={isPast}
                  onClick={() => handleSelectDay(day)}
                  title={peakPeriod ? `${peakPeriod.name} (Special Tariff)` : undefined}
                  className={`h-8 w-full rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-[#2cd664] text-white font-bold shadow-sm"
                      : isToday
                      ? "border border-[#2cd664] text-[#2cd664] font-bold"
                      : isPast
                      ? "text-slate-300 cursor-not-allowed opacity-40"
                      : isPeak
                      ? "bg-amber-100 text-amber-950 font-bold border border-amber-300 hover:bg-amber-200"
                      : "text-slate-700 hover:bg-emerald-50 hover:text-brand-navy"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Quick Footer */}
          <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-slate-100 gap-2">
            <button
              type="button"
              onClick={() => {
                handleSelectDay(normalizedMinDate.getDate());
              }}
              className="text-xs font-bold text-[#2cd664] hover:text-emerald-700 cursor-pointer px-2 py-1 rounded-md hover:bg-emerald-50 transition-colors"
            >
              Today
            </button>

            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse"></span>
              <span>Peak Dates</span>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-700 cursor-pointer px-2 py-1 rounded-md hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
