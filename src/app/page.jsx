"use client"
import Image from 'next/image'
import pic from './images/executive.jpg'
import pic2 from './images/exclusive.jpg'
import pic3 from './images/luxury.jpg'
import pic4 from './images/standard.jpg'
import f1 from './images/f1.png'
import f3 from './images/f3.JPG'
import f6 from './images/f6.JPG'
import styles from './main.module.css'
import { Modak } from 'next/font/google'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-flip";
import { motion, visualElementStore, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'

const mod = Modak({ subsets:['latin'],
weight:['400']
})

export default function Home() {
  const form = useRef();

    const sendmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_k27d4yt","template_yvzib0m",form.current,"1WZjNaK7QEHAfsI_P")
      .then(()=>{
        toast.success("Reservation Booked")
      },()=>{
        toast.error("something is wrong")
      })
      e.target.reset()

  };

  return (
    <main className='w-screen'>
        <div className={`${styles.welcome} ${mod.className} text-white md:text-6xl text-center py-32 md:py-64 md:space-y-2`}>
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exist={{ opacity: 0, x: 0 }}
            transition={{ delay: .8, duration: 1 }}
            >
              <h1 className={`${mod.className} uppercase text-[33px] md:text-[90px]`}>Welcome to Liciaville Hotel</h1>
            </motion.div>
        </AnimatePresence>
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exist={{ opacity: 0, y: 0 }}
            transition={{ delay: .9, duration: 1 }}
            >
              <h2>Experience Affordable Luxury</h2>
            </motion.div>
        </AnimatePresence>
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exist={{ opacity: 0, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            >
              <h2>Top Hotel In The City Of Agbor, Delta State</h2>
            </motion.div>
        </AnimatePresence>
        </div>
    

      {/* book now */}
      <form ref={form} onSubmit={sendmail} className='grid grid-cols-2 grid-rows-2 md:flex justify-around items-center md:border md:rounded-xl md:w-[1131px] h-[296px] md:h-[150px] md:relative md:bottom-14 bg-slate-50 md:ml-36 px-5 py-3 gap-2'>
        <div className=''>
          <label className='grid text-sm md:text-lg'>
            Check In
            <input type="date" className='border py-2 px-6 text-slate-500 text-sm outline-none rounded-md' onChange={(event) => setName(event.target.value)}/>
          </label>
        </div>
        <div>
          <label className='grid text-sm md:text-lg'>
              Check Out
              <input type="date" className='border py-2 px-6 text-slate-500 text-sm outline-none rounded-md' onChange={(event) => setName(event.target.value)}/>
          </label>
        </div>
        <div>
          <label className='grid text-sm md:text-lg'>
            Rooms
            <input type="number" placeholder="Rooms" name='room' min={1} className='border py-2 px-6 text-slate-500 text-sm outline-none rounded-md' onChange={(event) => setRooms(event.target.value)} required />
          </label>
        </div>
        <div className='px-3 md:px-0'>
          <label className='grid text-sm md:text-lg'>
            Adults
            <input type="number" placeholder="Adults" name='adults' min={1} className='border py-2 px-6 text-slate-500 text-sm outline-none rounded-md' onChange={(event) => setAdults(event.target.value)} required />
          </label>
        </div>
        <div className='md:pt-[29px] md:flex col-span-3'>
          <Link href='./booknow'>
            <button type='submit' className='py-2 px-5 shadow-2xl shadow-slate-700 hover:shadow-none hover:ease-in duration-300 hover:bg-yellow-500 bg-yellow-600 text-sm md:text-base text-slate-50'>Book Now</button>
          </Link>
        </div>
      </form>
          <ToastContainer
          position=''
          hideProgressBar={true}
          theme='colored'
          autoClose={2000}/>

      {/* Rooms */}
      <div className='py-6'>
        <div>
          <h2 className='text-center text-5xl py-4 uppercase'>Our Rooms</h2>
          <p className='text-center border-t-4 border-yellow-600 md:mx-[620px] py-7'></p>
          {/* <Rooms /> */}
        </div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="w-[1131px] h-[700px] py-3"
      >
        <SwiperSlide>
          <div className='md:flex gap-7 border-4 border-slate-300 rounded-b-xl '>
            <Image src={pic} width={700} height={700} alt='main swipe' className='contain rounded-b-md' /> 
            <div className='flex flex-col text-black space-y-4 md:p-7'>
              <h2 className='text-2xl uppercase'>Executive Room</h2>
              <p className='text-xl'>₦17,000 / per night</p>
              <p>The modern and light interior provides you with a comfortable atmosphere and each Superior Room contains complementary toiletries, deluxe bath towels, hair dryer, cosy bedding and a private safe.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className='md:flex gap-7 border-4 border-slate-300 rounded-b-xl '>
          <Image src={pic2} width={700} height={700} alt='main swipe' className='contain rounded-b-md'  />
          <div className='flex flex-col text-black space-y-4 pt-7'>
              <h2 className='text-2xl uppercase'>Exclusive Room</h2>
              <p className='text-xl'>₦15,000 / per night</p>
          </div> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='md:flex gap-7 border-4 border-slate-300 rounded-b-xl '>
          <Image src={pic3} width={700} alt='main swipe' className='contain rounded-b-md' /> 
          <div className='flex flex-col text-black space-y-4 pt-7'>
              <h2 className='text-2xl uppercase'>Luxury Room</h2>
              <p className='text-xl'>₦13,000 / per night</p>
          </div>
        </div> 
        </SwiperSlide>
        <SwiperSlide> 
        <div className='md:flex gap-7 border-4 border-slate-300 rounded-b-xl '>
          <Image src={pic4} width={700} alt='main swipe' className='contain rounded-b-md'  /> 
          <div className='flex flex-col text-black space-y-4 pt-7'>
              <h2 className='text-2xl uppercase'>Standard Room</h2>
              <p className='text-xl'>₦12,000 / per night</p>
          </div>
        </div>
          {/* <Rooms /> */}
        </SwiperSlide>
      </Swiper>
      </div>
      
        {/* Our facilities */}
      <div className='md:py-14 md:px-20'>
        <div className='md:pb-36'>
          <h2 className='text-center text-5xl py-4 uppercase'>Our Facilities</h2>
          <p className='text-center border-t-4 border-yellow-600 md:mx-[500px] py-7'></p>
        </div>
        <div className='flex'>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, in omnis qui laudantium sed quasi cum modi atque eum reiciendis dolor sunt beatae, quibusdam aliquid? Harum magni in neque qui!</p>
          </div>
          <div className="flex flex-col md:flex md:h-96 md:w-screen md:float-right">
              <Image src={f1} alt='f1' className="z-50 relative md:absolute transform -translate-y-44 translate-x-44 w-64 h-64" />
              <Image src={f3} alt='f3' className="z-20 relative md:absolute transform translate-y-44 translate-x-44 w-64 h-64" />
              <Image src={f6} alt='f2' className="z-40 relative md:absolute transform w-64 h-64" />
          </div>
        </div>
      </div>


       
      <div>
      </div>
    </main>
  )
}
