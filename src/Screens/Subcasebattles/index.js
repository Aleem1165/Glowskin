import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import images from "../../utilities/images";
import "../../Screens/Subcasebattles/slotmachine.css";

export default function Subcasebattle({ Cards }) {
  const navigate = useNavigate();

  const tiny3 = [
    {
      images: images.tiny,
    },
    {
      images: images.tiny,
    },
    {
      images: images.mines2,
    },
    {
      images: images.mines2,
    },
  ];

  const data = [
    {
      images: images.gun2,
      guntype: "AUG",
      gunname: "Arctic Wolf FN",
      constimage: images.coin,
      cost: "15,675.90",
    },
    {
      images: images.gun2,
      guntype: "AUG",
      gunname: "Arctic Wolf FN",
      constimage: images.coin,
      cost: "15,675.90",
    },
    {
      images: images.gun2,
      guntype: "AUG",
      gunname: "Arctic Wolf FN",
      constimage: images.coin,
      cost: "15,675.90",
    },
    {
      images: images.gun2,
      guntype: "AUG",
      gunname: "Arctic Wolf FN",
      constimage: images.coin,
      cost: "15,675.90",
    },
  ];

  const smalldata = [
    {
      images: images.liveDropImg,
    },
    {
      images: images.liveDropImg,
    },
    {
      images: images.liveDropImg,
    },
    {
      images: images.liveDropImg,
    },
    {
      images: images.liveDropImg,
    },
    {
      images: images.liveDropImg,
    },
    {
      images: images.liveDropImg,
    },
  ];

  const gunsdata = [
    {
      gun2: images.gun2,
    },
    {
      gun2: images.DashboardLastCard2,
    },
    {
      gun2: images.animation,
    },
    {
      gun2: images.gun2,
    },
    {
      gun2: images.DashboardLastCard2,
    },
    {
      gun2: images.animation,
    },
    {
      gun2: images.gun2,
    },
    {
      gun2: images.DashboardLastCard2,
    },
    {
      gun2: images.animation,
    },
    {
      gun2: images.gun2,
    },
    {
      gun2: images.DashboardLastCard2,
    },
    {
      gun2: images.animation,
    },
  ];


  return (
    <div className="max-w-screen-xl pb-20  mx-auto flex  flex-col items-start mt-5p px-5">
      <div className="text-white font-bold w-72  text-xl border-b-4 border-lineBlue">
        <div className="pb-2">CS2 & CS:GO Case Battles</div>
      </div>
      <div className="w-full ml-5">
        <div className="w-10 mt-2">
          <div
            className="bg-backarrowcolor items-center flex  h-10 p-3 rounded cursor-pointer active:opacity-50 "
            onClick={() => navigate("/battle")}
          >
            <img src={images.backArrow} className="h-3 w-full " />
          </div>
        </div>
        <div className="flex items-center text-white mt-4  w-full bg-darkercodemode">
          <div className="mt-2 text-white gap-2  font-semibold  p-4 flex">
            <img src={images.coin} className="h-7" />
            <div>544.67</div>
          </div>
          <div className="flex font-semibold w-full items-center flex flex-col justify-center">
            <div className="text-sm">Nothing But Coal</div>
            <div className="flex items-center gap-2">
              <img src={images.coin} className="h-8" />
              544.67
            </div>
          </div>
          <div className="flex font-semibold w-40 mr-10 items-end flex flex-col justify-center">
            <div>4 Players</div>
            <div className="flex items-center text-lineBlue font-bold">
              GROUP
            </div>
          </div>
        </div>
        <div className="text-white font-semibold mt-8 h-10  flex items-center w-full ">
          <div className="text-nowrap">Round 39 of 45</div>
          <div className="w-full flex justify-center ">
            {smalldata.map((item, index) => (
              <div key={index}>
                <img src={item.images} className="h-14" />
              </div>
            ))}
          </div>
          <div className="flex gap-2 w-44 items-center">
            <img src={images.circletick} className="h-5" />
            Provably Fair
          </div>
        </div>
        <div className="flex gap-4">
          {tiny3.map((item, index) => (
            <div key={index} className="bg-darkBlue2 w-72 h-full mt-10">
              <div className="bg-darkercodemode border-t  border-lineBlue border-x   p-4 text-white flex  items-center">
                <img
                  src={item.images}
                  className="h-12 border border-lineBlue rounded-lg"
                />
                <div className="flex pl-2 flex-col">
                  <div>Brooklyn</div>
                  <div className="font-semibold text-lineBlue">21</div>
                </div>
                <div className="w-full justify-end flex items-center mt-6 gap-1">
                  <img src={images.coin} className="h-4" />
                  3.32
                </div>
              </div>
              <div className="overflow-y-scroll h-[360px] check flex flex-col items-center relative"
              >
                <div className="flex flex-col gap-10 items-center absolute top-0">
                  {gunsdata.map((item, index) => (
                    <div key={index} className="mx-2">
                      <img
                        src={item.gun2}
                        className={`w-40 transition-transform`}
                        alt={`gun${index}`}
                        style={{
                          transform: `translateY(-${index * 100}px)`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="text-white text-sm bg-carddarkercolor  p-4 border-t-2  border-x  border-lineBlue w-72 cursor-pointer active:opacity-50"
                  >
                    <div className="flex gap-2 items-center">
                      <img src={item.images} className="h-28" />
                      <div className="flex flex-col ">
                        <div className="opacity-80">{item.guntype}</div>
                        <div className="text-yellow "> {item.gunname}</div>
                        <div className="flex items-center">
                          <img src={item.constimage} className="h-5" />{" "}
                          {item.cost}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
