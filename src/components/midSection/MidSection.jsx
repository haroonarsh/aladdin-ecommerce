import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function MidSection() {
  return (
    <>
        <div className='w-3/4  m-auto mt-20 mb-20'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Explore popular category</h1>
                <h2 className='flex items-center gap-2 cursor-pointer text-xl'>| See all<FaAngleRight /></h2>
            </div>
                {/* // Categories items */}
            <div className='flex justify-between gap-6 items-center mt-10'>
              <div className='flex flex-col items-center cursor-pointer'>
                <img className='w-5/6' src="./categories-images/img-1.png" alt="Category image" />
                <h1 className='mt-2 font-sans'>Beauty & Personal Care</h1>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img className='w-5/6' src="./categories-images/img-2.png" alt="Category image" />
                <p className='mt-2 font-sans'>Health & Household</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img className='w-5/6' src="./categories-images/img-3.png" alt="Category image" />
                <p className='mt-2 font-sans'>Home & Kitchen</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img className='w-5/6' src="./categories-images/img-4.png" alt="Category image" />
                <p className='mt-2 font-sans'>Aladdin Pharmacy</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img className='w-5/6' src="./categories-images/img-5.png" alt="Category image" />
                <p className='mt-2 font-sans'>Medical Instruments</p>
              </div>
            </div>

                {/* // Brands */}
            <div className='mt-14'>
              <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Popular brands</h1>
              </div>
              <div className='flex gap-6 items-center mt-6'>
                <img className='w-20' src="./brand-icons/Vector.png" alt="Vector" />
                <img className='w-20' src="./brand-icons/Dove.png" alt="Dove" />
                <img className='w-20' src="./brand-icons/Group.png" alt="Heart" />
                <img className='w-20' src="./brand-icons/Group(2).png" alt="colgate" />
                <img className='w-20' src="./brand-icons/Vector(1).png" alt="ZARA" />
                <img className='w-20' src="./brand-icons/CeraVe.png" alt="VL" />
              </div>
            </div>
        </div>
    </>
  )
}

export default MidSection