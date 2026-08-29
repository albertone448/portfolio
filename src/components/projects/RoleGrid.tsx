import styles from './RoleGrid.module.css';

interface RoleGridProps {
  roles: { name: string; description: string }[];
  accent?: string;
}

export function RoleGrid({ roles, accent }: RoleGridProps) {
  return (
    <div className={styles.grid} style={{ '--role-accent': accent } as React.CSSProperties}>
      {roles.map((role) => (
        <div key={role.name} className={styles.card}>
          <p className={styles.name}>{role.name}</p>
          <p className={styles.description}>{role.description}</p>
        </div>
      ))}
    </div>
  );
}
