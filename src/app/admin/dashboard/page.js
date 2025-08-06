"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { DollarSign, ShoppingBag, ShoppingCart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LatestOrders from "@/features/LatestOrders"
import { useEffect, useState, useMemo } from "react"
import { useOrder } from "@/hooks/useOrder"

export default function Dashboard() {

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

  const totalProduts = useMemo(() => {
    return orders.reduce((total, order) => {
      return total + order.products.reduce((orderTotal, product) => {
        return orderTotal + product.quantity;
      }, 0);
    }, 0);
  }, [orders]);

  // Sample data for the bar chart
  const chartData = [
    { name: "Jan", value1: 900, value2: 800 },
    { name: "Feb", value1: 950, value2: 900 },
    { name: "Mar", value1: 1100, value2: 1000 },
    { name: "Apr", value1: 800, value2: 700 },
    { name: "May", value1: 650, value2: 600 },
    { name: "Jun", value1: 750, value2: 700 },
    { name: "Jul", value1: 1100, value2: 1000 },
    { name: "Aug", value1: 900, value2: 850 },
    { name: "Sep", value1: 950, value2: 900 },
    { name: "Oct", value1: 1050, value2: 1000 },
    { name: "Nov", value1: 1150, value2: 1050 },
    { name: "Dec", value1: 1200, value2: 1100 },
  ]

  const totalSales = orders.reduce((acc, order) => acc + order.totalAmount, 0);

  return (
    <>
    <div className="flex items-center justify-center w-full h-screen p-0 m-0">

          {/* // Content */}
      <div className="w-full h-full">
          {/* // Header  */}
       
          {/* <Header /> */}
          
        
          {/* // Body */}
        <div className="w-full">
        <div className={`flex min-h-full max-w-screen flex-col bg-muted/20 neutral1-bg`}>
      <div className="flex-1 space-y-4 ">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Total Sales Card */}
          <Card>
            <CardContent className="flex items-center lg:gap-4 gap-2 p-6">
              <div className="flex h-18 w-18 items-center justify-center rounded-full bg-orange-200">
                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-orange-400">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground neutral6">Total Sales</p>
                <h3 className="xl:text-2xl text-xl font-bold">${totalSales.toFixed(2) || 0}</h3>
              </div>
            </CardContent>
          </Card>

          {/* Total Orders Card */}
          <Card>
            <CardContent className="flex items-center lg:gap-4 gap-2 p-6">
            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-green-200">
                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-green-600">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground neutral6">Total Orders</p>
                <h3 className="xl:text-2xl text-xl font-bold">{orders.length || 0}</h3>
              </div>
            </CardContent>
          </Card>

          {/* Total Products Card */}
          <Card>
            <CardContent className="flex items-center lg:gap-4 gap-2 p-6">
            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-cyan-200">
                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-cyan-600">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground neutral6">Total Products</p>
                <h3 className="xl:text-2xl text-xl font-bold">{totalProduts}</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          {/* Sales Statistics */}
          <Card className="col-span-7 md:col-span-4">
            <CardHeader>
              <CardTitle>Sales Statistics</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Bar dataKey="value1" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={18} />
                    <Bar dataKey="value2" fill="#93c5fd" radius={[4, 4, 0, 0]} barSize={18} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Visitors */}
          <Card className="col-span-7 md:col-span-3">
            <CardHeader>
              <CardTitle>Visitors</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <div className="relative flex h-40 w-40 items-center justify-center">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle className="stroke-muted" cx="50" cy="50" r="40" fill="transparent" strokeWidth="8" />
                  <circle
                    className="stroke-cyan-500"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeWidth="8"
                    strokeDasharray="221.2"
                    strokeDashoffset="5"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-bold">89.12%</span>
                  <span className="text-xs text-muted-foreground">Website growth</span>
                </div>
              </div>
              <div className="mt-6 grid w-full grid-cols-2 gap-2 text-xs">
                <div className="flex items-center">
                  <div className="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Social media 50%</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Affiliate visitors 18%</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 h-2 w-2 rounded-full bg-orange-500"></div>
                  <span>Purchased visitors 35%</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 h-2 w-2 rounded-full bg-purple-500"></div>
                  <span>By advertisement 20%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      
    
        
            {/* // Latest Orders */}
        <main className="">
      <div className="mt-10 mx-auto">
        <LatestOrders orders={orders} />
      </div>
      </main>
      </div>
      </div>
      </div>
    
      </div>
    </div>
    </>
  )
}

