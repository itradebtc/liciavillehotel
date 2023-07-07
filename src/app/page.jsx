"use client"
import Image from 'next/image'
import pic from './images/welcomebg.gif'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-flip";

export default function Home() {
  return (
    <main>
      <div>
        <Image src={pic} alt='welcome' className='md:h-[100vh]'/>
      </div>

      {/* book now */}
      <div className='grid grid-cols-2 grid-rows-3 md:flex justify-around items-center md:border md:rounded-xl w-full md:w-[1131px] h-[296px] md:h-[150px] md:relative md:bottom-14 bg-slate-50 md:ml-36 px-5 py-3 gap-2'>
        <div className='col-span-2'>
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
        <div>
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
        <div>
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
          <button className='py-2 px-5 bg-yellow-600 text-sm md:text-base text-slate-50 w-max'>Check Availablity</button>
        </div>
        
      </div>

      {/* Rooms */}
      <div>
        <div>
          <h2>Our Rooms</h2>
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
