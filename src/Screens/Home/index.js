import React from "react";
import HomeImage from "../../component/HomeImage";
import LiveDrops from "../../component/LiveDrops";
import LiveChat from "../../component/LiveChat";
import CheckItOut from "../../component/CheckItOut";
import HomeLastCard from "../../component/HomeLastCard";
import Game from "../Game";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-5 pb-40">
      <HomeImage />
      <Game />
      <CheckItOut />
      <HomeLastCard />
    </div>
  );
}
