import React, { useState } from "react";
import images from "../../utilities/images";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollToTopLink from "../../component/ScrollToTopLink";

export default function Unboxing() {
  // const [choosetabs, setchoosetab] = useState("");

  const Cards = [
    {
      image: images.liveDropImg,
      image2: images.liveDropImg2,
      image3: images.dashboardImg2,
      description: "Presidential",
      currency: images.coin,
      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      image2: images.liveDropImg2,
      image3: images.dashboardImg2,

      description: "Presidential",
      currency: images.coin,
      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image3: images.dashboardImg2,

      currency: images.coin,
      cost: "3,271.62",
      image2: images.liveDropImg2,

      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image3: images.dashboardImg2,

      currency: images.coin,
      cost: "3,271.62",
      image2: images.liveDropImg2,

      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image3: images.dashboardImg2,

      currency: images.coin,
      image2: images.liveDropImg2,

      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image3: images.dashboardImg2,

      currency: images.coin,
      cost: "3,271.62",
      image2: images.liveDropImg2,

      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image3: images.dashboardImg2,

      currency: images.coin,
      cost: "3,271.62",
      image2: images.liveDropImg2,

      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image3: images.dashboardImg2,

      currency: images.coin,
      cost: "3,271.62",
      image2: images.liveDropImg2,

      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image3: images.dashboardImg2,

      currency: images.coin,
      cost: "3,271.62",
      image2: images.liveDropImg2,

      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image3: images.dashboardImg2,

      currency: images.coin,
      image2: images.liveDropImg2,

      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      currency: images.coin,
      image3: images.dashboardImg2,

      cost: "3,271.62",
      image2: images.liveDropImg2,

      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      currency: images.coin,
      image3: images.dashboardImg2,

      cost: "3,271.62",
      heart: images.heart,
      image2: images.liveDropImg2,

      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      currency: images.coin,
      image3: images.dashboardImg2,

      image2: images.liveDropImg2,

      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      currency: images.coin,
      image3: images.dashboardImg2,

      image2: images.liveDropImg2,

      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image2: images.liveDropImg2,
      image3: images.dashboardImg2,

      currency: images.coin,
      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      currency: images.coin,
      image3: images.dashboardImg2,

      image2: images.liveDropImg2,

      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      image2: images.liveDropImg2,
      image3: images.dashboardImg2,

      description: "Presidential",
      currency: images.coin,
      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
    {
      image: images.liveDropImg,
      description: "Presidential",
      image2: images.liveDropImg2,
      image3: images.dashboardImg2,

      currency: images.coin,
      cost: "3,271.62",
      heart: images.heart,
      timesopened: "Opened 592 times",
    },
  ];

  const numbers = [
    {
      number: 1,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
    {
      number: 4,
    },
    {
      number: 5,
    },
    {
      number: 6,
    },
    {
      number: 7,
    },
    {
      number: 8,
    },
    {
      number: 9,
    },
    {
      number: 10,
    },
    {
      number: 11,
    },
  ];

  const Location = useLocation();
  const navigate = useNavigate();

  const activePath = Location.pathname;

  // const handleTabName = (tab) => {
  //   setchoosetab(tab);
  //   navigate(`/cases/${tab}`);
  // };

  // const TabnameHandler = (tab) => {
  //   setchoosetab(tab);
  //   navigate(`/cases/${tab}`);
  // };

  return (
    <div className="max-w-screen-xl pb-20  mx-auto flex  flex-col items-start mt-5p px-5">
      <div className="text-white font-bold w-60  text-xl border-b-4 border-lineBlue">
        <div className="pb-2">CS:GO & CS2 Unboxing</div>
      </div>
      <div className="flex grid grid-cols-1 lg:grid-cols-2  items-center w-full justify-between ">
        <div className=" pt-2 text-white items-center grid gap-2 grid-cols-2 md:grid-cols-2 lg:flex bg-">
          <ScrollToTopLink
            to={"/cases/Classic"}
            className={`flex bg-headercolor lg:bg-transparent border-lineBlue p-2 lg:p-0 gap-2   cursor-pointer border lg:border-0
          ${activePath == "/cases/Classic" ? `font-semibold` : `opacity-40`}`}
          >
            <img src={images.coingold} alt="" className="w-6 " />
            Classic
          </ScrollToTopLink>
          <ScrollToTopLink
            to={"/cases/Trending"}
            className={`flex bg-headercolor lg:bg-transparent  border-lineBlue p-2 lg:p-0 gap-2 font-semibold cursor-pointer border md:border lg:border-0 active:opacity-50
            ${activePath == "/cases/Trending" ? `font-semibold` : `opacity-40`}`}
          >
            <img src={images.arrowgreen} alt="" className="w-6 " />
            Trending
          </ScrollToTopLink>
          <ScrollToTopLink
            to={"/cases/New"}
            className={`flex bg-headercolor lg:bg-transparent  border-lineBlue p-2 lg:p-0 gap-2 font-semibold cursor-pointer border md:border lg:border-0 active:opacity-50
            ${activePath == "/cases/New" ? `font-semibold` : `opacity-40`}`}
          >
            <img src={images.addblue} alt="" className="w-6 " />
            New
          </ScrollToTopLink>
          <ScrollToTopLink
            to={"/cases/Community"}
            className={`flex bg-headercolor lg:bg-transparent border-lineBlue p-2 lg:p-0 gap-2 font-semibold cursor-pointer border md:border lg:border-0 active:opacity-50
            ${activePath == "/cases/Community" ? `font-semibold` : `opacity-40`}
            `}
          >
            <img src={images.addmen} alt="" className="w-6 " />
            Community
          </ScrollToTopLink>
        </div>
        <div className="pt-2">
          <input
            type=""
            className=" focus:outline-none text-white border border-lineBlue w-full pl-2 p-2 bg-btnDark"
            placeholder="Search for cases..."
          />
        </div>
      </div>
      <div className="flex items-center mt-4 bg-btnDark bg-opacity-80 w-full p-2">
        <img src={images.Newww} className="h-28" />
        <div className="flex flex-col">
          <div className="text-yellow lg:text-xl text-base font-bold">
            Case Creator & Community Cases are now AVAILABLE on Clash.gg
          </div>
          <div className="text-white font-bold text-xs lg:text-base">
            You can now create cases and items and odds of your choice. Earn
            0.5% and 3% of your cases price each time a user unboxes it.
          </div>
        </div>
      </div>
      {activePath === "Community" ? (
        <div className="mt-2 grid grid-cols-1 gap-2 lg:flex  w-full justify-between items-center">
          <div className="flex  gap-2 ">
            <div className=" bg-btnDark text-white w-full lg:w-52 p-3 text-sm cursor-pointer active:opacity-50">
              All
            </div>
            <div className=" bg-btnDark text-white w-full  lg:w-52 p-3 text-sm text-nowrap cursor-pointer active:opacity-50">
              Popularity Descending
            </div>
          </div>
          <div className="flex w-full justify-end items-center gap-2">
            <div className="gap-2 bg-yellow text-sm w-52  p-3 font-bold flex items-center cursor-pointer active:opacity-50 ">
              <img src={images.infoicon} className="h-5" /> Popularity
              Descending{" "}
            </div>
            <div className="bg-btnGray2 text-textgray w-52 font-bold p-3 cursor-pointer active:opacity-50">
              View Your Cases
            </div>
          </div>
        </div>
      ) : null}
      {/* <div className="mt-2 flex w-full justify-between items-center">
        <div className="flex gap-2 ">
          <div className=" bg-btnDark text-white w-32 p-3 text-sm cursor-pointer active:opacity-50">
            All
          </div>
          <div className=" bg-btnDark text-white w-40 p-3 text-sm text-nowrap cursor-pointer active:opacity-50">
            Popularity Descending
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="gap-2 bg-yellow text-sm  p-3 font-bold flex items-center cursor-pointer active:opacity-50 ">
            <img src={images.infoicon} className="h-5" /> Popularity Descending{" "}
          </div>
          <div className="bg-btnGray2 text-textgray font-bold p-3 cursor-pointer active:opacity-50">
            View Your Cases
          </div>
        </div>
      </div> */}

      {activePath === "/cases/Classic" && (
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="pt-5 relative flex flex-col items-center"
            >
              <div className="text-white pb-2  text-xl relative w-80p sm:w-full   bg-cardcolor bg-opacity-80 pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
                <img
                  src={item.image}
                  className="pb-2 cursor-pointer active:opacity-50"
                />
                <div className="pb-2">{item.description}</div>
                <div className="absolute top-[93%]  ">
                  <div className="bg-cardcolor cursor-pointer active:opacity-50   text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue ">
                    <img src={item.currency} className="h-4" />
                    Open {item.cost}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activePath === "/cases/Trending" && (
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="pt-5 relative flex flex-col items-center"
            >
              <div className="text-white pb-2  text-xl relative w-80p sm:w-full   bg-cardcolor bg-opacity-80 pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
                <img
                  src={item.image2}
                  className="pb-2 w-80 cursor-pointer active:opacity-50"
                />
                <div className="pb-2">{item.description}</div>
                <div className="absolute top-[93%]  ">
                  <div className="bg-cardcolor cursor-pointer active:opacity-50   text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue ">
                    <img src={item.currency} className="h-4" />
                    Open {item.cost}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activePath === "/cases/New" && (
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="pt-5 relative flex flex-col items-center"
            >
              <div className="text-white pb-2  text-xl relative w-80p sm:w-full   bg-cardcolor bg-opacity-80 pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
                <img
                  src={item.image3}
                  className="pb-2 w-40 cursor-pointer active:opacity-50"
                />
                <div className="pb-2">{item.description}</div>
                <div className="absolute top-[93%]  ">
                  <div className="bg-cardcolor cursor-pointer active:opacity-50   text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue ">
                    <img src={item.currency} className="h-4" />
                    Open {item.cost}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activePath === "/cases/Community" && (
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="pt-5 relative flex flex-col items-center"
            >
              <div className="text-white pb-2  text-xl relative w-80p sm:w-full   bg-cardcolor bg-opacity-80 pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
                <img
                  src={item.image}
                  className="pb-2 cursor-pointer active:opacity-50"
                />
                <div className="pb-2">{item.description}</div>
                <div className="absolute top-[93%]  ">
                  <div className="bg-cardcolor cursor-pointer active:opacity-50   text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue ">
                    <img src={item.currency} className="h-4" />
                    Open {item.cost}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* {choosetabs === "Classic" ? (
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="pt-5 relative flex flex-col items-center"
            >
              <div className="text-white pb-2  text-xl relative w-80p sm:w-full   bg-cardcolor bg-opacity-80 pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
                <img
                  src={item.image}
                  className="pb-2 cursor-pointer active:opacity-50"
                />
                <div className="pb-2">{item.description}</div>
                <div className="absolute top-[93%]  ">
                  <div className="bg-cardcolor cursor-pointer active:opacity-50   text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue ">
                    <img src={item.currency} className="h-4" />
                    Open {item.cost}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : choosetabs === "Community" ? (
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="pt-5 relative flex flex-col items-center"
            >
              <div className="text-white pb-2  text-xl relative w-80p sm:w-full   bg-cardcolor bg-opacity-80 pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
                <div className="bg-lineBlue left-[74%] bottom-[90%] flex items-center bg-opacity-20 w-14 text-sm gap-2 absolute   items-center justify-center rounded">
                  <img src={item.heart} className="h-3 gap-2" /> 30
                </div>
                <img
                  src={item.image}
                  className="pb-2 cursor-pointer active:opacity-50"
                />
                <div className="pb-2">{item.description}</div>
                <div className="pb-2 opacity-60 text-sm  ">
                  {item.timesopened}
                </div>
                <div className="absolute  top-[95%]">
                  <div className="bg-cardcolor cursor-pointer active:opacity-50 relative  text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue ">
                    <img src={item.currency} className="h-4" />
                    Open {item.cost}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : choosetabs === "New" ? (
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="pt-5 relative flex flex-col items-center"
            >
              <div className="text-white pb-2  text-xl relative w-80p sm:w-full   bg-cardcolor bg-opacity-80 pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
                <img
                  src={item.image3}
                  className="pb-2 w-40 cursor-pointer active:opacity-50"
                />
                <div className="pb-2">{item.description}</div>
                <div className="absolute top-[93%]  ">
                  <div className="bg-cardcolor cursor-pointer active:opacity-50   text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue ">
                    <img src={item.currency} className="h-4" />
                    Open {item.cost}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : choosetabs === "Trending" ? (
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="pt-5 relative flex flex-col items-center"
            >
              <div className="text-white pb-2  text-xl relative w-80p sm:w-full   bg-cardcolor bg-opacity-80 pt-5 pb-2  items-center flex flex-col border-t border-x  border-lineBlue border-l ">
                <img
                  src={item.image2}
                  className="pb-2 w-80 cursor-pointer active:opacity-50"
                />
                <div className="pb-2">{item.description}</div>
                <div className="absolute top-[93%]  ">
                  <div className="bg-cardcolor cursor-pointer active:opacity-50   text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue ">
                    <img src={item.currency} className="h-4" />
                    Open {item.cost}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null} */}
      {/* <div className="grid w-full  grid-cols-6 gap-6">
        {Cards.map((item, index) => (
          <div
            key={index}
            className="pt-5 relative flex flex-col items-center "
          >
            <div className="text-white pb-2 text-xl  bg-cardcolor bg-opacity-80 pt-5 pb-2 w-48 items-center flex flex-col border-t-2 border-x-2 border-h-10 border-lineBlue border-l- ">
              <div className="bg-lineBlue flex items-center bg-opacity-20 w-14 text-sm gap-2 absolute top-7 left-32  items-center justify-center rounded"><img src={item.heart} className="h-3 gap-2"/> 30 </div>
              <img src={item.image} className="h-28 pb-2 cursor-pointer active:opacity-50" />
              <div className="pb-2">{item.description}</div>
              <div className="pb-2 opacity-60 text-sm  ">{item.timesopened}</div>
              <div className="absolute  top-52  left-7">
                <div className="bg-cardcolor cursor-pointer active:opacity-50 relative  text-sm items-center p-2 flex bg-opacity-80 border-2 border-lineBlue ">
                  <img src={item.currency} className="h-4" />
                  Open {item.cost}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="flex w-full justify-between mt-20 items-center">
        <div className="bg-cardcolor  cursor-pointer active:opacity-50 p-3 h-14 flex  items-center rounded-l-xl border-lineBlue border ">
          <img src={images.arrowleft} className="h-3 " />
        </div>
        <div className="flex gap-2">
          {numbers.map((item, index) => (
            <div
              key={index}
              className="text-white bg-cardcolor p-2 w-10 text-center rounded cursor-pointer active:opacity-50"
            >
              {item.number}
            </div>
          ))}
        </div>
        <div>
          <div className="bg-cardcolor cursor-pointer active:opacity-50   p-3 h-14 flex  items-center rounded-r-xl border-lineBlue border ">
            <img src={images.arrowright} className="h-3 " />
          </div>
        </div>
      </div> */}
    </div>
  );
}
