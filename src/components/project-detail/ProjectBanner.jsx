import './ProjectBanner.css'

/**
 * Cada proyecto necesita algo visual arriba del todo para no arrancar
 * directo en texto, pero usar fotos reales del Barça o de Messi implicaría
 * usar marca/imagen de terceros sin derecho a hacerlo. En su lugar, cada
 * banner es un gráfico abstracto propio, con un motivo relacionado al
 * proyecto (barras al estilo "franjas" para el análisis de datos del Barça,
 * un radar de 4 ejes para los roles funcionales de Messi, un local sencillo
 * para la pulpería), siempre usando el sistema de color del sitio.
 */
export default function ProjectBanner({ variant }) {
  if (variant === 'barca') return <BarcaBanner />
  if (variant === 'messi') return <MessiBanner />
  if (variant === 'pulperia') return <PulperiaBanner />
  return null
}

function BarcaBanner() {
  // Barras verticales de distinta altura, en referencia tanto a un gráfico
  // de barras (es un proyecto de datos) como a las franjas del club, sin
  // usar el escudo ni la tipografía oficial.
  const bars = [38, 62, 45, 78, 52, 90, 60, 70, 48, 85, 55, 40]
  return (
    <svg viewBox="0 0 480 160" className="project-banner project-banner--barca" role="img" aria-label="">
      <rect width="480" height="160" fill="var(--color-barca-blue)" opacity="0.06" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={20 + i * 38}
          y={140 - h}
          width="18"
          height={h}
          rx="3"
          fill={i % 2 === 0 ? 'var(--color-barca-garnet)' : 'var(--color-barca-blue)'}
          opacity={i % 2 === 0 ? 0.85 : 0.75}
        />
      ))}
    </svg>
  )
}

function MessiBanner() {
  // Radar de 4 ejes, uno por cada rol funcional que compara el proyecto
  // (finalizador, desequilibrante, creador, organizador).
  const center = { x: 240, y: 80 }
  const r = 55
  const points = [0, 90, 180, 270].map((deg) => {
    const rad = (deg - 90) * (Math.PI / 180)
    return `${center.x + r * Math.cos(rad)},${center.y + r * Math.sin(rad)}`
  })
  const innerPoints = [70, 45, 85, 55].map((val, i) => {
    const deg = i * 90
    const rad = (deg - 90) * (Math.PI / 180)
    const rr = (val / 100) * r
    return `${center.x + rr * Math.cos(rad)},${center.y + rr * Math.sin(rad)}`
  })

  return (
    <svg viewBox="0 0 480 160" className="project-banner project-banner--messi" role="img" aria-label="">
      <polygon
        points={points.join(' ')}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <polygon
        points={innerPoints.join(' ')}
        fill="var(--color-accent)"
        fillOpacity="0.18"
        stroke="var(--color-accent)"
        strokeWidth="2"
      />
      {points.map((p, i) => {
        const [cx, cy] = p.split(',')
        return <circle key={i} cx={cx} cy={cy} r="3" fill="var(--color-text-muted)" />
      })}
    </svg>
  )
}

function PulperiaBanner() {
  // Local pequeño estilizado: toldo a rayas, mostrador y vidriera. Genérico
  // a propósito, no es una foto real de la tienda.
  return (
    <svg viewBox="0 0 480 160" className="project-banner project-banner--pulperia" role="img" aria-label="">
      <rect x="120" y="70" width="240" height="70" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
      <rect x="140" y="90" width="70" height="50" fill="var(--color-accent-soft)" />
      <rect x="270" y="90" width="70" height="50" fill="var(--color-accent-soft)" />
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={i}
          d={`M ${110 + i * 32} 70 L ${126 + i * 32} 70 L ${134 + i * 32} 45 L ${118 + i * 32} 45 Z`}
          fill={i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-surface)'}
          stroke="var(--color-border)"
          strokeWidth="1"
        />
      ))}
      <rect x="105" y="40" width="270" height="8" fill="var(--color-text)" opacity="0.85" />
    </svg>
  )
}
