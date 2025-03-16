import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

function Header() {
  return (
    <div className='flex justify-between items-center h-18 w-full pl-28 pr-28 primary8-bg'>
        <img className='w-26 h-11' src="./images/Logo-white.png" alt="Logo" />
        <div className='flex w-fit h-10 items-center gap-2 rounded-md text-md neutral3 bg-gray-50 pl-2'>
            <input className='outline-none neutral8 text-md border-r-2 border-gray-400 h-10 w-72' type="text" placeholder='Search Aladdin'/>
            <p className='flex items-center gap-1 neutral8 cursor-pointer'>All Categories <FaCaretDown /></p>
            <span className='p-2 h-10 w-10 flex items-center justify-center rounded-r-sm primary6-bg hover:bg-gray-200 cursor-pointer'><RiSearchLine /></span>
        </div>
        <ul className='flex gap-12 items-start text-md neutral5'>
            <li className='hover:text-gray-200 cursor-pointer'>Home</li>
            <li className='hover:text-gray-200 cursor-pointer'>About Us</li>
            <li className='hover:text-gray-200  cursor-pointer'>Shop</li>
            <li className='hover:text-gray-200  cursor-pointer'>Contact Us</li>
            <li className=' hover:text-gray-200 cursor-pointer'>My Account</li>
        </ul>
        <div className='flex items-center gap-2 text-xl cursor-pointer neutral1'>
            <MdAddShoppingCart />
            <h1>Cart</h1>
        </div>
    </div>
  )
}

export default Header