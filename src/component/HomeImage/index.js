import React, { useState } from "react";
import images from "../../utilities/images";
import videos from "../../utilities/videos";
import { useModal, useSignIn } from "../../Screens/Layout";
import AutoVideoPlayer from "../AutoVideoPlayer";
import Progress from "../ProgresBar";
import { useDispatch } from "react-redux";

const HomeImage = () => {
  const dispatch = useDispatch();

  const { isModalOpen, setIsModalOpen } = useModal();
  const { signin, setSignin } = useSignIn();
  const [progress, setProgress] = useState(40);

  return (
    <div className="mb-10 flex w-full flex-col lg:flex-row justify-center gap-4 mt-16 mx-auto ">
      <div className="w-full bg-darkBlue2 border-t border-l px-[10%] lg:px-4 border-r border-lineBlue h-[160px] lg:w-1/2 relative flex flex-col items-center sm:items-start justify-center">
        {signin ? (
          <div className="flex flex-col items-end ">
            <div className=" text-white font-bold">
              Welcome Back,
              <span className="text-yellow font-bold text-lg"> Anonymous</span>
            </div>
            <Progress progress={progress} />
          </div>
        ) : (
          <div className="flex flex-col items-center sm:items-start ">
            <div className="text-textDissable text-sm mb-4 text-center sm:text-start">
              Sign in with
              <span className="text-base font-bold text-lineBlue">
                {" "}
                Google, Email
              </span>{" "}
              to
              <span className="block">access.logo</span>
            </div>
            <div
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="bg-yellow text-black text-sm pl-5 pr-5 pt-2 pb-2 font-medium cursor-pointer active:opacity-50"
            >
              Sign In
            </div>
          </div>
        )}

        <div className="h-[200px] right-[-5px] bottom-0  absolute hidden sm:block">
          <AutoVideoPlayer src={videos.agent} />
        </div>
      </div>
      <div className="w-full bg-darkBlue2 border-t border-l px-[10%] lg:px-4 mt-5 lg:mt-0 border-r border-lineBlue h-[160px] lg:w-1/2 relative flex flex-col items-center sm:items-start justify-center ">
        {signin ? (
          <div className="flex flex-col items-center sm:items-start text-center">
            <div className="text-headerBorder font-bold text-lg">
              Free Rewards
            </div>
            <div className="text-white text-sm">
              Explore all rewards Glowskins.gg has to offer.
            </div>
            <div className="text-white text-sm w-full">
              Claim{" "}
              <span className="text-headerBorder font-semibold">
                Daily Cases
              </span>{" "}
              & earn{" "}
              <span className="text-headerBorder font-semibold">Rakeback</span>
              on all your bets.
            </div>
            <div className="bg-yellow text-black text-sm pl-7 pr-7 pt-1 pb-1 font-medium cursor-pointer active:opacity-50 mt-3">
              View Daily Rewards
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-headerBorder font-bold text-sm">
              Free Rewards
            </div>
            <div className="text-white text-xs">
              Explore all rewards Glowskins has to offer.
            </div>
            <div className="text-white text-xs">
              Claim{" "}
              <span className="text-headerBorder font-semibold">
                Daily Cases
              </span>{" "}
              & earn{" "}
              <span className="text-headerBorder font-semibold">Rakeback</span>
              on all your bets.
            </div>
            <div className="bg-yellow text-black text-xs pl-7 pr-7 pt-1 pb-1 font-medium cursor-pointer active:opacity-50 mt-3">
              View Daily Rewards
            </div>
          </div>
        )}
        <img
          src={images.dashboardImg2}
          className="h-[185px] bottom-0 right-3 absolute hidden sm:block"
        />
      </div>
    </div>
  );
};

export default HomeImage;
