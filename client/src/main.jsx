import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
const Services = lazy(() => import('./pages/Services.jsx'))
const Employment = lazy(() => import('./pages/Employment.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Featured = lazy(() => import('./pages/Featured.jsx'))
const Overview = lazy(() => import('./pages/Overview.jsx'))
const LifeSciences = lazy(() => import('./pages/LifeSciences.jsx'))
const VideoPage = lazy(() => import('./pages/VideoPage.jsx'))
import 'aos/dist/aos.css';

const router = createBrowserRouter([
{
  path: '/',
  element: <App/> ,
  errorElement: <Error/>,
  children: [
    {index: true, element: <Home/>},
    {path: '/services', element: <Services/>},
    {path: '/life-sciences', element: <LifeSciences/>},
    {path: '/life-sciences/videos/:slug', element: <VideoPage/>},
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
