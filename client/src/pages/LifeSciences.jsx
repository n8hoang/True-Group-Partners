import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import sarahImg from '../assets/tgpsarah.jpeg'

// ─────────────────────────────────────────────────────────────
// PLACEHOLDERS — swap these out when the real assets are ready.
//   • Set `embedUrl` on a video to a YouTube/Vimeo embed link
//     (e.g. 'https://www.youtube.com/embed/VIDEO_ID') to replace the placeholder.
//   • Replace `sarahBio` with Sarah's updated bio when it's finalized.
//   • Replace `sarahImg` import with the new professional photo when available.
// ─────────────────────────────────────────────────────────────

const featuredVideo = {
  title: 'We Received an NIH/SBIR Grant. Now What?',
  duration: '5–7 min',
  embedUrl: null, // TODO: add embed URL once recorded
  summary:
    'Sarah walks through the five areas every early-stage life sciences company should look at immediately after receiving an award.',
  topics: [
    { title: 'Separate grant activity appropriately', desc: 'Know which expenses relate to which funding source.' },
    { title: 'Establish timekeeping and payroll allocation', desc: "Don't try to reconstruct everything months later." },
    { title: 'Understand direct and indirect costs', desc: 'Your accounting structure should support how expenses are categorized and reported.' },
    { title: 'Maintain documentation contemporaneously', desc: "The time to establish documentation procedures isn't when someone asks to review historical expenses." },
    { title: 'Integrate grant reporting with your normal accounting', desc: "Grant records, financial statements and management reporting shouldn't live in disconnected systems." },
  ],
}

const upcomingVideos = [
  { title: '5 Grant Accounting Mistakes Life Sciences Startups Make', embedUrl: null },
  { title: 'Employee Time & Payroll: What Grant-Funded Companies Should Have in Place', embedUrl: null },
  { title: 'Direct vs. Indirect Costs for Life Sciences Founders', embedUrl: null },
  { title: 'Are Your Books Ready for an NIH Review?', embedUrl: null },
  { title: 'Managing VC Money and NIH Funding in the Same Company', embedUrl: null },
  { title: 'When Does a Biotech Startup Need a Controller?', embedUrl: null },
  { title: 'When Does a Life Sciences Company Need a CFO?', embedUrl: null },
  { title: 'What Your Board and Investors Should Be Getting From Finance', embedUrl: null },
  { title: 'The Finance Checklist Before Your Next Fundraise', embedUrl: null },
]

// TODO: replace with Sarah's updated bio
const sarahBio =
  "Sarah leads TGP's work with life sciences and grant-funded companies, helping management teams establish accounting processes around government funding while building the broader financial infrastructure needed as their businesses grow."

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
  { label: 'Grant Accounting', icon: '🔬' },
  { label: 'Bookkeeping', icon: '📒' },
  { label: 'Controller', icon: '📋' },
  { label: 'CFO', icon: '📊' },
  { label: 'Audit Support', icon: '🔍' },
  { label: 'Fundraising / M&A', icon: '🚀' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = e.target.dataset.delay || 0
          setTimeout(() => e.target.classList.add('revealed'), parseInt(delay))
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/** Renders a real embed when `embedUrl` is set, otherwise a "coming soon" placeholder. */
function VideoFrame({ title, embedUrl, duration, large = false }) {
  if (embedUrl) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: '56.25%', background: '#000' }}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden flex items-center justify-center"
      style={{
        paddingTop: '56.25%',
        background: 'linear-gradient(135deg, #0a1628 0%, #122040 55%, #1e3a5f 100%)',
        border: '1px dashed rgba(255,255,255,0.25)',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div
          className={`rounded-full flex items-center justify-center mb-3 ${large ? 'w-20 h-20' : 'w-12 h-12'}`}
          style={{ background: 'rgba(0,180,160,0.18)', border: '2px solid var(--teal)' }}
        >
          <span style={{ color: 'var(--teal)', fontSize: large ? '28px' : '16px', marginLeft: '3px' }}>▶</span>
        </div>
        <p className={`text-white font-semibold ${large ? 'text-lg' : 'text-sm'}`}>{title}</p>
        <p className="text-xs mt-1 uppercase tracking-widest" style={{ color: 'var(--teal)' }}>
          Video coming soon{duration ? ` · ${duration}` : ''}
        </p>
      </div>
    </div>
  )
}

function ChecklistForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post('/send-message', {
        name: form.name,
        email: form.email,
        company: form.company,
        service: 'NIH/SBIR Accounting Readiness Checklist',
        stage: '',
        phone: '',
        message: 'Requested the NIH/SBIR Accounting Readiness Checklist PDF from the Life Sciences page.',
      })
      setStatus('success')
      setForm({ name: '', company: '', email: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="form-label">Name *</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className="form-input" />
      </div>
      <div>
        <label className="form-label">Company *</label>
        <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Acme Bio, Inc." className="form-input" />
      </div>
      <div>
        <label className="form-label">Email *</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@acmebio.com" className="form-input" />
      </div>

      {status === 'success' && (
        <div className="p-4 rounded-lg text-sm font-medium" style={{ background: 'var(--teal-pale)', color: 'var(--teal)' }}>
          ✓ Thanks! We'll send the checklist to your inbox shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 rounded-lg text-sm font-medium bg-red-50 text-red-600">
          Something went wrong. Please try again or email info@truegrouppartners.com.
        </div>
      )}

      <button type="submit" className="btn-primary w-full justify-center" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Me the Checklist →'}
      </button>
      <p className="text-xs text-center" style={{ color: 'var(--gray-400)' }}>
        No spam. We'll follow up once to offer a complimentary Grant Accounting Readiness Review.
      </p>
    </form>
  )
}

function LifeSciences() {
  useReveal()

  return (
    <div className="overflow-x-hidden" style={{ background: '#fff' }}>

      {/* ── HERO ────────────────────────────────────── */}
      <section className="hero-gradient relative flex items-center pt-20" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--teal) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="animate-fade-up flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: 'var(--teal)' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--teal)' }}>
                Life Sciences & Grant Accounting
              </span>
            </div>

            <h1 className="animate-fade-up text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, animationDelay: '0.1s' }}>
              Outsourced Accounting, Grant Accounting, Controller & CFO Support<br />
              <span style={{ color: 'var(--teal)' }}>for Life Sciences Companies</span>
            </h1>

            <p className="animate-fade-up mb-5 text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '620px', animationDelay: '0.2s' }}>
              True Group Partners provides outsourced accounting, grant accounting, controller and CFO support to
              emerging biotech, medtech and life sciences companies.
            </p>
            <p className="animate-fade-up mb-10 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '620px', animationDelay: '0.25s' }}>
              From your first NIH or SBIR/STTR award through venture financing and commercial growth, our team helps
              build the financial infrastructure needed to manage funding, maintain accurate records and give management
              and investors better financial visibility.
            </p>

            <div className="animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation →
              </Link>
              <a href="#video" className="btn-outline">
                ▶ Watch: NIH/SBIR Grant — Now What?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRANT ACCOUNTING ────────────────────────── */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2" data-reveal>
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>
                Grant Accounting
              </span>
              <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--navy)' }}>
                NIH, SBIR/STTR & Government Grant Accounting
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--gray-600)' }}>
                Receiving a grant creates accounting requirements that many early-stage companies aren't prepared to manage.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--gray-600)' }}>
                TGP helps companies establish the processes, documentation and reporting structure needed to manage
                government funding with confidence — and to be ready when someone asks to review it.
              </p>
              <Link to="/contact" className="btn-primary">
                Request a Readiness Review →
              </Link>
            </div>
            <div className="lg:col-span-3 rounded-2xl p-8 border" data-reveal data-delay="150"
              style={{ background: 'var(--gray-50)', borderColor: '#eef0f5' }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--navy)' }}>
                TGP helps companies establish processes for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {grantServices.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-snug" style={{ color: 'var(--gray-600)' }}>
                    <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE THAN GRANT ACCOUNTING ──────────────── */}
      <section className="py-24" style={{ background: 'var(--gray-50)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>
              Full Lifecycle Support
            </span>
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--navy)' }}>More Than Grant Accounting</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Services can include monthly close and financial statements, AP/AR, cash-flow forecasting, budgeting,
              board/investor reporting, audit support, financial modeling, fundraising support and strategic CFO services.
            </p>
          </div>

          {/* Path */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-reveal data-delay="100">
            {servicePath.map(({ label, icon }, i) => (
              <div key={label} className="relative service-card p-5 rounded-xl text-center border"
                style={{ borderColor: '#eef0f5', background: '#fff' }}>
                <div className="text-3xl mb-3">{icon}</div>
                <p className="text-sm font-semibold" style={{ color: 'var(--navy)' }}>{label}</p>
                {i < servicePath.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-lg font-bold"
                    style={{ color: 'var(--teal)' }}>→</span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-reveal>
            <Link to="/services" className="btn-primary">
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEET SARAH ──────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-reveal className="order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>
                Meet Sarah
              </span>
              <h2 className="text-4xl font-bold text-white mb-1">Sarah Boettger, CPA</h2>
              <p className="text-base font-medium mb-6" style={{ color: 'var(--teal)' }}>
                Partner, Life Sciences & Grant Accounting
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {sarahBio}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['CPA', 'Grant Accounting', 'Controller Services', 'FP&A', 'Life Sciences'].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: 'rgba(0,180,160,0.15)', color: 'var(--teal)', border: '1px solid rgba(0,180,160,0.35)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">
                Talk With Sarah →
              </Link>
            </div>

            <div data-reveal data-delay="150" className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                {/* TODO: replace with new professional photo */}
                <img src={sarahImg} alt="Sarah Boettger, CPA" className="w-full object-cover"
                  style={{ maxHeight: '520px', objectPosition: 'center top' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED VIDEO ──────────────────────────── */}
      <section id="video" className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>
              From Sarah
            </span>
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--navy)' }}>{featuredVideo.title}</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>{featuredVideo.summary}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3" data-reveal>
              <VideoFrame title={featuredVideo.title} embedUrl={featuredVideo.embedUrl} duration={featuredVideo.duration} large />
            </div>
            <div className="lg:col-span-2" data-reveal data-delay="150">
              <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--navy)' }}>
                Five areas to look at right after an award
              </p>
              <ol className="space-y-4">
                {featuredVideo.topics.map(({ title, desc }, i) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: 'var(--teal-pale)', color: 'var(--teal)' }}>{i + 1}</span>
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>{title}</p>
                      <p className="text-sm leading-snug" style={{ color: 'var(--gray-600)' }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Upcoming videos */}
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8" data-reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: 'var(--teal)' }}>
                  Video Library
                </span>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--navy)' }}>More From the Series</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingVideos.map(({ title, embedUrl }, i) => (
                <div key={title} data-reveal data-delay={(i % 3) * 80}>
                  <VideoFrame title={title} embedUrl={embedUrl} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHECKLIST LEAD MAGNET ───────────────────── */}
      <section className="py-24" style={{ background: 'var(--gray-50)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>
                Free Download
              </span>
              <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                The NIH/SBIR Accounting Readiness Checklist
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--gray-600)' }}>
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
                    <span style={{ color: 'var(--teal)', fontWeight: 700 }}>?</span>
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-sm" style={{ color: 'var(--gray-400)' }}>
                Enter your details and we'll send the PDF to your inbox.
              </p>
            </div>
            <div data-reveal data-delay="150" className="p-8 rounded-2xl border"
              style={{ background: '#fff', borderColor: '#eef0f5', borderTop: '3px solid var(--teal)' }}>
              <ChecklistForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA: READINESS REVIEW ───────────────────── */}
      <section style={{ background: 'var(--teal)' }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'rgba(255,255,255,0.8)' }} data-reveal>
            Complimentary
          </span>
          <h2 className="text-4xl font-bold text-white mb-4" data-reveal data-delay="50">
            Grant Accounting Readiness Review
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.88)' }} data-reveal data-delay="100">
            If you've recently received an NIH, SBIR/STTR or other government award and aren't sure whether your
            accounting processes are ready, we'd be happy to take a look at your current process and identify areas
            you may want to address.
          </p>
          <div data-reveal data-delay="200">
            <Link
              to="/contact"
              style={{
                background: 'white',
                color: 'var(--teal)',
                padding: '16px 36px',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'transform 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={e => e.currentTarget.style.transform = ''}
            >
              Request Your Free Review →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LifeSciences
