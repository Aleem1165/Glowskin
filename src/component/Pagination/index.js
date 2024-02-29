import React, { useState, useEffect } from "react";
import images from "../../utilities/images";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // State to track the number of displayed pages
  const [displayPages, setDisplayPages] = useState(10);

  // Effect to update the number of displayed pages based on screen size
  useEffect(() => {
    const updateDisplayPages = () => {
      if (window.innerWidth < 768) {
        // If screen size is smaller than medium (768px)
        setDisplayPages(3);
      } else {
        // If screen size is medium or larger
        setDisplayPages(10);
      }
    };

    // Initial call to set the number of displayed pages
    updateDisplayPages();

    // Event listener to handle screen resize
    window.addEventListener("resize", updateDisplayPages);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", updateDisplayPages);
  }, []);

  const renderPageNumbers = (currentPage, totalPages, onPageChange) => {
    const pageNumbers = [];

    if (totalPages <= displayPages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`inline-block bg-paginationcolor cursor-pointer p-2 w-11 text-center rounded text-md${
              currentPage === i ? " text-white border border-lineBlue" : " border"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </li>
        );
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));
      const endPage = Math.min(totalPages, startPage + displayPages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`inline-block bg-paginationcolor cursor-pointer p-2 w-11 text-center rounded text-md${
              currentPage === i ? " text-white border border-lineBlue" : " border"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </li>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="mt-5 flex items-center w-full">
      <ul className="flex items-center space-x-1 w-full justify-between">
        <li
          className={`bg-cardcolor cursor-pointer active:opacity-50 p-3 h-14 flex items-center rounded-l-xl border-lineBlue border `}
          onClick={() => {
            if (currentPage !== 1) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          <img src={images.arrowleft} className="h-3" alt="Previous" />
        </li>

        <div className="text-white gap-4 flex">
          {renderPageNumbers(currentPage, totalPages, onPageChange)}
        </div>

        <li
          className={`bg-cardcolor cursor-pointer active:opacity-50 p-3 h-14 flex items-center rounded-r-xl border-lineBlue border `}
          onClick={() => {
            if (currentPage < totalPages) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          <img src={images.arrowright} className="h-3" alt="Next" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
