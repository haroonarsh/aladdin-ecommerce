import { CreditCard, Plus } from 'lucide-react'

const paymentMethods = [
    {
        id: 1,
        type: 'Visa',
        last4: '4242',
        expiry: '12/24'
    },
    {
        id: 2,
        type: 'Mastercard',
        last4: '8888',
        expiry: '08/25'
    }
]

export default function PaymentMethods() {
    return (
        <div className="bg-cyan-800 shadow-lg rounded-lg md:p-6 p-2 mb-8">
            <h2 className="md:text-lg text-md text-white mb-4">Payment Methods</h2>
            <div className="space-y-4">
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        className="flex items-center justify-between md:p-4 p-1 bg-cyan-700 rounded-lg"
                    >
                        <div className="flex items-center md:gap-4 gap-1">
                            <CreditCard className="text-white" size={24} />
                            <div>
                                <p className="text-white md:text-lg text-[14px]">{method.type} •••• {method.last4}</p>
                                <p className="md:text-sm text-[10px] text-gray-300">Expires {method.expiry}</p>
                            </div>
                        </div>
                        <button className="md:text-lg text-[14px] text-gray-400 hover:text-white transition-colors">
                            Edit
                        </button>
                    </div>
                ))}
                <button className="flex items-center gap-2 w-full p-4 border border-dashed border-cyan-700 rounded-lg hover:bg-primaryLight text-gray-200 hover:text-white md:text-lg text-[14px]  transition-colors">
                    <Plus size={20} />
                    <span>Add New Payment Method</span>
                </button>
            </div>
        </div>
    )
}
