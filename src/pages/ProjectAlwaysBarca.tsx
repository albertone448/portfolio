import { useTranslation } from 'react-i18next';
import { getProjectBySlug } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { CaseStudySection } from '../components/projects/CaseStudySection';
import { QuoteBlock } from '../components/projects/QuoteBlock';
import { BulletList } from '../components/projects/BulletList';
import { StatsTable } from '../components/projects/StatsTable';
import { DashboardTabs } from '../components/media/DashboardTabs';
import { ProjectBanner } from '../components/media/ProjectBanner';
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

  useDocumentMeta(t('projectDetail.alwaysBarca.title'), t('projectDetail.alwaysBarca.description'));

  const findings = t('projectDetail.alwaysBarca.findings', { returnObjects: true }) as string[];
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
        visual={<ProjectBanner src="/images/projects/always-barca/banner.png" accent={project.accent} />}
      />

      <CaseStudySection eyebrow={t('projectDetail.alwaysBarca.questionTitle')} title={t('projectDetail.alwaysBarca.questionTitle')}>
        <QuoteBlock label={t('projectDetail.alwaysBarca.questionTitle')} accent={project.accent} tone="question">
          {t('projectDetail.alwaysBarca.question')}
        </QuoteBlock>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.methodologyTitle')}
        title={t('projectDetail.alwaysBarca.methodologyTitle')}
        tone="elevated"
      >
        <p>{t('projectDetail.alwaysBarca.methodology')}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.alwaysBarca.findingsTitle')} title={t('projectDetail.alwaysBarca.findingsTitle')}>
        <BulletList items={findings} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.dashboardsTitle')}
        title={t('projectDetail.alwaysBarca.dashboardsTitle')}
        wide
        tone="elevated"
      >
        <p style={{ maxWidth: '62ch', marginBottom: 28 }}>{t('projectDetail.alwaysBarca.dashboardsIntro')}</p>
        <DashboardTabs
          dashboards={project.dashboards ?? []}
          accent={project.accent}
          liveLinkLabel={t('projectDetail.liveLink')}
          getTitle={(d) => t(`projectDetail.alwaysBarca.dashboards.${d.titleKey}.title`)}
          getDescription={(d) => t(`projectDetail.alwaysBarca.dashboards.${d.titleKey}.description`)}
        />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.summaryTitle')}
        title={t('projectDetail.alwaysBarca.summaryTitle')}
      >
        <p style={{ marginBottom: 24 }}>{t('projectDetail.alwaysBarca.summaryIntro')}</p>
        <StatsTable
          headers={summaryHeaders}
          rows={summaryRows}
          accent={project.accent}
          yesLabel={t('projectDetail.significantYes')}
          noLabel={t('projectDetail.significantNo')}
        />
        <div style={{ marginTop: 24 }}>
          <QuoteBlock label={t('projectDetail.alwaysBarca.summaryTitle')} accent={project.accent} tone="finding">
            {t('projectDetail.alwaysBarca.conclusion')}
          </QuoteBlock>
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.alwaysBarca.limitationsTitle')}
        title={t('projectDetail.alwaysBarca.limitationsTitle')}
        tone="elevated"
      >
        <p>{t('projectDetail.alwaysBarca.limitations')}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.alwaysBarca.personalNoteTitle')} title={t('projectDetail.alwaysBarca.personalNoteTitle')}>
        <QuoteBlock label={t('projectDetail.alwaysBarca.personalNoteTitle')} accent={project.accent} tone="note">
          {t('projectDetail.alwaysBarca.personalNote')}
        </QuoteBlock>
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
