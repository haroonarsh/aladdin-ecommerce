"use client"

import React from "react"

import { useState, useEffect } from "react"
import { X, Upload, Plus, Trash2 } from "lucide-react"
import { useProduct } from "@/hooks/useProduct"

export default function EditProductModal({ isOpen, onClose, onUpdateProduct, product, id }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "Skincare",
    price: 0,
    stock: 0,
    status: "Active",
    imageUrl: "/placeholder.svg?height=200&width=200",
    SKU: "",
    sales: 0,
    description: "",
    tags: [],
    weight: "",
    dimensions: "",
    brand: "",
  })

  const [newTag, setNewTag] = useState("")
  const [errors, setErrors] = useState({})
  const { updateProduct } = useProduct()

  // Initialize form data when product changes
  useEffect(() => {
    if (product) {
      setFormData({
        ...product,
        tags: product.tags || [],
        description: product.description || "",
        weight: product.weight || "",
        dimensions: product.dimensions || "",
        brand: product.brand || "",
      })
    }
  }, [product])

  const categories = ["Skincare", "Makeup", "Hair Care", "Body Care", "Fragrance", "Tools & Accessories"]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags?.includes(newTag.trim())) {
      setFormData((prev) => ({ ...prev, tags: [...(prev.tags || []), newTag.trim()] }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({ ...prev, tags: prev.tags?.filter((tag) => tag !== tagToRemove) }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Product name is required"
    if (!formData.SKU.trim()) newErrors.sku = "SKU is required"
    if (formData.price <= 0) newErrors.price = "Price must be greater than 0"
    if (formData.stock < 0) newErrors.stock = "Stock cannot be negative"
    if (!formData.description?.trim()) newErrors.description = "Description is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await localStorage.getItem("jwt") || "";
    if (!token) {
      console.log("No token found");
    }
    if (validateForm()) {
      updateProduct(token, id, formData).then((response) => {
        console.log("Product updated successfully", response)
      onUpdateProduct(formData)
      onClose()
      })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

        {/* Modal */}
        <div className="relative w-full max-w-4xl rounded-lg bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-900">Edit Product</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto p-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Basic Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Product Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                          errors.name
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="Enter product name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => handleInputChange("category", e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Brand</label>
                      <input
                        type="text"
                        value={formData.brand || ""}
                        onChange={(e) => handleInputChange("brand", e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Enter brand name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description *</label>
                      <textarea
                        rows={4}
                        value={formData.description || ""}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        className={`mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                          errors.description
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="Enter product description"
                      />
                      {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                    </div>
                  </div>
                </div>

                {/* Pricing & Inventory */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Pricing & Inventory</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Price ($) *</label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", Number.parseFloat(e.target.value) || 0)}
                        className={`mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                          errors.price
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="0.00"
                      />
                      {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Stock Quantity *</label>
                      <input
                        type="number"
                        min="0"
                        value={formData.stock}
                        onChange={(e) => handleInputChange("stock", Number.parseInt(e.target.value) || 0)}
                        className={`mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                          errors.stock
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="0"
                      />
                      {errors.stock && <p className="mt-1 text-sm text-red-600">{errors.stock}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">SKU *</label>
                      <input
                        type="text"
                        value={formData.SKU}
                        onChange={(e) => handleInputChange("SKU", e.target.value)}
                        className={`mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                          errors.SKU
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="Enter SKU"
                      />
                      {errors.SKU && <p className="mt-1 text-sm text-red-600">{errors.SKU}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Status</label>
                      <select
                        value={formData.status}
                        onChange={(e) =>
                          handleInputChange("status", e.target.value)
                        }
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Out of Stock">Out of Stock</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Product Image */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Product Image</h3>
                  <div className="mt-4">
                    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6">
                      <div className="mb-4 h-40 w-40 overflow-hidden rounded-lg">
                        <img
                          src={formData.imageUrl || "/placeholder.svg"}
                          alt={formData.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                       <div className="mt-4">
                          <label
                            htmlFor="product-image-upload"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                          >
                            <Upload className="mr-2 h-4 w-4" /> Upload Image
                            <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0]
                              if (file) {
                                const reader = new FileReader()
                                reader.onloadend = () => {
                                  setFormData((prev) => ({ ...prev, imageUrl: reader.result }))
                                }
                                reader.readAsDataURL(file)
                              }
                            }}
                            className="hidden"
                            id="product-image-upload"
                          />
                          </label>
                        </div>
                        <p className="mt-2 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Weight</label>
                      <input
                        type="text"
                        value={formData.weight || ""}
                        onChange={(e) => handleInputChange("weight", e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="e.g., 100g, 2.5oz"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Dimensions</label>
                      <input
                        type="text"
                        value={formData.dimensions || ""}
                        onChange={(e) => handleInputChange("dimensions", e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="e.g., 10 x 5 x 3 cm"
                      />
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Tags</h3>
                  <div className="mt-4">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Add a tag"
                      />
                      <button
                        type="button"
                        onClick={addTag}
                        className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {formData.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sales Information (Read-only) */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Sales Information</h3>
                  <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Total Sales</span>
                      <span className="text-sm font-bold text-gray-900">{formData.sales}</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      This information is automatically updated and cannot be edited.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-end space-x-3 border-t border-gray-200 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
