'use client';


import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
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
import { useUser } from '@/hooks/useUser';
import { BiEditAlt } from "react-icons/bi";
import { toast } from 'react-toastify';

const image = './public/customer/seller.png'

function ProfileSideBar() {

    const router = useRouter();
    const pathname = usePathname();
    const { logout } = useAuth();
    const { updateImage, loading } = useUser();
    const [preveiw, setPreveiw] = useState(null);
    const [form, setForm] = useState({
        ProfileImage: "",
    });

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

    // Handle image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setPreveiw(URL.createObjectURL(file));
        setForm({
            ...form,
            ProfileImage: file,
        });
    }
    // Handle image upload
    const handleImageUpload = async (e) => {
        e.preventDefault();
        if (!form.ProfileImage) {
            toast.error("No image selected");
            return;
        }
        try {
            const image = new FormData();
            image.append("ProfileImage", form.ProfileImage);
            
            await updateImage(image);  
            
        } catch (error) {
            console.error("Image update failed:", error);
        }
    }

    const isActive = (path) => pathname === path ? "bg-cyan-600 text-white" : "text-black hover:bg-cyan-600 hover:text-white transition cursor-pointer";

  return (
    <div className='md:w-2/7 w-[38%] h-full border border-cyan-700'>
                    <div className='min-h-[300px] bg-cyan-700  text-white flex flex-col items-center justify-center gap-2'>
                    <div className='relative'>
                        <img className='w-24 h-24 object-cover rounded-full' src={ preveiw ||userData?.ProfileImage } alt="Profile image" />
                        <label htmlFor="fileInput" className='absolute bottom-0 right-0 w-7 h-7 rounded-full bg-cyan-600 flex items-center justify-center cursor-pointer'>
                        <BiEditAlt />
                        </label>
                        <input 
                            type="file" 
                            accept="image/*" 
                            id="fileInput"
                            name='fileInput'
                            onChange={handleImageChange} 
                            className='hidden' 
                        />
                    </div>
                        <button className='border border-white rounded-md p-2 md:text-xl text-sm font-semibold font-sans flex items-center gap-2' onClick={handleImageUpload}><span className='text-sm font-normal'>{loading ? "" : "Change"}</span>{loading ? "Changing..." : "Image"}</button>
                        <h1 className='text-center md:text-2xl text-sm text-white'>{loading ? "Loading..." : userData?.FirstName}</h1>
                        <button className='border border-white rounded-md p-2 md:text-xl text-sm font-semibold font-sans flex items-center gap-2'><span className='text-sm font-normal'>Balance</span> $4,500</button>
                    </div>
                        {/* // Links */}
                    <div>
                        <ul>
                            <li className={`flex items-center md:gap-2 gap-0.5 md:text-[18px] lg:text-xl text-sm h-13 font-semibold font-sans md:p-2 p-1 cursor-pointer ${isActive("/account/wallet")}`}
                            onClick={() => router.push("/account/wallet")}
                            ><MdOutlineAccountBalanceWallet /> My wallet</li>
                            <li className={`flex items-center md:gap-2 gap-0.5 md:text-[18px] lg:text-xl text-sm h-13 font-semibold font-sans md:p-2 p-1 cursor-pointer ${isActive("/account/rewards")}`}
                            onClick={() => router.push("/account/rewards")}
                            ><LiaChessKingSolid /> My rewards</li>
                            <li className={`flex items-center md:gap-2 gap-0.5 md:text-[18px] lg:text-xl text-sm h-13 font-semibold font-sans md:p-2 p-1 cursor-pointer ${isActive("/account/order")}`}
                            onClick={() => router.push("/account/order")}
                            ><MdOutlineLocalShipping /> Orders</li>
                            <li className={`flex items-center md:gap-2 gap-0.5 md:text-[18px] lg:text-xl text-sm h-13 font-semibold font-sans md:p-2 p-1 cursor-pointer ${isActive("/account/personal-info")}`} 
                            onClick={() => router.push("/account/personal-info")}
                            ><CgProfile /> Personal information</li>
                            <li className={`flex items-center md:gap-2 gap-0.5 md:text-[18px] lg:text-xl text-sm h-13 font-semibold font-sans md:p-2 p-1 cursor-pointer ${isActive("/account/location")}`}
                            onClick={() => router.push("/account/location")}
                            ><MdOutlineLocationOn /> Location</li>
                            <li className={`flex items-center md:gap-2 gap-0.5 md:text-[18px] lg:text-xl text-sm h-13 font-semibold font-sans md:p-2 p-1 cursor-pointer ${isActive("/account/payment")}`}
                            onClick={() => router.push("/account/payment")}
                            ><MdOutlinePayments /> Payment Method</li>
                            <li className={`flex items-center md:gap-2 gap-0.5 md:text-[18px] lg:text-xl text-sm h-13 font-semibold font-sans md:p-2 p-1 cursor-pointer ${isActive("/account/setting")}`}
                            onClick={() => router.push("/account/setting")}
                            ><MdOutlineSettings /> Contact Preferences</li>
                            <li className={`flex items-center md:gap-2 gap-0.5 md:text-[18px] lg:text-xl text-sm h-13 font-semibold border-t border-cyan-600 font-sans md:p-2 p-1 cursor-pointer ${isActive("/account/help")}`}
                            onClick={() => router.push("/account/help")}
                            ><MdHelpOutline /> Need Help</li>
                            <li className={`flex items-center md:gap-2 gap-0.5 md:text-[18px] lg:text-xl text-sm h-13 font-semibold border-t border-cyan-600 font-sans md:p-2 p-1 cursor-pointer ${isActive("/account/logout")}`}
                            onClick={handleLogout}
                            ><VscSignOut /> Sign Out</li>
                        </ul>
                    </div>
                </div>
  )
}

export default ProfileSideBar