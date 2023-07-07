"use client"
import Image from 'next/image'
import styles from './main.module.css'
import { Modak } from 'next/font/google'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-flip";
import { PageWrapper } from './page-wrapper'
import { motion, visualElementStore } from 'framer-motion'
import Rooms from './Rooms';

const mod = Modak({ subsets:['latin'],
weight:['400']
})

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 2,
    },
  },
};

const images = {
  hidden: { 
    opacity: 0,
    x: 30,
   },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
}; 

export default function Home() {
  return (
    <main>
      <PageWrapper>
      <motion.div 
        variants={variants}
        initial='hidden'
        animate='show'
      >
        <motion.div variants={images} className={`${styles.welcome} ${mod.className} text-white md:text-5xl text-center py-32 md:py-64 space-y-2`}>
          <h1 className={`${mod.className} uppercase md:text-[90px]`}>Welcome to Liciaville Hotel</h1>
          <h2>Experience Affordable Luxury</h2>
          <h2>Top Hotel In The City Of Agbor, Delta State</h2>
        </motion.div>
      </motion.div>
        
      </PageWrapper>

      {/* book now */}
      <div className='grid grid-cols-2 grid-rows-3 md:flex justify-around items-center md:border md:rounded-xl md:w-[1131px] h-[296px] md:h-[150px] md:relative md:bottom-14 bg-slate-50 md:ml-36 px-5 py-3 gap-2'>
        <div className='col-span-2 '>
          <label className='grid text-sm md:text-lg'>
            Check In
            <input type="date" name="" id="Check In" className='border py-2 px-6 text-slate-500 text-sm outline-none rounded-md'/>
          </label>
        </div>
        <div>
          <label className='grid text-sm md:text-lg'>
              Check Out
              <input type="date" name="" id="Check Out" className='border py-2 px-6 text-slate-500 text-sm outline-none rounded-md' />
          </label>
        </div>
        <div>
          <label className='grid text-sm md:text-lg'>
            Room
            <select className='border py-2 px-6 text-slate-500 text-sm outline-none rounded-md'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
        </div>
        <div className='px-3 md:px-0'>
          <label className='grid text-sm md:text-lg'>
            Adult
            <select className='border py-2 px-6 text-slate-500 text-sm outline-none rounded-md'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
        </div>
        <div className='px-6 md:px-0'>
          <label className='grid text-sm md:text-lg'>
            Children
            <select className='border py-2 px-6 text-slate-500 text-sm outline-none rounded-md'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
        </div>
        <div className='md:pt-[29px] md:flex col-span-3'>
          <button className='py-2 px-5 bg-yellow-600 text-sm md:text-base text-slate-50'>Book Now</button>
        </div>
        
      </div>

      {/* Rooms */}
      <div>
        <div>
          <h2 className='text-center text-5xl py-4'>Our Rooms</h2>
          <p className='text-center border-t-2 border-yellow-600 md:mx-[620px] py-7'></p>
          <Rooms />
        </div>
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
        className=""
      >
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
      </Swiper>

      <div>
        
      </div>
    </main>
  )
}
