"use client";

import AladdinHeaderCustom from '@/components/after-header/Header'
import StarRating from '@/components/start-rating/Rating';
import React, { useState } from 'react'

function page() {

    const [active, setActive] = useState("address");
    const [cartItems, setCartItems] = useState([
        {
          id: "1",
          name: "Curology the sun screen 320 of lotion.",
          image: "/customer/user3.png",
          brand: "Aladdin",
          originalPrice: 39.99,
          discountedPrice: 30.43,
          quantity: 1,
        },
        {
          id: "2",
          name: "Curology the sun screen 320 of lotion.",
          image: "/customer/user3.png",
          brand: "Curology",
          originalPrice: 39.99,
          discountedPrice: 30.43,
          quantity: 1,
        }
    ]);

      // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
    const shippingPrice = 12.87;
       // Order total price
    const orderTotal = totalPrice + shippingPrice;

      // move to next step
    const nextStep = () => {
        if (active === "address") {
          setActive("shipping");
        } else if (active === "shipping") {
          setActive("payment");
        } else if (active === "payment") {
          setActive("review");
        } else if (active === "review") {
          setActive("address");
        }
    }
    const layouts = () => {
        switch (active) {
            case "address":
                return (
                        <div className="pl-6 md:pl-8">
                              <h2 className="mb-6 text-2xl font-semibold text-black">Address</h2>
                        
                              <form className="space-y-4">
                                {/* Email Address */}
                                <div>
                                  <label htmlFor="email" className="mb-1 block text-gray-700">
                                    Email Address
                                  </label>
                                  <input
                                    id="email"
                                    type="email"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                  />
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                  {/* First Name */}
                                  <div>
                                    <label htmlFor="firstName" className="mb-1 block text-gray-700">
                                      First Name
                                    </label>
                                    <input
                                      id="firstName"
                                      type="text"
                                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    />
                                  </div>
                        
                                  {/* Last Name */}
                                  <div>
                                    <label htmlFor="lastName" className="mb-1 block text-gray-700">
                                      Last Name
                                    </label>
                                    <input
                                      id="lastName"
                                      type="text"
                                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    />
                                  </div>
                                </div>
                        
                                {/*  Address */}
                                <div>
                                  <label htmlFor="email" className="mb-1 block text-gray-700">
                                    Address
                                  </label>
                                  <input
                                    id="address"
                                    type="text"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                  />
                                </div>
                        
                                <div className="grid gap-4 md:grid-cols-2">
                                  {/* City */}
                                  <div>
                                    <label htmlFor="city" className="mb-1 block text-gray-700">
                                      City
                                    </label>
                                    <div className="flex">
                                      {/* City */}
                                      <input
                                        id="city"
                                        type="text"
                                        className="w-full rounded-r-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    
                                      />
                                    </div>
                                  </div>
                        
                                  {/* State */}
                                  <div>
                                    <label htmlFor="state" className="mb-1 block text-gray-700">
                                      State
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="state"
                                        type="text"
                                        placeholder=""
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                      />
                                     
                                    </div>
                                  </div>
                                  {/* Zip code */}
                                  <div>
                                    <label htmlFor="zip" className="mb-1 block text-gray-700">
                                      Zip Code
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="zip"
                                        type="text"
                                        placeholder=""
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                      />
                                     
                                    </div>
                                  </div>
                                  {/* Phone Number */}
                                  <div>
                                    <label htmlFor="phone" className="mb-1 block text-gray-700">
                                      Phone Number
                                    </label>
                                    <div className="flex">
                                      {/* Phone Number */}
                                      <input
                                        id="phone"
                                        type="tel"
                                        className="w-full rounded-r-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
            );
            case "shipping":
                return (
                  <div className="pl-6 md:pl-8">
                    <h2 className="mb-6 text-2xl font-semibold text-black">Shipping</h2>
                    <div className='flex items-center gap-3 justify-between border-b border-gray-400 pb-10'>
                      <input type="checkbox" id="standard" name="shipping" value="standard" className="w-4 h-4" />
                      <div  className="pr-[31vw] flex flex-col justify-center items-center">
                      <label htmlFor="standard" className='font-bold text-xl'>Standard</label>  
                      <p className='text-sm text-gray-500'>Delivery in 5-7 days</p>
                      </div>
                      <p className="ml-2 border-b border-black">Free</p>

                    </div>      
                    <div className='flex items-center gap-3 justify-between border-b border-gray-400 pb-10 pt-9'>
                      <input type="checkbox" id="express" name="shipping" value="express" className="w-4 h-4" />
                      <div  className="pr-[31vw] flex flex-col justify-center items-center">
                      <label htmlFor="express" className='font-bold text-xl'>Express</label>  
                      <p className='text-sm text-gray-500'>Delivered Tomorrow</p>
                      </div>
                      <p className="ml-2 border-b border-black">$12.87</p>

                    </div>      
                  </div>
            );
            case "payment":
                return (
                  <div className="pl-6 md:pl-8">
                  <h2 className="mb-6 text-2xl font-semibold text-black">Payment Information</h2>
                  <form className="space-y-4 mb-9">
                    {/* Card Number */}
                    <div>
                                  <label htmlFor="number" className="mb-1 block text-gray-700">
                                    Card Number
                                  </label>
                                  <input
                                    id="number"
                                    type="text"
                                    placeholder="1234 5678 9101 1121"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                  />
                                </div>
                    {/* Card */}
                    <div>
                                    <label htmlFor="card" className="mb-1 block text-gray-700">
                                      Card
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="card"
                                        type="text"
                                        placeholder=""
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                      />
                                     
                                    </div>
                                  </div>
                    {/*  */}
                                    <div className="relative">
                                      <input
                                        
                                        type="text"
                                        placeholder=""
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                      />
                                     
                                    </div>
                    {/* CVV */}
                    <div>
                                    <label htmlFor="cvv" className="mb-1 block text-gray-700">
                                      CVV
                                    </label>
                                    <div className="flex">
                                      {/* Phone Number */}
                                      <input
                                        id="cvv"
                                        type="tel"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    
                                      />
                                    </div>
                                  </div>
                  </form>
                  <form className="space-y-4">
                  <h2 className="mb-6 text-2xl font-semibold text-black">Billing Address</h2>
                                {/* Email Address */}
                                <div>
                                  <label htmlFor="email" className="mb-1 block text-gray-700">
                                    Email Address
                                  </label>
                                  <input
                                    id="email"
                                    type="email"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                  />
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                  {/* First Name */}
                                  <div>
                                    <label htmlFor="firstName" className="mb-1 block text-gray-700">
                                      First Name
                                    </label>
                                    <input
                                      id="firstName"
                                      type="text"
                                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    />
                                  </div>
                        
                                  {/* Last Name */}
                                  <div>
                                    <label htmlFor="lastName" className="mb-1 block text-gray-700">
                                      Last Name
                                    </label>
                                    <input
                                      id="lastName"
                                      type="text"
                                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    />
                                  </div>
                                </div>
                        
                                {/*  Address */}
                                <div>
                                  <label htmlFor="email" className="mb-1 block text-gray-700">
                                    Address
                                  </label>
                                  <input
                                    id="address"
                                    type="text"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                  />
                                </div>
                        
                                <div className="grid gap-4 md:grid-cols-2">
                                  {/* City */}
                                  <div>
                                    <label htmlFor="city" className="mb-1 block text-gray-700">
                                      City
                                    </label>
                                    <div className="flex">
                                      {/* City */}
                                      <input
                                        id="city"
                                        type="text"
                                        className="w-full rounded-r-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    
                                      />
                                    </div>
                                  </div>
                        
                                  {/* State */}
                                  <div>
                                    <label htmlFor="state" className="mb-1 block text-gray-700">
                                      State
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="state"
                                        type="text"
                                        placeholder=""
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                      />
                                     
                                    </div>
                                  </div>
                                  {/* Zip code */}
                                  <div>
                                    <label htmlFor="zip" className="mb-1 block text-gray-700">
                                      Zip Code
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="zip"
                                        type="text"
                                        placeholder=""
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                      />
                                     
                                    </div>
                                  </div>
                                  {/* Phone Number */}
                                  <div>
                                    <label htmlFor="phone" className="mb-1 block text-gray-700">
                                      Phone Number
                                    </label>
                                    <div className="flex">
                                      {/* Phone Number */}
                                      <input
                                        id="phone"
                                        type="tel"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                </div>
            );
            case "review":
                return (
                  <div className="pl-6 md:pl-8">
                    <h2 className="mb-6 text-2xl font-semibold text-black">Payment Information</h2>
                    <div>
                      <div>
                        <h2 className="mb-6 text-2xl font-semibold text-black">Payment Information</h2>
                        <p>Kiran</p>
                        <p>234 Street Avenue</p>
                        <p>City, State, Zip code</p>
                        <p>New York 10001</p>
                        <p>+1 123 456 789</p>

                        <h2 className="mb-6 text-2xl font-semibold text-black border-b">Edit</h2>
                        <h2 className="mb-6 text-2xl font-semibold text-black">Standard Shipping</h2>
                        <p>Delivery in 5-7 days</p>

                        <h2 className="mb-6 text-2xl font-semibold text-black border-b">Edit</h2>
                      </div>
                      <div>
                        <h2 className="mb-6 text-2xl font-semibold text-black">Payment Information</h2>

                      </div>

                    </div>
                  </div>
            );
        }
    }
  return (
    <>
            {/* // Header */}
        <AladdinHeaderCustom />
            {/* // Steps */}
        <div className='max-w-[1300px] mx-auto mt-13 mb-13 flex items-center justify-start gap-3 font-sans'>
            <div className={`flex items-center gap-2 text-xl ${active === "address" ? "text-cyan-700" : "text-gray-500"}`}><span className={`text-xl w-11 h-11 flex items-center justify-center rounded-4xl ${active === "address" ? "bg-cyan-700 text-white" : "bg-gray-200 text-gray-500"} `}>1</span>Address -------</div>
            <div className={`flex items-center gap-2 text-xl ${active === "shipping" ? "text-cyan-700" : "text-gray-500"}`}><span className={`text-xl w-11 h-11 flex items-center justify-center rounded-4xl ${active === "shipping" ? "bg-cyan-700 text-white" : "bg-gray-200 text-gray-500"} `}>2</span>Shipping -------</div>
            <div className={`flex items-center gap-2 text-xl ${active === "payment" ? "text-cyan-700" : "text-gray-500"}`}><span className={`text-xl w-11 h-11 flex items-center justify-center rounded-4xl ${active === "payment" ? "bg-cyan-700 text-white" : "bg-gray-200 text-gray-500"} `}>3</span>Payment -------</div>
            <div className={`flex items-center gap-2 text-xl ${active === "review" ? "text-cyan-700" : "text-gray-500"}`}><span className={`text-xl w-11 h-11 flex items-center justify-center rounded-4xl ${active === "review" ? "bg-cyan-700 text-white" : "bg-gray-200 text-gray-500"} `}>4</span>Review</div>
        </div>
            
            {/* // Address */}
        <div className='max-w-[1300px] mx-auto mt-13 mb-13 flex items-start gap-24 font-sans'>
                {/* // Inputs section */}
            <div className='w-2/3'>
                {layouts()}
            </div>
                {/* /// Order sumary */}
            <div className='w-1/3'>
              <h1 className='text-2xl font-bold border-b border-gray-400 pb-3.5'>Order Summary</h1>
              <p className='text-cyan-600 pt-2 pb-2 border-b border-gray-400'>{cartItems.length} items</p>
              {cartItems.map((item) => (
                <div key={item.id} className='flex items-center gap-3 pt-4 pb-3 border-b border-gray-400'>
                <img className='w-20 h-20 rounded-md' src={item.image} alt="Item image" />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-md'>{item.name}</p>
                  <p><span className='font-bold'>Brand:</span> {item.brand}</p>
                  <StarRating rating={5} maxRating={5} />
                  <p className='font-bold'>${item.discountedPrice}</p>
                </div>
              </div>
              ))}
              <div className='flex items-center justify-between pt-4 pb-3'>
                <p className='font-bold text-md'>SUBTOTAL</p>
                <p className='font-bold text-md'>${totalPrice}</p>
              </div>
              <div className='flex items-center justify-between pb-3'>
                <p className='font-bold text-md'>Shipping</p>
                <p className='font-bold text-md'>${shippingPrice}</p>
              </div>
              <div className='flex items-center justify-between pb-3'>
                <p className='font-bold text-md'>Order Total</p>
                <p className='font-bold text-md'>${orderTotal}</p>
              </div>

              <button className='bg-cyan-700 text-white text-md w-full h-11 flex items-center mt-3 cursor-pointer justify-center rounded-md'
              onClick={nextStep}
              >Continue</button>
            </div>
        </div>
    </>
  )
}

export default page