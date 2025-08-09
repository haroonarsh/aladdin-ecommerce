"use client";

import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import NetworkCheck from "@/hooks/NetworkCheck";
import { useUser } from "@/hooks/useUser";

const inactive = "hidden";
const active = "flex";
function Header({ token }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { fetchUser } = useUser();
  
  const handleToken = async () => {
    if (token) {
      await fetchUser(token).then((data) => {
        if (data.user.Role === 'admin') {
          router.push('/admin/dashboard'); // Redirect to admin dashboard if user is an admin
        } else {
          router.push('/products-page'); // Redirect to home page if user is not an admin
        }
      })
    }
  };
  const handleAccount = async () => {
    if (token) {
      await fetchUser(token).then((data) => {
        if (data.user.Role === 'admin') {
          router.push('/admin/dashboard'); // Redirect to admin dashboard if user is an admin
        } else {
          router.push('/account/personal-info'); // Redirect to home page if user is not an admin
        }
      })
    }
  };
  

  // Check if the user is online or offline
  useEffect(() => {
    const handleNetworkChange = () => {
      const isOnline = navigator.onLine;  
      if (!isOnline) {
        alert("You are offline. Please check your internet connection.");
      }
    };

    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  return (
    <>
      <div
        className={`flex justify-between items-center fixed top-0 left-0 h-18 w-full pl-4 pr-4 xl:pl-28 xl:pr-28 md:pl-5 md:pr-5 z-20 sm:pl-4 sm:pr-4 lg:pl-7 lg:pr-7 primary8-bg ${
          pathname === "/" || pathname === "/home" || pathname === "/about" || pathname === "/contact"
            ? active
            : inactive
        }`}
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.14)" }}
      >
        {/* Logo */}
        <img className="w-20 mr-3 md:mr-2 md:w-20 h-9  md:h-9 lg:w-23 lg:h-10 xl:w-24 xl:h-11" src="./images/Logo-white.png" alt="Logo" 
        onClick={() => router.push("/")} />

        {/* Search bar (desktop) */}
        <div className="hidden lg:flex mr-3 max-w-[500px] xl:max-w-[520px] h-10 items-center gap-2 rounded-md text-md neutral3 bg-gray-50 pl-2">
          <input
            className="outline-none neutral8 text-md border-r-2 border-gray-400 h-10 max-w-72"
            type="text"
            placeholder="Search Aladdin"
          />
          <p className="flex items-center text-sm lg:text-[17px] gap-1 neutral8 cursor-pointer">
            All Categories <FaCaretDown />
          </p>
          <span className="p-2 h-10 w-10 flex items-center justify-center rounded-r-sm primary6-bg hover:bg-gray-200 cursor-pointer">
            <RiSearchLine />
          </span>
        </div>

        {/* Navigation menu (desktop) */}
        <ul className="hidden lg:flex gap-6 xl:gap-12 lg:gap-5 md:gap-2 text-sm lg:text-[17px] mr-3 items-start text-md neutral5">
          <Link href="/" className="hover:text-gray-200 cursor-pointer">Home</Link>
          <Link href="/about" className="hover:text-gray-200 cursor-pointer">About Us</Link>
          <li className="hover:text-gray-200 cursor-pointer" onClick={handleToken}>Shop</li>
          <Link href="/contact" className="hover:text-gray-200 cursor-pointer">Contact Us</Link>
          <li className="hover:text-gray-200 cursor-pointer" onClick={handleAccount}>My Account</li>
        </ul>

        {/* Cart (desktop) */}
        <div className="hidden lg:flex items-center gap-2 text-[16px] lg:text-xl cursor-pointer neutral1">
          <MdAddShoppingCart />
          <h1>Cart</h1>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden fixed top-5 right-3 flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <RiSearchLine className="text-2xl" />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars className="text-2xl" />
          </button>
          <MdAddShoppingCart className="text-2xl" />
        </div>
      </div>

      {/* Mobile search bar */}
      {isSearchOpen && (
        <div className="lg:hidden fixed top-18 left-0 w-full bg-white p-4 z-10">
          <input className="w-full p-2 border" type="text" placeholder="Search Aladdin" />
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`lg:hidden fixed top-18 left-0 w-full bg-white p-4 z-10 ${
          pathname === "/" || pathname === "/home" || pathname === "/about" || pathname === "/contact"
            ? active
            : inactive
        }`}>
          <ul className="flex flex-col gap-4">
            <Link href="/" className="hover:text-gray-200 cursor-pointer">Home</Link>
            <Link href="/about" className="hover:text-gray-200 cursor-pointer">About Us</Link>
            <li className="hover:text-gray-200 cursor-pointer" onClick={() => router.push("/products-page")}>Shop</li>
            <Link href="/contact" className="hover:text-gray-200 cursor-pointer">Contact Us</Link>
            <Link href="/account/personal-info" className="hover:text-gray-200 cursor-pointer">My Account</Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
