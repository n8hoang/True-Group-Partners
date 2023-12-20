import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Services from './pages/Services.jsx'
import Employment from './pages/Employment.jsx'
import Contact from './pages/Contact.jsx'
import Featured from './pages/Featured.jsx'
import Overview from './pages/Overview.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <App/> ,
  errorElement: <Error/>,
  children: [
    {index: true, element: <Home/>},
    {path: '/services', element: <Services/>},
    {path: '/overview', element: <Overview/>},
    {path: '/employment', element: <Employment/>},
    {path: '/featured', element: <Featured/>},
    {path: '/contact', element: <Contact/>},
    

  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
