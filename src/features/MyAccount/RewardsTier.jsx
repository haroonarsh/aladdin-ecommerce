import { Star } from 'lucide-react'

export default function RewardsTier({ points, tier }) {
    return (
        <div className="bg-cyan-800 rounded-lg md:p-6 p-2">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="md:text-lg text-md lg:text-xl text-md font-semibold text-white">Rewards Balance</h2>
                    <p className="text-gray-300 md:text-sm lg:text-base text-xs">Current Tier: {tier}</p>
                </div>
                <div className="text-right">
                    <p className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-teal-300">{points}</p>
                    <p className="text-gray-300 md:text-sm lg:text-base text-xs">points</p>
                </div>
            </div>
            <div className="w-full bg-cyan-700 rounded-full h-2.5">
                <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="md:text-sm text-xs text-gray-300 mt-2">250 points until next tier</p>
        </div>
    )
}
