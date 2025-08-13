'use client';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Success() {
    const router = useRouter();

  return (
    <div className='w-full h-full flex items-center mt-28 justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <FaCheck  className='text-8xl text-white bg-cyan-700 p-5 rounded-full'/>
          <h1 className='text-3xl font-bold text-cyan-700'>Your order was successfull </h1>
            <p className='text-2xl font-semibold'>Thanks for your purchase!</p>
            <p className='text-gray-600'>Your order number is <span className='font-bold text-cyan-700'>#123456789</span></p>
            <p className='text-gray-600'>You'll receive an email confirmation shortly</p>
            <button className='bg-cyan-700 text-white text-md w-full h-11 flex items-center mt-3 cursor-pointer justify-center rounded-md hover:bg-cyan-800'>Track you order</button>
            <button className=' text-cyan-700 text-md w-full h-11 flex items-center mt-3 cursor-pointer justify-center rounded-md hover:bg-gray-200'
              onClick={() => router.push("/")}
            >Back to home</button>
      </div>
    </div>
  )
}
