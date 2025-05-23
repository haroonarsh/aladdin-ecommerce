'use client'

import { useState } from 'react'
import { CreditCard, Plus, Edit2, Trash2 } from 'lucide-react'
import PaymentMethodForm from './PaymentMethodForm'

const initialPaymentMethods = [
    {
        id: 1,
        type: 'Visa',
        cardNumber: '**** **** **** 1234',
        expiryDate: '12/24',
        cardHolder: 'John Doe'
    },
    {
        id: 2,
        type: 'Mastercard',
        cardNumber: '**** **** **** 5678',
        expiryDate: '06/25',
        cardHolder: 'Jane Smith'
    }
]

export default function Payments() {
    const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods)
    const [editingMethod, setEditingMethod] = useState(null)
    const [isAddingNew, setIsAddingNew] = useState(false)

    const handleAddPaymentMethod = (newMethod) => {
        setPaymentMethods([...paymentMethods, { ...newMethod, id: Date.now() }])
        setIsAddingNew(false)
    }

    const handleEditPaymentMethod = (updatedMethod) => {
        setPaymentMethods(methods => methods.map(method =>
            method.id === updatedMethod.id ? updatedMethod : method
        ))
        setEditingMethod(null)
    }

    const handleDeletePaymentMethod = (id) => {
        setPaymentMethods(methods => methods.filter(method => method.id !== id))
    }

    return (
        <div className="w-full mx-auto md:p-6 p-2">
            <h1 className="md:text-2xl text-xl font-semibold text-cyan-800 mb-8">Payment Methods</h1>

            <div className="bg-cyan-800 shadow-lg rounded-lg md:p-6 p-2">
                <h2 className="md:text-lg text-md font-semibold text-white mb-4">Saved Payment Methods</h2>
                <div className="space-y-4">
                    {paymentMethods.map(method => (
                        <div key={method.id} className="flex items-center justify-between bg-cyan-700 md:p-4 sm:p-2 p-1 rounded-lg">
                            <div className="flex items-center">
                                <CreditCard className="text-teal-200 mr-4" size={22} />
                                <div>
                                    <h3 className="text-white md:text-lg text-sm font-medium">{method.type}</h3>
                                    <p className="text-gray-200 md:text-sm text-xs">{method.cardNumber}</p>
                                    <p className="text-gray-200 md:text-sm text-xs">Expires: {method.expiryDate}</p>
                                </div>
                            </div>
                            <div className="flex sm:space-x-2 space-x-1">
                                <button
                                    onClick={() => setEditingMethod(method)}
                                    className="text-teal-200 hover:text-teal-400"
                                >
                                    <Edit2 size={17} />
                                </button>
                                <button
                                    onClick={() => handleDeletePaymentMethod(method.id)}
                                    className="text-red-500 hover:text-red-400"
                                >
                                    <Trash2 size={17} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add New Payment Method Button */}
                {!isAddingNew && !editingMethod && (
                    <button
                        onClick={() => setIsAddingNew(true)}
                        className="mt-4 md:text-lg text-sm flex items-center text-teal-200 hover:text-teal-400 duration-200 transition-all"
                    >
                        <Plus size={18} className="sm:mr-2 mr-1" />
                        Add New Payment Method
                    </button>
                )}

                {/* Payment Method Form */}
                {(isAddingNew || editingMethod) && (
                    <PaymentMethodForm
                        method={editingMethod}
                        onSubmit={editingMethod ? handleEditPaymentMethod : handleAddPaymentMethod}
                        onCancel={() => {
                            setIsAddingNew(false)
                            setEditingMethod(null)
                        }}
                    />
                )}
            </div>
        </div>
    )
}
