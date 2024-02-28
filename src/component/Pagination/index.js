import React from "react";
import images from "../../utilities/images";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  currentPage2,
  totalPages2,
  onPageChange2,
  currentPage3,
  totalPages3,
  onPageChange3,
  currentPage4,
  totalPages4,
  onPageChange4,
}) => {
  const renderPageNumbers = (currentPage, totalPages, onPageChange) => {
    const pageNumbers = [];
    const displayPages = 11;

    if (totalPages <= displayPages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`inline-block bg-paginationcolor cursor-pointer p-2 w-11 text-center rounded text-md${
              currentPage === i
                ? " text-white border border-lineBlue"
                : " border"
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

      const startIndex = endPage - displayPages + 1;
      for (let i = startIndex; i <= endPage; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`inline-block bg-paginationcolor cursor-pointer p-2 w-11 text-center rounded text-md${
              currentPage === i
                ? " text-white border border-lineBlue"
                : " border"
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

  const paginationData = [
    { currentPage, totalPages, onPageChange },
    { currentPage2, totalPages2, onPageChange2 },
    { currentPage3, totalPages3, onPageChange3 },
    { currentPage4, totalPages4, onPageChange4 },
  ];

  const paginationData2 = [{ currentPage2, totalPages2, onPageChange2 }];
  const paginationData3 = [{ currentPage3, totalPages3, onPageChange3 }];
  const paginationData4 = [{ currentPage4, totalPages4, onPageChange4 }];

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

        {paginationData.map(
          ({ currentPage, totalPages, onPageChange }, index) => (
            <div key={index} className="text-white gap-4 flex">
              {renderPageNumbers(currentPage, totalPages, onPageChange)}
            </div>
          )
        )}

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
