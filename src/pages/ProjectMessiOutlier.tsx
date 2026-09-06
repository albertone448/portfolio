import { useTranslation } from 'react-i18next';
import { getProjectBySlug } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { CaseStudySection } from '../components/projects/CaseStudySection';
import { QuoteBlock } from '../components/projects/QuoteBlock';
import { BulletList } from '../components/projects/BulletList';
import { RoleGrid } from '../components/projects/RoleGrid';
import { DashboardTabs } from '../components/media/DashboardTabs';
import { ProjectBanner } from '../components/media/ProjectBanner';
import { NextProjectNav } from '../components/projects/NextProjectNav';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { sectionStep } from '../utils/caseStudySteps';

const project = getProjectBySlug('messi-outlier')!;
const TOTAL_STEPS = 7;

export function ProjectMessiOutlier() {
  const { t } = useTranslation();

  useDocumentMeta(t('projectDetail.messiOutlier.title'), t('projectDetail.messiOutlier.description'));

  const approach = t('projectDetail.messiOutlier.approach', { returnObjects: true }) as string[];
  const findings = t('projectDetail.messiOutlier.findings', { returnObjects: true }) as string[];
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
          <ProjectBanner
            src="/images/projects/messi-outlier/banner.jpg"
            accent={project.accent}
            focalPoint="left 70%"
          />
        }
      />

      <CaseStudySection eyebrow={sectionStep(1, TOTAL_STEPS)} title={t('projectDetail.messiOutlier.questionTitle')}>
        <QuoteBlock accent={project.accent} tone="question">
          {t('projectDetail.messiOutlier.question')}
        </QuoteBlock>
        <p style={{ marginTop: 24 }}>
          <strong style={{ color: 'var(--color-text-primary)' }}>{t('projectDetail.messiOutlier.thesisTitle')}: </strong>
          {t('projectDetail.messiOutlier.thesis')}
        </p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={sectionStep(2, TOTAL_STEPS)}
        title={t('projectDetail.messiOutlier.approachTitle')}
        tone="elevated"
      >
        <BulletList items={approach} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection eyebrow={sectionStep(3, TOTAL_STEPS)} title={t('projectDetail.messiOutlier.rolesTitle')}>
        <p style={{ marginBottom: 24 }}>{t('projectDetail.messiOutlier.rolesIntro')}</p>
        <RoleGrid roles={roleList} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={sectionStep(4, TOTAL_STEPS)}
        title={t('projectDetail.messiOutlier.findingsTitle')}
        tone="elevated"
      >
        <BulletList items={findings} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={sectionStep(5, TOTAL_STEPS)}
        title={t('projectDetail.messiOutlier.dashboardsTitle')}
        wide
      >
        <p style={{ maxWidth: '62ch', marginBottom: 28 }}>{t('projectDetail.messiOutlier.dashboardsIntro')}</p>
        <DashboardTabs
          dashboards={project.dashboards ?? []}
          accent={project.accent}
          liveLinkLabel={t('projectDetail.liveLink')}
          getTitle={(d) => t(`projectDetail.messiOutlier.dashboards.${d.titleKey}.title`)}
          getDescription={(d) => t(`projectDetail.messiOutlier.dashboards.${d.titleKey}.description`)}
        />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={sectionStep(6, TOTAL_STEPS)}
        title={t('projectDetail.messiOutlier.conclusionTitle')}
        tone="elevated"
      >
        <p>{t('projectDetail.messiOutlier.conclusion')}</p>
        <p style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', color: 'var(--color-text-muted)' }}>
          {t('projectDetail.stackLabel')}: {t('projectDetail.messiOutlier.stack')}
        </p>
      </CaseStudySection>

      <CaseStudySection eyebrow={sectionStep(7, TOTAL_STEPS)} title={t('projectDetail.messiOutlier.closingTitle')}>
        <QuoteBlock accent={project.accent} tone="note">
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
