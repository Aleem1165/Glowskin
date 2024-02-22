import React, { useState } from "react";
import "../../App.css";
import images from "../../utilities/images";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import PlinkoGame from "../../component/PlinkoGame";

export default function Plinko() {
  const [socialBalls, setSocialBalls] = useState(false);
  const [amount, setAmount] = useState(0.1);
  const [tab, setTab] = useState("manual");
  const [risk, setRisk] = useState("low");
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-start mt-5p px-5">
      <div className="text-white font-semibold text-lg border-b-4 border-lineBlue pb-1 pr-3">
        <span>CS2 & CS:GO Plinko Wins</span>
      </div>
      <div className="flex flex-row overflow-x-scroll check  w-full items-center mt-5 ">
        <div className=" bg-paymentModalBg">
          <div className="w-[220px] flex flex-row items-center justify-between px-2 py-1 border-t border-r border-l border-lineBlue">
            <img src={images.liveChatUser} className="w-9" />
            <div className="flex flex-row items-center ml-3 ">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              <span className="text-white text-sm ">1.00</span>
            </div>
            <div className="text-sm text-white bg-blue3 flex items-center justify-center px-2 py-1 ml-3">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              x0.00
            </div>
          </div>
        </div>
        <div className=" bg-paymentModalBg ml-5">
          <div className="w-[220px] flex flex-row items-center justify-between px-2 py-1 border-t border-r border-l border-lineBlue">
            <img src={images.liveChatUser} className="w-9" />
            <div className="flex flex-row items-center ml-3 ">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              <span className="text-white text-sm ">1.00</span>
            </div>
            <div className="text-sm text-white bg-blue3 flex items-center justify-center px-2 py-1 ml-3">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              x0.00
            </div>
          </div>
        </div>
        <div className=" bg-paymentModalBg ml-5">
          <div className="w-[220px] flex flex-row items-center justify-between px-2 py-1 border-t border-r border-l border-lineBlue">
            <img src={images.liveChatUser} className="w-9" />
            <div className="flex flex-row items-center ml-3 ">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              <span className="text-white text-sm ">1.00</span>
            </div>
            <div className="text-sm text-white bg-blue3 flex items-center justify-center px-2 py-1 ml-3">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              x0.00
            </div>
          </div>
        </div>
        <div className=" bg-paymentModalBg ml-5">
          <div className="w-[220px] flex flex-row items-center justify-between px-2 py-1 border-t border-r border-l border-lineBlue">
            <img src={images.liveChatUser} className="w-9" />
            <div className="flex flex-row items-center ml-3 ">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              <span className="text-white text-sm ">1.00</span>
            </div>
            <div className="text-sm text-white bg-blue3 flex items-center justify-center px-2 py-1 ml-3">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              x0.00
            </div>
          </div>
        </div>
        <div className=" bg-paymentModalBg ml-5">
          <div className="w-[220px] flex flex-row items-center justify-between px-2 py-1 border-t border-r border-l border-lineBlue">
            <img src={images.liveChatUser} className="w-9" />
            <div className="flex flex-row items-center ml-3 ">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              <span className="text-white text-sm ">1.00</span>
            </div>
            <div className="text-sm text-white bg-blue3 flex items-center justify-center px-2 py-1 ml-3">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              x0.00
            </div>
          </div>
        </div>
        <div className=" bg-paymentModalBg ml-5">
          <div className="w-[220px] flex flex-row items-center justify-between px-2 py-1 border-t border-r border-l border-lineBlue">
            <img src={images.liveChatUser} className="w-9" />
            <div className="flex flex-row items-center ml-3 ">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              <span className="text-white text-sm ">1.00</span>
            </div>
            <div className="text-sm text-white bg-blue3 flex items-center justify-center px-2 py-1 ml-3">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              x0.00
            </div>
          </div>
        </div>
        <div className=" bg-paymentModalBg ml-5">
          <div className="w-[220px] flex flex-row items-center justify-between px-2 py-1 border-t border-r border-l border-lineBlue">
            <img src={images.liveChatUser} className="w-9" />
            <div className="flex flex-row items-center ml-3 ">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              <span className="text-white text-sm ">1.00</span>
            </div>
            <div className="text-sm text-white bg-blue3 flex items-center justify-center px-2 py-1 ml-3">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              x0.00
            </div>
          </div>
        </div>
        <div className=" bg-paymentModalBg ml-5">
          <div className="w-[220px] flex flex-row items-center justify-between px-2 py-1 border-t border-r border-l border-lineBlue">
            <img src={images.liveChatUser} className="w-9" />
            <div className="flex flex-row items-center ml-3 ">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              <span className="text-white text-sm ">1.00</span>
            </div>
            <div className="text-sm text-white bg-blue3 flex items-center justify-center px-2 py-1 ml-3">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              x0.00
            </div>
          </div>
        </div>
        <div className=" bg-paymentModalBg ml-5">
          <div className="w-[220px] flex flex-row items-center justify-between px-2 py-1 border-t border-r border-l border-lineBlue">
            <img src={images.liveChatUser} className="w-9" />
            <div className="flex flex-row items-center ml-3 ">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              <span className="text-white text-sm ">1.00</span>
            </div>
            <div className="text-sm text-white bg-blue3 flex items-center justify-center px-2 py-1 ml-3">
              <img src={images.coin} className="w-4 h-4 mr-1" />
              x0.00
            </div>
          </div>
        </div>
      </div>
      <div className="bg-paymentModalBg w-full md:h-[600px] flex flex-col-reverse md:flex-row items-start mt-10">
        <div className="w-full md:w-[300px] h-[550px] md:h-full">
          <div className="md:w-[300px] w-full flex flex-col px-5 py-10">
            <div className="flex felx-row items-center">
              <img
                onClick={() => setSocialBalls(!socialBalls)}
                src={socialBalls ? images.check : images.unCheck}
                className="w-4 cursor-pointer mr-2"
              />
              <span className="text-white text-xs">Enable Social Balls</span>
            </div>
            <div className="w-full flex flex-row items-center  p-2 mt-4 border-t border-l border-r border-lineBlue shadow-xl gap-2">
              <div
                onClick={() => setTab("manual")}
                className={
                  tab === "manual"
                    ? "w-1/2 bg-blue4 py-2 text-xs text-center text-white cursor-pointer"
                    : "w-1/2 bg- py-2 text-xs text-center text-white cursor-pointer bg-transparent hover:bg-blue2"
                }
              >
                Manual
              </div>
              <div
                onClick={() => setTab("auto")}
                className={
                  tab === "auto"
                    ? "w-1/2 bg-blue4 py-2 text-xs text-center text-white cursor-pointer"
                    : "w-1/2 bg- py-2 text-xs text-center text-white cursor-pointer bg-transparent hover:bg-blue2"
                }
              >
                Auto
              </div>
            </div>
            <div className="text-white text-sm mt-4">Amount</div>
            <div className="flex flex-row items-center justify-between w-full mt-1">
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
            <div className="mt-4">
              <Slider
                className="bg-transparent"
                min={1}
                max={24}
                // value={mines}
                // onChange={(newValue) => setMines(newValue)}
                trackStyle={{ backgroundColor: "#0CAAF3" }}
              />
            </div>
            <div className="text-white text-sm mt-4">Risk</div>
            <div className="w-full  grid md:grid-cols-2 grid-cols-2 gap-2  place-items-center mt-1">
              <div
                onClick={() => setRisk("low")}
                className={
                  risk === "low"
                    ? "bg-darkBlue border-2 border-lineBlue cursor-pointer flex flex-row items-center justify-center py-3 text-white text-xs w-full "
                    : "bg-blue4 cursor-pointer flex flex-row border-2 border-blue4 items-center justify-center py-3 text-lightGray text-xs w-full "
                }
              >
                <img src={images.plinkoBlue} className="w-4 mr-1" />
                Low
              </div>
              <div
                onClick={() => setRisk("medium")}
                className={
                  risk === "medium"
                    ? "bg-pink border-2 border-pink2 cursor-pointer flex flex-row items-center justify-center py-3 text-white text-xs w-full"
                    : "bg-blue4 cursor-pointer flex flex-row border-2 border-blue4 items-center justify-center py-3 text-lightGray text-xs w-full "
                }
              >
                <img src={images.plinkoPink} className="w-4 mr-1" />
                Medium
              </div>
              <div
                onClick={() => setRisk("high")}
                className={
                  risk === "high"
                    ? "bg-gold border-2 border-yellow cursor-pointer flex flex-row items-center justify-center py-3 text-white text-xs w-full "
                    : "bg-blue4 cursor-pointer flex flex-row border-2 border-blue4 items-center justify-center py-3 text-lightGray text-xs w-full  "
                }
              >
                <img src={images.plinkoYellow} className="w-4 mr-1" />
                High
              </div>
              <div
                onClick={() => setRisk("extreme")}
                className={
                  risk === "extreme"
                    ? "bg-red2 border-2 border-red cursor-pointer flex flex-row items-center justify-center py-3 text-white text-xs w-full "
                    : "bg-blue4 cursor-pointer flex border-2 border-blue4 flex-row items-center justify-center py-3 text-lightGray text-xs w-full  "
                }
              >
                <img src={images.plinkoRed} className="w-4 mr-1" />
                Extreme
              </div>
            </div>
            {tab === "auto" && (
              <div className="w-full">
                <div className="text-white text-sm mt-4 ">Bets</div>
                <input
                  type="number"
                  className="w-full mt-1 bg-inputBG rounded-md focus:outline-none text-sm text-white py-2 pl-2"
                />
              </div>
            )}
            <div className="flex items-center justify-center mt-10">
              <div className="bg-yellow w-1/2 h-12 flex items-center justify-center text-md font-semibold cursor-pointer active:opacity-80">
                {tab === "manual" ? "Bet" : "Start"}
              </div>
            </div>
          </div>
        </div>
        {/* <div className='w-full'> */}
        <PlinkoGame />
        {/* </div> */}
      </div>
    </div>
  );
}
