"use client";

import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import NetworkCheck from "@/hooks/NetworkCheck";

const inactive = "hidden";
const active = "flex";
function Header({ token }) {
  const router = useRouter();
  const pathname = usePathname();
  console.log("TOKEN", token);
  localStorage.setItem("jwt", token);

  // Check if the user is online or offline
  const isOnline = NetworkCheck();

  if (!isOnline) {
    return (
      <div className="fixed overflow-hidden top-0 font-sans w-full h-screen bg-[#2B2B2B] opacity-80 m-0 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-md">
          <h1 className="text-xl font-semibold text-red-500">
            No Connection Found
          </h1>
          <p className="text-gray-600">
            Please check your internet connection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex justify-between items-center fixed top-0 left-0 h-18 w-full pl-28 z-20 pr-28 primary8-bg ${
        pathname === "/" ||
        pathname === "/home" ||
        pathname === "/about" ||
        pathname === "/contact"
          ? active
          : inactive
      }`}
      style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.14)" }}
    >
      <img className="w-26 h-11" src="./images/Logo-white.png" alt="Logo" />
      <div className="flex w-fit h-10 items-center gap-2 rounded-md text-md neutral3 bg-gray-50 pl-2">
        <input
          className="outline-none neutral8 text-md border-r-2 border-gray-400 h-10 w-72"
          type="text"
          placeholder="Search Aladdin"
        />
        <p className="flex items-center gap-1 neutral8 cursor-pointer">
          All Categories <FaCaretDown />
        </p>
        <span className="p-2 h-10 w-10 flex items-center justify-center rounded-r-sm primary6-bg hover:bg-gray-200 cursor-pointer">
          <RiSearchLine />
        </span>
      </div>
      <ul className="flex gap-12 items-start text-md neutral5">
        <Link href="/" className="hover:text-gray-200 cursor-pointer">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-200 cursor-pointer">
          About Us
        </Link>
        <li
          className="hover:text-gray-200  cursor-pointer"
          onClick={() => router.push("/products-page")}
        >
          Shop
        </li>
        <Link href="/contact" className="hover:text-gray-200  cursor-pointer">
          Contact Us
        </Link>
        <Link
          href="/account/personal-info"
          className="hover:text-gray-200 cursor-pointer"
          // onClick={handleToken}
        >
          My Account
        </Link>
      </ul>
      <div className="flex items-center gap-2 text-xl cursor-pointer neutral1">
        <MdAddShoppingCart />
        <h1>Cart</h1>
      </div>
    </div>
  );
}

export default Header;
