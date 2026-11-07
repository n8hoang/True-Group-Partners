import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {
  TbChartLine, TbCalculator, TbUsers, TbMicroscope, TbFileCertificate, TbRocket, TbDeviceLaptop,
  TbShoppingBag, TbBuildingFactory2, TbUserCheck, TbTrendingUp, TbAdjustmentsHorizontal, TbArrowRight, TbCheck,
} from 'react-icons/tb'
import CtaLink from '../components/CtaLink'
import useReveal from '../helpers/useReveal'
import { useSeo, organizationJsonLd } from '../helpers/seo'

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
    Icon: TbChartLine,
    title: 'CFO & Strategic Finance',
    desc: 'Fractional and interim CFO leadership, financial planning, cash flow management, investor and board reporting, fundraising support, and financial modeling.',
    items: ['Financial Modeling & Forecasting', 'Investor & Board Reporting', 'Fundraising Support', 'Cash Flow Planning', 'Financial Strategy & KPI Reporting'],
    link: '/services#cfo',
  },
  {
    Icon: TbCalculator,
    title: 'Outsourced Accounting & Controller Services',
    desc: 'Comprehensive outsourced accounting services, from day-to-day bookkeeping and monthly close to financial reporting and controller-level oversight.',
    items: ['Bookkeeping & AP/AR', 'Monthly Close', 'Bank Reconciliations', 'Financial Statements', 'Controller Services', 'Grant Accounting'],
    link: '/services#accounting',
  },
  {
    Icon: TbUsers,
    title: 'HR, Payroll & Tax Coordination',
    desc: 'HR and payroll support to help businesses manage administrative responsibilities, employee-related processes, and tax coordination.',
    items: ['Payroll Administration', 'HR Support & Policies', 'Benefits Coordination', 'Payroll Compliance Support', 'Tax Coordination'],
    link: '/services#hr',
  },
]

// TODO(TGP): verify all four figures internally before publishing.
const stats = [
  { number: '30+', label: 'Years of Experience' },
  { number: '200+', label: 'Companies Supported' },
  { number: '$100M+', label: 'Fundraising Supported' },
  { number: 'Seed → IPO', label: 'Full Company Lifecycle' },
]

// TODO(TGP): confirm each is an actual, approved client statement before launch.
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
    industry: 'Consumer Products',
  },
]

const industries = [
  { Icon: TbMicroscope, label: 'Life Sciences, Biotech & MedTech' },
  { Icon: TbFileCertificate, label: 'NIH/SBIR Grant-Funded Companies' },
  { Icon: TbRocket, label: 'Venture-Backed Startups' },
  { Icon: TbDeviceLaptop, label: 'SaaS & Technology' },
  { Icon: TbShoppingBag, label: 'Consumer Brands' },
  { Icon: TbBuildingFactory2, label: 'Manufacturing' },
]

const grantHighlights = [
  'Grant-specific expense tracking',
  'Direct & indirect cost allocation',
  'Payroll & employee time allocation',
  'Grant budget-to-actual reporting',
  'Audit & compliance readiness',
  'Multiple grants and funding sources',
]

const differentiators = [
  {
    Icon: TbUserCheck,
    title: 'Experienced Finance Professionals',
    desc: 'Our team brings CPA, controller, and CFO-level experience to help businesses manage complex financial operations and make informed decisions.',
  },
  {
    Icon: TbTrendingUp,
    title: 'Built for Growing Companies',
    desc: 'From early-stage businesses to established organizations, our services evolve with your accounting, reporting, and strategic finance needs.',
  },
  {
    Icon: TbAdjustmentsHorizontal,
    title: 'Predictable & Scalable Services',
    desc: 'Clearly defined service scopes, consistent communication, and flexible engagement structures designed around your business.',
  },
]

const credibility = ['Big Four Experience', 'Grant Accounting Expertise', 'Fixed-Fee Pricing Options', 'Seed to IPO Experience']

function IconBadge({ Icon, dark = false, size = 'md' }) {
  const box = size === 'sm' ? 'w-11 h-11' : 'w-12 h-12'
  return (
    <div className={`${box} rounded-lg flex items-center justify-center flex-shrink-0`}
      style={{ background: dark ? 'rgba(0,180,160,0.14)' : 'var(--teal-pale)', border: dark ? '1px solid rgba(0,180,160,0.35)' : 'none' }}>
      <Icon size={size === 'sm' ? 22 : 24} color="var(--teal)" strokeWidth={1.6} />
    </div>
  )
}

function Home() {
  useReveal()
  useSeo({
    title: 'Outsourced Accounting & CFO Services for Growing Companies | True Group Partners',
    description: 'True Group Partners provides outsourced accounting, controller, fractional CFO, HR and payroll support for growing companies in technology, life sciences, manufacturing, consumer products and more.',
    path: '/',
    jsonLd: organizationJsonLd,
  })

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ────────────────────────────────────── */}
      <section className="hero-gradient relative md:min-h-screen flex items-center pt-16 md:pt-20">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--teal) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="animate-fade-up flex items-center gap-3 mb-5 md:mb-6">
              <div className="w-8 h-px" style={{ background: 'var(--teal)' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--teal)' }}>
                True Group Partners
              </span>
            </div>

            <h1 className="animate-fade-up text-white mb-5 md:mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 3.9rem)', fontWeight: 700, animationDelay: '0.1s' }}>
              Outsourced Accounting & CFO Services<br className="hidden sm:block" />{' '}
              <span style={{ color: 'var(--teal)' }}>for Growing Companies</span>
            </h1>

            <p className="animate-fade-up mb-4 text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '600px', animationDelay: '0.2s' }}>
              From day-to-day accounting and financial reporting to strategic CFO leadership, True Group Partners provides
              experienced financial professionals to help businesses operate efficiently, make informed decisions, and scale with confidence.
            </p>
            <p className="animate-fade-up mb-8 md:mb-10 text-sm md:text-base font-medium leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', animationDelay: '0.25s' }}>
              Serving companies across technology, life sciences, manufacturing, consumer products, and other growing industries.
            </p>

            <div className="animate-fade-up flex flex-wrap gap-3 md:gap-4" style={{ animationDelay: '0.3s' }}>
              <CtaLink topic="consultation" location="home_hero" className="btn-primary">
                Book a Free Consultation <TbArrowRight />
              </CtaLink>
              <Link to="/services" className="btn-outline">
                Explore Our Services
              </Link>
            </div>

            <div className="animate-fade-up mt-10 md:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3" style={{ animationDelay: '0.4s' }}>
              {credibility.map(badge => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,180,160,0.2)', border: '1px solid var(--teal)' }}>
                    <TbCheck size={11} color="var(--teal)" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.72)' }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────── */}
      <section style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ number, label }, i) => (
            <div key={label} data-reveal data-delay={i * 100} className="text-center">
              <div className="stat-number mb-1" style={number.length > 6 ? { fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', whiteSpace: 'nowrap' } : undefined}>{number}</div>
              <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOGO TICKER ─────────────────────────────── */}
      <section className="py-8 md:py-10 border-y" style={{ borderColor: '#eef0f5', background: 'var(--gray-50)' }}>
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gray-400)' }}>
            Trusted by Leading Companies
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="logo-ticker-track">
            {[...allLogos, ...allLogos].map((src, i) => (
              <div key={i} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ width: '120px', height: '50px' }}>
                <img src={src} alt="" loading="lazy" className="max-h-10 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>What We Do</span>
            <h2 className="section-title mb-4" style={{ color: 'var(--navy)' }}>Your Complete Finance & Accounting Team</h2>
            <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              From day-to-day accounting to strategic CFO leadership — one partner for all your finance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {services.map(({ Icon, title, desc, items, link }, i) => (
              <div key={title} data-reveal data-delay={i * 80}
                className="service-card p-6 md:p-8 rounded-xl border flex flex-col"
                style={{ borderColor: '#eef0f5', background: '#fff' }}>
                <IconBadge Icon={Icon} />
                <div className="w-10 h-0.5 my-4" style={{ background: 'var(--teal)' }} />
                <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: 'var(--navy)' }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--gray-600)' }}>{desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--gray-600)' }}>
                      <TbCheck size={15} color="var(--teal)" strokeWidth={2.5} className="flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={link} className="mt-auto text-sm font-semibold inline-flex items-center gap-1" style={{ color: 'var(--teal)' }}>
                  Learn more <TbArrowRight />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12" data-reveal>
            <Link to="/services" className="btn-primary">
              Explore All Services <TbArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED EXPERTISE: LIFE SCIENCES ───────── */}
      <section className="section-pad" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div data-reveal>
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>
                Featured Expertise
              </span>
              <h2 className="section-title text-white mb-5 md:mb-6">
                Life Sciences & Grant Accounting
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.72)' }}>
                TGP provides specialized accounting, controller, and CFO support to biotech, medtech, and life sciences companies,
                including businesses receiving NIH, SBIR/STTR, and other government funding.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                From grant expense tracking and payroll allocation to financial reporting and investor readiness, we help companies
                establish the financial infrastructure needed to support growth and funding requirements.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link to="/life-sciences" className="btn-primary">
                  Explore Life Sciences Services <TbArrowRight />
                </Link>
                <Link to="/life-sciences#readiness-review" className="btn-outline">
                  Request a Complimentary Grant Accounting Review
                </Link>
              </div>
            </div>
            <div data-reveal data-delay="150" className="p-6 md:p-8 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-start gap-4 mb-6">
                <IconBadge Icon={TbFileCertificate} dark />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">NIH, SBIR/STTR & Government Grant Accounting</h3>
                  <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    Receiving a grant creates accounting requirements many early-stage companies aren't prepared to manage.
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {grantHighlights.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    <TbCheck size={16} color="var(--teal)" strokeWidth={2.5} className="flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--gray-50)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div data-reveal>
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>Industries We Serve</span>
              <h2 className="section-title mb-5 md:mb-6" style={{ color: 'var(--navy)' }}>
                Expertise Tailored to Your Industry
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--gray-600)' }}>
                We support growing companies across a range of industries, providing accounting and financial expertise tailored to
                their operational needs, reporting requirements, and stage of growth.
              </p>
              <Link to="/featured" className="btn-primary">
                View Our Clients <TbArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4" data-reveal data-delay="150">
              {industries.map(({ Icon, label }) => (
                <div key={label} className="service-card p-4 md:p-5 rounded-xl border flex flex-col items-center text-center"
                  style={{ borderColor: '#eef0f5', background: '#fff' }}>
                  <div className="mb-3"><IconBadge Icon={Icon} size="sm" /></div>
                  <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--navy)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TGP ─────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>Why TGP</span>
            <h2 className="section-title text-white mb-4">The TGP Difference</h2>
            <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              An experienced finance partner that scales with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {differentiators.map(({ title, desc, Icon }, i) => (
              <div key={title} data-reveal data-delay={i * 100} className="p-6 md:p-8 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <IconBadge Icon={Icon} dark />
                <div className="w-8 h-0.5 my-4" style={{ background: 'var(--teal)' }} />
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16" data-reveal>
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>Client Voices</span>
            <h2 className="section-title" style={{ color: 'var(--navy)' }}>What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {testimonials.map(({ quote, author, industry }, i) => (
              <figure key={i} data-reveal data-delay={i * 100} className="insight-card rounded-xl" style={{ borderColor: 'var(--teal)' }}>
                <div className="text-3xl mb-3 md:mb-4" style={{ color: 'var(--teal)' }}>"</div>
                <blockquote className="text-base leading-relaxed mb-5 md:mb-6 italic" style={{ color: 'var(--gray-600)' }}>{quote}</blockquote>
                <figcaption>
                  <p className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>{author}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--teal)' }}>{industry}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section style={{ background: 'var(--teal)' }} className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title text-white mb-4" data-reveal>
            Get the Accounting and CFO Support Your Business Needs to Grow
          </h2>
          <p className="text-base md:text-lg mb-8" style={{ color: 'rgba(255,255,255,0.88)' }} data-reveal data-delay="100">
            Whether you need reliable monthly accounting, strategic CFO leadership, HR and payroll support, or specialized financial
            expertise, let's discuss how TGP can help.
          </p>
          <div data-reveal data-delay="200">
            <CtaLink topic="consultation" location="home_final_cta" className="btn-white">
              Schedule a Complimentary Consultation <TbArrowRight />
            </CtaLink>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
