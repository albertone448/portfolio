import './TableauEmbed.css'

/**
 * Tableau Public todavía entrega el embed clásico basado en <object> + viz_v1.js,
 * que no encaja bien con el ciclo de vida de React (manipula el DOM por fuera).
 * En su lugar se arma la URL de vista directamente y se embebe en un iframe
 * simple, que es el enfoque recomendado por Tableau para embeds responsive:
 * https://public.tableau.com/views/{workbook}/{vista}?:embed=y
 *
 * El responsive real del dashboard (cómo se acomodan los objetos en pantallas
 * angostas) se controla desde Tableau con "Vista previa de dispositivo móvil",
 * no desde acá. Este componente solo se encarga de que el iframe ocupe el
 * ancho disponible y mantenga una relación de aspecto razonable.
 */
export default function TableauEmbed({ dashboardPath, title, height = 800 }) {
  const src = `https://public.tableau.com/views/${dashboardPath}?:showVizHome=no&:embed=true&:tabs=yes&:toolbar=yes&:language=es-ES`

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
