const toUtcDate = (yearMonth: string) => {
  const [year, month] = yearMonth.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, 1));
};

/** "2026-11" → "noviembre de 2026" / "November 2026". */
export function formatMonthYear(yearMonth: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(toUtcDate(yearMonth));
}

/**
 * "2025-07", "2025-12" → "jul 2025 – dic 2025" / "Jul 2025 – Dec 2025".
 * Dates are stored as year-month strings and built in UTC so no timezone
 * offset can shift a month boundary.
 */
export function formatMonthRange(start: string, end: string, locale: string): string {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' });
  const clean = (text: string) => text.replace('.', '');
  return `${clean(formatter.format(toUtcDate(start)))} – ${clean(formatter.format(toUtcDate(end)))}`;
}
