"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Search, Filter, Eye, Download, MoreHorizontal, Package, DollarSign, Clock, CheckCircle } from "lucide-react"
import { useOrder } from "@/hooks/useOrder"

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("All")

  // Sample orders data
  // const [orders] = useState([
  //   {
  //     id: "1",
  //     orderNumber: "ORD-2024-001",
  //     customer: {
  //       name: "Sarah Johnson",
  //       email: "sarah.johnson@email.com",
  //       avatar: "/placeholder.svg?height=40&width=40",
  //     },
  //     products: [
  //       {
  //         name: "Curology Sun Screen SPF 50",
  //         quantity: 2,
  //         price: 30.43,
  //         image: "/placeholder.svg?height=50&width=50",
  //       },
  //       {
  //         name: "Vitamin C Serum",
  //         quantity: 1,
  //         price: 45.99,
  //         image: "/placeholder.svg?height=50&width=50",
  //       },
  //     ],
  //     total: 106.85,
  //     status: "Delivered",
  //     paymentStatus: "Paid",
  //     date: "2024-03-15",
  //     shippingAddress: "123 Main St, New York, NY 10001",
  //   },
  //   {
  //     id: "2",
  //     orderNumber: "ORD-2024-002",
  //     customer: {
  //       name: "Michael Chen",
  //       email: "michael.chen@email.com",
  //       avatar: "/placeholder.svg?height=40&width=40",
  //     },
  //     products: [
  //       {
  //         name: "Anti-Aging Cream",
  //         quantity: 1,
  //         price: 65.5,
  //         image: "/placeholder.svg?height=50&width=50",
  //       },
  //     ],
  //     total: 65.5,
  //     status: "Shipped",
  //     paymentStatus: "Paid",
  //     date: "2024-03-14",
  //     shippingAddress: "456 Oak Ave, Los Angeles, CA 90210",
  //   },
  //   {
  //     id: "3",
  //     orderNumber: "ORD-2024-003",
  //     customer: {
  //       name: "Emily Davis",
  //       email: "emily.davis@email.com",
  //       avatar: "/placeholder.svg?height=40&width=40",
  //     },
  //     products: [
  //       {
  //         name: "Hydrating Face Mask",
  //         quantity: 3,
  //         price: 25.0,
  //         image: "/placeholder.svg?height=50&width=50",
  //       },
  //       {
  //         name: "Gentle Cleanser",
  //         quantity: 1,
  //         price: 22.99,
  //         image: "/placeholder.svg?height=50&width=50",
  //       },
  //     ],
  //     total: 97.99,
  //     status: "Processing",
  //     paymentStatus: "Paid",
  //     date: "2024-03-13",
  //     shippingAddress: "789 Pine St, Chicago, IL 60601",
  //   },
  //   {
  //     id: "4",
  //     orderNumber: "ORD-2024-004",
  //     customer: {
  //       name: "David Wilson",
  //       email: "david.wilson@email.com",
  //       avatar: "/placeholder.svg?height=40&width=40",
  //     },
  //     products: [
  //       {
  //         name: "Vitamin C Serum",
  //         quantity: 2,
  //         price: 45.99,
  //         image: "/placeholder.svg?height=50&width=50",
  //       },
  //     ],
  //     total: 91.98,
  //     status: "Pending",
  //     paymentStatus: "Pending",
  //     date: "2024-03-12",
  //     shippingAddress: "321 Elm St, Miami, FL 33101",
  //   },
  //   {
  //     id: "5",
  //     orderNumber: "ORD-2024-005",
  //     customer: {
  //       name: "Lisa Anderson",
  //       email: "lisa.anderson@email.com",
  //       avatar: "/placeholder.svg?height=40&width=40",
  //     },
  //     products: [
  //       {
  //         name: "Curology Sun Screen SPF 50",
  //         quantity: 1,
  //         price: 30.43,
  //         image: "/placeholder.svg?height=50&width=50",
  //       },
  //     ],
  //     total: 30.43,
  //     status: "Cancelled",
  //     paymentStatus: "Failed",
  //     date: "2024-03-11",
  //     shippingAddress: "654 Maple Dr, Seattle, WA 98101",
  //   },
  // ])

    const [orders, setOrders] = useState([]);
  const { fetchAdminOrders } = useOrder();
  console.log("SetOrders:", orders);

  // Fetch all orders
  const fetchOrders = async () => {
    await fetchAdminOrders()
      .then((res) => {
        setOrders(res.data.orders);
        console.log("Orders:", res);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      })
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const statusOptions = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"]
  const paymentStatusOptions = ["All", "Paid", "Pending", "Failed"]

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "All" || order.orderStatus === selectedStatus
    const matchesPaymentStatus = selectedPaymentStatus === "All" || order.paymentStatus === selectedPaymentStatus
    return matchesSearch && matchesStatus && matchesPaymentStatus
  })

  //latest order will be at the top
  filteredOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Shipped":
        return "bg-blue-100 text-blue-800"
      case "Processing":
        return "bg-yellow-100 text-yellow-800"
      case "Pending":
        return "bg-orange-100 text-orange-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Calculate stats
  const totalOrders = orders.length
  const pendingOrders = orders.filter((order) => order.orderStatus === "Pending").length
  const shippedOrders = orders.filter((order) => order.orderStatus === "Shipped").length
  const deliveredOrders = orders.filter((order) => order.orderStatus === "Delivered").length
  const totalRevenue = orders
    .filter((order) => order.paymentStatus === "Paid")
    .reduce((sum, order) => sum + order.totalAmount, 0)

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Orders</p>
              <p className="text-2xl font-bold text-gray-900">{pendingOrders}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Delivered</p>
              <p className="text-2xl font-bold text-gray-900">{deliveredOrders}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${totalRevenue.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <h2 className="text-lg font-medium text-gray-900">Orders</h2>
            <div className="flex space-x-3">
              <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                <Download className="mr-2 h-4 w-4" />
                Export
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status} Status
                </option>
              ))}
            </select>
            <select
              value={selectedPaymentStatus}
              onChange={(e) => setSelectedPaymentStatus(e.target.value)}
              className="rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {paymentStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status} Payment
                </option>
              ))}
            </select>
            <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredOrders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order._id.slice(0, 7)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="">
                        <div className="text-sm font-medium text-gray-900">{order.name}</div>
                        <div className="text-sm text-gray-500">{order.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-2">
                      {order.products.slice(0, 3).map((product, index) => (
                        <img
                          key={index}
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                      {order.products.length > 3 && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-medium text-gray-500">
                          +{order.products.length - 3}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.totalAmount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                        order.orderStatus,
                      )}`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getPaymentStatusColor(
                        order.paymentStatus,
                      )}`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.createdAt.slice(0, 10)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden">
          <div className="space-y-4 p-4">
            {filteredOrders.map((order) => (
              <div key={order._id} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">{order._id}</div>
                  <div className="flex space-x-2">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                        order.orderStatus,
                      )}`}
                    >
                      {order.orderStatus}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <img
                    src={order.name || "/placeholder.svg"}
                    alt={order.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">{order.name}</div>
                    <div className="text-xs text-gray-500">{order.email}</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm text-gray-500">{order.date}</div>
                  <div className="text-sm font-medium text-gray-900">${order.totalAmount.toFixed(2)}</div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getPaymentStatusColor(
                      order.paymentStatus,
                    )}`}
                  >
                    {order.paymentStatus}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
                <span className="font-medium">{filteredOrders.length}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  2
                </button>
                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
