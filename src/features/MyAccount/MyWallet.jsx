export default function WalletBalance({ balance }) {
    return (
        <div className="bg-cyan-800 rounded-lg shadow-lg md:p-6 p-2 mb-8">
            <h2 className="md:text-lg text-md text-white mb-2">Total Balance</h2>
            <div className="flex items-baseline gap-1">
                <span className="md:text-3xl text-2xl font-bold text-white">$</span>
                <span className="md:text-4xl text-3xl font-bold text-white">{balance}</span>
            </div>
            <div className="mt-6 flex md:gap-4 gap-2">
                <button className="flex-1 bg-cyan-600 cursor-pointer md:text-[16px] text-sm text-white md:py-2 sm:py-1 py-0.5 md:px-4 sm:px-2 px-1 rounded-lg hover:bg-primaryExtraLight transition-colors">
                    Add Money
                </button>
                <button className="flex-1 border border-primaryLight hover:border-primaryExtraLight md:text-[16px] text-sm text-white md:py-2 py-1 md:px-4 px-2 rounded-lg hover:bg-primaryLight transition-colors">
                    Withdraw
                </button>
            </div>
        </div>
    )
}
