'use client';

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, UserIcon as Male, UserIcon as Female, Check } from "lucide-react"
import { IoMdMale, IoMdFemale } from "react-icons/io"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from '@/hooks/useUser';

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
  ];
  
function PersonalInfo() {

  // / Personal
  const [gender, setGender] = useState("Male");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const countryDropdownRef = useRef(null)
  const [startDate, setStartDate] = useState(null);
  const { updateUser, users, loading, error } = useUser();
  
  // Get user data from local storage
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNo: '',
    Gender: '',
    Date: '',
    CountryCode: '',
  });


  // initializing form data from local storage
  useEffect(() => {
    const data = localStorage.getItem("UserData");
    console.log("LocalUserData", data); // Log the user data
    
    if (data) {
      const parsedData = JSON.parse(data);
      setUserData(parsedData);

      // Initialize Date
      const storedDate = parsedData?.Date ? new Date(parsedData.Date) : null;
      // Set the selected country based on the stored data
      // const country = countries.find(country => country.code === parsedData?.CountryCode);
      // if (country) {
      //   setSelectedCountry(country);
      // }

      setFormData({
        FirstName: parsedData?.FirstName || '',
        LastName: parsedData?.LastName || '',
        Email: parsedData?.Email || '',
        PhoneNo: parsedData?.PhoneNo || '',
        Gender: parsedData?.Gender || '',
        CountryCode: parsedData?.CountryCode || 'pk',
        Date: storedDate
      })

      setGender(parsedData?.Gender || 'Male');
    }
  }, []);

  const handleDateChange = (date) => {
    setStartDate(date);
    setFormData({
      ...formData,
      Date: date,
    })
  };

  const selectedCountry = countries.find(country => country.code === formData.CountryCode) || countries[1];

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountrySelection = (country) => {
    setFormData({
      ...formData,
      CountryCode: country.code,
    });
    setIsCountryDropdownOpen(false);
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // await updateUser(userData?.accessToken, formData);
    
    // Update user data
    const updatedData = {
      ...userData,
      ...formData,
      PhoneNo: `${selectedCountry.dialCode} ${formData.PhoneNo}`,
      Gender: gender,
      Date: startDate?.toISOString(), // Format date to YYYY-MM-DD
    };

    await updateUser(userData?.accessToken, updatedData);
    // Check for errors
    if (error) {
      console.error("Error updating user data:", error); // Log the error
      return;
    }
  }
      
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

  return (
    <>
        <div className="sm:pl-2 pl-1 sm:pr-2 pr-1 md:pl-8">
              <h2 className="mb-6 md:text-2xl text-xl font-semibold text-cyan-800">Personal Information</h2>
        
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="md:mb-1 mb-0.5 md:text-[16px] text-sm block text-gray-700">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={formData.FirstName}
                      onChange={handleInputChange}
                      name="FirstName"
                      className="w-full md:text-[16px] text-sm rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
        
                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="md:mb-1 mb-0.5 md:text-[16px] text-sm block text-gray-700">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.LastName}
                      onChange={handleInputChange}
                      name="LastName"
                      className="w-full md:text-[16px] text-sm rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>
        
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="md:mb-1 mb-0.5 md:text-[16px] text-sm block text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    name="Email"
                    className="w-full md:text-[16px] text-sm rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
        
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Phone Number with Country Selector */}
                  <div>
                    <label htmlFor="phone" className="md:mb-1 mb-0.5 md:text-[16px] text-sm block text-gray-700">
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
                                    handleCountrySelection(country);
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
                        value={formData.PhoneNo}
                        onChange={handleInputChange}
                        name="PhoneNo"
                        className="w-full md:text-[16px] text-sm rounded-r-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder={`${selectedCountry.dialCode}`}
                      />
                    </div>
                  </div>
        
                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="md:mb-1 mb-0.5 md:text-[16px] text-sm block text-gray-700">
                      Date
                    </label>
                    {/* <div className="relative"> */}
                      <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        name="Date"
                        placeholder="DD/MM/YYYY"
                        className="w-full md:text-[16px] text-sm rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        showYearDropdown
                        dropdownMode='select'
                        maxDate={new Date()}
                        isClearable
                      />
                      {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      </div> */}
                    {/* </div> */}
                  </div>
                </div>
        
                {/* Gender Selection */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setGender("Male")}
                    className={`flex md:h-20 h-16 md:w-20 w-16 flex-col items-center justify-center rounded-md border border-cyan-700 transition-colors ${
                      gender === "Male" ? "bg-cyan-700 text-white" : "bg-white text-cyan-700"
                    }`}
                  >
                    <IoMdMale className="md:h-8 h-6 md:w-8 w-6" />
                    <span className="mt-1 text-sm">Male</span>
                  </button>
        
                  <button
                    type="button"
                    onClick={() => setGender("Female")}
                    className={`flex md:h-20 h-16 md:w-20 w-16 flex-col items-center justify-center rounded-md border border-cyan-700 transition-colors ${
                      gender === "Female" ? "bg-cyan-700 text-white" : "bg-white text-cyan-700"
                    }`}
                  >
                    <IoMdFemale className="md:h-8 h-6 md:w-8 w-6" />
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
                    onClick={() => {
                      // Reset form or original values
                      const data = localStorage.getItem("UserData");
                      setFormData({
                        FirstName: data?.FirstName || '',
                        LastName: data?.LastName || '',
                        Email: data?.Email || '',
                        PhoneNo: data?.PhoneNo.replace(selectedCountry.dialCode, '') || '',
                        Date: data?.Date || '',
                        CountryCode: data?.CountryCode || 'us',
                      })
                      setGender(data?.Gender || 'Male');
                    }}
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
    </>
  )
}

export default PersonalInfo