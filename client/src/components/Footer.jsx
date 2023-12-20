import { Link } from "react-router-dom"
import tgpLogo from '../assets/TGP-logo.webp'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-10 flex items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 text-blue-500">Contact Us</h2>
          <address className="not-italic">
            3680 Wilshire Blvd, Suite P04-1093<br />
            Los Angeles CA 90010<br />
            <a href="tel:+18188228310" className="hover:text-blue-300">Phone: 818.822.8310</a><br />
            <a href="mailto:info@truegrouppartners.com" className="hover:text-blue-300">info@truegrouppartners.com</a>
          </address>
        </div>
        <img src={tgpLogo} className="h-auto w-48 md:w-72" />
      </div>
      <div className="p-2 bg-gray-900 flex flex-wrap justify-center gap-3 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to='/employment' className="hover:underline">Employment</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/featured" className="hover:underline">Featured Clients</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </div>
      <div className="bg-black text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 text-center">
          <p>True Group Partners Copyright © 2023 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
