import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { getProjectBySlug } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { CaseStudySection } from '../components/projects/CaseStudySection';
import { ArchitectureDiagram } from '../components/media/ArchitectureDiagram';
import { BulletList } from '../components/projects/BulletList';
import { Gallery } from '../components/media/Gallery';
import { ProjectPreviewFrame } from '../components/media/ProjectPreviewFrame';
import { NextProjectNav } from '../components/projects/NextProjectNav';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const project = getProjectBySlug('store-credit')!;

export function ProjectStoreCredit() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useDocumentMeta(t('projectDetail.storeCredit.title'), t('projectDetail.storeCredit.description'));

  const galleryCaptions = t('projectDetail.storeCredit.gallery', { returnObjects: true }) as Record<string, string>;
  const architectureSteps = t('projectDetail.storeCredit.architectureSteps', { returnObjects: true }) as string[];
  const features = t('projectDetail.storeCredit.features', { returnObjects: true }) as string[];

  return (
    <article>
      <ProjectHero
        project={project}
        category={t('work.items.storeCredit.category')}
        title={t('projectDetail.storeCredit.title')}
        description={t('projectDetail.storeCredit.description')}
        visual={
          <ProjectPreviewFrame accent={project.accent} chrome aspectRatio="16 / 9">
            <img src="/images/projects/store-credit/02-lista-clientes.jpg" alt="" />
          </ProjectPreviewFrame>
        }
      />

      <CaseStudySection eyebrow={t('projectDetail.storeCredit.overviewTitle')} title={t('projectDetail.storeCredit.overviewTitle')}>
        <p>{t('projectDetail.storeCredit.overview')}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.storeCredit.problemTitle')}
        title={t('projectDetail.storeCredit.problemTitle')}
        tone="elevated"
      >
        <p>{t('projectDetail.storeCredit.problem')}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.storeCredit.roleTitle')} title={t('projectDetail.storeCredit.roleTitle')}>
        <p>{t('projectDetail.storeCredit.role')}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.storeCredit.architectureTitle')}
        title={t('projectDetail.storeCredit.architectureTitle')}
        tone="elevated"
      >
        <p>{t('projectDetail.storeCredit.architectureIntro')}</p>
        <div style={{ marginTop: 28, maxWidth: 560 }}>
          <ArchitectureDiagram steps={architectureSteps} accent={project.accent} />
        </div>
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.storeCredit.featuresTitle')} title={t('projectDetail.storeCredit.featuresTitle')}>
        <BulletList items={features} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.storeCredit.screenshotsTitle')}
        title={t('projectDetail.storeCredit.screenshotsTitle')}
        wide
        tone="elevated"
      >
        <p style={{ maxWidth: '62ch', marginBottom: 32 }}>{t('projectDetail.storeCredit.screenshotsIntro')}</p>
        <Gallery images={project.gallery ?? []} captions={galleryCaptions} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.storeCredit.outcomeTitle')} title={t('projectDetail.storeCredit.outcomeTitle')}>
        <p>{t('projectDetail.storeCredit.outcome')}</p>
        <p style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', color: 'var(--color-text-muted)' }}>
          {t('projectDetail.stackLabel')}: {t('projectDetail.storeCredit.stack')}
        </p>
      </CaseStudySection>

      <NextProjectNav
        slug="always-barca"
        title={t('work.items.alwaysBarca.title')}
        accent="var(--accent-always-barca)"
      />
    </article>
  );
}
