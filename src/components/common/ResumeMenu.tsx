import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, FileText } from 'lucide-react';
import { useResumes } from '../../hooks/useResumes';
import styles from './ResumeMenu.module.css';

interface ResumeMenuProps {
  /** Visible text of the trigger, e.g. "CV" in the header or "Ver CV" in the hero. */
  label: ReactNode;
  triggerClassName?: string;
  /** Which edge the panel lines up with, so it never overflows the viewport. */
  align?: 'start' | 'end';
  showIcon?: boolean;
}

/**
 * A disclosure, not an ARIA menu: two plain links behind a button. That keeps
 * normal Tab and Enter behavior, which is all two options need.
 */
export function ResumeMenu({ label, triggerClassName, align = 'end', showIcon = false }: ResumeMenuProps) {
  const { t } = useTranslation();
  const resumes = useResumes();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    // Tabbing past the last link closes the panel instead of leaving it open behind.
    const onFocusIn = (event: FocusEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('focusin', onFocusIn);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('focusin', onFocusIn);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {showIcon && <FileText size={16} strokeWidth={2} aria-hidden="true" />}
        {label}
        <ChevronDown size={14} strokeWidth={2} aria-hidden="true" className={styles.chevron} data-open={open} />
      </button>

      <div id={panelId} className={styles.panel} data-align={align} hidden={!open}>
        <p className={styles.hint}>{t('resume.menuHint')}</p>
        <ul>
          {resumes.map(({ track, href, label: linkLabel }) => (
            <li key={track}>
              <a href={href} target="_blank" rel="noopener noreferrer" className={styles.option} onClick={() => setOpen(false)}>
                <FileText size={16} strokeWidth={1.75} aria-hidden="true" />
                <span>{linkLabel}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
