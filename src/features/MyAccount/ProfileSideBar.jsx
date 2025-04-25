'use client';


import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LiaChessKingSolid } from "react-icons/lia";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { useAuth } from '@/hooks/useAuth';

const image = './public/customer/seller.png'

function ProfileSideBar() {

    const router = useRouter();
    const pathname = usePathname();
    const { logout } = useAuth();

    // Get user data from local storage
    const data = localStorage.getItem("UserData");
    const userData = JSON.parse(data);
    console.log("Parsed UserData", userData); // Log the parsed user data

    // Logout function
    const handleLogout = () => {
        try {
            logout();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    const isActive = (path) => pathname === path ? "bg-cyan-600 text-white" : "text-black hover:bg-cyan-600 hover:text-white transition cursor-pointer";

  return (
    <div className='w-2/7 border border-cyan-700'>
                    <div className='min-h-[300px] bg-cyan-700  text-white flex flex-col items-center justify-center gap-2'>
                        <img className=' w-24  h-24 object-cover rounded-full' src={userData?.ProfileImage} alt="Profile image" />
                        <h1 className='text-center text-2xl text-white'>User Name</h1>
                        <button className='border border-white rounded-md p-2 text-xl font-semibold font-sans flex items-center gap-2'><span className='text-sm font-normal'>Balance</span> $4,500</button>
                    </div>
                        {/* // Links */}
                    <div>
                        <ul>
                            <li className={`flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 cursor-pointer ${isActive("/account/wallet")}`}
                            onClick={() => router.push("/account/wallet")}
                            ><MdOutlineAccountBalanceWallet /> My wallet</li>
                            <li className={`flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 cursor-pointer ${isActive("/account/rewards")}`}
                            onClick={() => router.push("/account/rewards")}
                            ><LiaChessKingSolid /> My rewards</li>
                            <li className={`flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 cursor-pointer ${isActive("/account/order")}`}
                            onClick={() => router.push("/account/order")}
                            ><MdOutlineLocalShipping /> Orders</li>
                            <li className={`flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 cursor-pointer ${isActive("/account/personal-info")}`} 
                            onClick={() => router.push("/account/personal-info")}
                            ><CgProfile /> Personal information</li>
                            <li className={`flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 cursor-pointer ${isActive("/account/location")}`}
                            onClick={() => router.push("/account/location")}
                            ><MdOutlineLocationOn /> Location</li>
                            <li className={`flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 cursor-pointer ${isActive("/account/payment")}`}
                            onClick={() => router.push("/account/payment")}
                            ><MdOutlinePayments /> Payment Method</li>
                            <li className={`flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 cursor-pointer ${isActive("/account/setting")}`}
                            onClick={() => router.push("/account/setting")}
                            ><MdOutlineSettings /> Contact Preferences</li>
                            <li className={`flex items-center gap-2 text-xl h-13 font-semibold border-t border-cyan-600 font-sans p-2 cursor-pointer ${isActive("/account/help")}`}
                            onClick={() => router.push("/account/help")}
                            ><MdHelpOutline /> Need Help</li>
                            <li className={`flex items-center gap-2 text-xl h-13 font-semibold border-t border-cyan-600 font-sans p-2 cursor-pointer ${isActive("/account/logout")}`}
                            onClick={handleLogout}
                            ><VscSignOut /> Sign Out</li>
                        </ul>
                    </div>
                </div>
  )
}

export default ProfileSideBar