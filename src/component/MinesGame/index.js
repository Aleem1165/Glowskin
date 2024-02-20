import { useState, useEffect } from "react";
import images from "../../utilities/images";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function debounce(func, delay) {
  console.log("work2");

  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function MinesGame() {
  const [height, setHeight] = useState(null);
  const [amount, setAmount] = useState(0.01);
  const [mines, setMines] = useState(1);
  const handleOnChange = (value) => {
    setMines(value);
  };

  useEffect(() => {
    console.log("work");
    const calculateHeights = () => {
      const firstDivHeight = document.getElementById("firstDiv").offsetHeight;
      const secondDivHeight = document.getElementById("secondDiv").offsetHeight;
      const maxHeight = Math.max(firstDivHeight, secondDivHeight);
      setHeight(maxHeight);
    };

    // Initial calculation
    calculateHeights();

    // Debounced height recalculation
    const debouncedCalculateHeights = debounce(calculateHeights, 100);

    // Recalculate heights on window resize
    window.addEventListener("resize", debouncedCalculateHeights);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", debouncedCalculateHeights);
    };
  }, [amount, mines]);

  return (
    <div className="mt-10 flex md:flex-row flex-col items-start justify-between w-full h-full">
      <div
        id="firstDiv"
        className="bg-paymentModalBg px-4 pt-6"
        style={{ height: height }}
      >
        <div className="text-white text-sm mb-1">Amount</div>
        <div className="flex flex-row items-center justify-between w-[250px]">
          <div className="flex flex-row items-center">
            <img src={images.coin} className="w-4" />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-white text-xs py-1 pl-1 focus:outline-none  bg-lineBlue bg-opacity-20 border border-lineBlue ml-3 w-16"
            />
          </div>
          <div className="flex flex-row items-center">
            <div className=" bg-lineBlue bg-opacity-20 border border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 cursor-pointer active:opacity-70">
              1/2
            </div>
            <div className=" bg-lineBlue bg-opacity-20 border border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 cursor-pointer active:opacity-70">
              x2
            </div>
            <div className=" bg-lineBlue bg-opacity-20 border border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 cursor-pointer active:opacity-70">
              Min
            </div>{" "}
            <div className=" bg-lineBlue bg-opacity-20 border border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 cursor-pointer active:opacity-70">
              Max
            </div>
          </div>
        </div>
        <div className="text-white text-sm mb-1 mt-10">Mines</div>
        <div className="flex flex-row items-center mt-2 ">
          <input
            value={mines}
            onChange={(e) => setMines(e.target.value)}
            className="bg-lineBlue focus:outline-none bg-opacity-20 border mr-2 border-lineBlue ml-1 text-white text-xs flex items-center justify-center w-8 py-1 pl-1"
          />
          <Slider
            className="bg-transparent"
            min={1}
            max={24}
            value={mines}
            onChange={(newValue) => setMines(newValue)}
            trackStyle={{ backgroundColor: "#0CAAF3" }}
          />
        </div>
      </div>
      <div
        id="secondDiv"
        className="bg-blue3 grid grid-cols-5 gap-3 px-2 lg:px-[5%] xl:px-[10%]"
      >
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
        <img src={images.minesCard} />
      </div>
    </div>
  );
}

export default MinesGame;
