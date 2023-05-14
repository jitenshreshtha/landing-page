import React from 'react';
import {IoIosArrowDropdown} from 'react-icons/io'

function Header() {
  return (
    <div className='bg-maincolor h-10 flex justify-between py-2 items-center font-jitu'>
        <div className='text-white px-10 text-2xl'>
            Jiten
        </div>
        <div>
            <ul className='flex gap-6 text-white mr-10 items-center'>
                <li className=' cursor-pointer'>Home</li>
                <li className=' cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Portfolio</li>
                <li className='cursor-pointer'>Team</li>
                <li className='cursor-pointer flex items-center gap-1'>Dropdown <IoIosArrowDropdown /></li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer border-2 border-[#4DA3BF] rounded-[15px] p-1.5'>Get Started</li>
            </ul>
        </div>
    </div>
  )
}

export default Header