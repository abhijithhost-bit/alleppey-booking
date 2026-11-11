export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}

export function buildWhatsAppUrl(message?: string): string {
  const phone = "917012761588";
  if (!message) {
    return `https://wa.me/${phone}`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a date string to DD-MM-YYYY (date-month-year).
 * Accepts YYYY-MM-DD, DD-MM-YYYY, or slash-separated formats.
 */
export function formatDateToDDMMYYYY(dateStr?: string | null): string {
  if (!dateStr || !dateStr.trim()) return "";
  const trimmed = dateStr.trim();
  // Check if it's YYYY-MM-DD: e.g. 2026-11-14
  const ymdMatch = trimmed.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
  if (ymdMatch) {
    const [, year, month, day] = ymdMatch;
    return `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
  }
  // Check if it's DD-MM-YYYY: e.g. 14-11-2026
  const dmyMatch = trimmed.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
  if (dmyMatch) {
    const [, day, month, year] = dmyMatch;
    return `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
  }
  return trimmed;
}

/**
 * Parses a date string formatted as YYYY-MM-DD or DD-MM-YYYY into a Date object.
 */
export function parseDateString(str?: string | null): Date | null {
  if (!str) return null;
  const parts = str.trim().split(/[-/]/);
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


