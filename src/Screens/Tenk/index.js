import React from "react";
import images from "../../utilities/images";
import { useNavigate } from "react-router-dom";

export default function Tenk() {
  const tenkdata = [
    {
      number: "4",
    },
    {
      number: "5",
    },
    {
      number: "6",
    },
    {
      number: "7",
    },
    {
      number: "8",
    },
  ];

  const Navigate = useNavigate();

  return (
    <div className="max-w-screen-xl pb-20  mx-auto flex  flex-col items-start mt-5p px-5">
      {" "}
      <div className="w-full flex flex gap-7">
        <div
          className="bg-backarrowcolor items-center flex  h-10 p-3 rounded cursor-pointer active:opacity-50 "
          onClick={() => Navigate("/")}
        >
          <img src={images.backArrow} className="h-3 w-full " />
        </div>
        <div className="text-white font-bold w-60  text-xl border-b-4 border-lineBlue">
          <div className="pb-2">10K Daily Race</div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="mt-10 ">
          <div className="relative">
            <div>
              <img src={images.tenkback} className="h-full w-full" />
            </div>
            <div className="absolute  bottom-[0] left-[36%] w-72">
              <img src={images.tenk} className="  " />
            </div>
            <div className="absolute  top-[90%] left-[42%] ">
              <div className="bg-yellow w-40  flex justify-center font-semibold round rounded-lg  text-black ">
                Ends in
              </div>
            </div>
          </div>
        </div>
        <div className="text-white flex items-center  p-4 text-sm bg-darkBlue2">
          <div className="flex gap-4">
            <div className="bg-placeholderlighterblue w-32 justify-center gap-3 h-10 items-center flex ">
              Your Position:
              <img src={images.yellowdots} className="w-4 h-1" />
            </div>
            <div className="bg-placeholderlighterblue w-40 text-nowrap justify-center gap-2 h-10 items-center flex ">
              Wager Points:
              <img src={images.coin} className="w-4" />
              0.00
            </div>
          </div>
          <div className="w-[46%] text-2xl font-semibold justify-center flex">
            Your Stats
          </div>
          <div className="flex gap-4">
            <div className="bg-placeholderlighterblue text-nowrap w-44 justify-center gap-2 h-10 items-center flex ">
              Your Position:
              <img src={images.Raceflag} className="w-4 " />
              <div className="text-yellow font-semi-bold">0 races</div>
            </div>
            <div className="text-black  bg-yellow font-semibold cursor-pointer active:opacity-50 w-40 text-nowrap justify-center gap-2 h-10 items-center flex ">
              Claim Rewards
            </div>
          </div>
        </div>
        <div className="flex text-white gap-6 mt-12 flex w-full justify-center h-full">
          <div className="relative w-27p flex mt-20 flex-col h-96 rounded-lg  items-center bg-lighterblue2  ">
            <img src={images.transparentfag} className="w-full h-auto  mb-10" />
            <div className="bg-darkblue3 border  top-[-5%]  border-lineBlue w-28 flex justify-center items-center round rounded-lg  font-semibold absolute p-2">
              2nd PLACE
            </div>
            <div className="absolute w-full flex flex-col items-center ">
              <div className="flex flex-col w-full gap-4 items-center ">
                <img src={images.tiny} className="h-18 w-20 mt-10" />
                <div className="flex gap-2 items-center justify-center">
                  <div className="bg-yellow text-black w-10 flex items-center justify-center h-7 font-semibold round rounded-lg ">
                    59
                  </div>
                  <div className="font-semibold"> mo</div>
                </div>
                <div className="flex bg-darkBlue2 round rounded-lg w-90p h-14 text-xl justify-center items-center">
                  <div className="pl-4 opacity-60">Wager Points:</div>
                  <div className="pl-4 flex gap-2 ">
                    <img src={images.coin} className="w-7" />
                    51,429.66
                  </div>
                </div>
                <div className="flex w-full flex items-center">
                  <div className="border border-t opacity-40 h-0  ml-4 w-full"></div>
                  <div className="w-full flex justify-center ">
                    <img src={images.coin} className="w-7" />
                  </div>
                  <div className="border h-0  opacity-40 mr-4 w-full"></div>
                </div>
                <div className="flex items-center font-semibold text-xl gap-2 mt-4 ">
                  <img src={images.coin} className="h-5" />
                  5,000.00
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-27p flex  flex-col h-96 rounded-lg  items-center bg-lighterblue2    ">
            <img src={images.transparentfag} className="w-full h-auto " />
            <div className="bg-darkblue3 border top-[-5%]  border-lineBlue w-28 flex justify-center items-center round rounded-lg  font-semibold absolute p-2">
              1st PLACE
            </div>
            <div className="absolute w-full flex flex-col items-center ">
              <div className="flex flex-col w-full gap-4 items-center ">
                <img src={images.tiny} className="h-18 w-20 mt-10" />
                <div className="flex gap-2 items-center justify-center">
                  <div className="bg-yellow text-black w-10 flex items-center justify-center h-7 font-semibold round rounded-lg ">
                    59
                  </div>
                  <div className="font-semibold"> mo</div>
                </div>
                <div className="flex bg-darkBlue2 round rounded-lg w-90p h-14 text-xl justify-center items-center">
                  <div className="pl-4 opacity-60">Wager Points:</div>
                  <div className="pl-4 flex gap-2 ">
                    <img src={images.coin} className="w-7" />
                    51,429.66
                  </div>
                </div>
                <div className="flex w-full flex items-center">
                  <div className="border border-t opacity-40 h-0  ml-4 w-full"></div>
                  <div className="w-full flex justify-center ">
                    <img src={images.coin} className="w-7" />
                  </div>
                  <div className="border h-0  opacity-40 mr-4 w-full"></div>
                </div>
                <div className="flex items-center font-semibold text-xl gap-2 mt-4 ">
                  <img src={images.coin} className="h-5" />
                  5,000.00
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-27p flex mt-20 flex-col h-96 rounded-lg  items-center bg-lighterblue2  ">
            <img src={images.transparentfag} className="w-full h-auto " />
            <div className="bg-darkblue3 border  top-[-5%]   border-lineBlue w-28 flex justify-center items-center round rounded-lg  font-semibold absolute p-2">
              3rd PLACE
            </div>
            <div className="absolute w-full flex flex-col items-center ">
              <div className="flex flex-col w-full gap-4 items-center ">
                <img src={images.tiny} className="h-18 w-20 mt-10" />
                <div className="flex gap-2 items-center justify-center">
                  <div className="bg-yellow text-black w-10 flex items-center justify-center h-7 font-semibold round rounded-lg ">
                    59
                  </div>
                  <div className="font-semibold"> mo</div>
                </div>
                <div className="flex bg-darkBlue2 round rounded-lg w-90p h-14 text-xl justify-center items-center">
                  <div className="pl-4 opacity-60">Wager Points:</div>
                  <div className="pl-4 flex gap-2 ">
                    <img src={images.coin} className="w-7" />
                    51,429.66
                  </div>
                </div>
                <div className="flex w-full flex items-center">
                  <div className="border border-t opacity-40 h-0  ml-4 w-full"></div>
                  <div className="w-full flex justify-center ">
                    <img src={images.coin} className="w-7" />
                  </div>
                  <div className="border h-0  opacity-40 mr-4 w-full"></div>
                </div>
                <div className="flex items-center font-semibold text-xl gap-2 mt-4 ">
                  <img src={images.coin} className="h-5" />
                  5,000.00
                </div>
              </div>
            </div>
          </div>
        </div>

        {tenkdata.map((item, index) => (
          <div key={index} className="cursor-pointer active:opacity-50 mb-4 text-white flex  relative h-32 items-cente  w-full bg-lighterblue2">
            <div className="bg-darkblue3 border top-[-15%] left-[-2%] border-lineBlue w-28 flex justify-center items-center round rounded-lg  font-semibold absolute p-2">
              {item.number}nd PLACE
            </div>
            <div className="items-center flex w-full  ml-10 gap-4">
              <img src={images.tiny} className="h-14" />
              <div className="gap-2 flex">
                <div className="bg-yellow text-black w-10 flex items-center justify-center h-7 font-semibold round rounded-lg ">
                  59
                </div>
                <div> Rapture</div>
              </div>
              <div className=" flex w-full gap-5 mr-6 justify-end items-center ">
                <div className="flex bg-darkBlue2  round rounded-lg  w-64 h-14 text-base justify-center items-center">
                  <div className="pl-4 opacity-60">Wager Points:</div>
                  <div className="pl-4 flex gap-2 ">
                    <img src={images.coin} className="w-5 h-5" />
                    51,429.66
                  </div>
                </div>
                <div className="flex bg-darkBlue2  round rounded-lg items-center   w-40 h-14 text-base justify-center items-center">
                  <div className="pl-4 opacity-60">Prize:</div>
                  <div className="pl-4 flex gap-2 mr-2">
                    <img src={images.coin} className="w-5 h-5" />
                    <div className="text-yellow">200.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
