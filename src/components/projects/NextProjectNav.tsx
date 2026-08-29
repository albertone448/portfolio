import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './NextProjectNav.module.css';

interface NextProjectNavProps {
  slug: string;
  title: string;
  accent: string;
}

export function NextProjectNav({ slug, title, accent }: NextProjectNavProps) {
  const { t } = useTranslation();

  return (
    <Link to={`/projects/${slug}`} className={styles.nav} style={{ '--project-accent': accent } as React.CSSProperties}>
      <div className="container">
        <span className={styles.label}>{t('projectDetail.nextProject')}</span>
        <span className={styles.title}>
          {title}
          <ArrowRight size={22} strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
