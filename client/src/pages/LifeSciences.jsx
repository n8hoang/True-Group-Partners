import { Link } from 'react-router-dom'
import {
  TbFileCertificate, TbReportAnalytics, TbClipboardCheck, TbChartLine, TbShieldCheck, TbPresentationAnalytics,
  TbArrowRight, TbCheck, TbDownload, TbPlayerPlayFilled,
} from 'react-icons/tb'
import sarahImg from '../assets/tgpsarah.jpeg'
import useReveal from '../helpers/useReveal'
import { useSeo, organizationJsonLd } from '../helpers/seo'
import { videoJsonLd } from '../helpers/video'
import { track } from '../helpers/analytics'
import { SITE_URL } from '../helpers/siteConfig'
import { featuredVideo, libraryVideos, isPublished, videoPath, SHOW_VIDEOS } from '../data/videos'
import CtaLink from '../components/CtaLink'
import VideoPlayer from '../components/VideoPlayer'
import Transcript from '../components/Transcript'
import VideoCta from '../components/VideoCta'
import VideoLibrary from '../components/VideoLibrary'
import ChecklistForm from '../components/ChecklistForm'

// TODO(TGP): bio and title are pending Sarah's approval.
const sarah = {
  name: 'Sarah Boettger, CPA',
  title: 'Partner, Life Sciences & Grant Accounting',
  bio: 'Sarah helps life sciences and grant-funded companies establish reliable accounting systems, manage government grant requirements, and build the financial reporting infrastructure needed to support growth. Her expertise includes grant accounting, controller services, financial reporting, and strategic financial operations.',
  tags: ['CPA', 'Grant Accounting', 'Controller Services', 'Financial Reporting', 'Life Sciences'],
}

const grantServices = [
  'Grant-specific expense tracking',
  'Direct and indirect cost allocation',
  'Payroll and employee time allocation',
  'Supporting documentation',
  'Grant budget-to-actual reporting',
  'Accounting policies and procedures',
  'Reconciliations and financial reporting',
  'Audit and compliance readiness',
  'Multiple grants and funding sources',
  "Integrating grant accounting with the company's overall financial reporting",
]

const servicePath = [
  { label: 'NIH/SBIR Grant Accounting', desc: 'Expense tracking, cost allocation and reporting structured around your awards.', Icon: TbFileCertificate, link: '/services#grants' },
  { label: 'Accounting & Financial Reporting', desc: 'Bookkeeping, monthly close, reconciliations and financial statements.', Icon: TbReportAnalytics, link: '/services#accounting' },
  { label: 'Outsourced Controller Services', desc: 'Controller-level oversight of processes, policies and reporting.', Icon: TbClipboardCheck, link: '/services#accounting' },
  { label: 'Fractional CFO & FP&A', desc: 'Budgeting, forecasting, cash planning and strategic finance leadership.', Icon: TbChartLine, link: '/services#cfo' },
  { label: 'Audit & Compliance Readiness', desc: 'Documentation and reconciliations in order before a review or audit.', Icon: TbShieldCheck, link: '/services#startup' },
  { label: 'Investor & Fundraising Support', desc: 'Investor reporting, financial models and diligence preparation.', Icon: TbPresentationAnalytics, link: '/services#cfo' },
]

const relatedLinks = [
  { label: 'Outsourced Accounting', to: '/services#accounting' },
  { label: 'CFO & Strategic Finance', to: '/services#cfo' },
  { label: 'HR & Payroll', to: '/services#hr' },
  { label: 'Grant Accounting', to: '/services#grants' },
]

function LifeSciences() {
  useReveal()
  const featuredLive = isPublished(featuredVideo)

  useSeo({
    title: 'Life Sciences & NIH/SBIR Grant Accounting | True Group Partners',
    description: 'Outsourced accounting, NIH and SBIR/STTR grant accounting, controller and fractional CFO support for biotech, medtech and life sciences companies. Download the free NIH/SBIR Accounting Readiness Checklist.',
    path: '/life-sciences',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Life Sciences & Grant Accounting',
        serviceType: 'NIH and SBIR/STTR grant accounting, outsourced accounting, controller and CFO services',
        audience: { '@type': 'Audience', audienceType: 'Biotech, medtech and grant-funded life sciences companies' },
        provider: organizationJsonLd,
        url: `${SITE_URL}/life-sciences`,
      },
      ...[featuredVideo, ...libraryVideos].filter(isPublished).map(videoJsonLd),
    ],
  })

  return (
    <div className="overflow-x-hidden" style={{ background: '#fff' }}>

      {/* ── HERO ────────────────────────────────────── */}
      <section className="hero-gradient relative flex items-center pt-16 md:pt-20 md:min-h-[75vh]">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--teal) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="animate-fade-up flex items-center gap-3 mb-5 md:mb-6">
              <div className="w-8 h-px" style={{ background: 'var(--teal)' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--teal)' }}>
                Life Sciences & Grant Accounting
              </span>
            </div>

            <h1 className="animate-fade-up text-white mb-5 md:mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 5vw, 3.6rem)', fontWeight: 700, animationDelay: '0.1s' }}>
              Outsourced Accounting, Grant Accounting, Controller & CFO Support{' '}
              <span style={{ color: 'var(--teal)' }}>for Life Sciences Companies</span>
            </h1>

            <p className="animate-fade-up mb-4 md:mb-5 text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '620px', animationDelay: '0.2s' }}>
              True Group Partners provides outsourced accounting, grant accounting, controller and CFO support to
              emerging biotech, medtech and life sciences companies.
            </p>
            <p className="animate-fade-up mb-8 md:mb-10 text-sm md:text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '620px', animationDelay: '0.25s' }}>
              From your first NIH or SBIR/STTR award through venture financing and commercial growth, our team helps
              build the financial infrastructure needed to manage funding, maintain accurate records and give management
              and investors better financial visibility.
            </p>

            <div className="animate-fade-up flex flex-wrap gap-3 md:gap-4" style={{ animationDelay: '0.3s' }}>
              <CtaLink topic="life-sciences" location="ls_hero" className="btn-primary">
                Schedule a Consultation <TbArrowRight />
              </CtaLink>
              {SHOW_VIDEOS ? (
                <a href="#video" className="btn-outline">
                  <TbPlayerPlayFilled /> Watch: NIH/SBIR Grant — Now What?
                </a>
              ) : (
                <a href="#checklist" className="btn-outline"
                  onClick={() => track('checklist_cta_click', { location: 'ls_hero' })}>
                  <TbDownload /> Get the Free Checklist
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHECKLIST CTA (top) ─────────────────────── */}
      <section style={{ background: 'var(--teal-pale)', borderBottom: '1px solid rgba(0,180,160,0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div className="flex items-start sm:items-center gap-3 flex-1">
            <TbDownload size={24} color="var(--teal)" className="flex-shrink-0" />
            <p className="text-sm md:text-base" style={{ color: 'var(--navy)' }}>
              <strong>Free download:</strong> the NIH/SBIR Accounting Readiness Checklist — 20 questions to answer after receiving a government award.
            </p>
          </div>
          <a href="#checklist" className="btn-primary justify-center flex-shrink-0" style={{ padding: '10px 22px' }}
            onClick={() => track('checklist_cta_click', { location: 'ls_top_banner' })}>
            Get the Checklist
          </a>
        </div>
      </section>

      {/* ── GRANT ACCOUNTING ────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2" data-reveal>
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>
                Grant Accounting
              </span>
              <h2 className="section-title mb-5 md:mb-6" style={{ color: 'var(--navy)' }}>
                NIH, SBIR/STTR & Government Grant Accounting
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: 'var(--gray-600)' }}>
                Receiving a grant creates accounting requirements that many early-stage companies aren't prepared to manage.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--gray-600)' }}>
                TGP helps companies establish the processes, documentation and reporting structure needed to manage
                government funding with confidence — and to be ready when someone asks to review it.
              </p>
              <a href="#readiness-review" className="btn-primary">
                Request a Readiness Consultation <TbArrowRight />
              </a>
            </div>
            <div className="lg:col-span-3 rounded-2xl p-6 md:p-8 border" data-reveal data-delay="150"
              style={{ background: 'var(--gray-50)', borderColor: '#eef0f5' }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--navy)' }}>
                TGP helps companies establish processes for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {grantServices.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-snug" style={{ color: 'var(--gray-600)' }}>
                    <TbCheck size={16} color="var(--teal)" strokeWidth={2.5} className="flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIFE SCIENCES SERVICES (6 cards) ────────── */}
      <section className="section-pad" style={{ background: 'var(--gray-50)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>
              Full Lifecycle Support
            </span>
            <h2 className="section-title mb-4" style={{ color: 'var(--navy)' }}>More Than Grant Accounting</h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Services can include monthly close and financial statements, AP/AR, cash-flow forecasting, budgeting,
              board/investor reporting, audit support, financial modeling, fundraising support and strategic CFO services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5" data-reveal data-delay="100">
            {servicePath.map(({ label, desc, Icon, link }) => (
              <Link key={label} to={link} className="service-card p-5 md:p-6 rounded-xl border flex items-start gap-4"
                style={{ borderColor: '#eef0f5', background: '#fff' }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--teal-pale)' }}>
                  <Icon size={22} color="var(--teal)" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: 'var(--navy)' }}>{label}</h3>
                  <p className="text-sm leading-snug" style={{ color: 'var(--gray-600)' }}>{desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm" data-reveal>
            <span style={{ color: 'var(--gray-400)' }}>Related services:</span>
            {relatedLinks.map(({ label, to }) => (
              <Link key={label} to={to} className="font-semibold hover:underline" style={{ color: 'var(--teal)' }}>{label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET SARAH ──────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div data-reveal className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden mx-auto max-w-[280px] md:max-w-none" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={sarahImg} alt="Sarah Boettger, CPA" className="w-full object-cover"
                  style={{ aspectRatio: '4 / 5', objectPosition: 'center top' }} />
              </div>
            </div>
            <div data-reveal data-delay="150" className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>
                Meet Sarah
              </span>
              <h2 className="section-title text-white mb-1">{sarah.name}</h2>
              <p className="text-base font-medium mb-5" style={{ color: 'var(--teal)' }}>{sarah.title}</p>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>{sarah.bio}</p>
              <div className="flex flex-wrap gap-2 mb-7">
                {sarah.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: 'rgba(0,180,160,0.15)', color: 'var(--teal)', border: '1px solid rgba(0,180,160,0.35)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <CtaLink topic="sarah" location="ls_sarah" className="btn-primary">
                Talk With Sarah <TbArrowRight />
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED VIDEO ──────────────────────────── */}
      <section id={SHOW_VIDEOS ? 'video' : 'after-the-award'} className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-12" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>
              {SHOW_VIDEOS ? 'Featured Video' : 'After the Award'}
            </span>
            <h2 className="section-title mb-4" style={{ color: 'var(--navy)' }}>{featuredVideo.title}</h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              {SHOW_VIDEOS
                ? featuredVideo.description
                : 'Five accounting areas every early-stage life sciences company should address right after receiving an NIH or SBIR/STTR award.'}
            </p>
          </div>

          {SHOW_VIDEOS && <div className="max-w-4xl mx-auto" data-reveal>
            <VideoPlayer video={featuredVideo} size="large" />
            <Transcript text={featuredVideo.transcript} />
            {featuredLive && (
              <p className="text-sm mt-3 text-right">
                <Link to={videoPath(featuredVideo)} className="font-semibold" style={{ color: 'var(--teal)' }}>Open video page →</Link>
              </p>
            )}
          </div>}

          <div className={`max-w-5xl mx-auto ${SHOW_VIDEOS ? 'mt-10 md:mt-12' : ''}`} data-reveal>
            {SHOW_VIDEOS && (
              <p className="text-sm font-semibold uppercase tracking-widest mb-5 text-center" style={{ color: 'var(--navy)' }}>
                Five areas to look at right after an award
              </p>
            )}
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {featuredVideo.topics.map(({ title, desc }, i) => (
                <li key={title} className="flex gap-4 p-4 rounded-xl border" style={{ borderColor: '#eef0f5' }}>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: 'var(--teal-pale)', color: 'var(--teal)' }}>{i + 1}</span>
                  <div>
                    <p className="font-semibold leading-snug" style={{ color: 'var(--navy)' }}>{title}</p>
                    <p className="text-sm leading-snug mt-1" style={{ color: 'var(--gray-600)' }}>{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="max-w-4xl mx-auto mt-8 md:mt-10" data-reveal>
            <VideoCta kind="checklist" location={SHOW_VIDEOS ? 'ls_featured_video' : 'ls_after_award'} />
          </div>

          {/* Video library */}
          {SHOW_VIDEOS && <div className="mt-14 md:mt-20">
            <div className="mb-6 md:mb-8" data-reveal>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: 'var(--teal)' }}>
                Video Library
              </span>
              <h2 className="text-2xl font-bold" style={{ color: 'var(--navy)' }}>More From the Series</h2>
            </div>
            <VideoLibrary />
          </div>}
        </div>
      </section>

      {/* ── CHECKLIST LEAD MAGNET ───────────────────── */}
      <section id="checklist" className="section-pad" style={{ background: 'var(--gray-50)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div data-reveal>
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>
                Free Download
              </span>
              <h2 className="section-title mb-4" style={{ color: 'var(--navy)' }}>
                The NIH/SBIR Accounting Readiness Checklist
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'var(--gray-600)' }}>
                20 questions every life sciences company should answer after receiving a government grant.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Is grant activity separated from other funding sources?',
                  'Are employee time and payroll allocated to the right awards?',
                  'Can you produce budget-to-actual reporting on request?',
                  'Is your documentation ready for a review?',
                ].map(q => (
                  <li key={q} className="flex items-start gap-3 text-sm" style={{ color: 'var(--gray-600)' }}>
                    <TbCheck size={16} color="var(--teal)" strokeWidth={2.5} className="flex-shrink-0 mt-0.5" />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-sm" style={{ color: 'var(--gray-400)' }}>
                Enter your details and we'll email the PDF to you right away.
              </p>
            </div>
            <div data-reveal data-delay="150" className="relative p-6 md:p-8 rounded-2xl border"
              style={{ background: '#fff', borderColor: '#eef0f5', borderTop: '3px solid var(--teal)' }}>
              <ChecklistForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIMENTARY CONSULTATION ──────────────── */}
      <section id="readiness-review" style={{ background: 'var(--teal)' }} className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'rgba(255,255,255,0.85)' }} data-reveal>
            Complimentary
          </span>
          <h2 className="section-title text-white mb-4" data-reveal data-delay="50">
            Complimentary 20-Minute Grant Accounting Readiness Consultation
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }} data-reveal data-delay="100">
            Recently received an NIH, SBIR/STTR, or other government award? Schedule a complimentary introductory consultation
            with TGP to discuss your accounting processes, grant-related reporting requirements, and potential areas for improvement.
          </p>
          <div data-reveal data-delay="200">
            <CtaLink topic="grant-review" location="ls_readiness_section" className="btn-white">
              Request Your Free Review <TbArrowRight />
            </CtaLink>
            <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              This is an introductory consultation, not a formal audit or compliance certification.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LifeSciences
