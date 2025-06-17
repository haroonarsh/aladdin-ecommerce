"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import React from "react"
import { RiSearchLine } from "react-icons/ri"
import { MdAddShoppingCart } from "react-icons/md";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation"
import { useUser } from "@/hooks/useUser"
import NetworkCheck from "@/hooks/NetworkCheck"
import Cookies from "js-cookie"

const inactive = "hidden";
const active = "block";

export default function AladdinHeaderCustom() {
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const dropdownRef = useRef(null)
  const router = useRouter();
  const pathname = usePathname();
  const { fetchUser, becomeAdmin, users, loading , error } = useUser()

  // function to fetch user data
  const data = async () => {
    fetchUser().then((data) => {
      if (data) {
      setUserData(data.user);        
      }
    })
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    data(); // Call the function to fetch user data
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching user data
  }
  
    const handleBecomeAdmin = () => {
    becomeAdmin().then(() => {
      window.location.href = "/admin/dashboard"
    })
  }

  return (
    <>
    <header className={`w-full fixed top-0 z-50 ${
          pathname === "/" || pathname === "/admin/dashboard" || pathname === "/admin/products" || pathname === "/admin/orders" || pathname === "/admin/customers" || pathname === "/admin/statistics" || pathname === "/admin/appearance" || pathname === "/admin/settings" || pathname === "/home" || pathname === "/about" || pathname === "/contact" || pathname === "/login" || pathname === "/register"  
            ? inactive
            : active
        }`}>
      {/* Main navigation bar */}
      <div className="primary8-bg text-white">
        <div className="max-w-[1360px] mx-auto px-2 xl:px-9">
          <div className="flex items-center h-17 justify-between gap-2 lg:gap-0">
            {/* Logo */}
            <div className="flex items-center space-x-1 lg:space-x-6">
              <Link href="/" className="flex items-center">
                <img
                  className="w-20 mr-3 md:mr-2 md:w-20 h-9  md:h-9 lg:w-23 lg:h-10 xl:w-24 xl:h-11"
                  src="./images/Logo-white.png"
                  alt=""
                />
              </Link>

              {/* Deliver to */}
              <div className="hidden lg:flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <div className="text-xs opacity-80">Deliver to</div>
                  <div className="font-semibold">Pakistan</div>
                </div>
              </div>
            </div>

            {/* Search bar */}
            <div className="hidden lg:flex w-fit h-10 items-center gap-2 rounded-md text-md neutral3 bg-gray-50 pl-2">
              <input
                className="outline-none neutral8 text-md border-r-2 border-gray-400 h-10 w-72"
                type="text"
                placeholder="Search Aladdin"
              />
              {/* Custom dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="h-10  text-black cursor-pointer border-gray-300 rounded-l-md flex items-center justify-between w-[140px]"
                >
                  <span className="text-sm">All Categories</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-[140px] bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                    <ul className="py-1 text-sm text-gray-700">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          All Categories
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Electronics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Books
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Home
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <span className="p-2 h-10 w-10 flex items-center justify-center rounded-r-sm primary6-bg hover:bg-gray-200 cursor-pointer">
                <RiSearchLine />
              </span>
            </div>

            {/* Right side - Language, Account, Cart */}
            <div className="hidden lg:flex items-center xl:space-x-6 lg:space-x-2 space-x-2">
              {/* Language selector */}
              <div className="flex items-center">
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-4 bg-blue-800 relative overflow-hidden rounded-sm">
                    <div className="absolute top-0 left-0 w-3 h-3 bg-red-500"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-500"></div>
                  </div>
                  <span className="font-semibold">EN</span>
                </div>
              </div>

              {/* Account */}
              <div
                className="text-sm cursor-pointer"
                onClick={() => router.push("/account/personal-info")}
              >
                <div>Hello, {userData?.FirstName || "User"}</div>
                <div className="font-semibold">Account for Eshopify...</div>
              </div>

              {/* Switch */}
                <button 
                  className="hidden md:flex rounded-lg xl:text-[16px] text-[14px] cursor-pointer text-white hover:bg-gray-100 hover:text-gray-500"
                  onClick={handleBecomeAdmin}
                >
                  Switch to Buyer
                </button>

              {/* Cart */}
              <Link href="/cart" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-1 font-semibold">Cart</span>
              </Link>
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
        </div>
      </div>

      {/* Secondary navigation */}
      <div className="hidden lg:block primary7-bg text-black">
        <div className="max-w-[1360px] mx-auto px-9">
          <div className="flex items-center h-10 text-sm">
            <nav className="flex space-x-6">
              <Link href="/customer-service" className="hover:underline">
                Customer Service
              </Link>
              <Link href="/aladdin-basics" className="hover:underline">
                Aladdin Basics
              </Link>
              <Link href="/best-sellers" className="hover:underline">
                Best Sellers
              </Link>
              <Link href="/todays-deals" className="hover:underline">
                Today's Deals
              </Link>
              <Link href="/fashion" className="hover:underline">
                Fashion
              </Link>
              <Link href="/new-releases" className="hover:underline">
                New Releases
              </Link>
              <Link href="/pharmacy" className="hover:underline">
                Aladdin Pharmacy
              </Link>
              <Link href="/home" className="hover:underline">
                Aladdin Home
              </Link>
            </nav>
            <div className="ml-auto font-semibold">
              <Link href="/black-history-month" className="hover:underline">
                Black History Month
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile search bar */}
      {isSearchOpen && (
        <div className="lg:hidden fixed top-[4rem] left-0 w-full h-[4rem] z-50 flex items-center justify-center text-md neutral3 bg-cyan-800 pl-2 ">
              <input
                className="outline-none neutral8 text-sm sm:text-[20px] border rounded-l-md pl-1.5 border-r-2 bg-white border-gray-400 h-10 w-56 sm:w-72"
                type="text"
                placeholder="Search Aladdin"
              />
              {/* Custom dropdown */}
              <div className="relative bg-white" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="h-10  text-black cursor-pointer border-gray-300 rounded-l-md flex items-center justify-between w-[100px] sm:w-[140px]"
                >
                  <span className="text-sm">All Categories</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-[140px] bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                    <ul className="py-1 text-sm text-gray-700">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          All Categories
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Electronics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Books
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Home
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <span className="p-2 h-10 w-10 flex items-center justify-center rounded-r-sm primary6-bg hover:bg-gray-200 cursor-pointer">
                <RiSearchLine />
              </span>
            </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[4rem] left-0 w-full h-fit bg-cyan-800 text-white p-4 z-10">
          <div className="flex justify-between lg:hidden items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <div className="text-xs opacity-80">Deliver to</div>
                  <div className="font-semibold">Pakistan</div>
                </div>
              </div>

              {/* Right side - Language, Account, Cart */}
            <div className="flex lg:hidden items-center justify-between">
              {/* Language selector */}
              <div className="flex items-center">
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-4 bg-blue-800 relative overflow-hidden rounded-sm">
                    <div className="absolute top-0 left-0 w-3 h-3 bg-red-500"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-500"></div>
                  </div>
                  <span className="font-semibold">EN</span>
                </div>
              </div>

              {/* Account */}
              <div
                className="text-sm cursor-pointer"
                onClick={() => router.push("/account/personal-info")}
              >
                <div>Hello, {userData?.FirstName}</div>
                <div className="font-semibold">Account for Eshopify...</div>
              </div>

              {/* Cart */}
              <Link href="/cart" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-1 font-semibold">Cart</span>
              </Link>
            </div>
            {/* Bottom navigation */}
          <div className="lg:hidden mt-4 text-white">
            <nav className="flex items-start flex-col gap-2 text-sm">
              {/* Switch */}
                <button 
                  className="flex p-2 items-center lg:hidden rounded-lg xl:text-[16px] text-[14px] cursor-pointer text-white hover:bg-gray-100 hover:text-gray-500"
                  onClick={handleBecomeAdmin}
                >
                  Switch to Buyer
                </button>
              <Link href="/customer-service" className="hover:underline">
                Customer Service
              </Link>
              <Link href="/aladdin-basics" className="hover:underline">
                Aladdin Basics
              </Link>
              <Link href="/best-sellers" className="hover:underline">
                Best Sellers
              </Link>
              <Link href="/todays-deals" className="hover:underline">
                Today's Deals
              </Link>
              <Link href="/fashion" className="hover:underline">
                Fashion
              </Link>
              <Link href="/new-releases" className="hover:underline">
                New Releases
              </Link>
              <Link href="/pharmacy" className="hover:underline">
                Aladdin Pharmacy
              </Link>
              <Link href="/home" className="hover:underline">
                Aladdin Home
              </Link>
            </nav>
            <div className="ml-auto font-semibold">
              <Link href="/black-history-month" className="hover:underline">
                Black History Month
              </Link>
            </div>
      </div>
        </div>
      )}
    </>
  );
}

