import React from 'react'
import EmploymentForm from '../components/EmploymentForm'

function Employment() {
  return (
    <section className='flex flex-col items-center justify-center p-8 bg-slate-500 text-white h-[900px] overflow-x-hidden'>
      <h1 className="text-3xl font-semibold text-white mb-8 mt-14 text-center"> We are constantly looking for the right individuals to join the team of staff accountants, senior accountants, controllers and CFOs.</h1>
      <EmploymentForm/>
    </section>
  )
}

export default Employment