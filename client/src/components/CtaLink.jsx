import { Link } from 'react-router-dom'
import { SCHEDULING_URL } from '../helpers/siteConfig'
import { track } from '../helpers/analytics'

/**
 * Consultation button. Goes to the scheduling tool when VITE_SCHEDULING_URL is
 * set, otherwise to /contact?topic=… which pre-fills the contact form.
 * topic: 'consultation' | 'grant-review' | 'sarah' | 'life-sciences'
 */
export default function CtaLink({ topic = 'consultation', location = '', className = 'btn-primary', style, children }) {
  const onClick = () => track('consultation_cta_click', { topic, location })
  if (SCHEDULING_URL) {
    return (
      <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer" className={className} style={style} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <Link to={`/contact?topic=${topic}`} className={className} style={style} onClick={onClick}>
      {children}
    </Link>
  )
}
