import React from "react";
import images from "../../utilities/images";

export default function CheckItOut() {
  return (
    <div
      className="flex pb-3 mt-16 flex-col bg-black border-r border-l border-t border-lineBlue relative items-center justify-end w-full mx-auto h-[180px] bg-cover bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url(${images.checkItOutBG})`,
      }}
    >
      <img
        src={images.checkItOutImg}
        // w-29p
        className="w-[290px] bottom-1 absolute mr-4"
      />
      <div className="bg-yellow text-sm px-3 py-1 font-semibold z-10 cursor-pointer active:opacity-50">
        Check it out
      </div>
    </div>
  );
}
