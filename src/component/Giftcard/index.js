import React, { useState } from "react";
import images from "../../utilities/images";
import "../../App.css";

export default function Gifycard() {
  const [tab, setTab] = useState("receive");

  return (
    <div className="w-70p md:w-50p">
      <div className="w-full bg-paymentModalBg p-4">
        <div className="flex flex-row items-center ">
          <img src={images.pPay} className="w-10 h-10 bg-transparent" />
          <div className="text-xs ml-2 font-semibold">
            <div className="text-white text-sm">Giftcard</div>
            <div className="text-lineBlue">1 USD = 1.46</div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-2 mt-8">
          <div
            onClick={() => setTab("receive")}
            className={
              tab === "receive"
                ? "bg-blue3 border border-lineBlue text-sm text-white cursor-pointer px-2 py-1 rounded-lg"
                : "bg-blue3 text-sm text-white cursor-pointer px-2 py-1 rounded-lg hover:opacity-50"
            }
          >
            Receive
          </div>
          <div
            onClick={() => setTab("g2a")}
            className={
              tab === "g2a"
                ? "bg-blue3 border border-lineBlue text-sm text-white cursor-pointer px-2 py-1 rounded-lg"
                : "bg-blue3 text-sm text-white cursor-pointer px-2 py-1 rounded-lg hover:opacity-50"
            }
          >
            G2A
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          <img
            src={images.giftcard}
            className="md:w-32 w-full cursor-pointer hover:opacity-80"
          />
          <img
            src={images.giftcard}
            className="md:w-32 w-full cursor-pointer hover:opacity-80"
          />
          <img
            src={images.giftcard}
            className="md:w-32 w-full cursor-pointer hover:opacity-80"
          />
          <img
            src={images.giftcard}
            className="md:w-32 w-full cursor-pointer hover:opacity-80"
          />
          <img
            src={images.giftcard}
            className="md:w-32 w-full cursor-pointer hover:opacity-80"
          />
          <img
            src={images.giftcard}
            className="md:w-32 w-full cursor-pointer hover:opacity-80"
          />
          <img
            src={images.giftcard}
            className="md:w-32 w-full cursor-pointer hover:opacity-80"
          />
          <img
            src={images.giftcard}
            className="md:w-32 w-full cursor-pointer hover:opacity-80"
          />
        </div>

        <div className="w-full mt-8">
          <input
            type="number"
            placeholder="Card Number"
            className="w-full focus:outline-none bg-transparent text-white border-b border-lineBlue border-opacity-50 pb-1 text-sm placeholder-white placeholder-opacity-50"
          />
        </div>
        <div className="w-80p bg-yellow mx-auto mt-5 mb-1 flex items-center justify-center text-sm text-black font-bold py-2 rounded-md cursor-pointer active:opacity-70">
          Redeem Card
        </div>
      </div>
    </div>
  );
}
