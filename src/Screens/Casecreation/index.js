import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import images from "../../utilities/images";

export default function Casecreation() {
  const datacase = [
    {
      images: images.casered,
    },
    {
      images: images.casegreen,
    },
    {
      images: images.caselime,
    },
    {
      images: images.casepurple,
    },
    {
      images: images.caseblue,
    },
    {
      images: images.casered,
    },
  ];

  const dataitems = [
    {
      id: 1,
      images: images.m4a4,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 2,
      images: images.kato,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 3,
      images: images.glovespurple,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 4,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 5,
      images: images.m4a4,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 6,
      images: images.kato,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 7,
      images: images.glovespurple,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 8,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 9,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 10,
      images: images.m4a4,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 11,
      images: images.kato,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 12,
      images: images.glovespurple,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 13,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 14,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 1,
      images: images.m4a4,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 2,
      images: images.kato,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 3,
      images: images.glovespurple,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 4,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 5,
      images: images.m4a4,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 6,
      images: images.kato,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 7,
      images: images.glovespurple,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 8,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 9,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 10,
      images: images.m4a4,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 11,
      images: images.kato,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 12,
      images: images.glovespurple,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 13,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
    {
      id: 14,
      images: images.vox,
      guname: "StatTrak",
      guntitle: "Titan (Holo) | Katowice 2014",
      coin: images.coin,
      cost: "26,400.00",
    },
  ];

  const [selectedItem, setselectedItem] = useState(null);


  const handleclick = (item) => {
    setselectedItem(item);
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl pb-20   mx-auto flex  flex-col items-start mt-5p px-5">
      <div className="flex  items-center  w-full ">
        <div className="w-full flex flex gap-7">
          <div
            className="bg-backarrowcolor items-center flex  h-10 p-3 rounded cursor-pointer active:opacity-50 "
            onClick={() => navigate("/")}
          >
            <img src={images.backArrow} className="h-3 w-full " />
          </div>
          <div className="text-white font-bold w-60  text-xl border-b-4 border-lineBlue">
            <div className="pb-2">Create Your Own Case</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-yellow font-bold  text-2xl text-nowrap">
            Demo Mode
          </div>
          <div className="text-yellow font-bold  text-sm text-nowrap">
            You must be at least level 5 to create a case.
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full  mt-5 gap-4">
          <div className="gap-4 w-40p bg-darkBlue2 flex items-center   text-white p-4">
            <div className="flex flex-col w-full items-center">
              <div className="flex items-center gap-4 w-full">
                <div className="text-yellow  bg-yellow  bg-opacity-10 border border-yellow  w-8 flex items-center justify-center h-8">
                  1
                </div>
                <div className="text-xl">Your Case Name</div>
              </div>
              <div className="pt-4 w-full">
                <input
                  type=""
                  className=" focus:outline-none rounded-lg text-white  w-full pl-2 p-2 bg-placeholderlighterblue"
                  placeholder="Enter a name..."
                />
              </div>
              <div className="text-sm mt-4 w-full ">
                <li className="text-textdarkerwhite">
                  Name must not
                  <span className="pl-1  text-white font-semibold">
                    have been used
                  </span>
                </li>
                <li className="text-textdarkerwhite ">
                  Should be at least
                  <span className=" pl-1 text-white font-semibold">
                    10 characters long
                  </span>
                </li>
                <li className="text-textdarkerwhite">
                  Should not include
                  <span className="pl-1  text-white font-semibold">
                    profanities/slurs
                  </span>
                </li>
              </div>
            </div>
          </div>

          <div className="gap-4 w-full flex items-center  bg-darkBlue2 text-white p-2">
            <div className="flex flex-col">
              <div className="flex gap-2 ">
                <div className="text-yellow  bg-yellow  bg-opacity-20 border border-yellow  w-8 flex items-center justify-center h-8">
                  2
                </div>
                <div className="text-xl">Select Case Image</div>
              </div>
              <div className="flex gap-2 p-3 ">
                {datacase.map((item, index) => (
                  <div key={index}>
                    <div className="rounded-lg bg-placeholderlighterblue w-32 h-32 flex items-center justify-center">
                      <img src={item.images} className="h-20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-start gap-2">
          <div className="gap-4 w-full mt-5 bg-darkBlue2 flex items-center   text-white p-4">
            <div className="flex flex-col w-full items-center">
              <div className="flex items-center gap-4 w-full">
                <div className="text-yellow  bg-yellow  bg-opacity-10 border border-yellow  w-8 flex items-center justify-center h-8">
                  3
                </div>
                <div className="text-xl">Select up to 20 items</div>
              </div>
              <div className="flex justify-between mt-2 gap-28  items-center w-full">
                <div className=" w-full pb-2">
                  <input
                    type=""
                    className=" focus:outline-none rounded-lg text-white  w-80 pl-2 h-10 bg-placeholderlighterblue"
                    placeholder="Enter a name..."
                  />
                </div>
                <div className="flex   w-full  gap-2 ">
                  <div className=" bg-placeholderlighterblue rounded-lg justify-between text-white flex items-center h-10  w-full lg:w-24 p-3 text-sm cursor-pointer active:opacity-50">
                    All
                    <img
                      src={images.arrowDownWhite}
                      className="opacity-60 h-2"
                    />
                  </div>
                  <div className=" bg-placeholderlighterblue rounded-lg text-white flex items-center justify-evenly w-full  lg:w-52  text-sm text-nowrap cursor-pointer active:opacity-50">
                    Popularity Descending
                    <img
                      src={images.arrowDownWhite}
                      className="opacity-60 h-2"
                    />
                  </div>
                  <div className=" bg-placeholderlighterblue rounded-lg text-white flex items-center justify-evenly w-full  lg:w-10  text-sm text-nowrap cursor-pointer active:opacity-50">
                    <img src={images.redo} className="opacity-60 h-3" />
                  </div>
                </div>
              </div>
              <div className="w-full h-[1000px] grid grid-cols-4 overflow-y-scroll check gap-4">
                {dataitems.map((items, index) => (
                  <div
                    key={items.id}
                    className="bg-cardlightblue cursor-pointer active:opacity-50 h-52 text-sm mt-4 w-full flex"
                    onClick={() => handleclick(items)}
                  >
                    <div className="flex flex-col items-center w-full">
                      <div className="flex items-start flex flex-col w-full text-xs p-2">
                        FN
                      </div>
                      <img
                        src={items.images}
                        className="h-20 full flex-shrink-0"
                      />
                      <div className="flex items-start flex flex-col w-full text-xs p-2 mt-5">
                        <div className="flex gap-1">
                          <div className="text-yellow">{items.guname}</div>
                          <div className="opacity-40"> M4A4 </div>
                        </div>
                        <div>Howl </div>
                        <div className="text-lg flex items-center">
                          <img src={items.coin} className="h-5" /> {items.cost}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-full mt-5 bg-darkBlue2 flex    text-white p-4">
            <div className="flex flex-col w-full ">
              <div className="flex items-center gap-4 w-full">
                <div className="text-yellow  bg-yellow  bg-opacity-10 border border-yellow  w-8 flex items-center justify-center h-8">
                  4
                </div>
                <div className="flex w-full justify-between">
                  <div className="text-xl">Set Drop Chances </div>
                  <div className="text-xl text-yellow">0.00% </div>
                </div>
              </div>
              <div className="grid grid-cols-1">
                {selectedItem && (
                  <div className="mt-10 bg-darkercolor ">
                    <div className="mt-4 bg-darkercolor p-4 gap-5 pt-7 flex">
                      <img src={selectedItem.images} className="h-14" />
                      <div className="flex flex-col">
                        <div className="text-yellow flex gap-2 text-sm">
                          {selectedItem.guname}
                          <div className="text-white opacity-40 text-sm">
                            M4A4
                          </div>
                        </div>
                        <div className="text-sm">
                          Titan (Holo) | Katowice 2014
                        </div>
                        <div className="flex   items-center">
                          <img src={selectedItem.coin} className="h-5" />{" "}
                          {selectedItem.cost}
                        </div>
                      </div>
                    </div>
                    <div className="bg-darkerlightercolor flex gap-4 p-2 ">
                      <div className="cursor-pointer active:opacity-50 border h-12 gap-2 it w-full flex items-center justify-start pl-4">
                        <div className="text-yellow font-semibold">%</div>
                        <div>0.00</div>
                      </div>
                      <div className="cursor-pointer active:opacity-50 text-yellow font-semibold border bg-darkBlue2 border-yellow w-full flex items-center justify-center">
                        <div className="font-semibold ">
                          <div>
                            <img src={images.coin} className="h-6" />
                          </div>
                        </div>
                        <div>0.00</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
