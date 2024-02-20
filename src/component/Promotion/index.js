import React, { useEffect, useState } from "react";
import images from "../../utilities/images";
import "../../App.css";
import { BarLoader } from "react-spinners";

export default function Promotion() {
  return (
    <div className="w-80p md:w-60p lg:w-50p xl:w-40p">
      <div className="w-full bg-paymentModalBg p-4">
        <div className="flex flex-row items-center ">
          <img src={images.promotion} className="w-10 h-10 bg-transparent" />
          <div className="text-xs ml-2 font-semibold">
            <div className="text-white text-sm">Promotion</div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-white mt-5 text-sm">Promotional Code</div>
          <input
            type="text"
            className="w-full focus:outline-none mt-2 bg-inputBG p-1 rounded-sm pl-2 text-white text-sm"
          />
        </div>
        <div className="w-80p bg-yellow mx-auto mt-4 flex items-center justify-center text-sm text-black font-bold py-2 rounded-md cursor-pointer active:opacity-70">
          Activate
        </div>
      </div>
    </div>
  );
}
