"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  // Initial cart items
  const [cartItems, setCartItems] = useState([]);
  const { getCart, removeFromCart } = useCart();
  const router = useRouter();

  // Fetch cart items
  const fetchCartItems = async () => {
    getCart().then((response) => {
      setCartItems(response.data.cart);
      console.log("Cart Items:", response.data.cart);
      
    })
  }

  useEffect(() => {
    fetchCartItems();
  }, []);
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0)

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className="max-w-[1360px] mx-auto mt-12 p-6">
      <h2 className="mb-6 text-2xl font-medium text-gray-800"><span className="font-semibold">Cart</span> ({cartItems.length} Items)</h2>

      <div className="mb-6 overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse rounded-md border-2 border-gray-400 bg-white">
          {/* Table Header */}
          <thead>
            <tr className="border-b-2 border-gray-400 text-left">
              <th className="p-4 font-medium text-cyan-600">Items</th>
              <th className="p-4 font-medium text-cyan-600">Price</th>
              <th className="p-4 font-medium text-cyan-600">Quantity</th>
              <th className="p-4 font-medium text-cyan-600">Total</th>
              <th className="p-4 font-medium text-cyan-600">Remove</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id} className="border-b border-gray-200">
                {/* Item */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.productId.imageUrl || "/placeholder.svg"}
                        alt={item.productId.name}
                        width={60}
                        height={80}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="max-w-[200px]">
                      <p className="text-sm text-gray-700">{item.productId.name}</p>
                    </div>
                  </div>
                </td>

                {/* Price */}
                <td className="p-4 text-sm text-gray-700">
                  ${item.productId.price.toFixed(2)} - ${item.productId.price.toFixed(2)}
                </td>

                {/* Quantity */}
                <td className="p-4 text-sm text-gray-700">{item.quantity.toString().padStart(2, "0")}</td>

                {/* Total */}
                <td className="p-4 text-sm text-gray-700">${(item.productId.price * item.quantity).toFixed(2)}</td>

                {/* Remove */}
                <td className="p-4">
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}

            {/* Empty Cart Message */}
            {cartItems.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">
                  Your cart is empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Cart Footer */}
      <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
        <div className="order-2 sm:order-1">
          {cartItems.length > 0 && (
            <button className="rounded-md bg-cyan-600 px-6 py-2 text-white transition-colors hover:bg-cyan-700"
              onClick={() => router.push("/cart")}
            >
              Update
            </button>
          )}
        </div>
        <div className="order-1 text-xl font-medium text-gray-800 sm:order-2">Total: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  )
}

