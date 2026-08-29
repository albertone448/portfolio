import styles from './BulletList.module.css';

interface BulletListProps {
  items: string[];
  accent?: string;
  numbered?: boolean;
}

export function BulletList({ items, accent, numbered }: BulletListProps) {
  const Tag = numbered ? 'ol' : 'ul';

  return (
    <Tag className={styles.list} style={{ '--bullet-accent': accent } as React.CSSProperties} data-numbered={numbered}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}
