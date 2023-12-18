import financeImg from '../assets/finance.webp'

function Services() {
  return (
    <div className="bg-slate-500 text-white ">
      <div className="relative h-[400px] w-screen overflow-hidden">
        <img src={financeImg} className='absolute z-0 left-0 top-0 w-full h-full object-cover' />
      </div>
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Our Approach:</h2>
        <p className="mb-2 font-bold">
          SCALED SERVICES FOR WHAT YOU WANT & WHEN YOU NEED IT.
        </p>
        <p className="mb-4">
          We customize our services to fit your needs. We can complement your existing staff, or you can outsource all your accounting and HR needs to us.
        </p>
        <p className="font-bold mb-2">
          FIXED FEE, WITH NO SURPRISES.
        </p>
        <p className="mb-4">
          Predictable and consistent fees mean you'll be able to accurately budget for your outsourced accounting services and HR services.
        </p>
        <h3 className="text-2xl font-semibold mb-3">Accounting:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Bookkeeping</li>
          <li>Bank reconciliations</li>
          <li>Cash flow analysis and forecasting</li>
          <li>Working capital management</li>
          <li>Accounts payable processing</li>
          <li>Signatory authority on bank accounts</li>
          <li>Accounts receivable processing</li>
          <li>Credit and collections</li>
          <li>Financial statement preparation</li>
          <li>Debt covenant calculations and compliance</li>
          <li>Assistance with establishing preferred banking, legal, payroll, benefits, and HR relationships</li>
          <li>Management and investor reporting</li>
          <li>Accounting system hosting</li>
          <li>Accounting system migration</li>
          <li>Accounting policies and procedures manual</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-3">Financial Advisory:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Outsourced part-time and interim CFO / Controller</li>
          <li>Financial modeling - budgets, forecasts and projections</li>
          <li>Equity financing</li>
          <li>Venture debt sourcing, negotiation and selection</li>
          <li>Strategic planning</li>
          <li>Mergers and acquisitions support</li>
          <li>KPI dashboard development and management</li>
          <li>Data mining</li>
          <li>Business intelligence</li>
          <li>Cap table management</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-3">Audit and Transaction Support:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Capital raise advisory, due diligence and pitch decks</li>
          <li>Internal audit</li>
          <li>Audit preparation and support</li>
          <li>M&A advisory, due diligence and pitch decks</li>
          <li>Other transaction support</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-3">Tax:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Federal and state tax returns</li>
          <li>Delaware franchise tax returns</li>
          <li>1099 filings</li>
          <li>Business tax registration certificate filings and renewals</li>
          <li>Business property statement form 571-L</li>
          <li>R&D tax credit</li>
          <li>Sales and use tax</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-3">Human Resources and Administration:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Recruiting and managing personnel issues</li>
          <li>Compensation</li>
          <li>Sales commission structuring</li>
          <li>Benefits administration</li>
          <li>Payroll</li>
          <li>Employee handbook</li>
          <li>Corporation insurance evaluation and selection</li>
          <li>Real estate planning, evaluation and selection</li>
          <li>Employee Stock Option Plan (ESOP) management</li>
        </ul>
        
      </div>
    </div>
  )
}

export default Services