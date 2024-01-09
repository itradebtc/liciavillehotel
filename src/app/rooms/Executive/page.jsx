import React from 'react'
import Image from 'next/image'
import pic from '/Users/user/Desktop/uosy/liciaville-hotel/src/app/images/executive.jpg'

export default function page() {
  return (
    <div className='md:flex gap-7 border-4 border-slate-300 rounded-b-xl md:m-auto '>
            <Image src={pic} width={700} height={700} alt='main swipe' className='contain rounded-b-md' /> 
      <div className='flex flex-col text-black space-y-4 md:p-7'>
        <h2 className='text-2xl uppercase'>Executive Room</h2>
        <p className='text-xl'>₦17,000 / per night</p>
        <p>The modern and light interior provides you with a comfortable atmosphere and each Superior Room contains complementary toiletries, deluxe bath towels, hair dryer, cosy bedding and a private safe.</p>
      </div>
    </div>
  )
}
