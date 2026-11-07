import { useState } from 'react'
import axios from 'axios'
import { TbCircleCheck, TbLock } from 'react-icons/tb'
import { track } from '../helpers/analytics'

export default function ChecklistForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', marketingConsent: false, website: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [delivered, setDelivered] = useState(true)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const { data } = await axios.post('/api/checklist', form)
      setDelivered(Boolean(data && data.delivered))
      setStatus('success')
      track('checklist_download', { form_location: 'life_sciences' })
      track('generate_lead', { lead_type: 'checklist_download' })
      setForm({ name: '', company: '', email: '', marketingConsent: false, website: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <TbCircleCheck size={48} color="var(--teal)" className="mx-auto mb-4" />
        <p className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
          {delivered ? 'Check your inbox' : 'Thanks — request received'}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-600)' }}>
          {delivered
            ? 'The NIH/SBIR Accounting Readiness Checklist is on its way. If you don’t see it in a few minutes, check your spam folder.'
            : 'We’ll email the NIH/SBIR Accounting Readiness Checklist to you shortly.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cl-name" className="form-label">Name *</label>
        <input id="cl-name" type="text" name="name" autoComplete="name" value={form.name} onChange={handleChange} required maxLength={120} placeholder="Jane Smith" className="form-input" />
      </div>
      <div>
        <label htmlFor="cl-company" className="form-label">Company *</label>
        <input id="cl-company" type="text" name="company" autoComplete="organization" value={form.company} onChange={handleChange} required maxLength={160} placeholder="Acme Bio, Inc." className="form-input" />
      </div>
      <div>
        <label htmlFor="cl-email" className="form-label">Email *</label>
        <input id="cl-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} required maxLength={200} placeholder="jane@acmebio.com" className="form-input" />
      </div>

      {/* honeypot — hidden from people, catches bots */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="cl-website">Website</label>
        <input id="cl-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
      </div>

      <label className="flex items-start gap-3 text-sm cursor-pointer" style={{ color: 'var(--gray-600)' }}>
        <input type="checkbox" name="marketingConsent" checked={form.marketingConsent} onChange={handleChange}
          className="mt-1 rounded" style={{ accentColor: 'var(--teal)' }} />
        <span>Send me occasional educational content from TGP on grant accounting and finance. Unsubscribe anytime.</span>
      </label>

      {status === 'error' && (
        <div className="p-4 rounded-lg text-sm font-medium bg-red-50 text-red-600">
          Something went wrong. Please try again or email info@truegrouppartners.com.
        </div>
      )}

      <button type="submit" className="btn-primary w-full justify-center" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Me the Checklist →'}
      </button>
      <p className="text-xs leading-relaxed flex gap-2" style={{ color: 'var(--gray-400)' }}>
        <TbLock size={14} className="flex-shrink-0 mt-0.5" />
        <span>
          We'll use your information to send the checklist and may follow up once about a complimentary consultation.
          We don't sell or share your information.
        </span>
      </p>
    </form>
  )
}
