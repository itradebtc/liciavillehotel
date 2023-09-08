import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsArrowRightCircleFill} from 'react-icons/bs'


async function fetchrooms(){
    const response = fetch('https://itradebtc.github.io/liciaimages/therooms.json')
  
    const data = await (await response).json()
  
    return data
  }
        
        export default async function Rooms() {
            const myRoom = await fetchrooms()

            const list = myRoom.rooms.map(rooms =>(
              <section key={rooms.id} className='py-12 px-20'>
                  <Link href={`/rooms/${rooms.folder}`} title={`Get more information on ${rooms.name} `} passHref>
                  <Image src={rooms.photo} alt='rooms' width="600" height="400"  className='w-[800px] md:w-[70vw] py-7'/>
                  <h2 className='md:text-lg py-4'>{rooms.name}</h2>
                  <h3 className='text-[12px] md:text-sm text-slate-500'>{rooms.price}</h3>
                  </Link>
              </section>
            ))
          return (
            <div className='pb-12'>
                <div className='grid md:grid-cols-1 gap-1 justify-center items-center text-black hover:ease-in duration-300'>
                    {list}
                </div>
            </div>
          )
        }
        