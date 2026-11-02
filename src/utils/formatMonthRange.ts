/**
 * "2025-07", "2025-12" → "jul 2025 – dic 2025" / "Jul 2025 – Dec 2025".
 * Dates are stored as year-month strings and built in UTC so no timezone
 * offset can shift a month boundary.
 */
export function formatMonthRange(start: string, end: string, locale: string): string {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' });
  const toDate = (yearMonth: string) => {
    const [year, month] = yearMonth.split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, 1));
  };
  const clean = (text: string) => text.replace('.', '');
  return `${clean(formatter.format(toDate(start)))} – ${clean(formatter.format(toDate(end)))}`;
}
