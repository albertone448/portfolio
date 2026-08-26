import { useTranslation } from 'react-i18next'
import { projects } from '../../data/projects'
import ProjectCard from '../ProjectCard'
import './Projects.css'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <p className="section-eyebrow">{t('projects.eyebrow')}</p>
        <h2 className="section-heading">{t('projects.title')}</h2>
        <p className="section-intro">{t('projects.intro')}</p>

        <div className="projects__grid">
          {projects.map(({ slug, status }) => (
            <ProjectCard key={slug} slug={slug} status={status} />
          ))}
        </div>
      </div>
    </section>
  )
}
