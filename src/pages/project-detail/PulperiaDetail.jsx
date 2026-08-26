import { useTranslation } from 'react-i18next'
import { Github } from 'lucide-react'
import ProjectDetailLayout from '../../components/project-detail/ProjectDetailLayout'
import ScreenshotPlaceholder from '../../components/project-detail/ScreenshotPlaceholder'
import { getProjectBySlug } from '../../data/projects'

const project = getProjectBySlug('pulperia')

export default function PulperiaDetail() {
  const { t } = useTranslation()
  const d = (key) => t(`projectDetail.pulperia.${key}`)
  const problem = t('projectDetail.pulperia.problem', { returnObjects: true })
  const features = t('projectDetail.pulperia.features', { returnObjects: true })
  const tags = t('projectDetail.pulperia.tags', { returnObjects: true })

  return (
    <ProjectDetailLayout status={project.status} title={d('title')} tags={tags}>
      <section>
        <p className="project-detail__paragraphs" style={{ fontStyle: 'italic' }}>
          {d('statusNote')}
        </p>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('problemTitle')}</h2>
        <div className="project-detail__paragraphs">
          {problem.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('featuresTitle')}</h2>
        <ul className="project-detail__list">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('screenshotsTitle')}</h2>
        <p className="project-detail__paragraphs" style={{ marginBottom: 20 }}>
          {d('screenshotsPlaceholder')}
        </p>
        <ScreenshotPlaceholder />
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('stackTitle')}</h2>
        <p className="project-detail__paragraphs">{d('stack')}</p>
      </section>

      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          <Github size={16} />
          {t('projectDetail.repoLink')}
        </a>
      )}
    </ProjectDetailLayout>
  )
}
