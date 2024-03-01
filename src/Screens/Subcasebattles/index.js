import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import images from "../../utilities/images";

export default function Subcasebattle() {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl pb-20  mx-auto flex  flex-col items-start mt-5p px-5">
      <div className="text-white font-bold w-72  text-xl border-b-4 border-lineBlue">
        <div className="pb-2">CS2 & CS:GO Case Battles</div>
      </div>
      <div className="pt-4">
        <div className="w-10">
          <div
            className="bg-backarrowcolor items-center flex  h-10 p-3 rounded cursor-pointer active:opacity-50 "
            onClick={() => navigate("/cases/Classic")}
          >
            <img src={images.backArrow} className="h-3 w-full " />
          </div>
        </div>
        <div className="ml-4 w-full bg-darkercodemode">
          <div className="mt-2 text-white w-full font-semibold  p-4 flex">
            <img src={images.coin} className="h-7" />
            <div>544.67</div>
          </div>
        </div>
      </div>
    </div>
  );
}
