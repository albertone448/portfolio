import { useTranslation } from 'react-i18next'
import ProjectDetailLayout from '../../components/project-detail/ProjectDetailLayout'
import { getProjectBySlug } from '../../data/projects'

const project = getProjectBySlug('messi')

export default function MessiDetail() {
  const { t } = useTranslation()
  const d = (key) => t(`projectDetail.messi.${key}`)
  const thesis = t('projectDetail.messi.thesis', { returnObjects: true })
  const roles = t('projectDetail.messi.roles', { returnObjects: true })
  const dataSources = t('projectDetail.messi.dataSources', { returnObjects: true })
  const tags = t('projectDetail.messi.tags', { returnObjects: true })

  return (
    <ProjectDetailLayout status={project.status} title={d('title')} tags={tags}>
      <section>
        <p className="project-detail__paragraphs" style={{ fontStyle: 'italic' }}>
          {d('statusNote')}
        </p>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('questionLabel')}</h2>
        <p className="project-detail__paragraphs">{d('question')}</p>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('thesisTitle')}</h2>
        <div className="project-detail__paragraphs">
          {thesis.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('rolesTitle')}</h2>
        <p className="project-detail__paragraphs" style={{ marginBottom: 18 }}>
          {d('rolesIntro')}
        </p>
        <div className="project-detail__paragraphs">
          {roles.map((role) => (
            <p key={role.name}>
              <strong>{role.name}:</strong> {role.description}
            </p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('comparisonTitle')}</h2>
        <p className="project-detail__paragraphs">{d('comparisonPlayers')}</p>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('dataSourcesTitle')}</h2>
        <ul className="project-detail__list">
          {dataSources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('noteTitle')}</h2>
        <p className="project-detail__paragraphs">{d('note')}</p>
      </section>
    </ProjectDetailLayout>
  )
}
