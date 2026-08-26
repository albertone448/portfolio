import { useTranslation } from 'react-i18next'
import { PROJECT_STATUS } from '../data/projects'
import './StatusBadge.css'

export default function StatusBadge({ status }) {
  const { t } = useTranslation()
  const label = t(`projects.status.${status}`)

  return <span className={`status-badge status-badge--${status}`}>{label}</span>
}

StatusBadge.STATUS = PROJECT_STATUS
