import React, { useState } from "react";
import images from "../../utilities/images";
import "../../App.css";

export default function LiveDrops() {
  const [tab, setTab] = useState("top");
  const [top, setTop] = useState([
    { name: "Budget Baller", percent: "90", image: images.liveDropImg },
    { name: "Budget Baller2", percent: "80", image: images.liveDropImg },
    { name: "Budget Baller3", percent: "70", image: images.liveDropImg },
    { name: "Budget Baller4", percent: "60", image: images.liveDropImg },
    { name: "Budget Baller5", percent: "65", image: images.liveDropImg },
    { name: "Budget Baller6", percent: "50", image: images.liveDropImg },
    { name: "Budget Baller", percent: "90", image: images.liveDropImg },
    { name: "Budget Baller2", percent: "80", image: images.liveDropImg },
    { name: "Budget Baller3", percent: "70", image: images.liveDropImg },
    { name: "Budget Baller4", percent: "60", image: images.liveDropImg },
    { name: "Budget Baller5", percent: "65", image: images.liveDropImg },
    { name: "Budget Baller6", percent: "50", image: images.liveDropImg },
  ]);
  const [all, setAll] = useState([
    { name: "Budget Baller", percent: "90", image: images.liveDropImg2 },
    { name: "Budget Baller2", percent: "80", image: images.liveDropImg2 },
    { name: "Budget Baller3", percent: "70", image: images.liveDropImg2 },
    { name: "Budget Baller4", percent: "60", image: images.liveDropImg2 },
    { name: "Budget Baller5", percent: "65", image: images.liveDropImg2 },
    { name: "Budget Baller6", percent: "50", image: images.liveDropImg2 },
    { name: "Budget Baller", percent: "90", image: images.liveDropImg2 },
    { name: "Budget Baller2", percent: "80", image: images.liveDropImg2 },
    { name: "Budget Baller3", percent: "70", image: images.liveDropImg2 },
    { name: "Budget Baller4", percent: "60", image: images.liveDropImg2 },
    { name: "Budget Baller5", percent: "65", image: images.liveDropImg2 },
    { name: "Budget Baller6", percent: "50", image: images.liveDropImg2 },
  ]);

  const handleTab = (name) => {
    setTab(name);
  };

  return (
    <div className="w-[260px] pl-3 h-[100vh] mt-5">
      <div className="flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center justify-center">
          <div className="w-2 h-2 bg-yellow rounded-full"></div>
          <div className="text-white ml-1">Live Drops</div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={
              tab === "top"
                ? "cursor-pointer text-white"
                : "cursor-pointer text-white opacity-60"
            }
            onClick={() => handleTab("top")}
          >
            TOP
          </div>
          <div
            className={
              tab === "all"
                ? "ml-3 cursor-pointer text-white"
                : "ml-3 cursor-pointer text-white opacity-60"
            }
            onClick={() => handleTab("all")}
          >
            ALL
          </div>
        </div>
      </div>
      {tab === "top" ? (
        <div className="mt-2 h-[95vh] check overflow-y-scroll">
          {top &&
            top.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-cover  flex items-center justify-between p-2"
                  style={{
                    backgroundImage: `url(${images.liveDropBG})`,
                  }}
                >
                  <div className="flex flex-col text-xs text-white">
                    <span className="text-yellow">{item.name}</span>
                    {`${item.percent}.00`}
                  </div>
                  <img src={item.image} className="w-16" />
                </div>
              );
            })}
        </div>
      ) : (
        <div className="mt-2 h-[95vh] check overflow-y-scroll">
          {all &&
            all.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-cover flex items-center justify-between p-2"
                  style={{
                    backgroundImage: `url(${images.liveDropBG})`,
                  }}
                >
                  <div className="flex flex-col text-xs">
                    <span className="text-yellow">{item.name}</span>
                    {`${item.percent}.00`}
                  </div>
                  <img src={item.image} className="w-20" />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

{
  /* <div
  className="bg-cover flex items-center justify-between p-3"
  style={{
    backgroundImage: `url(${images.liveDropBG})`,
  }}
>
  <div className="flex flex-col text-xs">
    <span className="text-yellow">Budget Baller</span>
    90.00%
  </div>
  <img src={images.liveDropImg} className="w-16" />
</div>; */
}
