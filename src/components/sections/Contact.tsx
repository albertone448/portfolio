import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../data/contact';
import { useResumeUrl } from '../../hooks/useResumeUrl';
import styles from './Contact.module.css';

interface Channel {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  external: boolean;
}

export function Contact() {
  const { t } = useTranslation();
  const resumeUrl = useResumeUrl();

  const channels: Channel[] = [
    { href: `mailto:${EMAIL}`, label: t('contact.emailLabel'), value: EMAIL, icon: <Mail size={18} strokeWidth={1.75} aria-hidden="true" />, external: false },
    { href: LINKEDIN_URL, label: t('contact.linkedinLabel'), value: 'linkedin.com/in/albertone448', icon: <LinkedinIcon size={18} />, external: true },
    { href: GITHUB_URL, label: t('contact.githubLabel'), value: 'github.com/albertone448', icon: <GithubIcon size={18} />, external: true },
    { href: resumeUrl, label: t('contact.resumeLabel'), value: t('contact.resumeValue'), icon: <FileText size={18} strokeWidth={1.75} aria-hidden="true" />, external: true },
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">{t('contact.eyebrow')}</p>
        <h2 className={styles.title}>{t('contact.title')}</h2>
        <p className={`measure ${styles.intro}`}>{t('contact.intro')}</p>

        <ul className={styles.channels}>
          {channels.map(({ href, label, value, icon, external }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.channel}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {icon}
                <span>
                  <span className={styles.channelLabel}>{label}</span>
                  <span className={styles.channelValue}>{value}</span>
                </span>
                <ArrowUpRight size={16} strokeWidth={2} className={styles.channelArrow} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
