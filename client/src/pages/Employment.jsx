import React from 'react'
import EmploymentForm from '../components/EmploymentForm'

function Employment() {
  return (
    <div style={{ background: '#fff' }} className="overflow-x-hidden">
      {/* Hero */}
      <div className="relative h-[480px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop&q=80" alt="Careers" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(10,22,40,0.72)' }} />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20">
          <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>Careers</span>
          <h1 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Join Our Team
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.72)' }}>
            We're always looking for talented finance and accounting professionals to join our growing team.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12 p-8 rounded-2xl" style={{ background: 'var(--gray-50)', border: '1px solid #eef0f5' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--navy)' }}>We're Hiring</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--gray-600)' }}>
              We are constantly looking for the right individuals to join the team — staff accountants, senior accountants, controllers, and CFOs.
            </p>
            <p style={{ color: 'var(--gray-600)' }}>
              If you're a finance professional who thrives in a fast-paced, startup-oriented environment and wants to make a real impact for growing companies, we'd love to hear from you.
            </p>
          </div>
          <div className="p-8 rounded-2xl border" style={{ borderColor: '#eef0f5' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--navy)' }}>Apply Now</h3>
            <EmploymentForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Employment
