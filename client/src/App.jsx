import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './helpers/ScrollToTop'

function App() {

  return (
    <>
    <Header/>
    <ScrollToTop/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
