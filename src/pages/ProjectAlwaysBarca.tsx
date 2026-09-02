import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjectBySlug } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { CaseStudySection } from '../components/projects/CaseStudySection';
import { QuoteBlock } from '../components/projects/QuoteBlock';
import { BulletList } from '../components/projects/BulletList';
import { StatsTable } from '../components/projects/StatsTable';
import { TableauShowcase } from '../components/media/TableauShowcase';
import { ProjectPreviewFrame } from '../components/media/ProjectPreviewFrame';
import { NextProjectNav } from '../components/projects/NextProjectNav';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const project = getProjectBySlug('always-barca')!;

interface SummaryRow {
  label: string;
  value: string;
  significant: boolean;
}

export function ProjectAlwaysBarca() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useDocumentMeta(t('projectDetail.alwaysBarca.title'), t('projectDetail.alwaysBarca.description'));

  const dataSources = t('projectDetail.alwaysBarca.dataSources', { returnObjects: true }) as string[];
  const phase1 = t('projectDetail.alwaysBarca.phase1Findings', { returnObjects: true }) as string[];
  const phase2 = t('projectDetail.alwaysBarca.phase2Findings', { returnObjects: true }) as string[];
  const phase3 = t('projectDetail.alwaysBarca.phase3Findings', { returnObjects: true }) as string[];
  const phase4 = t('projectDetail.alwaysBarca.phase4Findings', { returnObjects: true }) as string[];
  const summaryHeaders = t('projectDetail.alwaysBarca.summaryTable.headers', { returnObjects: true }) as [
    string,
    string,
    string,
  ];
  const summaryRows = t('projectDetail.alwaysBarca.summaryTable.rows', { returnObjects: true }) as SummaryRow[];

  return (
    <article>
      <ProjectHero
        project={project}
        category={t('work.items.alwaysBarca.category')}
        title={t('projectDetail.alwaysBarca.title')}
        description={t('projectDetail.alwaysBarca.description')}
        visual={
          <ProjectPreviewFrame accent={project.accent} aspectRatio="1983 / 793">
            <img src="/images/projects/always-barca/banner.png" alt="" />
          </ProjectPreviewFrame>
        }
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

      <CaseStudySection eyebrow={t('projectDetail.alwaysBarca.phase1Title')} title={t('projectDetail.alwaysBarca.phase1Title')}>
        <BulletList items={phase1} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.phase2Title')}
        title={t('projectDetail.alwaysBarca.phase2Title')}
        tone="elevated"
      >
        <BulletList items={phase2} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.alwaysBarca.phase3Title')} title={t('projectDetail.alwaysBarca.phase3Title')}>
        <BulletList items={phase3} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.phase4Title')}
        title={t('projectDetail.alwaysBarca.phase4Title')}
        tone="elevated"
      >
        <BulletList items={phase4} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.dashboardsTitle')}
        title={t('projectDetail.alwaysBarca.dashboardsTitle')}
        wide
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
        eyebrow={t('projectDetail.alwaysBarca.summaryTitle')}
        title={t('projectDetail.alwaysBarca.summaryTitle')}
        tone="elevated"
      >
        <p style={{ marginBottom: 28 }}>{t('projectDetail.alwaysBarca.summaryIntro')}</p>
        <StatsTable
          headers={summaryHeaders}
          rows={summaryRows}
          accent={project.accent}
          yesLabel={t('projectDetail.significantYes')}
          noLabel={t('projectDetail.significantNo')}
        />
        <div style={{ marginTop: 28 }}>
          <QuoteBlock label={t('projectDetail.alwaysBarca.summaryTitle')} accent={project.accent} tone="finding">
            {t('projectDetail.alwaysBarca.conclusion')}
          </QuoteBlock>
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

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.personalNoteTitle')}
        title={t('projectDetail.alwaysBarca.personalNoteTitle')}
        tone="elevated"
      >
        <QuoteBlock label={t('projectDetail.alwaysBarca.personalNoteTitle')} accent={project.accent} tone="note">
          {t('projectDetail.alwaysBarca.personalNote')}
        </QuoteBlock>
      </CaseStudySection>

      <NextProjectNav
        slug="messi-outlier"
        title={t('work.items.messiOutlier.title')}
        accent="var(--accent-messi)"
      />
    </article>
  );
}
