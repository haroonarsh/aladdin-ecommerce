const rewards = [
    { id: 1, name: '$5 off your next purchase', points: 500 },
    { id: 2, name: 'Free shipping on your next order', points: 750 },
    { id: 3, name: '10% discount on any item', points: 1000 },
    { id: 4, name: 'Exclusive early access to new products', points: 1500 },
]

export default function AvailableRewards() {
    return (
        <div className="space-y-4">
            {rewards.map((reward) => (
                <div key={reward.id} className="flex justify-between items-center md:p-4 p-2 bg-cyan-800 rounded-lg">
                    <div>
                        <h3 className="text-white md:text-lg text-sm font-medium">{reward.name}</h3>
                        <p className="md:text-sm text-xs text-gray-300">{reward.points} points</p>
                    </div>
                    <button className="bg-cyan-700 md:text-[16px] text-sm text-white md:py-2 py-1 md:px-4 px-2 rounded-lg hover:bg-cyan-600 transition-colors">
                        Redeem
                    </button>
                </div>
            ))}
        </div>
    )
}
