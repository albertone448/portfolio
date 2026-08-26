import { ImageOff } from 'lucide-react'
import './ScreenshotPlaceholder.css'

const SLOTS = [
  'Vista principal · lista de clientes',
  'Registro de venta o pago',
  'Recibo / notificación de WhatsApp',
  'Sistema de perfiles con PIN',
]

// Estas 4 casillas representan exactamente las capturas que se necesitan tomar
// (definidas en las instrucciones del proyecto), para que quede claro qué
// falta y no se pierda ese detalle cuando se retome esta página.
export default function ScreenshotPlaceholder() {
  return (
    <div className="screenshot-placeholder">
      {SLOTS.map((label) => (
        <div key={label} className="screenshot-placeholder__slot">
          <ImageOff size={22} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}
