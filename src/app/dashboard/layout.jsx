"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Palette,
  Settings,
  Search,
  Bell,
  User,
  Sun,
  Moon,
  Menu,
} from "lucide-react"
import { Suspense } from "react"

export default function DashboardLayout({
  children,
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Products", href: "/dashboard/products", icon: Package },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
    { name: "Customers", href: "/dashboard/customers", icon: Users },
    { name: "Statistics", href: "/dashboard/statistics", icon: BarChart3 },
    { name: "Appearance", href: "/dashboard/appearance", icon: Palette },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-full overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <div className="flex-shrink-0 w-64 bg-white shadow-sm hidden md:block">
        <div className="w-64 bg-white shadow-sm fixed top-0 left-0 bottom-0 overflow-y-auto">
          {/* Logo */}
          <div className="flex h-16 items-center px-6">
            <div className="flex flex-col ">
              <img className="w-26 h-11 mt-2" src="./images/logoB.png" alt="" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="absolute bottom-4 left-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {/* Header */}
          <header className="bg-white shadow-sm fixed top-0 md:left-64 left-0 right-0 z-10">
            <div className="flex h-16 items-center justify-between lg:px-6 sm:px-4 px-2">
              <h1 className="md:text-2xl text-lg font-semibold text-gray-900">
                {pathname === "/dashboard" && "Analytics"}
                {pathname === "/dashboard/products" && "Products"}
                {pathname === "/dashboard/orders" && "Orders"}
                {pathname === "/dashboard/customers" && "Customers"}
                {pathname === "/dashboard/statistics" && "Statistics"}
                {pathname === "/dashboard/appearance" && "Appearance"}
                {pathname === "/dashboard/settings" && "Settings"}
              </h1>

              <div className="flex items-center md:space-x-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute md:left-3 left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="md:w-64 sm:w-50 w-40 rounded-lg border border-gray-300 py-2 md:pl-10 pl-7 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Notifications */}
                <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <Bell className="h-5 w-5" />
                </button>

                {/* Profile */}
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                  <User className="h-4 w-4" />
                </button>
                {/* Menu */}
                <button onClick={toggleSidebar} className="md:hidden flex rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <Menu className="h-5 w-6" />
                </button>
              </div>
            </div>
          </header>

          {/* Sidebar for mobile */}
          {showSidebar && (
            <div className="w-64 z-50 bg-white shadow-sm fixed top-0 left-0 bottom-0 overflow-y-auto">
          {/* Logo */}
          <div className="flex h-16 items-center px-6">
            <div className="flex flex-col ">
              <img className="w-26 h-11 mt-2" src="./images/logoB.png" alt="" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="absolute bottom-4 left-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
          )}

          {/* Page Content */}
          <main className="flex-1 mt-16 overflow-y-auto md:p-6 sm:p-4 p-2">{children}</main>
        </div>
      </div>
    </Suspense>
  )
}
