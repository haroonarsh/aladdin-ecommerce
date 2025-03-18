import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className="flex justify-center items-center space-x-2">
      <Link href="#" className="flex items-center px-3 py-2 bg-teal-700 text-white rounded hover:bg-teal-800">
        <span className="mr-1">←</span> Previous page
      </Link>

      {[...Array(totalPages)].map((_, i) => (
        <Link
          key={i}
          href="#"
          className={`px-3 py-2 rounded ${
            currentPage === i + 1 ? "bg-teal-700 text-white" : "bg-white text-teal-700 hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </Link>
      ))}

      <Link href="#" className="flex items-center px-3 py-2 bg-teal-700 text-white rounded hover:bg-teal-800">
        Next page <span className="ml-1">→</span>
      </Link>
    </div>
  );
}