import React, { useState } from "react";
import images from "../../utilities/images";
import Slider from "rc-slider";

export default function Upgrader() {
  const [dataselect, setdataselect] = useState(false);

  const carddata = [
    {
      images: images.liveDropImg2,
      guntype: "AUG",
      gunname: "The Executioner MW",
      constimage: images.coin,
      cost: "15,675.90",
      images2: images.gun2,
      multipler: "0.00",
    },
    {
      images: images.liveDropImg2,
      guntype: "AUG",
      gunname: "The Executioner MW",
      constimage: images.coin,
      cost: "15,675.90",
      images2: images.gun2,
      multipler: "0.00",
    },
    {
      images: images.liveDropImg2,
      guntype: "AUG",
      gunname: "The Executioner MW",
      constimage: images.coin,
      cost: "15,675.90",
      images2: images.gun2,
      multipler: "0.00",
    },
    {
      images: images.liveDropImg2,
      guntype: "AUG",
      gunname: "The Executioner MW",
      constimage: images.coin,
      cost: "15,675.90",
      images2: images.gun2,
      multipler: "0.00",
    },
    {
      images: images.liveDropImg2,
      guntype: "AUG",
      gunname: "The Executioner MW",
      constimage: images.coin,
      cost: "15,675.90",
      images2: images.gun2,
      multipler: "0.00",
    },
    {
      images: images.liveDropImg2,
      guntype: "AUG",
      gunname: "The Executioner MW",
      constimage: images.coin,
      cost: "15,675.90",
      images2: images.gun2,
      multipler: "0.00",
    },
    {
      images: images.liveDropImg2,
      guntype: "AUG",
      gunname: "The Executioner MW",
      constimage: images.coin,
      cost: "15,675.90",
      images2: images.gun2,
      multipler: "0.00",
    },
    {
      images: images.liveDropImg2,
      guntype: "AUG",
      gunname: "The Executioner MW",
      constimage: images.coin,
      cost: "15,675.90",
      images2: images.gun2,
      multipler: "0.00",
    },
    {
      images: images.liveDropImg2,
      guntype: "AUG",
      gunname: "The Executioner MW",
      constimage: images.coin,
      cost: "15,675.90",
      images2: images.gun2,
      multipler: "0.00",
    },
  ];

  return (
    <div className="max-w-screen-xl pb-20  mx-auto flex  flex-col items-start mt-5p px-5">
      <div className="text-white font-bold w-60  text-xl border-b-4 border-lineBlue">
        <div className="pb-2">CS:GO & CS2 Unboxing</div>
      </div>
      <div className=" flex items-center pt-10 pb-20    border border-lineBlue justify-between mt-2 bg-darkerbordercolor w-full pl-12 pr-12  text-white">
        <div className="w-full   ">
          {dataselect ? (
            <div className="w-full flex gap-10 pl-20 ">
              <div className="flex   flex-col text-xl ">
                <div className="pb-5">
                  <div className=" opacity-40">MULTIPLIER </div>
                  <div className="text-md flex  gap-1 items-center">
                    <div className="pt-1 text-xs text-yellow font-bold">X</div>
                    {carddata[0].multipler}
                  </div>
                </div>
                <div className="gap-2  flex flex-col ">
                  <div className="font-semibold">{carddata[0].gunname}</div>
                  <div className="flex items-center  text-base gap-2">
                  <img src={images.coin} className="h-5 w-5" />
                  29,500.96
                  </div>
                </div>
              </div>
              <div className="">
                <img src={carddata[0].images2} />
              </div>
            </div>
          ) : (
            <div >
              <div className="bg-selectitemcolor  active:opacity-50 cursor-pointer  font-semibold text-md  w-full flex items-center justify-center  border border-lineBlue h-48 ">
                Select items to upgrade
              </div>
            </div>
          )}

          <div className="mt-20 font-bold flex flex-col   w-full gap-2">
            Use your balance to upgrade
            <div className="flex gap-2 items-center">
              <img src={images.coin} className="h-5" />
              <div className="bg-bluebuttoncolor flex items-center p-2  w-40 pl-2 text-xs border border-lineBlue">
                10
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4 w-96">
              <Slider
                className="bg-transparent"
                min={1}
                max={24}
                // value={mines}
                // onChange={(newValue) => setMines(newValue)}
                trackStyle={{ backgroundColor: "#0CAAF3" }}
              />
            </div>
          </div>
          <div className="w-full flex mt-2 gap-1 ">
            <div className="bg-bluebuttoncolor w-10 cursor-pointer active:opacity-50 text-xs text-center p-2 border border-lineBlue">
              1/2
            </div>
            <div className="bg-bluebuttoncolor w-12 cursor-pointer active:opacity-50 text-xs text-center p-2 border border-lineBlue">
              x2
            </div>
            <div className="bg-bluebuttoncolor w-16 cursor-pointer active:opacity-50 text-xs flex items-center justify-center p-1  border border-lineBlue">
              Max
            </div>
          </div>
        </div>
        <div className="w-full   gap-2 items-end   flex flex-col">
          <div className="relative  flex items-center justify-center flex-col ">
            <img src={images.badgeblue} className="h-80 " />
            <div className="absolute">
              <div className="flex flex-col items-center">
                <div className="text-xl  font-semibold pb-4">CHANCE</div>
                <div className="flex gap-2 text-2xl font-bold">
                  <div>0.00</div>
                  <div className="text-yellow">%</div>
                </div>
                <div className="text-gray-400 ">1.000000 - 1.000000</div>
              </div>
            </div>
          </div>
          <div className="mx-end mr-8 w-60 ">
            <div className="flex justify-between w gap-4">
              <div className="flex   gap-1 text-sm items-center">
                <img src={images.shuffle} className="h-5 " />
                Roll over
              </div>
              <div className="flex   gap-1 text-sm items-center">
                <img src={images.animation} className="h-6 " />
                Current Animation
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="bg-yellow mt-10 w-52  flex justify-center items-center  p-2 text-black font-bold active:opacity-50 cursor-pointer">
                Upgrade
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white p-2 w-full flex justify-between">
        <div className="pt-2 flex w-full justify-between items-center ">
          <input
            type=""
            className=" focus:outline-none text-white border border-lineBlue w-72 pl-2 p-2 bg-btnDark"
            placeholder="Search for cases..."
          />
          <div className="flex  gap-2 ">
            <div className=" bg-btnDark text-white w-full lg:w-52 p-3 text-sm cursor-pointer active:opacity-50">
              All
            </div>
            <div className=" bg-btnDark text-white w-full  lg:w-52 p-3 text-sm text-nowrap cursor-pointer active:opacity-50">
              Popularity Descending
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-4 gap-10    w-full ">
        {carddata.map((item, index) => (
          <div
            key={index}
            className="text-white text-sm bg-carddarkercolor    p-4 border-t-2  border-x  border-lineBlue w-96"
          onClick={() => setdataselect(true)}
          >
            <div className="flex  gap-2 items-center">
              <div className="flex flex-col ">
                <div className="text-yellow "> {item.gunname}</div>
                <div className="flex items-center">
                  <img src={item.constimage} className="h-5" /> {item.cost}
                </div>
              </div>
              <img src={item.images} className="h-28" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
