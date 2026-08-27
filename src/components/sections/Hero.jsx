import { useTranslation } from 'react-i18next'
import { ArrowDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1 className="hero__name">{t('hero.greeting')}</h1>
        <p className="hero__role-text">{t('hero.role')}</p>
        <p className="hero__tagline">{t('hero.tagline')}</p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn btn-primary">
            {t('hero.ctaProjects')}
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
