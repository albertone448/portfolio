/**
 * Each project detail page walks the same fixed narrative arc (question →
 * approach → findings → dashboards → conclusion...). The eyebrow above every
 * section heading marks progress through that sequence ("03 / 07") instead
 * of repeating the heading's own text, which was the original bug: eyebrow
 * and title said the exact same words.
 */
export function sectionStep(step: number, total: number): string {
  return `${String(step).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}
