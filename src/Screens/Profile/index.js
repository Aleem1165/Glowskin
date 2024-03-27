import React, { useState } from "react";
import images from "../../utilities/images";
import ProgressBar from "@ramonak/react-progress-bar";
import SettingsModal from "../../component/SettingsModal";
import "../../App.css";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div
        className="mt-5p p-3 w-90 mx-auto  px-10"
        style={{
          backgroundImage: `url(${images.profileBg})`,
        }}
      >
        <div className="flex flex-row items-center mt-2 ">
          <img src={images.profile} className="h-5 w-4" />
          <div className="text-white ml-3 font-semibold"> Profile ━━━</div>
          <div className="text-white ml-3 font-semibold">
            {" "}
            Account ID: GL-1254892
          </div>
        </div>
        <div className="mt-5p bg-blue3 p-3 w-80p pb-6 mx-auto relative">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 ">
            <img src={images.userProfile} className="h-16 w-50" />
          </div>
          <div className="text-white text-center mt-5 font-semibold">
            {" "}
            Anonymous7311
          </div>
          <div className="text-lightGray text-center text-lightGray">
            {" "}
            Member since January 19, 2024{" "}
          </div>
          <div className="flex flex-row items-center justify-center mt-2">
            <div className="text-xs text-blue3 bg-white w-12p p-2 cursor-pointer p-1 font-semibold">
              Trade URL
            </div>
            <div
              onClick={() => setIsModalOpen(true)}
              className="text-xs text-blue3 bg-white w-12p p-2 cursor-pointer p-1 ml-2 font-semibold"
            >
              Settings
            </div>
            <div className="text-xs text-blue3 bg-white w-12p p-2 cursor-pointer p-1 ml-2 font-semibold">
              Balance History
            </div>
            <div className="text-xs text-blue3 bg-white w-12p p-2 cursor-pointer p-1 ml-2 font-semibold">
              Game History
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-5">
            <div>
              <div className="text-yellow font-semibold mr-3">DEPOSITED</div>
              <div className="flex flex-row mt-1">
                <img src={images.coin} className="w-5 h-5" />
                <div className="text-white text-sm ml-3">0.00</div>
              </div>
            </div>
            <img src={images.Line} className="ml-2 h-10" />

            <div>
              <div className="text-yellow font-semibold ml-5">WITHDRAWN</div>
              <div className="flex flex-row mt-1 ml-5">
                <img src={images.coin} className="w-5 h-5" />
                <div className="text-white text-sm ml-3">0.00</div>
              </div>
            </div>
            <img src={images.Line} className="ml-2 h-10" />

            <div>
              <div className="text-yellow font-semibold ml-5">WAGERED</div>
              <div className="flex flex-row mt-1 ml-5">
                <img src={images.coin} className="w-5 h-5" />
                <div className="text-white text-sm ml-3">0.00</div>
              </div>
            </div>
            <img src={images.Line} className="ml-2 h-10" />

            <div>
              <div className="text-yellow font-semibold ml-5">PROFIT</div>
              <div className="flex flex-row mt-1 ml-5">
                <img src={images.coin} className="w-5 h-5" />
                <div className="text-white text-sm ml-3">0.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center mt-5 ">
          <img src={images.target} className="h-5 w-5" />
          <div className="text-white ml-3 font-semibold"> Mission Tree</div>
          <div className="text-disabledGray ml-3 font-semibold">
            {" "}
            ━━━ Complete missions and earn Gem Rewards
          </div>
        </div>

 
        <div className=" flex flex-row rounded-md overflow-x-scroll check  w-full items-center mt-5">
          <div>
            <div className="text-white font-semibold mb-2">Mission 1</div>
            <div className="bg-blue4 px-3 py-2 border-2 border-headerBorder">
              <div className="bg-blue4 cursor-pointer border border-solid border-headerBorder text-white h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-white rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-white">0.10</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-white  mt-3 font-semibold h-14 flex items-center text-center">
                  Deposit $5 or more with Zen
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={10}
                    height="10px"
                    bgColor="#0CAAF3"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-white font-semibold">
                    In Progess
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 2
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">0.50</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center  h-14 flex items-center ">
                  Win 10 gems or more from a SINGLE upgrade
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 3
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">0.50</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Win 10 gems or more from SINGLE Mines bet
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 4
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">0.50</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Win 10 gems or more from a SINGLE battle
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 5
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">0.50</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Win 10 gems or more from SINGLE Roulette bet
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 6
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">0.50</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Reach level 5
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 6
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">0.50</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Reach level 5
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 7
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">0.50</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Join the Glowskin Discord
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 8
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">1.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Win 10 gems or more from a SINGLE Jackpot round
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 9
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">1.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Claim a referral code for a 5% deposit bonus
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 10
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">3.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Deposit a skin worth 10 or more gems with P2P
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 11
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">5.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Reach level 10
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 12
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">5.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Win 50 coins from a solo case opening in a SINGLE CASE
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 13
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">5.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Cashout 50 coins in A SINGLE skin trade
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 14
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">5.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Win 50 gems or more from a SINGLE upgrade
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 15
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">5.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Claim 0.50 Coins from affiliate earnings
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 16
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">7.50</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Win 6 roulette bets IN A ROW with a 1 coin minimum bet
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 17
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">5.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Hit a 1% or lower upgrade with a 1 coin minimum bet
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 18
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">10.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Reach level 15
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 19
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">10.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Win 100 Coins from A SINGLE Terminal Mode Case Battle
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 20
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">5.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Check a Battle on the Fairness Page
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.lock}
            className="cursor-pointer h-12 w-12 ml-5 mr-5 mt-5"
          />

          <div>
            <div className="text-disabledGray2 font-semibold mb-2 ">
              Mission 21
            </div>
            <div className="bg-blue4 px-3 py-2 border-2 border-disabledGray2">
              <div className="bg-blue4 cursor-pointer border border-solid border-disabledGray2 text-disabledGray2 h-5 w-12 text-center text-xs rounded-t-sm rounded-b-sm active:opacity-80">
                Skip
              </div>
              <div className="border-4 border-disabledGray2 rounded-full w-[100px] mt-4 h-[100px] mx-auto flex flex-col items-center justify-center">
                <img src={images.coin} className="w-5 h-5 " />
                <div className="text-disabledGray2">50.00</div>
              </div>
              <div className="w-[152px]">
                <div className="mt-2 text-xs text-disabledGray2 text-center font-semibold h-14 flex items-center ">
                  Reach level 20
                </div>
                <div className="mt-2w-full mt-2">
                  <ProgressBar
                    completed={100}
                    height="10px"
                    bgColor="#757575"
                    isLabelVisible={false}
                  />
                  <div className="mt-2 text-xs text-disabledGray2 font-semibold">
                    Not Unlocked
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center mt-5 ">
          <img src={images.briefcase} className="h-5 w-5" />
          <div className="text-white ml-3 font-semibold">Your cases</div>
          <div className="text-disabledGray ml-3 font-semibold">
            {" "}
            ━━━ Earn commission with your custom cases
          </div>
        </div>
        <div className="flex items-center pb-20">
          <div>
            <div className="bg-blue4  ml-5 mt-5 rounded-t-md rounded-b-lg">
              <div className="text-white font-semibold mt-3 ">
                Available Earnings
              </div>
              <div className="flex flex-row mt-1 ">
                <img src={images.coin} className="w-5 h-5" />
                <div className="text-white text-sm ml-3 pb-3">0.00</div>
              </div>
            </div>
            <div className="bg-yellow p-3  mt-3 cursor-pointer font-semibold text-center">
              Claim Earnings
            </div>
            <div className="bg-yellow p-3  mt-3 cursor-pointer font-semibold text-center">
              Your Case Overview
            </div>
          </div>
          <div className="mx-auto">
            <div className="text-white font-semibold">
              You don’t have any cases yet.
            </div>
            <div className="bg-yellow p-3 mt-3 cursor-pointer font-semibold text-center flex items-center">
              <img src={images.info} className="h-5 w-5" />
              <div className="mx-auto">Create Custom Case</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
      <SettingsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
