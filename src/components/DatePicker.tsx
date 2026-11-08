"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

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

function formatToYYYYMMDD(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseYYYYMMDD(str: string): Date | null {
  if (!str) return null;
  const parts = str.split("-");
  if (parts.length !== 3) return null;
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);
  if (isNaN(y) || isNaN(m) || isNaN(d)) return null;
  return new Date(y, m, d);
}

function formatDisplayDate(str: string): string {
  const d = parseYYYYMMDD(str);
  if (!d) return "";
  return d.toLocaleDateString("en-US", {
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

  const currentValue = value !== undefined ? value : internalValue;

  // Normalize minDate to 00:00:00
  const normalizedMinDate = new Date(
    minDate.getFullYear(),
    minDate.getMonth(),
    minDate.getDate()
  );

  const selectedDate = parseYYYYMMDD(currentValue);

  // View state for current displayed month/year in calendar
  const [viewDate, setViewDate] = useState<Date>(() => {
    return selectedDate || normalizedMinDate;
  });

  // When value changes from outside, sync viewDate and internalValue
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
      const parsed = parseYYYYMMDD(value);
      if (parsed) {
        setViewDate(parsed);
      }
    }
  }, [value]);

  // Close on click outside or Escape
  useEffect(() => {
    function handlePointerDown(e: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
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

  // Days calculations
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
    const dateStr = formatToYYYYMMDD(chosen);
    if (value === undefined) {
      setInternalValue(dateStr);
    }
    onChange?.(dateStr);
    setIsOpen(false);

    // Sync hidden input and dispatch standard DOM event
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
      className={`relative inline-block w-full ${className}`}
      style={{ position: "relative", width: "100%" }}
    >
      {/* Hidden native input for form compatibility and DOM queries */}
      <input
        type="hidden"
        id={id}
        name={name}
        value={currentValue}
        required={required}
      />

      {/* Trigger Button styled like form control */}
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={currentValue ? `Selected date: ${formatDisplayDate(currentValue)}` : placeholder}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
        className="ab-datepicker-trigger flex items-center justify-between w-full cursor-pointer select-none"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <span
          className="truncate"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: currentValue ? "#0a2540" : "#94a3b8",
            fontWeight: currentValue ? 600 : 400,
          }}
        >
          {currentValue ? formatDisplayDate(currentValue) : placeholder}
        </span>

        <div className="flex items-center gap-1.5" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {currentValue && (
            <button
              type="button"
              aria-label="Clear date"
              onClick={handleClear}
              className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
              }}
            >
              <X size={14} />
            </button>
          )}
          <CalendarIcon
            size={18}
            className="text-[#2cd664]"
            style={{ color: "#2cd664", flexShrink: 0 }}
          />
        </div>
      </div>

      {/* Calendar Popover */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="ab-datepicker-popover absolute z-[999999] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 mt-2"
          style={{
            position: "absolute",
            zIndex: 999999,
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 20px 45px rgba(10, 37, 64, 0.18)",
            border: "1px solid #e2e8f0",
            padding: "16px",
            marginTop: "8px",
            minWidth: "290px",
            maxWidth: "340px",
            left: 0,
            right: 0,
            fontFamily: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {/* Header Month / Year & Nav */}
          <div
            className="flex items-center justify-between mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <button
              type="button"
              onClick={handlePrevMonth}
              disabled={isPrevDisabled}
              aria-label="Previous Month"
              style={{
                background: "transparent",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: isPrevDisabled ? "not-allowed" : "pointer",
                opacity: isPrevDisabled ? 0.3 : 1,
                color: "#0a2540",
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <span
              style={{
                fontWeight: 700,
                fontSize: "14px",
                color: "#0a2540",
                letterSpacing: "-0.2px",
              }}
            >
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>

            <button
              type="button"
              onClick={handleNextMonth}
              aria-label="Next Month"
              style={{
                background: "transparent",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#0a2540",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Weekday Labels */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            {DAYS_OF_WEEK.map((d) => (
              <span
                key={d}
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#94a3b8",
                  textTransform: "uppercase",
                }}
              >
                {d}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
              textAlign: "center",
            }}
          >
            {days.map((day, idx) => {
              if (day === null) {
                return <div key={`empty-${idx}`} style={{ height: "34px" }} />;
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

              let bgColor = "transparent";
              let textColor = "#1e293b";
              let fontWeight = 500;
              let border = "1px solid transparent";

              if (isSelected) {
                bgColor = "#2cd664";
                textColor = "#ffffff";
                fontWeight = 700;
              } else if (isToday) {
                border = "1px solid #2cd664";
                textColor = "#2cd664";
                fontWeight = 700;
              } else if (isPast) {
                textColor = "#cbd5e1";
              }

              return (
                <button
                  key={`day-${day}`}
                  type="button"
                  disabled={isPast}
                  onClick={() => handleSelectDay(day)}
                  style={{
                    height: "34px",
                    width: "100%",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight,
                    backgroundColor: bgColor,
                    color: textColor,
                    border,
                    cursor: isPast ? "not-allowed" : "pointer",
                    opacity: isPast ? 0.35 : 1,
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isPast && !isSelected) {
                      e.currentTarget.style.backgroundColor = "#e6f9ed";
                      e.currentTarget.style.color = "#0a2540";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isPast && !isSelected) {
                      e.currentTarget.style.backgroundColor = isToday ? "transparent" : "transparent";
                      e.currentTarget.style.color = isToday ? "#2cd664" : "#1e293b";
                    }
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Quick Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "12px",
              paddingTop: "10px",
              borderTop: "1px solid #f1f5f9",
            }}
          >
            <button
              type="button"
              onClick={() => {
                const todayStr = formatToYYYYMMDD(normalizedMinDate);
                handleSelectDay(normalizedMinDate.getDate());
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "#2cd664",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
              }}
            >
              Today
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#64748b",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
