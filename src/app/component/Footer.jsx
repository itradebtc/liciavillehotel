import React from 'react'
import Image from 'next/image'
import logo from '../images/navheader.svg'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-blue-700 text-white'>
        <div className='flex md:grid md:grid-cols-3 space-x-6 md:space-x-14 justify-between items-center px-7 py-2 md:py-7 md:px-52 w-80 md:w-fit'>
            <Image src={logo} width="200" height="100" alt='Logo' className='col-span-3 w-20 h-24 md:w-52 md:h-56' />
            <div className=''>
                <div className='md:space-y-1 text-white'>
                    <p className='text-[12px] md:text-lg hover:text-yellow-600'><a href={`tel:${'08140815172'}`}>0814 081 5172</a></p>
                    <p className='text-[12px] md:text-[14px] hover:text-yellow-600'><a href={`mailto:${'liciavillehotelagbor@gmail.com'}`}>liciavillehotelagbor@gmail.com</a></p>
                    <p className='text-[12px] md:text-[14px] hover:text-yellow-600'>1 Urubusi street, Agbor, Delta State</p>
                </div>
            </div>
            <div className='text-white '>
                <p className='text-[12px] md:text-lg space-y-2 hidden md:flex'>Support</p>
                <Link href='../privacy'>
                <p className='text-[12px] md:text-sm hover:text-yellow-600'>Privacy policy</p>
                </Link>
                <Link href='../terms&condition'>
                <p className='text-[12px] md:text-sm hover:text-yellow-600 '>Terms & condition</p>
                </Link>
            </div>
            <div className='sm:grid hidden text-white md:space-y-1'>
                <h2 className='md:text-lg'>Subscribe Newsletter</h2>
                <p className='text-[14px]'>Subscribe to our newsletter to get new updates.</p>
                <form className='flex' >
                    <input type="email" placeholder='Enter your email...' className='py-2 px-3 bg-blue-100 rounded-l-md text-sm outline-none'/> 
                    <button className='bg-blue-100 py-2 px-3 rounded-r-lg text-slate-50'>
                        <FaTelegramPlane size={25} className='text-yellow-600' />
                    </button>
                </form>
            </div>
        </div>
        <div className='border-b-2 border-slate-400 mx-10'>

        </div>
        <div className='md:flex justify-between items-center py-2 px-4 md:px-16 md:py-3 text-yellow-600'>
            <p className='text-white text-center md:text-justify text-[10px] md:text-[14px]'>
            Copyright &copy; {new Date().getFullYear()} Liciaville Hotel - Agbor, Delta State - All rights Reserved
            </p>
            <p className='hidden md:flex space-x-8 cursor-pointer'>
                    <a href="https://web.facebook.com/licia.ville.3/?_rdc=1&_rdr" target='_blank' rel='noreferrer' title='Our facebook page'>
                        <FaFacebookF size={20} className='hover:text-slate-50 hover:ease-in duration-300 hover:scale-110' />
                    </a>
                    <a href="https://instagram.com/liciavillehotels?igshid=OGIzYTJhMTRmYQ==" target='_blank' rel='noreferrer' title='Our instagram handle'>
                        <FaTwitter size={20} className='hover:text-slate-50 hover:ease-in duration-300 hover:scale-110' />
                    </a>
                    <a href="https://www.twitter.com" target='_blank' rel='noreferrer' title='Our twitter handle'> 
                        <FaInstagramSquare size={20} className='hover:text-slate-50 hover:ease-in duration-300 hover:scale-110' />
                    </a>
                </p>
        </div>
    </div>
  )
}
