import React from "react";
import images from "../../utilities/images";
export default function Profile() {
  return (
    <div
      className="mt-5p p-3 w-90p mx-auto "
      style={{
        backgroundImage: `url(${images.profileBg})`,
      }}
    >
      <div className="flex flex-row items-center mt-2 ml-5">
        <img src={images.profile} className="h-5 w-4" />
        <div className="text-white ml-3 font-600"> Profile ━━━</div>
        <div className="text-white ml-3 font-600"> Account ID: GL-1254892</div>
      </div>
      <div className="mt-5p bg-blue3 p-3 w-80p pb-6 mx-auto relative">
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 ">
          <img src={images.userProfile} className="h-16 w-50" />
        </div>
        <div className="text-white text-center mt-5 font-600">
          {" "}
          Anonymous7311
        </div>
        <div className="text-lightGray text-center text-lightGray">
          {" "}
          Member since January 19, 2024{" "}
        </div>
        <div className="flex flex-row items-center justify-center mt-2">
          <div className="text-xs text-blue3 bg-white w-12p p-2 cursor-pointer p-1 font-600">
            Trade URL
          </div>
          <div className="text-xs text-blue3 bg-white w-12p p-2 cursor-pointer p-1 ml-2 font-600">
            Settings
          </div>
          <div className="text-xs text-blue3 bg-white w-12p p-2 cursor-pointer p-1 ml-2 font-600">
            Balance History
          </div>
          <div className="text-xs text-blue3 bg-white w-12p p-2 cursor-pointer p-1 ml-2 font-600">
            Game History
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-5">
          <div>
            <div className="text-yellow font-600 mr-3">DEPOSITED</div>
            <div className="flex flex-row mt-1">
              <img src={images.coin} className="w-5 h-5" />
              <div className="text-white text-sm ml-3">0.00</div>
            </div>
          </div>
          <img src={images.Line} className="ml-2 h-10" />

          <div>
            <div className="text-yellow font-600 ml-5">WITHDRAWN</div>
            <div className="flex flex-row mt-1 ml-5">
              <img src={images.coin} className="w-5 h-5" />
              <div className="text-white text-sm ml-3">0.00</div>
            </div>
          </div>
          <img src={images.Line} className="ml-2 h-10" />

          <div>
            <div className="text-yellow font-600 ml-5">WAGERED</div>
            <div className="flex flex-row mt-1 ml-5">
              <img src={images.coin} className="w-5 h-5" />
              <div className="text-white text-sm ml-3">0.00</div>
            </div>
          </div>
          <img src={images.Line} className="ml-2 h-10" />

          <div>
            <div className="text-yellow font-600 ml-5">PROFIT</div>
            <div className="flex flex-row mt-1 ml-5">
              <img src={images.coin} className="w-5 h-5" />
              <div className="text-white text-sm ml-3">0.00</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <img src={images.target} className="ml-2 h-10" />
        <div className="text-white text-sm ml-3">Mission Tree</div>

      </div> */}

      <div className="flex flex-row items-center mt-5 ml-5">
        <img src={images.target} className="h-5 w-5" />
        <div className="text-white ml-3 font-600"> Mission Tree</div>
        <div className="text-disabledGray ml-3 font-600">
          {" "}
          ━━━ Complete missions and earn Gem Rewards
        </div>
      </div>

      {/* Yaha card ayega */}
      {/* <div className="text-white mt-5 ml-5 font-600">Mission 1</div>
      <div className="border border-solid border-headerBorder w-30">
        <img src={images.circle} className="h-20 w-50" />
      </div> */}

      <div className="flex flex-row items-center mt-5 ml-5">
        <img src={images.briefcase} className="h-5 w-5" />
        <div className="text-white ml-3 font-600">Your cases</div>
        <div className="text-disabledGray ml-3 font-600">
          {" "}
          ━━━ Earn commission with your custom cases
        </div>
      </div>
      <div className="bg-blue4 w-18p ml-5 mt-5 rounded-t-md rounded-b-lg">
        <div className="text-white font-600 mt-3 ml-5">Available Earnings</div>
        <div className="flex flex-row mt-1 ml-5">
          <img src={images.coin} className="w-5 h-5" />
          <div className="text-white text-sm ml-3 pb-3">0.00</div>
        </div>
      </div>
    </div>
  );
}
