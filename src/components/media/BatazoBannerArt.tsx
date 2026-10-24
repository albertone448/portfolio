import { BannerFrame } from './BannerFrame';

interface BatazoBannerArtProps {
  accent?: string;
}

/**
 * Batazo has no finished UI to capture yet, so the hero slot shows the idea
 * the app is built around instead: a predicted score locked at kickoff, and
 * the 5 / 3 / 1 points it can earn on the group's table. Only numbers appear
 * in the drawing, so it works in both languages without translated text.
 */
export function BatazoBannerArt({ accent }: BatazoBannerArtProps) {
  return (
    <BannerFrame accent={accent}>
      <svg
        viewBox="0 0 900 220"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%', color: accent }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* the prediction card: two sides and the score someone called */}
        <g transform="translate(150 40)">
          <rect x="0" y="0" width="260" height="140" rx="14" fill="var(--color-surface)" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="42" cy="62" r="20" fill="none" stroke="var(--color-text-muted)" strokeWidth="2.5" />
          <circle cx="218" cy="62" r="20" fill="none" stroke="var(--color-text-muted)" strokeWidth="2.5" />
          <g fill="var(--color-text-primary)" textAnchor="middle" style={{ font: '600 38px var(--font-mono)' }}>
            <text x="96" y="76">2</text>
            <text x="130" y="74">:</text>
            <text x="164" y="76">1</text>
          </g>
          <line x1="28" y1="112" x2="232" y2="112" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

          {/* the lock: predictions close at kickoff */}
          <g transform="translate(244 -14)">
            <circle cx="0" cy="0" r="20" fill="var(--color-surface-elevated)" stroke="currentColor" strokeWidth="2" />
            <path d="M-6 -2 v-5 a6 6 0 0 1 12 0 v5" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
            <rect x="-9" y="-2" width="18" height="13" rx="3" fill="currentColor" />
          </g>
        </g>

        <path
          d="M450 110 H540 M516 88 L542 110 L516 132"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* the group table: three rows, each with the points that tier pays */}
        <g transform="translate(580 40)">
          <rect x="0" y="0" width="190" height="140" rx="14" fill="var(--color-surface)" stroke="currentColor" strokeWidth="2.5" />
          {[
            { y: 36, points: '5', width: 92, opacity: 1 },
            { y: 72, points: '3', width: 74, opacity: 0.7 },
            { y: 108, points: '1', width: 56, opacity: 0.45 },
          ].map((row) => (
            <g key={row.points} opacity={row.opacity}>
              <line x1="26" y1={row.y} x2={26 + row.width} y2={row.y} stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <text
                x="160"
                y={row.y + 7}
                textAnchor="middle"
                fill="currentColor"
                style={{ font: '600 20px var(--font-mono)' }}
              >
                {row.points}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </BannerFrame>
  );
}
