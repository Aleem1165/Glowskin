import React, { useState } from "react";
import images from "../../utilities/images";
// import Progress from "../ProgressBar";
// import VideoPlayer from "../VideoPlayer";
import videos from "../../utilities/videos";
// import AutoVideoPlayer from "../AutoVideoPlayer";
import { useModal, useSignIn } from "../../Screens/Layout";

const HomeImage = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { signin, setSignin } = useSignIn();
  // const [signin, setSignin] = useState(false);

  return (
    <div className="mb-10 flex w-full flex-col lg:flex-row justify-center gap-4 mt-8 max-w-screen-xl mx-auto ">
      <div
        className="w-full lg:w-1/2 bg-cover bg-contain bg-no-repeat relative flex flex-col items-center lg:items-start justify-center"
        style={{
          backgroundImage: `url(${images.dashboardImg})`,
        }}
      >
        {signin ? (
          <div className="flex flex-col items-end lg:mr-20p">
            <div className=" text-white font-bold">
              Welcome Back,
              <span className="text-yellow font-bold text-lg"> Jazzy 007</span>
            </div>
            {/* <Progress progress={progress} /> */}
          </div>
        ) : (
          <div className="flex flex-col items-start lg:ml-5p">
            <div className="text-textDissable text-sm mb-4">
              Sign in with
              <span className="text-base font-bold text-lineBlue">
                {" "}
                Google, Email
              </span>{" "}
              to
              <span className="lg:block">access.logo</span>
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
        {/* <div
          className=" bottom-0 absolute hidden lg:block"
          style={{ right: "30px" }}
        >
          <AutoVideoPlayer src={videos.agent} />
        </div> */}
        <img
          src={images.dashboardImg1}
          className="h-[185px] right-[-5px] bottom-0  absolute hidden lg:block"
        />
      </div>
      <div
        className="w-full lg:w-1/2 bg-contain bg-no-repeat h-40 bg-cover relative flex flex-col items-center lg:items-start justify-center"
        // className=" w-full lg:w-49 h-48 bg-cover bg-center relative flex flex-col items-center lg:items-end justify-center rounded-lg"
        style={{
          backgroundImage: `url(${images.dashboardImg})`,
        }}
      >
        {signin ? (
          <div className="flex flex-col items-start lg:ml-5p">
            <div className="text-headerBorder font-bold text-lg">
              Free Rewards
            </div>
            <div className="text-white text-sm">
              Explore all rewards Glowskins.gg has to offer.
            </div>
            <div className="text-white text-sm w-80p">
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
          <div className="flex flex-col items-start lg:ml-5p w-1/2">
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
          className="h-[185px] bottom-0 right-3 absolute hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HomeImage;
