import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: Variant;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: never;
}

interface AnchorButtonProps extends BaseProps {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
}

type ButtonProps = LinkButtonProps | AnchorButtonProps;

export function Button(props: ButtonProps) {
  const { variant = 'primary', icon, iconPosition = 'end', children, className } = props;
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');
  const content = (
    <>
      {icon && iconPosition === 'start' && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  const { href, target, rel } = props as AnchorButtonProps;
  return (
    <a href={href} target={target} rel={rel} className={classes}>
      {content}
    </a>
  );
}
