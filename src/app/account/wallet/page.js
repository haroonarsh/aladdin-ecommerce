import WalletBalance from '@/features/MyAccount/MyWallet'
import PaymentMethods from '@/features/MyAccount/PaymentMethod'
import TransactionHistory from '@/features/MyAccount/TransitionHistory'
import React from 'react'

function page() {
  return (
    <>
        <div className="sm:pl-4 p-1.5 sm:pr-4  pr-1.5 md:pl-0">
            <h2 className="mb-6 md:text-2xl text-xl font-semibold text-cyan-800">Wallet Information</h2>
                <WalletBalance balance={4500} />
                <PaymentMethods />

                <div className="mt-8 mb-4">
                    <TransactionHistory />
                </div>
      </div>
    </>
  )
}

export default page