import { EllipsisIcon as EllipsisHorizontal } from "lucide-react"

export default function LatestOrders({ orders }) {

  console.log("Latest Orders:", orders);
  

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
  
  // show only 10 orders
  orders = orders.slice(0, 10);

  // If no orders are found, return a message
  if (!orders || orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Latest orders</h2>
        <p className="text-gray-500">No orders found.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Latest orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={`border-t border-gray-100 ${index === orders.length - 1 ? "" : ""}`}>
                <td className="py-4 pr-2 text-sm text-gray-500">{order._id.slice(0, 5)}</td>
                <td className="py-4 px-2 text-sm font-medium">{order.name}</td>
                <td className="py-4 px-2 text-sm text-gray-500">{order.email}</td>
                <td className="py-4 px-2 text-sm font-medium">${order.totalAmount}</td>
                <td className="py-4 px-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      order.orderStatus,
                    )}`}
                  >
                    {order.orderStatus}
                  </span>
                </td>
                <td className="py-4 px-2 text-sm text-gray-500">{order.createdAt.slice(0, 10)}</td>
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