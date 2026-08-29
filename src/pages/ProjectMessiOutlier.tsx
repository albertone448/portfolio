import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjectBySlug } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { CaseStudySection } from '../components/projects/CaseStudySection';
import { QuoteBlock } from '../components/projects/QuoteBlock';
import { BulletList } from '../components/projects/BulletList';
import { RoleGrid } from '../components/projects/RoleGrid';
import { StatusNote } from '../components/projects/StatusNote';
import { NextProjectNav } from '../components/projects/NextProjectNav';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const project = getProjectBySlug('messi-outlier')!;

export function ProjectMessiOutlier() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useDocumentMeta(t('projectDetail.messiOutlier.title'), t('projectDetail.messiOutlier.description'));

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
      />

      <CaseStudySection eyebrow={t('projectDetail.statusLabel')}>
        <StatusNote accent={project.accent}>{t('projectDetail.messiOutlier.statusNote')}</StatusNote>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.questionTitle')}
        title={t('projectDetail.messiOutlier.questionTitle')}
        tone="elevated"
      >
        <QuoteBlock label={t('projectDetail.messiOutlier.questionTitle')} accent={project.accent} tone="question">
          {t('projectDetail.messiOutlier.question')}
        </QuoteBlock>
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.messiOutlier.thesisTitle')} title={t('projectDetail.messiOutlier.thesisTitle')}>
        <p>{t('projectDetail.messiOutlier.thesis')}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.rolesTitle')}
        title={t('projectDetail.messiOutlier.rolesTitle')}
        tone="elevated"
      >
        <p style={{ marginBottom: 28 }}>{t('projectDetail.messiOutlier.rolesIntro')}</p>
        <RoleGrid roles={roleList} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.comparisonTitle')}
        title={t('projectDetail.messiOutlier.comparisonTitle')}
      >
        <p>{t('projectDetail.messiOutlier.comparisonPlayers')}</p>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={t('projectDetail.messiOutlier.dataSourcesTitle')}
        title={t('projectDetail.messiOutlier.dataSourcesTitle')}
        tone="elevated"
      >
        <BulletList items={dataSources} accent={project.accent} />
      </CaseStudySection>

      <CaseStudySection eyebrow={t('projectDetail.messiOutlier.noteTitle')} title={t('projectDetail.messiOutlier.noteTitle')}>
        <QuoteBlock label={t('projectDetail.messiOutlier.noteTitle')} accent={project.accent} tone="note">
          {t('projectDetail.messiOutlier.note')}
        </QuoteBlock>
        <p style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', color: 'var(--color-text-muted)' }}>
          {t('projectDetail.stackLabel')}: {t('projectDetail.messiOutlier.stack')}
        </p>
      </CaseStudySection>

      <NextProjectNav
        slug="store-credit"
        title={t('work.items.storeCredit.title')}
        accent="var(--accent-store-credit)"
      />
    </article>
  );
}
