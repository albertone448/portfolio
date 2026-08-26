import { useTranslation } from 'react-i18next'
import './About.css'

export default function About() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', { returnObjects: true })

  return (
    <section id="sobre-mi" className="section about">
      <div className="container about__grid">
        <div>
          <p className="section-eyebrow">{t('about.eyebrow')}</p>
          <h2 className="section-heading">{t('about.title')}</h2>
        </div>
        <div className="about__body">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
