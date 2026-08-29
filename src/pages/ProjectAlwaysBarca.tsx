import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjectBySlug } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { CaseStudySection } from '../components/projects/CaseStudySection';
import { QuoteBlock } from '../components/projects/QuoteBlock';
import { BulletList } from '../components/projects/BulletList';
import { TableauShowcase } from '../components/media/TableauShowcase';
import { NextProjectNav } from '../components/projects/NextProjectNav';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const project = getProjectBySlug('always-barca')!;

export function ProjectAlwaysBarca() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useDocumentMeta(t('projectDetail.alwaysBarca.title'), t('projectDetail.alwaysBarca.description'));

  const dataSources = t('projectDetail.alwaysBarca.dataSources', { returnObjects: true }) as string[];

  return (
    <article>
      <ProjectHero
        project={project}
        category={t('work.items.alwaysBarca.category')}
        title={t('projectDetail.alwaysBarca.title')}
        description={t('projectDetail.alwaysBarca.description')}
      />

      <CaseStudySection eyebrow={t('projectDetail.alwaysBarca.questionTitle')} title={t('projectDetail.alwaysBarca.questionTitle')}>
        <QuoteBlock label={t('projectDetail.alwaysBarca.questionTitle')} accent={project.accent} tone="question">
          {t('projectDetail.alwaysBarca.question')}
        </QuoteBlock>
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.alwaysBarca.scopeTitle')} title={t('projectDetail.alwaysBarca.scopeTitle')} tone="elevated">
        <p>{t('projectDetail.alwaysBarca.scope')}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.dataSourcesTitle')}
        title={t('projectDetail.alwaysBarca.dataSourcesTitle')}
      >
        <BulletList items={dataSources} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.methodologyTitle')}
        title={t('projectDetail.alwaysBarca.methodologyTitle')}
        tone="elevated"
      >
        <p>{t('projectDetail.alwaysBarca.methodology')}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.alwaysBarca.findingsTitle')} title={t('projectDetail.alwaysBarca.findingsTitle')}>
        <QuoteBlock label={t('projectDetail.alwaysBarca.findingsTitle')} accent={project.accent} tone="finding">
          {t('projectDetail.alwaysBarca.findings')}
        </QuoteBlock>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.dashboardsTitle')}
        title={t('projectDetail.alwaysBarca.dashboardsTitle')}
        wide
        tone="elevated"
      >
        <p style={{ maxWidth: '62ch', marginBottom: 32 }}>{t('projectDetail.alwaysBarca.dashboardsIntro')}</p>
        <div style={{ display: 'grid', gap: 32 }}>
          {project.dashboards?.map((dashboard) => (
            <TableauShowcase
              key={dashboard.path}
              dashboard={dashboard}
              accent={project.accent}
              title={t(`projectDetail.alwaysBarca.dashboards.${dashboard.titleKey}.title`)}
              description={t(`projectDetail.alwaysBarca.dashboards.${dashboard.titleKey}.description`)}
              liveLinkLabel={t('projectDetail.liveLink')}
            />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.limitationsTitle')}
        title={t('projectDetail.alwaysBarca.limitationsTitle')}
      >
        <p>{t('projectDetail.alwaysBarca.limitations')}</p>
        <p style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', color: 'var(--color-text-muted)' }}>
          {t('projectDetail.stackLabel')}: {t('projectDetail.alwaysBarca.stack')}
        </p>
      </CaseStudySection>

      <NextProjectNav
        slug="messi-outlier"
        title={t('work.items.messiOutlier.title')}
        accent="var(--accent-messi)"
      />
    </article>
  );
}
