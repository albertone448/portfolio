import { useTranslation } from 'react-i18next'
import { Github } from 'lucide-react'
import ProjectDetailLayout from '../../components/project-detail/ProjectDetailLayout'
import TableauEmbed from '../../components/TableauEmbed'
import { getProjectBySlug } from '../../data/projects'

const project = getProjectBySlug('barca')

export default function BarcaDetail() {
  const { t } = useTranslation()
  const d = (key) => t(`projectDetail.barca.${key}`)
  const context = t('projectDetail.barca.context', { returnObjects: true })
  const dataSources = t('projectDetail.barca.dataSources', { returnObjects: true })
  const tags = t('projectDetail.barca.tags', { returnObjects: true })

  return (
    <ProjectDetailLayout
      status={project.status}
      title={d('title')}
      tags={tags}
      accentClass="project-detail--barca"
      bannerVariant="barca"
    >
      <section>
        <h2 className="project-detail__section-title">{d('questionLabel')}</h2>
        <p className="project-detail__paragraphs">{d('question')}</p>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('findingLabel')}</h2>
        <p className="project-detail__paragraphs">
          <strong>{d('finding')}</strong>
        </p>
      </section>

      <section>
        <div className="project-detail__paragraphs">
          {context.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="project-detail__section-title">{d('methodologyTitle')}</h2>
        <p className="project-detail__paragraphs">{d('methodology')}</p>
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
        <h2 className="project-detail__section-title">{d('limitationsTitle')}</h2>
        <p className="project-detail__paragraphs">{d('limitations')}</p>
      </section>

      {/* Los dashboards van al final a propósito: primero el contexto
          narrativo (pregunta, hallazgo, metodología, fuentes, límites), y
          hasta acá los iframes. Cada uno usa el ancho completo disponible,
          no la columna angosta de texto, porque necesitan ese espacio real. */}
      <section>
        <h2 className="project-detail__section-title">{d('dashboardTitle')}</h2>
        <p className="project-detail__paragraphs" style={{ marginBottom: 28 }}>
          {d('dashboardIntro')}
        </p>

        <div className="barca-dashboards">
          {project.dashboards.map(({ path, titleKey }) => (
            <div key={path} className="barca-dashboards__item">
              <h3 className="barca-dashboards__title">
                {d(`dashboards.${titleKey}.title`)}
              </h3>
              <p className="barca-dashboards__description">
                {d(`dashboards.${titleKey}.description`)}
              </p>
              <TableauEmbed dashboardPath={path} title={d(`dashboards.${titleKey}.title`)} />
            </div>
          ))}
        </div>
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
