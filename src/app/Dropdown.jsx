import Link from 'next/link'
import { useState } from 'react'
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import list from './list.json'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=''>
        <button onClick={() => setIsOpen((prev) => !prev)} className='flex justify-center items-center uppercase w-full'>
            Rooms
            {!isOpen ?(
                <RiArrowDownSFill className='h-8 text-yellow-600' />
            ) : (
                <RiArrowUpSFill className='h-8' />
            )}
        </button>

        {isOpen && (
            <div className='bg-[#ecf0f3] absolute top-30 flex flex-col items-start rounded-lg p-3 w-[200px]'>
                {list.map((item, i) => (
                    <div className='hover:bg-slate-300 text-lg rounded-r-lg border-l-transparent hover:border-l-white border-l-4' 
                    key={i}
                    >
                        <Link href={`/rooms/${item.category}`} >
                            <h3 className=''>{item.room}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default Dropdown