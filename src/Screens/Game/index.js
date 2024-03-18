import React, { useState } from "react";
import images from "../../utilities/images";
import VideoPlayer from "../../component/VideoPlayer";
import videos from "../../utilities/videos";

export default function Game() {
  return (
    <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-3 mt-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-[29%] relative">
          <VideoPlayer navigate={"/"} src={videos.caseee} name={"Cases"} />
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <VideoPlayer
                navigate={"/"}
                src={videos.battle}
                name={"Battles HOT"}
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[29%] ">
          <VideoPlayer navigate={"/"} src={videos.roulette} name={"Roulette"} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-[25%]">
          <VideoPlayer
            navigate={"/plinko"}
            src={videos.plinko}
            name={"Plinko"}
          />
        </div>
        <div className="w-full sm:w-[25%]">
          <VideoPlayer navigate={"/mines"} src={videos.mines} name={"Mines"} />
        </div>
        <div className="w-full sm:w-[25%]">
          <VideoPlayer navigate={"/"} src={videos.upgrade} name={"Upgrader"} />
        </div>
        <div className="w-full sm:w-[25%]">
          <VideoPlayer
            navigate={"/jackpot"}
            src={videos.jackpot}
            name={"Jackpot"}
          />
        </div>
      </div>
    </div>
  );
}
