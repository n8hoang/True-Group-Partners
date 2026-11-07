import { useEffect, Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './helpers/ScrollToTop'
import { initAnalytics, trackPageView } from './helpers/analytics'

initAnalytics()

function App() {
  const { pathname } = useLocation()

  // Page effects (which set the title) run before this one, so the title is current.
  useEffect(() => { trackPageView(pathname) }, [pathname])

  return (
    <>
    <Header/>
    <div className='overflow-x-hidden'>
    <ScrollToTop/>
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <Outlet/>
    </Suspense>
    <Footer/>
    </div>
    </>
  )
}

export default App
