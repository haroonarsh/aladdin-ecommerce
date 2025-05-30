"use client"

import { useState } from "react"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package, Download } from "lucide-react"

export default function StatisticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d")

  // Sample data for charts
  const salesData = [
    { name: "Jan", sales: 4000, orders: 240, customers: 180 },
    { name: "Feb", sales: 3000, orders: 198, customers: 150 },
    { name: "Mar", sales: 2000, orders: 180, customers: 120 },
    { name: "Apr", sales: 2780, orders: 220, customers: 160 },
    { name: "May", sales: 1890, orders: 150, customers: 110 },
    { name: "Jun", sales: 2390, orders: 190, customers: 140 },
    { name: "Jul", sales: 3490, orders: 280, customers: 200 },
    { name: "Aug", sales: 4200, orders: 320, customers: 230 },
    { name: "Sep", sales: 3800, orders: 290, customers: 210 },
    { name: "Oct", sales: 4100, orders: 310, customers: 220 },
    { name: "Nov", sales: 4500, orders: 340, customers: 250 },
    { name: "Dec", sales: 5200, orders: 380, customers: 280 },
  ]

  const revenueData = [
    { name: "Week 1", revenue: 12000 },
    { name: "Week 2", revenue: 15000 },
    { name: "Week 3", revenue: 18000 },
    { name: "Week 4", revenue: 22000 },
    { name: "Week 5", revenue: 19000 },
    { name: "Week 6", revenue: 25000 },
    { name: "Week 7", revenue: 28000 },
  ]

  const categoryData = [
    { name: "Skincare", value: 45, color: "#0ea5e9" },
    { name: "Makeup", value: 25, color: "#8b5cf6" },
    { name: "Hair Care", value: 20, color: "#10b981" },
    { name: "Body Care", value: 10, color: "#f59e0b" },
  ]

  const topProducts = [
    { name: "Curology Sun Screen SPF 50", sales: 245, revenue: 7458.35 },
    { name: "Vitamin C Serum", sales: 189, revenue: 8687.11 },
    { name: "Anti-Aging Cream", sales: 156, revenue: 10218.0 },
    { name: "Hydrating Face Mask", sales: 134, revenue: 3350.0 },
    { name: "Gentle Cleanser", sales: 98, revenue: 2253.02 },
  ]

  const periods = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 3 months" },
    { value: "1y", label: "Last year" },
  ]

  return (
    <div className="space-y-6">
      {/* Header with Period Selector */}
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900">Statistics Overview</h1>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {periods.map((period) => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
          <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            <Download className="mr-2 h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$142,850</p>
              <div className="flex items-center text-sm">
                <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">+12.5%</span>
                <span className="ml-1 text-gray-500">vs last period</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">3,290</p>
              <div className="flex items-center text-sm">
                <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">+8.2%</span>
                <span className="ml-1 text-gray-500">vs last period</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <ShoppingCart className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New Customers</p>
              <p className="text-2xl font-bold text-gray-900">1,245</p>
              <div className="flex items-center text-sm">
                <TrendingDown className="mr-1 h-4 w-4 text-red-500" />
                <span className="text-red-500">-3.1%</span>
                <span className="ml-1 text-gray-500">vs last period</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Products Sold</p>
              <p className="text-2xl font-bold text-gray-900">8,567</p>
              <div className="flex items-center text-sm">
                <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">+15.3%</span>
                <span className="ml-1 text-gray-500">vs last period</span>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <Package className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Sales Overview Chart */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Sales Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Bar dataKey="sales" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Trend Chart */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Revenue Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Category Distribution */}
        <div className="rounded-lg bg-white md:p-6 sm:p-4 p-2 shadow-sm">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Sales by Category</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <span className="text-sm text-gray-600">{category.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{category.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="col-span-2 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Top Selling Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.sales} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">${product.revenue.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Analytics */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-medium text-gray-900">Customer Analytics</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Line type="monotone" dataKey="customers" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: "#8b5cf6" }} />
              <Line type="monotone" dataKey="orders" stroke="#f59e0b" strokeWidth={2} dot={{ fill: "#f59e0b" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-purple-500"></div>
            <span className="text-sm text-gray-600">New Customers</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-600">Orders</span>
          </div>
        </div>
      </div>
    </div>
  )
}
