import React, { useState } from "react";
import images from "../../utilities/images";

export default function Battle() {

  
  const data = [
    {
      image: images.liveDropImg,
      running: "41",
      currency: "121.75",
    },
    {
      image: images.liveDropImg,
      running: "41",
      currency: "121.75",
    },
    {
      image: images.liveDropImg,
      running: "41",
      currency: "121.75",
    },
    {
      image: images.liveDropImg,
      running: "41",
      currency: "121.75",
    },
    {
      image: images.liveDropImg,
      running: "41",
      currency: "121.75",
    },
    {
      image: images.liveDropImg,
      running: "41",
      currency: "121.75",
    },

  ];

  const [tab, setTab] = useState("price");
  return (
    <div className=" max-w-screen-xl mx-auto flex flex-col items-start mt-10 px-5">
      <div className="text-white font-semibold text-lg border-b-4 border-lineBlue pb-1 pr-3 ">
        <span>CS2 & CS:GO Case Battles</span>
      </div>
      <div className="mt-4 gap-2 flex w-full flex-row items-center justify-between ">
        <div className="flex flex-row gap-2">
          <div
            onClick={() => setTab("price")}
            className={
              tab === "price"
                ? "bg-white text-black text-sm w-20 flex items-center justify-center text-center border-white border py-[8px] cursor-pointer active:opacity-80 font-semibold"
                : "bg-darkBlue2 text-white border flex items-center justify-center border-white text-sm w-20 text-center py-[6px] cursor-pointer active:opacity-80 font-semibold"
            }
          >
            PRICE
          </div>
          <div
            onClick={() => setTab("date")}
            className={
              tab === "date"
                ? "bg-white text-black text-sm w-20 text-center flex items-center justify-center border-white border py-[6px] cursor-pointer active:opacity-80 font-semibold"
                : "bg-darkBlue2 text-white border border-white flex items-center justify-center text-sm w-20 text-center py-[6px] cursor-pointer active:opacity-80 font-semibold"
            }
          >
            DATE
          </div>
        </div>
        <div className="bg-darkBlue2 flex w-full   flex-row items-center justify-between">
          <div className="flex flex-row w-full p-2 items-center">
            <img src={images.swordbattle} className="w-4 mr-2" />
            <div className="w-full">
              <div className="text-xs font-semibold text-grayText">Battle</div>
              <div className="text-md font-semibold  text-white">RAIN</div>
            </div>
          </div>
          <div className="bg-blue4 w-52 flex flex-row items-center px-3 py-1 mr-3">
            <img src={images.coin} className="w-5" />
            <div className="text-base text-white border border-dashed border-lineBlue border-opacity-60 px-2 py-[2px] mr-2 ml-2">
              40.87
            </div>
            <div className="text-xxs text-white flex flex-row items-center">
              <img className="w-3 mr-1" src={images.clock} />
              14.00
            </div>
          </div>
        </div>
        <div className="w-60p justify-end items-center flex text-white text-sm font-semibold">
          <div className=" pr-2 border-r ">12 Active Battles</div>
          <div className="p-2 text-yellow">2 Joinable Battles</div>
          <div className="bg-yellow w-32 flex items-center justify-center h-12  cursor-pointer active:opacity-50 text-black  p-2 font-bold">
            Create Battle
          </div>
        </div>
      </div>
      {data.map((item,index) => (  <div key={index} className="bg-cardblue mt-10 flex items-center gap-10 p-4 text-white">
        <div className="flex flex-col items-center ">
          <div className="bg-lighterblue h-12 w-12 flex items-center justify-center rounded-lg">
            {item.running}
          </div>
          Running
        </div>
        <div className="relative w-full ">
          <div className="flex items-center       overflow-x-auto check flex-row justify-between text-white  gap-2  w-full">
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg0} className="h-24" />
            </div>
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg} className="h-24" />
            </div>
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg} className="h-24" />
            </div>
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg} className="h-24" />
            </div>
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg} className="h-24" />
            </div>
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg} className="h-24" />
            </div>
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg} className="h-24" />
            </div>
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg} className="h-24" />
            </div>
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg} className="h-24" />
            </div>
            <div className=" flex-shrink-0">
              <img src={images.liveDropImg} className="h-24" />
            </div>
          </div>
          <div className="absolute bottom-[100%]  left-[51%]">
            <img className="h-2" src={images.yellowpoli} />
          </div>
          <div className="absolute   left-[51%]">
            <img className="h-2" src={images.yellowtri} />
          </div>
        </div>
        <div className="w-60p justify-end  flex items-center text-xl ">
          <img src={images.coin} className="h-8" />
          121.75
          <div className="pl-10 cursor-pointer active:opacity-50">
            <img src={images.itemimage} className="h-24" />
          </div>
          <div className="pl-10">
            <div className="bg-yellow text-black font-bold text-sm h-12 w-32 mb-2 cursor-pointer active:opacity-50 flex items-center justify-center">
              View
            </div>
          </div>
        </div>
      </div>))}
    
    </div>
  );
}
