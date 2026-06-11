
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
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

const serviceSections = [
  {
    id: 'accounting',
    icon: '📒',
    title: 'Accounting Operations',
    subtitle: 'The foundation of a healthy finance function',
    color: 'var(--teal)',
    items: [
      'Bookkeeping & general ledger management',
      'Accounts payable & receivable processing',
      'Bank reconciliations',
      'Monthly close & financial statement preparation',
      'Cash flow analysis and forecasting',
      'Working capital management',
      'Credit and collections',
      'Debt covenant calculations and compliance',
      'Accounting system hosting & migration',
      'Accounting policies & procedures manual',
      'Management and investor reporting',
      'Signatory authority on bank accounts',
    ],
  },
  {
    id: 'cfo',
    icon: '📊',
    title: 'CFO & Strategic Finance',
    subtitle: 'Executive-level finance leadership on demand',
    color: '#6366f1',
    items: [
      'Outsourced part-time & interim CFO / Controller',
      'Financial modeling — budgets, forecasts & projections',
      'Board and investor reporting',
      'KPI dashboard development and management',
      'Equity financing support',
      'Venture debt sourcing, negotiation and selection',
      'Strategic planning',
      'Cap table management',
      'Mergers and acquisitions support',
      'Data mining & business intelligence',
      'Cash flow strategy',
      'Fundraising preparation and support',
    ],
  },
  {
    id: 'startup',
    icon: '🚀',
    title: 'Startup & Transaction Support',
    subtitle: 'Built for venture-backed growth stages',
    color: '#f59e0b',
    items: [
      'Capital raise advisory, due diligence & pitch decks',
      'M&A advisory, due diligence & pitch decks',
      'Audit preparation and support',
      'Internal audit',
      '409A coordination',
      'ESOP / equity administration',
      'Process building & infrastructure setup',
      'Accounting systems implementation',
      'Other transaction support',
    ],
  },
  {
    id: 'tax',
    icon: '🧾',
    title: 'Tax Services',
    subtitle: 'Compliant, optimized, proactive',
    color: '#10b981',
    items: [
      'Federal and state tax returns',
      'Delaware franchise tax returns',
      '1099 filings',
      'Business tax registration certificate filings & renewals',
      'Business property statement (Form 571-L)',
      'R&D tax credit',
      'Sales and use tax',
    ],
  },
  {
    id: 'hr',
    icon: '👥',
    title: 'HR, Payroll & Administration',
    subtitle: 'Complete back-office people operations',
    color: '#ec4899',
    items: [
      'Payroll processing',
      'Benefits administration',
      'Recruiting & managing personnel issues',
      'Compensation & sales commission structuring',
      'Employee handbook',
      'Employee Stock Option Plan (ESOP) management',
      'Corporation insurance evaluation & selection',
      'Real estate planning, evaluation & selection',
    ],
  },
]

function Services() {
  useReveal()

  return (
    <div style={{ background: '#fff' }} className="overflow-x-hidden">
      {/* Hero */}
      <div className="relative h-[480px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&auto=format&fit=crop&q=80" alt="Finance" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center center" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(10,22,40,0.72)' }} />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20">
          <span className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--teal)' }}>
            Services
          </span>
          <h1 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Our Services
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Scaled, fixed-fee services — from bookkeeping to CFO advisory — customized to your stage.
          </p>
        </div>
      </div>

      {/* Approach */}
      <section className="py-16" style={{ background: 'var(--gray-50)' }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div data-reveal>
            <div className="w-10 h-0.5 mb-4" style={{ background: 'var(--teal)' }} />
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--navy)' }}>Scaled Services for What You Want & When You Need It</h2>
            <p className="leading-relaxed" style={{ color: 'var(--gray-600)' }}>
              We customize our services to fit your needs. We can complement your existing staff, or you can outsource all your accounting and HR needs to us.
            </p>
          </div>
          <div data-reveal data-delay="100">
            <div className="w-10 h-0.5 mb-4" style={{ background: 'var(--teal)' }} />
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--navy)' }}>Fixed Fee, With No Surprises</h2>
            <p className="leading-relaxed" style={{ color: 'var(--gray-600)' }}>
              Predictable and consistent fees mean you'll be able to accurately budget for your outsourced accounting and HR services. No billing surprises, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {serviceSections.map(({ id, icon, title, subtitle, color, items }, i) => (
            <div
              key={id}
              id={id}
              data-reveal
              data-delay={i * 50}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: '#eef0f5' }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 p-6" style={{ background: 'var(--navy)', borderLeft: `5px solid ${color}` }}>
                <span className="text-3xl">{icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">{title}</h2>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{subtitle}</p>
                </div>
              </div>
              {/* Items */}
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-xs flex-shrink-0" style={{ color }}>●</span>
                      <span className="text-sm leading-snug" style={{ color: 'var(--gray-600)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'var(--navy)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Let's talk about which services are right for your stage and build a custom plan.
          </p>
          <Link to="/contact" className="btn-primary">
            Book a Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
