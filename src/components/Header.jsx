import React from 'react'
import tgpIcon from '../assets/TGP-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import DropdownMenu from './DropdownMenu';



function Header() {
    const currentPage = useLocation().pathname
    const [nav, setNav] = useState(false)
    const [dropDown, setDropDown] = useState(false)

    const links = [
        {
            id: 1,
            link: '/',
            name: 'Home'
        },
        {
            id: 2,
            link: '/services',
            name: 'Services'
        },
        {
            id: 3,
            link: ['/overview', '/employment'],
            name: 'About Us',
            icon: <FaCaretDown className='relative top-1' />

        },
        {
            id: 4,
            link: '/featured',
            name: 'Featured Clients'
        },
        {
            id: 5,
            link: '/contact',
            name: 'Contact Us'
        },
    ]
    return (
        <div className='flex w-full justify-between items-center bg-gradient-to-r from-slate-600 to-gray-800 py-2 px-2 sticky top-0 z-50'>
            <Link to='/' className='flex-shrink-0 relative z-50'>
                <img className='pl-2 m-2 w-max h-max' src={tgpIcon} />
            </Link>
            {/* Default NavBar */}
            <ul className='hidden lg:flex '>
                {links.map(({ id, link, name, icon }) => (
                    name === 'About Us' ? (
                        <div key={id}>
                            <DropdownMenu link={link} name={name} icon={icon} currentPage={currentPage} />
                        </div>
                    ) : (
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
            <div onClick={() => setNav(!nav)} className=' cursor-pointer pr-4 z-50 text-white lg:hidden'>

                {nav ? <FaTimes className='hover:text-gray-400' size={30} /> : <FaBars className='hover:text-gray-400' size={30} />}
            </div>
            {nav && (
                <ul className=' z-40 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-500 to-gray-800 text-gray-400'>
                    {links.map(({ id, link, name, icon }) => (
                        name === 'About Us' ?
                        // About Us Dropdown Menu
                            <div className='flex items-center flex-col 'key={id}>
                                <Link
                                    key={id}
                                    to={link}
                                    onClick={() => setDropDown(!dropDown)}
                                    // Change color to white if navtab is active
                                    className={(currentPage === link[0] || currentPage === link[1]) && dropDown ? 'px-4 relative pl-8 cursor-pointer capitalize py-6 text-4xl flex text-white hover:opacity-70' : 'px-4 cursor-pointer capitalize py-6 text-4xl flex relative left-2 hover:opacity-70'}
                                >
                                    {name} {icon}
                                </Link>
                                {dropDown && (
                                    <div className='flex-col items-center flex'>
                                    <Link
                                        to={link[0]}
                                        onClick={() => setNav(!nav)}
                                        // Change color to white if navtab is active
                                        className={currentPage === link[0] ? 'px-4 cursor-pointer capitalize py-6 text-4xl flex text-white hover:opacity-70' : 'px-4 cursor-pointer capitalize py-6 text-4xl flex hover:opacity-70'}
                                    >
                                        Overview
                                    </Link>
                                    <Link
                                        to={link[1]}
                                        onClick={() => setNav(!nav)}
                                        // Change color to white if navtab is active
                                        className={currentPage === link[1] ? 'px-4 cursor-pointer capitalize py-6 text-4xl flex text-white hover:opacity-70' : 'px-4 cursor-pointer capitalize py-6 text-4xl flex hover:opacity-70'}
                                    >
                                        Employment
                                    </Link>
                                    </div>
                                )}
                            </div>
                            :
                            // Any link that is not "About Us"
                            <Link
                                key={id}
                                to={link}
                                onClick={() => setNav(!nav)}
                                // Change color to white if navtab is active
                                className={currentPage === link ? 'px-4 cursor-pointer capitalize py-6 text-4xl flex text-white hover:opacity-70' : 'px-4 cursor-pointer capitalize py-6 text-4xl flex hover:opacity-70'}
                            >
                                {name} {icon}
                            </Link>

                    ))}
                </ul>
            )}


        </div>
    )
}

export default Header