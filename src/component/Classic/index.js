import React, { useState } from "react";
import Pagination from "../Pagination";
import { useLocation, useNavigate } from "react-router-dom";

export default function Classic({ Cards }) {
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
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
        {currentProducts.map((item, index) => (
          <div key={index} className="pt-5 relative flex flex-col items-center">
            <div className="text-white pb-2  text-xl relative w-80p sm:w-full h-52   bg-carddarkercolor pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
              <img
                src={item.image}
                className="pb-2 h-32  cursor-pointer active:opacity-50"
                onClick={() => navigate("/cases/opencases")}
              />
              <div className="pb-2">{item.description}</div>
              <div className="absolute top-[93%]  ">
                <div
                  className="bg-cardcolor cursor-pointer active:opacity-50  w-40 justify-center  text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue"
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
        />
      </div>
    </div>
  );
}
