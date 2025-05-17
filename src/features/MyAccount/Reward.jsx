'use client'

import { useState } from 'react'
import { Gift, Star, Clock } from 'lucide-react'
import RewardsTier from './RewardsTier'
import AvailableRewards from './AvailableRewards'
import PointsHistory from './PointsHistory'

export default function Rewards() {
    const [activeTab, setActiveTab] = useState('available')

    return (
        <div className="w-full mx-auto md:p-6 p-2">
            <h1 className="md:text-2xl text-xl font-semibold text-cyan-800 mb-8">My Rewards</h1>

            <RewardsTier points={1250} tier="Gold" />

            <div className="mt-8 bg-gray-800 rounded-lg overflow-hidden">
                <div className="flex border-b border-gray-700">
                    <button
                        className={`flex-1 md:py-4 py-2 md:px-6 px-4 md:text-sm text-xs font-medium ${activeTab === 'available'
                            ? 'bg-cyan-800 text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                        onClick={() => setActiveTab('available')}
                    >
                        <Gift className="inline-block mr-2" size={18} />
                        Available Rewards
                    </button>
                    <button
                        className={`flex-1 md:py-4 py-2 md:px-6 px-4 md:text-sm text-xs font-medium ${activeTab === 'history'
                            ? 'bg-cyan-800 text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                        onClick={() => setActiveTab('history')}
                    >
                        <Clock className="inline-block mr-2" size={18} />
                        Points History
                    </button>
                </div>
                <div className="md:p-6 p-2">
                    {activeTab === 'available' ? <AvailableRewards /> : <PointsHistory />}
                </div>
            </div>
        </div>
    )
}
