import { BannerFrame } from './BannerFrame';

interface StoreCreditBannerArtProps {
  accent?: string;
}

/**
 * Store Credit has no single screenshot that reads well as a wide hero
 * banner the way the two data projects do with their Tableau covers (the
 * screenshots that do exist belong further down, in the gallery). This fills
 * the same slot with a drawing of what the project actually replaced: a
 * handwritten paper ledger becoming a synced digital tab, so the banner
 * still carries the project's own subject instead of a generic icon.
 */
export function StoreCreditBannerArt({ accent }: StoreCreditBannerArtProps) {
  return (
    <BannerFrame accent={accent}>
      <svg
        viewBox="215 10 700 200"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%', color: accent }}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label=""
      >
        {/* the paper ledger the pulpería used before, drawn a little worn and crooked */}
        <g transform="translate(250 40) rotate(-2)" opacity="0.75">
          <rect x="0" y="0" width="150" height="150" rx="6" fill="none" stroke="var(--color-text-muted)" strokeWidth="2.5" />
          <path d="M120 0 L150 0 L150 30 Z" fill="var(--color-surface)" stroke="var(--color-text-muted)" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M28 46 q 40 -10 84 0" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" strokeLinecap="round" />
          <path d="M28 76 q 34 8 70 -2" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" strokeLinecap="round" />
          <path d="M28 106 q 40 -6 60 4" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* the migration: a plain arrow, no label needed, the two drawings say it */}
        <path
          d="M470 115 H620 M590 90 L622 115 L590 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* the app replacing it: a clean card, straight rows, and a live sync pulse */}
        <g transform="translate(700 40)">
          <rect x="0" y="0" width="180" height="150" rx="14" fill="var(--color-surface)" stroke="currentColor" strokeWidth="2.5" />
          <line x1="28" y1="42" x2="152" y2="42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="28" y1="72" x2="128" y2="72" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
          <line x1="28" y1="102" x2="140" y2="102" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
          <g transform="translate(180 8)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <circle cx="0" cy="0" r="5" fill="currentColor" />
          </g>
        </g>
      </svg>
    </BannerFrame>
  );
}
