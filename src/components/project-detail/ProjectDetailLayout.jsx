import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import StatusBadge from '../StatusBadge'
import './ProjectDetailLayout.css'

export default function ProjectDetailLayout({ status, title, tags, accentClass, children }) {
  const { t } = useTranslation()

  return (
    <article className={`project-detail ${accentClass ?? ''}`}>
      <div className="container">
        <Link to="/#proyectos" className="project-detail__back">
          <ArrowLeft size={16} />
          {t('projectDetail.back')}
        </Link>

        <header className="project-detail__header">
          <StatusBadge status={status} />
          <h1 className="project-detail__title">{title}</h1>
          <ul className="project-detail__tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </header>

        <div className="project-detail__body">{children}</div>
      </div>
    </article>
  )
}
