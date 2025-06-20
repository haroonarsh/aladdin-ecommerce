"use client";

import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function MidSection({ token }) {
  console.log("MidSection Token:", token); // Log the token value

  const router = useRouter();
  const { fetchUser } = useUser();
  // const storedToken = localStorage.getItem("jwt"); // Retrieve the token from local storage

  const handleToken = async () => {
    if (token) {
      await fetchUser(token).then((data) => {
        if (data.user.Role === 'admin') {
          router.push('/admin/dashboard'); // Redirect to admin dashboard if user is an admin
        } else {
          router.push('/products-page'); // Redirect to home page if user is not an admin
        }
      })
    }
  };

  return (
    <>
        <div className='w-[94%] md:w-3/4  m-auto mt-20 mb-20'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Explore popular category</h1>
                <div onClick={handleToken} className='flex items-center gap-2 cursor-pointer text-xl'>
                <h2 className='flex items-center gap-2 cursor-pointer text-[16px] md:text-xl'>| See all<FaAngleRight /></h2>
                </div>
            </div>
                {/* // Categori es items */}
            <div className='flex flex-wrap justify-between gap-6 items-center mt-10'>
              <div className='flex sm:w-44 flex-col items-center cursor-pointer'>
                <img className='w-5/6 rounded-lg' src="./categories-images/img-1.png" alt="Category image" />
                <h1 className='mt-2 font-sans'>Beauty & Personal Care</h1>
              </div>
              <div className='flex sm:w-44 flex-col items-center cursor-pointer'>
                <img className='w-5/6 rounded-lg' src="./categories-images/img-2.png" alt="Category image" />
                <p className='mt-2 font-sans'>Health & Household</p>
              </div>
              <div className='flex sm:w-44 flex-col items-center cursor-pointer'>
                <img className='w-5/6 rounded-lg' src="./categories-images/img-3.png" alt="Category image" />
                <p className='mt-2 font-sans'>Home & Kitchen</p>
              </div>
              <div className='flex sm:w-44 flex-col items-center cursor-pointer'>
                <img className='w-5/6 rounded-lg' src="./categories-images/img-4.png" alt="Category image" />
                <p className='mt-2 font-sans'>Aladdin Pharmacy</p>
              </div>
              <div className='flex sm:w-44 flex-col items-center cursor-pointer'>
                <img className='w-5/6 rounded-lg' src="./categories-images/img-5.png" alt="Category image" />
                <p className='mt-2 font-sans'>Medical Instruments</p>
              </div>
            </div>

                {/* // Brands */}
            <div className='mt-14'>
              <div className='flex justify-between items-center'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Popular brands</h1>
              </div>
              <div className='flex flex-wrap justify-center sm:justify-start gap-6 items-center mt-6'>
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