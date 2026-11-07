import { TbDownload, TbCalendarEvent, TbArrowRight } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import CtaLink from './CtaLink'
import { track } from '../helpers/analytics'

/** The call to action shown after a video. kind: 'checklist' | 'consultation' | 'sarah' */
export default function VideoCta({ kind = 'checklist', location = 'video', compact = false }) {
  const pad = compact ? 'p-5' : 'p-6 md:p-7'
  const box = `${pad} rounded-xl flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6`
  const boxStyle = { background: 'var(--teal-pale)', border: '1px solid rgba(0,180,160,0.25)' }

  if (kind === 'checklist') {
    return (
      <div className={box} style={boxStyle}>
        <div className="flex items-start gap-3 flex-1">
          <TbDownload size={24} color="var(--teal)" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold" style={{ color: 'var(--navy)' }}>Download the NIH/SBIR Accounting Readiness Checklist</p>
            <p className="text-sm" style={{ color: 'var(--gray-600)' }}>20 questions to answer after receiving a government award. Free PDF.</p>
          </div>
        </div>
        <Link to="/life-sciences#checklist" className="btn-primary justify-center flex-shrink-0"
          onClick={() => track('checklist_cta_click', { location })}>
          Get the Checklist <TbArrowRight />
        </Link>
      </div>
    )
  }

  const sarah = kind === 'sarah'
  return (
    <div className={box} style={boxStyle}>
      <div className="flex items-start gap-3 flex-1">
        <TbCalendarEvent size={24} color="var(--teal)" className="flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold" style={{ color: 'var(--navy)' }}>
            {sarah ? 'Have questions about your finance function?' : 'Complimentary 20-Minute Grant Accounting Readiness Consultation'}
          </p>
          <p className="text-sm" style={{ color: 'var(--gray-600)' }}>
            {sarah ? 'Talk with Sarah about where your company is today and what comes next.' : 'An introductory conversation about your accounting processes and grant reporting requirements.'}
          </p>
        </div>
      </div>
      <CtaLink topic={sarah ? 'sarah' : 'grant-review'} location={location} className="btn-primary justify-center flex-shrink-0">
        {sarah ? 'Talk With Sarah' : 'Request Your Free Review'} <TbArrowRight />
      </CtaLink>
    </div>
  )
}
