import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import StatusBadge from './StatusBadge'
import './ProjectCard.css'

export default function ProjectCard({ slug, status }) {
  const { t } = useTranslation()
  const title = t(`projects.items.${slug}.title`)
  const summary = t(`projects.items.${slug}.summary`)
  const tags = t(`projects.items.${slug}.tags`, { returnObjects: true })

  return (
    <Link to={`/proyectos/${slug}`} className="project-card">
      <div className="project-card__header">
        <StatusBadge status={status} />
        <ArrowUpRight size={18} className="project-card__icon" />
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__summary">{summary}</p>
      <ul className="project-card__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </Link>
  )
}
