
import sarahImg from '../assets/tgpsarah.jpeg'
import johnImg from '../assets/john-pp.jpeg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

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

const team = [
  {
    name: 'John Hoang',
    title: 'Managing Partner',
    bio: 'Over three decades of experience across finance, accounting, and operations — including Big 6 public accounting at Arthur Andersen. John has led companies from startup through public markets in technology, digital media, and manufacturing, and has raised tens of millions in equity and debt financing.',
    tags: ['M&A Advisory', 'Capital Raising', 'CFO Services', 'Strategic Finance'],
    photo: johnImg,
  },
  {
    name: 'Sarah Boettger, CPA',
    title: 'Partner',
    bio: 'A former PwC associate with 10+ years providing Controllership, CFO services, FP&A, and government grants support. Sarah is a Certified Public Accountant with deep experience in financial reporting, compliance, and building finance infrastructure for growing companies.',
    tags: ['Controller Services', 'FP&A', 'CPA', 'Government Grants'],
    photo: sarahImg,
  },
  {
    name: 'FP&A Manager',
    title: 'Financial Planning & Analysis',
    bio: 'Kellogg MBA with deep expertise in financial modeling, forecasting, and KPI development. Supports clients in building the dashboards and models investors expect.',
    tags: ['Financial Modeling', 'Forecasting', 'MBA', 'KPI Development'],
    photo: null,
  },
  {
    name: 'HR Leadership',
    title: 'HR & People Operations',
    bio: 'PHR and SHRM-CP certified HR professionals who handle everything from hiring and onboarding to benefits administration and compliance — so you don\'t have to.',
    tags: ['PHR Certified', 'SHRM-CP', 'Benefits', 'Compliance'],
    photo: null,
  },
]

const benefits = [
  {
    icon: '🏆',
    title: 'Big 4 Caliber Talent',
    desc: 'Access to CPAs, MBAs, and finance professionals from top firms — without the Big 4 price tag.',
  },
  {
    icon: '⚡',
    title: 'Frees Executive Time',
    desc: 'Let founders and executives focus on strategy and growth while we handle the back office.',
  },
  {
    icon: '📈',
    title: 'Scales With You',
    desc: 'Efficiently and economically scale your finance function as your business grows.',
  },
  {
    icon: '🤝',
    title: 'Trusted Relationships',
    desc: 'We help establish and maintain preferred banking, payroll, legal, and investor relationships.',
  },
  {
    icon: '💸',
    title: 'Fixed-Fee Pricing',
    desc: 'Predictable costs with no billing surprises. Know exactly what you\'re paying every month.',
  },
  {
    icon: '🔒',
    title: 'Eliminates Hiring Risk',
    desc: 'Skip the challenge of finding top-notch finance talent who understand startup needs.',
  },
]

function Overview() {
  useReveal()

  return (
    <div className="overflow-x-hidden" style={{ background: '#fff' }}>
      {/* Hero */}
      <div className="relative h-[480px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&auto=format&fit=crop&q=80" alt="About TGP" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(10,22,40,0.72)' }} />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20">
          <span className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--teal)' }}>About Us</span>
          <h1 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Who We Are
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.72)' }}>
            A professional services firm providing outsourced finance and accounting — built for companies that demand excellence.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>Our Mission</span>
            <h2 className="text-3xl font-bold mb-5" style={{ color: 'var(--navy)' }}>
              Your Back Office, Elevated
            </h2>
            <p className="leading-relaxed text-lg mb-5" style={{ color: 'var(--gray-600)' }}>
              True Group Partners is a professional services firm providing outsourced finance and accounting services.
              We believe you should focus on growing your business while our experienced team takes care of all your back office needs.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--gray-600)' }}>
              We can complement your existing staff or be your entire accounting and HR team — from your first hire to your pre-IPO close.
              No matter your size or funding stage, we customize our services to fit every stage of your company's lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4" data-reveal data-delay="150">
            {benefits.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--gray-50)', border: '1px solid #eef0f5' }}>
                <div className="text-2xl flex-shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--navy)' }}>{title}</h4>
                  <p className="text-sm leading-snug" style={{ color: 'var(--gray-600)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ background: 'var(--gray-50)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>Our Team</span>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--navy)' }}>People Buy the Team</h2>
            <p className="mt-3 text-lg max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Our leadership brings Big 6, MBA, and C-suite experience directly to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map(({ name, title, bio, tags, photo }, i) => (
              <div
                key={name}
                data-reveal
                data-delay={i * 80}
                className="p-7 rounded-2xl border"
                style={{ background: '#fff', borderColor: '#eef0f5', borderTop: '3px solid var(--teal)' }}
              >
                {photo ? (
                  <img
                    src={photo}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                    style={{ objectPosition: 'center top' }}
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4"
                    style={{ background: 'var(--teal-pale)' }}>
                    👤
                  </div>
                )}
                <h3 className="text-xl font-bold mb-0.5" style={{ color: 'var(--navy)' }}>{name}</h3>
                <p className="text-sm font-medium mb-4" style={{ color: 'var(--teal)' }}>{title}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--gray-600)' }}>{bio}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'var(--teal-pale)', color: 'var(--teal)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'var(--navy)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Schedule a free consultation and find out how TGP can become your finance team.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Overview
