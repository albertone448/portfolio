import { useState } from 'react';
import type { TableauDashboard } from '../../types/project';
import { TableauShowcase } from './TableauShowcase';
import styles from './DashboardTabs.module.css';

interface DashboardTabsProps {
  dashboards: TableauDashboard[];
  accent?: string;
  liveLinkLabel: string;
  getTitle: (dashboard: TableauDashboard) => string;
  getDescription: (dashboard: TableauDashboard) => string;
}

export function DashboardTabs({ dashboards, accent, liveLinkLabel, getTitle, getDescription }: DashboardTabsProps) {
  const [active, setActive] = useState(0);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') setActive((prev) => (prev + 1) % dashboards.length);
    if (event.key === 'ArrowLeft') setActive((prev) => (prev - 1 + dashboards.length) % dashboards.length);
  };

  const current = dashboards[active];

  return (
    <div className={styles.wrapper} style={{ '--tabs-accent': accent } as React.CSSProperties}>
      <div className={styles.tabList} role="tablist" onKeyDown={onKeyDown}>
        {dashboards.map((dashboard, index) => (
          <button
            key={dashboard.path}
            type="button"
            role="tab"
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            className={styles.tab}
            data-active={index === active}
            onClick={() => setActive(index)}
          >
            <span className={styles.tabIndex}>{String(index + 1).padStart(2, '0')}</span>
            {getTitle(dashboard)}
          </button>
        ))}
      </div>

      <TableauShowcase
        dashboard={current}
        accent={accent}
        title={getTitle(current)}
        description={getDescription(current)}
        liveLinkLabel={liveLinkLabel}
      />
    </div>
  );
}
