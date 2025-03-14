import { EllipsisIcon as EllipsisHorizontal } from "lucide-react"

export default function LatestOrders() {
  const orders = [
    {
      id: "2323",
      customer: "Devon Lane",
      email: "devon@example.com",
      amount: "$99.99",
      status: "Delivered",
      date: "26/12/2023",
    },
    {
      id: "2458",
      customer: "Darrell Steward",
      email: "darrell@example.com",
      amount: "$219.39",
      status: "Delivered",
      date: "20/12/2023",
    },
    {
      id: "6528",
      customer: "Eleanor Pena",
      email: "eleanor@example.com",
      amount: "$90.19",
      status: "Cancel",
      date: "16/12/2023",
    },
    {
      id: "2323",
      customer: "John Iard",
      email: "iard@example.com",
      amount: "$20.59",
      status: "Pending",
      date: "26/12/2023",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600"
      case "Cancel":
        return "bg-red-100 text-red-600"
      case "Pending":
        return "bg-yellow-100 text-yellow-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Latest orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={`border-t border-gray-100 ${index === orders.length - 1 ? "" : ""}`}>
                <td className="py-4 pr-2 text-sm text-gray-500">{order.id}</td>
                <td className="py-4 px-2 text-sm font-medium">{order.customer}</td>
                <td className="py-4 px-2 text-sm text-gray-500">{order.email}</td>
                <td className="py-4 px-2 text-sm font-medium">{order.amount}</td>
                <td className="py-4 px-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-2 text-sm text-gray-500">{order.date}</td>
                <td className="py-4 pl-2 text-right">
                  <button className="text-gray-400 hover:text-gray-500">
                    <EllipsisHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { LatestOrders }