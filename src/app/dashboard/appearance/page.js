"use client"

import { useState } from "react"
import { Monitor, Smartphone, Tablet, Eye, Save, RotateCcw } from "lucide-react"

export default function AppearancePage() {
  const [selectedTheme, setSelectedTheme] = useState("light")
  const [primaryColor, setPrimaryColor] = useState("#0ea5e9")
  const [secondaryColor, setSecondaryColor] = useState("#8b5cf6")
  const [fontSize, setFontSize] = useState("medium")
  const [borderRadius, setBorderRadius] = useState("medium")
  const [selectedDevice, setSelectedDevice] = useState("desktop")

  const themes = [
    { id: "light", name: "Light", preview: "bg-white border-gray-200" },
    { id: "dark", name: "Dark", preview: "bg-gray-900 border-gray-700" },
    { id: "auto", name: "Auto", preview: "bg-gradient-to-r from-white to-gray-900" },
  ]

  const colors = [
    "#0ea5e9", // Blue
    "#10b981", // Green
    "#8b5cf6", // Purple
    "#f59e0b", // Yellow
    "#ef4444", // Red
    "#06b6d4", // Cyan
    "#84cc16", // Lime
    "#f97316", // Orange
  ]

  const fontSizes = [
    { id: "small", name: "Small", value: "14px" },
    { id: "medium", name: "Medium", value: "16px" },
    { id: "large", name: "Large", value: "18px" },
  ]

  const borderRadiuses = [
    { id: "none", name: "None", value: "0px" },
    { id: "small", name: "Small", value: "4px" },
    { id: "medium", name: "Medium", value: "8px" },
    { id: "large", name: "Large", value: "12px" },
  ]

  const devices = [
    { id: "desktop", name: "Desktop", icon: Monitor },
    { id: "tablet", name: "Tablet", icon: Tablet },
    { id: "mobile", name: "Mobile", icon: Smartphone },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900">Appearance Settings</h1>
        <div className="flex space-x-3">
          <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </button>
          <button className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Settings Panel */}
        <div className="space-y-6 lg:col-span-1">
          {/* Theme Selection */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium text-gray-900">Theme</h3>
            <div className="space-y-3">
              {themes.map((theme) => (
                <label key={theme.id} className="flex cursor-pointer items-center">
                  <input
                    type="radio"
                    name="theme"
                    value={theme.id}
                    checked={selectedTheme === theme.id}
                    onChange={(e) => setSelectedTheme(e.target.value)}
                    className="mr-3 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div className={`mr-3 h-6 w-6 rounded border-2 ${theme.preview}`}></div>
                  <span className="text-sm font-medium text-gray-700">{theme.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color Customization */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium text-gray-900">Colors</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Primary Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="h-10 w-16 rounded border border-gray-300"
                  />
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setPrimaryColor(color)}
                      className={`h-8 w-8 rounded border-2 ${
                        primaryColor === color ? "border-gray-400" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Secondary Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="h-10 w-16 rounded border border-gray-300"
                  />
                  <input
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium text-gray-900">Typography</h3>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Font Size</label>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                {fontSizes.map((size) => (
                  <option key={size.id} value={size.id}>
                    {size.name} ({size.value})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Border Radius */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium text-gray-900">Border Radius</h3>
            <div className="space-y-3">
              {borderRadiuses.map((radius) => (
                <label key={radius.id} className="flex cursor-pointer items-center">
                  <input
                    type="radio"
                    name="borderRadius"
                    value={radius.id}
                    checked={borderRadius === radius.id}
                    onChange={(e) => setBorderRadius(e.target.value)}
                    className="mr-3 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div
                    className="mr-3 h-6 w-6 border-2 border-gray-300 bg-gray-100"
                    style={{ borderRadius: radius.value }}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">
                    {radius.name} ({radius.value})
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Preview</h3>
              <div className="flex space-x-2">
                {devices.map((device) => {
                  const IconComponent = device.icon
                  return (
                    <button
                      key={device.id}
                      onClick={() => setSelectedDevice(device.id)}
                      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                        selectedDevice === device.id ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <IconComponent className="mr-2 h-4 w-4" />
                      {device.name}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Preview Container */}
            <div className="rounded-lg border-2 border-dashed border-gray-300 p-4">
              <div
                className={`mx-auto overflow-hidden rounded-lg border bg-white shadow-lg ${
                  selectedDevice === "mobile" ? "max-w-sm" : selectedDevice === "tablet" ? "max-w-2xl" : "max-w-full"
                }`}
              >
                {/* Preview Header */}
                <div
                  className="px-6 py-4"
                  style={{
                    backgroundColor: primaryColor,
                    borderRadius: `${borderRadiuses.find((r) => r.id === borderRadius)?.value} ${borderRadiuses.find((r) => r.id === borderRadius)?.value} 0 0`,
                  }}
                >
                  <h4 className="text-lg font-semibold text-white">Dashboard Preview</h4>
                </div>

                {/* Preview Content */}
                <div className="p-6">
                  <div className="mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-gray-50 p-4"
                        style={{
                          borderRadius: borderRadiuses.find((r) => r.id === borderRadius)?.value,
                          fontSize: fontSizes.find((f) => f.id === fontSize)?.value,
                        }}
                      >
                        <div className="mb-2 text-sm text-gray-600">Metric {i}</div>
                        <div className="text-2xl font-bold text-gray-900">1,234</div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="rounded-lg bg-gray-50 p-4"
                    style={{
                      borderRadius: borderRadiuses.find((r) => r.id === borderRadius)?.value,
                    }}
                  >
                    <h5 className="mb-3 font-medium text-gray-900">Sample Chart</h5>
                    <div className="h-32 rounded bg-gray-200"></div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <button
                      className="rounded px-4 py-2 text-sm font-medium text-white"
                      style={{
                        backgroundColor: primaryColor,
                        borderRadius: borderRadiuses.find((r) => r.id === borderRadius)?.value,
                        fontSize: fontSizes.find((f) => f.id === fontSize)?.value,
                      }}
                    >
                      Primary Button
                    </button>
                    <button
                      className="rounded border px-4 py-2 text-sm font-medium"
                      style={{
                        borderColor: secondaryColor,
                        color: secondaryColor,
                        borderRadius: borderRadiuses.find((r) => r.id === borderRadius)?.value,
                        fontSize: fontSizes.find((f) => f.id === fontSize)?.value,
                      }}
                    >
                      Secondary Button
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center">
              <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                <Eye className="mr-2 h-4 w-4" />
                Full Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
