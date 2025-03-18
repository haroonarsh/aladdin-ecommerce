import AladdinHeaderCustom from '@/components/after-header/Header'
import Footer from '@/components/footer/Footer';
import Pagination from '@/components/pagination/Pagination'
import ProductCard from '@/components/product-cards/ProductCards'
import React from 'react'
import { TbTriangleSquareCircle } from "react-icons/tb";  

function page() {
    const products = [
        {
          id: 1,
          name: "lorem ipsum fire tv with alexa voice remote Tv etc.",
          price: { min: 30.65, max: 39.99 },
          rating: 5,
          image: "/product-img/img-1.png",
        },
        {
          id: 2,
          name: "lorem ipsum fire tv with alexa voice remote Tv etc.",
          price: { min: 30.65, max: 39.99 },
          rating: 5,
          image: "/product-img/img-5.png",
        },
        {
          id: 3,
          name: "lorem ipsum fire tv with alexa voice remote Tv etc.",
          price: { min: 30.65, max: 39.99 },
          rating: 5,
          image: "/product-img/img-3.png",
        },
        {
          id: 4,
          name: "lorem ipsum fire tv with alexa voice remote Tv etc.",
          price: { min: 30.65, max: 39.99 },
          rating: 5,
          image: "/product-img/img-4.png",
        },
      ]
  return (
    <>
            {/* // Header */}
        <AladdinHeaderCustom />

            {/* // Banner */}
        <div className='primary6-bg w-full h-[200px] text-white flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold text-white'>Aladdin Best sells</h1>
            <p className='pt-2 neutral3'>Our most populer products based on sales.</p>
        </div>

            {/* // Mid Section */}
        <div className='flex max-w-[1360px] mx-auto h-full '>
            {/* // leftSide */}
            <div className='w-1/4 min-h-screen border-r-2 border-gray-300'>
            <h1 className="flex items-center gap-2 text-2xl font-bold neutral10 mb-6 ml-8 mt-7"><TbTriangleSquareCircle /> Categories</h1>
            <ul className='ml-8'>
              <li className="py-2 px-4 primary8 font-bold hover:bg-blue-50 cursor-pointer">Facial Cleaner</li>
              <li className="py-2 px-4 hover:bg-blue-50 cursor-pointer">Pomade</li>
              <li className="py-2 px-4 hover:bg-blue-50 cursor-pointer">Perfumes</li>
              <li className="py-2 px-4 hover:bg-blue-50 cursor-pointer">Baby Powder</li>
              <li className="py-2 px-4 hover:bg-blue-50 cursor-pointer">Eye Liner</li>
              <li className="py-2 px-4 hover:bg-blue-50 cursor-pointer">Lip Clippers</li>
            </ul> 
            </div>
            {/* // RightSide */}
            <div className='w-3/4 min-h-scree mt-7 mb-13'>
                <h1 className="text-2xl font-bold neutral10 mb-6 ml-8">Beauty & Personal Care</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-8">
                    <Pagination currentPage={1} totalPages={4} />
                </div>
            </div>
        </div>
                    {/* // Footer */}
        <Footer />
    </>
  )
}

export default page