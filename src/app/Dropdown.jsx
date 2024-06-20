"use client"
import Link from 'next/link'
import { useState } from 'react'
// import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
// import list from './list.json'

// function Dropdown() {
//     const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div className=''>
//         <button onClick={() => setIsOpen((prev) => !prev)} className='flex justify-center items-center uppercase w-full'>
//             Rooms
//             {!isOpen ?(
//                 <RiArrowDownSFill className='h-8 text-yellow-600' />
//             ) : (
//                 <RiArrowUpSFill className='h-8' />
//             )}
//         </button>

//         {isOpen && (
//             <div className='bg-[#ecf0f3] absolute top-30 flex flex-col items-start rounded-lg p-3 w-[200px]'>
//                 {list.map((item, i) => (
//                     <div className='hover:bg-slate-300 text-lg rounded-r-lg border-l-transparent hover:border-l-white border-l-4' 
//                     key={i}
//                     >
//                         <Link href={`/rooms/${item.category}`} >
//                             <h3 className=''>{item.room}</h3>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         )}
//     </div>
//   )
// }
import './dropdown.css'


// pages/index.js
function Dropdown() {
    return (
        <div className="navbar">
            <Link href='./'>
                <li>Home</li>
            </Link>
          <div className="dropdown">
            <button className="dropbtn">Rooms 
              <i className="fa fa-caret-down"></i>
            </button>
            <ul className="dropdown-content">
                <Link href='./rooms/Executive'>
                    <li>Executive Room</li>
                </Link>
                <Link href='/rooms/Exclusive'>
                    <li>Exclusive Room</li>
                </Link>
                <Link href='/rooms/Luxury'>
                    <li>Luxury Room</li>
                </Link>
                <Link href='/rooms/Standard'>
                    <li>Standard Room</li>
                </Link>
            </ul>
          </div> 
            <Link href='./gallery'>
                <li>Gallary</li>
            </Link>
            <Link href='./contact'>
                <li>Contact</li>
            </Link>
        </div>
    );
  }
  

export default Dropdown