import React from 'react'
import tgpIcon from '../assets/TGP-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import DropdownMenu from './DropdownMenu';



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
            link: '/services',
            name: 'Services'
        },
        {
            id: 3,
            link: ['/overview', '/employment'],
            name: 'About Us',
            icon: <FaCaretDown className='relative top-1'/>

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
        <div className='flex w-full justify-between items-center bg-gradient-to-r from-slate-500 to-gray-800 py-2 px-2'>
            <Link to='/' className='flex-shrink-0'>
                <img className='pl-2 m-2 w-max h-max' src={tgpIcon} />
            </Link>
            <ul className='hidden lg:flex '>
                {links.map(({ id, link, name, icon }) => (
                    name === 'About Us' ? (
                <div key={id}>
                    <DropdownMenu link={link} name={name} icon={icon} currentPage={currentPage}/>
                </div>
                    ) : (
                    <Link
                        key={id}
                        to={link}
                        // Change color to white if navtab is active
                        className= {currentPage === link ? 'z-10 px-4 cursor-pointer capitalize font-medium text-white hover:opacity-60 hover:duration-150' : ' px-4 cursor-pointer capitalize font-medium text-gray-400 hover:opacity-60 hover:duration-150'}
                    >
                        {name}
                    </Link>)
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className=' cursor-pointer pr-4 z-50 text-white lg:hidden'>
            
                {nav ? <FaTimes className='hover:text-gray-400' size={30}/> : <FaBars className='hover:text-gray-400' size={30}/> }
            </div>
            {nav && (
                 <ul className=' z-40 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-500 to-gray-800 text-white'>
                 {links.map(({ id, link, name, icon}) => (
                         <Link 
                         key={id}
                         to={link}
                         onClick={() => setNav(!nav)}
                         // Change color to white if navtab is active
                         className='px-4 cursor-pointer capitalize py-6 text-4xl flex hover:text-gray-400' 
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