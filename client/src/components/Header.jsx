import React, { useState, useEffect } from 'react'
import tgpIcon from '../assets/TGP-logo.webp'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import CtaLink from './CtaLink'

const links = [
  { id: 1, link: '/', name: 'Home' },
  { id: 2, link: '/overview', name: 'About Us' },
  { id: 3, link: '/services', name: 'Services' },
  { id: 4, link: '/life-sciences', name: 'Life Sciences' },
  { id: 5, link: '/featured', name: 'Clients' },
  { id: 6, link: '/employment', name: 'Careers' },
  { id: 7, link: '/contact', name: 'Contact' },
]

function Header() {
  const currentPage = useLocation().pathname
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : ''
  }, [nav])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(0,0,0,0.04)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`}>
          <Link to="/" onClick={() => setNav(false)} className="flex items-center">
            <img src={tgpIcon} alt="True Group Partners" className={`w-auto transition-all duration-300 ${scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ id, link, name }) => (
              <Link
                key={id}
                to={link}
                className={`nav-link-light ${currentPage === link ? 'active' : ''}`}
              >
                {name}
              </Link>
            ))}
            <CtaLink topic="consultation" location="header" className="btn-primary ml-4"
              style={{ padding: scrolled ? '8px 18px' : '10px 22px', fontSize: '0.85rem' }}>
              Free Consultation
            </CtaLink>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setNav(!nav)}
            className="lg:hidden z-50 text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${nav ? 'open' : ''}`}>
        {links.map(({ id, link, name }) => (
          <Link
            key={id}
            to={link}
            onClick={() => setNav(false)}
            className="mobile-nav-link"
          >
            {name}
          </Link>
        ))}
        <span onClick={() => setNav(false)}>
          <CtaLink topic="consultation" location="mobile_menu" className="btn-primary mt-4">
            Free Consultation
          </CtaLink>
        </span>
      </div>
    </>
  )
}

export default Header
