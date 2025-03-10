"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { DollarSign, ShoppingBag, ShoppingCart } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
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

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/20">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Total Sales Card */}
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <DollarSign className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Sales</p>
                <h3 className="text-2xl font-bold">$19,626,058.20</h3>
              </div>
            </CardContent>
          </Card>

          {/* Total Orders Card */}
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <ShoppingCart className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <h3 className="text-2xl font-bold">3290</h3>
              </div>
            </CardContent>
          </Card>

          {/* Total Products Card */}
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                <ShoppingBag className="h-8 w-8 text-cyan-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <h3 className="text-2xl font-bold">497</h3>
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
                    <Bar dataKey="value1" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={20} />
                    <Bar dataKey="value2" fill="#93c5fd" radius={[4, 4, 0, 0]} barSize={20} />
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
                    strokeDasharray="251.2"
                    strokeDashoffset="5"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-bold">98.12%</span>
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
      </div>
    </div>
  )
}

