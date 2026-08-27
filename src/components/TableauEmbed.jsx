import './TableauEmbed.css'

/**
 * Tableau Public todavía entrega el embed clásico basado en <object> + viz_v1.js,
 * que no encaja bien con el ciclo de vida de React (manipula el DOM por fuera).
 * En su lugar se arma la URL de vista directamente y se embebe en un iframe
 * simple, que es el enfoque recomendado por Tableau para embeds responsive:
 * https://public.tableau.com/views/{workbook}/{vista}?:embed=y
 *
 * Los dashboards de este proyecto están publicados con tamaño fijo (1200x927,
 * según el propio código de embed de Tableau), no con tamaño automático. Un
 * iframe angosto no reduce ese contenido, lo recorta. Por eso el frame se
 * fuerza a un ancho mínimo igual al tamaño real del dashboard, y el
 * contenedor .tableau-embed absorbe el desborde con scroll horizontal propio
 * en vez de romper el layout de la página en pantallas angostas.
 *
 * El responsive real del dashboard (cómo se acomodan los objetos en celular)
 * se controla desde Tableau con "Vista previa de dispositivo móvil", no desde
 * acá; ver dashboardMobileConfigured en src/data/projects.js.
 */
export default function TableauEmbed({ dashboardPath, title, height = 927 }) {
  const src = `https://public.tableau.com/views/${dashboardPath}?:showVizHome=no&:embed=true&:tabs=no&:toolbar=yes&:language=es-ES`

  return (
    <div className="tableau-embed">
      <iframe
        className="tableau-embed__frame"
        src={src}
        title={title}
        style={{ height }}
        loading="lazy"
        allowFullScreen
      />
    </div>
  )
}
