import React from 'react'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <div className='flex flex-col justify-center items-center text-center bg-slate-500'>
      <Carousel/>
      <div className='mx-20 my-16 '>
        <h1 className='text-xl font-extrabold mb-5' > OUTSOURCED FINANCE AND ACCOUNTING SERVICES</h1>
        <h2 className='text-md font-extrabold mb-5'>Finance - Accounting - Taxes - HR - Payroll - Insurance - Call Center</h2>
        <p className='text-md mb-2'>Focus on growing your business. Gain expertise. Reduce costs.</p>
        <p className='text-md'>True Group Partners provide back office services with our experienced team of professionals, including accounting, taxes, HR and payroll, insurance and call center services. No matter what your size or fund-raising stage, from start-up and seed round to public company, we can customize our services to fit your needs at every stage of your company's life cycle.</p>
      </div>
    </div>
  )
}

export default Home