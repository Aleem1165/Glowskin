import React, { useState } from "react";
import Pagination from "../Pagination";
import { useLocation, useNavigate } from "react-router-dom";

export default function Community({ Cards }) {
  const [currentPage, setCurrentPage] = useState(1);
  // const [currentPage2, setCurrentPage2] = useState(1);
  // const [currentPage3, setCurrentPage3] = useState(1);
  // const [currentPage4, setCurrentPage4] = useState(1);

  const productsPerPage = 15;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Cards.slice(indexOfFirstProduct, indexOfLastProduct);

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6">
        {currentProducts.map((item, index) => (
          <div key={index} className="pt-5 relative flex flex-col items-center">
            <div className="text-white pb-2  text-xl relative w-80p sm:w-full bg-carddarkercolor pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
              <div className="bg-lineBlue left-[74%] bottom-[90%] flex items-center bg-opacity-20 w-14 text-sm gap-2 absolute   items-center justify-center rounded">
                <img src={item.heart} className="h-3 gap-2" /> 30
              </div>
              <img
                src={item.image}
                onClick={() => navigate("/cases/opencases")}
                className="pb-2 cursor-pointer active:opacity-50"
              />
              <div className="pb-2">{item.description}</div>
              <div className="pb-2 opacity-60 text-sm  ">
                {item.timesopened}
              </div>
              <div className="absolute  top-[95%]">
                <div className="bg-cardcolor cursor-pointer active:opacity-50 relative  text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue"
                onClick={() => navigate("/cases/opencases")}
                >
                  <img src={item.currency} className="h-4" />
                  Open {item.cost}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-40">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(Cards.length / productsPerPage)}
          onPageChange={handlePageChange}
          // currentPage2={currentPage2}
          // totalPages2={Math.ceil(Cards.length / productsPerPage2)}
          // onPageChange2={handlePageChange}
          // currentPage3={currentPage3}
          // totalPages3={Math.ceil(Cards.length / productsPerPage3)}
          // onPageChange3={handlePageChange}
          // currentPage4={currentPage4}
          // totalPages4={Math.ceil(Cards.length / productsPerPage4)}
          // onPageChange4={handlePageChange}
        />
      </div>
    </div>
  );
}
