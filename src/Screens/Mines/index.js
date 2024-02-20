import React, { useState } from "react";
import "../../App.css";
import images from "../../utilities/images";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import MinesGame from "../../component/MinesGame";

export default function Mines() {
  const [amount, setAmount] = useState(0.01);
  const [mines, setMines] = useState(1);
  const handleOnChange = (value) => {
    setMines(value);
  };
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-start mt-5p px-5">
      <div className="text-white font-semibold text-lg border-b-4 border-lineBlue pb-1 pr-3">
        <span>CS2 & CS:GO Mines</span>
      </div>
      <div className=" flex flex-row overflow-x-scroll check w-full items-center mt-5">
        <div className="flex flex-col items-start bg-paymentModalBg justify-center border-t border-r border-l border-lineBlue ">
          <div className="flex flex-row items-center p-3">
            <img src={images.mines1} className="w-14" />
            <div className="flex flex-col ml-2">
              <div className="text-sm text-white">15 Mine</div>
              <div className="text-sm text-white bg-blue3 flex items-cenetr justify-center">
                x0.00
              </div>
            </div>
          </div>
          <div className="w-[240px] flex flex-row items-center justify-around border-t border-lineBlue py-2">
            <div className="flex flex-row items-center text-sm text-white">
              <img src={images.coin} className="w-4 mr-1" />
              3.32
            </div>
            <div className="flex flex-row items-center text-sm text-white bg-blue3 px-2 py-1">
              <img src={images.coin} className="w-4 mr-1" />
              0.00
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-paymentModalBg justify-center border-t border-r border-l border-lineBlue ml-6">
          <div className="flex flex-row items-center p-3">
            <img src={images.mines2} className="w-14" />
            <div className="flex flex-col ml-2">
              <div className="text-sm text-white">15 Mine</div>
              <div className="text-sm text-white bg-blue3 flex items-cenetr justify-center">
                x0.00
              </div>
            </div>
          </div>
          <div className="w-[240px] flex flex-row items-center justify-around border-t border-lineBlue py-2">
            <div className="flex flex-row items-center text-sm text-white">
              <img src={images.coin} className="w-4 mr-1" />
              3.32
            </div>
            <div className="flex flex-row items-center text-sm text-green bg-blue3 px-2 py-1">
              <img src={images.coin} className="w-4 mr-1" />
              2.00
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-paymentModalBg justify-center border-t border-r border-l border-lineBlue ml-6">
          <div className="flex flex-row items-center p-3">
            <img src={images.mines1} className="w-14" />
            <div className="flex flex-col ml-2">
              <div className="text-sm text-white">15 Mine</div>
              <div className="text-sm text-white bg-blue3 flex items-cenetr justify-center">
                x0.00
              </div>
            </div>
          </div>
          <div className="w-[240px] flex flex-row items-center justify-around border-t border-lineBlue py-2">
            <div className="flex flex-row items-center text-sm text-white">
              <img src={images.coin} className="w-4 mr-1" />
              3.32
            </div>
            <div className="flex flex-row items-center text-sm text-white bg-blue3 px-2 py-1">
              <img src={images.coin} className="w-4 mr-1" />
              0.00
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-paymentModalBg justify-center border-t border-r border-l border-lineBlue ml-6">
          <div className="flex flex-row items-center p-3">
            <img src={images.mines2} className="w-14" />
            <div className="flex flex-col ml-2">
              <div className="text-sm text-white">15 Mine</div>
              <div className="text-sm text-white bg-blue3 flex items-cenetr justify-center">
                x0.00
              </div>
            </div>
          </div>
          <div className="w-[240px] flex flex-row items-center justify-around border-t border-lineBlue py-2">
            <div className="flex flex-row items-center text-sm text-white">
              <img src={images.coin} className="w-4 mr-1" />
              3.32
            </div>
            <div className="flex flex-row items-center text-sm text-green bg-blue3 px-2 py-1">
              <img src={images.coin} className="w-4 mr-1" />
              2.00
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-paymentModalBg justify-center border-t border-r border-l border-lineBlue ml-6">
          <div className="flex flex-row items-center p-3">
            <img src={images.mines1} className="w-14" />
            <div className="flex flex-col ml-2">
              <div className="text-sm text-white">15 Mine</div>
              <div className="text-sm text-white bg-blue3 flex items-cenetr justify-center">
                x0.00
              </div>
            </div>
          </div>
          <div className="w-[240px] flex flex-row items-center justify-around border-t border-lineBlue py-2">
            <div className="flex flex-row items-center text-sm text-white">
              <img src={images.coin} className="w-4 mr-1" />
              3.32
            </div>
            <div className="flex flex-row items-center text-sm text-white bg-blue3 px-2 py-1">
              <img src={images.coin} className="w-4 mr-1" />
              0.00
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-paymentModalBg justify-center border-t border-r border-l border-lineBlue ml-6">
          <div className="flex flex-row items-center p-3">
            <img src={images.mines2} className="w-14" />
            <div className="flex flex-col ml-2">
              <div className="text-sm text-white">15 Mine</div>
              <div className="text-sm text-white bg-blue3 flex items-cenetr justify-center">
                x0.00
              </div>
            </div>
          </div>
          <div className="w-[240px] flex flex-row items-center justify-around border-t border-lineBlue py-2">
            <div className="flex flex-row items-center text-sm text-white">
              <img src={images.coin} className="w-4 mr-1" />
              3.32
            </div>
            <div className="flex flex-row items-center text-sm text-green bg-blue3 px-2 py-1">
              <img src={images.coin} className="w-4 mr-1" />
              2.00
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-paymentModalBg justify-center border-t border-r border-l border-lineBlue ml-6">
          <div className="flex flex-row items-center p-3">
            <img src={images.mines1} className="w-14" />
            <div className="flex flex-col ml-2">
              <div className="text-sm text-white">15 Mine</div>
              <div className="text-sm text-white bg-blue3 flex items-cenetr justify-center">
                x0.00
              </div>
            </div>
          </div>
          <div className="w-[240px] flex flex-row items-center justify-around border-t border-lineBlue py-2">
            <div className="flex flex-row items-center text-sm text-white">
              <img src={images.coin} className="w-4 mr-1" />
              3.32
            </div>
            <div className="flex flex-row items-center text-sm text-white bg-blue3 px-2 py-1">
              <img src={images.coin} className="w-4 mr-1" />
              0.00
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-paymentModalBg justify-center border-t border-r border-l border-lineBlue ml-6">
          <div className="flex flex-row items-center p-3">
            <img src={images.mines2} className="w-14" />
            <div className="flex flex-col ml-2">
              <div className="text-sm text-white">15 Mine</div>
              <div className="text-sm text-white bg-blue3 flex items-cenetr justify-center">
                x0.00
              </div>
            </div>
          </div>
          <div className="w-[240px] flex flex-row items-center justify-around border-t border-lineBlue py-2">
            <div className="flex flex-row items-center text-sm text-white">
              <img src={images.coin} className="w-4 mr-1" />
              3.32
            </div>
            <div className="flex flex-row items-center text-sm text-green bg-blue3 px-2 py-1">
              <img src={images.coin} className="w-4 mr-1" />
              2.00
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex md:flex-row bg-paymentModalBg flex-col-reverse items-start justify-between w-full h-full">
        <div className="flex-grow bg-paymentModalBg px-4 pt-6 pb-10">
          <div className="text-white text-sm mb-1">Amount</div>
          <div className="flex flex-row items-center justify-between w-[250px]">
            <div className="flex flex-row items-center">
              <img src={images.coin} className="w-4" />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-white text-xs py-1 pl-1 focus:outline-none  bg-lineBlue bg-opacity-20 border border-lineBlue ml-3 w-16"
              />
            </div>
            <div className="flex flex-row items-center">
              <div className=" bg-lineBlue bg-opacity-20 border border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 cursor-pointer active:opacity-70">
                1/2
              </div>
              <div className=" bg-lineBlue bg-opacity-20 border border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 cursor-pointer active:opacity-70">
                x2
              </div>
              <div className=" bg-lineBlue bg-opacity-20 border border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 cursor-pointer active:opacity-70">
                Min
              </div>{" "}
              <div className=" bg-lineBlue bg-opacity-20 border border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 cursor-pointer active:opacity-70">
                Max
              </div>
            </div>
          </div>
          <div className="text-white text-sm mb-1 mt-10">Mines</div>
          <div className="flex flex-row items-center mt-2 ">
            <input
              value={mines}
              onChange={(e) => setMines(e.target.value)}
              className="bg-lineBlue focus:outline-none bg-opacity-20 border mr-2 border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 pl-1"
            />
            <Slider
              className="bg-transparent"
              min={1}
              max={24}
              value={mines}
              onChange={(newValue) => setMines(newValue)}
              trackStyle={{ backgroundColor: "#0CAAF3" }}
            />
          </div>
        </div>
        <div className="bg-blue3 grid grid-cols-5 gap-3 px-2 lg:px-[5%] xl:px-[10%] py-5">
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
          <img src={images.minesCard} />
        </div>
      </div>
      <div className="text-xs text-white flex flex-row items-center mt-5 mb-10">
        Max Win: <img src={images.coin} className="w-3 ml-2 mr-1" />
        10,0000
      </div>
    </div>
  );
}
