import { useTranslation } from 'react-i18next'
import './Skills.css'

const CATEGORIES = ['analysis', 'visualization', 'development']

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <p className="section-eyebrow">{t('skills.eyebrow')}</p>
        <h2 className="section-heading">{t('skills.title')}</h2>

        <div className="skills__grid">
          {CATEGORIES.map((category) => {
            const items = t(`skills.categories.${category}.items`, { returnObjects: true })
            return (
              <div key={category} className="skills__card">
                <h3 className="skills__card-title">{t(`skills.categories.${category}.title`)}</h3>
                <ul className="skills__tags">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
