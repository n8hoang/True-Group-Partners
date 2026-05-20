import { Link } from 'react-router-dom'
import tgpLogo from '../assets/TGP-logo.webp'

function Footer() {
  return (
    <footer style={{ background: '#f8f9fc', borderTop: '1px solid #eef0f5' }} className="text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <img src={tgpLogo} alt="True Group Partners" className="h-12 w-auto mb-5" />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-600)' }}>
            Outsourced finance & accounting for high-growth companies — from startup to IPO.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--teal)' }}>Services</h4>
          <ul className="space-y-2">
            {['CFO Advisory', 'Accounting Operations', 'Financial Modeling', 'Tax Services', 'HR & Payroll', 'Audit Support'].map(s => (
              <li key={s}>
                <Link to="/services" className="text-sm transition-colors hover:text-teal-600" style={{ color: 'var(--gray-600)' }}>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--teal)' }}>Company</h4>
          <ul className="space-y-2">
            {[['About Us', '/overview'], ['Clients', '/featured'], ['Careers', '/employment'], ['Contact', '/contact']].map(([name, path]) => (
              <li key={name}>
                <Link to={path} className="text-sm transition-colors" style={{ color: 'var(--gray-600)' }}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--teal)' }}>Contact</h4>
          <address className="not-italic text-sm space-y-2" style={{ color: 'var(--gray-600)' }}>
            <p>3680 Wilshire Blvd<br />Suite P04-1093<br />Los Angeles, CA 90010</p>
            <p>
              <a href="tel:+18188228310" className="hover:underline" style={{ color: 'var(--gray-600)' }}>818.822.8310</a>
            </p>
            <p>
              <a href="mailto:info@truegrouppartners.com" className="hover:underline" style={{ color: 'var(--gray-600)' }}>info@truegrouppartners.com</a>
            </p>
          </address>
          <Link to="/contact" className="btn-primary mt-6" style={{ fontSize: '0.82rem', padding: '10px 18px' }}>
            Book a Call →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #eef0f5', background: '#eef0f5' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs" style={{ color: 'var(--gray-400)' }}>
            © {new Date().getFullYear()} True Group Partners. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--gray-400)' }}>
            Outsourced Finance & Accounting · Los Angeles, CA
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
