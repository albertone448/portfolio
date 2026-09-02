import styles from './StatsTable.module.css';

interface StatsTableRow {
  label: string;
  value: string;
  significant: boolean;
}

interface StatsTableProps {
  headers: [string, string, string];
  rows: StatsTableRow[];
  accent?: string;
  yesLabel: string;
  noLabel: string;
}

export function StatsTable({ headers, rows, accent, yesLabel, noLabel }: StatsTableProps) {
  return (
    <div className={styles.wrapper} style={{ '--table-accent': accent } as React.CSSProperties}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} data-significant={row.significant}>
              <td>{row.label}</td>
              <td className={styles.value}>{row.value}</td>
              <td>
                <span className={styles.badge} data-significant={row.significant}>
                  {row.significant ? yesLabel : noLabel}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
