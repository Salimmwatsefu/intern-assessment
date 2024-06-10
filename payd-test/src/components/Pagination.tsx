import React from 'react';

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
    <div className="flex justify-center mt-4">
      <button
        onClick={onPreviousPage}
        className={`mr-2 px-4 py-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={onNextPage}
        className={`ml-2 px-4 py-2 rounded ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
