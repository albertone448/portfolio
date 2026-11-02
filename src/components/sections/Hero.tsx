import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BarChart3, Code2, FileText, Mail } from 'lucide-react';
import { Button } from '../common/Button';
import { useResumeUrl } from '../../hooks/useResumeUrl';
import styles from './Hero.module.css';

const ROUTES = [
  { id: 'software', anchor: '/#software-projects', Icon: Code2 },
  { id: 'data', anchor: '/#data-projects', Icon: BarChart3 },
] as const;

/**
 * First screen answers, in reading order: who, which two roles, what backs
 * it up, and where to go next. The two route cards are real links into the
 * matching project group, so a recruiter hiring for one role can skip the
 * other entirely.
 */
export function Hero() {
  const { t } = useTranslation();
  const resumeUrl = useResumeUrl();
  const facts = t('hero.facts', { returnObjects: true }) as string[];

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container-wide ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
          <h1 className={styles.name}>{t('hero.name')}</h1>
          <p className={styles.roles}>{t('hero.roles')}</p>
          <p className={styles.summary}>{t('hero.summary')}</p>

          <ul className={styles.facts}>
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <div className={styles.ctas}>
            <Button to="/#work" icon={<ArrowRight size={16} strokeWidth={2} />}>
              {t('hero.ctaProjects')}
            </Button>
            <Button
              variant="secondary"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<FileText size={16} strokeWidth={2} />}
              iconPosition="start"
            >
              {t('hero.ctaResume')}
            </Button>
            <Button variant="ghost" to="/#contact" icon={<Mail size={16} strokeWidth={2} />} iconPosition="start">
              {t('hero.ctaContact')}
            </Button>
          </div>
        </div>

        <nav className={styles.routes} aria-label={t('hero.routesLabel')}>
          {ROUTES.map(({ id, anchor, Icon }) => {
            const items = t(`hero.routes.${id}.items`, { returnObjects: true }) as string[];
            return (
              <article key={id} className={styles.route} data-route={id}>
                <h2 className={styles.routeLabel}>
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                  {t(`hero.routes.${id}.label`)}
                </h2>
                <ul className={styles.routeItems}>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to={anchor} className={styles.routeLink}>
                  {t(`hero.routes.${id}.cta`)}
                  <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
