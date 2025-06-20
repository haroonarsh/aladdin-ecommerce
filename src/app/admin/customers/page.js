"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Users,
  UserPlus,
  UserCheck,
  DollarSign,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedType, setSelectedType] = useState("All")

  // Sample customers data
  const [customers] = useState([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "New York, NY",
      joinDate: "2023-01-15",
      totalOrders: 12,
      totalSpent: 1245.67,
      status: "Active",
      lastOrderDate: "2024-03-15",
      customerType: "VIP",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael.chen@email.com",
      phone: "+1 (555) 234-5678",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Los Angeles, CA",
      joinDate: "2023-03-22",
      totalOrders: 8,
      totalSpent: 567.89,
      status: "Active",
      lastOrderDate: "2024-03-14",
      customerType: "Regular",
    },
    {
      id: "3",
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 345-6789",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Chicago, IL",
      joinDate: "2024-02-10",
      totalOrders: 3,
      totalSpent: 189.45,
      status: "Active",
      lastOrderDate: "2024-03-13",
      customerType: "New",
    },
    {
      id: "4",
      name: "David Wilson",
      email: "david.wilson@email.com",
      phone: "+1 (555) 456-7890",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Miami, FL",
      joinDate: "2022-11-08",
      totalOrders: 25,
      totalSpent: 2890.34,
      status: "Active",
      lastOrderDate: "2024-03-12",
      customerType: "VIP",
    },
    {
      id: "5",
      name: "Lisa Anderson",
      email: "lisa.anderson@email.com",
      phone: "+1 (555) 567-8901",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Seattle, WA",
      joinDate: "2023-07-19",
      totalOrders: 5,
      totalSpent: 234.56,
      status: "Inactive",
      lastOrderDate: "2024-01-20",
      customerType: "Regular",
    },
    {
      id: "6",
      name: "Robert Taylor",
      email: "robert.taylor@email.com",
      phone: "+1 (555) 678-9012",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Boston, MA",
      joinDate: "2023-09-05",
      totalOrders: 0,
      totalSpent: 0,
      status: "Blocked",
      lastOrderDate: "Never",
      customerType: "New",
    },
    {
      id: "7",
      name: "Jennifer Brown",
      email: "jennifer.brown@email.com",
      phone: "+1 (555) 789-0123",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Denver, CO",
      joinDate: "2022-12-03",
      totalOrders: 18,
      totalSpent: 1567.89,
      status: "Active",
      lastOrderDate: "2024-03-10",
      customerType: "VIP",
    },
    {
      id: "8",
      name: "James Miller",
      email: "james.miller@email.com",
      phone: "+1 (555) 890-1234",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Phoenix, AZ",
      joinDate: "2024-01-28",
      totalOrders: 2,
      totalSpent: 98.76,
      status: "Active",
      lastOrderDate: "2024-03-08",
      customerType: "New",
    },
  ])

  const statusOptions = ["All", "Active", "Inactive", "Blocked"]
  const typeOptions = ["All", "Regular", "VIP", "New"]

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
    const matchesStatus = selectedStatus === "All" || customer.status === selectedStatus
    const matchesType = selectedType === "All" || customer.customerType === selectedType
    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-yellow-100 text-yellow-800"
      case "Blocked":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "VIP":
        return "bg-purple-100 text-purple-800"
      case "Regular":
        return "bg-blue-100 text-blue-800"
      case "New":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Calculate stats
  const totalCustomers = customers.length
  const activeCustomers = customers.filter((customer) => customer.status === "Active").length
  const newCustomers = customers.filter((customer) => customer.customerType === "New").length
  const vipCustomers = customers.filter((customer) => customer.customerType === "VIP").length
  const totalRevenue = customers.reduce((sum, customer) => sum + customer.totalSpent, 0)

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">{totalCustomers}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <UserCheck className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Customers</p>
              <p className="text-2xl font-bold text-gray-900">{activeCustomers}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <UserPlus className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">New Customers</p>
              <p className="text-2xl font-bold text-gray-900">{newCustomers}</p>
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

      {/* Customers Table */}
      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <h2 className="text-lg font-medium text-gray-900">Customers</h2>
            <div className="flex space-x-3">
              <button className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Customer
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers..."
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
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {typeOptions.map((type) => (
                <option key={type} value={type}>
                  {type} Type
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
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          src={customer.avatar || "/placeholder.svg"}
                          alt={customer.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Phone className="mr-1 h-4 w-4" />
                      {customer.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="mr-1 h-4 w-4" />
                      {customer.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      {customer.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.totalOrders}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${customer.totalSpent.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getTypeColor(
                        customer.customerType,
                      )}`}
                    >
                      {customer.customerType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                        customer.status,
                      )}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
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
            {filteredCustomers.map((customer) => (
              <div key={customer.id} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={customer.avatar || "/placeholder.svg"}
                      alt={customer.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      <div className="text-xs text-gray-500">{customer.email}</div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                        customer.status,
                      )}`}
                    >
                      {customer.status}
                    </span>
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getTypeColor(
                        customer.customerType,
                      )}`}
                    >
                      {customer.customerType}
                    </span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Orders:</span>
                    <span className="ml-1 font-medium">{customer.totalOrders}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Spent:</span>
                    <span className="ml-1 font-medium">${customer.totalSpent.toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <span className="ml-1 text-xs">{customer.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Joined:</span>
                    <span className="ml-1 text-xs">{customer.joinDate}</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="mr-1 h-3 w-3" />
                    {customer.location}
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
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
                Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{" "}
                <span className="font-medium">{filteredCustomers.length}</span> results
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
