import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjectBySlug } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { CaseStudySection } from '../components/projects/CaseStudySection';
import { QuoteBlock } from '../components/projects/QuoteBlock';
import { BulletList } from '../components/projects/BulletList';
import { RoleGrid } from '../components/projects/RoleGrid';
import { TableauShowcase } from '../components/media/TableauShowcase';
import { ProjectPreviewFrame } from '../components/media/ProjectPreviewFrame';
import { NextProjectNav } from '../components/projects/NextProjectNav';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const project = getProjectBySlug('messi-outlier')!;

export function ProjectMessiOutlier() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useDocumentMeta(t('projectDetail.messiOutlier.title'), t('projectDetail.messiOutlier.description'));

  const approach = t('projectDetail.messiOutlier.approach', { returnObjects: true }) as string[];
  const dataSources = t('projectDetail.messiOutlier.dataSources', { returnObjects: true }) as string[];
  const roles = t('projectDetail.messiOutlier.roles', { returnObjects: true }) as Record<string, string>;
  const roleList = Object.entries(roles).map(([, value]) => {
    const [name, ...rest] = value.split(' — ');
    return { name: name.trim(), description: rest.join(' — ').trim() || value };
  });

  return (
    <article>
      <ProjectHero
        project={project}
        category={t('work.items.messiOutlier.category')}
        title={t('projectDetail.messiOutlier.title')}
        description={t('projectDetail.messiOutlier.description')}
        visual={
          <ProjectPreviewFrame accent={project.accent} aspectRatio="1280 / 485">
            <img src="/images/projects/messi-outlier/banner.jpeg" alt="" />
          </ProjectPreviewFrame>
        }
      />

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.questionTitle')}
        title={t('projectDetail.messiOutlier.questionTitle')}
      >
        <QuoteBlock label={t('projectDetail.messiOutlier.questionTitle')} accent={project.accent} tone="question">
          {t('projectDetail.messiOutlier.question')}
        </QuoteBlock>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.thesisTitle')}
        title={t('projectDetail.messiOutlier.thesisTitle')}
        tone="elevated"
      >
        <p>{t('projectDetail.messiOutlier.thesis')}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.messiOutlier.approachTitle')} title={t('projectDetail.messiOutlier.approachTitle')}>
        <BulletList items={approach} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.rolesTitle')}
        title={t('projectDetail.messiOutlier.rolesTitle')}
        tone="elevated"
      >
        <p style={{ marginBottom: 28 }}>{t('projectDetail.messiOutlier.rolesIntro')}</p>
        <RoleGrid roles={roleList} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.messiOutlier.resultsTitle')} title={t('projectDetail.messiOutlier.resultsTitle')}>
        <p style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
          {t('projectDetail.messiOutlier.extractionTitle')}
        </p>
        <p style={{ marginTop: 10 }}>{t('projectDetail.messiOutlier.extraction')}</p>

        <p style={{ marginTop: 28, fontWeight: 600, color: 'var(--color-text-primary)' }}>
          {t('projectDetail.messiOutlier.correlationTitle')}
        </p>
        <p style={{ marginTop: 10 }}>{t('projectDetail.messiOutlier.correlation')}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.centralFindingTitle')}
        title={t('projectDetail.messiOutlier.centralFindingTitle')}
        tone="elevated"
      >
        <QuoteBlock label={t('projectDetail.messiOutlier.centralFindingTitle')} accent={project.accent} tone="finding">
          {t('projectDetail.messiOutlier.centralFinding')}
        </QuoteBlock>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.specialistsTitle')}
        title={t('projectDetail.messiOutlier.specialistsTitle')}
      >
        <p>{t('projectDetail.messiOutlier.specialists')}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.dashboardsTitle')}
        title={t('projectDetail.messiOutlier.dashboardsTitle')}
        wide
        tone="elevated"
      >
        <p style={{ maxWidth: '62ch', marginBottom: 32 }}>{t('projectDetail.messiOutlier.dashboardsIntro')}</p>
        <div style={{ display: 'grid', gap: 32 }}>
          {project.dashboards?.map((dashboard) => (
            <TableauShowcase
              key={dashboard.path}
              dashboard={dashboard}
              accent={project.accent}
              title={t(`projectDetail.messiOutlier.dashboards.${dashboard.titleKey}.title`)}
              description={t(`projectDetail.messiOutlier.dashboards.${dashboard.titleKey}.description`)}
              liveLinkLabel={t('projectDetail.liveLink')}
            />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.conclusionTitle')}
        title={t('projectDetail.messiOutlier.conclusionTitle')}
      >
        <p>{t('projectDetail.messiOutlier.conclusion')}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.dataSourcesTitle')}
        title={t('projectDetail.messiOutlier.dataSourcesTitle')}
        tone="elevated"
      >
        <BulletList items={dataSources} accent={project.accent} />
        <p style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', color: 'var(--color-text-muted)' }}>
          {t('projectDetail.stackLabel')}: {t('projectDetail.messiOutlier.stack')}
        </p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.closingTitle')}
        title={t('projectDetail.messiOutlier.closingTitle')}
      >
        <QuoteBlock label={t('projectDetail.messiOutlier.closingTitle')} accent={project.accent} tone="note">
          {t('projectDetail.messiOutlier.closing')}
        </QuoteBlock>
      </CaseStudySection>

      <NextProjectNav
        slug="store-credit"
        title={t('work.items.storeCredit.title')}
        accent="var(--accent-store-credit)"
      />
    </article>
  );
}
