import React, { useState } from "react";
import images from "../../utilities/images";
import "../../App.css";

export default function Neteller() {
  const [pay, setPay] = useState(5);
  const [received, setReceived] = useState(7.3);

  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value); // Ensure value is parsed as a float
    setPay(value);
    const receivedValue = value * 1.46;
    const formattedReceivedValue =
      receivedValue % 1 === 0
        ? receivedValue.toFixed(0)
        : receivedValue.toFixed(2);
    setReceived(formattedReceivedValue);
  };

  return (
    <div className="-70p md:w-50p">
      <div className="w-full bg-paymentModalBg p-4">
        <div className="flex flex-row items-center ">
          <img src={images.neteller} className="w-16 h-5 bg-transparent" />
          <div className="text-xs ml-2 font-semibold">
            <div className="text-white text-sm">Neteller</div>
            <div className="text-lineBlue">1 USD = 1.46</div>
          </div>
        </div>
        <div className="w-full flex flex-row  gap-4">
          <div className="w-50p mt-3">
            <div
              className={
                !pay || pay < 5 || pay > 500
                  ? "text-red text-sm mb-1 font-semibold"
                  : "text-white text-sm mb-1 font-semibold"
              }
            >
              Pay
            </div>
            <div
              className={
                !pay || pay < 5 || pay > 500
                  ? "flex flex-row items-center justify-center bg-inputBG px-1 py-1 rounded-sm border border-red"
                  : "flex flex-row items-center justify-center bg-inputBG px-1 py-1 rounded-sm"
              }
            >
              <img src={images.dollar} className="w-5 h-5" />
              <input
                className="w-full focus:outline-none pl-2 bg-transparent text-white"
                type="number"
                value={pay}
                onChange={handleInputChange}
              />
            </div>
            {(!pay || pay < 5 || pay > 500) && (
              <div className="text-red text-sm mb-1 font-semibold">
                Min: 5.00, Max: 500.00
              </div>
            )}
          </div>
          <div className="w-50p mt-3 ">
            <div className="text-white text-sm mb-1 font-semibold">Receive</div>
            <div className="flex flex-row items-center justify-center bg-inputBG px-1 py-1 rounded-sm">
              <img src={images.coin} className="w-5 h-5" />
              <input
                className="w-full focus:outline-none pl-2 bg-transparent text-white"
                type="number"
                value={received}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4 mt-5">
          <div className="w-50p ">
            <input
              type="text"
              placeholder="First Name"
              className="w-80p focus:outline-none bg-transparent text-white border-b border-lineBlue border-opacity-50 pb-1 text-sm placeholder-white placeholder-opacity-50"
            />
          </div>
          <div className="w-50p">
            <input
              type="text"
              placeholder="Last Name"
              className="w-80p focus:outline-none bg-transparent text-white border-b border-lineBlue border-opacity-50 pb-1 text-sm placeholder-white placeholder-opacity-50"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <input
            type="text"
            placeholder="Email"
            className="w-full focus:outline-none bg-transparent text-white border-b border-lineBlue border-opacity-50 pb-1 text-sm placeholder-white placeholder-opacity-50"
          />
        </div>
        <div className="w-80p bg-yellow mx-auto mt-4 flex items-center justify-center text-sm text-black font-bold py-2 rounded-md cursor-pointer active:opacity-70">
          Pay With Zen
        </div>
      </div>
      <div className="text-xs text-white mt-3">
        <p>
          The payments via ZEN will be not accepted in Belgium, China, Japan,
          The Netherlands and the Isle of Man, Taiwan, Thailand, Switzerland,
          Norway, Denmark, Singapore. You will be redirected to complete the
          payment. It may take up to a few minutes to receive the funds. If you
          need help, do not hesitate to contact our support.
        </p>
        <p className="mt-2">
          Payments may be handled on behalf of Rust Glowskin Entertainment Ltd,
          registration number HE439425, located at Thermistokli Dervi, 48, 3rd
          Floor, Office 306, 1065, Nicosia, Cyprus.
        </p>
      </div>
    </div>
  );
}
