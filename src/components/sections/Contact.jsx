import { useTranslation } from 'react-i18next'
import { Mail, Linkedin, Github } from 'lucide-react'
import './Contact.css'

const EMAIL = 'albertone448@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/albertone448'
// TODO: el CV no incluye el usuario de GitHub, reemplazar por el real antes
// de publicar. Este es un placeholder, no un dato confirmado.
const GITHUB_URL = 'https://github.com/TU-USUARIO-AQUI'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <p className="section-eyebrow">{t('contact.eyebrow')}</p>
        <h2 className="section-heading">{t('contact.title')}</h2>
        <p className="section-intro">{t('contact.intro')}</p>

        <div className="contact__links">
          <a href={`mailto:${EMAIL}`} className="contact__link">
            <Mail size={20} />
            <div>
              <span className="contact__link-label">{t('contact.emailLabel')}</span>
              <span className="contact__link-value">{EMAIL}</span>
            </div>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <Linkedin size={20} />
            <div>
              <span className="contact__link-label">{t('contact.linkedinLabel')}</span>
              <span className="contact__link-value">linkedin.com/in/albertone448</span>
            </div>
          </a>

          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact__link">
            <Github size={20} />
            <div>
              <span className="contact__link-label">{t('contact.githubLabel')}</span>
              <span className="contact__link-value">github.com/tu-usuario-aqui</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
