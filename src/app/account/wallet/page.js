import WalletBalance from '@/features/MyAccount/MyWallet'
import PaymentMethods from '@/features/MyAccount/PaymentMethod'
import TransactionHistory from '@/features/MyAccount/TransitionHistory'
import React from 'react'

function page() {
  return (
    <>
        {/* <div className="pl-6 md:pl-8"> */}
            <h2 className="mb-6 text-2xl font-semibold text-cyan-800">Wallet Information</h2>
                <WalletBalance balance={4500} />
                <PaymentMethods />

                <div className="mt-8 mb-4">
                    <TransactionHistory />
                </div>
      {/* </div> */}
    </>
  )
}

export default page