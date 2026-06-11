import React from 'react'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div style={{ background: '#fff' }} className="overflow-x-hidden">
      {/* Hero */}
      <div className="relative h-[480px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80" alt="Contact" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center center" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(10,22,40,0.72)' }} />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20">
          <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--teal)' }}>Contact</span>
          <h1 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Let's Talk
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Schedule a free consultation and learn how TGP can become your finance partner.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--navy)' }}>Get In Touch</h2>

            <div className="space-y-6 mb-10">
              {[
                { icon: '📍', label: 'Office', value: '3680 Wilshire Blvd, Suite 1093\nLos Angeles, CA 90010' },
                { icon: '📞', label: 'Phone', value: '818.822.8310', href: 'tel:+18188228310' },
                { icon: '✉️', label: 'Email', value: 'info@truegrouppartners.com', href: 'mailto:info@truegrouppartners.com' },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--teal-pale)' }}>
                    <span>{icon}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--gray-400)' }}>{label}</p>
                    {href
                      ? <a href={href} className="text-sm hover:underline" style={{ color: 'var(--navy)' }}>{value}</a>
                      : <p className="text-sm whitespace-pre-line" style={{ color: 'var(--navy)' }}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl" style={{ background: 'var(--navy)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-bold mb-3">Why TGP?</h3>
              <ul className="space-y-2">
                {['Free initial consultation', 'Big 4 experienced team', 'Fixed-fee, no surprises', 'Startup to IPO expertise'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
                    <span style={{ color: 'var(--teal)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-8 rounded-2xl border" style={{ borderColor: '#eef0f5' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--navy)' }}>Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
