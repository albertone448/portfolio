import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import styles from './Contact.module.css';

const EMAIL = 'albertone448@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/albertone448';
const GITHUB_URL = 'https://github.com/albertone448';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">{t('contact.eyebrow')}</p>
        <h2 className={styles.title}>{t('contact.title')}</h2>
        <p className={`measure ${styles.intro}`}>{t('contact.intro')}</p>

        <ul className={styles.channels}>
          <li>
            <a href={`mailto:${EMAIL}`} className={styles.channel}>
              <Mail size={18} strokeWidth={1.75} />
              <span>
                <span className={styles.channelLabel}>{t('contact.emailLabel')}</span>
                <span className={styles.channelValue}>{EMAIL}</span>
              </span>
              <ArrowUpRight size={16} strokeWidth={2} className={styles.channelArrow} />
            </a>
          </li>
          <li>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.channel}>
              <LinkedinIcon size={18} />
              <span>
                <span className={styles.channelLabel}>{t('contact.linkedinLabel')}</span>
                <span className={styles.channelValue}>linkedin.com/in/albertone448</span>
              </span>
              <ArrowUpRight size={16} strokeWidth={2} className={styles.channelArrow} />
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.channel}>
              <GithubIcon size={18} />
              <span>
                <span className={styles.channelLabel}>{t('contact.githubLabel')}</span>
                <span className={styles.channelValue}>github.com/albertone448</span>
              </span>
              <ArrowUpRight size={16} strokeWidth={2} className={styles.channelArrow} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
