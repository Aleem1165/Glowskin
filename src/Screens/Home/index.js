import React from "react";
import HomeImage from "../../component/HomeImage";
import LiveDrops from "../../component/LiveDrops";
import LiveChat from "../../component/LiveChat";
import CheckItOut from "../../component/CheckItOut";
import HomeLastCard from "../../component/HomeLastCard";
import Game from "../Game";
import images from "../../utilities/images";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-5 sm:pt-[350px]">
      <HomeImage />
      <div className="flex items-center justify-center">
        <img src={images.gameYellow} className="w-8 mr-2" />
        <span className="text-2xl text-white font-semibold">
          Glow Skin Originals
        </span>
      </div>
      <Game />
      <CheckItOut />
      <HomeLastCard />
    </div>
  );
}
