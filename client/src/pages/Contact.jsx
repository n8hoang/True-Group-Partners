import React from 'react'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <section className='flex flex-col items-center p-8 bg-slate-500 text-white h-full'>
      <div className='w-full pt-20'>
        <address className="text-3xl font-semibold text-white mb-8 text-center">
          3680 Wilshire Blvd, Suite P04-1093<br />
          Los Angeles CA 90010<br />
          <a href="tel:+18188228310" className="hover:text-blue-300">Phone: 818.822.8310</a><br />
          <a href="mailto:info@truegrouppartners.com" className="hover:text-blue-300">info@truegrouppartners.com</a>
        </address>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact