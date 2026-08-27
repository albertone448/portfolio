import './HeroVisual.css'

/**
 * Llena el lado derecho del Hero sin recurrir a una foto personal: un
 * gráfico de barras (análisis de datos) que se conecta con un símbolo de
 * código "</>" (desarrollo), en el mismo lenguaje visual abstracto que los
 * banners de las páginas de proyecto. Puramente decorativo, oculto en
 * mobile para no competir con el contenido principal.
 */
export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 360 360"
      className="hero-visual"
      role="img"
      aria-label=""
    >
      <rect x="0.5" y="0.5" width="359" height="359" rx="20" fill="var(--color-surface)" stroke="var(--color-border)" />

      {/* barras de datos, esquina inferior izquierda */}
      <g opacity="0.9">
        <rect x="48" y="220" width="26" height="70" rx="4" fill="var(--color-accent)" opacity="0.35" />
        <rect x="86" y="190" width="26" height="100" rx="4" fill="var(--color-accent)" opacity="0.55" />
        <rect x="124" y="150" width="26" height="140" rx="4" fill="var(--color-accent)" opacity="0.8" />
        <rect x="162" y="170" width="26" height="120" rx="4" fill="var(--color-accent)" opacity="0.65" />
      </g>

      {/* línea que conecta el gráfico de barras con el símbolo de código */}
      <path
        d="M 74 200 C 140 120, 220 120, 250 100"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.5"
      />
      <circle cx="250" cy="100" r="4" fill="var(--color-accent)" />

      {/* símbolo de código, esquina superior derecha */}
      <g transform="translate(215, 55)">
        <path
          d="M 20 10 L 4 30 L 20 50"
          fill="none"
          stroke="var(--color-accent-dark)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 65 10 L 81 30 L 65 50"
          fill="none"
          stroke="var(--color-accent-dark)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="48" y1="4" x2="38" y2="56" stroke="var(--color-accent-dark)" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* puntos sueltos, textura de fondo */}
      <circle cx="300" cy="290" r="3" fill="var(--color-border)" />
      <circle cx="280" cy="270" r="3" fill="var(--color-border)" />
      <circle cx="60" cy="80" r="3" fill="var(--color-border)" />
      <circle cx="90" cy="60" r="3" fill="var(--color-border)" />
    </svg>
  )
}
