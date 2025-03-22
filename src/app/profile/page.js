"use client";

import AladdinHeaderCustom from '@/components/after-header/Header';
import React, { useState, useRef, useEffect } from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LiaChessKingSolid } from "react-icons/lia";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { ChevronDown, UserIcon as Male, UserIcon as Female, Check } from "lucide-react"

function page() {

    const [active, setActive] = useState("personal");
        // / Personal
        const [gender, setGender] = useState("male");
        const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
        const countryDropdownRef = useRef(null)
      
        // Sample list of countries
        const countries = [
          { code: "us", name: "United States", dialCode: "+1", flag: "https://flagcdn.com/w20/us.png" },
          { code: "pk", name: "Pakistan", dialCode: "+92", flag: "https://flagcdn.com/w20/pk.png" },
          { code: "gb", name: "United Kingdom", dialCode: "+44", flag: "https://flagcdn.com/w20/gb.png" },
          { code: "ca", name: "Canada", dialCode: "+1", flag: "https://flagcdn.com/w20/ca.png" },
          { code: "au", name: "Australia", dialCode: "+61", flag: "https://flagcdn.com/w20/au.png" },
          { code: "de", name: "Germany", dialCode: "+49", flag: "https://flagcdn.com/w20/de.png" },
          { code: "fr", name: "France", dialCode: "+33", flag: "https://flagcdn.com/w20/fr.png" },
          { code: "in", name: "India", dialCode: "+91", flag: "https://flagcdn.com/w20/in.png" },
          { code: "jp", name: "Japan", dialCode: "+81", flag: "https://flagcdn.com/w20/jp.png" },
          { code: "cn", name: "China", dialCode: "+86", flag: "https://flagcdn.com/w20/cn.png" },
          { code: "br", name: "Brazil", dialCode: "+55", flag: "https://flagcdn.com/w20/br.png" },
        ]
      
        const [selectedCountry, setSelectedCountry] = useState(countries[0])
      
        // Close dropdown when clicking outside
        useEffect(() => {
          function handleClickOutside(event) {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
              setIsCountryDropdownOpen(false)
            }
          }
      
          document.addEventListener("mousedown", handleClickOutside)
          return () => {
            document.removeEventListener("mousedown", handleClickOutside)
          }
        }, [])

    const activePath = () => {
        switch (active) {
            case "personal":
                return (
                    <div className="pl-6 md:pl-8">
      <h2 className="mb-6 text-2xl font-semibold text-cyan-800">Personal Information</h2>

      <form className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="mb-1 block text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="mb-1 block text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="mb-1 block text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Phone Number with Country Selector */}
          <div>
            <label htmlFor="phone" className="mb-1 block text-gray-700">
              Phone number
            </label>
            <div className="flex">
              {/* Country Selector Dropdown */}
              <div className="relative" ref={countryDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="flex h-10 items-center rounded-l-md border border-r-0 border-gray-300 bg-white px-3"
                >
                  <span
                    className="mr-1 inline-block h-4 w-6 overflow-hidden rounded-sm bg-cover bg-center"
                    style={{ backgroundImage: `url(${selectedCountry.flag})` }}
                  ></span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {isCountryDropdownOpen && (
                  <div className="absolute left-0 top-full z-10 mt-1 max-h-60 w-64 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
                    <div className="p-2">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-gray-100"
                          onClick={() => {
                            setSelectedCountry(country)
                            setIsCountryDropdownOpen(false)
                          }}
                        >
                          <span
                            className="inline-block h-4 w-6 overflow-hidden rounded-sm bg-cover bg-center"
                            style={{ backgroundImage: `url(${country.flag})` }}
                          ></span>
                          <span className="flex-1">{country.name}</span>
                          <span className="text-sm text-gray-500">{country.dialCode}</span>
                          {selectedCountry.code === country.code && <Check className="h-4 w-4 text-cyan-600" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Phone Input */}
              <input
                id="phone"
                type="tel"
                className="w-full rounded-r-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder={`${selectedCountry.dialCode}`}
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="mb-1 block text-gray-700">
              &nbsp;
            </label>
            <div className="relative">
              <input
                id="date"
                type="text"
                placeholder="DD/MM/YY"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Gender Selection */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setGender("male")}
            className={`flex h-20 w-20 flex-col items-center justify-center rounded-md border border-cyan-700 transition-colors ${
              gender === "male" ? "bg-cyan-700 text-white" : "bg-white text-cyan-700"
            }`}
          >
            <IoMdMale className="h-8 w-8" />
            <span className="mt-1 text-sm">Male</span>
          </button>

          <button
            type="button"
            onClick={() => setGender("female")}
            className={`flex h-20 w-20 flex-col items-center justify-center rounded-md border border-cyan-700 transition-colors ${
              gender === "female" ? "bg-cyan-700 text-white" : "bg-white text-cyan-700"
            }`}
          >
            <IoMdFemale className="h-8 w-8" />
            <span className="mt-1 text-sm">Female</span>
          </button>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-600">
          In order to access some features of the Service, you will have fill out your account details.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2 pt-4 sm:flex-row">
          <button
            type="button"
            className="rounded-md border border-cyan-700 px-6 py-2 text-cyan-700 transition-colors hover:bg-cyan-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-cyan-700 px-6 py-2 text-white transition-colors hover:bg-cyan-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
                );
                
            case "order":
                return (
                    <div>Orders</div>
                )
            case "shipping":

            case "payment":
                
            case "setting":
                
            case "help":
                
            case "logout":
                
        }
    }
  return (
    <>
            {/* // header */}
        <AladdinHeaderCustom />

            {/* // Main Content */}
        <div className='max-w-[1300px] mx-auto flex mt-10 font-sans'>
                {/* // Left */}
            <div className='w-2/7 border border-cyan-700'>
                <div className='min-h-[300px] bg-cyan-700  text-white flex flex-col items-center justify-center gap-2'>
                    <img className=' w-24  h-24 object-cover rounded-full' src="./customer/seller.png" alt="Profile image" />
                    <h1 className='text-center text-2xl text-white'>User Name</h1>
                    <button className='border border-white rounded-md p-2 text-xl font-semibold font-sans flex items-center gap-2'><span className='text-sm font-normal'>Balance</span> $4,500</button>
                </div>
                    {/* // Links */}
                <div>
                    <ul>
                        <li className='flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 hover:bg-cyan-600 hover:text-white transition cursor-pointer'
                        onClick={() => setActive("wallet")}
                        ><MdOutlineAccountBalanceWallet /> My wallet</li>
                        <li className='flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 hover:bg-cyan-600 hover:text-white transition cursor-pointer'
                        onClick={() => setActive("reward")}
                        ><LiaChessKingSolid /> My rewards</li>
                        <li className='flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 hover:bg-cyan-600 hover:text-white transition cursor-pointer'
                        onClick={() => setActive("order")}
                        ><MdOutlineLocalShipping /> Orders</li>
                        <li className='flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 hover:bg-cyan-600 hover:text-white transition cursor-pointer' onClick={() => setActive("personal")}><CgProfile /> Personal information</li>
                        <li className='flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 hover:bg-cyan-600 hover:text-white transition cursor-pointer'
                        onClick={() => setActive("location")}
                        ><MdOutlineLocationOn /> Location</li>
                        <li className='flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 hover:bg-cyan-600 hover:text-white transition cursor-pointer'
                        onClick={() => setActive("payment")}
                        ><MdOutlinePayments /> Payment Method</li>
                        <li className='flex items-center gap-2 text-xl h-13 font-semibold font-sans p-2 hover:bg-cyan-600 hover:text-white transition cursor-pointer'
                        onClick={() => setActive("setting")}
                        ><MdOutlineSettings /> Contact Preferences</li>
                        <li className='flex items-center gap-2 text-xl h-13 font-semibold border-t border-cyan-600 font-sans p-2 hover:bg-cyan-600 hover:text-white transition cursor-pointer'
                        onClick={() => setActive("help")}
                        ><MdHelpOutline /> Need Help</li>
                        <li className='flex items-center gap-2 text-xl h-13 font-semibold border-t border-cyan-600 font-sans p-2 hover:bg-cyan-600 hover:text-white transition cursor-pointer'
                        onClick={() => setActive("logout")}
                        ><VscSignOut /> Sign Out</li>
                    </ul>
                </div>
            </div>
                {/* // Right */}
            <div className='w-5/8'>
                {activePath()}
            </div>
        </div>
    </>
  )
}

export default page