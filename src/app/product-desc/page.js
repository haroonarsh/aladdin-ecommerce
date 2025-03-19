"use client";

import AladdinHeaderCustom from '@/components/after-header/Header'
import StarRating from '@/components/start-rating/Rating';
import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
import Pagination from '@/components/pagination/Pagination';
import ProductCard from '@/components/product-cards/ProductCards';

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
];

function page() {

    const [mainImage, setMainImage] = useState("/product-img/Pimg.png");
    const [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }







    const thumbnails = [
        "/product-img/sideImg.png",
        "/product-img/sideImg2.png",
        "/product-img/sideImg3.png",
        "/product-img/sideImg4.png",
    ];

  return (
    <>
            {/* // Header */}
        <AladdinHeaderCustom />

            {/* // Product Description */}
        <div className='max-w-[1360px] mx-auto px-9 gap-12 flex items-start mt-12 font-sans pb-16 border-b-2 border-gray-200'>
            {/* // left */}
            <div className='flex gap-5 w-3/4 h-[77vh]'>
                <div
                    className="w-full md:w-1/2 grid"
                    style={{
                        gridTemplateColumns: "",
                        gridTemplateRows: "",
                        gap: "8px",
                    }}
                    >
            {/* Thumbnails */}
            {thumbnails.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="cursor-pointer hover:scale-105 transition-all"
                    onClick={() => setMainImage(src)}
                />
            ))}

            {/* Main Image */}
            <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-full object-cover object-center rounded-xl"
                style={{ gridRow: "span 4", gridColumn: "span 4" }}
            />
        </div>
                <div className='max-w-[420px]'>
                    <h1 className='text-2xl font-bold font-sans'>Curology the sunscreen by curology is a noclog, grease-free (SPE 30 lotion).</h1>
                    <p>Brand: <span className='primary8'>Curology</span></p>
                    <div className='flex gap-2 items-center text-gray-500'><StarRating rating={5} maxRating={5} /> 337,762 rating</div>
                    <p className='font-bold text-xl flex items-center'><span className='text-red-600'>$39.99</span> - $30.65</p>
                    <hr className='my-3 max-w-[300px] text-gray-400'/>
                    <div className="grid grid-cols-2 gap-4">
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img className='w-1/2' src="/product-img/sideImg.png" alt="" />
                            <div>
                                <p className='text-sm'>Curology + 2</p>
                                <h1 className='text-sm font-bold'>$34.99</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img className='w-1/2' src="/product-img/sideImg2.png" alt="" />
                            <div>
                                <p className='text-sm'>Curology + 2</p>
                                <h1 className='text-sm font-bold'>$34.99</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img className='w-1/2' src="/product-img/sideImg3.png" alt="" />
                            <div>
                                <p className='text-sm'>Curology + 2</p>
                                <h1 className='text-sm font-bold'>$34.99</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img className='w-1/2' src="/product-img/sideImg4.png" alt="" />
                            <div>
                                <p className='text-sm'>Curology + 2</p>
                                <h1 className='text-sm font-bold'>$34.99</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // right */}
            <div className='w-1/4 border-2 border-cyan-600 p-5 grid grid-cols-1'>
            <h1 className='font-bold'>FREE delivery Sunday, February 5 on $25 of items shipped by Aladdin</h1>
            <h1 className='font-bold pb-4 pt-3'>Or fastest delivery Wednesday, February 1 order within <span className='primary8'>20 hrs 41 mins</span></h1>
            <p className='primary8 flex items-center gap-1.5'><FaLocationDot /> Deliver to New York 10001</p>
            <p className='text-green-900 pb-3 pt-3'>In Stock.</p>
            <button className='flex items-center gap-2 bg-cyan-800 text-white w-fit rounded-md py-2 px-3'><span className='font-bold border-r border-gray-400 pr-2 cursor-pointer'
            onClick={increaseCount}
            >+</span>Qty: {count} <span className='font-bold border-l border-gray-400 pl-2 cursor-pointer'
            onClick={decreaseCount}
            >-</span></button>
            <button className='flex items-center justify-center  bg-cyan-800 text-white mt-5 hover:bg-white cursor-pointer hover:text-cyan-800 border-2 border-cyan-800 transition-all rounded-md py-2 px-3'>Contat supplier</button>
            <button className='flex items-center justify-center  bg-white text-cyan-800 border-2 border-cyan-800 mt-5 rounded-md py-2 px-3 hover:bg-cyan-800 hover:text-white transition-all'>Chat now</button>
            <h1 className='font-bold pt-3 pb-3 text-[18px]'>Puchase details</h1>
            <p className='primary8 font-bold flex items-center gap-1.5'><MdLocalShipping /> Shipping</p>
            <p className='primary8 font-bold flex items-center gap-1.5'><BiCheckShield /> Payments</p>
            </div>
        </div>

                {/* // Cards */}

        <div className='max-w-[1360px] m-auto mt-7 pb-13 border-b-2 border-gray-200'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
                
                {/* // Product details */}
        <div className='max-w-[1360px] m-auto mt-7 pb-11 border-b-2 border-gray-200'>
            <h1 className='font-bold text-2xl primary8 pb-4'>Product details</h1>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2'><span className='font-bold text-black'>Manufacturer:</span> Aladdin</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2'><span className='font-bold text-black'>Product Dimensions:</span> 5inch</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2'><span className='font-bold text-black'>Item molel number:</span> JA20502</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2'><span className='font-bold text-black'>Date first available:</span> April 2024</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2'><span className='font-bold text-black'>Product number:</span> AA797HH9</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2'><span className='font-bold text-black'>Country Origin:</span> UK</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2'><span className='font-bold text-black'>Best sellers rank:</span> #1</p>
        </div>
    </>
  )
}

export default page