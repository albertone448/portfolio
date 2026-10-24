import { useTranslation } from 'react-i18next';
import { getProjectBySlug } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { CaseStudySection } from '../components/projects/CaseStudySection';
import { StatusNote } from '../components/projects/StatusNote';
import { BulletList } from '../components/projects/BulletList';
import { ProgressBoard } from '../components/projects/ProgressBoard';
import { ArchitectureDiagram, type ArchitectureStep, type ArchitectureStepStatus } from '../components/media/ArchitectureDiagram';
import { BatazoBannerArt } from '../components/media/BatazoBannerArt';
import { NextProjectNav } from '../components/projects/NextProjectNav';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { sectionStep } from '../utils/caseStudySteps';

const project = getProjectBySlug('batazo')!;
const TOTAL_STEPS = 7;

/**
 * Unlike the other case studies, this one documents work in progress, so it
 * has no outcome or screenshots section. It closes on current status and
 * lessons instead, and every section stays limited to what exists today.
 */
export function ProjectBatazo() {
  const { t } = useTranslation();

  useDocumentMeta(t('projectDetail.batazo.title'), t('projectDetail.batazo.description'));

  const architectureSteps = t('projectDetail.batazo.architectureSteps', { returnObjects: true }) as ArchitectureStep[];
  const architectureStatus = t('projectDetail.batazo.architectureStatus', { returnObjects: true }) as Record<
    ArchitectureStepStatus,
    string
  >;
  const decisions = t('projectDetail.batazo.decisions', { returnObjects: true }) as string[];
  const done = t('projectDetail.batazo.done', { returnObjects: true }) as string[];
  const next = t('projectDetail.batazo.next', { returnObjects: true }) as string[];
  const lessons = t('projectDetail.batazo.lessons', { returnObjects: true }) as string[];

  return (
    <article>
      <ProjectHero
        project={project}
        category={t('work.items.batazo.category')}
        title={t('projectDetail.batazo.title')}
        description={t('projectDetail.batazo.description')}
        visual={<BatazoBannerArt accent={project.accent} />}
      />

      <CaseStudySection eyebrow={sectionStep(1, TOTAL_STEPS)} title={t('projectDetail.batazo.overviewTitle')}>
        <div style={{ marginBottom: 28 }}>
          <StatusNote accent={project.accent}>{t('projectDetail.batazo.statusNote')}</StatusNote>
        </div>
        <p>{t('projectDetail.batazo.overview')}</p>
        <p style={{ marginTop: 24 }}>
          <strong style={{ color: 'var(--color-text-primary)' }}>{t('projectDetail.batazo.nameTitle')}: </strong>
          {t('projectDetail.batazo.name')}
        </p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={sectionStep(2, TOTAL_STEPS)}
        title={t('projectDetail.batazo.problemTitle')}
        tone="elevated"
      >
        <p>{t('projectDetail.batazo.problem')}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow={sectionStep(3, TOTAL_STEPS)} title={t('projectDetail.batazo.roleTitle')}>
        <p>{t('projectDetail.batazo.role')}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={sectionStep(4, TOTAL_STEPS)}
        title={t('projectDetail.batazo.architectureTitle')}
        tone="elevated"
      >
        <p>{t('projectDetail.batazo.architectureIntro')}</p>
        <div style={{ marginTop: 28, maxWidth: 640 }}>
          <ArchitectureDiagram steps={architectureSteps} accent={project.accent} statusLabels={architectureStatus} />
        </div>
      </CaseStudySection>

      <CaseStudySection eyebrow={sectionStep(5, TOTAL_STEPS)} title={t('projectDetail.batazo.decisionsTitle')}>
        <BulletList items={decisions} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={sectionStep(6, TOTAL_STEPS)}
        title={t('projectDetail.batazo.progressTitle')}
        tone="elevated"
      >
        <ProgressBoard
          doneTitle={t('projectDetail.batazo.doneTitle')}
          done={done}
          nextTitle={t('projectDetail.batazo.nextTitle')}
          next={next}
          accent={project.accent}
        />
      </CaseStudySection>

      <CaseStudySection eyebrow={sectionStep(7, TOTAL_STEPS)} title={t('projectDetail.batazo.lessonsTitle')}>
        <BulletList items={lessons} accent={project.accent} />
        <p style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', color: 'var(--color-text-muted)' }}>
          {t('projectDetail.stackLabel')}: {t('projectDetail.batazo.stack')}
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
