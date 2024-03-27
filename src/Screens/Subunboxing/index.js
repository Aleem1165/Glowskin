import React from "react";
import images from "../../utilities/images";
import { useLocation, useNavigate } from "react-router-dom";

export default function Subunboxing() {
  const carddata = [
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

  const navigate = useNavigate();
  return (
    <div className="pb-20  mx-auto flex  flex-col items-start mt-5p px-5">
      <div className="text-white font-bold w-60  text-xl border-b-4 border-lineBlue">
        <div className="pb-2">CS:GO & CS2 Unboxing</div>
      </div>
      <div className="flex mt-10 w-full  gap-5">
        <div
          className="bg-backarrowcolor items-center flex  h-10 p-3 rounded cursor-pointer active:opacity-50 "
          onClick={() => navigate("/cases/Classic")}>
          <img src={images.backArrow} className="h-3 w-full " />
        </div>
        <div className="flex text-white w-full">
          <div className="">
            <img src={images.liveDropImg} className="w-52" />
          </div>
          <div className="w-full flex flex-col p-5 font-semibold text-xl gap-2">
            <div>Everest </div>
            <div className="grid grid-cols-4 lg:flex gap-2">
              <div className="bg-backarrowcolor w-10 items-center flex justify-center text-sm h-8 ">
                1
              </div>
              <div className="bg-backarrowcolor w-10 items-center  border  border-lineBlue flex justify-center text-sm h-8 ">
                2
              </div>
              <div className="bg-backarrowcolor w-10 items-center border border-lineBlue flex justify-center text-sm h-8 ">
                3
              </div>
              <div className="bg-backarrowcolor w-10 items-center border border-lineBlue flex justify-center text-sm h-8 ">
                4
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-yellow text-sm flex p-2 active:opacity-50 cursor-pointer w-40 justify-center items-center rounded text-black font-bold ">
                Open for
                <img src={images.coin} className="h-4" /> 121.75
              </div>
              <div className="w-24 cursor-pointer active:opacity-50 text-sm flex items-center justify-center p-2 bg-btnGray2 rounded ">
                Demo
              </div>
            </div>
            <div className="flex items-center text-sm gap-2">
              <img src={images.circletick} className="h-5" />
              Provably Fair
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center mt-4   overflow-x-auto check flex-row justify-between text-white p-6 gap-2 bg-sununboxingcolor w-full">
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className=" flex-shrink-0">
            <img src={images.gun2} className="h-24" />
          </div>
          <div className="absolute top-5  left-[50%]">
            <img className="h-2" src={images.yellowpoli} />
          </div>
          <div className="absolute bottom-1  left-[50%]">
            <img className="h-2" src={images.yellowtri} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full">
        {carddata.map((item, index) => (
          <div
            key={index}
            className="text-white text-sm bg-carddarkercolor  p-4 border-t-2 mt-10 border-x  border-lineBlue w-96"
          >
            <div className="flex gap-2 items-center">
              <img src={item.images} className="h-28" />
              <div className="flex flex-col ">
                <div className="opacity-80">{item.guntype}</div>
                <div className="text-yellow "> {item.gunname}</div>
                <div className="flex items-center">
                  <img src={item.constimage} className="h-5" /> {item.cost}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
