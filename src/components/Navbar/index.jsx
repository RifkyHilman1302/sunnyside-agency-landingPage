import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Navbar() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="absolute top-5 w-full h-max sm:h-16  ">
            <div className='h-full mx-7 flex items-center justify-between flex-col sm:flex-row'>
                <div className='flex items-center justify-between w-full h-16'>
                    <p className='text-3xl text-white font-barlow font-bold'>sunnyside</p>
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className='text-white text-2xl sm:hidden flex cursor-pointer'
                        onClick={() => setIsActive(!isActive)}
                    />
                </div>
                <div className={`${isActive ? 'flex' : 'hidden'}  sm:flex  items-center justify-center sm:justify-end gap-5 font-fraunces sm:w-full w-64 h-64 sm:h-full sm:bg-transparent bg-white mt-10 sm:mt-0 sm:flex-row flex-col`}>
                   <button className='sm:text-white text-gray-500 hover:text-gray-200'>
                        About
                   </button>
                   <button className='sm:text-white text-gray-500 hover:text-gray-200'>
                        Services
                   </button>
                   <button className='sm:text-white text-gray-500 hover:text-gray-200'>
                        Projects
                   </button>
                   <button className='btn sm:bg-white bg-yellow h-10 w-24 rounded-full'>
                        Contact
                   </button>
                </div>
            </div>
        </div>
    )
}
