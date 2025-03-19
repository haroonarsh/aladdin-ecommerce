import Image from "next/image";
import StarRating from "../start-rating/Rating";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {

  const router = useRouter();

  return (
    <div className="bg-white m-3.5 rounded-lg overflow-hidden shadow-md cursor-pointer"  onClick={() => router.push('/product-desc')}>
      <div className="relative h-72">
        <Image 
          src={product.image || "/placeholder.svg"} 
          alt={product.name} 
          fill 
          className="object-center object-cover" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
        <div className="mb-2">
          <StarRating rating={product.rating} />
        </div>
        <p className="text-pink-950 font-bold">
          ${product.price.max.toFixed(2)} - ${product.price.min.toFixed(2)}
        </p>
      </div>
    </div>
  );
}