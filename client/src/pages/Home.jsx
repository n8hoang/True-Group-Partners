import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Client logos for ticker
import ostealImg from '../assets/Osteal-Therapeutics.webp'
import novaSignalImg from '../assets/Nova-Signal-2.webp'
import batteryBizImg from '../assets/battery-biz.webp'
import pgtImg from '../assets/pgtlogo.webp'
import kairosImg from '../assets/Kairos.webp'
import k50Img from '../assets/K50-Ventures.webp'
import bilImg from '../assets/Bilt-Rewards.webp'
import operaImg from '../assets/OperaBio_Logo_Final.webp'
import neurolutionsImg from '../assets/Neurolutions.webp'
import helix from '../assets/helix-3.webp'
import extricoImg from '../assets/Extrico-Health.webp'
import bibawoImg from '../assets/BIBAWO-Medical.webp'
import brightUroImg from '../assets/Bright-Uro.webp'
import blklabImg from '../assets/blklab.webp'

const allLogos = [
  ostealImg, novaSignalImg, batteryBizImg, pgtImg,
  kairosImg, k50Img, bilImg, operaImg, neurolutionsImg,
  helix, extricoImg, bibawoImg, brightUroImg, blklabImg,
]

const services = [
  {
    icon: '📊',
    title: 'CFO & Strategic Finance',
    desc: 'Fractional and interim CFO leadership — budgeting, forecasting, board reporting, fundraising support, and cash flow strategy.',
    items: ['Financial Modeling', 'Investor & Board Reporting', 'Fundraising Support', 'KPI Dashboards', 'Cap Table Management'],
  },
  {
    icon: '📒',
    title: 'Accounting Operations',
    desc: 'Full-stack outsourced accounting — from day-to-day bookkeeping to monthly close, AP/AR, and financial statement preparation.',
    items: ['Bookkeeping & AP/AR', 'Monthly Close', 'Bank Reconciliations', 'Cash Flow Analysis', 'Financial Statements'],
  },
  {
    icon: '🚀',
    title: 'Startup & Growth Support',
    desc: 'Built for venture-backed companies — we help you build the finance infrastructure to scale from seed to Series C and beyond.',
    items: ['409A Coordination', 'ESOP / Equity Admin', 'Audit Preparation', 'Systems Implementation', 'Due Diligence Support'],
  },
  {
    icon: '👥',
    title: 'HR, Payroll & Tax',
    desc: 'Handle the back-office complexity so your team can focus on growth. Full HR, payroll, and tax compliance from a single partner.',
    items: ['Payroll Processing', 'Benefits Administration', 'Federal & State Tax', 'R&D Tax Credits', 'HR Policies & Compliance'],
  },
]

const stats = [
  { number: '25+', label: 'Years of Experience' },
  { number: '100+', label: 'Companies Supported' },
  { number: '$100M+', label: 'Fundraising Supported' },
  { number: 'Seed → IPO', label: 'Full Company Lifecycle' },
]

const testimonials = [
  {
    quote: 'True Group Partners became an indispensable part of our finance team. Their CFO support helped us close our Series B with confidence.',
    author: 'CEO, MedTech Startup',
    industry: 'Medical Devices',
  },
  {
    quote: "They built our entire accounting infrastructure from scratch. Investor-ready financials, monthly close, the works — exactly what we needed.",
    author: 'Co-Founder, SaaS Company',
    industry: 'Technology',
  },
  {
    quote: 'The team knows startup finance inside and out. They supported our due diligence process and made the acquisition seamless.',
    author: 'CFO, Consumer Brand',
    industry: 'Consumer',
  },
]

const industries = [
  { icon: '🧬', label: 'MedTech & BioTech' },
  { icon: '💡', label: 'Venture-Backed Startups' },
  { icon: '🏢', label: 'Consumer Brands' },
  { icon: '📱', label: 'SaaS & Technology' },
  { icon: '🏦', label: 'Financial Services' },
  { icon: '🏭', label: 'Manufacturing' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const delay = e.target.dataset.delay || 0
          setTimeout(() => e.target.classList.add('revealed'), parseInt(delay))
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Home() {
  useReveal()

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ────────────────────────────────────── */}
      <section className="hero-gradient relative min-h-screen flex items-center pt-20">
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Teal glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--teal) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="animate-fade-up flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: 'var(--teal)' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--teal)' }}>
                Outsourced Finance & Accounting
              </span>
            </div>

            <h1 className="animate-fade-up text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, animationDelay: '0.1s' }}>
              Finance & Accounting<br />
              <span style={{ color: 'var(--teal)' }}>for High-Growth Companies</span>
            </h1>

            <p className="animate-fade-up mb-10 text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', animationDelay: '0.2s' }}>
              We help startups and growing businesses scale with accounting, strategic finance, HR, and CFO leadership —
              from your first bookkeeper to your pre-IPO close.
            </p>

            <div className="animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact" className="btn-primary">
                Book a Free Consultation →
              </Link>
              <Link to="/services" className="btn-outline">
                View Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-up mt-12 flex flex-wrap gap-6" style={{ animationDelay: '0.4s' }}>
              {['Big 4 Alumni Team', 'Startup → Public Co.', 'Fixed-Fee Pricing'].map(badge => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(0,180,160,0.2)', border: '1px solid var(--teal)' }}>
                    <span style={{ color: 'var(--teal)', fontSize: '10px' }}>✓</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────── */}
      <section style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ number, label }, i) => (
            <div key={label} data-reveal data-delay={i * 100} className="text-center">
              <div className="stat-number mb-1">{number}</div>
              <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOGO TICKER ─────────────────────────────── */}
      <section className="py-10 border-y" style={{ borderColor: '#eef0f5', background: 'var(--gray-50)' }}>
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gray-400)' }}>
            Trusted by Leading Companies
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="logo-ticker-track">
            {[...allLogos, ...allLogos].map((src, i) => (
              <div key={i} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ width: '120px', height: '50px' }}>
                <img src={src} alt="" className="max-h-10 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────── */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>What We Do</span>
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--navy)' }}>Your Complete Finance Team</h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              From day-to-day accounting to strategic CFO leadership — one partner for all your finance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon, title, desc, items }, i) => (
              <div
                key={title}
                data-reveal
                data-delay={i * 80}
                className="service-card p-8 rounded-xl border"
                style={{ borderColor: '#eef0f5', background: '#fff' }}
              >
                <div className="text-3xl mb-4">{icon}</div>
                <div className="w-10 h-0.5 mb-4" style={{ background: 'var(--teal)' }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--navy)' }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--gray-600)' }}>{desc}</p>
                <ul className="space-y-1.5">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--gray-600)' }}>
                      <span style={{ color: 'var(--teal)', fontWeight: 700 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
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

      {/* ── INDUSTRIES ──────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--gray-50)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>Industries We Serve</span>
              <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--navy)' }}>
                Deep Expertise Where It Matters Most
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--gray-600)' }}>
                We've built specialized knowledge in the sectors where financial complexity is highest.
                Whether you're navigating FDA compliance, managing investor expectations, or preparing for an exit —
                we've done it before.
              </p>
              <Link to="/featured" className="btn-primary">
                View Our Clients →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" data-reveal data-delay="150">
              {industries.map(({ icon, label }) => (
                <div
                  key={label}
                  className="service-card p-5 rounded-xl text-center border"
                  style={{ borderColor: '#eef0f5', background: '#fff' }}
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--navy)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ─────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>Why TGP</span>
            <h2 className="text-4xl font-bold text-white mb-4">The TGP Difference</h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We're not just a bookkeeping service. We're the finance partner that scales with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Senior-Level Talent',
                desc: 'Our team includes Big 4 CPAs, MBAs, and finance professionals with decades of experience — not junior staff.',
                icon: '🏆',
              },
              {
                title: 'Startup DNA',
                desc: 'We\'ve supported companies from pre-seed through IPO. We know what investors expect at every stage.',
                icon: '🌱',
              },
              {
                title: 'Scalable & Fixed-Fee',
                desc: 'Predictable pricing that scales with your business. No billing surprises, no scope creep.',
                icon: '📈',
              },
            ].map(({ title, desc, icon }, i) => (
              <div key={title} data-reveal data-delay={i * 100}
                className="p-8 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <div className="w-8 h-0.5 mb-4" style={{ background: 'var(--teal)' }} />
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>Client Voices</span>
            <h2 className="text-4xl font-bold" style={{ color: 'var(--navy)' }}>What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, author, industry }, i) => (
              <div
                key={i}
                data-reveal
                data-delay={i * 100}
                className="insight-card rounded-xl"
                style={{ borderColor: 'var(--teal)' }}
              >
                <div className="text-3xl mb-4" style={{ color: 'var(--teal)' }}>"</div>
                <p className="text-base leading-relaxed mb-6 italic" style={{ color: 'var(--gray-600)' }}>{quote}</p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>{author}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--teal)' }}>{industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────── */}
      <section style={{ background: 'var(--teal)' }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" data-reveal>
            Ready to Build a World-Class Finance Function?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }} data-reveal data-delay="100">
            Schedule a free consultation to see how TGP can support your growth.
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
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
