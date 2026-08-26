import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// react-router no hace scroll automático a los anchors de sección, así que
// esto cubre el caso de volver de una página de detalle de proyecto a
// "/#proyectos" y que la vista caiga en el lugar correcto.
export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      // Se espera al siguiente frame para dar tiempo a que la sección de
      // destino ya esté montada en el DOM.
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])

  return null
}
