import { useTranslation } from 'react-i18next'
import { ArrowDown, Download } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__roles" aria-hidden="true">
          <span className="hero__role-pill hero__role-pill--analyst">Data Analyst</span>
          <span className="hero__role-connector">+</span>
          <span className="hero__role-pill hero__role-pill--dev">Full Stack Developer</span>
        </div>

        <h1 className="hero__name">{t('hero.greeting')}</h1>
        <p className="hero__role-text">{t('hero.role')}</p>
        <p className="hero__tagline">{t('hero.tagline')}</p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn btn-primary">
            {t('hero.ctaProjects')}
            <ArrowDown size={16} />
          </a>
          <a href="/cv/Alberto_Nunez_Trejos_CV.pdf" download className="btn btn-secondary">
            <Download size={16} />
            {t('hero.ctaCv')}
          </a>
        </div>
      </div>
    </section>
  )
}
