import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

const NAV_ITEMS = [
  { key: 'projects', hash: '#proyectos' },
  { key: 'about', hash: '#sobre-mi' },
  { key: 'skills', hash: '#habilidades' },
  { key: 'experience', hash: '#experiencia' },
  { key: 'contact', hash: '#contacto' },
]

export default function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Cierra el menú móvil cada vez que cambia la ruta, para no dejarlo abierto
  // al navegar entre el home y una página de detalle de proyecto.
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const handleNavClick = (hash) => (event) => {
    event.preventDefault()
    if (location.pathname !== '/') {
      navigate('/' + hash)
      return
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand">
          Alberto Núñez Trejos
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'is-open' : ''}`}>
          {NAV_ITEMS.map(({ key, hash }) => (
            <a key={key} href={hash} className="header__nav-link" onClick={handleNavClick(hash)}>
              {t(`nav.${key}`)}
            </a>
          ))}
          <a
            className="btn btn-primary header__cv-link"
            href="/cv/Alberto_Nunez_Trejos_CV.pdf"
            download
          >
            {t('nav.cv')}
          </a>
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />
          <button
            type="button"
            className="header__menu-toggle"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
