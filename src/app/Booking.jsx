"use client"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Modak } from 'next/font/google'

const mod = Modak({ subsets:['latin'],
weight:['400']
})

export default function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8r3dkzn","template_yvzib0m",form.current,"1WZjNaK7QEHAfsI_P")
    .then(()=>{
      toast.success("Reservation Booked")
    },()=>{
      toast.error("something is wrong")
    })
    e.target.reset()
  

  };
  return (
    <div className='py-2 md:py-0 bg-[url(./images/contact.png)] bg-center bg-contain items-center'>
        <div className='space-y-3 px-3 md:py-9 md:px-36 md:mx-36 md:space-y-7'>
            <h3 className={`${mod.className} text-3xl md:text-7xl text-center`}>Reservation Booking</h3>
            <div className='w-full md:w-[40vw] bg-transparent border-hidden md:border-solid border-4 border-yellow-600 rounded-md md:mx-36'>
                <form ref={form} onSubmit={sendmail} className='space-y-4 py-4 px-8'>
                    <div className='flex flex-col'>
                      <label className='py-2 text-lg'>Full Name <span className='text-red-900 text-sm'>*</span></label>
                      <input type="text" placeholder="Full Name"  name="name" className="border-l-4 border-l-yellow-600 border-r-4 border-r-yellow-600 border-2 px-3 outline-none h-[50px] rounded-md bg-transparent" onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2 text-lg'>Email <span className='text-red-900 text-sm'>*</span></label>
                      <input type="email" placeholder="Email" name='email'  className="border-l-4 border-l-yellow-600 border-r-4 border-r-yellow-600 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md bg-transparent" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2 text-lg'>Phone <span className='text-red-900 text-sm'>*</span></label>
                      <input type="tel" placeholder="Phone" name='phone' minLength={11} maxLength={11}  className="border-l-4 border-l-yellow-600 border-r-4 border-r-yellow-600 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md bg-transparent" onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2 text-lg'>Check In <span className='text-red-900 text-sm'>*</span></label>
                      <input type="date" placeholder="Check In" name='checkIn' minLength={11} maxLength={11}  className="border-l-4 border-l-yellow-600 border-r-4 border-r-yellow-600 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md bg-transparent" onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2 text-lg'>Check Out <span className='text-red-900 text-sm'>*</span></label>
                      <input type="date" placeholder="Check Out" name='checkOut' minLength={11} maxLength={11}  className="border-l-4 border-l-yellow-600 border-r-4 border-r-yellow-600 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md bg-transparent" onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2 text-lg'>Rooms <span className='text-red-900 text-sm'>*</span></label>
                      <input type="number" placeholder="Rooms" name='room' min={1} max={15} className="border-l-4 border-l-yellow-600 border-r-4 border-r-yellow-600 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md bg-transparent" onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className='flex flex-col u-form-group u-form-message space-y-2 mb-3'>
                      <label className='text-lg'>Special Requests?</label>
                      <textarea name='message' rows="4" cols="50" className="border-l-4 border-l-yellow-600 border-r-4 border-r-yellow-600 border-2 border-gray-25 px-3 py-1 outline-none h-[100px] rounded-md bg-transparent" onChange={(e) => setMessage(e.target.value)} ></textarea>
                    </div>
                    <button className='py-3 px-7 bg-[#3e8e41] text-lg text-white hover:text-yellow-600 rounded-md'>Book Now</button>
                </form>
                <ToastContainer
                position='top-center'
                hideProgressBar={true}
                theme='colored' 
                autoClose={3000}/>
            </div>
        </div>
    </div>
  )
}
