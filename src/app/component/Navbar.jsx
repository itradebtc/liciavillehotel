"use client"
import React from 'react'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail, MdOutlineClose } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLongArrowAltRight } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/navheader.svg'
import Dropdown from '../Dropdown'

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
  return (
    <nav className='shadow-2xl'>
        <div className='flex justify-between items-center bg-blue-700 py-2 px-7 md:py-3 md:px-16'>
            <div className='flex space-x-4 md:space-x-12 text-slate-50 text-[13px]'>
                <div className='flex space-x-2 justify-between items-center'>
                    <a href={`tel:${'(08140815172'}`}><BsFillTelephoneFill size={20} className='text-yellow-600'/></a>
                    <a href={`tel:${'(08140815172'}`} className='hidden md:flex'>0814 081 5172</a>
                </div>
                <div className='flex space-x-2 justify-between items-center'>
                    <a href={`mailto:${'liciavillehotel@gmail.com'}`}><MdEmail size={20} className='text-yellow-600'/></a>
                    <a href={`mailto:${'liciavillehotelagbor@gmail.com'}`} className='hidden md:flex'>liciavillehotelagbor@gmail.com</a>
                </div>
            </div>
            
            <div className='flex space-x-4 md:space-x-8 text-yellow-600'>
                <a href="https://web.facebook.com/licia.ville.3/?_rdc=1&_rdr" 
                    target='_blank' 
                    rel='noreferrer' 
                    title='liciavillehotels'>
                    <FaFacebookF size={20} className='hover:text-slate-50 hover:scale-110'/>
                </a>
                <a href="https://www.twitter.com" 
                    target='_blank' 
                    rel='noreferrer' 
                    title='liciavillehotels'>
                    <FaTwitter size={20} className='hover:text-slate-50 hover:scale-110'/>
                </a>
                <a href="https://instagram.com/liciavillehotels?igshid=OGIzYTJhMTRmYQ==" 
                    target='_blank' 
                    rel='noreferrer' 
                    title='liciavillehotels'>
                    <FaInstagramSquare size={20} className='hover:text-slate-50 hover:scale-110'/>
                </a>
                
            </div>
        </div>
        
        <div className='flex justify-between items-center px-7 md:py-3 md:px-16 2xl:px-16 bg-slate-50'>
            <Image src={logo} alt='Logo' width="125" height="70"
            className='cursor-pointer'
            priority
            />
            <div className='hidden sm:flex'>
                <ul className='hidden sm:flex justify-center items-center text-slate-600'>
                    <Link href='./'>
                        <li className='ml-10 uppercase hover:ease-in duration-300 hover:scale-110 hover:text-yellow-600 text-lg'>Home</li>  
                    </Link>
                    {/* <li className='ml-10 uppercase hover:ease-in duration-300 hover:scale-110 hover:text-yellow-600 text-lg'>Rooms</li> */}
                    <li className='ml-10 uppercase hover:ease-in duration-300 hover:scale-110 hover:text-yellow-600 text-lg'>
                        <Dropdown />
                    </li>
                    <Link href='./gallery'>
                        <li className='ml-10 uppercase hover:ease-in duration-300 hover:scale-110 hover:text-yellow-600 text-lg'>Gallery</li>
                    </Link>
                    <Link href='./contact'>
                        <li className='ml-10 uppercase hover:ease-in duration-300 hover:scale-110 hover:text-yellow-600 text-lg'>
                                Contact
                        </li>
                    </Link>
                </ul>
                <Link href='./booknow'>
                    <button className='ml-10 py-2 px-7 text-slate-50 uppercase shadow-2xl shadow-slate-700 hover:shadow-none hover:ease-in duration-300 hover:bg-yellow-500 text-lg flex justify-center items-center gap-4 bg-yellow-600'>Book Now <FaLongArrowAltRight /> </button>
                </Link>
            </div>
            <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                <GiHamburgerMenu size={25} className='text-yellow-600' />
            </div>
        </div>
        <div className={
            menuOpen
            ? 'fixed bottom-0 w-[100%] sm:hidden h-[screen] bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed bottom-[100%] w-[100%] p-10 ease-in duration-500'
            // ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            // : 'fixed left-[100%] top-0 p-10 ease-in duration-500'
        }       
        >
            <div className='flex w-full items-center justify-end'>
                <div onClick={handleNav} className='cursor-pointer'>
                    <MdOutlineClose size={25} className='text-yellow-600'/>
                </div>
            </div>
            <div className='flex-col py-4'>
                <ul className='text-slate-600'>
                    <Link href='./'>
                        <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer hover:text-yellow-600'>
                            Home
                        </li>
                    </Link>
                    <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer hover:text-yellow-600'>
                        Rooms
                    </li>
                    <Link href='./gallery'>
                        <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer hover:text-yellow-600'>
                            Gallery
                        </li>
                    </Link>
                    <Link href='./contact'>
                        <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer hover:text-yellow-600'>
                            Contact
                        </li>
                    </Link>
                    <button onClick={() => setMenuOpen(false)} className='py-2 px-6 cursor-pointer bg-yellow-600 hover:bg-transparent text-slate-50 hover:text-yellow-600'>
                        Book Now
                    </button>
                </ul>
            </div>
            <div className='flex flex-row justify-around pt-4 items-center text-yellow-600'>
                <FaFacebookF size={20} className='hover:text-white hover:scale-110'/>
                <FaTwitter size={20} className='hover:text-white hover:scale-110'/>
                <FaInstagramSquare size={20} className='hover:text-white hover:scale-110'/>
            </div>
            <Image src={logo} alt='Logo' width="305" height="95"
            className='cursor-pointer '
            priority />
        </div>
    </nav>
  )
}
