import { useTranslation } from 'react-i18next'
import { FileText } from 'lucide-react'
import './Experience.css'

export default function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true })

  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <p className="section-eyebrow">{t('experience.eyebrow')}</p>
        <h2 className="section-heading">{t('experience.title')}</h2>
        <p className="section-intro">{t('experience.intro')}</p>

        <ol className="experience__list">
          {items.map((item) => (
            <li key={item.company} className="experience__item">
              <div className="experience__item-header">
                <h3>{item.role}</h3>
                <span className="experience__period">{item.period}</span>
              </div>
              <p className="experience__company">{item.company}</p>
              <p className="experience__description">{item.description}</p>
            </li>
          ))}
        </ol>

        <a
          href="/cv/Alberto_Nunez_Trejos_CV.pdf"
          download
          className="btn btn-secondary experience__cv-link"
        >
          <FileText size={16} />
          {t('experience.cvLink')}
        </a>
      </div>
    </section>
  )
}
