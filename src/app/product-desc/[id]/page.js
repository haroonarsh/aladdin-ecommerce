"use client";

import AladdinHeaderCustom from '@/components/after-header/Header'
import StarRating from '@/components/start-rating/Rating';
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
import Pagination from '@/components/pagination/Pagination';
import ProductCard from '@/components/product-cards/ProductCards';
import CustomerReviews from '@/features/custmer-review/Review';
import { useParams, useRouter } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import { useCart } from '@/hooks/useCart';

function page() {

    const [mainImage, setMainImage] = useState();
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const { getProducts, getProductById } = useProduct();
    const { addToCart } = useCart();
    const { id } = useParams();
    
    useEffect(() => {
        // Fetch the product by ID
        getProductById(id).then((fetchedProduct) => {
            setMainImage(fetchedProduct.data.product.imageUrl);
            setProduct(fetchedProduct.data.product);
        })
        // Fetch all products
        getProducts().then((fetchedProducts) => {
            setProducts(fetchedProducts.data.products);        
        })
    }, [])

    // Add to cart
    const handleAddToCart = () => {
        addToCart(product._id, quantity);
    }

    const increaseCount = () => {
        setQuantity(quantity + 1);
    }

    const decreaseCount = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    // Thumbnails
    const thumbnails = [
        "/product-img/sideImg.png",
        "/product-img/sideImg2.png",
        "/product-img/sideImg3.png",
        "/product-img/sideImg4.png",
    ];

  return (
    <>
            {/* // Product Description */}
        <div className='max-w-[1360px] mx-auto lg:mt-[8rem] mt-[5.25rem] xl:px-9 px-4 lg:gap-12 gap-7 lg:flex grid items-start font-sans pb-16 border-b-2 border-gray-200'>
            {/* // left */}
            <div className='md:flex grid gap-5 lg:w-3/4 lg:h-[77vh] w-full h-full'>
                <div
                    className="md:w-full w-2/3 xl:w-1/2 lg:w-2/3 grid"
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
                    <h1 className='lg:text-2xl md:text-xl text-lg font-bold font-sans'>{product.description}</h1>
                    <p className='text-gray-500 lg:text-[16px] md:text-sm text-xs'>Brand: <span className='primary8'>{product.brand}</span></p>
                    <div className='flex md:gap-2 gap-1 lg:text-[16px] md:text-sm text-xs items-center text-gray-500'><StarRating rating={5} maxRating={5} /> 337,762 rating</div>
                    <p className='font-bold lg:text-xl md:text-lg text-md flex items-center'><span className='text-red-600'>${product.price}</span> - ${product.price}</p>
                    <hr className='my-3 lg:max-w-[300px] w-full text-gray-400'/>
                    <div className="grid grid-cols-2 md:gap-4 gap-2">
                        <div className='flex items-center md:gap-2 gap-1 cursor-pointer'>
                            <img className='w-1/2' src="/product-img/sideImg.png" alt="" />
                            <div>
                                <p className='md:text-sm text-xs'>Curology + 2</p>
                                <h1 className='md:text-sm text-xs font-bold'>$34.99</h1>
                            </div>
                        </div>
                        <div className='flex items-center md:gap-2 gap-1 cursor-pointer'>
                            <img className='w-1/2' src="/product-img/sideImg2.png" alt="" />
                            <div>
                                <p className='md:text-sm text-xs'>Curology + 2</p>
                                <h1 className='md:text-sm text-xs font-bold'>$34.99</h1>
                            </div>
                        </div>
                        <div className='flex items-center md:gap-2 gap-1 cursor-pointer'>
                            <img className='w-1/2' src="/product-img/sideImg3.png" alt="" />
                            <div>
                                <p className='md:text-sm text-xs'>Curology + 2</p>
                                <h1 className='md:text-sm text-xs font-bold'>$34.99</h1>
                            </div>
                        </div>
                        <div className='flex items-center md:gap-2 gap-1 cursor-pointer'>
                            <img className='w-1/2' src="/product-img/sideImg4.png" alt="" />
                            <div>
                                <p className='md:text-sm text-xs'>Curology + 2</p>
                                <h1 className='md:text-sm text-xs font-bold'>$34.99</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <button className='lg:text-[16px] md:text-sm text-xs cursor-pointer bg-blue-900 text-white md:py-3 py-2 md:px-5 px-3 rounded-lg hover:bg-primary7 transition-all mt-5'
                        onClick={() => router.push(`/address/${id}`)}
                        >Buy Now</button>
                        <button className='lg:text-[16px] md:text-sm text-xs cursor-pointer bg-black text-white md:py-3 py-2 md:px-5 px-3 rounded-lg hover:bg-primary7 transition-all mt-5'
                        onClick={handleAddToCart}
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
            {/* // right */}
            <div className='lg:w-1/4 w-full border-2 border-cyan-600 md:p-5 p-2 grid grid-cols-1'>
            <h1 className='font-bold md:text-[16px] text-sm'>FREE delivery Sunday, February 5 on $25 of items shipped by Aladdin</h1>
            <h1 className='font-bold md:text-[16px] text-sm pb-4 pt-3'>Or fastest delivery Wednesday, February 1 order within <span className='primary8'>20 hrs 41 mins</span></h1>
            <p className='primary8 flex items-center gap-1.5 md:text-[16px] text-sm'><FaLocationDot /> Deliver to New York 10001</p>
            <p className='text-green-900 pb-3 pt-3 md:text-[16px] text-sm'>In Stock.</p>
            <button className='flex items-center gap-2 bg-cyan-800 text-white w-fit rounded-md sm:py-2 py-1 sm:px-3 px-2'><span className='font-bold border-r border-gray-400 pr-2 cursor-pointer'
            onClick={increaseCount}
            >+</span>Qty: {quantity} <span className='font-bold border-l border-gray-400 pl-2 cursor-pointer'
            onClick={decreaseCount}
            >-</span></button>
            <button className='flex items-center justify-center bg-cyan-800 text-white mt-5 hover:bg-white cursor-pointer hover:text-cyan-800 border-2 border-cyan-800 transition-all rounded-md py-2 px-3 md:text-[16px] text-sm'>Contact supplier</button>
            <button className='flex items-center justify-center  bg-white text-cyan-800 border-2 border-cyan-800 mt-5 rounded-md py-2 px-3 hover:bg-cyan-800 hover:text-white transition-all md:text-[16px] text-sm'>Chat now</button>
            <h1 className='font-bold pt-3 pb-3 md:text-[18px] text-sm'>Puchase details</h1>
            <p className='primary8 font-bold flex md:text-[16px] text-sm items-center cursor-pointer gap-1.5'><MdLocalShipping /> Shipping</p>
            <p className='primary8 font-bold flex md:text-[16px] text-sm items-center cursor-pointer gap-1.5'><BiCheckShield /> Payments</p>
            </div>
        </div>

                {/* // Cards */}

        <div className='max-w-[1360px] xl:pl-5 pl-1 xl:pr-5 pr-1 m-auto md:mt-7 mt-7 pb-13 border-b-2 border-gray-200'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
                
                {/* // Product details */}
        <div className='max-w-[1360px] xl:pl-8 pl-4 xl:pr-8 pr-4 m-auto mt-7 pb-11 border-b-2 border-gray-200'>
            <h1 className='font-bold xl:text-2xl md:text-xl text-lg primary8 pb-4'>Product details</h1>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2 md:text-[16px] text-[14px]'><span className='font-bold text-black'>Manufacturer:</span> Aladdin</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2 md:text-[16px] text-[14px]'><span className='font-bold text-black'>Product Dimensions:</span> 5inch</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2 md:text-[16px] text-[14px]'><span className='font-bold text-black'>Item molel number:</span> JA20502</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2 md:text-[16px] text-[14px]'><span className='font-bold text-black'>Date first available:</span> April 2024</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2 md:text-[16px] text-[14px]'><span className='font-bold text-black'>Product number:</span> AA797HH9</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2 md:text-[16px] text-[14px]'><span className='font-bold text-black'>Country Origin:</span> UK</p>
            <p className='flex items-center gap-1.5 text-gray-700 pb-2 md:text-[16px] text-[14px]'><span className='font-bold text-black'>Best sellers rank:</span> #1</p>
        </div>

                {/* /// Customer reviews */}
        <div className='max-w-[1360px] pl-2 pr-2 m-auto mt-7 pb-11 border-b-2 border-gray-200 md:flex grid items-start gap-3 justify-between'>
                {/* //left */}
            <div className='max-w-[500px] '>
                <CustomerReviews />
            </div>
                {/* // right */}
            <div className='h-full md:w-4/6 w-full xl:p-6 p-2'>
                <h1 className='font-bold xl:text-2xl md:text-xl text-lg primary8 pb-4'>Reviews with images</h1>
                <div className='flex items-center md:gap-5 gap-2'>
                    <div>
                    <img src="./customer/user2.png" alt="" />
                    </div>
                    <div>
                    <img src="./customer/user1.png" alt="" />
                    </div>
                    <div>
                    <img src="./customer/user3.png" alt="" />
                    </div>
                </div>
                <h1 className='font-bold md:text-xl text-lg pt-4 pb-4'>Top reviews from United states</h1>
                <div className='flex items-center md:gap-3 gap-1 mb-3'>
                    <img className='md:w-17 w-14 h-full' src="./customer/seller.png" alt="" />
                    <h1 className='md:text-lg text-[14px]'>Saminatha</h1>
                </div>
                <div className='flex items-center sm:gap-3 gap-1 sm:text-[16px] text-[14px] font-semibold pb-4'>
                <StarRating rating={4} maxRating={5} />
                Overall - greate for all price!
                </div>
                <p className='pb-2 text-gray-700 md:text-[16px] text-[14px]'>Reviewed in the United States us on January 27, 2023</p>
                <p className='pb-4 text-gray-800 flex items-center gap-7 md:text-[16px] text-[14px]'><span>Fire TV Stick</span> Verified Purchase</p>

                <p className='pb-4 text-gray-600 max-w-[650px] md:text-[16px] text-[14px]'>
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. added a review on January 27, 2023, rewarded by Saminatha.
                </p>
                <p className='pb-4 text-gray-500 text-sm'>19 people found this helpful</p>
                <div className='flex items-center gap-3'>
                <button className='flex items-center gap-2 cursor-pointer bg-cyan-800 text-white w-fit rounded-md py-2 px-6'>
                    Helpful
                </button>
                <button className='flex items-center gap-2 cursor-pointer text-cyan-800 w-fit rounded-md py-2 px-3'>
                    Report abuse
                </button>
                </div>

                        {/* Again addedd review */}
                <div className='flex items-center md:gap-3 gap-1 mb-3 mt-5'>
                    <img className='md:w-17 w-14 h-full' src="./customer/seller.png" alt="" />
                    <h1 className='md:text-lg text-[14px]'>Saminatha</h1>
                </div>
                <div className='flex items-center sm:gap-3 gap-1 sm:text-[16px] text-[14px] font-semibold pb-4'>
                <StarRating rating={4} maxRating={5} />
                Overall - greate for all price!
                </div>
                <p className='pb-2 text-gray-700 md:text-[16px] text-[14px]'>Reviewed in the United States us on January 27, 2023</p>
                <p className='pb-4 text-gray-800 flex items-center gap-7 md:text-[16px] text-[14px]'><span>Fire TV Stick</span> Verified Purchase</p>

                <p className='pb-4 text-gray-600 max-w-[650px] md:text-[16px] text-[14px]'>
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. added a review on January 27, 2023, rewarded by Saminatha.
                </p>
                <p className='pb-4 text-gray-500 text-sm'>19 people found this helpful</p>
                <div className='flex items-center gap-3'>
                <button className='flex items-center gap-2 cursor-pointer bg-cyan-800 text-white w-fit rounded-md py-2 px-6'>
                    Helpful
                </button>
                <button className='flex items-center gap-2 cursor-pointer text-cyan-800 w-fit rounded-md py-2 px-3'>
                    Report abuse
                </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default page