import React from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <div className="flex justify-center mt-4 mb-5">
      <button
        onClick={onPreviousPage}
        className={`mr-2 px-4 py-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-yellow-500 text-white'}`}
        disabled={currentPage === 1}
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={onNextPage}
        className={`ml-2 px-4 py-2 rounded ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-yellow-500 text-white'}`}
        disabled={currentPage >= totalPages}
      >
        <GrFormNext />
      </button>
    </div>
  );
};

export default Pagination;
