import React, { useEffect } from "react";
import HomeImage from "../../component/HomeImage";
import LiveDrops from "../../component/LiveDrops";
import LiveChat from "../../component/LiveChat";
import CheckItOut from "../../component/CheckItOut";
import HomeLastCard from "../../component/HomeLastCard";
import Game from "../Game";
import images from "../../utilities/images";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../Store/AuthTokenSlice";

export default function Home() {
  return (
    <div className="mx-auto px-5 sm:pt-[350px]">
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
