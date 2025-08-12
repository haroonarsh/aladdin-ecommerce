"use client";

import AladdinHeaderCustom from '@/components/after-header/Header'
import Pagination from '@/components/pagination/Pagination'
import ProductCard from '@/components/product-cards/ProductCards'
import { useProduct } from '@/hooks/useProduct';
import React, { useEffect, useState } from 'react'
import { TbTriangleSquareCircle } from "react-icons/tb";  

function Page() {

  const [products, setProducts] = useState([]);
  const { getProducts } = useProduct();

  console.log("Products:", products);
  

  useEffect(() => {
    getProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts.data.products);
      console.log("Fetched Products:", fetchedProducts.data.products);
      
    })
  }, [])

  return (
    <>
            {/* // Header */}
        {/* <AladdinHeaderCustom /> */}

            {/* // Banner */}
        <div className='primary6-bg w-full h-[200px] mt-[4rem] lg:mt-[6.5rem] text-white flex flex-col items-center justify-center'>
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold text-white text-center'>Aladdin Best sells</h1>
            <p className='pt-2 neutral3 lg:text-lg md:text-base text-[14px] text-center'>Our most populer products based on sales.</p>
        </div>

            {/* // Mid Section */}
        <div className='flex max-w-[1360px] mx-auto h-full '>
            {/* // leftSide */}
            <div className='sm:w-1/4 w-1/3 min-h-screen border-r-2 border-gray-300'>
            <h1 className="flex items-center gap-2 text-[18px] sm:text-xl lg:text-2xl font-bold neutral10 mb-6 lg:ml-8 ml-2 mt-7"><TbTriangleSquareCircle /> Categories</h1>
            <ul className='lg:ml-8 ml-2'>
              <li className="py-2 sm:px-4 px-0.5 primary8 font-bold hover:bg-blue-50 cursor-pointer text-[15px] sm:text-[17px] lg:text-[18px]">Facial Cleaner</li>
              <li className="py-2 sm:px-4 px-0.5 hover:bg-blue-50 cursor-pointer">Pomade</li>
              <li className="py-2 sm:px-4 px-0.5 hover:bg-blue-50 cursor-pointer">Perfumes</li>
              <li className="py-2 sm:px-4 px-0.5 hover:bg-blue-50 cursor-pointer">Baby Powder</li>
              <li className="py-2 sm:px-4 px-0.5 hover:bg-blue-50 cursor-pointer">Eye Liner</li>
              <li className="py-2 sm:px-4 px-0.5 hover:bg-blue-50 cursor-pointer">Lip Clippers</li>
            </ul> 
            </div>
            {/* // RightSide */}
            <div className='sm:w-3/4 w-2/3 min-h-scree mt-7 mb-13'>
                <h1 className="text-[18px] sm:text-xl lg:text-2xl font-bold neutral10 mb-6 lg:ml-8 ml-3">Beauty & Personal Care</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

                <div className="mt-8">
                    <Pagination currentPage={1} totalPages={4} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Page;