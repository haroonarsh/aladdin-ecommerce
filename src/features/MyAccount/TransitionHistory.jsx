import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

const transactions = [
    {
        id: 1,
        type: 'credit',
        amount: 50.00,
        description: 'Added money via Visa card',
        date: '2024-01-15',
        time: '14:30'
    },
    {
        id: 2,
        type: 'debit',
        amount: 29.99,
        description: 'Purchase - Premium Subscription',
        date: '2024-01-14',
        time: '09:15'
    },
    {
        id: 3,
        type: 'credit',
        amount: 100.00,
        description: 'Refund - Order #12345',
        date: '2024-01-13',
        time: '16:45'
    }
]

export default function TransactionHistory() {
    return (
        <div className="bg-cyan-800 shadow-lg rounded-lg md:p-6 p-2">
            <div className="flex justify-between items-center mb-6">
                <h2 className="md:text-lg text-md text-white">Transaction History</h2>
                <button className="text-gray-300 hover:text-white transition-all duration-200 md:text-sm text-[12px]">
                    View All
                </button>
            </div>
            <div className="space-y-4">
                {transactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="flex items-center justify-between md:p-4 p-1 bg-cyan-700 rounded-lg"
                    >
                        <div className="flex items-center md:gap-4 gap-1">
                            <div className={`
                p-2 rounded-full
                ${transaction.type === 'credit'
                                    ? 'bg-green-500/20 text-green-500'
                                    : 'bg-red-500/20 text-red-500'
                                }
              `}>
                                {transaction.type === 'credit'
                                    ? <ArrowDownLeft size={20} />
                                    : <ArrowUpRight size={20} />
                                }
                            </div>
                            <div>
                                <p className="text-white md:text-[16px] text-[14px]">{transaction.description}</p>
                                <p className="md:text-sm text-[10px] text-gray-300">
                                    {new Date(transaction.date).toLocaleDateString()} at {transaction.time}
                                </p>
                            </div>
                        </div>
                        <p className={`font-medium md:text-[16px] sm:text-[14px] text-[12px] ${transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'
                            }`}>
                            {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
