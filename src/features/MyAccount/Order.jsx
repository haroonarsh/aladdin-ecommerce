'use client'

import { useState } from 'react'
import { Package, ChevronDown, ChevronUp } from 'lucide-react'
import OrderDetails from './OrderDetails'

const orders = [
    {
        id: '1234',
        date: '2024-01-15',
        total: 129.99,
        status: 'Delivered',
        items: [
            { name: 'Wireless Headphones', quantity: 1, price: 79.99 },
            { name: 'Phone Case', quantity: 1, price: 19.99 },
            { name: 'Screen Protector', quantity: 2, price: 15.00 }
        ]
    },
    {
        id: '5678',
        date: '2024-01-10',
        total: 54.99,
        status: 'In Transit',
        items: [
            { name: 'Fitness Tracker', quantity: 1, price: 54.99 }
        ]
    },
    {
        id: '9012',
        date: '2024-01-05',
        total: 89.97,
        status: 'Processing',
        items: [
            { name: 'Smart Home Hub', quantity: 1, price: 89.97 }
        ]
    }
]



export default function Orders() {
    const [expandedOrder, setExpandedOrder] = useState(null)

    const toggleOrderDetails = (orderId) => {
        setExpandedOrder(expandedOrder === orderId ? null : orderId)
    }

    const getStatusClass = (status) => {
        switch (status) {
            case 'Delivered':
                return 'text-yellow-500';
            case 'In Transit':
                return 'text-red-500';
            case 'Processing':
                return 'text-green-400';
            default:
                return 'text-gray-400'
        }
    }

    return (
        <div className="w-full mx-auto md:p-6 p-2">
            <h1 className="md:text-2xl text-xl font-semibold text-cyan-800 mb-8">My Orders</h1>

            <div className="md:space-y-6 space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-cyan-800 shadow-lg rounded-lg overflow-hidden">
                        <div
                            className="md:p-6 sm:p-4 p-2 flex items-center justify-between cursor-pointer"
                            onClick={() => toggleOrderDetails(order.id)}
                        >
                            <div className="flex items-center md:gap-4 sm:gap-1.5 gap-0.5">
                                <Package className="text-white" size={22} />
                                <div>
                                    <p className="text-white md:text-[16px] text-sm font-medium">Order #{order.id}</p>
                                    <p className="md:text-sm text-xs text-gray-200">
                                        {new Date(order.date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-4 sm:gap-2 gap-0.5">
                                <div>
                                    <p className="text-white md:text-[16px] sm:text-sm text-xs font-medium">${order.total.toFixed(2)}</p>
                                    <p className={`md:text-sm text-xs text-gray-400 ${getStatusClass(order.status)}`}>{order.status}</p>
                                </div>
                                {expandedOrder === order.id ? (
                                    <ChevronUp className="text-gray-200" size={20} />
                                ) : (
                                    <ChevronDown className="text-gray-200" size={20} />
                                )}
                            </div>
                        </div>
                        {expandedOrder === order.id && <OrderDetails order={order} />}
                    </div>
                ))}
            </div>
        </div>
    )
}
