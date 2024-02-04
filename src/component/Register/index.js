import React from "react";
// import Line from "../HomeLine";
import images from "../../utilities/images";

export default function Register({ onClose }) {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the parent div
  };
  return (
    <div className=" w-full flex flex-col mt-1.5" onClick={handleClick}>
      <input
        placeholder="Username"
        className="focus:outline-none border-b-2 border-lineColor pl-1 text-sm bg-transparent text-white text-opacity-50 placeholder-white placeholder-opacity-50 pb-1 mt-2"
      />
      <input
        placeholder="Email"
        className=" mt-4 focus:outline-none border-b-2 border-lineColor pl-1 text-sm bg-transparent text-white text-opacity-50 placeholder-white placeholder-opacity-50 pb-1"
      />
      <input
        placeholder="Password"
        className=" mt-4 focus:outline-none border-b-2 border-lineColor pl-1 text-sm bg-transparent text-white text-opacity-50 placeholder-white placeholder-opacity-50 pb-1"
      />
      <input
        placeholder="Repeat Password"
        className=" mt-4 focus:outline-none border-b-2 border-lineColor pl-1 text-sm bg-transparent text-white text-opacity-50 placeholder-white placeholder-opacity-50 pb-1"
      />
      <div className="flex flex-row text-xs items-start mt-4 text-white">
        <input type="checkbox" className="mt-0.5 mr-2 " />
        <p>
          I attest that I am at least 18 years old and have read and agree with
          the Terms of Service.
        </p>
      </div>
      <div className="bg-yellow  text-center mt-4 pt-2 pb-2 rounded-md cursor-pointer active:opacity-50 font-semibold">
        Register
      </div>
    </div>
  );
}
