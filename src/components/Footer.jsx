import { useTranslation } from 'react-i18next'
import './Footer.css'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>Alberto Núñez Trejos</span>
        <span>
          © {year} · {t('footer.rights')}
        </span>
      </div>
    </footer>
  )
}
