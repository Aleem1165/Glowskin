import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import images from "../../utilities/images";

export default function Progress({ progress }) {
  return (
    <div className="flex flex-row items-center  w-full mt-3">
      <img src={images.progress} className=" h-8 w-8" />
      <div className="flex flex-col  ml-4 justify-between h-full w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="text-white text-xs">{`Current XP progress`}</div>
          <div className="text-white text-xs">{`${progress}%.00`}</div>
        </div>
        <ProgressBar
          completed={progress}
          className="w-full"
          height={"12px"}
          isLabelVisible={false}
          bgColor={"#0D97DA"}
          borderRadius={0}
          barContainerClassName="bg-progressBlue"
        />
      </div>
    </div>
  );
}
