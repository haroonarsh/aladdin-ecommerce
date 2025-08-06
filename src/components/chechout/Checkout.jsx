"use client";

import AladdinHeaderCustom from '@/components/after-header/Header'
import StarRating from '@/components/start-rating/Rating';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { loadStripe } from '@stripe/stripe-js';
import { usePayment } from '@/hooks/usePayment';
import { useOrder } from '@/hooks/useOrder';
import { Elements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

// load Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY); 

const Checkout = () => {

  const router = useRouter();
  const [active, setActive] = useState("address");
  const [cartItems, setCartItems] = useState([]);
  const { getCart } = useCart();
  const { handlePayment, loading } = usePayment();
  const { createOrder, updateOrderStatus } = useOrder();
 

  const handleChange = (e) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value
    });
  }

      // Fetch cart items
  useEffect(() => {
    getCart().then((response) => {
      setCartItems(response.data.cart);
      console.log("Cart Items:", response.data.cart);
      
    })
  }, []);
    
      // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0);
  const shippingPrice = 12.87;
       // Order total price
  const orderTotal = totalPrice + shippingPrice;

   const [items, setItems] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    shippingAddress: "",
    zipCode: "",
  });
  const [data, setData] = useState(null);
    // Function to handle payment
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!items.shippingAddress || items.length === 0) {
      alert("Please fill in all required fields.");
      return;
    }

    // Construct order data with current cartItems
    const orderData = {
      ...items,
      products: cartItems.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
      })),
      totalAmount: orderTotal
    };

    try {
      // Step 1: Create order
      await createOrder(orderData)
      .then((order) => {
        console.log("Order created successfully:", order);
        // Assuming the order creation returns a clientSecret for payment processing
        // const clientSecret = order.data.clientSecret; // Adjust based on your API response structure
        // console.log("Client Secret:", clientSecret);
        // setData(order); // Store the order data for later use
      

      console.log("Order created:", order);
      
      if (!order.data.clientSecret) {
        throw new Error("Payment client secret not received from server.");
      }

      const clientSecret = order.data.clientSecret;
      console.log("clientSecret A:", order.data.clientSecret);
      console.log("clientSecret D:", clientSecret);
      console.log("Order Data:", orderData);
      
      
      // Step 2: Process payment with stripe
      const paymentIntent = handlePayment(clientSecret, orderData);
      console.log("Payment Intent:", paymentIntent);

      // Step 3: Update order status
      const orderId = order.data.order._id;
        updateOrderStatus(orderId, { paymentStatus: "Paid", orderStatus: "Delivered" });
        console.log("Order status updated to completed");

      }).catch((error) => {
        console.error("Error creating order:", error);
        alert("An error occurred during order creation. Please try again.");
      })
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during checkout. Please try again.");
    }
  }

      // move to next step
    const nextStep = () => {
        if (active === "address") {
          setActive("shipping");
        } else if (active === "shipping") {
          setActive("review");
        } else if (active === "review") {
          setActive("payment");
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
                                    name="email"
                                    value={items.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                  />
                                </div>
                                <div>
                                  <label htmlFor="name" className="mb-1 block text-gray-700">
                                    Full Name
                                  </label>
                                  <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={items.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                  />
                                </div>
                        
                                {/*  Address */}
                                <div>
                                  <label htmlFor="shippingAddress" className="mb-1 block text-gray-700">
                                    Address
                                  </label>
                                  <input
                                    id="shippingAddress"
                                    type="text"
                                    name="shippingAddress"
                                    value={items.shippingAddress}
                                    onChange={handleChange}
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
                                        name="city"
                                        value={items.city}
                                        onChange={handleChange}
                                        className="w-full rounded-l-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    
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
                                        name="state"
                                        value={items.state}
                                        onChange={handleChange}
                                        placeholder=""
                                        className="w-full rounded-r-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                      />
                                     
                                    </div>
                                  </div>
                                  {/* Zip code */}
                                  <div>
                                    <label htmlFor="zipCode" className="mb-1 block text-gray-700">
                                      Zip
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="zipCode"
                                        type="text"
                                        name="zipCode"
                                        value={items.zipCode}
                                        onChange={handleChange}
                                        placeholder=""
                                        className="w-full rounded-l-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
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
                                        name="phone"
                                        value={items.phone}
                                        onChange={handleChange}
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
                  <form className="space-y-4 mb-9"
                    onSubmit={handleSubmit}
                  >
                    {/* Card Number */}
                    <div>
                                  <label htmlFor="cardNumber" className="mb-1 block text-gray-700">
                                    Card Number
                                  </label>
                                  <CardNumberElement id='cardNumber' className="w-full rounded-md border border-gray-300 px-3 py-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
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
                                        placeholder="Enter your card details"
                                        className="w-full rounded-md placeholder:text-gray-900 border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                      />
                                     
                                    </div>
                                  </div>
                    {/* Date */}
                                    <div className="relative">
                                      <label htmlFor="cardDate" className="mb-1 block text-gray-700">
                                        Date
                                      </label>
                                      <CardExpiryElement id='cardDate' className="w-full rounded-md border border-gray-300 px-3 py-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
                                    </div>
                    {/* CVV */}
                    <div>
                                    <label htmlFor="cvv" className="mb-1 block text-gray-700">
                                      CVV
                                    </label>
                                    <div className="flex">
                                     <CardCvcElement id='cvv' className="w-full rounded-md border border-gray-300 px-3 py-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
                                    </div>
                                  </div>
                  </form>
                </div>
            );
            case "review":
                return (
                  <div className="pl-6 md:pl-8">
                    <h2 className="pb-8 mb-3 text-2xl font-semibold text-black border-b-2 border-gray-400">Payment Information</h2>
                    <div className='flex justify-between'>
                        {/* //Left section */}
                      <div>
                        <h2 className="mb-6 text-2xl font-semibold text-black">Shipping address</h2>
                        <p className='text-gray-600'>{items.name || "John Doe"}</p>
                        <p className='text-gray-600'>{items.email || "Ig2k8@example.com"}</p>
                        <p className='text-gray-600'>{items.shippingAddress || "123 Main Street"}</p>
                        <p className='text-gray-600'>{items.city || "New York"}, {items.state || "NY"}, {items.zip || "10001"}</p>
                        <p className='text-gray-600'>{items.phone || "123-456-7890"}</p>

                        <h2 className="mb-4 mt-4 text-xl font-semibold cursor-pointer text-black border-b w-fit"
                          onClick={() => setActive("address")}
                        >Edit</h2>
                        <h2 className="mb-3 text-2xl font-semibold text-black">Standard Shipping</h2>
                        <p className='text-gray-600'>Delivery in 5-7 days</p>

                        <h2 className="mb-4 mt-4 text-xl cursor-pointer font-semibold text-black border-b w-fit"
                          onClick={() => setActive("shipping")}
                        >Edit</h2>
                      </div>
                          {/* //Right section */}
                      <div>
                        <h2 className="mb-6 cursor-pointer text-2xl font-semibold text-black">Payment Information</h2>
                        <p className='text-gray-600'>Card Number</p>
                        <p className='text-gray-600'>XXXXXXXX --- 123</p>
                        <p className='text-gray-600'>23/03/2025</p>

                        <h2 className="mb-4 mt-4 text-xl cursor-pointer font-semibold text-black border-b w-fit"
                          onClick={() => setActive("payment")}
                        >Edit</h2>
                      </div>
                    </div>
                  </div>
            );
        }
    }
  return (
    <>
            {/* // Header */}
        {/* <AladdinHeaderCustom /> */}
            {/* // Steps */}
        <div className={`max-w-[1300px] mx-auto mt-32 mb-13 flex items-center cursor-pointer justify-start gap-3 font-sans ${active === "completed" ? "hidden" : ""}`}>
            <div 
            className={`flex items-center gap-2 text-xl ${active === "address" ? "text-cyan-700" : "text-gray-500"}`}
            onClick={() => setActive("address")}
            ><span className={`text-xl w-11 h-11 flex items-center justify-center rounded-4xl ${active === "address" ? "bg-cyan-700 text-white" : "bg-gray-200 text-gray-500"} `}>1</span>Address -------</div>
            <div 
            className={`flex items-center gap-2 text-xl ${active === "shipping" ? "text-cyan-700" : "text-gray-500"}`}
            onClick={() => setActive("shipping")}
            ><span className={`text-xl w-11 h-11 flex items-center justify-center rounded-4xl ${active === "shipping" ? "bg-cyan-700 text-white" : "bg-gray-200 text-gray-500"} `}>2</span>Shipping -------</div>
            <div 
            className={`flex items-center gap-2 text-xl ${active === "review" ? "text-cyan-700" : "text-gray-500"}`}
            onClick={() => setActive("review")}
            ><span className={`text-xl w-11 h-11 flex items-center justify-center rounded-4xl ${active === "review" ? "bg-cyan-700 text-white" : "bg-gray-200 text-gray-500"} `}>3</span>Review -------</div>
            <div 
            className={`flex items-center gap-2 text-xl ${active === "payment" ? "text-cyan-700" : "text-gray-500"}`}
            onClick={() => setActive("payment")}
            ><span className={`text-xl w-11 h-11 flex items-center justify-center rounded-4xl ${active === "payment" ? "bg-cyan-700 text-white" : "bg-gray-200 text-gray-500"} `}>4</span>Payment</div>
        </div>
            
            {/* // Address */}
        <div className='max-w-[1300px] mx-auto mt-13 mb-13 flex items-start gap-24 font-sans'>
                {/* // Inputs section */}
            <div className={`${active === "completed" ? "w-full" : "w-2/3"}`}>
                {layouts()}
            </div>
                {/* /// Order sumary */}
            <div className={`w-1/3 ${active === "completed" ? "hidden" : ""}`}>
              <h1 className='text-2xl font-bold border-b border-gray-400 pb-3.5'>Order Summary</h1>
              <p className='text-cyan-600 pt-2 pb-2 border-b border-gray-400'>{cartItems.length} items</p>
              {cartItems.map((item) => (
                <div key={item._id} className='flex items-center gap-3 pt-4 pb-3 border-b border-gray-400'>
                <img className='w-20 h-20 rounded-md' src={item.productId.imageUrl} alt="Item image" />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-md'>{item.productId.name}</p>
                  <p><span className='font-bold'>Brand:</span> {item.productId.brand}</p>
                  <StarRating rating={5} maxRating={5} />
                  <p className='font-bold'>${item.productId.price}</p>
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
              
              {/* <CardElement /> */}
              {active === "payment" && (
                <button className='bg-cyan-700 text-white text-md w-full h-11 flex items-center mt-3 cursor-pointer justify-center rounded-md'
              disabled={loading}
              onClick={handleSubmit}
              >Place Order</button>
              )}
              <button className={`bg-cyan-700 text-white text-md w-full h-11 flex items-center mt-3 cursor-pointer justify-center rounded-md ${active === "payment" ? "hidden" : ""}`}
              disabled={loading}
              onClick={nextStep}
              >Continue</button>
              <div className='text-end'>
                <h1 className='text-xl border-gray-400 pb-3.5 cursor-pointer pt-3'>RETURN POLICY</h1>
                <p className='text-cyan-600 pt-2 pb-2 border-b border-gray-400 cursor-pointer'>HELP</p>
              </div>
            </div>
        </div>
    </>
  )
}

// Wrap the checkout component with Elements to provide Stripe context
const CheckoutWithStripe = (props) => (
  <Elements stripe={stripePromise}>
    <Checkout {...props} />
  </Elements>
);

export default CheckoutWithStripe;