"use client"

import { Star, StarHalf } from "lucide-react"

export default function CustomerReviews() {
  const ratings = [
    { stars: 5, percentage: 87 },
    { stars: 4, percentage: 49 },
    { stars: 3, percentage: 25 },
    { stars: 2, percentage: 12 },
    { stars: 1, percentage: 2 },
  ]

  const averageRating = 4.4
  const totalRatings = 299976

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-6 w-6 fill-amber-500 text-amber-500" />)
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-6 w-6 fill-amber-500 text-amber-500" />)
    }

    // Add empty stars to make total of 5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-6 w-6 text-amber-500" />)
    }

    return stars
  }

  return (
    <div className="max-w-md rounded-lg p-6">
      <h2 className="mb-3 text-2xl font-semibold primary8">Customer reviews</h2>

      <div className="mb-2 flex items-center gap-2">
        <div className="flex">{renderStars(averageRating)}</div>
        <span className="text-gray-700">{averageRating} out of 5</span>
      </div>

      <p className="mb-4 text-gray-700">{totalRatings.toLocaleString()} global ratings</p>

      <div className="space-y-2">
        {ratings.map((rating) => (
          <div key={rating.stars} className="flex items-center gap-2">
            <span className="w-12 text-sm text-gray-700">{rating.stars} stars</span>
            <div className="relative h-5 flex-1 rounded border border-amber-200">
              <div
                className="absolute left-0 top-0 h-full rounded bg-amber-500"
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
            <span className="w-8 text-right text-sm text-gray-700">{rating.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

