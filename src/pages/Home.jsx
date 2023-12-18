import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import ostealImg from '../assets/osteal-therapeutics.png'
import novaSignalImg from '../assets/novaSignal.png'
import batteryBizImg from '../assets/batteryBiz.png'
import pgtImg from '../assets/pgtlogo.png'

const clientList = [
  {
    name: 'Osteal Therapeutics',
    link: 'https://www.ostealtx.com/',
    img: ostealImg
  },
  {
    name: 'PGT',
    link: 'https://www.pgt.com/',
    img: pgtImg
  },
  {
    name: 'batterybiz',
    link: 'https://www.battery-biz.com/',
    img: batteryBizImg
  },
  {
    name: 'NovaSignal',
    link: 'https://www.novasignal.com/',
    img: novaSignalImg
  },

]

function Home() {
  return (
    <div className='flex flex-col justify-center items-center text-center bg-slate-500'>
      <Carousel />
      <section className='mx-20 my-16 text-white'>
        <h1 className='text-xl font-extrabold mb-5' > OUTSOURCED FINANCE AND ACCOUNTING SERVICES</h1>
        <h2 className='text-md font-extrabold mb-5'>Finance - Accounting - Taxes - HR - Payroll - Insurance - Call Center</h2>
        <p className='text-md mb-2'>Focus on growing your business. Gain expertise. Reduce costs.</p>
        <p className='text-md'>True Group Partners provide back office services with our experienced team of professionals, including accounting, taxes, HR and payroll, insurance and call center services. No matter what your size or fund-raising stage, from start-up and seed round to public company, we can customize our services to fit your needs at every stage of your company's life cycle.</p>
      </section>
      <div className='h-1 w-4/5 border-blue-500 border-b-2 mb-7'> </div>
      <section className='mx-20 my-15 '>
        <h1 className='text-2xl font-extrabold mb-5 text-white'> Clients</h1>
        <div className='lg:flex '>
        {clientList.map(({ link, img }) => (
          <div key={link}className='border-2 my-6 border-black border-solid rounded-xl overflow-hidden lg:mx-4'>
            <Link to={link} target='_blank' rel="noopener noreferrer">
              <img src={img} />
            </Link>
          </div>
        ))}
        </div>
        <button className='p-2 mt-6 mb-4 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-400'>
        <Link to='/featured'>See Our Featured Clients List </Link>
        </button>
      </section>
      <section className='bg-blue-500 mt-10 w-full h-[400px] text-white flex flex-col justify-center items-center md:h-[300px]'>
          <h1 className='mx-20 mt-10 text-4xl font-thin'> Look No Further. Get Started Today</h1>
          <button className='border-white border-2 py-3 px-4 my-10 hover:bg-blue-400'>
            <Link to='/contact'>
              Contact Us For a Free Consultation
            </Link>
          </button>
      </section>
    </div>
  )
}

export default Home