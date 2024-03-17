"use client"
import Image from 'next/image'
import { useState, useRef } from 'react'
import contactpic2 from '../images/contactpic2.png'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { PageWrapper } from '../page-wrapper'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'

export default function Page() {
    const form = useRef();

    const sendmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_8r3dkzn","template_yvzib0m",form.current,"1WZjNaK7QEHAfsI_P")
      .then(()=>{
        toast.success("message sent")
      },()=>{
        toast.error("something is wrong")
      })
      e.target.reset()

  };
  return (
    <div className='px-7 md:px-24 md:py-10'>
        <PageWrapper>
        <div className='grid md:flex md:gap-10 py-8'>
            <div className='overflow-hidden md:relative'>
                <Image 
                    src={contactpic2} 
                    alt='contactus' 
                    width="500" 
                    height="500" 
                    className='md:rounded-r-[200px] w-80 md:w-[1131px] bg-contain' 
                />
                <motion.img 
                    initial={{x: -100, y: 0, opacity: 0 }}
                    animate={{x: 0, y: 0, opacity: 1 }}
                    transition={{duration: 1, delay: 2.5, type: "tween" }}
                    className='md:rounded-r-[200px] w-full md:w-[1131px] h-[500px] hidden md:flex absolute inset-0' 
                    src='https://github.com/itradebtc/liciaimages/blob/main/contactus2.jpg?raw=true'
                    alt='contactus' 
                    width="500" 
                    height="500" 
                />
            </div>
            <div className='md:space-y-4 w-80 md:w-fit text-[12px] md:text-[14px]'>
                <h2 className='text-2xl pt-3 md:pt-0'>Contact Us</h2>
                <p>You have a question? We might just have answers. Send us a message to book an appointment</p>
                <form id='form' className='space-y-4' ref={form} onSubmit={sendmail}>
                    <div className='flex flex-col'>
                      <label className='py-2'>Name</label>
                      <input type="text" placeholder="Enter your Name"  name="name" className="border-b-2 border-gray-25 outline-none" onChange={(event) => setName(event.target.value)} required />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2'>Email</label>
                      <input type="email" placeholder="Enter a valid email address"  className="border-b-2 border-gray-25 outline-none" onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className='flex flex-col u-form-group u-form-message mb-3'>
                      <label>Message</label>
                      <textarea placeholder="Enter your question/comment here" rows="4" cols="50" className="border-b-2 border-gray-25 outline-none h-[123px] pt-2" required ></textarea>
                    </div>
                    <button className='py-3 px-7 rounded-lg w-full md:w-full text-slate-50 uppercase hover:bg-slate-300 hover:text-yellow-600 hover:text-xl text-lg flex justify-center items-center gap-4 bg-yellow-600'>Submit</button>
                </form>
                <ToastContainer
                position='top-center'
                hideProgressBar={true}
                theme='colored'
                autoClose={2000}/>

            </div>
        </div>
        <div>
            <div className="md:py-16 md:flex md:gap-16">
                <div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4561.023558806807!2d6.183054239280201!3d6.261462493524314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10414f2ff750577b%3A0x71d1e933c406693e!2sLiciaville%20Hotel%20and%20Suites!5e0!3m2!1sen!2sng!4v1688502305056!5m2!1sen!2sng" 
                    width="850" 
                    height="450" 
                    allowfullscreen="" 
                    loading="lazy" 
                    // referrerpolicy="no-referrer-when-downgrade"
                    className='w-full md:w-[850px]'
                ></iframe>
                </div>
                    <div className='py-4 md:py-0'>
                        <div className='space-y-3'>
                            <div className='flex items-center space-x-4 text-[12px] md:text-[14px]'>
                                <MdLocationPin size={20} className='text-yellow-600 hover:text-slate-300'/>
                                <p>
                                    1 Urubusi street, Agbor, Delta State
                                </p>
                            </div>
                            <div className='flex items-center space-x-4 text-[12px] md:text-[14px]'>
                                <a href={`tel:${'(08140815172'}`}><BsFillTelephoneFill size={20} className='text-yellow-600 hover:text-slate-300'/></a>
                                <a href={`tel:${'(08140815172'}`} >0814 081 5172</a>
                            </div>
                            <div className='flex items-center space-x-4 text-[12px] md:text-[14px]'>
                                <a href={`mailto:${'liciavillehotelagbor@gmail.com'}`}><MdEmail size={20} className='text-yellow-600 hover:text-slate-300'/></a>
                                <a href={`mailto:${'info@liciavillehotel.com.ng'}`} >info@liciavillehotel.com.ng</a>
                            </div>
                        </div>
                        <div className='pt-7 space-y-3'>
                            <p className='uppercase'>Go Social</p>
                            <p className='text-[12px] md:text-[14px]'>Follow us on social media for special offers/package!</p>
                        </div>
                    
                        <div className='flex pt-4'>
                            <ul className="flex text-yellow-600 gap-7">
                                <li className='hover:scale-110 hover:ease-in duration-300 hover:text-slate-300'>
                                    <a href="https://web.facebook.com/licia.ville.3/?_rdc=1&_rdr" target='_blank' rel='noreferrer' title='licia.ville.3'>
                                    <FaFacebookF size={30} />
                                    </a> 
                                </li>
                                <li className='hover:scale-110 hover:ease-in duration-300 hover:text-slate-300'>
                                    <a href="https://www.twitter.com" target='_blank' rel='noreferrer' title='Our twitter handle'> 
                                    <FaTwitter size={30} />
                                    </a>
                                </li>
                                <li className='hover:scale-110 hover:ease-in duration-300 hover:text-slate-300'>
                                    <a href="https://instagram.com/liciavillehotels?igshid=OGIzYTJhMTRmYQ==" target='_blank' rel='noreferrer' title='liciavillehotels'>
                                    <FaInstagramSquare size={30} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        </PageWrapper>
        
    </div>
  )
}
