import { Star } from "lucide-react";

export default function StarRating({ rating, maxRating = 5 }) {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
        />
      ))}
    </div>
  );
}