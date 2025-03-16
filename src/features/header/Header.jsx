import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { CgShoppingBag } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <>
        <div className='flex justify-between items-center h-16 w-full pl-28 pr-9'>
            <h2 className='text-2xl'>Analytics</h2>

            <div className='flex gap-8 items-center text-xl'>
                <div className='flex items-center gap-2 border border-gray-300 rounded-md text-xl neutral5 p-1 pl-2'>
                    <RiSearchLine />
                    <input className='outline-none neutral8 text-md' type="text" placeholder='Search'/>
                </div>
                <span className='p-2 hover:bg-gray-200 cursor-pointer rounded-md'><CgShoppingBag /></span>
                <span className='p-2 hover:bg-gray-200 cursor-pointer rounded-md'><IoNotificationsOutline /></span>
                <div className='flex items-center gap-2 w-16 h-full cursor-pointer'>
                    <img className='w-9 h-9' src="./images/user.png" alt="User avatar" />
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header