import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getNextProject } from '../../data/projects';
import { projectCopyKey } from '../../utils/projectCopyKey';
import styles from './NextProjectNav.module.css';

interface NextProjectNavProps {
  /** Slug of the page this nav sits on; the next project is derived from data order. */
  currentSlug: string;
}

export function NextProjectNav({ currentSlug }: NextProjectNavProps) {
  const { t } = useTranslation();
  const next = getNextProject(currentSlug);

  return (
    <Link
      to={`/projects/${next.slug}`}
      className={styles.nav}
      style={{ '--project-accent': next.accent } as React.CSSProperties}
    >
      <div className="container">
        <span className={styles.label}>{t('projectDetail.nextProject')}</span>
        <span className={styles.title}>
          {t(`work.items.${projectCopyKey(next.slug)}.title`)}
          <ArrowRight size={22} strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
