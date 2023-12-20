import { Link } from "react-router-dom"
import workImg from '../assets/work.webp'

function Overview() {
  return (
    <div className="bg-slate-500 text-white ">
      <div className="relative h-[400px] w-screen overflow-hidden">
        <img src={workImg} className='absolute z-0 left-0 top-0 w-full h-full object-cover' />
      </div>
      <div className="max-w-4xl mx-auto p-8">
        <p className=" text-lg mb-4">
          True Group Partners is a boutique professional services firm providing outsourced finance and accounting services. We believe you should focus on growing your business while our experienced team takes care of all your back office needs. We can complement your existing staff or be your entire accounting and HR team. The benefits of using our services include:
        </p>
        <ul className="list-disc space-y-2 mb-6 pl-5 ">
          <li>Allows businesses to tap into the resources and expertise of our experienced finance and accounting professionals (Big 4 CPAs and MBAs)</li>
          <li>Frees up founders/executives time and company resources to focus on business strategies and goals</li>
          <li>Ability to efficiently and economically scale your finance, accounting and administrative functions to support the growth of your business</li>
          <li>Establish and maintain preferred banking, payroll, benefits, HR, legal and investor relationships</li>
          <li>Paperless online bill payment and bookkeeping</li>
          <li>Eliminates the hiring hassle and risk in these areas as it can be particularly challenging to find top notch finance and accounting personnel who understand the needs</li>
        </ul>
        <h3 className="text-lg font-semibold mb-3">Partners:</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6 ">
          <li>John Hoang has close to 3 decades of working in the areas of finance, accounting and operations, including public accounting (Arthur Andersen LLP), and companies in the technology, digital media and manufacturing sectors ranging from start-ups and emerging companies to public companies. John has been involved in many M&A deals and raised tens of millions of dollars in equity and debt financing.</li>
          <li>Sarah Boettger, CPA has more than 10 years of experience providing contoller services, FP&A and government grants support. Sarah is a former PwC associate and is a Certified Public Accountant.</li>
          <li>Financial Planning and Analysis Manager (Anderson MBA)</li>
          <li>HR Managers (HR certified with PHR and SHRM-CP)</li>
        </ul>
        <div className="flex justify-center py-8">
          <Link to='/contact' className=" bg-blue-500 text-white px-6 py-4 rounded-full hover:bg-blue-400">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Overview