import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './helpers/ScrollToTop'

function App() {

  return (
    <div className='overflow-x-hidden'>
    <Header/>
    <ScrollToTop/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
