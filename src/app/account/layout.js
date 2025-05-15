import AladdinHeaderCustom from '@/components/after-header/Header'
import ProfileSideBar from '@/features/MyAccount/ProfileSideBar'
import React from 'react'

export default async function AccountLayout({ children }) {
  return (
    <>
        {/* // header */}
        <AladdinHeaderCustom />
        {/* // Main Content */}
        <div className='max-w-[1300px] mx-auto flex lg:mt-[6.75rem] mt-[4.25rem] mb-6 font-sans'>
            <ProfileSideBar />
            <main className='w-5/8'>
              <div className=" md:pl-8">
                { children }
              </div>
            </main>
        </div>
    </>
  )
}
