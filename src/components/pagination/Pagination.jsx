import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className="flex justify-center items-center space-x-1 sm:space-x-2">
      <Link href="#" className="flex items-center sm:px-3 px-0.5 sm:py-2 py-0.5 bg-teal-700 text-white rounded hover:bg-teal-800 sm:text-base text-sm">
        <span className="sm:mr-1 mr-0">←</span> Previous page
      </Link>

      {[...Array(totalPages)].map((_, i) => (
        <Link
          key={i}
          href="#"
          className={`sm:px-3 px-1 sm:py-2 py-0.5 sm:text-base text-sm rounded ${
            currentPage === i + 1 ? "bg-teal-700 text-white" : "bg-white text-teal-700 hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </Link>
      ))}

      <Link href="#" className="flex items-center sm:px-3 px-0.5 sm:py-2 py-0.5 bg-teal-700 text-white rounded hover:bg-teal-800 sm:text-base text-sm">
        Next page <span className="sm:ml-1 ml-0">→</span>
      </Link>
    </div>
  );
}