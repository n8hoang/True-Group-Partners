import React from 'react'
import tgpIcon from '../assets/TGP-logo.webp'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";



function Header() {
    const currentPage = useLocation().pathname
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: '/',
            name: 'Home'
        },
        {
            id: 2,
            link: '/overview',
            name: 'About Us',
        },
        {
            id: 3,
            link: '/employment',
            name: 'Employment',
        },
        {
            id: 4,
            link: '/services',
            name: 'Services'
        },
        {
            id: 5,
            link: '/featured',
            name: 'Featured Clients'
        },
        {
            id: 6,
            link: '/contact',
            name: 'Contact Us'
        },
    ]
    return (
        <div className='flex w-full justify-between items-center bg-gradient-to-r from-slate-600 to-gray-800 py-2 px-2 sticky top-0 z-50 '>
            <Link to='/' className='flex m-0 relative z-50'>
                <img onClick={() => setNav(false)} className='block pl-2 m-2 w-48 md:w-max md:h-max' src={tgpIcon} />
            </Link>
            {/* Default NavBar */}
            <ul className='hidden lg:flex '>
                {links.map(({ id, link, name}) => ((
                        <Link
                            key={id}
                            to={link}
                            // Change color to white if navtab is active
                            className={currentPage === link ? 'z-10 px-4 cursor-pointer capitalize font-medium text-white hover:opacity-60 hover:duration-150' : ' px-4 cursor-pointer capitalize font-medium text-gray-400 hover:opacity-60 hover:duration-150'}
                        >
                            {name}
                        </Link>)
                ))}
            </ul>
            {/* Mobile NavBar */}
    
            <div onClick={() => setNav(!nav)} className='cursor-pointer mr-6 pt-2 z-50 text-white lg:hidden'>
                {nav ? <FaTimes className='hover:text-gray-400' size={30} /> : <FaBars className='hover:text-gray-400' size={30} />}
            </div>
                    <ul className={`transition-all duration-1000 ease-in-out ${nav ? 'h-screen' : 'h-0'} overflow-hidden absolute top-20 md:top-24 left-0 w-full bg-gradient-to-r from-slate-600 to-gray-800 text-gray-400 pt-0 flex flex-col justify-center items-center `} >
                    {links.map(({ id, link, name, icon }) => (
                        <Link
                            key={id}
                            to={link}
                            onClick={() => setNav(!nav)}
                            style={{ transform: 'translateY(-96px)' }}
                            className={currentPage === link ? ' px-4 cursor-pointer capitalize py-6 text-4xl flex text-white hover:opacity-70' : ' px-4 cursor-pointer capitalize py-6 text-4xl flex hover:opacity-70'}
                        >
                            {name} {icon}
                        </Link>
                    ))}
                </ul>
        </div>
    )
}

export default Header